import Link from "next/link";

import { getCategories } from "@/services/category";

const linkClassName =
  "block rounded-md px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900";

async function Sidebar() {
  const categories = await getCategories();

  return (
    <nav>
      <ul className="flex flex-col gap-1 text-sm">
        <li>
          <Link href="/notes/filters/all" className={linkClassName}>
            All categories
          </Link>
        </li>
        {categories.map(category => (
          <li key={category.id}>
            <Link href={`/notes/filters/${category.id}`} className={linkClassName}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar;
