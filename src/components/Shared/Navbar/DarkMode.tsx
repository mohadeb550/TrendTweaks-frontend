import { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
  import { MdOutlineDarkMode } from "react-icons/md";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className=" text-gray-500 dark:text-gray-300"
    >
      {isDarkMode ?  <span><MdDarkMode/> </span> :  <span><MdOutlineDarkMode/> </span>}
    </button>
  );
}
