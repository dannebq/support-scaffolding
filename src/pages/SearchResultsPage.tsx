import { useSearchParams, Link } from "react-router-dom";
import { HeroSection } from "@/components/FAQ/HeroSection";
import { FileText } from "lucide-react";

// All articles from all categories
const allArticles = [
  { id: "creating-first-account", title: "Creating Your First Account", categoryId: "get-started", categoryTitle: "Get started" },
  { id: "understanding-dashboard", title: "Understanding the Dashboard Overview", categoryId: "get-started", categoryTitle: "Get started" },
  { id: "setting-up-profile", title: "Setting Up Your User Profile", categoryId: "get-started", categoryTitle: "Get started" },
  { id: "inviting-team-members", title: "Inviting Team Members", categoryId: "get-started", categoryTitle: "Get started" },
  { id: "quick-start-guide", title: "Quick Start Guide for New Users", categoryId: "get-started", categoryTitle: "Get started" },
  { id: "5", title: "How to update payment methods", categoryId: "billing", categoryTitle: "Billing" },
  { id: "6", title: "Understanding your invoice", categoryId: "billing", categoryTitle: "Billing" },
  { id: "7", title: "Failed payment troubleshooting", categoryId: "billing", categoryTitle: "Billing" },
  { id: "8", title: "Upgrading your plan", categoryId: "billing", categoryTitle: "Billing" },
  { id: "9", title: "Canceling your subscription", categoryId: "billing", categoryTitle: "Billing" },
  { id: "10", title: "Subscription renewal dates", categoryId: "billing", categoryTitle: "Billing" },
  { id: "11", title: "Two-factor authentication setup", categoryId: "security", categoryTitle: "Security" },
  { id: "12", title: "Password requirements and best practices", categoryId: "security", categoryTitle: "Security" },
  { id: "13", title: "Data encryption information", categoryId: "security", categoryTitle: "Security" },
  { id: "14", title: "Security audit logs", categoryId: "security", categoryTitle: "Security" },
  { id: "15", title: "Getting your API key", categoryId: "integration", categoryTitle: "Integration" },
  { id: "16", title: "API rate limits", categoryId: "integration", categoryTitle: "Integration" },
  { id: "17", title: "Authentication methods", categoryId: "integration", categoryTitle: "Integration" },
  { id: "18", title: "Connecting to Slack", categoryId: "integration", categoryTitle: "Integration" },
  { id: "19", title: "Google Calendar integration", categoryId: "integration", categoryTitle: "Integration" },
  { id: "20", title: "Zapier automation", categoryId: "integration", categoryTitle: "Integration" },
  { id: "21", title: "How to contact support", categoryId: "technical-support", categoryTitle: "Technical Support" },
  { id: "22", title: "Reporting a bug", categoryId: "technical-support", categoryTitle: "Technical Support" },
  { id: "23", title: "System status and outages", categoryId: "technical-support", categoryTitle: "Technical Support" },
  { id: "24", title: "Browser compatibility", categoryId: "technical-support", categoryTitle: "Technical Support" },
  { id: "25", title: "Customizing your workspace", categoryId: "settings", categoryTitle: "Settings" },
  { id: "26", title: "Notification preferences", categoryId: "settings", categoryTitle: "Settings" },
  { id: "27", title: "Managing team members", categoryId: "settings", categoryTitle: "Settings" },
  { id: "28", title: "Privacy settings", categoryId: "settings", categoryTitle: "Settings" },
];

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredArticles = query
    ? allArticles.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection defaultValue={query} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Search Results
          </h2>
          <p className="text-muted-foreground">
            {filteredArticles.length} {filteredArticles.length === 1 ? "result" : "results"} for "{query}"
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="space-y-3">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/category/${article.categoryId}/article/${article.id}`}
                className="block p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {article.categoryTitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
