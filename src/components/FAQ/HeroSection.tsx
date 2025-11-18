import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  defaultValue?: string;
}

export const HeroSection = ({ defaultValue = "" }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState(defaultValue);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSearchQuery(defaultValue);
    // Refocus input after navigation
    if (defaultValue && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [defaultValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Use setTimeout to navigate without losing focus
    setTimeout(() => {
      if (value.trim()) {
        navigate(`/search?q=${encodeURIComponent(value)}`, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }, 0);
  };

  return (
    <div className="w-full bg-gradient-to-b from-primary/5 to-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-foreground">
          What can we help you with?
        </h1>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-12 h-14 text-lg rounded-2xl shadow-md border-2 focus-visible:ring-primary"
          />
        </div>
      </div>
    </div>
  );
};
