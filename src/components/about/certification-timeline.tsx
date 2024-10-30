import Timeline from "../ui/timeline";
import { memo } from "react";

const certifications = [
  {
    date: "2024",
    link: "",
    title: "Les fondements de la gestion de projet : Les questions éthiques",
    company: "Project Management Institute",
    description: <></>,
  },
  {
    date: "2024",
    link: "",
    title: "Gérer des plannings de projet",
    company: "Project Management Institute",
    description: <></>,
  },
  {
    date: "2023",
    link: "",
    title: "Fondamentaux du marketing numérique",
    company: "Google Ateliers Numériques",
    description: <></>,
  },
  {
    date: "2017",
    link: "",
    title: "The Art of Management: Winning Concepts and Strategies",
    company: "Swiss eLearning",
    description: <></>,
  },
];

function CertificationTimeline() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold">
            Mes Certifications et Licences
          </h2>
          <hr className="w-1/6 border-2 border-primary/20 dark:border-primary/50" />
        </div>

        <div className="mx-auto flex w-full flex-col justify-center rounded-lg bg-white px-8 py-4 dark:bg-slate-900">
          {certifications.map((certification, index) => (
            <Timeline
              key={index}
              date={certification.date}
              link={certification.link}
              title={certification.title}
              company={certification.company}
              description={certification.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(CertificationTimeline);
