import blog10 from "../../assets/images/blog10.webp";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog7 from "../../assets/images/blog7.jpg";
import blog8 from "../../assets/images/blog8.jpg";
import { useEffect, useState } from "react";

import $ from "jquery";
import "jquery-nice-select";
import "jquery-nice-select/css/nice-select.css";
import "../../../public/nice-select/js/jquery.nice-select.min.js";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

const base = "http://localhost:5000";

const Blogs = () => {
  const [blogs, setBlogs]=useState([])
  const [refreshAdmin, setRefreshAdmin]=useState(false)
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
    axios
      .get(`${base}/blog`)
      .then(function (response) {
        // console.log("re", response)
        setBlogs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refreshAdmin]);
  console.log("blogs", blogs);
  return (
    <div>
      <Navbar></Navbar>

      <section
        className="banner bg-img dark-overlay dark-overlay--secondary"
        data-background={blog10}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Blog Style 01</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link  to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Blog
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog bg-white section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-area">
                <div className="row neutral-row justify-content-center">

                 {blogs?.map(b=>{
                  return (
                    <div className="col-md-6 col-lg-4 row-item align-center" key={b._id}>
                    <div className="blog-area__single img-effect">
                      <div className="poster">
                        <Link  to={`/blog-details/${b._id}`}>
                          <img src={blog1} alt="Helpless" />
                        </Link>
                        <Link  to={`/blog-details/${b._id}`} className="expand">
                          <i className="fa-solid fa-plus"></i>
                        </Link>
                      </div>
                      <div className="blog-area__single-content">
                        <div className="blog-post-date">
                          <p>
                            <i className="fa-solid fa-clock"></i>05 Apr, 2023
                          </p>
                          <p>
                            <Link  to={`/blog-details/${b._id}`}>
                              <i className="fa-solid fa-comments"></i>{b?.comments?.length} Comments
                            </Link>
                          </p>
                        </div>
                        <h6>
                          <Link  to={`/blog-details/${b._id}`}>
                            {b.title.slice(0, 50)}
                          </Link>
                        </h6>
                        <p className="neutral-bottom">
                          {b.pera_1.slice(0, 150)}...
                        </p>
                        <Link  to={`/blog-details/${b._id}`} className="read-more">
                          Read More
                          <i className="fa-solid fa-angles-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  )
                 })}












                </div>
                {/* <div className="pagination-wrapper">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="fa-solid fa-angles-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link active"
                          href="javascript:void(0)"
                        >
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:void(0)">
                          <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
