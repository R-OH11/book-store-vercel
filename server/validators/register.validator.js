import validator from "../configuration/validation.config.js";
import APPCONSTANTS from "../helpers/message.helper.js";

const { check } = validator,
  {
    VALIDATIONS: {
      NAME_ALPHA,
      NAME_REQ,
      PASSWORD_REQ,
      PASSWORD_INVD,
      PHONE_REQ,
      PHONE_INVD,
      EMAIL_REQ,
      INVD_EMAIL,
    },
  } = APPCONSTANTS;

const firstName = check("firstName")
    .not()
    .isEmpty()
    .withMessage(NAME_REQ)
    .custom((value) => /^[a-zA-Z ]*$/.test(value))
    .withMessage(`First ${NAME_ALPHA}`),
  lastName = check("lastName")
    .not()
    .isEmpty()
    .withMessage(NAME_REQ)
    .custom((value) => /^[a-zA-Z ]*$/.test(value))
    .withMessage(NAME_ALPHA),
  email = check("email")
    .not()
    .isEmpty()
    .withMessage(EMAIL_REQ)
    .trim()
    .isEmail()
    .withMessage(INVD_EMAIL),
  password = check("password")
    .not()
    .isEmpty()
    .withMessage(PASSWORD_REQ)
    .custom((value) =>
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        value
      )
    )
    .withMessage(PASSWORD_INVD),
  
  registerValidator = {
    firstName,
    lastName,
    email,
    password,
  };

export default registerValidator;
