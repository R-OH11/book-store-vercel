import validator from "../configuration/validation.config.js";
import APPCONSTANTS from "../helpers/message.helper.js";

const { check } = validator,
  {
    VALIDATIONS: { NAME_ALPHA, NAME_REQ },
  } = APPCONSTANTS;

const bookName = check("bookName")
    .not()
    .isEmpty()
    .withMessage(NAME_REQ)
    .custom((value) => /^[\w\s.,!?()-:;'"]*$/i.test(value))
    .withMessage("Book name contains invalid characters"),
  authorName = check("authorName")
    .not()
    .isEmpty()
    .withMessage("author is a required field")
    .custom((value) => /^[a-zA-Z ]*$/.test(value))
    .withMessage("Author should be in alphabets"),
  genre = check("genre")
    .not()
    .isEmpty()
    .withMessage("genre cant be empty")
    .custom((value) => /^[a-zA-Z ]*$/.test(value))
    .withMessage("Select genre from dropdown"),
  description = check("description")
    .not()
    .isEmpty()
    .withMessage("Description required")
    .custom((value) => {
      // Allow any printable character, but restrict certain patterns
      return /^[\x20-\x7E\s]*$/.test(value) && !/^\s+$/.test(value);
    })
    .withMessage("Description contains invalid characters"),
  pricePerUnit = check("pricePerUnit")
    .not()
    .isEmpty()
    .withMessage("Price is a required field"),
  bookImageUrl = check("bookImageUrl")
    .not()
    .isEmpty()
    .withMessage("Image URL is required")
    .isURL()
    .withMessage("Invalid URL format")
    .custom((value) => {
      const urlPattern = /\.(jpeg|jpg|gif|png)$/i;
      if (!urlPattern.test(value)) {
        throw new Error(
          "URL must end with a valid image extension (.jpeg, .jpg, .gif, or .png)"
        );
      }
      return true;
    }),
  booksValidator = {
    bookName,
    authorName,
    genre,
    description,
    pricePerUnit,
    bookImageUrl,
  };

export default booksValidator;
