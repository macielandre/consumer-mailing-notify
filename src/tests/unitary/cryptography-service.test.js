const crypto = require('crypto')
const CryptographyService = require("../../services/cryptography-service")

const encryptedData = '8df2f746d8605f13321335f9cb9ff4f6:78f52fee9047a6cab2f40256698bf1231ad0eb1b94d6869ecc9a077a7bccf9409d00b57d283c9d91101bdf1e48e0936c498c0a35c7b61eb148e90797515fdb6595b3a5e45e8aeda1fe613c60e2920c169941a60aa2372fcb704e0146b45f2b98'

describe('cryptography service tests', () => {
    describe('decrypt tests', () => {
        test('should decrypt encrypted data', () => {
            const response = CryptographyService.decrypt(encryptedData)
        
            expect(response).toBe('{\"receiver\":\"receiver@gmail.com\",\"message\":\"Your token is 1234\",\"subject\":\"Password change\"}')
        })
    })
})