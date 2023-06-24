import { Link } from "react-router-dom";
import bloodbd2 from "../assets/images/bloodbd2.jpeg";
import bloodbd3 from "../assets/images/bloodbd3.jpeg";
import { toast } from "react-toastify";
const Footer = () => {
  const footerAction = (e) => {
    e.preventDefault();
    toast.success("successfully sent", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }); 

  };
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area section-space-top">
                <div className="row alt-row">
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <div className="footer-area__single">
                      <h5>About Us</h5>
                      <p className="alt">
                        MedTech Donor is a platform where you can find blood
                        donors acros the country and find yyour perfect blood
                        group for your preferable location nerest to you. If you
                        are a donor you also get benefit for donating blood and
                        earn rewards which can be used as a vouchers or coupon
                        codes as well as also can widthrow money.
                      </p>

                      <div className="address">
                        <p>
                          <strong>Phone :</strong> +880 1317 903819
                        </p>
                        <p className="neutral-bottom">
                          <strong>Email :</strong> orin15-13462@diu.edu.bd
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-6">
                    <div className="footer-area__single">
                      <h5>Quick Links</h5>
                      <ul>
                        <li>
                          <Link to="/">
                            <i className="fa-solid fa-angles-right"></i>Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about-us">
                            <i className="fa-solid fa-angles-right"></i>About us
                          </Link>
                        </li>
                        <li>
                          <Link to="/blogs">
                            <i className="fa-solid fa-angles-right"></i>Blogs
                          </Link>
                        </li>
                        <li>
                          <Link to="/donors">
                            <i className="fa-solid fa-angles-right"></i>Donors
                          </Link>
                        </li>
                        <li>
                          <Link to="/donate-now">
                            <i className="fa-solid fa-angles-right"></i>Donate
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-md-6 col-lg-2 col-sm-6">
                    <div className="footer-area__single">
                      <h5>Services</h5>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-angles-right"></i>Blood
                            Donation
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-angles-right"></i>Health
                            Check
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-angles-right"></i> Blood
                            Bank
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-angles-right"></i>Donate
                            Process
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-angles-right"></i>Blood
                            Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6 col-lg-4 col-sm-6">
                    <div className="footer-area__single">
                      <h5>Latest News</h5>
                      <div className="latest-news__single">
                        <a href="#">
                          <img src={bloodbd2} alt="Latest News" />
                        </a>
                        <div className="latest-news__single-content">
                          <p className="mt-0">
                            <a href="#">
                              Volunteer donors meet 32% of blood demand in
                              Bangladesh
                            </a>
                          </p>
                          <p className="post-date">18 February, 2022</p>
                        </div>
                      </div>
                      <div className="latest-news__single">
                        <a href="#">
                          <img src={bloodbd3} alt="Latest News" />
                        </a>
                        <div className="latest-news__single-content">
                          <p className="mt-0">
                            <a href="#">
                              Donation is hope for poor helpless children
                            </a>
                          </p>
                          <p className="post-date">18 February, 2022</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <hr />
                <div className="footer-area__bottom">
                  <div className="row neutral-row d-flex align-items-center">
                    <div className="col-lg-6 row-item">
                      <div className="footer-area__bottom-left wow fadeInUp">
                        <p className="secondary">
                          Subscribe us for more update & news !!
                        </p>
                        <form action="" onSubmit={footerAction}>
                          <div className="input-group-btn">
                            <input
                              type="email"
                              name="newsletter__email"
                              id="newsletterEmail"
                              placeholder="Enter Your Email"
                              required
                            />
                            <button
                              type="submit"
                              className="button button--effect"
                            >
                              Subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 row-item">
                      <div className="footer-area__bottom-right">
                        <div className="social social--secondary">
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="https://www.twitter.com/" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                        {/* <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="#">Privacy Policy</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#">Terms & Conditions</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#">FAQ</a>
                            </li>
                          </ol>
                        </nav> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="secondary neutral-bottom">
                  Copyright &copy; 2023 <a href="#">MedTech</a>. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
