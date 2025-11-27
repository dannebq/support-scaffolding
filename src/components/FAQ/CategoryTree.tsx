import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { categoryData } from "@/data/categoryData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const CategoryTree = () => {
  const { categoryId } = useParams();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    [categoryId || ""]: true,
  });

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const isCategoryActive = (catId: string) => {
    return categoryId === catId;
  };

  return (
    <div className="w-64 bg-card border-r border-border p-6 sticky top-0 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold text-foreground mb-6">Categories</h2>
      
      <nav className="space-y-2">
        {Object.entries(categoryData).map(([catId, category]) => {
          const isOpen = openCategories[catId];
          const hasSubcategories = !!category.subcategories;
          const isActive = isCategoryActive(catId);
          
          return (
            <Collapsible
              key={catId}
              open={isOpen}
              onOpenChange={() => toggleCategory(catId)}
            >
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-8 flex items-center justify-start">
                    {hasSubcategories && (
                      <CollapsibleTrigger className="p-1 rounded hover:bg-muted/50 transition-colors">
                        {isOpen ? (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        )}
                      </CollapsibleTrigger>
                    )}
                  </div>
                  <Link
                    to={`/category/${catId}`}
                    className={`flex-1 p-2 rounded-lg hover:bg-muted/50 transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "font-semibold text-foreground"
                    }`}
                  >
                    {category.title}
                  </Link>
                </div>

                {hasSubcategories && (
                  <CollapsibleContent className="ml-8 space-y-1">
                    {category.subcategories!.map((subcategory) => {
                      const subcategoryId = subcategory.title.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <Link
                          key={subcategory.title}
                          to={`/category/${catId}#${subcategoryId}`}
                          className={`block text-sm py-1.5 px-2 rounded hover:bg-muted/50 transition-colors ${
                            isActive
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          }`}
                        >
                          {subcategory.title}
                        </Link>
                      );
                    })}
                  </CollapsibleContent>
                )}
              </div>
            </Collapsible>
          );
        })}
      </nav>
    </div>
  );
};
