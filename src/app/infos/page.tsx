"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import AnimatedUnderline from "@/components/AnimatedUnderline";
import Header from "../header";
import Footer from "../footer";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col max-w-[1400px] mx-auto px-4 sm:px-6">
      <Header />
      <main className="flex-1 pt-16 sm:pt-24">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-48"
        >
          <div className="container px-4 md:px-6">
            <div className="flex justify-center items-center">
              <motion.div
                variants={containerVariants}
                className="flex flex-col justify-center space-y-4 text-center max-w-3xl"
              >
                <div className="space-y-2">
                  <motion.h1
                    variants={itemVariants}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
                  >
                    Bienvenue à<br />
                    l&#39;<AnimatedUnderline>AsyncMuseum</AnimatedUnderline>
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="max-w-[600px] mx-auto text-gray-400 md:text-xl"
                  >
                    Découvrez notre musée unique avec ses expositions virtuelles
                    gratuites et immersives. Explorez (quelques) œuvres
                    d&#39;art depuis votre canapé (ou votre chaise de gamer) !
                  </motion.p>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-2 justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/visite-virtuelle"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-6 sm:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                    >
                      Commencer la visite
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/oeuvres"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-white/20 bg-black/30 px-6 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 hover:text-white text-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
                    >
                      Explorer les œuvres
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gray-900/50"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  À propos du musée
                </h2>
                <p className="max-w-[900px] text-gray-400 sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  L&#39;AsyncMuseum est dédié à la préservation et à la
                  présentation de l&#39;art sous toutes ses formes. Notre
                  mission est de rendre l&#39;art accessible à tous, partout
                  dans le monde.
                </p>
              </div>
            </motion.div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 sm:py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-4"
              >
                <ul className="grid gap-6">
                  {[
                    {
                      title: "Collection en ligne",
                      description:
                        "Des dizaines d'œuvres d'art numérisées en haute résolution, accessibles en ligne depuis chez vous.",
                    },
                    {
                      title: "Expositions gratuites",
                      description:
                        "Les expositions virtuelles du musée sont gratuites et ouvertes à tous, sans inscription.",
                    },
                    {
                      title: "Musée ouvert 24/7",
                      description:
                        "Visitez le musée à tout moment, de jour comme de nuit, depuis n'importe quel appareil.",
                    },
                    {
                      title: "Musée Open Source",
                      description:
                        "Notre musée est entièrement open source et construit avec des technologies modernes.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square border border-white/10"
              >
                <Image
                  unoptimized
                  alt="Intérieur du musée"
                  className="aspect-square object-cover"
                  height="550"
                  src="/asyncmuseum.png"
                  width="550"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full py-8 sm:py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Horaires d&#39;ouverture
                </h2>
                <p className="max-w-[900px] text-gray-400 sm:text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Planifiez votre visite virtuelles à l&#39;avance avec notre
                  calendrier
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl py-8 sm:py-12"
            >
              <div className="rounded-lg border border-white/10 bg-gray-900/50 text-white shadow-md">
                <div className="p-4 sm:p-6">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          title: "Lundi - Vendredi",
                          hours: [
                            { label: "Ouvert", value: "24h/24" },
                            { label: "Expositions", value: "Toutes" },
                            { label: "Prix", value: "Gratuit" },
                          ],
                        },
                        {
                          title: "Samedi et Dimanche",
                          hours: [
                            { label: "Ouvert", value: "24h/24" },
                            { label: "Expositions", value: "Toutes" },
                            { label: "Prix", value: "Gratuit" },
                          ],
                        },
                        {
                          title: "Jours feriés",
                          hours: [
                            { label: "Ouvert", value: "24h/24" },
                            { label: "Expositions", value: "Toutes" },
                            { label: "Prix", value: "Gratuit" },
                          ],
                        },
                      ].map((schedule, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4"
                          whileHover={{
                            boxShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
                            borderColor: "rgba(168, 85, 247, 0.5)",
                          }}
                        >
                          <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">
                            {schedule.title}
                          </h3>
                          <div className="space-y-2">
                            {schedule.hours.map((hour, hourIndex) => (
                              <div
                                key={hourIndex}
                                className="grid grid-cols-2 gap-2"
                              >
                                <span className="text-gray-400 text-sm sm:text-base">
                                  {hour.label}
                                </span>
                                <span className="text-sm sm:text-base text-white">
                                  {hour.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4 mt-4"
                    >
                      <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">
                        Informations supplémentaires
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-300">
                        {[
                          "Vous aurez besoin d'une connection à internet pour accéder aux expositions.",
                          "Les expositions sont accessibles depuis n'importe quel appareil.",
                          "Personne n'est disponnible pour répondre à vos questions.",
                          "Si ça marche pas chez vous, ça marchait sur mon ordi.",
                        ].map((info, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.5 + index * 0.1,
                              duration: 0.4,
                            }}
                          >
                            {info}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
