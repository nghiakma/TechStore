import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { OpenRoutes } from "./routing/OpenRoutes";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} />
           <Route path="product" element={<OurStore />} />
           <Route
              path="my-profile"
              element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              }
            />
           <Route
              path="login"
              element={
                <OpenRoutes>
                  <Login />
                </OpenRoutes>
              }
            />
           <Route path="forgot-password" element={<Forgotpassword />} />
            <Route
              path="signup"
              element={
                <OpenRoutes>
                  <Signup />
                </OpenRoutes>
              }
            />
            <Route path="reset-password/:token" element={<Resetpassword />} />
           <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
