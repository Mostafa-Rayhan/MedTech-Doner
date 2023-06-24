import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.webp";
import bloodpic1 from "../../assets/images/bloodpic1.jpg";
import bloodpic6 from "../../assets/images/bloodpic6.png";
import bloodpic10 from "../../assets/images/bloodpic10.jpg";
import bloodpic11 from "../../assets/images/bloodpic11.jpg";
import bloodpic12 from "../../assets/images/bloodpic12.jpg";
import bloodbd2 from "../../assets/images/bloodbd2.jpeg";
import bloodbd3 from "../../assets/images/bloodbd3.jpeg";
import orin from "../../assets/images/orin.jpg";
import misha from "../../assets/images/misha.jpg";
import sakib from "../../assets/images/sakib.jpg";
import latif from "../../assets/images/latif.jpg";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <section
        className="banner bg-img dark-overlay dark-overlay--secondary"
        data-background={banner1}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>About Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="who-area">
                <div className="row d-flex align-items-center neutral-row">
                  <div className="col-lg-6 row-item">
                    <div className="who-area__content wow fadeInUp">
                      <h2 className="descender">Who We Are</h2>
                      <h5 className="descender">
                        We are here not for income, but for outcome
                      </h5>
                      <p>
                        MedTech donor is not ment to earn money from receivers.
                        We only take the money for ensuring the security of the
                        donors and to give them many kinds of rewards for their
                        motivation.
                      </p>

                      {/* <a href="#" className="button button--effect">
                        Explore Now
                      </a> */}
                    </div>
                  </div>
                  <div className="col-lg-6 row-item order-first order-lg-last">
                    <div className="who-area__thumb text-start text-lg-center">
                      <img src={banner2} alt="Who We Are" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="counter counter--secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counter-area">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item mb-30">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="3"
                        >
                          10
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Year's Experience
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item mb-30">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="150"
                        >
                          500
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Blood Donations
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item mb-30 mbs">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="15"
                        >
                          15
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Total Awards
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="odometer-item">
                      <div className="counter-thumb">
                        <h2
                          className="odometer light neutral-ascender-light"
                          data-odometer-final="200"
                        >
                          400
                        </h2>
                      </div>
                      <p className="secondary neutral-descender">
                        Blood Donors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                            <i className="fa-solid fa-angles-right"></i>Easy to
                            Find Donors
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
                            <i className="fa-solid fa-angles-right"></i>Offline
                            Activation
                          </li>
                          <li>
                            <i className="fa-solid fa-angles-right"></i>Rare
                            Blood Groups
                          </li>
                        </ul>
                      </div>
                      {/* <a href="#" className="button button--effect">
                        Learn More
                      </a> */}
                    </div>
                  </div>
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
                          Check your blood group for Free! Start donating bloods
                          and save lifes.
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
                          Donate blood and save someones life! Your blood won't
                          go to waste. Come and save lifes.
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
                          For a healthier life, come and test your diabetis and
                          blood pressure and take advice from doctors for free!
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

      <section className="testimonial--secondary section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial--secondary-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    Testimonials
                  </p>
                  <h2 className="neutral-bottom">What Our Clients Say</h2>
                </div>
                <div className="testimonial--secondary-area__slider-wrapper">
                  <div className="testimonial--secondary-area__slider">
                    <div className="testimonial--secondary-area__slider-single__wrapper">
                      <div className="testimonial--secondary-area__slider-single">
                        <span className="quote">"</span>
                        <h4>Got Rewards!</h4>
                        <p className="tertiary">
                          I am able to donate blood well by using this website.
                          Their behavior is too much good.I also received some
                          reward for blood donation.
                        </p>
                        <div className="avatar">
                          <img src={orin} alt="Orin" />
                          <div className="avatar-info">
                            <h6>Orin Akther</h6>
                            <span className="span">Web Developer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial--secondary-area__slider-single__wrapper">
                      <div className="testimonial--secondary-area__slider-single">
                        <span className="quote">"</span>
                        <h4>Excelent Service</h4>
                        <p className="tertiary">
                          Mechtech donar are very safe and secure website for
                          blood donation. After donating blood they give me to
                          eat some food. They gift me some rewarded.I can use
                          this reward for shopping.
                        </p>
                        <div className="avatar">
                          <img src={misha} alt="Misha" />
                          <div className="avatar-info">
                            <h6>Afsana Misha</h6>
                            <span className="span">Lecturer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial--secondary-area__slider-single__wrapper">
                      <div className="testimonial--secondary-area__slider-single">
                        <span className="quote">"</span>
                        <h4>Professional services all the way</h4>
                        <p className="tertiary">
                          I want to thank you for your donation and let you know
                          how rare of a person you are because generosity like
                          yours is hard to find these days.
                        </p>
                        <div className="avatar">
                          <img src={sakib} alt="sakib" />
                          <div className="avatar-info">
                            <h6>Md. Shadman Sakib</h6>
                            <span className="span">Programmer & Developer</span>
                          </div>
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

      <section className="call dark-overlay bg-img" data-background={bloodpic6}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-area">
                <div className="icon-box__wrapper">
                  <a href="tel:+8801317903819" className="icon-box">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </div>
                <p className="primary neutral-ascender descender">Contact Us</p>
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

      <section className="process section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="process-area">
                <div className="section-header section-inner-space">
                  <p className="primary neutral-ascender descender">
                    What We Do
                  </p>
                  <h2 className="neutral-descender">Donation Process</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    <div className="process-area__single">
                      <div className="process-area__single-item">
                        <h5>Registration</h5>
                        <p className="neutral-bottom">
                          Register as a blood donor with only few steps. It's
                          easy as a piece of cake.
                        </p>
                        <div className="text">
                          <p className="tertiary">01</p>
                        </div>
                        <span className="arrow"></span>
                      </div>
                      <div className="process-area__single-item">
                        <h5>Donation</h5>
                        <p className="neutral-bottom">
                          After the completation of the test, your blood will be
                          transferred to the patient.
                        </p>
                        <div className="text">
                          <p className="tertiary">03</p>
                        </div>
                        <span className="arrow"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-5 offset-xl-2">
                    <div className="process-area__single process-area__single--secondary">
                      <div className="process-area__single-item process-area__single-item--secondary">
                        <h5>Screening test</h5>
                        <p className="neutral-bottom">
                          When someone need blood, there will be a notification
                          and your test samples will go through a screening
                          test.
                        </p>
                        <div className="text">
                          <p className="tertiary">02</p>
                        </div>
                        <span className="arrow"></span>
                      </div>
                      <div className="process-area__single-item process-area__single-item--secondary">
                        <h5>Rest & Rewards</h5>
                        <p className="neutral-bottom">
                          Congratulations on you donation of blood, now you take
                          rest and enjoy the rewards and vouchers given by us!
                        </p>
                        <div className="text text-alt">
                          <p className="tertiary">04</p>
                        </div>
                        <span className="arrow"></span>
                      </div>
                    </div>
                  </div>
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
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
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
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
                            <i className="fa-brands fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                      <h5>Afsara Tasneem Misha</h5>
                      <p className="secondary neutral-descender">Supervisor</p>
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
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                          <a href="https://www.pinterest.com/" target="_blank">
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
                        Blood is the most precious gift that anyone can give to
                        another person – the gift of life. A decision to donate
                        your blood can save a life, or even several if your
                        blood is separated into its components – red cells,
                        platelets and plasma – which can be used individually
                        for patients with specific conditions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="cta-area__btn text-start text-md-end">
                      <a
                        href="/registration" 
                        className="button button--quaternary button--effect"
                      >
                        Register Now
                      </a>
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
    </div>
  );
};

export default AboutUs;
