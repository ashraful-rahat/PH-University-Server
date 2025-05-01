import { Schema, model } from "mongoose";
import config from "../../../config";
import { TUser } from "./user.interface";
const bcrypt = require("bcrypt");
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
const User = model<TUser>("User", userSchema);

export default User;
