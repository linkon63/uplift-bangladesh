import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://upliftbangladesh.com"),
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
      className="w-mod-js w-mod-ix3"
      data-wf-domain="upliftbangladesh.com"
      data-wf-page="69f9c76e84333229e651e8e2"
      data-wf-site="69f9c76884333229e651e7bc"
    >
      <body>
        {children}
      </body>
    </html>
  );
}
