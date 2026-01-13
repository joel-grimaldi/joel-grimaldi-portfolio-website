import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email);
    const message = sanitizeInput(body.message);

    if (name.length < 1 || name.length > 100) {
      return NextResponse.json(
        { error: "Name must be between 1 and 100 characters" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 2000 characters" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "joelgrimaldibusiness@gmail.com";

    const emailContent = `
New contact form submission from ${name}

Email: ${email}
Name: ${name}

Message:
${message}

---
This message was sent from the contact form on joelgrimaldi.com
    `.trim();

    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", {
        name,
        email,
        message: message.substring(0, 100) + "...",
      });
      return NextResponse.json(
        { message: "Message received (development mode)" },
        { status: 200 }
      );
    }

    const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
    const emailServiceApiKey = process.env.EMAIL_SERVICE_API_KEY;

    if (!emailServiceUrl || !emailServiceApiKey) {
      console.error("Email service configuration missing");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    try {
      const emailResponse = await fetch(emailServiceUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${emailServiceApiKey}`,
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: `Contact Form: ${name}`,
          text: emailContent,
          from: email,
        }),
      });

      if (!emailResponse.ok) {
        throw new Error("Failed to send email");
      }

      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email service error:", emailError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}
