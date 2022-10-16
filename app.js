require('dotenv').config({ path: 'env/.env' })

const MailController = require('./src/controllers/mail-controller')

async function start() {
    await MailController.consumeMailMessages()
}

start()
