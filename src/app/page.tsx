import Hero from '@/features/home/Hero';
import LatestPRojects from '@/features/home/LatestProjects';
import LendableProjects from '@/features/home/LendableProjects';;

export default function Home() {
  return (
    <>
      <Hero />
      <LatestPRojects />
      <LendableProjects />
    </>
  );
}
