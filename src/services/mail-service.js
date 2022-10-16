const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.client = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendMail({ subject ,message, receiver }) {
        const info = await this.client.sendMail({
            from: process.env.APPLICATION_MAIL,
            subject,
            text: message,
            to: receiver,
        })

        console.log('Mail sent')

        console.log(`Url: ${nodemailer.getTestMessageUrl(info)}`)
    }
}

module.exports = MailService