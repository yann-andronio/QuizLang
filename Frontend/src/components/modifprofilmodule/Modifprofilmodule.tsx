import { Fragment } from "react/jsx-runtime"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Modifprofilmodule : React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);



    return (
        <Fragment>
             <form className="p-8 bg-white rounded-lg shadow-xl max-w-lg mx-auto">
      <h1 className="font-semibold text-2xl text-gray-800 mb-6">
        Informations Personnelles
      </h1>

      {/* Nom */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
          Nom
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
          placeholder="TODIVELO"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
          placeholder="exemple@email.com"
        />
      </div>

      {/* Mot de passe */}
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
          Mot de passe
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 pr-10"
            placeholder="••••••••"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Bouton de sauvegarde */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-md shadow-md hover:bg-green-600 transition duration-300"
      >
        Enregistrer
      </button>
    </form>
        </Fragment>
    )
}
export default Modifprofilmodule 