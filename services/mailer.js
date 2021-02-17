const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_API_DOMAIN
});

const sendMail = (data) => {
    return new Promise((resolve, reject) => {
        mailgun.messages().send(data, (error, body) => {
            if (error) {
                reject(error)
            }
            resolve(body);
        });
    })
}

module.exports = {
    sendMail
}