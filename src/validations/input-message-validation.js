const yup = require('../libs/yup')

class InputMessageValidation {
    static async validateMailInput(params) {
        const schema = yup.object({
            subject: yup.string().min(1).max(25).required(),
            message: yup.string().min(1).max(280).required(),
            receiver: yup.string().email().required()
        })

        return yup.validateSchema(schema, params)
    }
}

module.exports = InputMessageValidation