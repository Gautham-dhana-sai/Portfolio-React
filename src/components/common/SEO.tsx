import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Pandiri Goutham Dhana Sai Reddy - Full Stack Developer with 4 years of experience building scalable web applications and microservices."
}) => {
  useEffect(() => {
    document.title = `${title} | Pandiri Goutham Dhana Sai Reddy`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Scroll to top on page render
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
};
