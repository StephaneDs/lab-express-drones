// Iteration #1
const { Schema, SchemaTypes, model } = require("mongoose")

const droneSchema = new Schema(
  {
    name: {
      type: String,
    },
    propellers: {
      type: Number,
    },
    maxSpeed: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const droneModel = model("drones", droneSchema)

module.exports = droneModel
