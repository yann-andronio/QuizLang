import { Fragment } from "react/jsx-runtime";
import {
  FaQuestionCircle,
  FaHandsHelping,
  FaBullhorn,
  FaInfoCircle,
} from "react-icons/fa"; // Importation des icônes
import Headerhelp from "../../components/headerhelp/Headerhelp";

const Help: React.FC = () => {
  return (
    <Fragment>
      <div className="bigbox bg-custom-gradient">
        <Headerhelp />

        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-[#212529]">
            Page d'Aide
          </h1>

          {/* FAQ Section */}
          <section className="bg-green-500 text-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaQuestionCircle className="text-3xl mr-4" />
              <h2 className="text-2xl font-semibold">
                Questions fréquemment posées (FAQ)
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-lg">Comment m'inscrire ?</p>
                <p>
                  Pour t'inscrire, clique sur "S'inscrire" et remplis les
                  informations nécessaires.
                </p>
              </div>
              <div>
                <p className="font-semibold text-lg">
                  Comment commencer un quiz ?
                </p>
                <p>
                  Sélectionne un quiz dans la section 'Quiz' et commence à
                  répondre aux questions.
                </p>
              </div>
              <div>
                <p className="font-semibold text-lg">
                  Est-ce que mes progrès sont enregistrés ?
                </p>
                <p>
                  Oui, tes progrès sont automatiquement sauvegardés, et tu peux
                  suivre tes résultats à tout moment.
                </p>
              </div>
            </div>
          </section>

          {/* Guide Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaBullhorn className="text-3xl mr-4 text-green-500" />
              <h2 className="text-2xl font-semibold">Guide d'utilisation</h2>
            </div>
            <p>Voici un guide simple pour t'aider à naviguer sur QuizLang :</p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Étape 1 :</strong> Inscris-toi en remplissant ton nom , 
                ton email et ton mot de passe 
              </li>
              <li>
                <strong>Étape 2 :</strong> Une fois inscrits tu seras renvoiez vers la page de selection du langue a apprendre".
              </li>
              <li>
                <strong>Étape 3 :</strong> Cliquez sur le boutton de chaque quiz une fois entrer dans ton compte après le choix de langue".
              </li>
              <li>
                <strong>Étape 4 :</strong> Consulte tes résultats et suis tes
                progrès dans la section "Mes progrès".
              </li>
            </ol>
          </section>

          {/* Support Section */}
          <section className="bg-green-500 text-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaHandsHelping className="text-3xl mr-4" />
              <h2 className="text-2xl font-semibold">Support technique</h2>
            </div>
            <p>
              Si tu rencontres un problème technique ou si tu as une question,
              contacte notre support à l'adresse suivante :
            </p>
            <a
              href="mailto:support@quizlang.com"
              className="text-yellow-300 hover:text-yellow-500 font-semibold"
            >
              support@quizlang.com
            </a>
          </section>

          {/* Tips Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-3xl mr-4 text-green-500" />
              <h2 className="text-2xl font-semibold">Conseils et astuces</h2>
            </div>
            <div className="space-y-4">
              <p>
                📚 Essaie de compléter les quiz régulièrement pour améliorer tes
                compétences linguistiques.
              </p>
              <p>
                ⭐ "Utilise la fonction 'Chat' pour discuter avec d'autres utilisateurs et partager vos expériences de quiz.
              </p>
            </div>
          </section>

          {/* Footer Section */}
          <section className="text-center mt-8">
            <p className="text-sm text-gray-500">
              QuizLang est un site dédié à l'apprentissage des langues par le
              biais de quiz interactifs. Si tu as des questions, n'hésite pas à
              nous contacter.
            </p>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Help;
