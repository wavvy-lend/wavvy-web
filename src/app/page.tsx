import Hero from '@/features/home/Hero';
import LatestPRojects from '@/features/home/LatestProjects';
import LendableProjects from '@/features/home/LendableProjects';
import HowItworks from '@/features/home/how-it-works';

export default function Home() {
  return (
    <>
      <Hero />
      <LatestPRojects />
      <HowItworks />
      {/* <LendableProjects /> */}
    </>
  );
}
