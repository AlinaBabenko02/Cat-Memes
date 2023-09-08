import { Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { MemType } from "../../types/MemType";
import { useState } from "react";
import { MemeDetails } from "../MemDetails/MemDetails";
import { LikeButton } from "../LikeButton/LikeButton";
import { isFavorite } from "../../data/localStorage";
import "./styles.scss";
import { MemTypeEnum } from "../../enums/MemContentType";

export const MemItem: React.FC<{ meme: MemType }> = ({ meme }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [memeIsLiked, setMemeIsLiked] = useState<boolean>(isFavorite(meme.id));
  const handleClose = () => {
    setIsOpened(false);
  };
  const link =
    meme.contentType === MemTypeEnum.IMAGE ? meme.link : "images/tv.png";
  return (
    <>
      <Paper className="memeItem">
        <div className="memeItemContent" onClick={() => setIsOpened(true)}>
          <img src={link} alt="mem" className="memeItemContentImage" />
        </div>

        <Typography fontSize={24} fontWeight="bold" color="#245953">
          {meme.title}
        </Typography>
        <div className="author">
          <PersonIcon sx={{ color: "#408e91" }} />
          <Typography fontSize={18} color="#408e91">
            by {meme.author}
          </Typography>
        </div>
        <LikeButton
          isLiked={memeIsLiked}
          setMemeIsLiked={setMemeIsLiked}
          memeId={meme.id}
        />
      </Paper>
      <MemeDetails
        isOpened={isOpened}
        handleClose={handleClose}
        meme={meme}
        memeIsLiked={memeIsLiked}
        setMemeIsLiked={setMemeIsLiked}
      />
    </>
  );
};
