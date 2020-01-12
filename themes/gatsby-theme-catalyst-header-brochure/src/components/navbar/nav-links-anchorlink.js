/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState, useEffect } from "react"
import { Link as AnchorLink } from "react-scroll"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuAnchorLink = ({ link, children }) => {
  const isClient = typeof window === "object"
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line
  const [headerHeight, setHeaderHeight] = useState(0)
  const navOffset = -Math.abs(headerHeight + 16)

  //eslint-disable-next-line
  useEffect(() => {
    if (isClient) {
      const header = document.getElementById("header")
      const headerHeight = header.getBoundingClientRect().height
      setHeaderHeight(headerHeight)
    }
  })
  return (
    <AnchorLink
      to={link.replace(/#/g, "").toLowerCase()}
      onClick={() => setIsNavOpen(false)}
      spy={true}
      hashSpy={true}
      smooth={true}
      activeClass="active"
      duration={500}
      offset={navOffset}
    >
      {children}
    </AnchorLink>
  )
}

export default NavMenuAnchorLink
