import { Fragment, useState } from "react";
import s from "./message.module.css";

type Person = {
  name: string;
  age: number;
  pv?: number; // facultatif
  arme: string[];
};

export default function Message(props: Person) {
  const [changecolortext, setChangecolorText] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);

  const handleClick = () => {
    setChangecolorText(!changecolortext);
  };

  return (
    <Fragment>
      <h1
        className={`${s.titre} text-xl justify-center flex items-center text-red-500`}
      >
        {props.name} a {props.age} ans
      </h1>

      <ul>
        {props.arme.map((item, index) => (
          <li
            className={`ml-4 ${changecolortext ? "text-orange-400" : "text-violet-700"
              }`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {changecolortext ? "violet" : "orange"}
      </button>

      {name !== null ? (
        <input
          type="text"
          className="mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <button
          onClick={() => setName("")}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Ajouter
        </button>
      )}


      <button
        onClick={() => setName(null)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        annuler
      </button>
    </Fragment>
  );
}
