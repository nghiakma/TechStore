import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Đăng ký nhận bản tin</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Đặt mua
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ với chúng tôi</h4>
              <div>
                <address className="text-white fs-6">
                  Trieu khuc, Ha dong, Ha Noi <br />{" "}
                  Vietnam <br />
                  PinCode: 100000
                </address>
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +84 843016069
                </a>
                <a
                  href="mailto:nguyenhuylm123@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  nghiangua111@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                Chính sách hoàn tiền
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                Chính sách vận chuyển
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                Điều khoản & Điều kiện
                </Link>
                <Link className="text-white py-2 mb-1">Bài viết</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Giới thiệu về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Câu hỏi thường gặp</Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Liên kết nhanh</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Máy tính xách tay</Link>
                <Link className="text-white py-2 mb-1">Tai nghe</Link>
                <Link className="text-white py-2 mb-1">Máy tính bảng</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Được cung cấp bởi Tech Store
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
