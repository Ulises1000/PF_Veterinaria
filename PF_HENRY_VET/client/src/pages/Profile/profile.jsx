import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav.jsx";
import { signoutUser } from "../../redux/action/index.jsx";
import loader from "../../style-assets/paw_icon.png";
import { updateUser } from "../../redux/action/index.jsx";
import ModalProfile from "../../components/Modal/ModalProfile.jsx";

export default function UserProfile({ hayUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleLogout = () => {
  //console.log(hayUser.cod_User, "ACAAAAAAAAAAAAAAAAAAA")
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

  const [uploading, setUploading] = useState(false);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [oldSelectedFile, setOldSelectedFile] = useState("");
  const handleFileInputChange = (e) => {
    try {
      console.log(e.target);
      if (e.target.files && e.target.files.length > 0) {
        const fileSize = e.target.files[0].size / 1024 / 1024; // in MiB
        const file = e.target.files[0];
        if (fileSize > 1) {
          alert("File size exceeds 1 MiB");
          // $(file).val(''); //for clearing with Jquery
        } else {
          // Proceed further
          setOldSelectedFile(file);
          previewFile(file);
          setSelectedFile(file);
          setFileInputState(e.target.value);
        }
      } else if (!e.target.value) {
        setSelectedFile(oldSelectedFile);
        setFileInputState(oldSelectedFile);
        alert("You did not select any image");
      }
    } catch (error) {
      alert("You did not select any image");
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  let usuarioLocal = hayUser;
  if (localStorage.userPetShop) {
    usuarioLocal = JSON.parse(localStorage.userPetShop);
  }


  const handleSubmitFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (!selectedFile) return;
    reader.readAsDataURL(selectedFile);
    reader.onloadend = async () => {
      setUploading(true);
      const img = reader.result;
      dispatch(
        updateUser(usuarioLocal.cod_User,{
          url: img,
          image_U: usuarioLocal.image_U,
          password_U: usuarioLocal.password_U,
          email_U: usuarioLocal.email_U
        }) 
      );
      // await axios.post(`${window.location.origin}/api/cloudinaryUpload`, {
      //   data: reader.result,
      // });

      setUploading(false);
      setFileInputState("");
      setPreviewSource("");
      navigate("/home");
    };
    reader.onerror = (error) => {
      console.error(error);
    };
  };

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

  useEffect(() => {
    console.log("Se actualizao el usuario");
  }, [usuarioLocal.url]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(localStorage);
  }, [localStorage]);
  if (loading) {
    return (
      <div className="flex items-center justify-center bg-patas flex-col h-screen w-screen absolute">
        <img src={loader} className="imgLoader" />
        <p className="loadingTxt">Loading...</p>
      </div>
    );
  }
  let userLocal = "";
  if (localStorage.userPetShop) {
    console.log(usuarioLocal, "userPetShop en NAVV");
    userLocal = JSON.parse(localStorage.userPetShop).data;
  }


  return (
    <div className="flex absolute top-0 left-0 -z-10 items-center justify-center w-screen h-screen bg-patas">
      <Nav user={usuarioLocal} />
      <div className="flex flex-col md:flex-row sm:w-72 md:w-fit md:p-8 border rounded-xl border-black">
        <div className="space-y-3 pr-3">
          <div className="flex w-72">
            <h1 className="pr-2 font-semibold">Username:</h1>
            <p className="w-80">{usuarioLocal.name_U}</p>
          </div>
          <div className="flex">
            <h1 className="pr-2 font-semibold">Email: </h1>
            <p className="flex">{usuarioLocal.email_U}</p>
          </div>
          <div className="flex">
            <h1 className="pr-2 font-semibold">Direccion:</h1>
            <p className="w-80">{usuarioLocal.direction_U}</p>
            {/* <ModalProfile usuarioLocal={usuarioLocal}/> */}
          </div>
        </div>
        <div className="grid justify-items-center">
          {
            <img
              className="z-30 h-52 w-52 rounded-xl "
              src={usuarioLocal.url}
              alt=""
            />
          }
          <div className="absolute opacity-0  hover:opacity-100 font-bold text-black  grid duration-300 justify-items-center content-center z-40 hover:bg-opacity-40">
            <div>
              {previewSource && (
                <img
                  className="rounded-xl h-52 w-52 "
                  src={previewSource}
                  alt="chosen"
                />
              )}
            </div>
            <form className="flex flex-col" onSubmit={handleSubmitFile}>
              <input 
                className="justify-center self-center  z-50"
                id="fileInput"
                type="file"
                name="image"
                accept=".img,.png,.jpg,.ico,.jpeg"
                onChange={handleFileInputChange}
                defaultValue=""
              />
              <button className="bg-violet-500  w-20 self-center" type="submit">
                Submit
              </button>
            </form>
          </div>

          {/* {uploading === false ? (
          <div>
            <h1 >Upload an Image</h1>
            <div>
              {previewSource && (
                <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: "300px" }}
                />
              )}
              <div  >
             <form onSubmit={handleSubmitFile}>
                 <input
                  id="fileInput"
                  type="file"
                  name="image"
                  accept=".img,.png,.jpg,.ico,.jpeg"
                  onChange={handleFileInputChange}
                  defaultValue=""
                />
                <button type="submit">
                  Submit
                </button>
              </form> 
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.title}>Uploading...</div>
        )} */}
          {/* {user.emails === undefined ? <button><Link to="/userProfile/uploadImage">Change Image</Link></button> : ""} */}
        </div>
      </div>
    </div>
  );
}
