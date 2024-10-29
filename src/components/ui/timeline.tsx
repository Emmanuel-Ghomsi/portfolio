import Link from "next/link";
import React from "react";

type TimelineProps = {
  date: string;
  link: string;
  title: string;
  company: string;
  description: React.ReactNode;
};

export default function Timeline({
  date,
  link,
  title,
  company,
  description,
}: TimelineProps) {
  return (
    <div className="border-l border-primary px-5 py-7">
      <div className="relative">
        <span className="inline-block rounded-full border border-primary px-5 py-[3px] text-xs">
          {date}
        </span>
        <span className="absolute bottom-1/2 left-[-26.5px] size-3 translate-y-1/2 rounded-full bg-primary"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
        <div className="col-span-2 my-2">
          <h3 className="text-base font-semibold md:text-lg">
            <Link
              href={link}
              target="__blank"
              rel="noopener noreferrer"
              className="group"
            >
              {title}{" "}
              <i className="fas fa-link text-gray hidden text-xs group-hover:inline"></i>
            </Link>
          </h3>
          <h4 className="text-xs text-primary lg:text-sm">{company}</h4>
        </div>
        <div className="col-span-3 text-xs text-gray-500 md:text-base">
          {description}
        </div>
      </div>
    </div>
  );
}
