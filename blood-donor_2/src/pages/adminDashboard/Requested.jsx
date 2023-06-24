import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import axios from "axios";
import { AppContext } from "../../App";
import { Avatar, Typography } from "@mui/material";
import avatarImg from "../../assets/images/banner1.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import Navbar from "../../components/Navbar";
import Subject from "../../components/Subject";
import { toast } from "react-toastify";

const base = "http://localhost:5000";

const Requested = () => {
  const [allMembers, setAllMembers] = React.useState([]);
  const [acitved, setActived] = useState([]);
  const [firstC, setFirstC] = useState("red");
  const [secondC, setSecondC] = useState("black");
  const [thirdC, setThirdC] = useState("black");
  const [dataStatus, setDataStatus] = useState(1);
  const { refresh, setRefresh, refreshAdmin, setRefreshAdmin } =
    React.useContext(AppContext);

    const [user, setUser] = useState();
    const [approved, setApproved]=useState([])
    const [pending, setPending]=useState([])
    const [cancalled, setCancelled]=useState([])

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
   if(user){
    axios
    .get(`${base}/appointment-request`)
    .then(function (response) {
      setAllMembers(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  }, [user, refresh]);

  console.log(allMembers);
  React.useEffect(() => {
   const approve=allMembers.filter(f=>f.status=="approved")
   setApproved(approve)
  }, [user, allMembers]);
  React.useEffect(() => {
   const approve=allMembers.filter(f=>f.status=="pending")
   setPending(approve)
  }, [user, allMembers]);
  React.useEffect(() => {
   const approve=allMembers.filter(f=>f.status=="cancelled")
   setCancelled(approve)
  }, [user, allMembers]);

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

  const getAllMember = () => {
    setFirstC("red");
    setSecondC("black");
    setThirdC("black");
    setDataStatus(1);
  };
  const getActiveMember = () => {
    setFirstC("black");
    setSecondC("red");
    setThirdC("black");
    const filteredArray = allMembers.filter(
      (item) =>
        getDays2(item.last_month, item.last_day, item.last_year) == "yes"
    );
    setActived(filteredArray);
    console.log("filert", filteredArray);
    setDataStatus(2);
  };
  const getCancelledMember = () => {
    setFirstC("black");
    setSecondC("black");
    setThirdC("red");
    const filteredArray = allMembers.filter(
      (item) =>
        getDays2(item.last_month, item.last_day, item.last_year) == "yes"
    );
    setActived(filteredArray);
    console.log("filert", filteredArray);
    setDataStatus(3);
  };

  const approve=(a)=>{
const body={
    status:"approved"
}

    axios
      .patch(`${base}/appointment-request/${a._id}`, body)
      .then(function (response) {
        setRefresh(!refresh)
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

  }
  const cancel=(a)=>{
const body={
    status:"cancelled"
}

    axios
      .patch(`${base}/appointment-request/${a._id}`, body)
      .then(function (response) {
        setRefresh(!refresh)
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

  }




  return (
    <div>

      <div className="">
        <div
          style={{
            fontWeight: "600",
            color: "black",
            textAlign: "left",
            marginTop: "30px ",
            marginBottom: "15px",
          }}
        >
          <button
            onClick={getAllMember}
            style={{
              background: "transparent",
              marginRight: "12px",
              textDecoration: "underline",
              textDecorationColor: firstC,
              color: firstC,
              fontSize: "1rem ",
            }}
          >
            Approved
          </button>
          <button
            onClick={getActiveMember}
            style={{
              background: "transparent",
              marginRight: "12px",
              textDecoration: "underline",
              textDecorationColor: secondC,
              color: secondC,
              fontSize: "1rem ",
            }}
          >
            Pending
          </button>
          <button
            onClick={getCancelledMember}
            style={{
              background: "transparent",
              marginRight: "12px",
              textDecoration: "underline",
              textDecorationColor: secondC,
              color: thirdC,
              fontSize: "1rem ",
            }}
          >
            Cancelled
          </button>
        </div>
        {dataStatus == 1 && (
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
                    EMAIL
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
                    SERVICE TYPE
                  </TableCell>

                  {/* <TableCell
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
                  </TableCell> */}
                  {/* <TableCell style={{fontWeight:"700 "}} align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {approved?.map((row) => (
                  <TableRow
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ width: "15vw" }}
                    >
                      {row.appointment__name}

                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row.appointment__email}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row.appointment__number}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row.service_type}
                    </TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {dataStatus == 2 && (
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
                    EMAIL
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
                    SERVICE TYPE
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "700 ", width: "15%" }}
                    align="right"
                  >
                   MANAGE
                  </TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {pending?.map((row) => (
                  <TableRow
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ width: "15vw" }}
                    >
                      {row.appointment__name}

                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row.appointment__email}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row.appointment__number}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row.service_type}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                     <div className="ApBtnDiv">
                        <button className="approvebtn" onClick={()=>approve(row)}>Approve</button>
                        <button className="cancelBtn" onClick={()=>cancel(row)}>Cancel</button>
                     </div>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {dataStatus == 3 && (
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
                   EMAIL
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
                   SERVICE TYPE
                 </TableCell>
                 {/* <TableCell
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
                 </TableCell> */}
                 {/* <TableCell style={{fontWeight:"700 "}} align="right">Protein&nbsp;(g)</TableCell> */}
               </TableRow>
             </TableHead>
             <TableBody>
               {cancalled?.map((row) => (
                 <TableRow
                   key={row}
                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                 >
                   <TableCell
                     component="th"
                     scope="row"
                     style={{ width: "15vw" }}
                   >
                     {row.appointment__name}

                   </TableCell>
                   <TableCell align="right" style={{ width: "15vw" }}>
                     {row.appointment__email}
                   </TableCell>
                   <TableCell align="right" style={{ width: "15vw" }}>
                     {row.appointment__number}
                   </TableCell>
                   <TableCell align="right" style={{ width: "15vw" }}>
                     {row.service_type}
                   </TableCell>

                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Requested;

