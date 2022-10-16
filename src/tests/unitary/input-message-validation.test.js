const InputMessageValidation = require("../../validations/input-message-validation")

describe('input message validation service tests', () => {
    test('should accept valid input', async () => {
        const response = await InputMessageValidation.validateMailInput({ subject: 'Test' ,message: 'Test message', receiver: 'receiver@gmail.com' })

        expect(response).toMatchObject({ subject: 'Test' ,message: 'Test message', receiver: 'receiver@gmail.com' })
    })

    test('should reject invalid email', async () => {
        const mock = { subject: 'Test' ,message: 'Test message', receiver: 'receiver' }

        expect(async () => { await InputMessageValidation.validateMailInput(mock) }).rejects.toThrow()
    })

    test('should reject invalid subject', async () => {
        const mock = { subject: '' ,message: 'Test message', receiver: 'receiver@gmail.com' }

        expect(async () => { await InputMessageValidation.validateMailInput(mock) }).rejects.toThrow()
    })
    test('should reject invalid message', async () => {
        const mock = { subject: 'Test' ,message: '', receiver: 'receiver@gmail.com' }

        expect(async () => { await InputMessageValidation.validateMailInput(mock) }).rejects.toThrow()
    })
})