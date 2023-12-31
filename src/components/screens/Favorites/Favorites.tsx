import { MemesList } from "../../shared/MemesList/MemesList";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemes } from "../../../data/redux/memes";
import { isFavorite } from "../../../data/localStorage";
import { MemType } from "../../../data/types/MemType";
import { Loader } from "../../shared/Loader/Loader";

export const FavoriteMemes = () => {
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memes);
  useEffect(() => {
    dispatch(getMemes);
  }, []);

  if (memes.isFetching) {
    return <Loader />;
  }
  const displayedMemes = memes.all.filter((meme: MemType) =>
    isFavorite(meme.id)
  );

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
