import express from "express";
const router = express.Router();
import {
  createUser,
  getAllUsers,
  getUserInfoById,
} from "../controllers/user.controller";

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoById);

export default router;
