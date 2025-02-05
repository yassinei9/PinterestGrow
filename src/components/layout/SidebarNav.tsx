import { Link } from "react-router-dom";
import {
  Award,
  BarChart2,
  Heart,
  TrendingUp,
  Search,
  Bookmark,
  Share2,
  Users,
} from "lucide-react";

const navItems = [
  { icon: Award, label: "Top Pins", path: "/top-pins" },
  { icon: BarChart2, label: "Pin Stats", path: "/pin-stats" },
  { icon: Heart, label: "Saved Pins", path: "/saved-pins" },
  { icon: TrendingUp, label: "Rank Tracker", path: "/rank-tracker" },
  { icon: Search, label: "Search Tracker", path: "/search-tracker" },
  { icon: Bookmark, label: "Saved Keywords", path: "/saved-keywords" },
  { icon: Share2, label: "Interest Explorer", path: "/interest-explorer" },
  { icon: Users, label: "Account Explorer", path: "/account-explorer" },
  { icon: Search, label: "Keyword Research", path: "/keyword-research" },
];

export function SidebarNav() {
  return (
    <nav className="w-64 bg-sidebar-background flex flex-col">
      <div className="p-4">
        <Link to="/" className="flex items-center">
          <span className="text-pinred text-2xl font-bold">PinClicks²</span>
        </Link>
      </div>
      <div className="flex-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-sidebar-hover rounded-lg mb-1"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}