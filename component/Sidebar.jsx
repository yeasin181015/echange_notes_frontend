"use client";

const Sidebar = () => {
  return (
    <div>
      <ul className="flex flex-col">
        <li className="border-b-2 hover:bg-gray-200 p-3">
          <Link href="/notes">Notes</Link>
        </li>
        <li className="border-b-2 hover:bg-gray-200 p-3">
          <Link href="/uploads">Uploads</Link>
        </li>
        {/* <li className="border-b-2 hover:bg-gray-200 p-3">
          <Link href="/downloads">Downloads</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
