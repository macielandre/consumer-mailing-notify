const crypto = require('crypto')

class CryptographyService {
    static decrypt(encryptedMessage) {
        const dataArray = encryptedMessage.split(':')
        const decipher = crypto.createDecipheriv('aes-256-cbc', process.env.AES_256_KEY, Buffer.from(dataArray[0], 'hex'))

        let decrypted = decipher.update(dataArray[1], 'hex', 'utf8')

        decrypted += decipher.final('utf8')

        return decrypted
    }
}

module.exports = CryptographyService