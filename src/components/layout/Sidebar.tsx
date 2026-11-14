import { menu } from "../../data/menu";

export default function Sidebar() {
  return (
    <aside
      className="
      w-80
      bg-white
      border-r
      overflow-y-auto
      shadow-sm"
    >
      <div className="p-5">

        <h2 className="text-lg font-bold mb-4">
          Topics
        </h2>

        {menu.map((section) => (
          <details
            key={section.title}
            className="mb-3"
            open
          >
            <summary
              className="
              cursor-pointer
              font-semibold
              text-slate-800
              py-2"
            >
              {section.title}
            </summary>

            {section.children && (
              <ul className="ml-4 mt-2 space-y-2">
                {section.children.map((item) => (
                  <li
                    key={item}
                    className="
                    text-sm
                    text-gray-600
                    hover:text-blue-600
                    cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>
    </aside>
  );
}