// import { useSelector } from "react-redux";

export default function Characteristic() {
  // let dispatch = useDispatch()
  // let currentGenre = useSelector((state) => state.currentGenre)
  // let loadingCheck = useSelector((state) => state.loading)

  function onChange(event) { }


  return (
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="pl-4 space-x-4 space-y-2">
        <select
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

        </select>
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChange}
          value={"Animal"}
        >
          <option value="Animal" hidden>
            {" "}
            Animal
          </option>
          <option value="Gato">Gato</option>
          <option value="Perro">Perro</option>
          <option value="Caballo">Caballo</option>

        </select>
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChange}
          value={"A-Z"}
        >
          <option value="A-Z" hidden>
            {" "}
            A-Z
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>

        </select>
        <select
          id="dropdown"
          className="bg-violet-200 rounded-md  px-4 py-2 text-sm text-gray-700 hover:font-semibold"
          onChange={onChange}
          value={"Precios"}
        >
          <option value="Precios" hidden>
            {" "}
            Precios
          </option>
          <option value="MayoraMenor">Mayor a Menor</option>
          <option value="MenoraMayor">Menor a Mayor</option>

        </select>
      </div>
    </div>
  );
}
