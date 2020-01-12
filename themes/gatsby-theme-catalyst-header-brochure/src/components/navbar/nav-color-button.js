/** @jsx jsx */
import { jsx, useColorMode, useThemeUI } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { IconButton } from "@theme-ui/components"
import { FiSun, FiMoon } from "react-icons/fi"
import { IconContext } from "react-icons"

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isNavOpen] = useContext(NavContext)
  const { theme } = useThemeUI()

  return (
    <IconButton
      sx={{
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        color: isNavOpen ? "header.iconsOpen" : "header.icons",
        width: "auto",
        height: "auto",
        p: 0,
        m: 0,
        ml: 2,
        ":hover": {
          color: "header.iconsHover",
        },
      }}
      aria-label="Toggle dark mode"
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      <IconContext.Provider value={{ size: theme.sizes.iconsHeader }}>
        {colorMode === "default" ? <FiMoon /> : <FiSun />}
      </IconContext.Provider>
    </IconButton>
  )
}

export default ColorModeButton
