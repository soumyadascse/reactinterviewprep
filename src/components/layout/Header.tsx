import {
  BookOpen,
  Menu
} from "lucide-react";

type Props = {
  onMenuClick: () => void;
};

export default function Header({
  onMenuClick
}: Props) {
  return (
    <header
      className="
      h-16
      bg-gradient-to-r
      from-blue-600
      to-indigo-700
      text-white
      flex
      items-center
      justify-between
      px-4
      shadow-md
      shrink-0"
    >
      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="
          md:hidden
          p-2"
        >
          <Menu size={24} />
        </button>

        <BookOpen size={24} />

        <h1
          className="
          text-sm
          md:text-xl
          font-bold"
        >
          React Interview Prep
        </h1>

      </div>

      <input
        placeholder="Search..."
        className="
        hidden
        md:block
        px-3
        py-1
        rounded
        text-black
        bg-white"
      />
    </header>
  );
}