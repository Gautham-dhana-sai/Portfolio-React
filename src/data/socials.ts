export interface SocialLink {
  id: string;
  name: string;
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone' | 'twitter' | 'instagram' | 'youtube' | 'medium' | 'devto' | 'stackoverflow' | 'globe';
  category: 'primary' | 'social' | 'contact';
  isExternal: boolean;
  displayValue?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    label: "Explore repositories & open-source contributions",
    url: "https://github.com/Gautham-dhana-sai",
    icon: "github",
    category: "primary",
    isExternal: true,
    displayValue: "github.com/Gautham-dhana-sai"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    label: "Connect professionally on LinkedIn",
    url: "https://www.linkedin.com/in/goutham-pandiri-8b89021b1/",
    icon: "linkedin",
    category: "primary",
    isExternal: true,
    displayValue: "linkedin.com/in/goutham-pandiri-8b89021b1"
  },
  {
    id: "email",
    name: "Email",
    label: "Send a direct email message",
    url: "mailto:gautham523sai@gmail.com",
    icon: "email",
    category: "contact",
    isExternal: false,
    displayValue: "gautham523sai@gmail.com"
  },
  {
    id: "phone",
    name: "Phone",
    label: "Direct mobile communication",
    url: "tel:9133683491",
    icon: "phone",
    category: "contact",
    isExternal: false,
    displayValue: "+91 91336 83491"
  }
];

export const getSocialLinkById = (id: string): SocialLink | undefined => {
  return socialLinks.find(link => link.id === id);
};
