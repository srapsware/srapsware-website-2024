import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
import JsLoader from "@components/JsLoader";
import { useEffect } from "react";

import { useRouter } from 'next/router'


const toggleTheme = (e) =>  {
    if (localStorage.getItem('clim_theme') === 'theme-dark') {
        localStorage.setItem('clim_theme', 'theme-light');
        document.documentElement.className = 'theme-light';
    } else {
        localStorage.setItem('clim_theme', 'theme-dark');
        document.documentElement.className = 'theme-dark';
    }
}
export default function Header(props) {
    const router = useRouter();
    console.log(router);
    return (
      <>
          <table><tbody><tr><td><Link href='/'>Home</Link></td><td><Link href='/contact-us/'>Contact</Link></td><td></td></tr></tbody></table>
      </>
  )
}
