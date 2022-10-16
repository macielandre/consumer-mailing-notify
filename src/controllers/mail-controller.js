const CryptographyService = require("../services/cryptography-service")
const InputMessageValidation = require("../validations/input-message-validation")
const MailService = require("../services/mail-service")

class EmailController {
    static async processMailMessages(consumedMessage) {
        try {
            const messageObject = JSON.parse(consumedMessage)

            await InputMessageValidation.validateMailInput(messageObject)
                
            const mailClient = new MailService()
            const { subject, message, receiver } = messageObject

            await mailClient.sendMail({ subject, message, receiver })
        } catch(err) {
            console.log(err?.message)
        }
    }
}

module.exports = EmailController