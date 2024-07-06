import { Router } from "express";
import adminDomain from "../controller/admin.controller.js";
import APPCONSTANTS from "../helpers/message.helper.js";
import commonBookDomain from "../controller/commonBooks.controller.js";
const adminRouter = Router(),
  {
    authByEmail,
    addBooks,
    updateBookDetails,
    deleteBook,
    allUsersOrders,
    registerAdmin
   
  } = adminDomain,
  {    
    retrieveAllBook,
    retrieveOneBook
  } =commonBookDomain,
  {
    ROUTES: {
      ADMIN_ENDPOINTS: {
        AUTH_EMAIL,
        REGISTER_ADMIN,
        ALL_BOOKS,
        ADD_BOOK, 
        REMOVE_BOOK,
        ALL_ORDERS,
        UPDATE_BOOK,
        BOOK_DETAILS
      },
    },
  } = APPCONSTANTS;

adminRouter.post(REGISTER_ADMIN, registerAdmin);
adminRouter.post(AUTH_EMAIL, authByEmail);
adminRouter.post(ADD_BOOK,addBooks);
adminRouter.delete(REMOVE_BOOK,deleteBook);
adminRouter.post(UPDATE_BOOK,updateBookDetails)
adminRouter.get(BOOK_DETAILS,retrieveOneBook)
adminRouter.get(ALL_BOOKS,retrieveAllBook)
adminRouter.get(ALL_ORDERS,allUsersOrders)

export default adminRouter;
