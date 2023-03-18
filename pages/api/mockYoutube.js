import youtubeData from "../data/youtube";

const mockYoutubeAction = (req, res) => {
  console.log("Running mock youtube data API endpoint");

  res.status(200).json(JSON.stringify(youtubeData));
};

export default mockYoutubeAction;
