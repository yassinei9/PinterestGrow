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
    <nav className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-screen transition-colors duration-200">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <Link to="/" className="flex items-center">
          <span className="text-pinred dark:text-red-400 text-2xl font-bold tracking-tight">
            PinClicks²
          </span>
        </Link>
      </div>
      <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
          >
            <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            <span className="font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}