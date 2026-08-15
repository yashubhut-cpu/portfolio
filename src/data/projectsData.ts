import bctImg from "../assets/projects/bct.svg";
import mhcAdminImg from "../assets/projects/mhc-admin.svg";
import mhcMobileImg from "../assets/projects/mhc-mobile-app.png";
import mhcPcaImg from "../assets/projects/mhc-pca.png";
import ringReadyImg from "../assets/projects/ringsready.svg";
import ozshutImg from "../assets/projects/ozshut.png";
import phsImg from "../assets/projects/phs.png";
import zcrmImg from "../assets/projects/zcrm.svg";
import fitnovaImg from "../assets/projects/fitnova.png";
import aksharartImg from "../assets/projects/aksharart.svg";
import fwgImg from "../assets/projects/fwg.png";
import invoiceGeneratorImg from "../assets/projects/invoice-generator.svg";
import lotterySiteImg from "../assets/projects/lottery-site.png";
import lotteryAppImg from "../assets/projects/lottery-app.png";
import rbxCounterImg from "../assets/projects/rbxcounter.png";
import ffskinImg from "../assets/projects/ffskin.png";
import itWebsiteImg from "../assets/projects/it-website.jpg";
import designSystemImg from "../assets/projects/design-system.svg";
import { Project } from "../types";

// Complete 18 portfolio projects with project-specific image mappings
export const projectsData: Project[] = [
  {
    id: "bct",
    image: bctImg,
    isLogo: true,
    title: "Base Camp Trading (BCT)",
    description:
      "Financial trading education dashboard and community hub featuring real-time market indicators, video learning modules, and member trading rooms.",
    tags: ["Next.js", "React", "Redux", "Tailwind CSS"],
    category: "Full-Stack",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: true,
  },
  {
    id: "mhc-admin",
    image: mhcAdminImg,
    isLogo: true,
    title: "MHC Healthcare Admin Panel (mhc-admin)",
    description:
      "Comprehensive administrative portal for Men's Health Clinic, designed to manage doctor schedules, patient EMR records, digital prescriptions, and billing workflows.",
    tags: ["React.js", "Material UI", "Redux Toolkit", "Chart.js"],
    category: "Frontend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: true,
  },
  {
    id: "mhc-mobile-app",
    image: mhcMobileImg,
    isLogo: true,
    title: "MHC Patient Telehealth App (mhc-mobile-app)",
    description:
      "Cross-platform patient mobile application enabling secure appointment scheduling, virtual telehealth consultations, and digital health record access.",
    tags: ["React Native CLI", "Expo Go", "TypeScript", "Redux"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: true,
  },
  {
    id: "mhc-pca",
    image: mhcPcaImg,
    isLogo: true,
    title: "MHC Desktop Web Portal & PCA (mhc-pca)",
    description:
      "Desktop web portal allowing patients to complete medical self-assessments, access clinical records, and manage billing details online.",
    tags: ["Next.js", "React", "REST API", "Tailwind CSS"],
    category: "Full-Stack",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "ringready",
    image: ringReadyImg,
    isLogo: true,
    title: "RingsReady AI Voice Agent & APIs (RingReady)",
    description:
      "Operational management console & backend API service for AI voice receptionist agents, enabling call log tracking, script editing, and custom call routing.",
    tags: ["Next.js", "React", "Node.js", "WebSockets"],
    category: "Full-Stack",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: true,
  },
  {
    id: "ozshut-portal",
    image: ozshutImg,
    isLogo: true,
    title: "OZshut ERP Admin Portal (OzShut-Portal)",
    description:
      "Administrative portal for a roller shutter company, handling sales lead pipelines, site quote generation, invoicing, and installer dispatch.",
    tags: ["React.js", "Tailwind CSS", "Chart.js", "REST Integration"],
    category: "Frontend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "phs",
    image: phsImg,
    isLogo: true,
    title: "PHS Backend Inspection Service (PHS)",
    description:
      "High-throughput REST API backend service managing asset inspection records, database audits, user authorization, and resource distribution.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    category: "Backend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "zcrm-apis",
    image: zcrmImg,
    isLogo: true,
    title: "ZCRM Backend API Integration (ZCRM-APIs)",
    description:
      "Microservice backend engine connecting CRM platforms with third-party webhooks, lead distribution pipelines, and automated reporting.",
    tags: ["Node.js", "Express.js", "REST APIs", "CRM Integration"],
    category: "Backend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: true,
  },
  {
    id: "fitnova-app",
    image: fitnovaImg,
    isLogo: true,
    title: "Fitnova Health & Fitness App (Fitnova-app)",
    description:
      "Activity tracking mobile application featuring workout logging, custom meal planning algorithms, and daily calorie summaries.",
    tags: ["React Native CLI", "TypeScript", "Redux Toolkit", "SVG Charts"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: true,
  },
  {
    id: "aksharart-portal",
    image: aksharartImg,
    isLogo: true,
    title: "AksharArt Commercial Portal (AksharArt-Portal)",
    description:
      "Logistics and harvest tracking dashboard for commercial berry growers, tracking field hours, fruit yield metrics, and retail distribution operations.",
    tags: ["React.js", "Tailwind CSS", "Recharts", "REST Integration"],
    category: "Frontend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "fwg-app",
    image: fwgImg,
    isLogo: true,
    title: "FWG HR Assistant App (fwg-app)",
    description:
      "Lightweight employee HR companion app enabling check-in logging, time tracking, vacation requests, and corporate announcements.",
    tags: ["React Native CLI", "JavaScript", "Context API", "Local Storage"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "invoice-generator",
    image: invoiceGeneratorImg,
    isLogo: true,
    title: "Invoice Generator Tool (invoice-generator)",
    description:
      "Dynamic commercial invoice generation utility enabling businesses to create, preview, and export itemized invoices to PDF format.",
    tags: ["React.js", "JavaScript", "CSS3", "Local Storage"],
    category: "Frontend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "lottery-site",
    image: lotterySiteImg,
    isLogo: true,
    title: "Online Lottery Portal (lottery-site)",
    description:
      "Web application displaying real-time lottery draw results, winning number archives, and ticket verification tools.",
    tags: ["Next.js", "React", "Tailwind CSS", "REST API"],
    category: "Full-Stack",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "lottery-app",
    image: lotteryAppImg,
    isLogo: true,
    title: "Lottery Companion Mobile App (lottery-app)",
    description:
      "Mobile application providing users with instant notifications for lottery draw outcomes, ticket verification, and historical draw analytics.",
    tags: ["React Native", "JavaScript", "React Navigation", "API Sync"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "rbxcounter",
    image: rbxCounterImg,
    isLogo: true,
    title: "RBX Counter & Exchange App (RBXCounter)",
    description:
      "Utility companion app allowing users to calculate virtual currency exchanges, track achievements, and participate in interactive trivia.",
    tags: ["React Native CLI", "JavaScript", "Google AdMob", "Context API"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "ffskin",
    image: ffskinImg,
    isLogo: true,
    title: "FFSkin Mobile Application (FFSkin)",
    description:
      "Mobile utility app for game skin visualization, offering diamond calculators, configuration previews, and interactive toolkits.",
    tags: ["React Native CLI", "JavaScript", "AdMob SDK", "React Navigation"],
    category: "Mobile",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "it-website",
    image: itWebsiteImg,
    isLogo: false,
    title: "IT Corporate Services Website (it-website / Website)",
    description:
      "High-performance, SEO-optimized corporate marketing website designed to showcase IT consulting services, portfolio highlights, and lead generation tools.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Frontend",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
  {
    id: "design-system",
    image: designSystemImg,
    isLogo: true,
    title: "Mobile UI/UX Design System",
    description:
      "High-fidelity UI mockups, interactive prototypes, and reusable component libraries created for next-generation web and mobile products.",
    tags: ["Figma", "UI/UX Design", "Wireframes", "Design System"],
    category: "Design",
    link: "#",
    github: "https://github.com/yashubhut-cpu",
    isFeatured: false,
  },
];

export const featuredProjects: Project[] = projectsData.filter(
  (p) => p.isFeatured
);
