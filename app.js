require('dotenv').config({ path: 'env/.env' })

const MailController = require('./src/controllers/mail-controller')
const Rabbitmq = require("./rabbitmq")


async function start() {
    const client = new Rabbitmq(process.env.SUBSCRIBE_QUEUE, 'test')

    await client.setupConnection()

    await client.receive(MailController.processMailMessages)
}

start()
