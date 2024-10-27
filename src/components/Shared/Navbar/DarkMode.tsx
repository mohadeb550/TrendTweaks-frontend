import { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
  import { MdOutlineDarkMode } from "react-icons/md";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

//   useEffect(() => {
//     // সিস্টেম থিম ডিটেক্ট করে সেট করা
//     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
//     const systemDarkMode = systemTheme.matches;

//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark' || (!savedTheme && systemDarkMode)) {
//       document.documentElement.classList.add('dark');
//       setIsDarkMode(true);
//     } else {
//       document.documentElement.classList.remove('dark');
//       setIsDarkMode(false);
//     }

//     // সিস্টেম থিম পরিবর্তন মনিটর করা
//     systemTheme.addEventListener('change', e => {
//       if (!localStorage.getItem('theme')) {
//         if (e.matches) {
//           document.documentElement.classList.add('dark');
//           setIsDarkMode(true);
//         } else {
//           document.documentElement.classList.remove('dark');
//           setIsDarkMode(false);
//         }
//       }
//     });

//     return () => systemTheme.removeEventListener('change', e => {});
//   }, []);



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
