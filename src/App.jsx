import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div id="app" className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
}