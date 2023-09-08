import { Typography, Box, Paper } from "@mui/material";
import "./styles.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="homeText">
        <Typography fontSize={52} fontWeight="bold">
          THE PURRFECT MEMES HAVEN
        </Typography>
        <Typography fontSize={32} fontWeight="bold">
          Unleash Your Inner Cat Lover with the Best Cat Memes!
        </Typography>

        <Paper
          sx={{
            borderRadius: 5,
            padding: "24px",
            margin: "30px 0 20px",
            backfaceVisibility: 0.5,
          }}
        >
          <Typography fontSize={24} fontWeight="bold">
            🔥 Why Choose Purrfect Memes? 🔥
          </Typography>
          <br />
          <Typography fontSize={18}>
            🐈 A Never-Ending Feed of Pawsitivity: Our curated collection of cat
            memes is updated daily to keep your spirits high. From grumpy cats
            to mischievous kittens, we've got it all.
          </Typography>
          <Typography fontSize={18}>
            😹 Endless Laughter Guaranteed: Prepare to chuckle, giggle, and LOL
            as you scroll through our extensive library of side-splitting cat
            memes. Your mood booster is just a click away!
          </Typography>
        </Paper>

        <Typography fontSize={32} fontWeight="bold" color="#de6060">
          Remember, at Purrfect Memes, we believe there's no problem a good cat
          meme can't solve🐱😻
        </Typography>
      </div>

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <img src="images/kitten.png" alt="cats" className="homeImage" />
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <img src="images/kitten-mobile.png" alt="cats" className="homeImage" />
      </Box>
    </div>
  );
};
