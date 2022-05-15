const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const queryText = `SELECT movies.id, movies.title, genres.name FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id JOIN genres ON genres.id = movies_genres.genre_id WHERE movies.id=$1;`;
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error in GET genres', err);
      res.sendStatus(500);
    });
});

module.exports = router;