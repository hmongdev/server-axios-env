//! 0. create gif.router.jsx file

//! 4. const requires
const express = require('express');
const router = express.Router();
const axios = require('axios');

//! 7. router => server-side
router.get('/', (req, res) => {
    //* 6. We'll put the axios call inside a route and then hit the route from our client!
    axios
        .get(
            'api.giphy.com/v1/gifs/trending?api_key=qPEy8DWc2SmzE2jfInuMbKZVjGim5r5k&rating=pg-13'
        )
        .then((response) => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((err) => {
            console.log(`ERR in GET`, err);
            res.sendStatus(500);
        });
});

//! 5. module.export router
module.exports = router;
