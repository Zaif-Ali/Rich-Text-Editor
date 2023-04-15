import React from "react";
import { useTheme } from "next-themes";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <button
        onClick={toggleTheme}
        className=" bg-blue-500 text-white rounded p-2 m-2"
      >
        Toggle Theme
      </button>
    </>
  );
};

export default ToggleThemeButton;
