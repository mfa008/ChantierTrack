"use client";

import { FaUserCheck, FaMapMarkedAlt, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
          >
            Comment fonctionne la plateforme ?
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="text-lg text-blue-600 max-w-2xl mx-auto"
          >
            Découvrez en quelques étapes simples comment notre solution révolutionne la gestion de vos chantiers
          </motion.p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Étape 1 */}
          <motion.div 
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
              <FaUserCheck className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-2xl text-blue-800 font-semibold mb-4">Connexion des employés</h3>
            <p className="text-gray-600 text-center">
              Chaque employé se connecte à son compte, selon son rôle (chantier ou bureau).
            </p>
            <span className="mt-6 text-white bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              1
            </span>
          </motion.div>

          {/* Étape 2 */}
          <motion.div 
            variants={fadeIn('up', 'tween', 0.4, 1)}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
              <FaCamera className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-2xl text-blue-800 font-semibold mb-4">Ajout de photos sur le terrain</h3>
            <p className="text-gray-600 text-center">
              Les agents sur le terrain envoient des photos et notes sur létat du chantier.
            </p>
            <span className="mt-6 text-white bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              2
            </span>
          </motion.div>

          {/* Étape 3 */}
          <motion.div 
            variants={fadeIn('left', 'tween', 0.6, 1)}
            className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
              <FaMapMarkedAlt className="text-red-500 text-3xl" />
            </div>
            <h3 className="text-2xl text-blue-800 font-semibold mb-4">Suivi en temps réel</h3>
            <p className="text-gray-600 text-center">
              Les superviseurs au bureau visualisent lévolution des chantiers en direct.
            </p>
            <span className="mt-6 text-white bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              3
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}