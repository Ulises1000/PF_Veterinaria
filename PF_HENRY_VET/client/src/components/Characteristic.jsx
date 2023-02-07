// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../const/orderByName";
import { createPaginationArray, filtered, sort } from "../redux/action";

export default function Characteristic() {
  let dispatch = useDispatch();
  // let currentGenre = useSelector((state) => state.currentGenre)
  let currentOrder = useSelector((state) => state.currentOrder);
  let currentBreed = useSelector((state) => state.currentBreed);
  let orderedProducts = useSelector((state) => state.orderedProducts);
  let searchedProducts = useSelector((state) => state.searchedProducts)
  // let loadingCheck = useSelector((state) => state.loading)

  function onChangeOrder(event) {
    console.log(event.target.value);
    console.log(orderedProducts);
    console.log(searchedProducts);

    dispatch(sort(event.target.value));
    dispatch(filtered())
    dispatch(createPaginationArray())
  }

  function onChangeBreed (){
    dispatch(filtered(currentBreed))
    dispatch(createPaginationArray())
  }

  return (
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="pl-4 space-x-4 space-y-2">
        {/* <select
          id="dropdown"
          className="bg-violet-200 rounded-md px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChange}
          value={"Objetos"}
        >
          <option value="Objetos" hidden>
            {" "}
            Objetos
          </option>
          <option value="Comedero" className="hover:bg-gray-100">Comedero</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Correas">Correas</option>
          <option value="Rascadores">Rascadores</option>
          <option value="Areneros">Areneros</option>
          <option value="Jugetes">Jugetes</option>

        </select> */}
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChangeBreed}
          value={currentBreed}
        >
          <option value="breed" hidden>
            {" "}
            Animal
          </option>
          <option value="Gato">Gato</option>
          <option value="Perro">Perro</option>
          <option value="Caballo">Caballo</option>

        </select>
        {/* <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChange}
          value={"A-Z"}
        >

        </select> */}
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChangeOrder}
          value={currentOrder}
        >
          <option value={ASCENDENTE}> A-Z</option>
          <option value={DESCENDENTE}>Z-A</option>
          <option value="HighToLow">Mayor a Menor</option>
          <option value="LowToHigh">Menor a Mayor</option>
        </select>
      </div>
    </div>
  );
}
