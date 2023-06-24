import { Link, useLocation, useNavigate } from "react-router-dom";
import bannerBg from "../../assets/images/banner-bg.png";
import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import Navbar from "../../components/Navbar";
const base = "http://localhost:5000";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Ragistration = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const { refresh, setRefresh, refreshAdmin, setRefreshAdmin } =
    useContext(AppContext);

  useEffect(() => {
    const user = localStorage.getItem("bloodUserData");
    console.log("from", from);
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate]);

  useEffect(() => {
    axios
      .get(`${base}/member`)
      .then(function (response) {
        console.log("re", response.data);
        setMembers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${base}/admin`)
      .then(function (response) {
        console.log("re", response.data);
        setAdmins(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // console.log("mem", members);

  const regi = (e) => {
    e.preventDefault();
    const t = e.target;
    // console.log(t.email.value, t.password.value);
    console.log("mem", members);
    console.log("admin", admins);
    const lType = t.login_type.value;
    if (lType == "member") {
      const checkingMember = members.find(
        (m) => m.email == t.email.value && m.password == t.password.value
      );
      if (checkingMember) {
        localStorage.setItem("bloodUserData", JSON.stringify(checkingMember));
        //  setRefresh(!refresh)

        navigate(from, { replace: true });
      } else {
        toast.error("not matched", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    else if(lType=="admin"){
      const checkingMember = admins.find(
        (m) => m.email == t.email.value && m.password == t.password.value
      );
      if (checkingMember) {
        localStorage.setItem("bloodUserData", JSON.stringify(checkingMember));
        //  setRefresh(!refresh)

        navigate(from, { replace: true });
      } else {
        toast.error("not matched", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    }
  };

  const submitRegi = (e) => {
    e.preventDefault();
    const t = e.target;

    const existing = members.find((m) => m.email == t.email.value);
    console.log("exist", existing);
    if (existing) {
      toast.error("this email already used", {
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
    const body = {
      first_name: t.first_name.value,
      last_name: t.last_name.value,
      email: t.email.value,
      password: t.password.value,
      phone_number: t.phone_number.value,
      birth_year: t.birthYear.value,
      birth_month: t.birth_month.value,
      birth_day: t.birthDay.value,
      blood_group: t.blood_group.value,
      last_year: t.last_year.value,
      last_month: t.last_month.value,
      last_day: t.last_day.value,
      regi_country: t.regi_country.value,
      regi_state: t.regi_state.value,
      regi_address: t.regiAddress.value,
      regi_city: t.regi_city.value,
      role: "user",
    };
    // console.log("body", body);

    axios
      .post(`${base}/member`, body)
      .then(function (response) {
        // localStorage.setItem("bloodUserData", JSON.stringify(body));
        setRefresh(!refresh);
        // navigate(from, { replace: true });
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
  };

  return (
    <div>
      <Navbar> </Navbar>
      {/* modal  */}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h6
              style={{
                textAlign: "center",
                padding: "10px auto ",
                marginBottom: "0",
                backgroundColor: "#F1F3F4 ",
              }}
            >
              Login
            </h6>
            <form action="" onSubmit={regi} className="loginForm">
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="formInput"
              />
              <input
                type="text"
                name="password"
                id=""
                required
                placeholder="Password"
                className="formInput"
              />
              <select
                name="login_type"
                defaultValue="member"
                id=""
                className="formInput"
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit" className="formBtn">
                Submit
              </button>
            </form>
          </Box>
        </Modal>
      </div>

      <section
        className="banner bg-img dark-overlay dark-overlay--secondary"
        data-background={bannerBg}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-area">
                <div className="banner-area__content">
                  <h2>Register As a Blood Donor</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Register Now
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="registration section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="registration-area wow fadeInUp">
                <div className="section-header section-inner-space">
                  <h2 className="neutral-bottom">MEDTECH DONOR</h2> 
                </div>
                <div className="registration-area__form">
                  <form
                    action=""
                    name="registration__form"
                    onSubmit={submitRegi}
                  >
                    <div className="registration-area__form-single">
                      <p className="secondary">Full Name *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiFName">First Name</label>
                            <input
                              type="text"
                              name="first_name"
                              id="regiFName"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiLName">Last Name</label>
                            <input
                              type="text"
                              name="last_name"
                              id="regiLName"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Date Of Birth *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column flexDiv">
                          <div className="input">
                            <label for="regiMonth">Month</label> <br />
                            <select
                              className="select-month"
                              id="regiMonth"
                              name="birth_month"
                              defaultValue="january"
                              required
                            >
                              {/* <option label="none"></option> */}
                              <option value="january">January</option>
                              <option value="february">February</option>
                              <option value="march">March</option>
                              <option value="april">April</option>
                              <option value="may">May</option>
                              <option value="june">June</option>
                              <option value="july">July</option>
                              <option value="august">August</option>
                              <option value="september">September</option>
                              <option value="october">October</option>
                              <option value="november">November</option>
                              <option value="december">December</option>
                            </select>
                          </div>
                          <div className="input">
                            <label for="regiDay">Day</label> <br />
                            <input
                              type="number"
                              name="birthDay"
                              id="regiCity"
                              required
                            />
                          </div>
                          {/* <div className="input">
                            <label for="regiDay">Day</label>

                            <select className="select-day" id="regiDay" name="birthDay" defaultValue="saturday" required >

                              <option value="saturday">Saturday</option>
                              <option value="sunday">Sunday</option>
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                            </select>
                          </div> */}
                          <div className="input">
                            <label for="regiYear">Year</label> <br />
                            <select
                              className="select-year"
                              id="regiYear"
                              name="birthYear"
                              defaultValue="1990"
                              required
                            >
                              {/* <option label="none" selected></option> */}
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                              <option value="1993">1993</option>
                              <option value="1994">1994</option>
                              <option value="1995">1995</option>
                              <option value="1996">1996</option>
                              <option value="1997">1997</option>
                              <option value="1998">1998</option>
                              <option value="1999">1999</option>
                              <option value="2000">2000</option>
                              <option value="2001">2001</option>
                              <option value="2002">2002</option>
                              <option value="2003">2003</option>
                              <option value="2004">2004</option>
                              <option value="2005">2005</option>
                              <option value="2006">2006</option>
                              <option value="2007">2007</option>
                              <option value="2008">2008</option>
                              <option value="2009">2009</option>
                              <option value="2010">2010</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Blood Group *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column flexDiv ">
                          <div className="input">
                            <label for="regiGroup">Blood Group</label>
                            <select
                              className="select-blood-group bloodSelect"
                              id="regiGroup"
                              defaultValue="ab+"
                              required
                              name="blood_group"
                            >
                              {/* <option label="none" selected></option> */}
                              <option value="ab+">AB+</option>
                              <option value="ab-">AB-</option>
                              <option value="o+">O+</option>
                              <option value="o-">O-</option>
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Last Donate Date *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column flexDiv ">
                          <div className="input">
                            <label for="regiLastMonth">Month</label> <br />
                            <select
                              className="select-last-month"
                              id="regiLastMonth"
                              defaultValue="january"
                              required
                              name="last_month"
                            >
                              {/* <option label="none" selected></option> */}
                              <option value="january">January</option>
                              <option value="february">February</option>
                              <option value="march">March</option>
                              <option value="april">April</option>
                              <option value="may">May</option>
                              <option value="june">June</option>
                              <option value="july">July</option>
                              <option value="august">August</option>
                              <option value="september">September</option>
                              <option value="october">October</option>
                              <option value="november">November</option>
                              <option value="december">December</option>
                            </select>
                          </div>
                          {/* <div className="input">
                            <label for="regiLastDay">Day</label>
                            <select
                              className="select-last-day"
                              id="regiLastDay"
                              defaultValue="saturday" required
                              name="last_day"
                            >

                              <option value="saturday">Saturday</option>
                              <option value="sunday">Sunday</option>
                              <option value="monday">Monday</option>
                              <option value="tuesday">Tuesday</option>
                              <option value="wednesday">Wednesday</option>
                              <option value="thursday">Thursday</option>
                              <option value="friday">Friday</option>
                            </select>
                          </div> */}
                          <div className="input">
                            <label for="regiDay">Day</label> <br />
                            <input
                              type="number"
                              name="last_day"
                              id="regiCity"
                              required
                            />
                          </div>

                          <div className="input">
                            <label for="regiLastYear">Year</label> <br />
                            <select
                              className="select-last-year"
                              id="regiLastYear"
                              defaultValue="1990"
                              required
                              name="last_year"
                            >
                              {/* <option label="none" selected></option>  */}
                              <option value="1990">1990</option>
                              <option value="1991">1991</option>
                              <option value="1992">1992</option>
                              <option value="1993">1993</option>
                              <option value="1994">1994</option>
                              <option value="1995">1995</option>
                              <option value="1996">1996</option>
                              <option value="1997">1997</option>
                              <option value="1998">1998</option>
                              <option value="1999">1999</option>
                              <option value="2000">2000</option>
                              <option value="2001">2001</option>
                              <option value="2002">2002</option>
                              <option value="2003">2003</option>
                              <option value="2004">2004</option>
                              <option value="2005">2005</option>
                              <option value="2006">2006</option>
                              <option value="2007">2007</option>
                              <option value="2008">2008</option>
                              <option value="2009">2009</option>
                              <option value="2010">2010</option>
                              <option value="2011">2011</option>
                              <option value="2012">2012</option>
                              <option value="2013">2013</option>
                              <option value="2014">2014</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Email *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiNumber">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="regiNumber"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Password *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiNumber">Password</label>
                            <input
                              type="text"
                              name="password"
                              id="regiNumber"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Phone Number *</p>
                      <div className="registration-area__form-single__inner">
                        <div className="input-group-column">
                          <div className="input">
                            <label for="regiNumber">Number</label>
                            <input
                              type="text"
                              name="phone_number"
                              id="regiNumber"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="registration-area__form-single">
                      <p className="secondary">Address *</p>
                      <div className="registration-area__form-single__inner mb-0">
                        <div className="input-group-column input-group-column--secondary">
                          <div className="input">
                            <label for="regiAddress">Street Address</label>
                            <input
                              type="text"
                              name="regi_address"
                              id="regiAddress"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiCity">City</label>
                            <input
                              type="text"
                              name="regi_city"
                              id="regiCity"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiState">State / Province</label>
                            <input
                              type="text"
                              name="regi_state"
                              id="regiState"
                              required
                            />
                          </div>
                          <div className="input">
                            <label for="regiCountry">Country</label>
                            <select
                              className="select-regi-country regiSelect bloodSelect "
                              id="regiCountry"
                              defaultValue="bangladesh"
                              required
                              name="regi_country"
                            >
                              {/* <option label="none" selected></option> */}
                              <option value="bangladesh">Bangladesh</option>
                              <option value="usa">United State</option>
                              <option value="japan">Japan</option>
                              <option value="brazil">Brazil</option>
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="china">China</option>
                            </select>
                          </div>
                          <div className="input registration-input-button mb-0">
                            <button
                              type="submit"
                              className="button button--effect"
                            >
                              Submit
                              <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                            <p style={{ marginTop: "15px" }}>
                              Already have account?{" "}
                              <Button onClick={handleOpen}>Login</Button>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ragistration;
