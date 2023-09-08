export const isFavorite = (id: string) => {
  const favoritesIds: string | null = localStorage.getItem("favoriteMemes");
  const isLiked = favoritesIds?.includes(id);
  return isLiked || false;
};

export const addToFavorites = (id: string) => {
  const favoritesIds = localStorage.getItem("favoriteMemes");
  const newFavoritesIds = favoritesIds + " " + id;
  localStorage.setItem("favoriteMemes", newFavoritesIds);
};

export const removeFromFavorites = async (id: string) => {
  const favoritesIds = localStorage.getItem("favoriteMemes");
  const newFavoritesIds = favoritesIds?.replace(id, " ");
  await localStorage.setItem("favoriteMemes", newFavoritesIds || "");
};
