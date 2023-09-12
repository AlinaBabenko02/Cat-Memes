import { useDispatch } from "react-redux";
import { MemForm } from "../MemForm/MemForm";
import { AddMemFormikValues } from "../../../data/types/AddMemFormikValues";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { Dialog, DialogTitle, Slide } from "@mui/material";
import { MemType } from "../../../data/types/MemType";
import { updateMem } from "../../../data/redux/memes";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface EditMemeProps {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
  meme: MemType;
}

export const EditMeme: React.FC<EditMemeProps> = ({
  isShown,
  setIsShown,
  meme,
}) => {
  const dispatch = useDispatch();
  const handelCancel = () => {
    setIsShown(false);
  };

  const handleSubmit = async (values: AddMemFormikValues) => {
    await updateMem(dispatch, meme.id, values);
    setIsShown(false);
  };
  return (
    <Dialog
      fullScreen
      onClose={handelCancel}
      open={isShown}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          background: "#de6060",
        },
      }}
    >
      <DialogTitle
        textAlign="center"
        fontSize={38}
        color="white"
        fontWeight="bold"
      >
        EDIT MEME
      </DialogTitle>
      <MemForm
        handelCancel={handelCancel}
        handleSubmit={handleSubmit}
        initialValues={meme}
      />
    </Dialog>
  );
};
