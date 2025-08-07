"use client";

import { FaUserCheck, FaMapMarkedAlt, FaCamera } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
        Comment fonctionne la plateforme ?
      </h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Étape 1 */}
        <div className="flex flex-col items-center space-y-4">
          <FaUserCheck className="text-red-500 text-5xl" />
          <h3 className="text-xl text-blue-600 font-semibold">Connexion des employés</h3>
          <p className="text-gray-600">
            Chaque employé se connecte à son compte, selon son rôle (chantier ou bureau).
          </p>
        </div>

        {/* Étape 2 */}
        <div className="flex flex-col items-center space-y-4">
          <FaCamera className="text-red-500 text-5xl" />
          <h3 className="text-xl text-blue-600 font-semibold">Ajout de photos sur le terrain</h3>
          <p className="text-gray-600">
            Les agents sur le terrain envoient des photos et notes sur létat du chantier.
          </p>
        </div>

        {/* Étape 3 */}
        <div className="flex flex-col items-center space-y-4">
          <FaMapMarkedAlt className="text-red-500 text-5xl" />
          <h3 className="text-xl text-blue-600 font-semibold">Suivi en temps réel</h3>
          <p className="text-gray-600">
            Les superviseurs au bureau visualisent lévolution des chantiers en direct.
          </p>
        </div>
      </div>
    </section>
  );
}
