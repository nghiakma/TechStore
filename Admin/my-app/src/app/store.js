import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/cutomers/customerSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import uploadReducer from "../features/upload/uploadSlice";
import brandReducer from "../features/brand/brandSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    pCategory: pCategoryReducer,
    upload: uploadReducer,
    brand: brandReducer,
  },
});
