const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/heart-beat', (req, res, next) => {
    res.json({
        status: "ok"
    })
});

module.exports = router;
