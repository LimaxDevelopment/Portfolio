import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
  color?: string;
}

interface SocialsProps {
  color?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon: Icon,
  label,
  color = "text-white",
}) => (
  <Button className={color} variant="link" size="icon" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon className="h-4 w-4" />
    </a>
  </Button>
);

export default function Socials({ color }: SocialsProps) {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/maxim-lison-7578252b6",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/LimaxDevelopment",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "mailto:LimaxDevelopment@outlook.be",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className="flex items-center space-x-0 md:space-x-4">
      {socialLinks.map((link, index) => (
        <SocialButton key={index} color={color} {...link} />
      ))}
    </div>
  );
}
