import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  categoryTitle: string;
  categoryId?: string;
  articleTitle?: string;
}

export const Breadcrumb = ({ categoryTitle, categoryId, articleTitle }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <Link to="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      {articleTitle && categoryId ? (
        <>
          <Link to={`/category/${categoryId}`} className="hover:text-primary transition-colors">
            {categoryTitle}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{articleTitle}</span>
        </>
      ) : (
        <span className="text-foreground font-medium">{categoryTitle}</span>
      )}
    </div>
  );
};
