import { Fragment } from "react/jsx-runtime";

const Herofirstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="flex mt-16 ">
        <div className="left flex-1 flex justify-center items-center">
          <img
            src="./assets/images/firstpage/pub.png"
            alt="Learn Languages"
            className="max-w-xs md:max-w-md "
          />
        </div>
        <div className="right relative flex-1 flex justify-center items-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-black leading-tight md:text-5xl">
              Apprenez de nouvelles langues avec{" "}
              <span className="text-yellow-400">QUIZLANG</span> ! 🚀
            </h1>
            <p className="text-lg text-black opacity-80 md:text-xl">
              Relevez des défis quotidiens, améliorez vos compétences
              linguistiques et devenez un expert en langues avec notre
              plateforme ludique.
            </p>
            <div className="relative mt-6 flex justify-center">
              <button className="flex items-center space-x-2 bg-yellow-400 text-white rounded-lg px-8 py-4 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 border-b-4 border-[#F1C40F]">
                <span>Rejoindre l'aventure</span>
              </button>
            </div>
          </div>
          <img
            src="./assets/images/firstpage/interro.png"
            alt="icone interrogation"
            className=" absolute max-w-8 md:max-w-40 top-0 right-0 "
          />
          <img
            src="./assets/images/firstpage/perso.png"
            alt="icone perso"
            className=" absolute max-w-8 md:max-w-20 top-0 left-0 "
          />
          <img
            src="./assets/images/firstpage/traduction.png "
            alt="icone traduction"
            className=" absolute max-w-xs md:max-w-40 top-0 "
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Herofirstpage;
