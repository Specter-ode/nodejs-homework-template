const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");
const { auth, upload } = require("../../middlewares");

router.post("/signup", ctrl.signup);
router.post("/login", ctrl.login);
router.post("/logout", auth, ctrl.logout);
router.get("/current", auth, ctrl.getCurrent);
router.patch("/", auth, ctrl.updateSubscription);
router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
