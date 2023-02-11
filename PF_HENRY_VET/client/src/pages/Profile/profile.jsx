import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import loader from "../../style-assets/paw_icon.png";

export default function UserProfile() {
  // const dispatch = useDispatch()
  // const handleLogout = () => {
  //     if (user.category) {
  //         localStorage.clear();
  //         dispatch(logout());
  //         window.location.reload("http://localhost:3000/login");
  //     } else if (user.emails) {
  //         window.open("http://localhost:3001/auth/logout", "_self");
  //     }
  // };
  // const logout = () => {
  //     window.open("http://localhost:3001/auth/logout", "_self");
  // };
  // let userValidate = ""
  // let userImage = ""

  //   const users = useSelector((state) => state.users.allUsers);
  //   const saveImage = useSelector((state) => state.cloudinaryImage.image);

  //   useEffect(() => {
  //     if (!users.length) {
  //       dispatch(getTodosUsuarios());
  //     }
  //     if(saveImage.length && user.image !== saveImage[0]){
  //         window.location.reload(false)
  //     }
  //   }, [dispatch, users.length, saveImage.length, saveImage, user.image]);

  //   if(user.emails){
  //      userValidate = users.find((e) => e.email === user.emails[0].value);
  //      userImage = user.photos[0].value
  //   }
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }
  return (
    <div className="flex absolute top-0 left-0 -z-10 items-center justify-center w-screen h-screen bg-patas">
    <Nav/>
      <div className="flex p-8 border rounded-xl border-black">
        <div className="space-y-3 pr-3">
          <div className="flex w-72">
            <h1 className="pr-2 font-semibold">Username:</h1>
            <p className="w-80">Alberto Diaz</p>
          </div>
          <div className="flex">
            <h1 className="pr-2 font-semibold">Email: </h1>
            <p className="flex">ThanksImFine@gmail.com.ar</p>
          </div>
          <div className="flex items-end justify-end w-72 h-36">
            <button className="bg-white h-10 duration-300 hover:bg-red-100 p-2 rounded-lg border border-black ">
              Logout
            </button>
          </div>
        </div>
        <div className="grid justify-items-center">
          {<img className="z-30 h-52 w-52 rounded-xl " src="" alt="" />}
          <div className="absolute opacity-0  hover:opacity-40 font-bold text-black  grid duration-300 justify-items-center content-center z-40 hover:bg-slate-50 hover:bg-opacity-40 h-52 w-52">
            Change Image
          </div>
        </div>
        {/* {user.emails === undefined ? <button><Link to="/userProfile/uploadImage">Change Image</Link></button> : ""} */}
      </div>
    </div>
  );
}
