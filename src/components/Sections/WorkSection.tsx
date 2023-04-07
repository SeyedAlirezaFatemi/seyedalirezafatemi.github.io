import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './work.module.css';
import Nokia from '@/assets/Nokia.svg';
import { SectionHeader } from '@/components/Typography/Headers';
import Image from 'next/image';

export default function WorkSection() {
  return (
    <div className="text-center">
      <SectionHeader className="mb-8 text-center">
        Work & Research Experiences
      </SectionHeader>
      <WorkItem
        imageSrc={Nokia}
        company="Nokia, Advanced Technology Group"
        date="May 2022 - November 2022"
        title="Software Developer Trainee"
      >
        I worked as a trainee in the Advanced Technology Group. My focus was on
        Augmented Reality and different frameworks used for AR development. I
        also did research on visual localization.
      </WorkItem>
    </div>
  );
}

function WorkItem({
  imageSrc,
  title,
  company,
  date,
  children,
}: {
  children: React.ReactNode;
  company: string;
  date: string;
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="card w-full flex-wrap bg-base-100 text-start shadow-xl">
      <figure className="h-32 w-full">
        <Image src={imageSrc} alt="Nokia" className="w-6/12" />
      </figure>
      <div className="card-body p-4">
        <h3
          className={twMerge(
            'block w-fit text-center font-semibold uppercase tracking-wide no-underline',
            'bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat',
            styles.link
          )}
        >
          {company}
        </h3>
        <div className="flex">
          <h4 className="text-sm font-medium">{title}</h4>
          <div className="divider divider-horizontal" />
          <span className="text-thin text-sm">{date}</span>
        </div>
        <p className="text-justify text-sm font-normal">{children}</p>
      </div>
    </div>
  );
}
