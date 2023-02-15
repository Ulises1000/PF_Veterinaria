// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../const/orderByName";
import { createPaginationArray, filterProducts, sort } from "../redux/action";

export default function Characteristic() {
  let dispatch = useDispatch();
  // let currentGenre = useSelector((state) => state.currentGenre)
  let realState = useSelector((state) => state);

  // let loadingCheck = useSelector((state) => state.loading)

  function onChangeOrder(event) {
    dispatch(sort(event.target.value));
    console.log(realState.filters.currentSize)
    dispatch(createPaginationArray());
  }

  function onChangeBreed(event) {
    dispatch(filterProducts({
      breed: event.target.value,
      size: realState.filters.currentSize
    }));
    dispatch(createPaginationArray());
  }

  function onChangeSize(event) {
    dispatch(filterProducts({
      size: event.target.value,
      breed: realState.filters.currentBreed
    }));
    dispatch(createPaginationArray());
  }


  // function onChangeBreed(event) {
  //   dispatch(filteredBreed(event.target.value));
  //   dispatch(createPaginationArray());
  // }

  // function onChangeSize(event) {
  //   dispatch(filteredSize(event.target.value));
  //   dispatch(createPaginationArray());
  // }

  return (
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="pl-4 space-x-4 space-y-2">
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChangeSize}
          value={realState.filters.currentSize}
        >
          <option value="petSize" hidden>
            {" "}
            Tamaño
          </option>
          <option value="todos">Para todos los tamaños</option>
          <option value="pequeña">Pequeño</option>
          <option value="mediana">Mediano</option>
          <option value="grande">Grande</option>
        </select>
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChangeBreed}
          value={realState.filters.currentBreed}
        >
          <option value="breedType" hidden>
            {" "}
            Animal
          </option>
          <option value="gato">Gato</option>
          <option value="perro">Perro</option>
        </select>
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChangeOrder}
          value={realState.filters.currentOrder}
        >
          <option value={"Static"} hidden>
            Order
          </option>
          <option value={ASCENDENTE}> A-Z</option>
          <option value={DESCENDENTE}>Z-A</option>
          <option value="HighToLow">Mayor a Menor</option>
          <option value="LowToHigh">Menor a Mayor</option>
        </select>
      </div>
    </div>
  );
}
