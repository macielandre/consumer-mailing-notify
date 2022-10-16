require('dotenv').config({ path: 'env/.env' })

const amqp = require('amqplib')
const CryptographyService = require('../services/cryptography-service')

class Ampq {
    constructor(uri, queue) {
        this.connection
        this.uri = uri
        this.channel
        this.queue = queue
    }

    async setupConnection() {
        this.connection = await amqp.connect(this.uri)
        this.channel = await this.connection.createChannel()

        await this.channel.assertQueue(this.queue, { durable: false })
    }

    send(message) {
        this.channel.sendToQueue(this.queue, Buffer.from(message))

        console.log('Message sent')
    }

    async receive(processFn) {
        await this.channel.consume(this.queue, async message => {
            const encryptedData = message.content.toString()

            const decryptedData = CryptographyService.decrypt(encryptedData)

            console.log('Message received')

            await processFn(decryptedData)
        }, { noAck: true })
    }
}

module.exports = Ampq