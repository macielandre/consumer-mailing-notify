const MailService = require("../../services/mail-service")

describe('mail service tests', () => {
    describe('mail service constructor tests', () => {
        test('should create nodemailer client', () => {
            const client = new MailService()
        
            expect(client).toBeInstanceOf(MailService)
        })
    })
    
    test('should send mail', async () => {
        const client = new MailService()
        const response = await client.sendMail({ subject: 'Test' ,message: 'Test message', receiver: 'receiver@gmail.com' })
    
        expect(response).toMatchObject({ accepted: ['receiver@gmail.com'] })
    })
})