export interface Project {
  id: string;
  name: string;
  tagline: string;
  disciplines: string[];
  description: string;
  deliverables: string[];
  accent: string;
  logo?: string;
  invertLogo?: boolean;
  url: string;
  repo: string;
}

export const projects: Project[] = [
  {
    id: "inovient",
    name: "Inovient",
    tagline: "AI SaaS Pricing & Market Strategy",
    disciplines: ["Tech Consulting", "Product", "ROI Modeling", "Competitor Analysis"],
    description:
      "Developing a pricing and cost model for an AI-driven SaaS product through market research, competitor analysis, and ROI modeling, building a sustainable pricing strategy and product positioning framework for Inovient's AI-powered platform.",
    deliverables: [
      "Competitor landscape analysis",
      "Market research framework",
      "ROI & financial projections",
      "Pricing strategy & positioning",
    ],
    accent: "#10B981",
    logo: "/logos/inovient.png",
    invertLogo: true,
    url: "https://inovient.vercel.app/",
    repo: "https://github.com/calebnewtonusc/inovient",
  },
  {
    id: "pallas-care",
    name: "Pallas Care",
    tagline: "Data-Driven Home Care Strategy",
    disciplines: ["Strategy", "Data Analysis", "Tech Recommendations"],
    description:
      "Partnering with a premium non-medical home care agency in Los Angeles County to deliver data analysis-based insights and technology recommendations that improve financial visibility and scalable growth, while preserving their high-touch, person-centered care model.",
    deliverables: [
      "Data analysis & financial insights",
      "Technology stack recommendations",
      "Operational efficiency framework",
      "Scalable growth roadmap",
    ],
    accent: "#9333EA",
    logo: "/logos/pallas.png",
    url: "https://pallas-care-analytics.vercel.app/",
    repo: "https://github.com/calebnewtonusc/pallas-care-analytics",
  },
  {
    id: "immuny",
    name: "Immuny",
    tagline: "Emergency UX Redesign",
    disciplines: ["Mobile App Design", "UX Research", "Figma", "Usability Testing"],
    description:
      "Redesigning Immuny's mobile app interface to minimize cognitive load and ensure users can navigate with minimal thinking time, especially during high-stress allergic reaction emergencies when speed and clarity are critical.",
    deliverables: [
      "UX research & usability interviews",
      "Figma prototype & design system",
      "Low-cognitive-load UI redesign",
      "Color & visual hierarchy overhaul",
    ],
    accent: "#3B82F6",
    logo: "/logos/immuny.png",
    url: "https://immuny.vercel.app/",
    repo: "https://github.com/calebnewtonusc/immuny",
  },
];
