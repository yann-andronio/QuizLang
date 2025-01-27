import { Fragment } from "react/jsx-runtime";

const Footerfirstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <footer className="bg-[#e0e5df] lg:h-screen md:h-screen w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center p-4">
          <div className="lang1 flex gap-2 justify-center items-center cursor-pointer">
            <img
              src="./assets/images/firstpage/american.png"
              alt="drapeaux américain"
              width={50}
            />
            <h2>ANGLAIS</h2>
          </div>

          <div className="lang2 flex gap-2 justify-center items-center cursor-pointer">
            <img
              src="./assets/images/firstpage/allemagne.png"
              alt="drapeaux allemagne"
              width={50}
            />
            <h2>ALLEMAND</h2>
          </div>

          <div className="lang3 flex gap-2 justify-center items-center cursor-pointer">
            <img
              src="./assets/images/firstpage/malagasy.png"
              alt="drapeaux malagasy"
              width={50}
            />
            <h2>MALAGASY</h2>
          </div>

          <div className="lang4 flex gap-2 justify-center items-center cursor-pointer">
            <img
              src="./assets/images/firstpage/francais.png"
              alt="drapeaux francais"
              width={50}
            />
            <h2>FRANCAIS</h2>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footerfirstpage;
