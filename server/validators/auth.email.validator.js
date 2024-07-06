import validator from "../configuration/validation.config.js";
import APPCONSTANTS from "../helpers/message.helper.js";

const { check } = validator,
  {
    VALIDATIONS: {
      INVD_EMAIL,
      EMAIL_REQ,
      PASSWORD_REQ
    },
  } = APPCONSTANTS;

  const email = check("email")
  .not()
  .isEmpty()
  .withMessage(EMAIL_REQ)
  .trim()
  .isEmail()
  .withMessage(INVD_EMAIL),
  password = check("password").not().isEmpty().withMessage(PASSWORD_REQ),
  authByEmailValidator = {
    email,
    password
  };

export default authByEmailValidator;
