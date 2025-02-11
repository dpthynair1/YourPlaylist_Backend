import { Router } from "express";
import {
  getCurrentUser,
  getUserChannelProfile,
  getUserWatchHistory,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updatePassword,
  updateUserAvatar,
  updateUserCoverImage,
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
router.route("/current-user").get(verifyJWT, getCurrentUser);

//update user details
router.route("/update-user").patch(verifyJWT, updateAccountDetails);

//update user avatar
router.route("/avatar").patch(
  verifyJWT,
  upload.single({
    name: "avatar",
    maxCount: 1,
  }),

  updateUserAvatar
);
//update user coverImage
router.route("/cover-image").patch(
  verifyJWT,
  upload.single("coverImage"),

  updateUserCoverImage
);

// Channel profile
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

//WatchHistory
router.route("/history").get(verifyJWT, getUserWatchHistory);
export default router;
