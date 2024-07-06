
import BookStore from "../models/bookStore.model.js";
import commonHelper from "../helpers/db.common.helper.js";

const {
  createOne,
  updateOne,
  retrieveManyWithPagination,
  retrieveById,
  deleteOne
} = commonHelper;

const createBook = async (data) => {
  return await createOne(BookStore, { ...data });
},
retrieveBookById = async (bookId) => {
  return await retrieveById(BookStore,{_id: bookId});
},
deleteBookById = async (bookId) => {
  return await deleteOne(BookStore, { _id: bookId });
},
updateBook = async (filter, data) => {
  return await updateOne(BookStore, { ...filter }, { ...data });
},
retrieveAllBooks = async (filter, sort, limit, offset, select) => {
  return await retrieveManyWithPagination(
    BookStore,
    { ...filter },
    { ...sort },
    limit,
    offset,
    select
  );
},
  bookService = {
    createBook,
    retrieveAllBooks,
    retrieveBookById,
    deleteBookById,
    updateBook
  };

export default bookService;
