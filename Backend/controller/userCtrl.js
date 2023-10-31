const User = require("../models/userModel");
const uniqid = require("uniqid");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongoDbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
// Tạo user ----------------------------------------------

const createUser = asyncHandler(async (req, res) => {
 
    const email = req.body.email;
    /**
     * TODO: Xem user tồn tại hay chưa
     */
    const findUser = await User.findOne({ email: email });
  
    if (!findUser) {
      /**
       * TODO:Nếu không tìm thấy user tạo user mới
       */
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
      /**
       * TODO:Nếu tìm thấy báo lỗi
       */
      throw new Error("Người dùng đã tồn tại");
    }
  });

// Đăng nhập
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // kiểm tra nếu user tồn tại hoặc không
    const findUser = await User.findOne({ email });
    console.log(findUser);
    if (findUser && (await findUser.isPasswordMatched(password))) {
      const refreshToken = await generateRefreshToken(findUser?._id);
      const updateuser = await User.findByIdAndUpdate(
        findUser.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,//72h
      });
      res.json({
        _id: findUser?._id,
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  }); 

module.exports = {
    createUser,
    loginUserCtrl
};
  