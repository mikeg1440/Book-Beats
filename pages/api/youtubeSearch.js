import SerpApi from "google-search-results-nodejs";

const searchAction = async (req, res) => {
  console.log("SearchAction Req", req.body.searchQuery);

  const search = new SerpApi.GoogleSearch(process.env.SERP_API_KEY);

  const params = { engine: "youtube", search_query: req.body.searchQuery };

  const getJson = () => {
    return new Promise((resolve) => {
      search.json(params, resolve);
    });
  };

  const getResults = async () => {
    const videos = [];

    const results = await getJson();
    console.log(results.video_results);
    if (results.video_results) {
      videos.push(...results.video_results);
    }

    return videos;
  };

  getResults().then((results) => {
    console.log("Got videos");
    res.status(200).json(results);
  });
};

export default searchAction;
