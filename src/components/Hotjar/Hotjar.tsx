'use client';

import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import siteConfig from 'site.config';

const Hotjar = () => {
  useEffect(() => {
    hotjar.initialize({
      hjid: Number(siteConfig.HOTJAR_ID),
      hjsv: Number(siteConfig.HOTJAR_SNIPPET_VERSION),
    });
  }, []);
  return null;
};

export default Hotjar;
