import { useState } from "react";
import "./modal.css";

export default function Modal({ children }) {
  return (
    <>
      <article className="modal is-open">
        <div className="modal-container">
          <button className="modal-close">X</button>
          {children}
        </div>
      </article>
    </>
  );
}

// SOLUCION ANTERIOR IMPERFECTA-----------------------------------
// const [modal, setModal] = useState(false);
//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }
//   return (
//     <>
//       <button onClick={toggleModal} className="btnModal">
//         {" "}
//         Leer más!
//       </button>
//       {modal && (
//         <div className="modal">
//           <div className="overlay"></div>
//           <div className="modal-content">
//             <h1>{title}</h1>
//             <img src={img} />
//             <p>{text}</p>
//             <button className="close-modal" onClick={toggleModal}>
//               X
//             </button>
//           </div>
//         </div>
//       )}
