import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { addToFavorites, removeFromFavorites } from "../../data/localStorage";

interface LikeButtonProps {
  isLiked: boolean;
  memeId: string;
  setMemeIsLiked: (value: boolean) => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  isLiked,
  memeId,
  setMemeIsLiked,
}) => {
  const iconColor = isLiked ? "secondary" : "disabled";

  const handleClick = () => {
    if (isLiked) {
      removeFromFavorites(memeId);
      setMemeIsLiked(false);
      return true;
    }
    addToFavorites(memeId);
    setMemeIsLiked(true);
  };

  return (
    <IconButton onClick={handleClick}>
      <FavoriteIcon color={iconColor} fontSize="large" />
    </IconButton>
  );
};
