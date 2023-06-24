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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Button } from "@mui/material";

const base = "http://localhost:5000";


const Admins = () => {
  const [firstC, setFirstC] = useState("red");
  const [secondC, setSecondC] = useState("black");
  const [activeTab, setActiveTab] = useState("manageAdmins");
  const [admins, setAdmins] = useState([]);
  const [refreshAdmin, setRefreshAdmin]=useState(false)

  useEffect(() => {
    axios
      .get(`${base}/admin`)
      .then(function (response) {
        // console.log("re", response)
        setAdmins(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refreshAdmin]);
  console.log(admins);

  const getAllMember = () => {
    setFirstC("red");
    setSecondC("black");
    setActiveTab("manageAdmins");
  };
  const getActiveMember = () => {
    setFirstC("black");
    setSecondC("red");
    setActiveTab("addNew");
  };

  const addNewAdmin = (e) => {
    e.preventDefault();
    const d = e.target;
    // console.log(d.email.value, d.password.value, d.status.value);
    const body = {
      email: d.email.value,
      password: d.password.value,
      status: d.status.value,
    };

    axios
      .post(`${base}/admin`, body)
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
    // fetch(`${base}/admin`,{
    //   method:"POST",
    //   'content-type':"application/json",
    //   body:JSON.stringify(body)
    // }
    // )
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };
  const deleteAdmin = (id) => {

    axios
      .delete(`${base}/admin/${id}`)
      .then(function (response) {
        setRefreshAdmin(!refreshAdmin)
        toast.success("deleted successfully", {
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
    // fetch(`${base}/admin`,{
    //   method:"POST",
    //   'content-type':"application/json",
    //   body:JSON.stringify(body)
    // }
    // )
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  return (
    <div>
      {/* <h5  style={{fontWeight:"600", color:"black", textAlign:"left" , marginTop:"30px " }}>MANAGE ADMINS</h5> */}
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
          MANAGE ADMINS
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
          ADD NEW
        </button>
      </div>
      {activeTab == "manageAdmins" ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "700 " }}>Email</TableCell>
                {/* <TableCell style={{ fontWeight: "700 " }} align="right">
                  Email
                </TableCell> */}
                <TableCell style={{ fontWeight: "700 " }} align="right">
                  Status
                </TableCell>
                <TableCell style={{ fontWeight: "700 " }} align="right">
                  Remove
                </TableCell>

                {/* <TableCell style={{fontWeight:"700 "}} align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {admins?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  {/* <TableCell align="right">{row.email}</TableCell> */}
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">
                    <Button onClick={()=>deleteAdmin(row._id)} variant="outlined" color="error" style={{border:"none", fontWeight:"700", fontSize:"0.7rem" }}>
                      Delete
                    </Button>
                  </TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell>  */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="formDiv">
          <form action="" onSubmit={addNewAdmin} className="formTag">
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
              className="formSelect"
              name="status"
              defaultValue="admin"
              required
            >
              <option value="admin">admin</option>
              <option value="superAdmin">Super admin</option>
            </select>
            <button type="submit" className="formBtn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admins;
