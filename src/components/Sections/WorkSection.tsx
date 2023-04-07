import { twMerge } from 'tailwind-merge';
import styles from './work.module.css';

export default function WorkSection() {
  return (
    <div className="text-center">
      <h1>Work & Research Experiences</h1>
      <span
        className={twMerge(
          'block w-fit font-semibold uppercase tracking-wide text-inherit no-underline',
          'bg-gradient-to-r from-sky-500 to-indigo-500 bg-no-repeat',
          styles.link
        )}
      >
        Nokia, Advanced Technology Group
      </span>
    </div>
  );
}

/**
 * link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: 1.2,
    paddingTop: "2rem",
    width: "fit-content",
    "&:link": {
      color: "inherit",
    },
    backgroundImage: "linear-gradient(to right, #00c6ff, #0072ff)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.2em",
    backgroundPosition: "0 100%",
    transition: "background-size 0.25s ease-in",
    "&:hover": {
      backgroundSize: "100% 50%",
    },
  },
 */
