export function HomeSection(params: any) {
  return (
    <div>
      <div className="px-20">
        <h1 className="text-center">Seyed Alireza Fatemi Jahromi</h1>
        <div className="flex flex-row flex-wrap items-center justify-items-center gap-12">
          <div className="avatar flex-initial">
            <div className="avatar w-48 rounded-full">
              <img src="/avatar.jpg" />
            </div>
          </div>
          <div className="flex-1">
            <p>
              <span>
                Master&sbquo;s Student in Computer Science at Aalto University
                <br />
                Minor in Game Design and Development
              </span>
              <span>Researching on Visual Computing & Machine Learning</span>
              <span>
                seyedalirezafatemijahromi [at] gmail.com
                <br />
                seyedalireza.fatemijahromi [at] aalto.fi
                <br />
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
      <h1>Interests</h1>
      <ul className="list-disc px-8 [&>li]:mb-0.5">
        <li>Game Design & Development & Graphics Programming</li>
        <li>3D Modeling & Printing</li>
        <li>Data Science & Visualization</li>
        <li>Software & Web Development (Especially Front-end)</li>
        <li>A lot of other things I haven&sbquo;t discovered yet!</li>
      </ul>
      <div className="divider"></div>
      <h1>Research Interests</h1>
      <ul className="list-disc px-8 [&>li]:mb-0.5">
        <li>Visual Computing (Computer Graphics & Vision)</li>
        <li>Machine Learning & Deep Learning</li>
        <li>Geometry Processing & Geometric Deep Learning</li>
        <li>A lot of other things I haven&sbquo;t discovered yet!</li>
      </ul>
    </div>
  );
}
