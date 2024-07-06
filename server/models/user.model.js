import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose,
  userSchema = new Schema(
    {
      firstName: {
        type: String,
        required: true,
      }, 
      lastName: {
        type: String,
        required: true,
      }, 
      email: {
        type: String,
        index: true,
        required: true
      },
      role: {
        type: String,
        default:"user",
      }, 
      password: {
        type: String,
        default: null,
      },
      loginToken: {
        type: String,
        default: null,
      },
      loginTime: {
        type: Date,
        default: null,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

export default User;
