import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
import JsLoader from "@components/JsLoader";
import { useEffect } from "react";

const toggleTheme = (e) =>  {
    if (localStorage.getItem('clim_theme') === 'theme-dark') {
        localStorage.setItem('clim_theme', 'theme-light');
        document.documentElement.className = 'theme-light';
    } else {
        localStorage.setItem('clim_theme', 'theme-dark');
        document.documentElement.className = 'theme-dark';
    }
}
export default function Header() {

    return (
      <>

          <h3>header</h3>
      </>
  )
}
