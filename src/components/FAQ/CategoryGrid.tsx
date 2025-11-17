import { Rocket, CreditCard, Shield, Plug, Headphones, Settings } from "lucide-react";
import { CategoryCard } from "./CategoryCard";

const categories = [
  { title: "Get started", icon: Rocket, href: "/category/get-started" },
  { title: "Billing", icon: CreditCard, href: "/category/billing" },
  { title: "Security", icon: Shield, href: "/category/security" },
  { title: "Integration", icon: Plug, href: "/category/integration" },
  { title: "Technical Support", icon: Headphones, href: "/category/technical-support" },
  { title: "Settings", icon: Settings, href: "/category/settings" },
];

export const CategoryGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};
