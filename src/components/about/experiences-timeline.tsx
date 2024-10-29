import React from "react";
import Timeline from "../ui/timeline";

const experiences = [
  {
    date: "Septembre 2021 - present",
    link: "",
    title: "Tech Lead / Chef de Projet",
    company: "Hkdigitals | Lyon, France (remote)",
    description: (
      <div className="text-sm">
        <ul className="mt-4">
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Développement d&apos;une application d&apos;agrégation de cours
            </a>
          </li>
          <span className="text-zinc-500">
            Conception et conteneurisation d&apos;une application permettant à
            un client de suivre les commentaires des utilisateurs et de
            surveiller les performances de ses cours sur Udemy.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Développement d&apos;une FinTech mobile et web
            </a>
          </li>
          <span className="text-zinc-500">
            Création d&apos;une application de portefeuille électronique pour
            faciliter les transactions financières (dépôt, transfert, réception
            d&apos;argent) au Cameroun et à l&apos;international
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Gestion de projet et leadership technique
            </a>
          </li>
          <span className="text-zinc-500">
            Collaboration avec l&apos;équipe pour définir les spécifications des
            projets, planifier les étapes de développement et assurer la
            livraison des fonctionnalités dans les délais impartis.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Supervision de l&apos;architecture technique
            </a>
          </li>
          <span className="text-zinc-500">
            {" "}
            Garant des bonnes pratiques de développement, j&apos;ai assuré la
            robustesse, la sécurité et la scalabilité des applications, tout en
            coordonnant les tests pour garantir une expérience utilisateur
            optimale
          </span>
        </ul>
      </div>
    ),
  },
  {
    date: "Mars 2021 - Août 2021",
    link: "",
    title: "Développeur Web Full Stack / Scrum Master Junior",
    company: "Jangolo | Douala, Cameroun",
    description: (
      <div className="text-sm">
        <ul className="mt-4">
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Développement d&apos;un module de sourcing pour la marketplace de
              Jangolo
            </a>
          </li>
          <span className="text-zinc-500">
            Conception et développement d&apos;un module spécialisé dans
            l&apos;agribusiness, facilitant l&apos;acquisition de produits
            agricoles.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Développement d&apos;une fonctionnalité offrant une visibilité
              instantanée sur les fluctuations du marché agricole
            </a>
          </li>
          <span className="text-zinc-500">
            Mise en place d&apos;un système de récupération des prix agricoles
            en temps réel
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Gestion d&apos;équipe et animation Scrum
            </a>
          </li>
          <span className="text-zinc-500">
            Gestion d&apos;une équipe pluridisciplinaire de 6 personnes, avec la
            mise en place de rituels agiles et l&apos;animation de réunions
            Scrum pour favoriser la collaboration et atteindre les objectifs du
            projet.
          </span>
        </ul>
      </div>
    ),
  },
];

const freelances = [
  {
    date: "2019 - présent",
    link: "",
    title: "Développeur Full Stack",
    company: "Freelance",
    description: (
      <div className="text-sm">
        <ul className="mt-4">
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Mise en place d&apos;une plateforme de gestion des demandes de
              visa
            </a>
          </li>
          <span className="text-zinc-500">
            Pour le cabinet d&apos;immigration First Campus, j&apos;ai conçu et
            déployé une plateforme complète permettant la gestion des demandes
            de visa, incluant un système de paiement en ligne sécurisé et un
            portail de suivi pour les clients et le cabinet.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Développement d&apos;une plateforme de gestion des formations
            </a>
          </li>
          <span className="text-zinc-500">
            J&apos;ai développé une solution sur mesure pour Alliance Institut,
            facilitant la gestion des formations en ligne, avec des
            fonctionnalités de suivi et d&apos;administration avancées.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Développement et déploiement d&apos;une plateforme web caritative
            </a>
          </li>
          <span className="text-zinc-500">
            Pour l&apos;association Noël de l&apos;Étoile, j&apos;ai réalisé une
            plateforme web mettant en avant leurs actions caritatives et
            bénévoles, ainsi qu&apos;un système de dons en ligne dédié aux
            orphelinats.
          </span>
        </ul>
      </div>
    ),
  },
];

const teachers = [
  {
    date: "Septembre 2020 - présent",
    link: "",
    title: "Enseignant vacataire",
    company: "ISTEC | ISG | IME - Douala, Cameroun",
    description: (
      <div className="text-sm">
        <ul className="mt-4">
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Cours en génie logiciel
            </a>
          </li>
          <span className="text-zinc-500">
            Conception et dispensation de cours en génie logiciel pour les
            étudiants de BTS (niveaux I et II) et de master en management des
            systèmes d&apos;information, avec un programme axé sur les concepts
            clés du développement logiciel et des systèmes d&apos;information.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Évaluation et suivi pédagogique
            </a>
          </li>
          <span className="text-zinc-500">
            Élaboration d&apos;épreuves, correction des travaux pratiques et
            théoriques, ainsi que suivi individualisé des étudiants pour les
            accompagner dans leur parcours académique.
          </span>
        </ul>
      </div>
    ),
  },
  {
    date: "Septembre 2021 - Août 2022",
    link: "",
    title: "Formateur en Développement Web",
    company: "Localhost Academy - Douala, Cameroun",
    description: (
      <div className="text-sm">
        <ul className="mt-4">
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Enseignement du développement web
            </a>
          </li>
          <span className="text-zinc-500">
            Formation des étudiants sur les principes fondamentaux du
            développement web, avec un focus particulier sur l&apos;utilisation
            du Framework Laravel pour la création d&apos;applications web
            dynamiques et performantes.
          </span>
          <li className="my-2 list-inside list-disc">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black dark:text-white"
              title="Intermediate"
            >
              Conception de supports pédagogiques et animation de cours
            </a>
          </li>
          <span className="text-zinc-500">
            Développement de supports pédagogiques adaptés, animation de cours
            théoriques et pratiques, et évaluation continue des performances des
            étudiants pour s&apos;assurer de leur progression.
          </span>
        </ul>
      </div>
    ),
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold">
            Expériences Professionnelles
          </h2>
          <hr className="w-1/6 border-2 border-primary/20 dark:border-primary/50" />
        </div>

        <div className="mx-auto flex w-full flex-col justify-center rounded-lg bg-white px-8 py-4 dark:bg-slate-900">
          {experiences.map((experience, index) => (
            <Timeline
              key={index}
              date={experience.date}
              link={experience.link}
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
          ))}
        </div>

        <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
          <h4 className="py-4 font-semibold">Mission de Freelance</h4>
        </blockquote>

        <div className="mx-auto flex w-full flex-col justify-center rounded-lg bg-white px-8 py-4 dark:bg-slate-900">
          {freelances.map((freelance, index) => (
            <Timeline
              key={index}
              date={freelance.date}
              link={freelance.link}
              title={freelance.title}
              company={freelance.company}
              description={freelance.description}
            />
          ))}
        </div>

        <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
          <h4 className="py-4 font-semibold">Mission de Formateur</h4>
        </blockquote>

        <div className="mx-auto flex w-full flex-col justify-center rounded-lg bg-white px-8 py-4 dark:bg-slate-900">
          {teachers.map((teacher, index) => (
            <Timeline
              key={index}
              date={teacher.date}
              link={teacher.link}
              title={teacher.title}
              company={teacher.company}
              description={teacher.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
