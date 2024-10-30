import Timeline from "../ui/timeline";
import { memo } from "react";

const educations = [
  {
    date: "2022",
    link: "",
    title: "Développement web MERN Stack",
    company: "Orange Digital Center",
    description: <></>,
  },
  {
    date: "2019 - 2021",
    link: "",
    title: "Master professionnel, Système d'information et Génie Logiciel",
    company: "Institut Universitaire de la Côte",
    description: <></>,
  },
  {
    date: "2015 - 2019",
    link: "",
    title: "Licence, Mathématiques et informatique",
    company: "Université de Douala",
    description: <></>,
  },
];

function EducationTimeline() {
  return (
    <section id="educations" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-3xl font-bold">Mes Formations</h2>
          <hr className="w-1/6 border-2 border-primary/20 dark:border-primary/50" />
        </div>

        <div className="mx-auto flex w-full flex-col justify-center py-4 px-8 bg-white rounded-lg dark:bg-slate-900">
          {educations.map((education, index) => (
            <Timeline
              key={index}
              date={education.date}
              link={education.link}
              title={education.title}
              company={education.company}
              description={education.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(EducationTimeline);
