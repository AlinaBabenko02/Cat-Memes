import { MemesList } from "../../components/MemesList/MemesList";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemes } from "../../data/redux/memes";
import { isFavorite } from "../../data/localStorage";
import { MemType } from "../../types/MemType";

export const FavoriteMemes = () => {
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memes);
  useEffect(() => {
    dispatch(getMemes);
  }, []);

  const displayedMemes = memes.filter((meme: MemType) => isFavorite(meme.id));

  return displayedMemes.length !== 0 ? (
    <MemesList memes={displayedMemes} />
  ) : (
    <Typography
      fontSize={40}
      fontWeight="bold"
      color="#de6060"
      sx={{ textAlign: "center", marginTop: "30vh" }}
    >
      Unfortunately you haven't favorite memes here yet!!!
    </Typography>
  );
};
