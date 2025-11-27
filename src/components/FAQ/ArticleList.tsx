import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
}

interface ArticleListProps {
  articles: Article[];
  subcategoryTitle?: string;
  categoryId: string;
}

export const ArticleList = ({ articles, subcategoryTitle, categoryId }: ArticleListProps) => {
  const subcategoryId = subcategoryTitle ? subcategoryTitle.toLowerCase().replace(/\s+/g, '-') : undefined;
  
  return (
    <div className="mb-12" id={subcategoryId}>
      {subcategoryTitle && (
        <h3 className="text-2xl font-semibold text-foreground mb-6">{subcategoryTitle}</h3>
      )}
      <div className="space-y-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/category/${categoryId}/article/${article.id}`}
            className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
          >
            <FileText className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-foreground group-hover:text-primary transition-colors">
              {article.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
