import { Fragment } from "react/jsx-runtime";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import {motion} from "framer-motion";
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Fragment>
      <div
        className={` h-screen flex justify-center bg-[#f5f5f5]  overflow-hidden `}
      >
        <div className={` flex flex-1 relative flex-col justify-center items-center `}>
          <div className={``}>
            <motion.img
              src="./assets/images/firstpage/perso2.png"
              alt="icone perso"
              className=" absolute top-24 -rotate-12 left-0  "
              width={210}
              animate={{
                rotate: [-12, 12, -12],  //Mouvement de rotation
              }}
              transition={{
                duration: 4 , 
                ease: "easeInOut", 
                repeat: Infinity, 
                repeatType: "loop", 
              }}
            />
            <motion.img
              src="./assets/images/firstpage/interro.png"
              alt="icone perso"
              className=" absolute top-20 rotate-[25deg] right-16 "
              width={125}
              animate={{
                y: [0, -10, 0], // Mouvement de haut en bas
                rotate: [25],
              }}
              transition={{
                duration: 4 , 
                ease: "easeInOut", 
                repeat: Infinity, 
                repeatType: "loop", 
              }}
            />
            <motion.img
              src="./assets/images/firstpage/perso3.png"
              alt="icone perso"
              className=" absolute bottom-0 left-40  "
              width={210}
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
          </div>
          <div className="p-8 rounded-2xl  max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-4 text-[#212529]">
              Prêt à défier votre cerveau avec QuizLang ?
            </h1>
            <div className="text-lg text-gray-600 text-center space-y-4">
              <p>
                Connectez-vous et plongez dans des défis linguistiques amusants
                et interactifs !
              </p>
              <p>
                Testez vos compétences avec des quiz, gagnez des points et
                suivez vos progrès.
              </p>
              <p>
                Rejoignez-nous et boostez votre niveau de langue en jouant !
              </p>
            </div>
          </div>
        </div>

        <div
          className={`  rigth w-full flex-1  lg:w-1/2 flex flex-col justify-center items-center relative`}
        >
          <h2 className={` text-4xl font-bold mb-6 `}>Connexion</h2>

          <form className={` rounded-lg p-8 mb-4 w-full max-w-lg`}>
            <div className="flex items-center justify-center mb-12 ">
              {/* <img
                src="./assets/images/firstpage/logo.png"
                className="hidden lg:block "
                alt="logo"
                width={130}
              /> */}
              <h1 className="text-3xl font-semibold tracking-wider font-quizlang text-green-500 ">
                QUIZLANG
              </h1>
            </div>

            <div className="mb-6 relative">
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-md border rounded-lg px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="E-mail ou nom d'utilisateur"
                required
              />
            </div>

            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Mot de passe"
                className="shadow-md border rounded-lg px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center space-x-2 text-lg bg-yellow-400 text-white rounded-lg px-8 py-4  font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 border-b-4 border-[#F1C40F] w-full"
            >
              Se connecter
            </button>

          </form>

          <img
              src="./assets/images/firstpage/malagasy.png"
              alt="icone perso"
              className=" absolute bottom-4 rotate-12 right-12  "
              width={80}
            />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
