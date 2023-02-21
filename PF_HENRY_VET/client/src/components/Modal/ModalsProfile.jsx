import ModalProfile from "./ModalProfile";

export default function ModalsProfile({ title, img, text }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={img} alt="Not Found" />
        <button>Leer Mas</button>
        <ModalProfile>
          <h1>{title}</h1>
          <img src={img} alt="not found" />
          <article>{text}</article>
        </ModalProfile>
      </div>
    </div>
  );
}
