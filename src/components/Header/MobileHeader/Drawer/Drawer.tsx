import { FC } from "react";
import { Navigation } from "@/components/Header/MobileHeader/Navigation";
import { navLinks } from "@/components/Header/mocks";

export const Drawer: FC = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="ml-auto">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-[28px] h-[28px] stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <Navigation navLinks={navLinks} />
      </div>
    </div>
  );
};
