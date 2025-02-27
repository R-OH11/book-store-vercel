import validator from "../configuration/validation.config.js";
import bcrypt from "bcrypt";
import helpers from "../helpers/index.helper.js";
import userService from "../services/user.service.js";
import bookService from "../services/books.service.js";
import responseHelper from "../helpers/response.helper.js";
import jwtMiddleware from "../middlewares/jwt.middleware.js";
import registerValidator from "../validators/register.validator.js";
import authByEmailValidator from "../validators/auth.email.validator.js";
import booksValidator from "../validators/books.validator.js";
import APPCONSTANTS from "../helpers/message.helper.js";
import __dirname from "../configuration/dir.config.js";
import moment from "moment";

const { generateToken } = helpers,
  { validationThrowsError } = validator,
  { send200, send403, send400, send401, send404 } = responseHelper,
  { createUser, retrieveUserByEmail, updateUser, retrieveUser } = userService,
  {
    createBook,
    retrieveBookById,
    retrieveAllBooks,
    deleteBookById,
    updateBook,
  } = bookService,
  { verifyToken: jwtAuthGuard } = jwtMiddleware,
  {
    MESSAGES: {
      VLD_ERR,
      USER_REG_SUCCESS,
      USER_NOT_FOUND_ERR,
      LOGIN_SUCCESS,
      NUMBER_ALR_RGSTD,
      USER_INVD_PWD_ERR,
      USER_PROFILE,
      DELETE_SUCCESS_BOOK,
    },
  } = APPCONSTANTS;

const retrieveOneBook = [
    jwtAuthGuard,
    async (req, res) => {
      const errors = validationThrowsError(req);
      if (errors.length)
        send400(res, {
          status: false,
          message: VLD_ERR,
          data: errors,
        });
      else {
        const {
          query: { id: bookId },
        } = req;
        const book = await retrieveBookById(bookId);
        send200(res, {
          status: true,
          message: "Book details",
          data: book,
        });
      }
    },
  ],
  retrieveAllBook = [
    jwtAuthGuard,
    async (req, res) => {
      const errors = validationThrowsError(req);
      if (errors.length)
        send400(res, {
          status: false,
          message: VLD_ERR,
          data: errors,
        });
      else {
        let {
            query: { page, limit, search, genre },
          } = req,
          offset = page && limit ? Math.abs(page - 1) * limit : 0,
          sortObj = {
            createdAt: -1,
          },
          filterObj = {};
        if (search !== "all") {
          filterObj.$or = [
            {
              firstName: {
                $regex: `^${search}`,
                $options: "i",
              },
            },
            {
              lastName: {
                $regex: `^${search}`,
                $options: "i",
              },
            },
            {
              description: {
                $regex: `^${search}`,
                $options: "i",
              },
            },
            {
              authorName: {
                $regex: `^${search}`,
                $options: "i",
              },
            },
          ];
        }
        if (genre && genre !== "all") filterObj.genre = genre;
        let books = await retrieveAllBooks(
          filterObj,
          sortObj,
          limit,
          offset,
          "_id bookName genre description authorName pricePerUnit bookImageUrl "
        );
        send200(res, {
          status: true,
          message: "All Books",
          data: books,
        });
      }
    },
  ],
  commonBookDomain = {
    retrieveAllBook,
    retrieveOneBook,
  };

export default commonBookDomain;
