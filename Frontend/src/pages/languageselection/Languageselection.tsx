import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const languages = [
  { id: 1, name: "ANGLAIS", image: "./assets/images/firstpage/american.png" },
  { id: 2, name: "ALLEMAND", image: "./assets/images/firstpage/allemagne.png" },
  { id: 3, name: "MALAGASY", image: "./assets/images/firstpage/malagasy.png" },
  { id: 4, name: "FRANCAIS", image: "./assets/images/firstpage/francais.png" },
];

const Languageselection: React.FC<{}> = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (selectedLanguage === null) {
      toast.error("Vous devez choisir une langue avant de continuer !", {
        position: "top-center",
        autoClose: 5000,
      });
   
    } else {
      console.log("Choix : ", selectedLanguage);
      navigate("/home");
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="Bigbox bg-custom-gradient-phone "></div>
      <div className=" relative flex flex-col justify-center bg-custom-gradient-phone  lg:h-screen md:h-screen mx-2 lg:mx-0 md:mx-0  overflow-hidden">
        <h1 className="lg:text-5xl text-4xl font-extrabold text-center  text-[#0d1b2a] mb-8">
          Choisissez votre langue d'apprentissage
        </h1>

        <p className="text-xl ext-[#0d1b2a]  text-center mb-8">
          Sélectionnez la langue que vous souhaitez apprendre pour commencer
          votre aventure linguistique !
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mx-12">
          {languages.map((language) => (
            <div
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                selectedLanguage === language.id ? "ring-4 ring-[#9f7126]" : ""
              }`}
            >
              <img
                src={language.image}
                alt={`drapeau ${language.name}`}
                className=" mb-4  border-green-500"
                width={100}
              />

              <h2 className="text-lg font-medium text-[#212529]">
                {language.name}
              </h2>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-lg ext-[#0d1b2a] ">
            Apprenez à votre rythme, où que vous soyez ! Rejoignez-nous et
            commencez dès maintenant.
          </p>
        </div>

        <div className="relative mt-6 flex justify-center">
          <button
            onClick={() => handleCardClick()}
            className="flex mt-4 items-center space-x-2 text-lg bg-yellow-400 text-white rounded-lg px-8 py-4  font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 border-b-4 border-[#F1C40F]"
          >
            <span>C'est parti pour une nouvelle aventure linguistique !</span>
          </button>
        </div>

        {/* decoration */}

        <motion.img
          src="./assets/images/firstpage/perso5.png"
          alt="icone perso"
          className=" absolute -bottom-8 -rotate-12 left-0 hidden lg:block md:block    "
          width={250}
          animate={{
            rotate: [-12, 12, -12], //Mouvement de rotation
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <motion.img
          src="./assets/images/firstpage/traduction.png"
          alt="icone perso"
          className=" absolute top-16 rotate-[25deg] right-16 hidden lg:block md:block    "
          width={150}
          animate={{
            y: [0, -10, 0], // Mouvement de haut en bas
            rotate: [25],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <motion.img
          src="./assets/images/firstpage/perso2.png"
          alt="icone perso"
          className=" absolute top-0 left-0  hidden lg:block md:block  "
          width={250}
          animate={{
            y: [0, -15, 0, -10, 0], // Mouvement vertical pour simuler le rebond
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <motion.img
          src="./assets/images/firstpage/interro.png"
          alt="icone perso"
          className=" absolute bottom-7 rotate-[25deg] right-20 hidden lg:block md:block    "
          width={150}
          animate={{
            y: [0, -10, 0], // Mouvement de haut en bas
            rotate: [25],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>
    </Fragment>
  );
};

export default Languageselection;
