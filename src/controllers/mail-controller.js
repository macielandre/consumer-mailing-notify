const CryptographyService = require("../services/cryptography-service")
const InputMessageValidation = require("../validations/input-message-validation")
const MailService = require("../services/mail-service")

class EmailController {
    static async consumeMailMessages() {
        // to do: implement rabbitmq queue consumer
        const amqp = {
            consumedMessage: '{"subject":"Testes","message":"testando msg","receiver":"maciel.andre@live.com"}'
        }
        
        while(amqp) {
            try {
                const { consumedMessage } = amqp
                const decryptedMessage = CryptographyService.decrypt(consumedMessage)
                const messageObject = JSON.parse(decryptedMessage)

                await InputMessageValidation.validateMailInput(messageObject)
                
                const mailClient = new MailService()
                const { subject, message, receiver } = messageObject

                await mailClient.sendMail({ subject, message, receiver })
            } catch(err) {
                throw new Error(err?.message)
            }
        }
    }
}

module.exports = EmailController