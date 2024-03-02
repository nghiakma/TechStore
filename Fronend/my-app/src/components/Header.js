import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const Header = () => {
  return (
    <header className="header-top-strip py-3">
       <div className="container-xxl">
          <div className="row">
             <div className="col-6">
                <p className="text-white mb-0">Miễn phí ship</p>
             </div>
             <div className="col-6">
              <p className="text-end text-white mb-0">
                SĐT:
                <a className="text-white" href="tel:+91 8264954234">
                  +84 843016069
                </a>
              </p>
            </div>
          </div>
       </div>
    </header>
  );
}

export default Header;
