const express = require('express');
const router = express.Router();
const { sendMail } = require("../services/mailer");
const data = {
    "from": 'no-reply@mail.anthony-poon.com',
    "to": process.env.EMAIL_RECIPIENT,
    "subject": "Testing",
    "text": (new Date()).toISOString()
};

/* GET home page. */
router.get('/heart-beat', (req, res, next) => {
    res.json({
        status: "ok"
    })
});



router.post('/email', async(req, res, next) => {
    try {
        await sendMail(data);
        res.json({
            status: "success"
        })
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json(error);
    }
})

module.exports = router;
