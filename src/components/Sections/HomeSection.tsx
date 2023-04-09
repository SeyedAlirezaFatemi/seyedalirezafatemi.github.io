import Photo from '@/assets/avatar.jpg';
import { SectionHeader } from '@/components/Typography/Headers';
import Image from 'next/image';

const languages = [
  'C/C++',
  'C#',
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'Kotlin',
];

const modeling = ['Blender', 'Fusion 360', 'Reality Capture'];

const engines = ['Unity', 'Unreal Engine'];

const ml = [
  'PyTorch',
  'TensorFlow',
  'Keras',
  'Scikit-learn',
  'pandas',
  'NumPy',
];

const web = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'GraphQL',
  'Django',
  'Flask',
  'Docker',
  'AWS',
];

const colNames = [
  'Programming Languages',
  'Game Engines',
  '3D Modeling',
  'Machine Learning',
  'Web',
];
const colValues = [languages, engines, modeling, ml, web];

export function HomeSection() {
  return (
    <div>
      <div className="px-16">
        <SectionHeader className="mb-4 text-center">
          Seyed Alireza Fatemi Jahromi
        </SectionHeader>
        <div className="flex flex-row flex-wrap items-center justify-center justify-items-center gap-12">
          <div className="avatar flex-initial">
            <div className="avatar w-48 rounded-full">
              <Image src={Photo} alt="Photo of Alireza Fatemi" />
            </div>
          </div>
          <div className="flex-1 leading-6">
            <p>
              <span className="inline-block">
                Master&apos;s Student in Computer Science at Aalto University
              </span>
              <span className="inline-block">
                Pursuing a minor in Game Design and Development and Math&Arts
              </span>
              <span className="my-2 inline-block text-gray-500">
                Passionate about Game Development, Computer Graphics, Machine
                Learning, and Extended Reality
              </span>
              <span className="inline-block">
                <a
                  className="link-info link"
                  href="https://github.com/SeyedAlirezaFatemi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                ,&nbsp;
                <a
                  className="link-info link"
                  href="https://scholar.google.com/citations?user=YxRB1PAAAAAJ&hl=en&authuser=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
                ,{' '}
                <a
                  className="link-info link"
                  href="https://www.linkedin.com/in/seyed-alireza-fatemi-jahromi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                ,{' '}
                <a
                  className="link-info link"
                  href="/SeyedAlirezaFatemiJahromi.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <SectionHeader className="pb-2 text-center">Interests</SectionHeader>
      <ul className="list-disc px-8 [&>li]:mb-0.5">
        <li>Game Design & Development & Graphics Programming</li>
        <li>3D Modeling & Printing</li>
        <li>Data Science & Visualization</li>
        <li>Software & Web Development</li>
        <li>A lot of other things I haven&apos;t discovered yet!</li>
      </ul>
      <div className="divider"></div>
      <SectionHeader className="pb-2 text-center">
        Research Interests
      </SectionHeader>
      <ul className="list-disc px-8 [&>li]:mb-0.5">
        <li>Visual Computing (Computer Graphics & Vision)</li>
        <li>Machine Learning & Deep Learning</li>
        <li>Geometry Processing & Geometric Deep Learning</li>
        <li>A lot of other things I haven&apos;t discovered yet!</li>
      </ul>
      <div className="divider"></div>
      <SectionHeader className="pb-2 text-center">Education</SectionHeader>
      <ul className="list-disc px-8 [&>li]:mb-0.5">
        <li>
          <span className="block font-semibold">
            Aalto University, Espoo, Finland
          </span>
          <span className="block text-sm text-gray-500">GPA: 4.91/5</span>
          <span className="block">
            Master of Science in Computer Science (Big Data and Large-Scale
            Computing)
          </span>
          <span className="block">
            Minor in Game Design and Development and Math&Arts
          </span>
          <span className="block text-sm text-gray-500">
            Aug. 2021 - Expected Aug. 2024
          </span>
        </li>
        <li>
          <span className="block font-semibold">
            Sharif University of Technology, Tehran, Iran
          </span>
          <span className="block text-sm text-gray-500">GPA: 18.6/20</span>
          <span className="block">
            Bachelor of Science in Computer Engineering
          </span>
          <span className="block text-sm text-gray-500">
            Sep. 2016 - May 2021
          </span>
        </li>
      </ul>
      <div className="divider"></div>
      <SectionHeader className="pb-2 text-center">Skills</SectionHeader>
      <table>
        <tbody>
          {colNames.map((colName, index) => (
            <tr key={index}>
              <td className="w-fit">
                <span className="mr-4 inline-block">{colName}</span>
              </td>
              <td>
                {colValues[index].map((val, index) => (
                  <div key={index} className="badge-ghost badge badge-lg m-2 p-4">
                    {val}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
