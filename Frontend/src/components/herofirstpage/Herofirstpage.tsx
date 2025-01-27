import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Herofirstpage: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="flex mt-16 h-full  flex-col lg:flex-row ">
        <div className="left flex-1 flex justify-center items-center">
          <img
            src="./assets/images/firstpage/pub.png"
            alt="Learn Languages"
            className="max-w-xs md:max-w-md "
          />
        </div>
        <div className="right relative flex-1 flex justify-center items-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-extrabold text-[#0d1b2a] leading-tight md:text-5xl">
              Apprenez de nouvelles langues avec{" "}
              <span className="text-green-400 font-quizlang">QUIZLANG</span> ! 🚀
            </h1>
            <p className="text-lg text-[#0d1b2a] opacity-80 md:text-xl">
              Relevez des défis quotidiens, améliorez vos compétences
              linguistiques et devenez un expert en langues avec notre
              plateforme ludique.
            </p>
            <Link to="/selectlanguage" className="relative mt-6 flex justify-center">
              <button className="flex mt-4 items-center space-x-2 text-lg bg-yellow-400 text-white rounded-lg px-8 py-4  font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 border-b-4 border-[#F1C40F]">
                <span>Rejoindre l'aventure</span>
              </button>
            </Link>
          </div>
          <motion.img
            src="./assets/images/firstpage/interro.png"
            alt="icone interrogation"
            className=" absolute max-w-8 md:max-w-40 -top-7 right-0 hidden lg:block  "
            animate={{
              rotate: [-10, 10, -10],  //Mouvement de rotation
            }}
            transition={{
              duration: 4 , 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "loop", 
            }}
          />
          <motion.img
            src="./assets/images/firstpage/perso.png"
            alt="icone perso"
            className=" absolute max-w-8 md:max-w-20 bottom-14 left-4 rotate-45 hidden lg:block  "
            animate={{
              y: [0, -15, 0, -10, 0], // Mouvement vertical pour simuler le rebond
              rotate: [45, 45, 50, 45, 45],
            }}
            transition={{
              duration: 1.5, 
              ease: "easeOut",
              repeat: Infinity, 
              repeatType: "loop",
            }}
          />
          <motion.img
            src="./assets/images/firstpage/traduction.png "
            alt="icone traduction"
            className=" absolute max-w-xs left-24 md:max-w-40 top-[-2rem] hidden lg:block "
            animate={{
              y: [0, -10, 0], // Mouvement de haut en bas
            }}
            transition={{
              duration: 4 , 
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "loop", 
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Herofirstpage;
