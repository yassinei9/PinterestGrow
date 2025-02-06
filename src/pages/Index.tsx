import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Award } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Award className="h-8 w-8 mr-3 text-gray-600 dark:text-gray-300" />
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Top Pins</h1>
          <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded">
            Learn
          </span>
        </div>
        <Input
          type="text"
          placeholder="Search any keyword or topic to see the top pins"
          className="w-full"
        />
      </div>
    </DashboardLayout>
  );
};

export default Index;