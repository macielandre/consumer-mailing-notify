const InputMessageValidation = require("../validations/input-message-validation")
const MailService = require("../services/mail-service")

class MailController {
    static async processMailMessages(consumedMessage) {
        try {
            const messageObject = JSON.parse(consumedMessage)

            await InputMessageValidation.validateMailInput(messageObject)
                
            const mailClient = new MailService()
            const { subject, message, receiver } = messageObject

            await mailClient.sendMail({ subject, message, receiver })

            return {
                status: 'success',
                message: 'message sent for receiver'
            }
        } catch(err) {
            console.log(err?.message)

            return {
                status: 'error',
                message: err?.message || 'unexpected error'
            }
        }
    }
}

module.exports = MailController