import { Router } from "express";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updatePassword,
  updateUserAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured routes
router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

// change Password
router.route("/change-password").post(verifyJWT, updatePassword);

//get current user
router.route("/user").get(verifyJWT, getCurrentUser);

//update user details
router.route("/update-user").patch(verifyJWT, updateAccountDetails);

//update user avatar
router.route("/update-avatar").patch(
  upload.single({
    name: "avatar",
    maxCount: 1,
  }),
  verifyJWT,
  updateUserAvatar
);
export default router;
