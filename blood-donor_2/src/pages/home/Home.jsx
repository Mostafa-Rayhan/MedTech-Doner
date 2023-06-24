import { useContext, useEffect, useRef, useState } from "react";

import gifbg4 from "../../assets/images//gifbg4.gif";
import gifbg5 from "../../assets/images/gifbg5.gif";
import gifbg1 from "../../assets/images/gifbg1.gif";
import bloodpic1 from "../../assets/images/bloodpic1.jpg";
import bloodpic2 from "../../assets/images/bloodpic2.jpg";
import bloodpic3 from "../../assets/images/bloodpic3.jpg";
import bloodpic6 from "../../assets/images/bloodpic6.png";
import donors from "../../assets/images/counter/donors.png";
import donor1 from "../../assets/images/donor1.jpg";
import donor2 from "../../assets/images/donor2.jpg";
import donor3 from "../../assets/images/donor3.jpg";
import firstAid from "../../assets/images/overview/first-aid.png";
import tube from "../../assets/images/overview/tube.png";
import heart from "../../assets/images/overview/heart.png";
import experience from "../../assets/images/counter/experience.png";
import awards from "../../assets/images/counter/awards.png";
import recipient from "../../assets/images/counter/recipient.png";
import orin from "../../assets/images/orin.jpg";
import misha from "../../assets/images/misha.jpg";
import shakib from "../../assets/images/sakib.jpg";
import nafis from "../../assets/images/nafis.jpg";
import mim from "../../assets/images/mim.jpg";
import majid from "../../assets/images/majid.jpg";
import latif from "../../assets/images/latif.jpg";

import $ from "jquery";
import "jquery-nice-select";
import "jquery-nice-select/css/nice-select.css";
import "../../../public/nice-select/js/jquery.nice-select.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { AppContext } from "../../App";
import { toast } from "react-toastify";

const base = "http://localhost:5000";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [allMembers, setAllMembers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { refresh, setRefresh, refreshAdmin, setRefreshAdmin } = useContext(AppContext);
  const [user, setUser] = useState();
  const [req, setReq]=useState([])

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
    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
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

  useEffect(() => {
    // new WOW.WOW().init();
    //  hero section video popup
    //   if (document.querySelector(".video-btn") !== null) {
    //     $(".video-btn").magnificPopup({
    //       disableOn: 768,
    //       type: "iframe",
    //       mainClass: "mfp-fade",
    //       removalDelay: 160,
    //       preloader: false,
    //       fixedContentPos: false,
    //     });
    //   }
    // hero section video popup
    if (document.querySelector(".video-btn") !== null) {
      $(".video-btn").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    // odometer counter
    $(".odometer-item").each(function () {
      // $(this).isInViewport(function (status) {
      //   if (status === "entered") {
      //     for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
      //       var el = document.querySelectorAll('.odometer')[i];
      //       el.innerHTML = el.getAttribute("data-odometer-final");
      //     }
      //   }
      // });
      // $(this).on('inview', function(event, isInView) {
      //   if (isInView) {
      //     for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
      //       var el = document.querySelectorAll('.odometer')[i];
      //       el.innerHTML = el.getAttribute("data-odometer-final");
      //     }
      //   } else {
      //     // element has gone out of viewport
      //   }
      // });
      $(this).on("inview", function (event, isInView, status) {
        console.log("dd", event, isInView, status);
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        } else {
          // element has gone out of viewport
        }
      });
    });

    // campaign slider
    $(".campaign-area__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: false,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // testimonial slider
    $(".testimonial-area__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // donor section video popup
    if (document.querySelector(".video-btn-two") !== null) {
      $(".video-btn-two").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    // select donation type
    // $(".select-donation-type").niceSelect();

    // testimonial slider two
    $(".testimonial--secondary-area__slider").not(".slick-initialized").slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
    });

    // project gallery popup
    $(".gallery-area__slider").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        preload: [0, 1],
      },
    });

    // project gallery slider
    $(".gallery-area__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: false,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // project gallery two popup
    $(".gallery-area-two").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        preload: [0, 1],
      },
    });

    // campaign details slider
    $(".content-group-img-slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // select blood group
    // $(".blood-group").niceSelect();

    // select day
    // $(".select-day").niceSelect();

    // select month
    // $(".select-month").niceSelect();

    // select year
    // $(".select-year").niceSelect();

    // select blood group two
    // $(".select-blood-group").niceSelect();

    // select last donate day
    // $(".select-last-day").niceSelect();

    // select last donate month
    // $(".select-last-month").niceSelect();

    // select last donate year
    // $(".select-last-year").niceSelect();

    // select registration country
    // $(".select-regi-country").niceSelect();

    // blog poster slider
    $(".poster-slider__wrapper")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: false,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".post-prev"),
        nextArrow: $(".post-next"),
      });

    // blog post video popup
    if (document.querySelector(".video-btn-post") !== null) {
      $(".video-btn-post").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${base}/blog`)
      .then(function (response) {
        // console.log("re", response)
        setBlogs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${base}/req`)
      .then(function (response) {
        // console.log("re", response)
        // setReq(response.data);
        const latest=response.data.slice().reverse();
        const reverse= latest.slice(0, 10);
        setReq(reverse)

      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("req", req);

  useEffect(() => {
    axios
      .get(`${base}/member`)
      .then(function (response) {
        setAllMembers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log("mem", allMembers);

  useEffect(() => {
    const sortedData = allMembers;
    sortedData.sort((a, b) => {
      const dateA = new Date(
        a.last_year,
        getMonthIndex(a.last_month),
        a.last_day
      );
      const dateB = new Date(
        b.last_year,
        getMonthIndex(b.last_month),
        b.last_day
      );
      return dateB - dateA;
    });
    function getMonthIndex(month) {
      const months = [
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
      return months.indexOf(month);
    }

    const top10Indexes = sortedData.slice(0, 8);

    setFiltered(top10Indexes);

    // Helper function to get the month index
  }, [allMembers]);
  // console.log("filted", filtered);

  const getTime = (lday, lmonth, lyear) => {
    const obj = {
      last_day: lday,
      last_month: lmonth,
      last_year: lyear,
    };

    const day = String(obj.last_day).padStart(2, "0");
    const month = new Date(`${obj.last_month} 1`).getMonth() + 1;
    const year = obj.last_year;

    const formattedDate = `${day}.${month.toString().padStart(2, "0")}.${year}`;

    return formattedDate;
  };

  const bloodReq = (e) => {
    e.preventDefault()
    if (!user) {
      toast.error("Please login first", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const t = e.target;
    const body = {
      appointment__name: t.appointment__name.value,
      appointment__number: t.appointment__number.value,
      appointment__email: t.appointment__email.value,
      service_type: t.service_type.value,
      appointment__message: t.appointment__message.value,
      status:"pending",
      user_id: user._id,
    };
    // console.log("body", body);

    axios
      .post(`${base}/appointment-request`, body)
      .then(function (response) {
        toast.success("Added successfully", {
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
        // console.log(error);

        toast.error(error?.message, {
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
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <section className="hero-slider-area">
          <OwlCarousel
            className="hero-slider owl-carousel owl-theme"
            items={1}
            loop
            margin={0}
            nav
            dots={false}
            autoHeight
            autoplay
            autoplayHoverPause
            smartSpeed={1500}
            navText={[
              "<i class='fa-solid fa-angle-left'></i>",
              "<i class='fa-solid fa-angle-right'></i>",
            ]}
          >
            <div className="hero-slider-item bg-img" data-background={gifbg4}>
              <div className="container">
                <div className="hero-slider-content">
                  {/* <div className="intro-video">
                    <div className="d-flex align-items-center">
                      <a
                        href="#"
                        title="YouTube video player"
                        className="video-btn video-popup-btn"
                      >
                        <span>
                          <i className="fa-solid fa-play"></i>
                        </span>
                      </a>
                      <span>Intro Video</span>
                    </div>
                  </div> */}
                  <h3>Donate blood,save life !</h3>
                  <h1>Donate Blood And Inspires Others.</h1>
                  <a href="/about-us" className="button button--effect">
                    Explore Now
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-slider-item bg-img" data-background={gifbg5}>
              <div className="container">
                <div className="hero-slider-content animation-style-two">
                  {/* <div className="intro-video">
                    <div className="d-flex align-items-center">
                      <a
                        href="#"
                        title="YouTube video player"
                        className="video-btn video-popup-btn"
                      >
                        <span>
                          <i className="fa-solid fa-play"></i>
                        </span>
                      </a>
                      <span>Intro Video</span>
                    </div>
                  </div> */}
                  <h3>Donate blood,save life !</h3>
                  <h1>Donate Blood And Inspires Others.</h1>
                  <a href="/about-us" className="button button--effect">
                    Explore Now
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-slider-item bg-img" data-background={gifbg1}>
              <div className="container">
                <div className="hero-slider-content animation-style-three">
                  {/* <div className="intro-video">
                    <div className="d-flex align-items-center">
                      <a
                        href="#"
                        title="YouTube video player"
                        className="video-btn video-popup-btn"
                      >
                        <span>
                          <i className="fa-solid fa-play"></i>
                        </span>
                      </a>
                      <span>Intro Video</span>
                    </div>
                  </div> */}
                  <h3>Donate blood,save life !</h3>
                  <h1>Donate Blood And Inspires Others.</h1>
                  <a href="/about-us" className="button button--effect">
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </section>

        <section className="overview">
          <div className="container">
            <div className="explore-area wow fadeInUp">
              <div className="explore-area__single">
                <div className="explore-area__single-content">
                  <h4>
                    <Link to="registration">Regsiter Now</Link>
                  </h4>
                  <p className="neutral-bottom">
                    Register and request for blood and get instantly
                  </p>
                </div>
                <Link to="registration">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </Link>
              </div>
              <div className="explore-area__single explore-area__single--secondary">
                <div className="explore-area__single-content">
                  <h4>
                    <Link to="donate-now">Donate Now</Link>
                  </h4>
                  <p className="neutral-bottom">
                    Register as a Blood Donor and start donating!
                  </p>
                </div>
                <Link to="donate-now">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </Link>
              </div>
            </div>
            <div className="overview-area section-space">
              <div className="row neutral-row justify-content-center">
                <div className="col-sm-6 col-md-6 col-lg-4 align-center row-item">
                  <div className="overview-area__single img-effect">
                    <div className="overview-area__single-content">
                      <div className="poster">
                        <Link to={`/blog-details/${blogs[0]?._id}`}>
                          <img src={donor1} alt="Blood Donor" />
                        </Link>
                      </div>
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <img src={firstAid} alt="First Aid" />
                        </div>
                      </div>
                      <h5>{blogs[0]?.title}</h5>
                      <p className="neutral-bottom">
                        {blogs[0]?.pera_1.slice(0, 150)}...
                      </p>
                    </div>
                    <Link
                      to={`/blog-details/${blogs[0]?._id}`}
                      className="button button--secondary button--effect"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                  <div className="overview-area__single img-effect wow fadeInUp">
                    <div className="overview-area__single-content">
                      <div className="poster">
                        <Link to={`/blog-details/${blogs[0]?._id}`}>
                          <img src={donor2} alt="Blood Donor" />
                        </Link>
                      </div>
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <img src={tube} alt="Tube" />
                        </div>
                      </div>
                      <h5>{blogs[1]?.title}</h5>
                      <p className="neutral-bottom">
                        {blogs[1]?.pera_1.slice(0, 150)}...
                      </p>
                    </div>
                    <Link
                      to={`/blog-details/${blogs[1]?._id}`}
                      className="button button--secondary button--effect"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                  <div
                    className="overview-area__single img-effect wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="overview-area__single-content">
                      <div className="poster">
                        <Link to={`/blog-details/${blogs[0]?._id}`}>
                          <img src={donor3} alt="Blood Donation" />
                        </Link>
                      </div>
                      <div className="icon-box-wrapper">
                        <div className="icon-box">
                          <img src={heart} alt="Heart" />
                        </div>
                      </div>
                      <h5>{blogs[2]?.title}</h5>
                      <p className="neutral-bottom">
                        {blogs[2]?.pera_1.slice(0, 150)}...
                      </p>
                    </div>
                    <Link
                      to={`/blog-details/${blogs[0]?._id}`}
                      className="button button--secondary button--effect"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="organization organization-alt section-space">
          <div className="container">
            <div className="row neutral-row">
              <div className="col-lg-12 row-item">
                <div className="organization-area">
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-5">
                      <div className="organization-area__thumb dir-ltr mb-30 text-center">
                        <img src={bloodpic1} alt="Organization" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="organization-area__content wow fadeInUp">
                        <p className="neutral-ascender primary descender">
                          Help The People in Need
                        </p>
                        <h2>Welcome to Medtech Donor Application</h2>
                        <p></p>

                        <div className="organization-area__content-points">
                          <ul>
                            <li>
                              <i className="fa-solid fa-angles-right"></i>Urgent
                              Receive Blood
                            </li>
                            <li>
                              <i className="fa-solid fa-angles-right"></i>Easy
                              to Find Donors
                            </li>
                            <li>
                              <i className="fa-solid fa-angles-right"></i>Donors
                              Safety
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <i className="fa-solid fa-angles-right"></i>Reward
                              System
                            </li>
                            <li>
                              <i className="fa-solid fa-angles-right"></i>
                              Offline Activation
                            </li>
                            <li>
                              <i className="fa-solid fa-angles-right"></i>Rare
                              Blood Groups
                            </li>
                          </ul>
                        </div>
                        <Link to="about-us" className="button button--effect">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="counter dark-overlay bg-img"
          data-background={bloodpic2}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="counter-area">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="odometer-item mb-30">
                        <img src={experience} alt="Experience" />
                        <div className="counter-thumb">
                          <h2 className="odometer" data-odometer-final="3">
                            <CountUp style={{ color: "white" }} end={10} />
                          </h2>
                        </div>
                        <p className="secondary neutral-descender">
                          Year's Experience
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                      <div className="odometer-item mb-30">
                        <img src={donors} alt="Donor" />
                        <div className="counter-thumb">
                          <h2 className="odometer" data-odometer-final="200">
                            <CountUp style={{ color: "white" }} end={400} />
                          </h2>
                        </div>
                        <p className="secondary neutral-descender">
                          Happy Donor's
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                      <div className="odometer-item mb-30">
                        <img src={awards} alt="Awards" />
                        <div className="counter-thumb">
                          <h2 className="odometer" data-odometer-final="15">
                            <CountUp style={{ color: "white" }} end={15} />
                          </h2>
                        </div>
                        <p className="secondary neutral-descender">
                          Total Awards
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                      <div className="odometer-item">
                        <img src={recipient} alt="Recipient" />
                        <div className="counter-thumb">
                          <h2 className="odometer" data-odometer-final="150">
                            <CountUp style={{ color: "white" }} end={500} />
                          </h2>
                        </div>
                        <p className="secondary neutral-descender">
                          Happy Recipient
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="service section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-area">
                  <div className="section-header section-inner-space">
                    <p className="primary neutral-ascender descender">
                      What We Do
                    </p>
                    <h2 className="neutral-descender">Our Services</h2>
                  </div>
                  <div className="service-area__single">
                    <div className="row neutral-row d-flex align-items-center">
                      <div className="col-lg-6 row-item">
                        <div className="service-area__single-thumb">
                          <a href="#">
                            <img src={bloodpic3} alt="Find Donors Easily" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 row-item">
                        <div className="service-area__single-content wow fadeInUp">
                          {/* <h2 className="light neutral-ascender-light descender-light">
                            01
                          </h2> */}
                          <h4 className="descender">Find Donors Easily</h4>
                          <p>
                            Find donors very easily. Find donors from more then
                            250 donors among the country and find your nerest
                            donor among them. Just search your blood group and
                            find all the donors of that particular blood group
                            near your location.
                          </p>
                          <a href="/about-us" className="button button--effect">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="service-area__single service-area__single-alt">
                    <div className="row neutral-row d-flex align-items-center">
                      <div className="col-lg-6 row-item order-last order-lg-first">
                        <div className="service-area__single-content wow fadeInUp">
                          <h2 className="light neutral-ascender-light descender-light">
                            02
                          </h2>
                          <h4 className="descender">
                            Get Rewards from Donating
                          </h4>
                          <p>
                            After donating blood, you can claim the rewards
                            which can be used for purchasing many things from
                            our partners or can also take the voucher of some
                            popular e-comerece sites or can also withraw money
                            from the reward points!{" "}
                          </p>
                          <a href="#" className="button button--effect">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 row-item">
                        <div className="service-area__single-thumb">
                          <a href="#">
                            <img
                              src={bloodpic4}
                              alt="Get Rewards from Donating"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="service-area__single">
                    <div className="row neutral-row d-flex align-items-center">
                      <div className="col-lg-6 row-item">
                        <div className="service-area__single-thumb">
                          <a href="#">
                            <img src={bloodpic5} alt="Offline Activation" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 row-item">
                        <div className="service-area__single-content wow fadeInUp">
                          <h2 className="light neutral-ascender-light descender-light">
                            03
                          </h2>
                          <h4 className="descender">Offline Activation</h4>
                          <p>
                            When you donate blood whether through this app or
                            anywhere else, you can press the specialised donated
                            blood and can set the time then the system will keep
                            your profile offline for the next 3 months and you
                            wont be visible to next donor requests.
                          </p>
                          <a href="#" className="button button--effect">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="call dark-overlay bg-img"
          data-background={bloodpic6}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="call-area">
                  <div className="icon-box__wrapper">
                    <a href="tel:+8801317903819" className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                  </div>
                  <p className="primary neutral-ascender descender">
                    Contact Us
                  </p>
                  <h2 className="descender">Call Now :+880 1317 903819</h2>
                  <div className="group">
                    <a href="#">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Bangladesh – Mirpur-13</span>
                    </a>
                    <a href="mailto:orin15-13462@diu.edu.bd">
                      <i className="fa-solid fa-envelope"></i>
                      <span>orin15-13462@diu.edu.bd</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="campaign section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="campaign-area">
                  <div className="section-header section-inner-space">
                    <p className="primary neutral-ascender descender">
                      Activities
                    </p>
                    <h2 className="neutral-bottom">Recent Campaigns</h2>
                  </div>
                  <div className="campaign-area__slider">
                    <div className="campaign-area__single img-effect">
                      <div className="campaign-area__single-inner">
                        <div className="poster campaign-area__single-inner__item">
                          <a href="#">
                            <img src={bloodpic10} alt="Free Blood Donation" />
                          </a>
                          <a href="#" className="read-more">
                            Read More
                          </a>
                        </div>
                        <div className="campaign-area__single-inner__item campaign-area__single-inner__content">
                          <p className="date text-icon-group">
                            <i className="fa-solid fa-calendar-days"></i>
                            13 February, 2023
                          </p>
                          <h6>
                            <a href="#">Free Group Checking</a>
                          </h6>
                          <p className="regular">
                            Check your blood group for Free! Start donating
                            bloods and save lifes.
                          </p>
                          <div className="group">
                            <p className="text-icon-group">
                              <i className="fa-solid fa-clock"></i>
                              10.00 AM - 4.00 PM
                            </p>
                            <p className="text-icon-group">
                              <i className="fa-solid fa-location-dot"></i>
                              BSMMU, Shahbagh, Dhaka
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="campaign-area__single img-effect">
                      <div className="campaign-area__single-inner">
                        <div className="poster campaign-area__single-inner__item">
                          <a href="#">
                            <img src={bloodpic11} alt="Blood Donation" />
                          </a>
                          <a href="#" className="read-more">
                            Read More
                          </a>
                        </div>
                        <div className="campaign-area__single-inner__item campaign-area__single-inner__content">
                          <p className="date text-icon-group">
                            <i className="fa-solid fa-calendar-days"></i>
                            11 February, 2023
                          </p>
                          <h6>
                            <a href="#">Blood Donation Camp</a>
                          </h6>
                          <p className="regular">
                            Donate blood and save someones life! Your blood
                            won't go to waste. Come and save lifes.
                          </p>
                          <div className="group">
                            <p className="text-icon-group">
                              <i className="fa-solid fa-clock"></i>
                              11.00 AM - 4.00 PM
                            </p>
                            <p className="text-icon-group">
                              <i className="fa-solid fa-location-dot"></i>
                              Dhaka Medical Collage Hospital
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="campaign-area__single img-effect">
                      <div className="campaign-area__single-inner">
                        <div className="poster campaign-area__single-inner__item">
                          <a href="#">
                            <img src={bloodpic12} alt="Free Blood Donation" />
                          </a>
                          <a href="#" className="read-more">
                            Read More
                          </a>
                        </div>
                        <div className="campaign-area__single-inner__item campaign-area__single-inner__content">
                          <p className="date text-icon-group">
                            <i className="fa-solid fa-calendar-days"></i>5
                            January, 2023
                          </p>
                          <h6>
                            <a href="#">Blood Pressure and Diabetis Test</a>
                          </h6>
                          <p className="regular">
                            For a healthier life, come and test your diabetis
                            and blood pressure and take advice from doctors for
                            free!
                          </p>
                          <div className="group">
                            <p className="text-icon-group">
                              <i className="fa-solid fa-clock"></i>
                              12.00 PM - 4.00 PM
                            </p>
                            <p className="text-icon-group">
                              <i className="fa-solid fa-location-dot"></i>
                              Govt. Bangla Collage, Dhaka
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="testimonial section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonial-area">
                  <div className="section-header section-inner-space">
                    <p className="primary neutral-ascender descender">
                      Testimonials
                    </p>
                    <h2 className="neutral-bottom">What Our Clients Say</h2>
                  </div>
                  <div className="testimonial-area__slider">
                    <div className="testimonial-area__slider-single">
                      <div className="testimonial-area__slider-single__inner">
                        <div className="testimonial-area__slider-single__inner-content">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p className="secondary neutral-descender">
                            I am able to donate blood well by using this
                            website. Their behavior is too much good.I also
                            received some reward for blood donation.
                          </p>
                        </div>
                        <div className="avatar-wrapper">
                          <div className="avatar">
                            <img src={orin} alt="Nora" />
                          </div>
                          <div className="avatar-info">
                            <h5>Orin Akther</h5>
                            <p className="secondary">Web Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-area__slider-single">
                      <div className="testimonial-area__slider-single__inner">
                        <div className="testimonial-area__slider-single__inner-content">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p className="secondary neutral-descender">
                            Mechtech donar are very safe and secure website for
                            blood donation.After donating blood they give me to
                            eat some food.They gift me some rewarded.I can use
                            this reward for shopping.
                          </p>
                        </div>
                        <div className="avatar-wrapper">
                          <div className="avatar">
                            <img src={misha} alt="Niro" />
                          </div>
                          <div className="avatar-info">
                            <h5>Afsana Misha</h5>
                            <p className="secondary">Lecturer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-area__slider-single">
                      <div className="testimonial-area__slider-single__inner">
                        <div className="testimonial-area__slider-single__inner-content">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p className="secondary neutral-descender">
                            I want to thank you for your donation and let you
                            know how rare of a person you are because generosity
                            like yours is hard to find these days.
                          </p>
                        </div>
                        <div className="avatar-wrapper">
                          <div className="avatar">
                            <img src={shakib} alt="Nicolas" />
                          </div>
                          <div className="avatar-info">
                            <h5>Md. Shadman Sakib</h5>
                            <p className="secondary">Programmer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-area__slider-single">
                      <div className="testimonial-area__slider-single__inner">
                        <div className="testimonial-area__slider-single__inner-content">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p className="secondary neutral-descender">
                            Thank you for your blood donation. Your blood has
                            now been used to save the life of a dengue patient.
                          </p>
                        </div>
                        <div className="avatar-wrapper">
                          <div className="avatar">
                            <img src={nafis} alt="Nora" />
                          </div>
                          <div className="avatar-info">
                            <h5>Nafis Fuad</h5>
                            <p className="secondary">Graphics Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-area__slider-single">
                      <div className="testimonial-area__slider-single__inner">
                        <div className="testimonial-area__slider-single__inner-content">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p className="secondary neutral-descender">
                            Last week I received a new lease in life. Thank you
                            for your blood donation.
                          </p>
                        </div>
                        <div className="avatar-wrapper">
                          <div className="avatar">
                            <img src={mim} alt="Niro" />
                          </div>
                          <div className="avatar-info">
                            <h5>Mim Akther Runa</h5>
                            <p className="secondary">Student</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-area__slider-single">
                      <div className="testimonial-area__slider-single__inner">
                        <div className="testimonial-area__slider-single__inner-content">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p className="secondary neutral-descender">
                            Thank you for your blood donations. Without your
                            help my wife would not have made it. She is now well
                            and back to her normal activities.
                          </p>
                        </div>
                        <div className="avatar-wrapper">
                          <div className="avatar">
                            <img src={majid} alt="Nicolas" />
                          </div>
                          <div className="avatar-info">
                            <h5>Md. Abdul Majid</h5>
                            <p className="secondary">Business Man</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="donor dark-overlay section-space bg-img"
          data-background={bloodpic2}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="donor-area">
                  <p className="primary neutral-ascender descender">
                    Blood Requests
                  </p>
                  <h2>There are the latest donations</h2>
                  {/* <a
                    href="#"
                    target="_blank"
                    title="YouTube video player"
                    className="video-btn-two video-popup-btn"
                  >
                    <span>
                      <i className="fa-solid fa-play"></i>
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="appointment section-space-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="appointment-area">
                  <div className="row neutral-row">
                    <div className="col-lg-6 row-item " style={{marginLeft:"auto", marginRight:"auto" }}>
                      <div className="appointment-area__single appointment-area__content">
                        <h4>Latest Blood Donation History</h4>
                        <ul>
                          {req?.map((f, index) => {
                            return (
                              <li key={index}>
                                <i className="fa-solid fa-heart"></i>
                                {f?.taker_address} {f.taker_city},
                                {/* {f.regi_state} */}
                                (
                                  {f?.time} 
                                {/* {getTime(f.last_day, f.last_month, f.last_year)} */}
                                )
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-lg-6 row-item">
                      <div className="appointment-area__single appointment-area__form">
                        <h4>Request Service Here</h4>
                        <form
                          action=""
                          onSubmit={bloodReq}
                          name="appointmentForm"
                        >
                          <div className="input-group-column">
                            <div className="input">
                              <input
                                type="text"
                                name="appointment__name"
                                id="appointmentName"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div className="input">
                              <input
                                type="number"
                                name="appointment__number"
                                id="appointmentNumber"
                                placeholder="Phone Number"
                                required
                              />
                            </div>
                          </div>
                          <div className="input">
                            <input
                              type="email"
                              name="appointment__email"
                              id="appointmentEmail"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                          <div className="input">
                            <select
                              className="select-donation-type"
                              name="service_type"
                            >
                              <option data-display="Service Type">
                                Select One
                              </option>
                              <option value="blood_group_check">Blood Group Check</option>
                              <option value="diabetes_check">Diabetes Check</option>
                              <option value="blood_test">Blood Test</option>
                              <option value="hiv-check">HIV Check</option>
                              <option value="covid19_test">Covid-19 Test</option>
                              <option value="blood_pressure_check">
                                Blood Pressure and SPO2 Check
                              </option>
                            </select>
                          </div>

                          <div className="input">
                            <textarea
                              name="appointment__message"
                              id="appointmentMessage"
                              cols="30"
                              rows="10"
                              placeholder="Your Message"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="button button--tertiary button--effect"
                          >
                            Submit Now
                          </button>
                        </form>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team section-space-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="team-area">
                  <div className="section-header section-inner-space">
                    <p className="primary neutral-ascender descender">
                      Team Members
                    </p>
                    <h2 className="neutral-descender">Meet Our Team</h2>
                  </div>
                  <div className="row neutral-row justify-content-center">
                    <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                      <div className="team-area__single img-effect">
                        <div className="poster">
                          <img src={orin} alt="Nora" />
                          <div className="social social--secondary">
                            <a href="https://www.facebook.com/" target="_blank">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                              href="https://www.pinterest.com/"
                              target="_blank"
                            >
                              <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div>
                        <h5>Orin Akther</h5>
                        <p className="secondary neutral-descender">Developer</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                      <div className="team-area__single img-effect wow fadeInUp">
                        <div className="poster">
                          <img src={misha} alt="Alex Joshan Deo" />
                          <div className="social social--secondary">
                            <a href="https://www.facebook.com/" target="_blank">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                              href="https://www.pinterest.com/"
                              target="_blank"
                            >
                              <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div>
                        <h5>Afsara Tasneem Misha</h5>
                        <p className="secondary neutral-descender">
                          Supervisor
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 row-item align-center">
                      <div
                        className="team-area__single img-effect wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="poster">
                          <img src={latif} alt="Alex Joshi Deon" />
                          <div className="social social--secondary">
                            <a href="https://www.facebook.com/" target="_blank">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                              href="https://www.pinterest.com/"
                              target="_blank"
                            >
                              <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div>
                        <h5>Ms. Subhenur Latif</h5>
                        <p className="secondary neutral-descender">
                          Co-Supervisor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="blog section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-area">
                  <div className="section-header section-inner-space">
                    <p className="primary neutral-ascender descender">
                      Latest Blogs
                    </p>
                    <h2 className="neutral-bottom">Checkout News & Updates</h2>
                  </div>
                  <div className="row neutral-row justify-content-center">
                    <div className="col-sm-10 col-md-6 col-lg-4 row-item align-center">
                      <div className="blog-area__single img-effect">
                        <div className="poster">
                          <Link to="blog-details">
                            <img src={blogbd1} alt="Helpless" />
                          </Link>
                          <a href="#" className="expand">
                            <i className="fa-solid fa-plus"></i>
                          </a>
                        </div>
                        <div className="blog-area__single-content">
                          <div className="blog-post-date">
                            <p>
                              <i className="fa-solid fa-clock"></i>14 June, 2022
                            </p>
                            <p>
                              <Link to="blog-details">
                                <i className="fa-solid fa-comments"></i>3
                                Comments
                              </Link>{" "}
                            </p>
                          </div>
                          <h6>
                            <Link to="blog-details">
                              This year, like the previous ones, the World Blood
                              Donor Day will be observed Saturday (June 14),
                              with the slogan 'Safe blood for all'
                            </Link>
                          </h6>
                          <p className="neutral-bottom">
                            The 1999 bomb blast at an event of Bangladesh Udichi
                            Shilpigoshthi made Aminul Sujan realize that
                            donating blood is no less than financially helping
                            the people in need. The program officer of National
                            Tobacco Cell was involved with cultural group Udichi
                            at the time of the incident, and seeing his
                            colleagues suffering from pain and trauma left a
                            deep mark in his heart. Ten people were killed, and
                            more than 100 hundred others injured, after two
                            powerful bombs went off during Udichi’s 12th
                            national conference in Jessore on March 6, 1999.
                          </p>
                          <Link to="blog-details" className="read-more">
                            Read More
                            <i className="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 row-item align-center">
                      <div className="blog-area__single img-effect wow fadeInUp">
                        <div className="poster">
                          <Link to="blog-details">
                            <img src={bloodbd2} alt="Activity" />
                          </Link>
                          <Link to="blog-details" className="expand">
                            <i className="fa-solid fa-plus"></i>
                          </Link>
                        </div>
                        <div className="blog-area__single-content">
                          <div className="blog-post-date">
                            <p>
                              <i className="fa-solid fa-clock"></i>18 Feb, 2022
                            </p>
                            <p>
                              <Link to="blog-details">
                                <i className="fa-solid fa-comments"></i>26
                                Comments
                              </Link>
                            </p>
                          </div>
                          <h6>
                            <Link to="blog-details">
                              প্রথমবারের মতো মানবদেহে দেওয়া হলো কৃত্রিম রক্ত
                            </Link>
                          </h6>
                          <p className="neutral-bottom">
                            পরীক্ষাগারে তৈরি কৃত্রিম রক্ত প্রথমবারের মতো
                            মানবদেহে দেওয়া হয়েছে। যুক্তরাজ্যের একদল গবেষক প্রথম
                            ক্লিনিকাল ট্রায়ালে দুইজন স্বেচ্ছাসেবকের শরীরে
                            কৃত্রিম রক্ত প্রবেশ করান। সোমবার (৭ নভেম্বর) বিবিসির
                            এক প্রতিবেদনে এ তথ্য জানানো হয়েছে। প্রাথমিকভাবে খুবই
                            অল্প পরিমাণ, দুই চা-চামচের মতো রক্ত দেওয়া হয়েছে
                            স্বেচ্ছাসেবকদের দেহে; এটি কীভাবে কাজ করে সেটিই এখন
                            পর্যবেক্ষণ করবেন গবেষকরা।
                          </p>
                          <Link to="blog-details" className="read-more">
                            Read More
                            <i className="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-10 col-md-6 col-lg-4 row-item align-center">
                      <div
                        className="blog-area__single img-effect wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        <div className="poster">
                          <Link to="blog-details">
                            <img src={bloodbd3} alt="Poor" />
                          </Link>
                          <Link to="blog-details" className="expand">
                            <i className="fa-solid fa-plus"></i>
                          </Link>
                        </div>
                        <div className="blog-area__single-content">
                          <div className="blog-post-date">
                            <p>
                              <i className="fa-solid fa-clock"></i>17 nov, 2022
                            </p>
                            <p>
                              <Link to="blog-details">
                                <i className="fa-solid fa-comments"></i>150
                                Comments
                              </Link>
                            </p>
                          </div>
                          <h6>
                            <Link to="blog-details">
                              লিপিড প্রোফাইল টেস্ট কেন করবেন?
                            </Link>
                          </h6>
                          <p className="neutral-bottom">
                            অনেক মানুষ আছেন যারা বাইরে থেকে দেখতে হয়তো অতটা
                            স্থূলকায় নন। কিন্তু এই লিপিড প্রোফাইল টেস্টের
                            মাধ্যমে দেখা যায় তিনি এই ডিজলিপিডেমিয়া রোগে ভুগছেন,
                            চিকিৎসা বা পরামর্শের জন্য গেলেই চিকিৎসক কিছু টেস্ট
                            ধরিয়ে দেন। তার মধ্যে একটি সাধারণ টেস্ট হচ্ছে লিপিড
                            প্রোফাইল। অনেকের মনেই প্রশ্ন থাকে কেন এই টেস্ট করতে
                            হবে? তার উত্তর নিয়েই এই নিবন্ধ।
                          </p>
                          <Link to="blog-details" className="read-more">
                            Read More
                            <i className="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="cta">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-area">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-9">
                      <div className="cta-area__content">
                        <h2>Let's change the world, Join us now!</h2>
                        <p className="neutral-bottom">
                          Blood is the most precious gift that anyone can give
                          to another person – the gift of life. A decision to
                          donate your blood can save a life, or even several if
                          your blood is separated into its components – red
                          cells, platelets and plasma – which can be used
                          individually for patients with specific conditions.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="cta-area__btn text-start text-md-end">
                        <Link
                          to="registration"
                          className="button button--quaternary button--effect"
                        >
                          Register Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <a href="javascript:void(0)" className="scrollToTop">
          <i className="fa-solid fa-angle-up"></i>
        </a>

        {/* Hero Slider */}
        {/* <Carousel ref={heroSliderRef} items={1} loop={true} showArrows={true} showThumbs={false}>

        <CarouselItem>

        </CarouselItem>
      </Carousel>


      <Carousel ref={heroSliderTwoRef} items={1} loop={true} showArrows={true} showThumbs={false}>

        <CarouselItem>

        </CarouselItem>
      </Carousel> */}
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
