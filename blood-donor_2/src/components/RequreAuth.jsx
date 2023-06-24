
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth=({children})=>{
    // const [user, loading]=useAuthState(auth);
    const data = JSON.parse(localStorage.getItem("bloodUserData"));
    // console.log("data", data?.role); 
    const location=useLocation()
    // if(loading){
    //   return <Loading></Loading>
    // }
    if(!data){
        return <Navigate to='/registration' state={{from: location}} replace></Navigate>
    }
    return children;
}
export default RequireAuth;
