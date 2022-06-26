const express = require("express")
const router = express.Router()
const { default: mongoose } = require("mongoose")

// require the Drone model here
const droneModel = require("../models/Drone.model")

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await droneModel.find()
    res.status(200).json(allDrones)
  } catch (err) {
    next(err)
  }
})

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const createNew = await droneModel.create(req.body)
    res.status(201).json(newDroneCreated)
  } catch (err) {
    res.status(400).json("drone not created")
  }
})

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const droneId = req.params.id
    const updateDrone = await droneModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    res.status(200).json(updatedDrone)
  } catch (err) {
    next(err)
  }
})

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const deletedDrone = await Drone.findByIdAndDelete(req.params.id)
    res.json({ message: `you deleted ${deletedDrone}` })
  } catch (err) {
    next(err)
  }
})

module.exports = router
