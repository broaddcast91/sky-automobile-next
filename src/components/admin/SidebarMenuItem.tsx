import Link from "next/link";
import React from "react";

interface SidebarMenuItemProps {
  isCollapsed: boolean;
  text: string;
  to: string;
  active: boolean;
  icon: React.ElementType;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  isCollapsed,
  text,
  to,
  active,
  icon: Icon,
}) => {
  return (
    <Link
      href={to}
      className={`flex ${
        isCollapsed ? "justify-center" : "justify-center"
      } w-full items-center mb-4`}
    >
      <div
        title={isCollapsed ? text : ""}
        className={`${
          isCollapsed
            ? "p-4 hover:bg-primaryBlue rounded-lg"
            : "hover:bg-primaryBlue rounded-lg py-2 w-3/4"
        } 
        flex items-center p-2 overflow-hidden ${
          active ? "bg-primaryBlue text-white" : "text-black"
        } hover:text-white`}
      >
        {/* Render the passed icon */}
        {text !== "Nexa" ? (
          <Icon
            className={` ${isCollapsed ? "mx-auto" : "mr-4"} text-lg ${
              active && "text-white"
            }`}
          />
        ) : (
          <p
            className={` ${isCollapsed ? "mx-auto" : "mr-4"} font-serif font-bold  text-xl ${
              active && "text-white"
            }`}
          >
            N
          </p>
        )}
        {!isCollapsed && <span className="whitespace-nowrap">{text}</span>}
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
