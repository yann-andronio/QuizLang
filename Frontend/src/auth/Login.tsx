import { Fragment } from "react/jsx-runtime";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUserPlus } from "react-icons/fi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { FieldValues ,useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataUser, setDataUser] = useState<User[]>([]);

  const ValidationSchema = yup.object({
    email: yup
    .string()
    .email("Veuillez entrer un e-mail valide") 
    .required("L'e-mail est obligatoire") , 
    password: yup.string().required("Votre mot de passe est obligatoire"),
  
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(ValidationSchema) });

  const onSubmit = (data: FieldValues) => {
    axios
      .post("http://localhost:3000/users", data)
      .then((res) => {
        console.log(res.data);
        setDataUser((prevData) => [...prevData, res.data]);
        reset();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
      });
   
  };

  return (
    <Fragment>
      <div
        className={` h-screen flex  flex-col lg:flex-row justify-center  bg-custom-gradient overflow-hidden `}
      >
        <div
          className={`  flex-1 relative flex-col justify-center items-center hidden lg:flex `}
        >
          <div className={``}>
            <Link to="/" className="absolute top-4 left-4 ml-4">
              <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
                <RiArrowGoBackFill className="text-lg" />
              </button>
            </Link>

            <motion.img
              src="./assets/images/firstpage/perso2.png"
              alt="icone perso"
              className=" absolute top-14 -rotate-12 left-0  "
              width={210}
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
              src="./assets/images/firstpage/interro.png"
              alt="icone perso"
              className=" absolute top-16 rotate-[25deg] right-16 "
              width={125}
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

          <form
            className={` rounded-lg p-8 mb-4 w-full max-w-lg`}
            onSubmit={handleSubmit(onSubmit)}
          >
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
                id="email"
                className="shadow-md border rounded-lg px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="E-mail "
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Mot de passe"
                className="shadow-md border rounded-lg px-4 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-400"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

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
              SE CONNECTER
            </button>
          </form>

          <Link to="/Register" className="absolute top-4 right-4 ml-4">
            <button className="flex items-center space-x-2 bg-green-500 text-white rounded-lg px-6 py-3 text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 border-b-4 border-[#3db168]">
              <FiUserPlus className="text-lg" />
              <span>S'inscrire</span>
            </button>
          </Link>

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
