import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button as MUIButton } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#245953" },
    secondary: { main: "#408e91" },
  },
});

export interface ButtonProps {
  children: ReactNode;
  variant: "contained" | "outlined";
  color: "primary" | "secondary";
  onClick?: () => void;
  type?: "submit";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  color,
  onClick,
  type,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MUIButton variant={variant} color={color} onClick={onClick} type={type}>
        {children}
      </MUIButton>
    </ThemeProvider>
  );
};
