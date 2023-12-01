const express = require("express");
const {
    createUser,
    loginUserCtrl,
    loginAdmin,
    handleRefreshToken,
    logout,
    updatedUser,
    getallUser,
    getaUser,
    deleteaUser,
    blockUser,
    unblockUser,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    getWishlist,
    userCart,
    getUserCart,
    emptyCart,
    removeProductFromCart,
    updateProductQuantityFromCart
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.get("/all-users", getallUser);
router.delete("/:id", deleteaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.get("/wishlist", authMiddleware, getWishlist);
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete(
    "/delete-product-cart/:cartItemId",
    authMiddleware,
    removeProductFromCart
  );
  router.delete(
    "/update-product-cart/:cartItemId/:newQuantity",
    authMiddleware,
    updateProductQuantityFromCart
  );
  
module.exports = router;

