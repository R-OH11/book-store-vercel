import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose,
  booksSchema = new Schema(
    {
      bookName: {
        type: String,
        required: true,
      },
      authorName: {
        type: String,
        index: true,
        required: true
      },
      genre: {
        type: String,
        index: true,
        enum: ["romantic", "thriller", "horror","autobiography","fantasy","scifi","adventure", "finance"]
      },
      description: {
        type: String,
        default: null
      },
      pricePerUnit: {
        type: Number,
        required: true
      },
      bookImageUrl: {
        type: String,
        default: null
      },
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

booksSchema.plugin(mongoosePaginate);

const BookStore = mongoose.model("Books", booksSchema);

export default BookStore;
