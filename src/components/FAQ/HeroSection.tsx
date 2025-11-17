import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-primary/5 to-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-foreground">
          What can we help you with?
        </h1>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-12 h-14 text-lg rounded-2xl shadow-md border-2 focus-visible:ring-primary"
          />
        </div>
      </div>
    </div>
  );
};
