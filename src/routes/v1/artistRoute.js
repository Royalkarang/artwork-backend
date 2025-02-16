const express = require("express");
const artistController = require("../../controllers/artistController");
const { verifyJWT, optionalVerifyJWT } = require("../../middleware/authMiddleware");

const artistRoute = express.Router();

artistRoute.post("/add-artist", verifyJWT, artistController.addArtist);

artistRoute.put(
  "/edit-artist/:artistId",
  verifyJWT,
  artistController.updateArtist
);

artistRoute.delete(
  "/delete-artist/:artistId",
  verifyJWT,
  artistController.deleteArtistById
);

artistRoute.get(
  "/get-singleArtist/:artistId",
  artistController.getSingleArtistById
);

artistRoute.get("/get-artists",optionalVerifyJWT, artistController.getAllArtists);

module.exports = artistRoute;
