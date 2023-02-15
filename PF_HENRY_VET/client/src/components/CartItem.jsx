export default function CardItem(
  productName,
  productImg,
  unit_price,
  quantity
) {
  return (
    <div>
      <h1>{productName}</h1>
      <img src={productImg} alt="" />
      <h2>{unit_price}</h2>
      <h2>{quantity}</h2>
    </div>
  );
}
