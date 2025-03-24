const express = require("express");
const { getYouTubeReviews } = require("../services/youtubeService");
const router = express.Router();
// Route to fetch YouTube videos for a given phone model
router.get("/youtube", async (req, res) => {
    const { phone } = req.query;
    if (!phone) {
        return res.status(400).json({ error: "Phone model is required" });
    }
    const videos = await getYouTubeReviews(phone);
    res.json(videos);
});

module.exports = router;
