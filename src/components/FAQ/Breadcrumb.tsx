import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  categoryTitle: string;
}

export const Breadcrumb = ({ categoryTitle }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <Link to="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground font-medium">{categoryTitle}</span>
    </div>
  );
};
