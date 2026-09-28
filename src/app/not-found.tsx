import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f4f6] text-[#0f1011] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[#EE3028] font-extrabold text-7xl mb-2 font-mono">
          404
        </div>
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-zinc-600 mb-8 text-sm leading-relaxed">
          The page you are looking for doesn&#x27;t exist or has been moved. Explore our latest mega-project documentaries and brand films.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0f1011] text-white font-medium text-sm hover:bg-[#EE3028] transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
