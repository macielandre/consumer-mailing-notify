const MailController = require("../../controllers/mail-controller")
const inputMessageMocks = require('../mocks/input-messages')
const responseMessageMocks = require('../mocks/response-messages')


describe('mail controller tests', () => {
    describe('processMailMessages tests', () => {
        test('should send mail', async () => {
            const response = await MailController.processMailMessages(JSON.stringify(inputMessageMocks.validInput))

            expect(response).toMatchObject(responseMessageMocks.success)
        })

        test('should send mail', async () => {
            const response = await MailController.processMailMessages(JSON.stringify(inputMessageMocks.validInput))

            expect(response).toMatchObject(responseMessageMocks.success)
        })
    })
})