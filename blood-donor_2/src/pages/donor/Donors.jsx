import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Subject from "../../components/Subject";
import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import avatarImg from "../../assets/images/banner1.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { AppContext } from "../../App";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";

const base = "http://localhost:5000";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  maxHeight:"90vh",
  overflow:"auto",
  // height:"max-content",
  p: 4,
};

const Donors = () => {
  const [allMembers, setAllMembers] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const { refresh, setRefresh, refreshAdmin, setRefreshAdmin } =
    React.useContext(AppContext);
  const [user, setUser] = useState();
  const [modalData, setModalData]=useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = (da) => {
    setOpen(true)
    setModalData(da)
  };
  const handleClose = () => setOpen(false);


  React.useEffect(() => {
    const data = localStorage.getItem("bloodUserData");
    if (data) {
      setUser(JSON.parse(data));
      // setRefresh(!refresh);
    } else {
      setUser(null);
    }
  }, [refresh]);

  React.useEffect(() => {
    axios
      .get(`${base}/member`)
      .then(function (response) {
        setAllMembers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refresh]);

  React.useEffect(() => {
    setFiltered(allMembers);
  }, [allMembers]);

  const getDays = (d, m, y) => {
    let currentDate = new Date();
    let birthDate = new Date(`${m} ${d} ${y}`);
    let ageInMilliseconds = currentDate - birthDate;

    let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    return ageInDays;
  };

  const getDays2 = (d, m, y) => {
    let currentDate = new Date();
    let birthDate = new Date(`${m} ${d} ${y}`);
    let ageInMilliseconds = currentDate - birthDate;

    let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    if (ageInDays >= 90) {
      return "yes";
    } else {
      return "no";
    }
  };

  const filterData = (e) => {
    e.preventDefault();
    const t = e.target;

    const filters = {
      location: t?.location?.value?.toLowerCase(),
      bloodGroup: t?.group?.value?.toLowerCase(),
      activelyDonatable: t?.active?.value?.toLowerCase(),
    };
    console.log("filters", filters);

    const filteredArray = allMembers.filter((item) => {
      // Apply the filters based on the filter values
      const locationMatch = filters.location
        ? item?.regi_city?.toLowerCase() === filters.location
        : true;
      const bloodGroupMatch = filters.bloodGroup
        ? item?.blood_group?.toLowerCase() === filters.bloodGroup
        : true;
      const activelyDonatableMatch = filters.activelyDonatable
        ? filters.activelyDonatable ===
          getDays2(item.last_month, item.last_day, item.last_year)
        : true;

      console.log(
        "filte",
        locationMatch,
        bloodGroupMatch,
        activelyDonatableMatch
      );
      return locationMatch && bloodGroupMatch && activelyDonatableMatch;
    });

    setFiltered(filteredArray);
  };

  const getAge = (d, m, y) => {
    let currentDate = new Date();
    let birthDate = new Date(`${m} ${d} ${y}`);
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    return age;
  };

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

  const reserve = (e) => {
    e.preventDefault ()
    const t=e.target ;

    // time

    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Months are zero-based
    let year = currentDate.getFullYear();

    // Pad single digits with leading zeros
    day = (day < 10) ? "0" + day : day;
    month = (month < 10) ? "0" + month : month;

    const time = day + "." + month + "." + year;

    const body ={
      reciever_email:modalData.email,
      reciever_id:modalData._id,
      reciever_phone:modalData.phone_number,
      taker_name:t.taker_name.value,
      taker_email:t.taker_email.value,
      taker_phone:t.taker_phone.value,
      taker_address:t.taker_address.value,
      taker_city:t.taker_city.value,
      taker_desc:t.taker_desc.value,
      status:"pending",
      time:time
    }

    axios
    .post(`${base}/req`, body)
    .then(function (response) {
      console.log("done");
      toast.success(" successful", {
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

  return (
    <div>
      {/* modal */}
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:"center", marginBottom:"12px " }}>
            Reserve this donor
          </Typography>
          <form action="" onSubmit={reserve} className="reserveForm">
            <label htmlFor="">Your name</label> <br />
            <input type="text" name="taker_name" id="" className="reserveInp" required />
            <label htmlFor="">Your email</label> <br />
            <input type="email" name="taker_email" id="" className="reserveInp" required />
            <label htmlFor="">Address</label> <br />
            <input type="text" name="taker_address" id="" className="reserveInp" required />
            <label htmlFor="">City</label> <br />
            <input type="text" name="taker_city" id="" className="reserveInp" required />
            <label htmlFor="">Phone number</label> <br />
            <input type="number" name="taker_phone" id="" className="reserveInp" required />
            <label htmlFor="">Details (optional)</label> <br />
            <textarea type="text" name="taker_desc" id="" className="reserveInp"  />
            <button className="reserveSubmitBtn" type="submit">Submit</button>
          </form>
        </Box>
      </Modal>
      {/* end modal  */}
      <Navbar></Navbar>
      {/* <h3 style={{fontWeight:"600", color:"black", textAlign:"left" , marginTop:"30px " }}>All Donors</h3> */}
      {/* <div style={{fontWeight:"600", color:"black", textAlign:"left" , marginTop:"30px ", marginBottom:"15px"  }}>
        <button onClick={getAllMember} style={{background:"transparent", marginRight:"12px", textDecoration:"underline", textDecorationColor:firstC, color:firstC,fontSize:"1rem " }}>All</button>
        <button onClick={getActiveMember} style={{background:"transparent", marginRight:"12px", textDecoration:"underline", textDecorationColor:secondC, color:secondC,fontSize:"1rem " }}>Active</button>
    </div> */}
      <Subject text={"Donors"}></Subject>

      <div className="donorspage">
        {/* filter section  */}
        <section className="filterSec container">
          <form onSubmit={filterData} className="filterDiv row">
            <input
              type="text"
              placeholder="city"
              name="location"
              className="col-3"
            />
            {/* <input type="text" placeholder="Blood group" name="group"  className="col-3"/>
          <input type="text" placeholder="Active" name="active" className="col-3" /> */}
            <select name="group" defaultValue="" id="" className="col-3">
              <option value="">Select blood</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
            </select>
            <select name="active" defaultValue="" id="" className="col-3">
              <option value="">Select status</option>
              <option value="yes">Active</option>
              <option value="no">Inactive</option>
            </select>
            <button type="submit" className="col-2  button--effect">
              Search
            </button>
          </form>
        </section>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "700 ", width: "15%" }}>
                  Name
                </TableCell>
                <TableCell
                  style={{ fontWeight: "700 ", width: "15%" }}
                  align="right"
                >
                  Blood G.
                </TableCell>
                <TableCell
                  style={{ fontWeight: "700 ", width: "15%" }}
                  align="right"
                >
                  Phone No
                </TableCell>
                <TableCell
                  style={{ fontWeight: "700 ", width: "15%" }}
                  align="right"
                >
                  Last Donate
                </TableCell>
                <TableCell
                  style={{ fontWeight: "700 ", width: "15%" }}
                  align="right"
                >
                  Location
                </TableCell>
                <TableCell
                  style={{ fontWeight: "700 ", width: "15%" }}
                  align="right"
                >
                  Availability
                </TableCell>
                {/* <TableCell style={{fontWeight:"700 "}} align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "15vw" }}
                  >
                    {/* {row.name} */}
                    <div style={{ display: "flex" }}>
                      {/* <Avatar
                        alt="<NAME>"
                        sx={{ width: 34, height: 34 }}
                        src={avatarImg}
                      /> */}
                      <Avatar sx={{ bgcolor: "#EA062B" }}>
                        {nameModify(row?.first_name, row?.last_name)}
                      </Avatar>

                      {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                      <div style={{ marginLeft: "1vw" }}>
                        <Typography
                          variant="body2"
                          display="block"
                          style={{ fontWeight: "700" }}
                        >
                          {row.first_name} {row.last_name}
                        </Typography>
                        <Typography variant="caption" display="block">
                          {getAge(
                            row.birth_month,
                            row.birth_day,
                            row.birth_year
                          )}{" "}
                          years
                        </Typography>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right" style={{ width: "15vw" }}>
                    {row.blood_group}
                  </TableCell>
                  <TableCell align="right" style={{ width: "15vw" }}>
                    {row.phone_number}
                  </TableCell>
                  <TableCell align="right" style={{ width: "15vw" }}>
                    {getDays(row.last_month, row.last_day, row.last_year)} days
                    ago
                  </TableCell>
                  <TableCell align="right" style={{ width: "15vw" }}>
                    {row.regi_city}, {row.regi_state}
                  </TableCell>
                  <TableCell align="right" style={{ width: "15vw" }}>
                    {getDays(row.last_month, row.last_day, row.last_year) >=
                    90 ? (
                      // <CheckCircleIcon style={{ color: "green" }} />
                      <button className="reserveBtn" onClick={()=>handleOpen(row)}>
                        Reserve
                      </button>
                    ) : (
                      <ClearIcon style={{ color: "red" }} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Donors;
