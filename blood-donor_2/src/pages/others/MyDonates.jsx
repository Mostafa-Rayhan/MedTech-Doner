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

const base = "http://localhost:5000";

const MyDonate = () => {
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
    .get(`${base}/req/${user.email}`)
    .then(function (response) {
      const allReqme=response.data.filter(a=>a.status=="accepted")
      setAllMembers(allReqme)
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  }, [user]);

  console.log("allme", allMembers);

  const getTime=(day, month , year)=>{

    const lastDay = day;
const lastMonth = month;
const lastYear = year;

// Create a Date object with the given values
const date = new Date(lastYear, new Date().toLocaleString('default', { month: 'long' }) === lastMonth ? new Date().getMonth() : new Date(lastMonth + ' 1, ' + lastYear).getMonth(), lastDay);

// Format the date as "20.06.2023"
const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

console.log(formattedDate);
return formattedDate ;

  }



  return (
    <div style={{marginBottom:"60px "}}>
      <Navbar></Navbar>
      <Subject text={"MY donates"}></Subject>

      <div className="container"> 
        {/* <div
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
        </div> */}

        <div style={{margin:"60px 0 ", marginLeft:"0", marginBottom:"30px ", textAlign:"left" }}>
           <p style={{ marginBottom:"6px", paddingBottom:"0"}}> NAME : <span style={{fontSize:"1.3rem", fontWeight:"700" }}>{user?.first_name} {user?.last_name }</span></p>


           <small style={{ marginBottom:"0", paddingBottom:"0"}}>TOTAL DONATE : <span style={{fontWeight:"700", marginBottom:"0", paddingBottom:"0"}} >{allMembers?.length} </span></small>
           <br />
           <small style={{ marginBottom:"2px", paddingBottom:"0"}}>TOKEN : <span style={{fontWeight:"700", marginBottom:"0", paddingBottom:"0"}}>{user?._id}</span></small>
           <br />
           <small style={{ marginBottom:"2px", paddingBottom:"0"}}>POINT : <span style={{fontWeight:"700", marginBottom:"0", paddingBottom:"0"}}>{allMembers?.length * 50 }</span></small>

        </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "700 ", width: "15%" }}>
                    Receiver name
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "700 ", width: "15%" }}
                    align="right"
                  >
                    Phone
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "700 ", width: "15%" }}
                    align="right"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "700 ", width: "15%" }}
                    align="right"
                  >
                    Address
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "700 ", width: "15%" }}
                    align="right"
                  >
                    Email
                  </TableCell>
                  {/* <TableCell
                    style={{ fontWeight: "700 ", width: "15%" }}
                    align="right"
                  >
                    Availability
                  </TableCell> */}
                  {/* <TableCell style={{fontWeight:"700 "}} align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {allMembers?.map((row) => (
                  <TableRow
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ width: "15vw" }}
                    >
                      {row.taker_name}


                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row?.taker_phone}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                    {row?.time}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row?.taker_address},{row?.taker_city}
                    </TableCell>
                    <TableCell align="right" style={{ width: "15vw" }}>
                      {row?.taker_email}
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

export default MyDonate;
