import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center gap-2">
        <BookOpen />
        <h1 className="text-xl font-bold">
          React Learning Portal
        </h1>
      </div>
    </header>
  );
}