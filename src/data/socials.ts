export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconName: string;
  category: "primary" | "social" | "contact";
}

/**
 * Flexible, data-driven social configuration.
 * Only platforms with a defined, non-empty URL will be rendered.
 * New platforms can be added here seamlessly without rewriting UI components.
 */
export const socialLinksConfig: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Gautham-dhana-sai",
    handle: "Gautham-dhana-sai",
    iconName: "Github",
    category: "primary"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/goutham-pandiri-8b89021b1/",
    handle: "goutham-pandiri",
    iconName: "Linkedin",
    category: "primary"
  },
  {
    id: "leetcode",
    name: "LeetCode",
    url: "https://leetcode.com/u/GouthamDhanaSai/",
    handle: "GouthamDhanaSai",
    iconName: "LeetCode",
    category: "primary"
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/__.ace_?evlk=Nzd0NHk0endlY3Bh&utm_source=qr",
    handle: "__.ace_",
    iconName: "Instagram",
    category: "social"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:gautham523sai@gmail.com",
    handle: "gautham523sai@gmail.com",
    iconName: "Mail",
    category: "contact"
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+919133683491",
    handle: "+91 9133683491",
    iconName: "Phone",
    category: "contact"
  },
  // Future-ready platforms (empty URLs won't be rendered)
  {
    id: "x",
    name: "X (Twitter)",
    url: "",
    handle: "",
    iconName: "Twitter",
    category: "social"
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "",
    handle: "",
    iconName: "Youtube",
    category: "social"
  },
  {
    id: "medium",
    name: "Medium",
    url: "",
    handle: "",
    iconName: "BookOpen",
    category: "social"
  },
  {
    id: "devto",
    name: "Dev.to",
    url: "",
    handle: "",
    iconName: "Code",
    category: "social"
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    url: "",
    handle: "",
    iconName: "Layers",
    category: "social"
  }
];

export const activeSocialLinks = socialLinksConfig.filter(
  (item) => item.url && item.url.trim().length > 0 && item.category !== "contact"
);
