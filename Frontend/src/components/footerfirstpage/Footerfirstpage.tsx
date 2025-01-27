import { Fragment } from "react/jsx-runtime";

const languages = [
  { id: 1, name: "ANGLAIS", image: "./assets/images/firstpage/american.png" },
  { id: 2, name: "ALLEMAND", image: "./assets/images/firstpage/allemagne.png" },
  { id: 3, name: "MALAGASY", image: "./assets/images/firstpage/malagasy.png" },
  { id: 4, name: "FRANCAIS", image: "./assets/images/firstpage/francais.png" },
];

const Footerfirstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <footer className="bg-[#e0e5df] w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center p-4">
          {languages.map((language) => (
            <div
              key={language.id}
              className="flex gap-2 justify-center items-center cursor-pointer"
            >
              <img
                src={language.image}
                alt={`drapeau ${language.name}`}
                width={50}
              />
              <h2>{language.name}</h2>
            </div>
          ))}
        </div>
      </footer>
    </Fragment>
  );
};

export default Footerfirstpage;
