import { ReactNode, MouseEvent, Dispatch, SetStateAction } from "react";

export type ProjectCategory =
  | "All"
  | "Full-Stack"
  | "Frontend"
  | "Mobile"
  | "Backend"
  | "Design";

export interface Project {
  id: string;
  image: string;
  isLogo: boolean;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, "All">;
  link: string;
  github: string;
  isFeatured: boolean;
}

export interface NavItem {
  name: string;
  path: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface CareerHighlight {
  period: string;
  role: string;
  details: string;
}

export interface AboutValue {
  icon: string;
  title: string;
  detail: string;
}

export interface AboutHighlight {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export type Theme = "light" | "dark";

export interface UseThemeReturn {
  theme: Theme;
  isDark: boolean;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export interface CardProps {
  image: string;
  isLogo: boolean;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export interface SectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = "" | "sending" | "success" | "error";
