import { useParams } from "react-router-dom";
import { HeroSection } from "@/components/FAQ/HeroSection";
import { Breadcrumb } from "@/components/FAQ/Breadcrumb";
import { ArticleList } from "@/components/FAQ/ArticleList";

// Mock data for different categories
const categoryData: Record<string, {
  title: string;
  subcategories?: {
    title: string;
    articles: { id: string; title: string }[];
  }[];
  articles?: { id: string; title: string }[];
}> = {
  "get-started": {
    title: "Get started",
    articles: [
      { id: "creating-first-account", title: "Creating Your First Account" },
      { id: "understanding-dashboard", title: "Understanding the Dashboard Overview" },
      { id: "setting-up-profile", title: "Setting Up Your User Profile" },
      { id: "inviting-team-members", title: "Inviting Team Members" },
      { id: "quick-start-guide", title: "Quick Start Guide for New Users" },
    ],
  },
  "billing": {
    title: "Billing",
    subcategories: [
      {
        title: "Payments",
        articles: [
          { id: "5", title: "How to update payment methods" },
          { id: "6", title: "Understanding your invoice" },
          { id: "7", title: "Failed payment troubleshooting" },
        ],
      },
      {
        title: "Subscriptions",
        articles: [
          { id: "8", title: "Upgrading your plan" },
          { id: "9", title: "Canceling your subscription" },
          { id: "10", title: "Subscription renewal dates" },
        ],
      },
    ],
  },
  "security": {
    title: "Security",
    articles: [
      { id: "11", title: "Two-factor authentication setup" },
      { id: "12", title: "Password requirements and best practices" },
      { id: "13", title: "Data encryption information" },
      { id: "14", title: "Security audit logs" },
    ],
  },
  "integration": {
    title: "Integration",
    subcategories: [
      {
        title: "API Access",
        articles: [
          { id: "15", title: "Getting your API key" },
          { id: "16", title: "API rate limits" },
          { id: "17", title: "Authentication methods" },
        ],
      },
      {
        title: "Third-party Apps",
        articles: [
          { id: "18", title: "Connecting to Slack" },
          { id: "19", title: "Google Calendar integration" },
          { id: "20", title: "Zapier automation" },
        ],
      },
    ],
  },
  "technical-support": {
    title: "Technical Support",
    articles: [
      { id: "21", title: "How to contact support" },
      { id: "22", title: "Reporting a bug" },
      { id: "23", title: "System status and outages" },
      { id: "24", title: "Browser compatibility" },
    ],
  },
  "settings": {
    title: "Settings",
    articles: [
      { id: "25", title: "Customizing your workspace" },
      { id: "26", title: "Notification preferences" },
      { id: "27", title: "Managing team members" },
      { id: "28", title: "Privacy settings" },
    ],
  },
};

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoryId ? categoryData[categoryId] : null;

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
      <div className="max-w-4xl mx-auto px-4 py-8">
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
  );
}
