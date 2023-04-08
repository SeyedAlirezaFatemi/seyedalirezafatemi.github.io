import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './work.module.css';
import { SectionHeader } from '@/components/Typography/Headers';

export default function WorkSection() {
  return (
    <div className="text-center">
      <SectionHeader className="mb-8 text-center">
        Work & Research Experiences
      </SectionHeader>
      <div className="flex flex-col flex-wrap space-y-4">
        <WorkItem
          company="HypeHype, Inc."
          date="November 2022 - Current"
          title="Machine Learning Researcher & Programmer"
        ></WorkItem>
        <WorkItem
          company="Nokia, Advanced Technology Group"
          date="May 2022 - November 2022"
          title="Software Developer Trainee"
        >
          I worked as a trainee in the Advanced Technology Group. My focus was
          on Augmented Reality and different frameworks used for AR development.
          I also did research on visual localization.
        </WorkItem>
        <WorkItem
          company="Aalto University, Department of Computer Science"
          date="January 2022 - June 2022"
          title="Research Assistant"
        >
          I worked as a research assistant under the supervision of Prof. Jaakko
          Lehtinen. My research was related to generative modeling with medical
          images.
        </WorkItem>
        <WorkItem
          company="University of Toronto, Dynamic Graphics Project Lab, Remote"
          date="Summer 2021"
          title="Research Assistant"
        >
          I worked as a research assistant under the supervision of Prof. Alec
          Jacobson. My topic of research was about Geometry Processing and
          Computer Graphics combined with Machine Learning.
        </WorkItem>
        <WorkItem
          company="Robust and Interpretable Machine Learning Lab, Tehran, Iran"
          date="Summer 2020 - Spring 2021"
          title="Research Assistant"
        >
          I worked on my undergraduate thesis in the Robust and Interpretable
          Machine Learning Lab under the supervision of Prof. Rohban. My thesis
          was about the use of Semi-Supervised Learning and Self-Supervised
          Learning in the context of Adversarial Robustness.
        </WorkItem>
        <WorkItem
          company="Iran's National Elites Foundation, Tehran, Iran"
          date="Spring 2019 - Summer 2020 (18 months)"
          title="AI Researcher & Programmer"
        >
          I was a member of a project funded by Iran&apos;s National Elites
          Foundation, supervised by Prof. Behroozi and Prof. Soleymani, and
          focused on Medical Image Analysis using Deep Learning.
        </WorkItem>
      </div>
    </div>
  );
}

function WorkItem({
  title,
  company,
  date,
  children,
}: {
  children?: React.ReactNode;
  company: string;
  date: string;
  title: string;
}) {
  return (
    <div className="text-start">
      <h3
        className={twMerge(
          'block w-fit text-center font-semibold uppercase tracking-wide no-underline',
          'bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat',
          styles.link
        )}
      >
        {company}
      </h3>
      <h4 className="text-sm font-medium">{title}</h4>
      <span className="text-sm text-zinc-500">{date}</span>
      <p className="text-justify text-sm font-normal">{children}</p>
    </div>
  );
}
