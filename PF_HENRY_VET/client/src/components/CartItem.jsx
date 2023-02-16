export default function CardItem({
  productName,
  productImg,
  unit_price,
  quantity,
}) {
  console.log("LLEGUEE");
  return (
    <div>
      <h1>{productName}</h1>
      <img src={productImg} alt="" />
      <div>
        <h2>${unit_price}</h2>
        <h2>{quantity}</h2>
      </div>
    </div>
  );
}
