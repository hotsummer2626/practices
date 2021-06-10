const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    _id: {
      type: String,
      uppercase: true,
      alias: "code"
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: "This is a description",
    },
    __v: {
      type: Number,
      select: false
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtual: true,
    },
    id: false,
  }
);

schema.virtual("code").get(function () {
  return this._id;
});

module.exports = model("Course", schema);
