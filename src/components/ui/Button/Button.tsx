import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress, Button as MUIButton } from "@mui/material";

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
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  color,
  onClick,
  type,
  isLoading,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MUIButton
        variant={variant}
        color={color}
        onClick={onClick}
        type={type}
        disabled={isLoading}
      >
        {isLoading && (
          <CircularProgress size={24} sx={{ marginRight: "4px" }} />
        )}
        {children}
      </MUIButton>
    </ThemeProvider>
  );
};
