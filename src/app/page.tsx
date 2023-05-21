import Hero from '@/features/home/Hero';
import LatestPRojects from '@/features/home/LatestProjects';
import LendableProjects from '@/features/home/LendableProjects';
import { Button } from '@/ui/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <SearchBox /> */}
      <LatestPRojects />
      <LendableProjects />
    </>
  );
}
