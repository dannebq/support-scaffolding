import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HeroSection } from "@/components/FAQ/HeroSection";
import { Breadcrumb } from "@/components/FAQ/Breadcrumb";
import { ArticleList } from "@/components/FAQ/ArticleList";
import { CategoryTree } from "@/components/FAQ/CategoryTree";
import { categoryData } from "@/data/categoryData";

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();
  const category = categoryId ? categoryData[categoryId] : null;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <p className="text-center text-muted-foreground">Category not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="flex">
        <CategoryTree />
        <div className="flex-1 max-w-4xl mx-auto px-4 py-8">
          <Breadcrumb categoryTitle={category.title} />
          
          {category.subcategories ? (
            category.subcategories.map((subcategory) => (
              <ArticleList
                key={subcategory.title}
                subcategoryTitle={subcategory.title}
                articles={subcategory.articles}
                categoryId={categoryId}
              />
            ))
          ) : category.articles ? (
            <ArticleList articles={category.articles} categoryId={categoryId} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
