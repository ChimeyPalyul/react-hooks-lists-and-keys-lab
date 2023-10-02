import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const nBarLinks = links.map((link) => (
    <a key = {link} href = {"#" + link}>{link}</a> 
  )
  )

  return <nav>{nBarLinks}</nav>
}
export default NavBar;
