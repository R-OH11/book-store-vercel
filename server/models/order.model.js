import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import BookStore from "./bookStore.model.js";
import User from "./user.model.js";

const { Schema } = mongoose,
  orderSchema = new Schema(
    {
      order_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      order_item: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Books",
          required: true,
        },
      ],
      total: {
          type: mongoose.Types.Decimal128,
          required: true
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  orderSchema.plugin(mongoosePaginate);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
