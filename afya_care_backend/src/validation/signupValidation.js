// Import validation module
const Joi = require('joi');

// Define 
const pattern = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const signupValidation = (data) => {
    const signUpSchema = Joi.object({
        name : Joi.string().required().min(3),
        email: Joi.string().required().email().min(6),
        birth_date: Joi.date().required(),
        password: Joi.string().required().min(4)
    });

    const pass = signUpSchema.validate(data);
    return pass;
}

module.exports.signupValidation = signupValidation;