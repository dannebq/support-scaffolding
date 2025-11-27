import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { categoryData } from "@/data/categoryData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const CategoryTree = () => {
  const location = useLocation();
  const { categoryId, articleId } = useParams();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    [categoryId || ""]: true,
  });

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const isArticleActive = (catId: string, artId: string) => {
    return categoryId === catId && articleId === artId;
  };

  return (
    <div className="w-64 bg-card border-r border-border p-6 sticky top-0 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold text-foreground mb-6">Categories</h2>
      
      <nav className="space-y-2">
        {Object.entries(categoryData).map(([catId, category]) => {
          const isOpen = openCategories[catId];
          const hasSubcategories = !!category.subcategories;
          
          return (
            <Collapsible
              key={catId}
              open={isOpen}
              onOpenChange={() => toggleCategory(catId)}
            >
              <div className="space-y-1">
                <CollapsibleTrigger className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-muted/50 transition-colors text-left">
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                  <span className="font-semibold text-foreground">{category.title}</span>
                </CollapsibleTrigger>

                <CollapsibleContent className="ml-6 space-y-1">
                  {hasSubcategories ? (
                    category.subcategories!.map((subcategory) => (
                      <div key={subcategory.title} className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground py-1 px-2">
                          {subcategory.title}
                        </div>
                        <div className="ml-2 space-y-1">
                          {subcategory.articles.map((article) => (
                            <Link
                              key={article.id}
                              to={`/category/${catId}/article/${article.id}`}
                              className={`block text-sm py-1.5 px-2 rounded hover:bg-muted/50 transition-colors ${
                                isArticleActive(catId, article.id)
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-foreground"
                              }`}
                            >
                              {article.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    category.articles?.map((article) => (
                      <Link
                        key={article.id}
                        to={`/category/${catId}/article/${article.id}`}
                        className={`block text-sm py-1.5 px-2 rounded hover:bg-muted/50 transition-colors ${
                          isArticleActive(catId, article.id)
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground"
                        }`}
                      >
                        {article.title}
                      </Link>
                    ))
                  )}
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}
      </nav>
    </div>
  );
};
