import React from 'react';
import { HeaderItem } from '@/components/Header/components/HeaderItem';
import { Torch } from '@/components/Header/components/Torch';

export default function Header() {
  return (
    <header className="my-6 flex flex-row justify-between text-center">
      <HeaderItem text="HOME" path="/" />
      <HeaderItem text="WORK" path="/work" />
      <Torch />
      <HeaderItem text="HONORS" path="/honors" />
      <HeaderItem text="BLOG" path="/blog" />
    </header>
  );
}
