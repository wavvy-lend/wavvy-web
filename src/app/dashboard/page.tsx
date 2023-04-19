import { CollectionCard } from '@/features/home/components/CollectionCard';
import NoContent from './no-content';

export default function Dashboard() {
  return (
    <section className="h-full w-full">
      <NoContent />
      {/* <div className="grid w-full grid-cols-1 gap-2.5 lg:grid-cols-3">
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
        <CollectionCard image="/assets/project-buy.png" />
      </div> */}
    </section>
  );
}
