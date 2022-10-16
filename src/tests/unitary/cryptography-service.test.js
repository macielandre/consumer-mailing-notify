const crypto = require('crypto')
const CryptographyService = require("../../services/cryptography-service")

describe('cryptography service tests', () => {
    beforeAll(() => {
        jest.spyOn(crypto, 'randomBytes').mockReturnValue(new Uint8Array([241, 201, 168, 70, 3, 46, 13, 96, 57, 209, 50, 150, 171, 224, 112, 31]))
    })
    
    describe('encrypt tests', () => {
        test('should encrypt data', () => {
            const response = CryptographyService.encrypt('Hello world')
        
            expect(response).toBe('8175f9b9971658f48a2a92c266e03923')
        })
    })

    describe('decrypt tests', () => {
        test('should decrypt encrypted data', () => {
            const response = CryptographyService.decrypt('8175f9b9971658f48a2a92c266e03923')
        
            expect(response).toBe('Hello world')
        })
    })
})