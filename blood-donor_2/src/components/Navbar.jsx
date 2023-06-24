import { useContext, useEffect, useState } from "react";
import logo3 from "../assets/images/logo3.png";
import $ from "jquery";
import "jquery-nice-select";
import "jquery-nice-select/css/nice-select.css";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
// import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import axios from "axios";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { toast } from "react-toastify";

const base = "http://localhost:5000";

const Navbar = () => {
  // const { refresh, setRefresh, refreshAdmin, setRefreshAdmin } =
  //   useContext(AppContext);
  const [user, setUser] = useState();
  const [u, setU] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [req, setReq] = useState([]);
  const [ind, setInd] = useState(0);
  const [av, setAv] = useState(false);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    const data = localStorage.getItem("bloodUserData");
    if (data) {
      setUser(JSON.parse(data));
      // setRefresh(!refresh);
    } else {
      setUser(null);
    }
  }, [refresh]);
  useEffect(() => {
    if (user) {
      if (user.status == "admin" || user.status == "superAdmin") {
        setU(true);
      }
    } else {
      setU(false);
    }
  }, [user]);

  const getDays = (d, m, y) => {
    let currentDate = new Date();
    let birthDate = new Date(`${m} ${d} ${y}`);
    let ageInMilliseconds = currentDate - birthDate;

    let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    return ageInDays;
  };

  useEffect(() => {
    if (user) {
      // console.log("use las" , getDays(user.last_month, user.last_day, user.last_year) );
      if (getDays(user.last_month, user.last_day, user.last_year) > 90) {
        setAv(false);
      } else {
        setAv(true);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      axios
        .get(`${base}/req`)
        .then(function (response) {
          const allReq = response.data;
          const filtered = allReq.filter(
            (f) => f.reciever_email == user.email && f.status == "pending"
          );
          // console.log("re", filtered)
          setReq(filtered);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [user, refresh]);

  useEffect(() => {
    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // animated hamburger icon
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("toggle-active");
    });

    // position navbar on scroll
    var fixedTop = $(".header");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixedTop.addClass("header-active animated fadeInDown");
        $(".hero, .banner").addClass("body-active");
      } else {
        fixedTop.removeClass("header-active animated fadeInDown");
        $(".hero, .banner").removeClass("body-active");
      }
    });

    // search box toggle
    $(".search-icon").click(function () {
      $(".search").slideDown();
    });

    // close search box
    $(".close").click(function () {
      $(".search").slideUp();
    });

    // open sidenav
    $(".open-sidenav").on("click", function () {
      $(this).toggleClass("toggle-active");
      $(".sidenav").addClass("sidenav-active");
    });

    // close sidenav
    $(".close-sidebar").on("click", function () {
      $(".sidenav").removeClass("sidenav-active");
      $(".open-sidenav").toggleClass("toggle-active");
    });

    // on window resize
    $(window).on("resize", function () {
      if ($(".dropdown-menu").hasClass("show")) {
        $(".dropdown-menu").removeClass("show");
        $(".dropdown-toggle").removeClass("show");
      }
      $(".navbar-toggler, .open-sidenav").removeClass("toggle-active");
      $(".navbar-collapse").removeClass("show");
      $(".select-language").removeClass("open");
      $(".sidenav").removeClass("sidenav-active");
      $(".search").slideUp();
    });

    $(document).mouseup(function (e) {
      if (
        !$(".open-sidenav").is(e.target) &&
        !$(".sidenav").is(e.target) &&
        $(".sidenav").has(e.target).length == 0
      ) {
        $(".open-sidenav").removeClass("toggle-active");
        $(".sidenav").removeClass("sidenav-active");
      }
    });

    // open reply form
    $(".open-reply").on("click", function () {
      $(this).next(".reply-form").slideToggle();
    });

    // scroll bottom to top
    var ScrollTop = $(".scrollToTop");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 300) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });

    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  }, []);

  const signOut = () => {
    localStorage.removeItem("bloodUserData");
    setRefresh(!refresh);
  };

  const newMem=() => {
    if (user) {
      // console.log("ussss", user);
      axios
        .get(`${base}/member`)
        .then(function (response) {
          console.log("getting new", response.data);
          const newU = response.data.find((n) => n.email == user.email);
          console.log("got new", newU);

          const us = localStorage.getItem("bloodUserData");
          if (us) {
            localStorage.removeItem(user);
            localStorage.setItem("bloodUserData", JSON.stringify(newU));
            setUser(newU);
          }
          setLoading(false)
        })
        .catch(function (error) {
          setLoading(false)
          console.log(error);
          toast.error(" successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  }

  // const newMem=()=>{

  //     // setRefresh(!refresh)

  // }

  const nameModify = (fName, lName) => {
    var fullName = fName + " " + lName;
    // console.log(fullName);

    // Split the full name into an array of words
    var words = fullName.split(" ");

    // Get the first letter of each word and convert it to uppercase
    var firstNameInitial = words[0].charAt(0).toUpperCase();
    var lastNameInitial = words[1].charAt(0).toUpperCase();

    // Combine the initials into a single string
    var initials = firstNameInitial + lastNameInitial;
    // console.log(initials);
    return initials;
  };

  //   const makeDonate = (e) => {
  //     e.preventDefault();
  //     const t = e.target;
  //     const currentDate = new Date();
  //     const day = currentDate.getDate();
  // var month = currentDate.getMonth();
  // var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // var monthName = monthNames[month];
  // var year = currentDate.getFullYear();
  //     const body = {
  //       blood_group: t.blood_group.value,
  //       // first_name: t.donate__fname.value,
  //       // last_name: t.donate__lname.value,
  //       // email: t.donate__mail.value,
  //       regi_city: t.donate__address.value,
  //       last_year: year,
  //       last_month: monthName,
  //       last_day:day,
  //     };

  //     const body2 = {
  //       blood_group: t.blood_group.value,
  //       first_name: t.donate__fname.value,
  //       last_name: t.donate__lname.value,
  //       email: t.donate__mail.value,
  //       regi_city: t.donate__address.value,
  //       last_year: year,
  //       last_month: monthName,
  //       last_day:day,
  //     };

  //     axios
  //       .patch(`${base}/member/${user._id}`, body)
  //       .then(function (response) {

  //         axios
  //       .post(`${base}/donate`, body2)
  //       .then(function (response) {
  //         toast.success("Added successfully", {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //         // console.log(response);
  //       })
  //       .catch(function (error) {
  //         // console.log(error);
  //         toast.error(error?.message, {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       });

  //       })
  //       .catch(function (error) {
  //         // console.log(error);
  //         toast.error(error?.message, {
  //           position: "top-center",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //       });
  //   };

  const accept = (e) => {
    e.preventDefault();
    setLoading(true)
    const body = {
      status: "accepted",
    };
    axios
      .patch(`${base}/req/${req[ind]._id}`, body)
      .then(function (response) {
        console.log("success");

        const currentDate = new Date();
        const day = currentDate.getDate();
        var month = currentDate.getMonth();
        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        var monthName = monthNames[month];
        var year = currentDate.getFullYear();
        const body = {
          // blood_group: t.blood_group.value,
          // first_name: t.donate__fname.value,
          // last_name: t.donate__lname.value,
          // email: t.donate__mail.value,
          // regi_city: t.donate__address.value,
          last_year: year,
          last_month: monthName,
          last_day: day,
        };

        console.log("pacthing user", user);

        axios
          .patch(`${base}/member/${user._id}`, body)
          .then(function (response) {
            console.log("mem updating", response.data);

            newMem()

          })
          .catch(function (error) {
            console.log(error);
            toast.error(error?.message, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      })

      .catch(function (error) {
        console.log(error);
        toast.error(error?.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const decline = (e) => {
    e.preventDefault();
    const body = {
      status: "declined",
    };
    axios
      .patch(`${base}/req/${req[ind]._id}`, body)
      .then(function (response) {
        console.log("success");
        setRefresh(!refresh);
        toast.success(" successful", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error?.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const prev = (e) => {
    e.preventDefault();
    if (ind > 0) {
      setInd(ind - 1);
    }
  };
  const next = (e) => {
    e.preventDefault();
    if (ind + 1 < req.length) {
      setInd(ind + 1);
    }
  };

  console.log("user", user);
  return (
    <div>
      <div className="topbar overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="topbar-area">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-8">
                    <div className="topbar-area__left">
                      <ul>
                        <li className="neutral-bottom">
                          <a href="tel:+8801317903819">
                            <i className="fa-solid fa-phone"></i>+880 1317
                            903819
                          </a>
                        </li>
                        <li className="neutral-bottom">
                          <a href="orin15-13462@diu.edu.bd">
                            <i className="fa-solid fa-envelope"></i>
                            orin15-13462@diu.edu.bd
                          </a>
                        </li>
                        <li className="neutral-bottom">
                          <a href="#">
                            <i className="fa-solid fa-location-dot"></i>Mirpur
                            13, Dhaka, Bangladesh
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="topbar-area__right">
                      <p className="neutral-bottom">Follow Now</p>
                      <div className="social">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <Link to="/" className="navbar-brand navLogo">
              <img src={logo3} alt="Logo" width="220" height="80" />
            </Link>
            <div
              className="collapse navbar-collapse justify-content-center order-3 order-xl-2"
              id="primaryNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link">
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  {/* <a className="nav-link" href="about-us.html">
                    About Us
                  </a> */}
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  {/* {user && (
                    <Link to="/donors" className="nav-link">
                      Donors
                    </Link>
                  )} */}
                  <Link to="/donors" className="nav-link">
                    Donors
                  </Link>
                </li>
                {/* {user?.status != "admin" &&
                  user?.status != "superAdmin" &&
                  user && (
                    <li className="nav-item">
                      <Link to="/donate-now" className="nav-link">
                        Donate
                      </Link>
                    </li>
                  )} */}

                <li className="nav-item">
                  {!user && (
                    <Link to="/registration" className="nav-link">
                      Sign up
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <div className="navbar-out order-2 order-xl-3">
              <div className="navbar-out__group">
                <a href="javascript:void(0)" className="search-icon">
                  {/* <Badge badgeContent={4} color="#EA062B">
                    <MailIcon color="action" />
                  </Badge> */}
                  <div style={{ position: "relative" }}>
                    <div>
                      {" "}
                      <MailIcon color="action" style={{ fontSize: "1.8rem" }} />
                    </div>
                    <p
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-8px",
                        backgroundColor: "#EA062B",
                        color: "white",
                        borderRadius: "50%",
                        padding: "0 6px",
                        fontWeight: "700",
                        fontSize: "0.8em",
                      }}
                    >
                      {req.length}
                    </p>
                  </div>
                </a>

                {/* <select className="select-language">
                  <option value="english">English</option>
                  <option value="spanish">বাংলা</option>
                </select> */}
                <a
                  href="javascript:void(0)"
                  className="d-none d-xl-block open-sidenav"
                >
                  {user ? (
                    <Avatar sx={{ bgcolor: "#EA062B" }}>
                      {nameModify(user.first_name, user.last_name)}
                    </Avatar>
                  ) : (
                    <>
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </>
                  )}
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#primaryNav"
                aria-controls="primaryNav"
                aria-expanded="false"
                aria-label="Toggle Primary Nav"
              >
                {user ? (
                  <Avatar sx={{ bgcolor: "#EA062B" }}>
                    {nameModify(user.first_name, user.last_name)}{" "}
                  </Avatar>
                ) : (
                  <>
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="search">
        <a href="javascript:void(0)" className="close">
          <i className="fa-solid fa-xmark"></i>
        </a>
        <h4 style={{ paddingTop: "10px" }}>Blood request</h4>
        {loading  ?
        <p>Loading...</p>
        :
        req?.length == 0 ? (
          <h5>No request </h5>
        ) : (
          <div>
            <p>
              Total <span style={{ color: "red", padding: "6px" }}>{ind+1}</span>/
              <span style={{ color: "red", padding: "6px" }}>
                {req?.length}
              </span>
            </p>
            <p className="req">
              Requestor : {req[ind]?.taker_name} , {req[ind]?.taker_phone}
            </p>
            <p className="req">Email : {req[ind]?.taker_email}</p>
            <p className="req">
              Location : {req[ind]?.taker_location}, {req[ind]?.taker_city}
            </p>
            <p
              className="req"
              style={{ marginBottom: "0", paddingBottom: "0 " }}
            >
              Time : {req[ind]?.time}
            </p>
            <div
              style={{
                display: "flex ",
                alignItems: "center",
                textAlign: "center ",
                width: "fit-content",
                gap: "40px",
                margin: "auto ",
                marginTop: "20px ",
              }}
            >
              <button
                style={{ backgroundColor: "white", color: "red " }}
                onClick={prev}
              >
                <KeyboardArrowLeftIcon />
              </button>
              <button
                style={{ backgroundColor: "white", color: "red " }}
                onClick={next}
              >
                <KeyboardArrowRightIcon />
              </button>
            </div>
            <div
              style={{
                display: "flex ",
                alignItems: "center",
                textAlign: "center ",
                width: "fit-content",
                gap: "20px",
                margin: "auto ",
              }}
            >
              <button
                disabled={av}
                className="button button--effect"
                onClick={accept}
              >
                Accept
              </button>
              <button
                className="button button--effect"
                style={{
                  backgroundColor: "white",
                  color: "red ",
                  border: "1px solid red !important",
                }}
                onClick={decline}
              >
                Decline
              </button>
            </div>
          </div>
        )}
        {/* <form
          action=""
          //  method="post"
        >
          <input
            type="search"
            name="search__box"
            id="searchBox"
            placeholder="Search Now"
            required
          />
          <button type="submit" className="button button--effect">
            Search Now
          </button>
        </form> */}
      </div>

      <div className="sidenav d-none d-xl-block">
        <div className="navbar-inner">
          <div className="close-sidebar-wrapper">
            <a href="javascript:void(0)" className="close-sidebar">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </div>

          <ul>
            {u && (
              <li>
                <Link to="/admin">
                  <i className="fa-solid fa-angle-right"></i> Admin Dhashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/">
                <i className="fa-solid fa-angle-right"></i> Home
              </Link>
            </li>

            {/* {user?.status != "admin" &&
              user?.status != "superAdmin" &&
              user && (
                <li className="">
                  <Link to="/donate-now">
                    <i className="fa-solid fa-angle-right"></i> Donate
                  </Link>
                </li>
              )} */}
            {/* <li>
            <Link to="/donate-now">
                <i className="fa-solid fa-angle-right"></i> Donate
              </Link>
            </li> */}
            <li>
              <Link to="/donors">
                <i className="fa-solid fa-angle-right"></i> Donors
              </Link>
            </li>

            {user?.status != "admin" && user?.status != "superAdmin" && (
              <>
                {/* <li>
                  <Link to="/requested-services">
                    <i className="fa-solid fa-angle-right"></i> Requested
                    services
                  </Link>
                </li> */}
                <li>
                  <Link to="/my-donate">
                    <i className="fa-solid fa-angle-right"></i> My Donates
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/blogs">
                <i className="fa-solid fa-angle-right"></i>Blogs
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <i className="fa-solid fa-angle-right"></i> About Us
              </Link>
            </li>
            <li>
              {/* <a href="#">
                <i className="fa-solid fa-angle-right"></i> Blog
              </a> */}

              {user ? (
                <button onClick={signOut} className="signOutBtn2">
                  <i className="fa-solid fa-angle-right"></i> Sign out
                </button>
              ) : (
                <Link to="/registration">
                  <i className="fa-solid fa-angle-right"></i>Sign up
                </Link>
              )}
            </li>
            {/* <li>
              <a href="#">
                <i className="fa-solid fa-angle-right"></i> Contact Us
              </a>
            </li> */}
          </ul>

          <form action="#" method="post">
            <div className="input-group-btn input-group-btn--secondary">
              <input
                type="email"
                name="sidenav__newsletter__email"
                id="sidenavNewsletterEmail"
                placeholder="Enter Your Email"
                required
              />
              <button type="submit" className="button button--effect">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
