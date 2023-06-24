import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../App';
import { Avatar, Typography } from '@mui/material';
import avatarImg from "../../assets/images/banner1.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";

const base = "http://localhost:5000";

const Members=()=> {
  const [allMembers, setAllMembers] = React.useState([]);
  const [acitved, setActived]=useState([])
const [firstC, setFirstC]=useState("red")
const [secondC, setSecondC]=useState("black")
const [dataStatus, setDataStatus]=useState(true)
const { refresh, setRefresh, refreshAdmin, setRefreshAdmin } =React.useContext(AppContext);

// const [user,setUser]=useState()

// React.useEffect(()=>{
//   const data = JSON.parse(localStorage.getItem("bloodUserData"));
//   if(data){
//     setUser(data)
//   }
// },[])

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

const getAge = (d, m, y) => {
  let currentDate = new Date();
  let birthDate = new Date(`${m} ${d} ${y}`);
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  return age;
};

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

const getAllMember=()=>{
  setFirstC("red")
  setSecondC("black")
  setDataStatus(true)
}
const getActiveMember=()=>{
  setFirstC("black")
  setSecondC("red")
  const filteredArray = allMembers.filter((item) =>getDays2(item.last_month, item.last_day, item.last_year)=="yes");
  setActived(filteredArray);
  console.log("filert", filteredArray);
  setDataStatus(false)
}

const nameModify=(fName, lName)=>{
  var fullName =fName + " " + lName ;
  // console.log(fullName);

// Split the full name into an array of words
var words = fullName.split(" ");

// Get the first letter of each word and convert it to uppercase
var firstNameInitial = words[0].charAt(0).toUpperCase();
var lastNameInitial = words[1].charAt(0).toUpperCase();

// Combine the initials into a single string
var initials = firstNameInitial + lastNameInitial;
// console.log(initials);
return initials

}

  return (
   <div>
    {/* <h3 style={{fontWeight:"600", color:"black", textAlign:"left" , marginTop:"30px " }}>All Members</h3> */}
    <div style={{fontWeight:"600", color:"black", textAlign:"left" , marginTop:"30px ", marginBottom:"15px"  }}>
        <button onClick={getAllMember} style={{background:"transparent", marginRight:"12px", textDecoration:"underline", textDecorationColor:firstC, color:firstC,fontSize:"1rem " }}>All</button>
        <button onClick={getActiveMember} style={{background:"transparent", marginRight:"12px", textDecoration:"underline", textDecorationColor:secondC, color:secondC,fontSize:"1rem " }}>Active</button>
    </div>
    {dataStatus ?
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
        {allMembers?.map((row) => (
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
                 <Avatar sx={{ bgcolor: "#EA062B" }}>{nameModify(row?.first_name, row?.last_name)} </Avatar>

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
                <CheckCircleIcon style={{ color: "green" }} />
              ) : (
                <ClearIcon style={{ color: "red" }} />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>:
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
      {acitved?.map((row) => (
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
              <Avatar
                alt="<NAME>"
                sx={{ width: 34, height: 34 }}
                src={avatarImg}
              />
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
              <CheckCircleIcon style={{ color: "green" }} />
            ) : (
              <ClearIcon style={{ color: "red" }} />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    }

   </div>
  );
}

export default Members ;
