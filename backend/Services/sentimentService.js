const Sentiment = require("sentiment");
const sentiment = new Sentiment();

function analyzeSentiment(transcripts) {
  return transcripts.map((text) => sentiment.analyze(text).score);
}

module.exports = { analyzeSentiment };
