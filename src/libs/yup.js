const yup = require('yup')

yup.validateSchema = async (schema, params) => {
    try {
        return await schema.validate(params)
    } catch(err) {
        throw new Error(err?.message)
    }
}

module.exports = yup