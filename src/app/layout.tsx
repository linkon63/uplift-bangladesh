import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Uplift Bangladesh | International Documentary Filmmaker & Development Media",
  description:
    "Bangladesh's leading development-focused media and documentary platform. Documenting progress, infrastructure, mega-projects, innovation, and shaping global perception.",
  openGraph: {
    title: "Uplift Bangladesh | International Documentary Filmmaker & Development Media",
    description:
      "Bangladesh's Best Development Content Creator. Documenting progress, infrastructure, mega-projects, innovation, and shaping global perception.",
    url: "https://www.youtube.com/@UpliftBangladesh",
    siteName: "Uplift Bangladesh",
    images: [
      {
        url: "/assets/img/logo/logo.png",
        width: 1000,
        height: 1000,
        alt: "Uplift Bangladesh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uplift Bangladesh | International Documentary Filmmaker",
    description:
      "Bangladesh's Best Development Content Creator. Inspiring Bangladesh, shaping global perception, and empowering national progress.",
    images: ["/assets/img/logo/logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/img/logo/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/img/logo/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/img/logo/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/img/logo/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="w-mod-js w-mod-ix3"
      data-wf-domain="upliftbangladesh.com"
      data-wf-page="69f9c76e84333229e651e8e2"
      data-wf-site="69f9c76884333229e651e7bc"
    >
      <body suppressHydrationWarning>
        {children}
        <Script
          src="/vendors/jquery/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendors/webflow/gsap/3.15.0/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendors/webflow/gsap/3.15.0/SplitText.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendors/webflow/gsap/3.15.0/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/js/webflow.870bd618.475ada7d0632014b.js"
          strategy="afterInteractive"
        />
        <Script
          src="/scripts/cosmos-runtime.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
