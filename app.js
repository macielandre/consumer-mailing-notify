require('dotenv').config({ path: 'env/.env' })

const MailController = require('./src/controllers/mail-controller')
const Amqp = require("./src/libs/amqp")

async function start() {
    const amqpClient = new Amqp(process.env.SUBSCRIBE_QUEUE, 'test')

    await amqpClient.setupConnection()

    await amqpClient.receive(MailController.processMailMessages)
}

start()
