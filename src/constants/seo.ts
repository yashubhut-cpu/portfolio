export const SITE_URL = "https://yashbhut.in";

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
  ogType?: "website" | "profile" | "article";
}

export const DEFAULT_SEO: PageMetadata = {
  title: "Yash Bhut – Full-Stack & React Native Engineer",
  description:
    "Portfolio of Yash Bhut, a product-minded Full-Stack & React Native Engineer based in Gujarat, India, specializing in React, Next.js, Node.js, and mobile app development.",
  keywords: [
    "Yash Bhut",
    "Full-Stack Engineer",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Engineer",
    "Software Engineer India",
    "Frontend Architect",
    "Web Developer Portfolio",
  ],
  path: "/",
  ogImage: "/hero.png",
  ogType: "website",
};

export const PAGE_SEO: Record<string, PageMetadata> = {
  "/": DEFAULT_SEO,
  "/about": {
    title: "About Yash Bhut – Software & Mobile App Engineer",
    description:
      "Learn about Yash Bhut's background, engineering values, and experience building high-performance web applications and cross-platform mobile products.",
    keywords: [
      "About Yash Bhut",
      "Software Engineer Background",
      "Full-Stack Developer Experience",
      "React Native Specialist",
      "Engineering Principles",
    ],
    path: "/about",
    ogImage: "/hero.png",
    ogType: "profile",
  },
  "/projects": {
    title: "Projects & Portfolio – Yash Bhut",
    description:
      "Explore 18+ web platforms, mobile applications, admin dashboards, and backend API microservices engineered by Yash Bhut.",
    keywords: [
      "Yash Bhut Projects",
      "React Native Apps",
      "Full-Stack Portfolio",
      "Web Applications",
      "Node.js APIs",
      "Telehealth App",
      "AI Voice Agent",
    ],
    path: "/projects",
    ogImage: "/hero.png",
    ogType: "website",
  },
  "/skills": {
    title: "Technical Stack & Expertise – Yash Bhut",
    description:
      "Detailed overview of Yash Bhut's technical toolkit, including React, Next.js, React Native, TypeScript, Node.js, Express, MongoDB, and PostgreSQL.",
    keywords: [
      "Yash Bhut Skills",
      "Frontend Stack",
      "Backend Stack",
      "React Native Toolkit",
      "TypeScript Engineer",
      "DevOps Tools",
    ],
    path: "/skills",
    ogImage: "/hero.png",
    ogType: "website",
  },
  "/contact": {
    title: "Contact Yash Bhut – Full-Stack Engineer",
    description:
      "Get in touch with Yash Bhut for software engineering roles, full-stack product development, or freelance project inquiries.",
    keywords: [
      "Contact Yash Bhut",
      "Hire Full-Stack Engineer",
      "Hire React Native Developer",
      "Software Consultation",
      "Email Yash Bhut",
    ],
    path: "/contact",
    ogImage: "/hero.png",
    ogType: "website",
  },
};

export const PERSON_SCHEMA_DATA = {
  name: "Yash Bhut",
  jobTitle: "Full-Stack & React Native Engineer",
  email: "yashubhut@gmail.com",
  location: "Gujarat, India",
  url: SITE_URL,
  sameAs: [
    "https://github.com/yashubhut-cpu",
    "https://www.linkedin.com/in/yash-bhut/",
    "https://www.instagram.com/mr._yash_bhut/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "React Native CLI",
    "Expo Go",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL",
    "Full-Stack Web Development",
    "Mobile App Engineering",
  ],
};
