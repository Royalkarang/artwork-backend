const mongoose = require("mongoose");

const artWorkSchema = new mongoose.Schema(
  {
    artWorkName: {
      type: String,
      required: true,
    },
    artWorkImage: {
      type: Array,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },
    minPrice: {
      type: Number,
      required: true,
    },
    maxPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ArtWork = mongoose.model("ArtWork", artWorkSchema);

module.exports = ArtWork;
