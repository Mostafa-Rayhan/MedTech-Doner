import donor1 from "../../assets/images/donor1.jpg";
import blood123 from "../../assets/images/blood123.jpg";
import blood5748 from "../../assets/images/blood5748.webp";
import blood574812 from "../../assets/images/blood574812.jpg";
import orin from "../../assets/images/orin.jpg";
import sakib from "../../assets/images/sakib.jpg";
import nafis from "../../assets/images/nafis.jpg";
import mim from "../../assets/images/mim.jpg";
import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";
import { Avatar } from "@mui/material";

const base = "http://localhost:5000";

const blogContent = "This is the first line.  \n  \nThis is the second line.";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const [refreshAdmin, setRefreshAdmin] = useState(false);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    axios
      .get(`${base}/blog/${id}`)
      .then(function (response) {
        // console.log("re", response)
        setBlog(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refreshAdmin, id]);

  console.log("b", blog);

  if (blog.length < 1) {
    return <h1>Not found</h1>;
  }
  // const paragraph = "my name is.\n \n I am\n. I have \n. I want to  \n I did";
  // const lines = paragraph.split("\n");
  // console.log("lines", lines);

  const lineBreaking = (t) => {
    return t?.split("\\n").map((item, index) => {
      return (
        <Fragment key={index}>
          {item}
          <br />
        </Fragment>
      );
    });
  };

  const createComment = (e) => {
    e.preventDefault();
    const t = e.target;

    // time


    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Months are zero-based
    let year = currentDate.getFullYear();

    // Pad single digits with leading zeros
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    const finalTime= day + "." + month + "." + year;




    const body = {
      // comments: [
        // {
          comment_name: t.comment_name.value,
          comment_mail: t.comment_mail.value,
          web_address: t.web_address.value,
          comment_text: t.comment_text.value,
          comment_time:finalTime
        // },
      // ],
    };

    // put

    axios
    .put(`${base}/blog/comment/${id}`, body)
    .then(function (response) {
      setRefreshAdmin(!refreshAdmin)
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



    // end put

  };

  console.log("blogs", blog);




  const nameModify=(fName)=>{
    console.log("f", fName);
    if(fName){
      const firstThreeChars = fName.slice(0, 2);
      return firstThreeChars.toUpperCase()

    }
    return ""

  }



  return (
    <div>
      <Navbar> </Navbar>
      <section
        className="banner bg-img dark-overlay dark-overlay--secondary"
        data-background={donor1}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Blog Details</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Blog Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-default section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-default-area">
                <div className="row neutral-row">
                  <div className="col-lg-8 row-item">
                    <div className="blog-default-area__content blog-details blog-default-area__content-alt-two">
                      <div className="details-poster">
                        {/* <img src={blood123} alt="Blog" /> */}
                        {/* <img src={blog.images[0]} alt="Blog" /> */}
                      </div>
                      <div className="blog-post-date">
                        <p>
                          <i className="fa-solid fa-clock"></i>
                          {blog.time}
                        </p>
                        <p>
                          <a href="blog-details.html">
                            <i className="fa-solid fa-comments"></i>
                            {blog.comments.length}
                            Comments
                          </a>
                        </p>
                      </div>
                      <h2>{blog.title}</h2>

                      <p className="descender">{lineBreaking(blog.pera_1)}</p>
                      {/* <p className="descender">{lineBreaking("my name \n is Asadullah \n. I am a")}</p> */}

                      {blog.highlighted && (
                        <div className="note wow fadeInUp">
                          <p className="tertiary neutral-bottom-tertiary">
                            {/* {blog.highlighted} */}
                            {/* <ReactMarkdown>{blog.highlighted}</ReactMarkdown>
                                            <ReactMarkdown>{blogContent}</ReactMarkdown> */}
                            <p>{lineBreaking(blog.highlighted)}</p>
                          </p>
                        </div>
                      )}

                      <p>{lineBreaking(blog.pera_2)}</p>
                      {/* <p>
                                            {blog?.pera_4}
                                        </p> */}
                      <div className="img-group">
                        {/* <img src={blog.images[1]} alt="Donate"/>
                                            <img src={blog.images[2]} alt="Donate"/> */}
                      </div>
                      {/* <div className="post__tags">
                        <p className="tertiary">Post Tags</p>
                        <div className="tags">
                          <a href="blog.html" className="tag-btn">
                            Donation
                          </a>
                          <a href="blog.html" className="tag-btn">
                            Blood
                          </a>
                          <a href="blog.html" className="tag-btn">
                            Happy
                          </a>
                          <a href="blog.html" className="tag-btn">
                            People
                          </a>
                        </div>
                      </div> */}
                      <hr />
                      {/* <div className="post__tags share">
                        <p className="tertiary">Share:</p>
                        <div className="tags">
                          <a href="#">Facebook</a>
                          <a href="#">Twitter</a>
                          <a href="#">Linkedin</a>
                          <a href="#">Pinterest</a>
                        </div>
                      </div> */}
                      <div className="author__info">
                        <div className="avatar wow fadeInUp">
                          <img src={orin} alt="Post Author" />
                        </div>
                        <div className="author__content">
                          <h6>Orin Akther</h6>
                          <p>
                            Hi, I'm Orin Akther. Undergraduate student of
                            Daffodil International University with the major of
                            CSE. Thanks for reading my blogs. Don't forget to
                            like and follow!
                          </p>
                          <div className="social social--secondary">
                            <a href="javascript:void(0)">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="slide__group__btn">
                        <div className="blog-prev-large">
                          <a href="javascript:void(0)">
                            <i className="fa-solid fa-arrow-left-long"></i>
                            Previous Page
                          </a>
                          <p className="neutral-bottom">
                            Want to revisit our earlier content? Click the
                            'Previous Page' button to discover our past blog
                            posts and rediscover valuable insights and
                            information.
                          </p>
                        </div>
                        <div className="blog-next-large text-end">
                          <a href="javascript:void(0)">
                            Next Page
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </a>
                          <p className="text-end neutral-bottom">
                            Keep up with our fresh content and click the 'Next
                            Page' button to uncover the latest insights, tips,
                            and news from our expert writers.
                          </p>
                        </div>
                      </div> */}
                      <div className="comment-box " style={{marginTop:"40px"}} >
                        <h4>{ blog?.comments?.length} comments </h4>
                        {
                          blog?.comments?.map(c=>{
                            console.log("single commet", c);
                            return(
                              // comment-box__single comment-box__single-reply wow fadeInUp
                              <div key={c} className="comment-box__single  ">
                          <div className="avatar">
                            {/* <img src={nafis} alt="Author" /> */}
                            <Avatar sx={{ bgcolor: "#EA062B" }}>{nameModify(c?.comment_name)}</Avatar>


                          </div>
                          <div className="comment-author-info">
                            <div className="author-info__name">
                              <p className="tertiary">{c?.comment_name}</p>
                              <p className="time">{c.comment_time }</p>
                            </div>
                            <p>
                              {c.comment_text}
                            </p>
                            {/* <a href="javascript:void(0)" className="open-reply">
                              Reply
                            </a> */}
                            <form
                              action="#"
                              method="post"
                              className="reply-form"
                            >
                              <div className="input">
                                <textarea
                                  name="reply__two"
                                  id="replyTwo"
                                  cols="30"
                                  rows="10"
                                  placeholder="Reply"
                                ></textarea>
                              </div>
                              <button
                                type="submit"
                                className="button button--effect button--tertiary"
                              >
                                Reply
                              </button>
                            </form>
                          </div>
                        </div>

                            )
                          })
                        }

                      </div>
                      <div className="reply-box wow fadeInUp">
                        <h4>Leave A Reply</h4>
                        <div className="comment__form" id="commentForm">
                          <form action="" onSubmit={createComment}>
                            <div className="input-group-column">
                              <div className="input">
                                <input
                                  type="text"
                                  name="comment_name"
                                  id="commentName"
                                  placeholder="Name"
                                  required
                                  className="input"
                                />
                              </div>
                              <div className="input">
                                <input
                                  type="email"
                                  name="comment_mail"
                                  id="commentMail"
                                  placeholder="Email"
                                  required
                                  className="input"
                                />
                              </div>
                            </div>
                            <div className="input">
                              <input
                                type="text"
                                name="web_address"
                                id="webAddress"
                                placeholder="Website"
                                required
                                className="input"
                              />
                            </div>
                            <div className="input">
                              <textarea
                                name="comment_text"
                                id="commentText"
                                cols="30"
                                rows="10"
                                className="input textarea"
                                placeholder="Write Your Comments"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="button button--effect"
                            >
                              Post A Comment
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 row-item">
                    <div className="blog-default-area__sidebar">
                      <div className="sidebar-single sidebar-single-default">
                        {/* <form action="#" method="post" name="searchPost">
                          <div className="input-group-btn input-group-btn--secondary">
                            <input
                              type="search"
                              name="search__post"
                              id="searchPost"
                              placeholder="Search"
                              required
                            />
                            <button
                              type="submit"
                              className="button button--effect"
                            >
                              <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                          </div>
                        </form> */}
                      </div>
                      <div className="sidebar-single sidebar-single-default sidebar-single-default-profile wow fadeInUp">
                        <div className="img-box">
                          <img src={orin} alt="Markusa" />
                        </div>
                        <h4 className="text-center">Orin Akther</h4>
                        <p className="text-center">
                          Hi, I'm Orin Akther. Undergraduate student of Daffodil
                          International University with the major of CSE. Thanks
                          for reading my blogs. Don't forget to like and follow!
                        </p>
                        <div className="social social--tertiary">
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                      {/* <div className="categories sidebar-single sidebar-single-default">
                        <h4>Categories</h4>
                        <ul>
                          <li>
                            <a href="campaigns.html">
                              <i className="fa-solid fa-arrow-right-long"></i>
                              Blood Donation
                            </a>
                          </li>
                          <li>
                            <a href="campaigns.html">
                              <i className="fa-solid fa-arrow-right-long"></i>
                              Blood Group
                            </a>
                          </li>
                          <li>
                            <a href="campaigns.html">
                              <i className="fa-solid fa-arrow-right-long"></i>
                              Blood Donation While sick
                            </a>
                          </li>
                          <li>
                            <a href="campaigns.html">
                              <i className="fa-solid fa-arrow-right-long"></i>
                              Donation News
                            </a>
                          </li>
                          <li>
                            <a href="campaigns.html">
                              <i className="fa-solid fa-arrow-right-long"></i>
                              Help People
                            </a>
                          </li>
                        </ul>
                      </div> */}
                      {/* <div className="sidebar-single sidebar-single-default wow fadeInUp">
                        <h4>Recent Posts</h4>
                        <div className="recent-post-single">
                          <div className="latest-news__single-content">
                            <p>
                              <a href="blog-details.html">
                                Donation is hope for poor helpless children
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="recent-post-single">
                          <div className="latest-news__single-content">
                            <p>
                              <a href="blog-details.html">
                                Don't Do This Activity After You Donating Your
                                Blood
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="recent-post-single">
                          <div className="latest-news__single-content">
                            <p>
                              <a href="blog-details.html">
                                Donation Rate in Bangladesh
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="recent-post-single">
                          <div className="latest-news__single-content">
                            <p>
                              <a href="blog-details.html">
                                রক্ত দেয়ার আগেই জেনে নিন কিছু জরুরি তথ্য
                              </a>
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <div className="categories sidebar-single sidebar-single-default">
                        <h4>Quick Link</h4>
                        <ul>
                        <li>
                          <Link to="/"><i className="fa-solid fa-arrow-right-long"></i> Home</Link>

                          </li>

                          <li>
                            <Link to="/blogs"> <i className="fa-solid fa-arrow-right-long"></i>
                              Out Blogs</Link>
                            {/* <a href="blog.html">
                              <i className="fa-solid fa-arrow-right-long"></i>
                              Our Blog
                            </a> */}
                          </li>
                          <li>
                          <Link to="/about-us"><i className="fa-solid fa-arrow-right-long"></i> About Us</Link>

                          </li>

                          <li>
                          <Link to="donors"><i className="fa-solid fa-arrow-right-long"></i> Donors</Link>

                          </li>

                        </ul>
                      </div>
                      <div className="sidebar-single sidebar-single-default sidebar-single-default-alt">
                        <h4>Follow Us</h4>
                        <div className="social social--tertiary">
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="javascript:void(0)">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                      <div className="sidebar-single sidebar-single-default sidebar-single--secondary excellence">
                        <h4>Blood Excellence</h4>
                        <h3>Expanded Blood Donate Services Here</h3>
                        <p>
                          Come and join with us and let's save the world
                          together
                        </p>
                        <a
                          href="/about-us"
                          className="button button--quinary button--effect"
                        >
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
