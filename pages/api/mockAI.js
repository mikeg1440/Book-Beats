import openAiData from "../data/openAi";

const mockYoutubeAction = (req, res) => {
  console.log("Running mock OpenAI data API endpoint");

  res.status(200).json({ output: openAiData });
};

export default mockYoutubeAction;
