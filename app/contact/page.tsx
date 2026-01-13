import { generateMetadata } from "@/lib/metadata";
import ContactItem from "@/components/ContactItem";
import ContactForm from "@/components/ContactForm";
import { contactItems } from "@/data/contact";

export const metadata = generateMetadata({
  title: "Contact - Joel Grimaldi",
  description: "Get in touch with Joel",
});

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          {contactItems.map((item) => (
            <ContactItem key={item.label} item={item} />
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
