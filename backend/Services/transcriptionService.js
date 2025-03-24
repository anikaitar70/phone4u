const axios = require("axios");

async function transcribeVideos(videoUrls) {
  const transcriptionAPI = "YOUR_TRANSCRIPTION_API_URL";

  const transcripts = await Promise.all(
    videoUrls.map(async (video) => {
      try {
        const response = await axios.post(transcriptionAPI, {
          videoUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
        });
        return response.data.transcript;
      } catch (error) {
        console.error(`Error transcribing ${video.videoId}:`, error);
        return "";
      }
    })
  );

  return transcripts;
}

module.exports = { transcribeVideos };
