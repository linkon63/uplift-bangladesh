# Requirements Document

## Introduction

This feature updates all user-visible content across the existing Next.js website to reflect the **Uplift Bangladesh** brand. The design, layout, animations, and component structure remain entirely unchanged — only text, labels, logo references, contact information, statistics, service descriptions, client names, social links, and other brand-specific copy are replaced with Uplift Bangladesh content.

Uplift Bangladesh is Bangladesh's leading documentary filmmaking and development content platform, covering mega-infrastructure projects, smart cities, industrial manufacturing, and economic development. The site serves as the primary digital presence for the brand, targeting educated professionals, decision-makers, engineers, government officials, and infrastructure enthusiasts.

---

## Glossary

- **Uplift_Bangladesh**: The brand being represented — a documentary filmmaking and development content platform based in Dhaka, Bangladesh.
- **Website**: The existing Next.js single-page site comprising Navbar, HeroSection, ClientsSection, WorksSection, ServicesSection, AboutSection, WhyChooseUsSection, TestimonialsSection, CtaSection, and Footer components.
- **Content**: Any user-visible text, logo references, image alt text, contact details, statistics, service names, client names, social media links, and metadata within the Website.
- **Layout**: The structural arrangement of HTML elements, CSS classes, animations, and Webflow interactions — which must not change.
- **Mega_Projects**: Notable large-scale infrastructure projects documented by Uplift Bangladesh (Padma Bridge, Dhaka Metro Rail, etc.).
- **Production_Services**: The paid film and media production offerings of Uplift Bangladesh.
- **Sponsorship_Package**: A defined tier of sponsored content with a fixed price and volume.
- **Client**: An organisation that has previously engaged Uplift Bangladesh for content, sponsorship, or production work.

---

## Requirements

### Requirement 1: Page Metadata and SEO Content

**User Story:** As a visitor discovering the site via search, I want the page title, description, and social preview tags to reflect Uplift Bangladesh, so that search results and link previews accurately represent the brand.

#### Acceptance Criteria

1. THE Website SHALL display the page title "Uplift Bangladesh | Documentary Filmmaker & Development Content Creator".
2. THE Website SHALL display the meta description "Bangladesh's most trusted platform for mega-infrastructure documentaries, corporate films, and development storytelling. 451K+ YouTube subscribers. 681K+ Facebook followers."
3. THE Website SHALL render the following Open Graph and Twitter Card meta tags with exactly these values:
   - `og:title` = "Uplift Bangladesh | Documentary Filmmaker & Development Content Creator"
   - `og:description` = "Bangladesh's most trusted platform for mega-infrastructure documentaries, corporate films, and development storytelling."
   - `og:image` = an absolute URL resolving to `/assets/img/logo/logo.png`
   - `og:type` = "website"
   - `twitter:card` = "summary_large_image"
   - `twitter:title` = "Uplift Bangladesh | Documentary Filmmaker & Development Content Creator"
   - `twitter:description` = "Bangladesh's most trusted platform for mega-infrastructure documentaries, corporate films, and development storytelling."
4. WHEN a user navigates to the root URL, THE Website SHALL render a page identified by the `lang` attribute "en".

---

### Requirement 2: Navbar — Brand Identity and Navigation

**User Story:** As a visitor, I want the navigation bar to display the Uplift Bangladesh logo and relevant navigation links, so that I can identify the brand and navigate the site's sections.

#### Acceptance Criteria

1. THE Navbar SHALL display the Uplift Bangladesh logo image sourced from `/assets/img/logo/logo.png` with alt text "Uplift Bangladesh logo".
2. THE Navbar SHALL display a brand descriptor element that cycles through exactly four labels — "Documentary Filmmaker", "Development Content Creator", "Mega-Projects Influencer", and "Bangladesh's #1 Brand" — displaying one label at a time, in that sequential order, repeating continuously.
3. WHEN a visitor activates the "Services" dropdown trigger, THE Navbar SHALL display a dropdown containing exactly: "Documentary Films", "Corporate Brand Films", "Drone Cinematography".
4. WHEN a visitor activates the "Focus Areas" dropdown trigger, THE Navbar SHALL display a dropdown containing exactly: "Mega Infrastructure", "Smart Cities", "Industrial Manufacturing".
5. THE Navbar SHALL display a navigation link labelled "Works" that navigates the visitor to the works section of the page.
6. THE Navbar SHALL display a contact button labelled "Get in Touch" that opens a new email addressed to `upliftbd.media@gmail.com`.
7. WHEN a visitor activates the mobile menu trigger, THE Navbar SHALL display a mobile menu containing the same "Services" and "Focus Areas" links, and social links for YouTube (https://www.youtube.com/@UpliftBangladesh) and Facebook (https://www.facebook.com/UpliftBangladesh), each with a resolvable href.
8. THE Navbar SHALL use the aria-label "Uplift Bangladesh — home" on the logo anchor element.

---

### Requirement 3: Hero Section — Brand Statement

**User Story:** As a first-time visitor, I want the hero section to immediately communicate who Uplift Bangladesh is and what they do, so that I understand the brand's identity and purpose at a glance.

#### Acceptance Criteria

1. THE HeroSection SHALL display "UPLIFT" as the first word of the largest visible text block on the page.
2. THE HeroSection SHALL display "BANGLADESH" as the second word of the largest visible text block on the page, appearing directly after "UPLIFT".
3. THE HeroSection SHALL simultaneously display all four of the following service descriptor tags: "Documentary Filmmaking", "Corporate Brand Films", "Drone Cinematography", "Mega Project Films".
4. THE HeroSection SHALL display a play/pause control that is keyboard-focusable and responds to activation, preserving the existing video element and its control structure.

---

### Requirement 4: Clients Section — Brand Introduction and Social Proof

**User Story:** As a potential sponsor or partner, I want to see Uplift Bangladesh's reach and credibility at a glance, so that I can quickly assess the platform's value.

#### Acceptance Criteria

1. THE ClientsSection SHALL display the heading "Bangladesh's most trusted platform for development storytelling."
2. THE ClientsSection SHALL display a sub-label reading "WE ARE".
3. THE ClientsSection SHALL display the body description: "Uplift Bangladesh empowers millions through high-impact digital storytelling — documenting the nation's remarkable transformation and inspiring confidence in its future."
4. THE ClientsSection SHALL display the following six audience stats in scrolling brand cards:
   - (01) YouTube: 451,000+ Subscribers
   - (02) Facebook: 681,000+ Followers
   - (03) Combined Reach: 1,000,000+ organic monthly reach
   - (04) Mega Projects Covered: 6+ Nationally Significant Projects
   - (05) Client Portfolio: 30+ National & International Brands
   - (06) Content Focus: Infrastructure, Innovation & Development
5. THE ClientsSection SHALL render the brand card group duplicated at least twice with `aria-hidden="true"` to support the continuous horizontal scroll loop, where the duplicated groups are not keyboard-focusable, and the scroll animation plays without interruption.

---

### Requirement 5: Works Section — Featured Projects

**User Story:** As a visitor, I want to see examples of Uplift Bangladesh's most notable documentary projects, so that I can evaluate the quality and scope of their work.

#### Acceptance Criteria

1. THE WorksSection SHALL display the section heading "Selected Documentaries".
2. THE WorksSection SHALL display exactly 5 featured project cards, each containing a project name, a 4-digit year, and a focus area tag (1-30 characters).
3. THE WorksSection SHALL display the following projects (one card each):
   - "Padma Multipurpose Bridge" — Year: 2022 — Focus: Mega Infrastructure
   - "Dhaka Metro Rail (MRT Line-6)" — Year: 2023 — Focus: Urban Transport
   - "Hazrat Shahjalal Airport — Terminal 3" — Year: 2023 — Focus: Aviation
   - "Bangabandhu Tunnel" — Year: 2024 — Focus: Sub-River Infrastructure
   - "Rooppur Nuclear Power Plant" — Year: 2024 — Focus: Energy
4. WHEN a visitor clicks the "View All Documentaries" button, THE WorksSection SHALL navigate the visitor to the works/projects page.
5. IF the works/projects page fails to load within 5 seconds of the visitor clicking "View All Documentaries", THEN THE WorksSection SHALL display an error message indicating the page could not be reached.

---

### Requirement 6: Services Section — Production Offerings

**User Story:** As a potential client, I want to see the services and focus areas that Uplift Bangladesh offers, so that I can determine whether they are the right production partner for my needs.

#### Acceptance Criteria

1. THE ServicesSection SHALL display the "Services" tab containing exactly 3 production service items:
   - Service 1: "Documentary Filmmaking" — tags: Feature Length, Short-Form, Series, Broadcast, Digital
   - Service 2: "Corporate Brand Films (OVC)" — tags: Corporate Identity, Brand Storytelling, Commercial, TVC, Product Launch
   - Service 3: "Drone Cinematography & Aerial Survey" — tags: Aerial Photography, 4K Video, Survey, Infrastructure, Real Estate
2. THE ServicesSection SHALL display the "Focus Areas" tab containing exactly 5 industry focus area items:
   - Focus 1: "Mega Infrastructure" — tags: Bridges, Tunnels, Roads, Highways, Flyovers
   - Focus 2: "Smart Cities & Urban Development" — tags: Metro Rail, City Planning, Urban Mobility, Public Transport
   - Focus 3: "Industrial Manufacturing" — tags: Factory Films, Industrial Process, RMG Sector, Export Zones
   - Focus 4: "Energy & Sustainability" — tags: Nuclear Power, Solar, Renewable Energy, Power Grid
   - Focus 5: "Real Estate & Hotels" — tags: High-rise, Resort Films, Hotel Films, Commercial Property
3. WHEN a service or focus area item is displayed, THE ServicesSection SHALL render a non-empty description paragraph of at least one sentence relevant to that item.
4. THE ServicesSection SHALL display the tab menu count labels reflecting the correct number of services (3) and focus areas (5).
5. WHEN a visitor clicks the "Services" tab, THE ServicesSection SHALL show the services list and hide the focus areas list.
6. WHEN a visitor clicks the "Focus Areas" tab, THE ServicesSection SHALL show the focus areas list and hide the services list.
7. THE ServicesSection SHALL render with the "Services" tab active by default on initial page load.

---

### Requirement 7: About Section — Organisation Identity

**User Story:** As a visitor wanting to learn more about Uplift Bangladesh, I want the about section to explain the organisation's mission, location, and team identity, so that I feel confident engaging with the brand.

#### Acceptance Criteria

1. THE AboutSection SHALL render the section label "About us" as visible text.
2. THE AboutSection SHALL render the heading "A trusted documentary team documenting Bangladesh's progress and inspiring a nation" as visible text.
3. THE AboutSection SHALL render the paragraph "We're not a generic content creator. We're an embedded documentary team — the longer you partner with us, the deeper our storytelling impact becomes. We focus on the projects that define Bangladesh's future." as visible text.
4. THE AboutSection SHALL render exactly 2 about items in this order: first, an item with title "Bangladesh Based" and description "Operating from Dhaka — deeply embedded in the nation's development story"; second, an item with title "Mission-driven storytelling" and description "We document real progress, build public trust, and inspire national pride".
5. THE AboutSection SHALL render the team grid heading "A dedicated crew of filmmakers and storytellers" as visible text.
6. THE AboutSection SHALL render the team grid sub-label "Not AI-generated content" as visible text.
7. THE AboutSection SHALL render at least 1 team member entry in the team grid, each entry displaying a member name and a member role as visible text.

---

### Requirement 8: Why Choose Us Section — Value Proposition

**User Story:** As a decision-maker considering a sponsorship or production partnership, I want to understand why Uplift Bangladesh is a better partner than alternatives, so that I can justify my investment.

#### Acceptance Criteria

1. THE WhyChooseUsSection SHALL display the section label "Why choose us".
2. THE WhyChooseUsSection SHALL display the heading: "A trusted content partner bringing reach, credibility, and impact to your brand".
3. THE WhyChooseUsSection SHALL display the description: "Transparent sponsorship pricing, authentic storytelling, and a strategy-focused approach to brand visibility."
4. THE WhyChooseUsSection SHALL display a primary call-to-action button labelled "Get in Touch" that links to `mailto:upliftbd.media@gmail.com`.
5. THE WhyChooseUsSection SHALL display a list of at least 3 value proposition feature items, where each item contains a title and a supporting description communicating distinct competitive differentiators such as pricing transparency, storytelling approach, and brand strategy.
6. THE WhyChooseUsSection SHALL display a timeline subsection with the heading "Content Delivery Timeline", a total project duration label of "4 weeks", and exactly 3 sequential stages — each stage showing a stage name and a duration in days — that together sum to no more than 28 days.
7. THE WhyChooseUsSection SHALL display a collaboration chat preview containing exactly 2 messages in sequential order: the first message attributed to the sponsor side reading "Hey! We need a sponsored video for our brand launch", and the second message attributed to the Uplift Bangladesh side reading "We've covered this sector before. What's your timeline?", with the two messages visually distinguished by alignment or styling to indicate different senders.

---

### Requirement 9: Testimonials / Statistics Section — Audience & Reach

**User Story:** As a prospective sponsor, I want to see verified audience reach numbers and platform metrics for Uplift Bangladesh, so that I can assess the value of a partnership.

#### Acceptance Criteria

1. THE TestimonialsSection SHALL display the section heading: "Trusted by brands and organisations across Bangladesh".
2. THE TestimonialsSection SHALL display the following three animated statistics:
   - Stat 1: "451,000+" with description "YouTube Subscribers"
   - Stat 2: "681,000+" with description "Facebook Followers"
   - Stat 3: "30+" with description "National & International Brand Clients"
3. THE TestimonialsSection SHALL NOT display the Clutch widget; the Clutch embed block SHALL be removed or replaced with a placeholder that contains no logo, rating, or review content.
4. WHEN the statistics numbers animate, THE TestimonialsSection SHALL preserve the existing animated number counter structure (number groups with `final-number` class), updating only the digit values — for example, "451,000+" maps to digit groups "4", "5", "1", "0", "0", "0" with a "+" suffix in the `final-number` element.
5. WHEN a statistic counter enters the viewport, THE TestimonialsSection SHALL start the counter animation from 0 and complete it within 2 seconds, ending at the final value defined in criterion 2.

---

### Requirement 10: CTA Section — Conversion

**User Story:** As a visitor ready to engage, I want a clear call to action that invites me to start a partnership with Uplift Bangladesh, so that I know exactly how to take the next step.

#### Acceptance Criteria

1. THE CtaSection SHALL display the heading text "Start your journey with Uplift Bangladesh" as two lines, where the line break occurs after "journey".
2. WHEN a visitor clicks the "Get in Touch" button, THE CtaSection SHALL open the user's default email client with the recipient address pre-filled as `upliftbd.media@gmail.com`, the subject and body fields left empty.
3. IF the visitor's device does not support `mailto:` links, THEN THE CtaSection SHALL display the email address `upliftbd.media@gmail.com` as visible, selectable text alongside the button.

---

### Requirement 11: Footer — Contact, Links, and Legal

**User Story:** As a visitor at the bottom of the page, I want to find complete contact information, navigation links, and social media channels for Uplift Bangladesh, so that I can reach out or follow the brand.

#### Acceptance Criteria

1. THE Footer SHALL display the primary email address `upliftbd.media@gmail.com` as a clickable `mailto:` link.
2. WHEN a visitor activates the clipboard copy trigger next to the email address, THE Footer SHALL copy `upliftbd.media@gmail.com` to the clipboard and display a visible confirmation indicator.
3. THE Footer SHALL display the phone number "01608-427446" as a clickable `tel:` link.
4. THE Footer SHALL display the address "Bashundhara R/A, Dhaka-1229, Bangladesh" as visible text in the contact area.
5. THE Footer SHALL display a Pages links section containing: "Home" and "Works".
6. THE Footer SHALL display a Services links section containing: "Documentary Films", "Corporate Brand Films", "Drone Cinematography".
7. THE Footer SHALL display a Contact links section containing: YouTube (https://www.youtube.com/@UpliftBangladesh), Facebook (with a resolvable href for the Uplift Bangladesh Facebook page), and the email link `upliftbd.media@gmail.com`.
8. THE Footer SHALL display the footer copyright line: "© 2025 Uplift Bangladesh™".
9. THE Footer SHALL display a location card for "Bangladesh, Dhaka" showing the current local time for the Asia/Dhaka timezone.
10. THE Footer SHALL display the large typographic wordmark "UPLIFT BANGLADESH" in the footer brand area.
11. THE Footer SHALL display the "Let's talk" section label.
12. IF a visitor submits the contact form, THEN THE Footer SHALL display the success message "Thank you! Your message has been received!".

---

### Requirement 12: Sponsorship Package Information

**User Story:** As a brand or marketing manager, I want to understand the available sponsorship tiers and pricing, so that I can plan a campaign with Uplift Bangladesh.

#### Acceptance Criteria

1. THE Website SHALL display the following sponsorship packages in a dedicated sponsorship section:
   - Package A: "YouTube Long-Form Sponsored Videos" — 8-10 per month — BDT 15,000 per content
   - Package B: "Facebook Sponsored Short Reels" — 30-40 per month — BDT 5,000 per content, with a minimum order quantity of 5 displayed alongside the price
   - Package C: "Instagram & TikTok" — labelled "Complimentary — available for long-term partnership inquiries"
2. WHEN sponsorship package details are displayed, THE Website SHALL present the price in Bangladeshi Taka (BDT) symbol.

---

### Requirement 13: Notable Projects Coverage List

**User Story:** As a visitor, I want to see a list of the major national projects Uplift Bangladesh has documented, so that I understand the prestige and scale of the platform's work.

#### Acceptance Criteria

1. THE Website SHALL reference the following Mega_Projects in visible content (section heading, card, list item, or descriptive paragraph), with each project appearing as a distinct, individually identifiable entry:
   - Padma Multipurpose Bridge
   - Dhaka Metro Rail (MRT Line-6)
   - Hazrat Shahjalal International Airport — Terminal 3
   - Bangabandhu Sheikh Mujibur Rahman Tunnel
   - Rooppur Nuclear Power Plant
   - Matarbari Deep Sea Port
2. WHEN a project entry is rendered, THE Website SHALL display the full project name as specified in criterion 1, with no characters omitted, no substitution of abbreviations, and no truncation applied by overflow-hiding, ellipsis, or clipping.
3. WHEN a visitor views the Mega_Projects section, THE Website SHALL present all 6 listed projects simultaneously within the same visible section without requiring navigation to a separate page.

---

### Requirement 14: Client Portfolio Display

**User Story:** As a prospective sponsor, I want to see which well-known brands have already worked with Uplift Bangladesh, so that I can trust the platform's credibility.

#### Acceptance Criteria

1. THE ClientsSection SHALL render all of the following client names in the DOM: BSRM, bKash, Seven Rings Cement, Shah Cement, Banglalink, Airtel, Samsung, Nestle, Bangladesh Bridge Authority, Dhaka North City Corporation, Sheltech, Rupayan Group, Holiday Inn.
2. WHEN the client scroll animation is at any point in its cycle, THE Website SHALL display a minimum of 6 client names that are not hidden via `display:none`, `visibility:hidden`, or `aria-hidden="true"`.
3. IF client logo images are not available, THEN THE Website SHALL display the client name as visible text within the existing `clients_name` element (the element must not have `display:none`, `visibility:hidden`, or `opacity:0` applied).

---

### Requirement 15: Logo and Brand Assets

**User Story:** As a visitor, I want every reference to the Cosmos Studio brand to be replaced with Uplift Bangladesh, so that there are no legacy brand remnants on the page.

#### Acceptance Criteria

1. THE Website SHALL source the primary logo from `/assets/img/logo/logo.png` in all locations where a logo image appears (Navbar desktop, Navbar mobile, and any footer logo reference), and each logo's `alt` attribute SHALL be set to "Uplift Bangladesh".
2. THE Website SHALL NOT display any text, image, or alt text that references "Cosmos Studio", "Cosmos", "Ukraine", "UI/UX", or "Miltech" in any user-visible area.
3. WHEN animated descriptor text is present in the Navbar, THE Navbar SHALL cycle only through Uplift Bangladesh identity labels ("Documentary Filmmaker", "Development Content Creator", "Mega-Projects Influencer", "Bangladesh's #1 Brand") and SHALL NOT display any design agency terminology.
4. IF footer social links are present, THEN THE Footer SHALL display only social links belonging to Uplift Bangladesh with resolvable hrefs, and SHALL NOT display links to Behance, LinkedIn (cosmosstudio), or any Cosmos Studio social accounts.
5. IF the `layout.tsx` metadata fields (title, description, openGraph, twitter) are present, THEN THE layout.tsx SHALL set all metadata fields to reference Uplift Bangladesh exclusively, and SHALL NOT expose the Cosmos Studio site name, URL (`www.cosmos.studio`), or Cosmos Studio Open Graph images.
