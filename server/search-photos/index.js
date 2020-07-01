const express = require('express');
const unsplash = require('unsplash-js');

const ACCESS_KEY = "Sbn1-wlciPv9TtF4Rymzqnth3gnvjfoqj7GGsmGlMvY";
const SECRET_KEY = "LFiY6hlL1FCn-QkvXcQt-YPvgw5t3mmrkbgAfv6F_NE";

const unsplashApi = new unsplash.default({ accessKey: ACCESS_KEY, secret: SECRET_KEY });

const searchPhotosUsingUnsplash = unsplashApi.search.photos;

const getSearchPhotosRoutes = () => {
  const searchPhotosRouter = new express.Router();

  searchPhotosRouter.get('/api/searchPhotos', async (req, res) => {
    const { query, page = 1, limit } = req.query;
    const result = await searchPhotosUsingUnsplash(query, page, limit, { orientation: "portrait" }).then(unsplash.toJson);
    res.json(result);
  });

  return searchPhotosRouter;
};

module.exports = { getSearchPhotosRoutes };