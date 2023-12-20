import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>

        <h3>Footer</h3>

        <a href="javascript:void(0)" className="back-to-top bounce"><i className="ri-arrow-up-s-line"></i></a>

    </>
  )
}
