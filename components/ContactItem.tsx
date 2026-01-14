import { ContactItem } from "@/lib/types";

interface ContactItemProps {
  item: ContactItem;
}

export default function ContactItemComponent({ item }: ContactItemProps) {
  const isDownload = item.type === "download";
  const isExternalLink = item.type === "link";

  const baseClasses = isDownload
    ? "inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-md transition-colors"
    : "text-accent hover:text-accent-light transition-colors";

  const linkProps = isExternalLink
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : isDownload
      ? { download: true }
      : {};

  const downloadIcon = item.showIcon ? (
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ) : null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-foreground">
        {item.label}
      </h2>
      <a href={item.href} className={baseClasses} {...linkProps}>
        {downloadIcon}
        {item.displayText}
      </a>
    </div>
  );
}
