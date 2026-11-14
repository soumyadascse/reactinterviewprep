import { X } from "lucide-react";
import { menu } from "../../data/menu";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {open && (
        <div
          className="
          fixed
          inset-0
          bg-black/50
          z-40
          md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
        fixed
        md:static
        top-0
        left-0
        h-full
        w-80
        bg-white
        border-r
        shadow-lg
        overflow-y-auto
        z-50
        transform
        transition-transform
        duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        <div className="p-5">
          <div
            className="
            flex
            justify-between
            items-center
            md:hidden"
          >
            <h2 className="text-lg font-bold">Topics</h2>

            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="mt-4">
            {menu.map((section) => (
              <details key={section.title} className="mb-4">
                <summary
                  className="
                  cursor-pointer
                  font-semibold"
                >
                  {section.title}
                </summary>

                {section.children && (
                  <ul className="mt-2 ml-4">
                    {section.children?.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          onClick={onClose}
                          className="
        block
        rounded-lg
        px-3
        py-2
        text-sm
        text-gray-600
        hover:bg-blue-50
        hover:text-blue-600
        transition-colors
      "
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
