import { generateMetadata } from "@/lib/metadata";
import ContactItem from "@/components/ContactItem";
import { contactItems } from "@/data/contact";

export const metadata = generateMetadata({
  title: "Contact - Joel Grimaldi",
  description: "Get in touch with Joel",
});

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-96">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Contact</h1>

      <div className="max-w-2xl">
        <div className="bg-zinc-900 rounded-lg p-6 space-y-4">
          {contactItems.map((item) => (
            <ContactItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
