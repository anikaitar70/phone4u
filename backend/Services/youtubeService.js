require("dotenv").config();
const axios = require("axios");

const YOUTUBE_API_KEY = "";
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

/**
 * Fetch the top 10 YouTube videos related to a phone review.
 * @param {string} phoneModel - The phone model to search for.
 * @returns {Promise<Array>} - List of video objects.
 */
async function getYouTubeReviews(phoneModel) {
    try {
        console.log(YOUTUBE_API_KEY);
        const response = await axios.get(YOUTUBE_SEARCH_URL, {
            params: {
                part: "snippet",
                q: `${phoneModel} review`,
                type: "video",
                maxResults: 10,
                key: YOUTUBE_API_KEY
            }
        });

        return response.data.items.map(video => ({
            title: video.snippet.title,
            videoId: video.id.videoId,
            url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
            thumbnail: video.snippet.thumbnails.high.url,
            channel: video.snippet.channelTitle,
            publishedAt: video.snippet.publishedAt
        }));
    } catch (error) {
        console.error("Error fetching YouTube videos:", error.message);
        return [];
    }
}

module.exports = { getYouTubeReviews };
