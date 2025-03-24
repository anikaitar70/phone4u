const { fetchYouTubeReviews } = require("./youtubeService");
const { transcribeVideos } = require("./transcriptionService");
const { analyzeSentiment } = require("./sentimentService");
const { youtubeRoutes } = require("./routes/youtubeRoutes");

async function comparePhones(phone1, phone2) {
  const videos1 = await fetchYouTubeReviews(phone1);
  const videos2 = await fetchYouTubeReviews(phone2);

  const transcripts1 = await transcribeVideos(videos1);
  const transcripts2 = await transcribeVideos(videos2);

  const sentiment1 = analyzeSentiment(transcripts1);
  const sentiment2 = analyzeSentiment(transcripts2);

  const avgSentiment1 = sentiment1.reduce((a, b) => a + b, 0) / sentiment1.length;
  const avgSentiment2 = sentiment2.reduce((a, b) => a + b, 0) / sentiment2.length;

  const recommendation = avgSentiment1 > avgSentiment2 ? phone1 : phone2;

  return { phone1Score: avgSentiment1, phone2Score: avgSentiment2, recommendation };
}

module.exports = { comparePhones };
