import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
}

export const CategoryCard = ({ title, icon: Icon, href }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-200 h-full flex flex-col items-center justify-center text-center cursor-pointer">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
    </Link>
  );
};
