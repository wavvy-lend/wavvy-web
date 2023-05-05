import { CollectionCard } from './components/CollectionCard';

export default function LatestPRojects() {
  return (
    <section className="h-full w-full">
      <div className="my-[30px] mb-8 flex w-full items-center justify-between px-2">
        <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Latest projects</h2>
      </div>

      <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
      </div>
    </section>
  );
}
