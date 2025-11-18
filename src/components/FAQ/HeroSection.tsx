import { Search, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allArticles } from "@/data/articles";

interface HeroSectionProps {
  defaultValue?: string;
}

export const HeroSection = ({ defaultValue = "" }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState(defaultValue);
  const [showResults, setShowResults] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState<typeof allArticles>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = allArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(results);
      setShowResults(true);
    } else {
      setFilteredArticles([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`, { replace: true });
    }
  };

  const handleArticleClick = () => {
    setShowResults(false);
  };

  return (
    <div className="w-full bg-gradient-to-b from-primary/5 to-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-foreground">
          What can we help you with?
        </h1>
        <div className="relative max-w-2xl mx-auto" ref={searchRef}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.trim() && setShowResults(true)}
            className="pl-12 h-14 text-lg rounded-2xl shadow-md border-2 focus-visible:ring-primary"
          />
          
          {showResults && filteredArticles.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto z-20">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/category/${article.categoryId}/article/${article.id}`}
                  onClick={handleArticleClick}
                  className="flex items-start gap-3 p-4 hover:bg-accent transition-colors border-b border-border last:border-b-0"
                >
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">{article.title}</div>
                    <div className="text-sm text-muted-foreground">{article.categoryTitle}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
