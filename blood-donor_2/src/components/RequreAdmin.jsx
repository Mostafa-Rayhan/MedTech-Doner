
import { Navigate, useLocation } from "react-router-dom";

const RequireAdmin=({children})=>{

    const data = JSON.parse(localStorage.getItem("bloodUserData"));
    console.log("data", data);
    const location=useLocation()
    // if(loading){
    //   return <Loading></Loading>
    // }
    if(data.status !="admin" && data.status !="superAdmin"){
        const user=localStorage.getItem('bloodUserData')
        if(user){
            localStorage.removeItem(user);
        }
        return <Navigate to='/registration' state={{from: location}} replace></Navigate>
    }
    return children;
}
export default RequireAdmin; 
