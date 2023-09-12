import { MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.scss";
import { Link, matchRoutes, useLocation } from "react-router-dom";

export interface MenuTabProps {
  label: string;
  link: string;
}

export const MenuTab: React.FC<MenuTabProps> = ({ label, link }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const currentLocation = useLocation();
  const matches = matchRoutes([{ path: link }], currentLocation);

  useEffect(() => {
    setIsSelected(!!matches);
  }, [currentLocation, matches]);

  return (
    <Link to={link} className="tab">
      <MenuItem disableRipple selected={isSelected}>
        {label}
      </MenuItem>
      {isSelected && (
        <img src="images/paw.png" alt="meow" height={14} className="tabIcon" />
      )}
    </Link>
  );
};
