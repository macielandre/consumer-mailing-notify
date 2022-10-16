const crypto = require('crypto')

class CryptographyService {
    static buildConfig() {
        const initVector = crypto.randomBytes(16)
        const encryptationType = 'aes-256-cbc'

        return [encryptationType, process.env.AES_256_KEY, initVector]
    }

    static encrypt(data) {
        const cipher = crypto.createCipheriv(...CryptographyService.buildConfig())

        let encryptedData = cipher.update(data, "utf-8", "hex")
            
        encryptedData += cipher.final("hex")
            
        return encryptedData
    }

    static decrypt(data) {
        const decipher = crypto.createDecipheriv(...CryptographyService.buildConfig())

        let decryptedData = decipher.update(data, "hex", "utf-8")

        decryptedData += decipher.final("utf8")

        return decryptedData
    }
}

module.exports = CryptographyService