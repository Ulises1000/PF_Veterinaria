export default function CardItem({
  productName,
  productImg,
  unit_price,
  quantity,
}) {
  console.log("LLEGUEE");
  return (
    <div>
      <h1 className="font-Fredoka">Nombre: {productName}</h1>
      <img className="" src={productImg} alt="" />
      <div>
        <h2 className="font-Fredoka">Precio: ${unit_price}</h2>
        <h2 className="font-Fredoka"> Cantidad: {quantity}</h2>
      </div>
    </div>
  );
}
