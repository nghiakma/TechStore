import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/cutomers/customerSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import uploadReducer from "../features/upload/uploadSlice";
import brandReducer from "../features/brand/brandSlice";
import colorReducer from "../features/color/colorSlice";
import couponReducer from "../features/coupon/couponSlice";
import productReducer from "../features/product/productSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    pCategory: pCategoryReducer,
    upload: uploadReducer,
    brand: brandReducer,
    color: colorReducer,
    coupon: couponReducer,
    product: productReducer,
    enquiry: enquiryReducer,
  },
});
