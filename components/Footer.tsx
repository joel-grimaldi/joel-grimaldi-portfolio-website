
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-sm text-gray-400">
          <p>
            © {currentYear} Joel Grimaldi
          </p>
        </div>
      </div>
    </footer>
  );
}
