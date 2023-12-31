import AddIcon from "@mui/icons-material/Add";
import { MemesList } from "../../shared/MemesList/MemesList";
import { Button } from "../../ui/Button/Button";
import "./styles.scss";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemes } from "../../../data/redux/memes";
import { Dispatch } from "redux";
import { ToggleButtonTypes } from "../../shared/ToggleButtonTypes/ToggleButtonTypes";
import { MemType } from "../../../data/types/MemType";
import { Loader } from "../../shared/Loader/Loader";

export const Memes = () => {
  const dispatch: Dispatch = useDispatch();
  const memes = useSelector((state) => state.memes);
  const [shownType, setShownType] = useState("all");

  useEffect(() => {
    dispatch(getMemes);
  }, []);

  if (memes.isFetching) {
    return <Loader />;
  }
  const displayedMemes = memes.all.filter(
    (meme: MemType) => shownType === "all" || meme.contentType === shownType
  );

  return (
    <div>
      <div className="memesHeader">
        <ToggleButtonTypes value={shownType} setValue={setShownType} />
        <Link to="/add-mem">
          <Button variant="contained" color="primary">
            <AddIcon sx={{ color: "white", fontSize: 40 }} />
            Add mem
          </Button>
        </Link>
      </div>
      {displayedMemes.length !== 0 ? (
        <MemesList memes={displayedMemes} />
      ) : (
        <div className="memesEmpty">
          <Typography fontSize={20} fontWeight="bold" color="#de6060">
            Unfortunately there are no memes here yet.
          </Typography>
        </div>
      )}
    </div>
  );
};
