import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { OpenRoutes } from "./routing/OpenRoutes";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import MainLayout from "./components/MainLayout";
import Customers from "./pages/Customers";
import Addcat from "./pages/Addcat";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Addbrand from "./pages/Addbrand";
import Colorlist from "./pages/Colotlist";
import Addcolor from "./pages/Addcolor";
import Couponlist from "./pages/Couponlist";
import AddCoupon from "./pages/AddCoupon";
import Productlist from "./pages/Productlist";
import Addproduct from "./pages/Addproduct";
import ViewEnq from "./pages/ViewEnq";
import ViewOrder from "./pages/ViewOrder";
import Orders from "./pages/Orders";
import Enquiries from "./pages/Enquiries";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <OpenRoutes>
              <Login />
            </OpenRoutes>
          }
        />
          {/* <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} /> */}
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <MainLayout />
            </PrivateRoutes>
          }
        >
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id" element={<ViewOrder />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
         <Route path="customers" element={<Customers />} />
         <Route path="list-brand" element={<Brandlist />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand/:id" element={<Addbrand />} />
         <Route path="list-category" element={<Categorylist />} />
         <Route path="category" element={<Addcat />} />
         <Route path="category/:id" element={<Addcat />} />
         <Route path="list-color" element={<Colorlist />} />
          <Route path="color" element={<Addcolor />} />
          <Route path="color/:id" element={<Addcolor />} />
          <Route path="coupon-list" element={<Couponlist />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="product" element={<Addproduct />} />
          <Route path="product/:id" element={<Addproduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
