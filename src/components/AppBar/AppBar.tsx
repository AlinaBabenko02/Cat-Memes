import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { MenuTab } from "../../ui/Tab/MenuTab";

import "./styles.scss";

const pages = [
  { label: "Home", link: "/home" },
  { label: "Memes", link: "/memes" },
  { label: "Favorites", link: "/favorites" },
];

export const AppMenu: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters className="root">
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <img
            src="images/logo.png"
            alt="cats"
            height={70}
            className="rootLogo"
          />
        </Box>

        <Box
          sx={{
            flexGrow: { xs: 1, md: 0 },
            display: { xs: "flex" },
            justifyContent: "space-between",
          }}
        >
          {pages.map((page) => (
            <div key={page.link}>
              <MenuTab label={page.label} link={page.link} />
            </div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
