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
import { toast } from "react-toastify";
// import ReactMarkdown from 'react-markdown';
// const blogContent = "This is the first line.  \nThis is the second line.";
{/* <ReactMarkdown>{blogContent}</ReactMarkdown>; */}

import { useEffect } from "react";
import { Button } from "@mui/material";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const base = "http://localhost:5000";

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const BlogsAdmin = () => {
  const [firstC, setFirstC] = useState("red");
  const [secondC, setSecondC] = useState("black");
  const [activeTab, setActiveTab] = useState("manageAdmins");
  const [blogs, setBlogs]=useState([])
  const [refreshAdmin, setRefreshAdmin]=useState(false)

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

  console.log("b", blogs);



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

  const addBlog = (e) => {
    e.preventDefault();
    const t = e.target;


    const currentDate = new Date();

// Get the current day, month, and year
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();


// Format the date and time
const formattedDate = `${day}.${month}.${year}`;

    const body = {
      title: t.title.value,
      image: t.image.value,
      pera_1: t.pera_1.value,
      pera_2: t.pera_2.value,
      highlighted: t.highlighted.value,
      comments:[],
      time:formattedDate
    };

    console.log(body);
    axios
    .post(`${base}/blog`, body)
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


  };

  // str.slice(7, 12)


const deleteAdmin = (id) => {

  axios
    .delete(`${base}/blog/${id}`)
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
          ALL BLOGS
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
                <TableCell style={{ fontWeight: "700 " }}>ID</TableCell>
                <TableCell style={{ fontWeight: "700 " }} align="right">
                  Title
                </TableCell>
                <TableCell style={{ fontWeight: "700 " }} align="right">
                 Remove
                </TableCell>
                {/* <TableCell style={{ fontWeight: "700 " }} align="right">
                  Availability
                </TableCell> */}
                {/* <TableCell style={{fontWeight:"700 "}} align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs?.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">{row.title.slice(0, 25)}</TableCell>
                  <TableCell align="right"> <Button onClick={()=>deleteAdmin(row._id)} variant="outlined" color="error" style={{border:"none", fontWeight:"700", fontSize:"0.7rem" }}>
                      Delete
                    </Button></TableCell>
                  {/* <TableCell align="right">{row.carbs}</TableCell> */}
                  {/* <TableCell align="right">{row.protein}</TableCell>  */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="formDiv">
          <form action="" onSubmit={addBlog} className="formTagBlog">
            <div className="inputDivBlog">
              <label for="inputId">Title</label>
              <input type="text" id="inputId" name="title" required />
            </div>
            <div className="inputDivBlog">
              <label for="inputId2">Image</label>
              <input type="text" id="inputId2" name="image" required />
            </div>
            <div className="inputDivBlog">
              <label for="inputId3">Pera 1</label>
              <textarea
                rows="1"
                type="text"
                id="inputId3"
                name="pera_1"
                required
              />
            </div>
            <div className="inputDivBlog">
              <label for="inputId4">Pera 2</label>
              <textarea
                rows="1"
                type="text"
                id="inputId4"
                name="pera_2"
                required
              />
            </div>
            {/* <div className="inputDivBlog">
              <label for="inputId5">Pera 3</label>
              <textarea
                rows="1"
                type="text"
                id="inputId5"
                name="pera_3"
                required
              />
            </div>
            <div className="inputDivBlog">
              <label for="inputId6">Pera 4</label>
              <textarea
                rows="1"
                type="text"
                id="inputId6"
                name="pera_4"
                required
              />
            </div> */}
            <div className="inputDivBlog">
              <label for="inputId6">Highlighted </label>
              <textarea
                rows="1"
                type="text"
                id="inputId6"
                name="highlighted"
                required
              />
            </div>

            <button type="submit" className="formBtn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogsAdmin;
