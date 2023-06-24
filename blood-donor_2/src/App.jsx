import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "magnific-popup/dist/jquery.magnific-popup.min.js";
import "slick-carousel/slick/slick.js";
import "odometer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "odometer/themes/odometer-theme-default.css";
import "animate.css/animate.css";
import "./styles/style.css";
import "./styles/animate.css";
import "./assets/scss/style.scss";

// pages
import { CssBaseline } from "@mui/material";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import AboutUs from "./pages/aboutUs/AboutUs";
import Ragistration from "./pages/registration/Ragistration";
import Footer from "./components/Footer";
import NotFound from "./pages/notFound/NotFound";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useState } from "react";
import Donors from "./pages/donor/Donors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import RequireAuth from "./components/RequreAuth";
import RequireAdmin from "./components/RequreAdmin";
import DonateNow from "./pages/DonateNow/DonateNow";
import RequestedServices from "./pages/others/RequestedServices";
import MyDonate from "./pages/others/MyDonates";
import zIndex from "@mui/material/styles/zIndex";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

export const AppContext = createContext({});

function App() {
  const location = useLocation();
  const [navbarStatus, setNavbarStatus] = useState(true);
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath == "/admin") {
      setNavbarStatus(false);
    } else {
      setNavbarStatus(true);
    }
  }, [location.pathname]);

  const [refresh, setRefresh]=useState(false)
  const [refreshAdmin, setRefreshAdmin]=useState(false)

  const context={
     refresh, setRefresh, refreshAdmin, setRefreshAdmin
  }

  return (
   <>
   <CssBaseline/>
     <ThemeProvider theme={theme}>
     <AppContext.Provider value={context}>

      {/* {navbarStatus && <Navbar></Navbar>} */}

      <ToastContainer
        position="top-center" style={{zIndex:"9999999"}}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/donors" element={<Donors></Donors>}></Route>
        {/* <Route path="/donate-now" element={<DonateNow></DonateNow>}></Route> */}
        {/* <Route path="/donors" element={<Donors></Donors>}></Route> */}
        {/* <Route path="/donors" element={<RequireAuth><Donors></Donors></RequireAuth>}></Route> */}
        <Route path="/my-donate" element={<RequireAuth><MyDonate></MyDonate></RequireAuth>}></Route>
        {/* <Route path="/donate-now" element={<RequireAuth><DonateNow></DonateNow></RequireAuth>}></Route> */} 
        {/* <Route path="/requested-services" element={<RequireAuth><RequestedServices> </RequestedServices></RequireAuth>}></Route> */}
        {/* <Route path="/donors" element={<DonorTwo></DonorTwo>}></Route> */}
        <Route
          path="/blog-details/:id"
          element={<BlogDetails></BlogDetails>}
        ></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/registration"
          element={<Ragistration></Ragistration>}
        ></Route>

         <Route path="/admin" element={<RequireAdmin><AdminDashboard></AdminDashboard></RequireAdmin>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      {navbarStatus && <Footer></Footer>}

     </AppContext.Provider>

    </ThemeProvider>
   </>

  );
}

export default App;
