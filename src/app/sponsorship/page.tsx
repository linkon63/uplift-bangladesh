import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmosInteractions from "@/components/CosmosInteractions";
import SponsorshipSection from "@/components/SponsorshipSection";

export const metadata: Metadata = {
  title: "Content Sponsorship Packages & Media Kit | Uplift Bangladesh",
  description:
    "Explore official content sponsorship packages, deliverables, remuneration structure, and brand integration tiers with Uplift Bangladesh — Bangladesh's premier mega-project visual creator.",
  openGraph: {
    title: "Content Sponsorship & Brand Integration | Uplift Bangladesh",
    description:
      "Partner with Bangladesh's #1 mega-project content creator. Multi-platform reach, national brand stature, and documentary-grade storytelling.",
    url: "https://upliftbangladesh.com/sponsorship",
    siteName: "Uplift Bangladesh",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://upliftbangladesh.com/sponsorship",
  },
};

export default function SponsorshipPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="main-wrapper pt-20 sm:pt-24">
        <SponsorshipSection />
      </main>
      <Footer />
      <CosmosInteractions />
    </>
  );
}
