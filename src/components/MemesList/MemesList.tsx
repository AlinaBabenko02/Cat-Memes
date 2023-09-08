import { Grid } from "@mui/material";
import { MemItem } from "../MemItem/MemItem";
import "./styles.scss";
import { MemType } from "../../types/MemType";

export const MemesList: React.FC<{ memes: MemType[] }> = ({ memes }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 4 }}
      alignItems="center"
      justifyContent="center"
      padding={{ xs: "10px", sm: "40px" }}
    >
      {memes.map((mem: MemType) => (
        <Grid item xs={9} sm={6} md={3} key={mem.id}>
          <MemItem meme={mem} />
        </Grid>
      ))}
    </Grid>
  );
};
