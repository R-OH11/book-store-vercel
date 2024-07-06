import User from "../models/user.model.js";
import commonHelper from "../helpers/db.common.helper.js";

const {
  createOne,
  retrieveOne,
  updateOne,
  upsertOne,
  updateMany,
  retrieveById,
  retrieveMany,
  deleteOne,
  modUpsertOne,
  deleteMany,
} = commonHelper;

const createUser = async (data) => {
    return await createOne(User, { ...data });
  },
  retrieveUserByEmail = async (email) => {
    return await retrieveOne(User, { email });
  },
  retrieveUserById = async (userId) => {
    return await retrieveById(User, userId);
  },
  deleteUserById = async (userId) => {
    return await deleteOne(User, { _id: userId });
  },
  deleteMultipleUsers = async (data) => {
    return await deleteMany(User, { _id: { $in: [...data] } });
  },
  retrieveUsers = async (filter, sort) => {
    return await retrieveMany(User, { ...filter }, { ...sort }, undefined);
  },
  retrieveUser = async (filter) => {
    return await retrieveOne(User, { ...filter });
  },
  updateUser = async (filter, data) => {
    return await updateOne(User, { ...filter }, { ...data });
  },
  upsertUser = async (filter, data) => {
    return await upsertOne(User, { ...filter }, { ...data });
  },
  modUpsertUser = async (filter, data) => {
    return await modUpsertOne(User, { ...filter }, { ...data });
  },
  suspendMultipleUsers = async (filter, data) => {
    return await updateMany(User, { ...filter }, { ...data });
  },
  userService = {
    createUser,
    retrieveUserByEmail,
    retrieveUser,
    modUpsertUser,
    updateUser,
    upsertUser,
    retrieveUserById,
    retrieveUsers,
    deleteUserById,
    deleteMultipleUsers,
    suspendMultipleUsers,
  };

export default userService;
