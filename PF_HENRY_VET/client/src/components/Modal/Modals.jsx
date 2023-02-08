import Modal from "./Modal";

export default function Modals({ title, img, text }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={img} alt="Not Found" />
        <button>Leer Mas</button>
        <Modal>
          <h1>{title}</h1>
          <img src={img} alt="not found" />
          <article>{text}</article>
        </Modal>
      </div>
    </div>
  );
}
