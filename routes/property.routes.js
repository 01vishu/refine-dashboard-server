import express from "express";
const router = express.Router();

import {
  getAllProperties,
  createProperty,
  deleteProperty,
  getPropertyDetail,
  updateProperty,
} from "../controllers/property.controller.js";

router.route("/").get(getAllProperties);
router.route("/:id").get(getPropertyDetail);
router.route("/").post(createProperty);
router.route("/:id").patch(updateProperty);
router.route("/:id").delete(updateProperty);
