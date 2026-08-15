import { useEffect } from "react";
import { SITE_URL, PERSON_SCHEMA_DATA } from "../constants/seo";
import { projectsData } from "../data/projectsData";

interface StructuredDataProps {
  type: "home" | "about" | "projects" | "skills" | "contact";
}

export function StructuredData({ type }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = "json-ld-schema";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSON_SCHEMA_DATA.name,
      "jobTitle": PERSON_SCHEMA_DATA.jobTitle,
      "email": `mailto:${PERSON_SCHEMA_DATA.email}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gujarat",
        "addressCountry": "India",
      },
      "url": SITE_URL,
      "sameAs": PERSON_SCHEMA_DATA.sameAs,
      "knowsAbout": PERSON_SCHEMA_DATA.knowsAbout,
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Yash Bhut Portfolio",
      "description":
        "Portfolio of Yash Bhut, Full-Stack & React Native Engineer based in Gujarat, India.",
      "author": {
        "@id": `${SITE_URL}/#person`,
      },
      "inLanguage": "en-US",
    };

    const schemas: any[] = [personSchema, websiteSchema];

    if (type === "home" || type === "about") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}${type === "about" ? "/about" : ""}#profilepage`,
        "url": `${SITE_URL}${type === "about" ? "/about" : ""}`,
        "name":
          type === "about"
            ? "About Yash Bhut – Software Engineer"
            : "Yash Bhut – Full-Stack & React Native Engineer",
        "mainEntity": {
          "@id": `${SITE_URL}/#person`,
        },
      });
    }

    if (type === "projects") {
      const projectItems = projectsData.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": project.title,
          "description": project.description,
          "applicationCategory":
            project.category === "Mobile"
              ? "MobileApplication"
              : "WebApplication",
          "operatingSystem":
            project.category === "Mobile"
              ? "iOS, Android"
              : "Web Browser",
          "author": {
            "@id": `${SITE_URL}/#person`,
          },
          "keywords": project.tags.join(", "),
          "url": project.github || SITE_URL,
        },
      }));

      schemas.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${SITE_URL}/projects#itemlist`,
        "name": "Yash Bhut Portfolio Projects",
        "description": "Comprehensive list of software engineering projects, mobile apps, and web platforms.",
        "itemListElement": projectItems,
      });
    }

    scriptTag.textContent = JSON.stringify(schemas);

    return () => {
      // Clean up on unmount if needed
      if (scriptTag) {
        scriptTag.textContent = "";
      }
    };
  }, [type]);

  return null;
}

export default StructuredData;
