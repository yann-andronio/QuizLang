import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";

const languages = [
  { id: 1, name: "ANGLAIS", image: "./assets/images/firstpage/american.png" },
  { id: 2, name: "ALLEMAND", image: "./assets/images/firstpage/allemagne.png" },
  { id: 3, name: "MALAGASY", image: "./assets/images/firstpage/malagasy.png" },
  { id: 4, name: "FRANCAIS", image: "./assets/images/firstpage/francais.png" },
];

const Languageselection: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="Bigbox bg-custom-gradient-phone "></div>
      <div className=" relative flex flex-col justify-center     lg:h-screen md:h-screen mx-2 lg:mx-0 md:mx-0  overflow-hidden">
        
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
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
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
