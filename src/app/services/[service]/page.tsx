"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCopy = {
  title: string;
  highlight: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  narrative: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  pillars: Array<{ title: string; bullets: string[] }>;
};

const SERVICES_CONTENT: Record<string, ServiceCopy> = {
  industrial: {
    title: "Industrial Spaces",
    highlight: "Industrial",
    heroDescription:
      "Purpose-built industrial campuses engineered for throughput, compliance, and expansion-ready operations.",
    heroImage: "/hero-1.png",
    heroImageAlt: "Modern industrial warehouse facility with loading docks",
    narrative:
      "From logistics parks to manufacturing units, we orchestrate land acquisition, utility design, ESG compliance, and operator onboarding so your facility powers growth from day one.",
    metrics: [
      {
        label: "Footprint Strategy",
        value: "25k–120k sq ft",
        detail: "Flexible plot aggregation and FAR optimisation for multi-phase development.",
      },
      {
        label: "Uptime Planning",
        value: "99.5%",
        detail: "Redundant utilities, EHS protocols, and smart monitoring baked into the blueprint.",
      },
      {
        label: "Ramp-Up Velocity",
        value: "≤90 days",
        detail: "Average handover to go-live through coordinated fit-out & commissioning.",
      },
    ],
    pillars: [
      {
        title: "Land & Infrastructure Readiness",
        bullets: [
          "Identify and secure industrial-zoned land parcels with connectivity advantages.",
          "Engineer internal road, dock, and loading infrastructure for multi-tenant use.",
          "Plan power, water, gas, and waste systems with future-proof capacity.",
        ],
      },
      {
        title: "Compliance & Risk Governance",
        bullets: [
          "Navigate state and central approvals, from MPCB to factory and labour clearances.",
          "Embed fire, HSE, and ESG standards aligned with occupier audits.",
          "Structure leasing and cross-border compliance for global manufacturing tenants.",
        ],
      },
      {
        title: "Tenanting & Asset Performance",
        bullets: [
          "Curate anchor and ancillary tenant mix aligning with logistics corridors.",
          "Build performance dashboards for throughput, uptime, and maintenance KPIs.",
          "Provide lifecycle asset management with resale and expansion advisory.",
        ],
      },
    ],
  },
  hospitality: {
    title: "Hospitality Projects",
    highlight: "Hospitality",
    heroDescription:
      "Destination-driven hotels and resorts crafted with immersive guest journeys, brand expression, and operational resilience.",
    heroImage: "/hero-2.webp",
    heroImageAlt: "Warmly lit hospitality lobby with seating area",
    narrative:
      "We blend market intelligence, concept storytelling, and operator alignment to create hospitality assets that welcome guests, conferences, and communities alike.",
    metrics: [
      {
        label: "Experience Design",
        value: "5-Star Ready",
        detail: "Signature arrivals, F&B zoning, wellness, and event programming engineered in.",
      },
      {
        label: "Yield Optimisation",
        value: "18% RevPAR lift",
        detail: "Benchmark-driven pricing, digital marketing, and loyalty integration.",
      },
      {
        label: "Operator Partnerships",
        value: "Global & Boutique",
        detail: "We negotiate brand agreements and manage onboarding for smooth launches.",
      },
    ],
    pillars: [
      {
        title: "Market Story & Brand Positioning",
        bullets: [
          "Craft guest personas, demand seasons, and brand differentiators.",
          "Shape architectural narratives with interior designers and brand consultants.",
          "Align with hospitality brands or independent concepts, including asset-light models.",
        ],
      },
      {
        title: "Program & Revenue Engineering",
        bullets: [
          "Curate room mix, suites, villas, banqueting, F&B, and wellness offerings.",
          "Model RevPAR, ADR, and GOP to inform investment and debt strategy.",
          "Deploy digital-first go-to-market activations with influencer and travel trade networks.",
        ],
      },
      {
        title: "Pre-Opening & Operations",
        bullets: [
          "Oversee operator onboarding, SOP creation, and talent ramp-up.",
          "Coordinate FF&E/OS&E procurement with sustainability benchmarks.",
          "Launch destination marketing, PR, and event calendars to build loyalty.",
        ],
      },
    ],
  },
  warehouses: {
    title: "Warehouse Solutions",
    highlight: "Warehouses",
    heroDescription:
      "Grade-A warehousing and cold-chain assets engineered for seamless inventory turn and digital visibility.",
    heroImage: "/hero-3.webp",
    heroImageAlt: "Interior of a high-bay warehouse with shelving",
    narrative:
      "We serve 3PLs, e-commerce, pharma, and retail networks with plug-and-play facilities, smart automation, and optimised last-mile access.",
    metrics: [
      {
        label: "Clear Heights",
        value: "12–16 m",
        detail: "High-bay racking layouts plus mezzanine integrations for SKU density.",
      },
      {
        label: "Dock-to-Floor Ratio",
        value: "1:8",
        detail: "Ergonomic docking grids with staging yards and circulation planning.",
      },
      {
        label: "IoT Visibility",
        value: "Real-time",
        detail: "Warehouse management systems, security, and energy analytics ready on day one.",
      },
    ],
    pillars: [
      {
        title: "Logistics Intelligence",
        bullets: [
          "Select micro-markets aligned with highways, ports, and air cargo stations.",
          "Optimise parcel size for cross-docking, fulfilment, or bulk storage formats.",
          "Integrate trucking, workforce, and compliance considerations early.",
        ],
      },
      {
        title: "Technical Design & Automation",
        bullets: [
          "Embed automation readiness—conveyors, AMRs, AS/RS, temperature zones.",
          "Engineer flooring, dock levellers, and structural grid to suit heavy duty operations.",
          "Plan solar, rainwater harvesting, and green certifications for ESG mandates.",
        ],
      },
      {
        title: "Leasing & Lifecycle Management",
        bullets: [
          "Curate tenant rosters, negotiate commercials, and manage SLAs.",
          "Deliver fit-out oversight, repairs, and operational help desks.",
          "Provide reinvestment advisory for expansions or portfolio exits.",
        ],
      },
    ],
  },
  "open-plots": {
    title: "Open Plot Opportunities",
    highlight: "Open Plots",
    heroDescription:
      "Strategic land banks curated for residential, commercial, and mixed-use development pipelines.",
    heroImage: "/hero-2.webp",
    heroImageAlt: "Panoramic view of open land parcel ready for development",
    narrative:
      "We locate, diligence, and structure land parcels with clear titles, infrastructure potential, and master-planning vision tailored to your investment horizon.",
    metrics: [
      {
        label: "Land Assemblies",
        value: "2–50 acres",
        detail: "Modular acquisitions that respect zoning, topography, and future expansion.",
      },
      {
        label: "Title Assurance",
        value: "100% vetted",
        detail: "Legal, revenue, and encumbrance checks with digital documentation trails.",
      },
      {
        label: "Development Frameworks",
        value: "Ready-to-execute",
        detail: "Concept masterplans, FAR utilisation, and phasing models for investors.",
      },
    ],
    pillars: [
      {
        title: "Market Intelligence & Land Scouting",
        bullets: [
          "Analyse catchments, absorption, and infrastructure catalysts.",
          "Identify future corridors for residential townships, retail boulevards, or industrial zones.",
          "Negotiate landowner relationships and joint development models.",
        ],
      },
      {
        title: "Due Diligence & Structuring",
        bullets: [
          "Run end-to-end legal, technical, and environmental diligence.",
          "Structure SPVs, JDs, or outright acquisitions with funding alignment.",
          "Plan regulatory submissions and conversion processes.",
        ],
      },
      {
        title: "Development Roadmap",
        bullets: [
          "Create masterplan options with architects and urban planners.",
          "Craft product strategy, amenities, and phasing for optimal IRR.",
          "Prepare investor decks, feasibility, and exit scenarios.",
        ],
      },
    ],
  },
  office: {
    title: "Office Workspaces",
    highlight: "Office",
    heroDescription:
      "Human-centric workplaces balancing productivity, amenity, and digital infrastructure for enterprise scales.",
    heroImage: "/hero-3.webp",
    heroImageAlt: "Contemporary office workspace with collaborative zones",
    narrative:
      "We deliver Grade-A office towers, tech parks, and hybrid work hubs that prioritise employee wellbeing, brand experience, and ESG compliance.",
    metrics: [
      {
        label: "Flex & Core Mix",
        value: "30/70",
        detail: "Strategically blend collaborative zones with efficient core office plate layouts.",
      },
      {
        label: "Well-being Index",
        value: "WELL & IGBC",
        detail: "Natural light, biophilia, ventilation, and smart building controls embedded.",
      },
      {
        label: "Talent Retention",
        value: "+22%",
        detail: "Experience-led amenities and hospitality-grade services drive culture.",
      },
    ],
    pillars: [
      {
        title: "Design & Brand Alignment",
        bullets: [
          "Craft workplace strategies around headcount, hybrid schedules, and community rituals.",
          "Deliver architectural storytelling that reinforces company DNA.",
          "Integrate AV, IT, and security infrastructure for always-on workflows.",
        ],
      },
      {
        title: "Sustainability & Smart Operations",
        bullets: [
          "Secure green certifications with energy, water, and waste optimisation.",
          "Implement smart building systems with analytics and predictive maintenance.",
          "Plan mobility, parking, and last mile connectivity solutions.",
        ],
      },
      {
        title: "Leasing & Transition",
        bullets: [
          "Lead negotiations, legal documentation, and handover management.",
          "Coordinate fit-out vendors, furniture, and tech deployments.",
          "Provide workplace change management and employee onboarding experiences.",
        ],
      },
    ],
  },
  investments: {
    title: "Investment Advisory",
    highlight: "Investments",
    heroDescription:
      "Real estate investment strategies calibrated for resilient returns, diversification, and risk governance.",
    heroImage: "/hero-1.png",
    heroImageAlt: "Business professionals reviewing investment plans",
    narrative:
      "We advise family offices, funds, and corporates with market entry, portfolio rebalancing, and exit strategies across asset classes.",
    metrics: [
      {
        label: "Opportunity Mapping",
        value: "12+ Cities",
        detail: "Data-backed heat maps across residential, commercial, industrial, and alternative assets.",
      },
      {
        label: "Deal Structuring",
        value: "Equity, Debt, Hybrid",
        detail: "SPVs, REIT-prep, and alliance structuring with tax optimisation.",
      },
      {
        label: "Risk Governance",
        value: "360°",
        detail: "Legal, regulatory, ESG, and market scenario planning embedded in every mandate.",
      },
    ],
    pillars: [
      {
        title: "Strategy & Portfolio Design",
        bullets: [
          "Assess macro trends, micro-markets, and life-cycle phases of assets.",
          "Model cashflows, sensitivity scenarios, and exit timelines.",
          "Craft allocation strategies across income, growth, and opportunistic plays.",
        ],
      },
      {
        title: "Deal Origination & Structuring",
        bullets: [
          "Source exclusive on- and off-market opportunities.",
          "Lead commercial negotiations, diligence, and valuation analysis.",
          "Structure equity, debt, or hybrid instruments aligned to investor mandates.",
        ],
      },
      {
        title: "Asset Management & Exits",
        bullets: [
          "Monitor performance, compliance, and reporting cadence.",
          "Drive asset enhancement, leasing, and re-positioning strategies.",
          "Plan refinancing, divestment, or REIT pathways with investor communication.",
        ],
      },
    ],
  },
};

type ServicePageProps = {
  params: {
    service: string;
  };
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES_CONTENT[params.service];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#4B3A2B]">
      <Navigation />
      <main className="pt-[108px]">
        <section className="relative mx-auto max-w-[1180px] px-6 pb-20 pt-16 sm:px-10 lg:px-16">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FFF5EE] via-white to-[#F9F5F0] px-8 py-16 shadow-[0_40px_120px_rgba(75,58,43,0.16)] sm:px-12 lg:px-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-52 w-52 rounded-full bg-[#FF6B2C]/24 blur-[140px]" />
              <div className="absolute -right-14 -bottom-20 h-72 w-72 rounded-full bg-[#4B3A2B]/18 blur-[160px]" />
            </div>
            <div className="relative z-[1] grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center text-[#4B3A2B]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#4B3A2B] shadow-[0_12px_30px_rgba(255,107,44,0.18)]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF6B2C]" />
                  {service.highlight} Service
                </span>
                <h1 className="text-4xl font-semibold leading-tight text-[#2E2E2E] sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-[#6B6B6B] sm:text-xl">
                  {service.heroDescription}
                </p>
                <p className="max-w-3xl text-base leading-relaxed text-[#6B6B6B]/90 sm:text-lg">
                  {service.narrative}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/40 bg-white/60 shadow-[0_30px_110px_rgba(75,58,43,0.18)]"
              >
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-20 sm:px-10 lg:px-16">
          <div className="grid gap-6 md:grid-cols-3">
            {service.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-[#4B3A2B]/10 bg-white/85 p-6 shadow-[0_25px_80px_rgba(75,58,43,0.12)] backdrop-blur-lg transition hover:-translate-y-1 hover:shadow-[0_35px_110px_rgba(75,58,43,0.16)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF6B2C]">
                  {metric.label}
                </span>
                <h3 className="mt-3 text-3xl font-semibold text-[#2E2E2E]">{metric.value}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5C5247]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-20 sm:px-10 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {service.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-[32px] border border-[#4B3A2B]/12 bg-white/90 p-8 shadow-[0_30px_100px_rgba(75,58,43,0.12)] backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold uppercase tracking-[0.22em] text-[#4B3A2B]/80">
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#4B3A2B]">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#FF6B2C]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

