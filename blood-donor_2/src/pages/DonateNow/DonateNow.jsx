import { Link } from "react-router-dom";
import bannerBg from "../../assets/images/banner-bg.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const base = "http://localhost:5000";

const DonateNow = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const data = localStorage.getItem("bloodUserData");
    if (data) {
      setUser(JSON.parse(data));
      // setRefresh(!refresh);
    } else {
      setUser(null);
    }
  }, []);
  console.log(user);

  const makeDonate = (e) => {
    e.preventDefault();
    const t = e.target;
    const currentDate = new Date();
    const day = currentDate.getDate();
var month = currentDate.getMonth();
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var monthName = monthNames[month];
var year = currentDate.getFullYear();
    const body = {
      blood_group: t.blood_group.value,
      // first_name: t.donate__fname.value,
      // last_name: t.donate__lname.value,
      // email: t.donate__mail.value,
      regi_city: t.donate__address.value,
      last_year: year,
      last_month: monthName,
      last_day:day,
    };

    const body2 = {
      blood_group: t.blood_group.value,
      first_name: t.donate__fname.value,
      last_name: t.donate__lname.value,
      email: t.donate__mail.value,
      regi_city: t.donate__address.value,
      last_year: year,
      last_month: monthName,
      last_day:day,
    };




    axios
      .patch(`${base}/member/${user._id}`, body)
      .then(function (response) {



        axios
      .post(`${base}/donate`, body2)
      .then(function (response) {
        toast.success("Added successfully", {
          position: "top-center",
          autoClose: 3000,
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
        // console.log(error);
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
  return (
    <div>
      <Navbar></Navbar>
      <section
        className="banner bg-img dark-overlay dark-overlay--secondary"
        data-background={bannerBg}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Donate Now</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        {/* <a href="index.html">Home</a> */}
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Donate Now
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donate section-space wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="donate-area">
                <div className="section-header section-inner-space">
                  <h2 className="neutral-descender">Make a Donation</h2>
                </div>
                <form action="" onSubmit={makeDonate} name="donateForm">
                  <div className="group">
                    <h6 className="descender">Your Blood Donation</h6>
                    <div className="input mb-0">
                      <select
                        className="blood-group selectTag"
                        name="blood_group"
                        defaultValue={user?.blood_group || "ab+"}
                        required
                      >

                        <option value="ab+">AB+</option>
                        <option value="ab-">AB-</option>
                        <option value="o+">O+</option>
                        <option value="o-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                      </select>
                    </div>
                  </div>
                  <div className="group group-alt">
                    <h6 className="descender">Details</h6>
                    <div className="input-group-column">
                      <div className="input">
                        <input
                          type="text"
                          name="donate__fname"
                          id="doanteFname"
                          placeholder="First Name"
                          required
                          value={user?.first_name}
                          readOnly
                        />
                      </div>
                      <div className="input">
                        <input
                          type="text"
                          name="donate__lname"
                          id="donateLname"
                          placeholder="Last Name"
                          required
                          value={user?.last_name}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="input-group-column">
                      <div className="input">
                        <input
                          type="email"
                          name="donate__mail"
                          id="doanteMail"
                          placeholder="Email"
                          required
                          value={user?.email}
                          readOnly
                        />
                      </div>
                      <div className="input">
                        <input
                          type="text"
                          name="donate__address"
                          id="donateAddress"
                          placeholder="City"
                          required
                          defaultValue={user?.regi_city}
                        />
                      </div>
                    </div>

                    {/* <div className="input">
                      <textarea
                        name="donate__text"
                        id="donateText"
                        cols="30"
                        rows="10"
                        placeholder="Case Description"
                        required
                      ></textarea>
                    </div> */}
                    <button type="submit" className="button button--effect">
                      Donate Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateNow;
