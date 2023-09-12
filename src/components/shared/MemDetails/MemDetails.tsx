import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { MemType } from "../../../data/types/MemType";
import { Button } from "../../ui/Button/Button";
import { removeMem } from "../../../data/redux/memes";
import "./styles.scss";
import { EditMeme } from "../EditMeme/EditMeme";
import { LikeButton } from "../LikeButton/LikeButton";
import { Video } from "../Video/Video";
import { MemTypeEnum } from "../../../data/enums/MemContentType";

export interface MemeDetailsProp {
  isOpened: boolean;
  handleClose: () => void;
  meme: MemType;
  memeIsLiked: boolean;
  setMemeIsLiked: (value: boolean) => void;
}

export const MemeDetails: React.FC<MemeDetailsProp> = ({
  isOpened,
  handleClose,
  meme,
  memeIsLiked,
  setMemeIsLiked,
}) => {
  const dispatch = useDispatch();
  const [editIsOpened, setEditIsOpened] = useState(false);

  const handleDelete = async () => {
    await removeMem(dispatch, meme.id);
    handleClose();
  };

  return (
    <>
      <Dialog fullWidth maxWidth="md" onClose={handleClose} open={isOpened}>
        <DialogTitle
          textAlign="center"
          fontSize={28}
          color="#245953"
          fontWeight="bold"
        >
          {meme.title}
        </DialogTitle>
        <DialogContent>
          {meme.contentType === MemTypeEnum.IMAGE ? (
            <div className="memeContent">
              <img src={meme.link} alt="mem" className="memeContentImage" />
            </div>
          ) : (
            <Video link={meme.link} />
          )}
          <div>
            <DialogContentText textAlign="center" color="#408e91">
              by: {meme.author}
            </DialogContentText>
            <div className="memeActions">
              <LikeButton
                isLiked={memeIsLiked}
                setMemeIsLiked={setMemeIsLiked}
                memeId={meme.id}
              />
              <div className="memeActionsButtons">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditIsOpened(true)}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <EditMeme
        isShown={editIsOpened}
        setIsShown={setEditIsOpened}
        meme={meme}
      />
    </>
  );
};
