import Image from 'next/image';
import { ProjectDescription, ProjectHeader, ProjectTitle } from './components/ProjectHeader';
import { Collections } from '@/interface/util_interface';

export default function ProjectDetail({
  id: collectionId,
  unique_id: uniqueId,
  name,
  owner: creator,
  website,
  description,
  status,
  total_volume: volume,
  no_of_items: items,
  floor_price,
  avatar: image
}: Collections) {
  return (
    <section key={collectionId} className="flex h-full w-full flex-col items-start gap-4 rounded-[19px] bg-grey-200">
      <Image
        src="/assets/projects/project-1.png"
        alt="cover-photo"
        width={1233}
        height={60}
        className="h-[200px] w-full rounded-t-[19px]"
        priority
      />

      <ProjectHeader collectionImage={image ? image : '/assets/project-buy.png'} />
      <div className="w-full px-[27px]">
        <ProjectTitle name={name} creator={creator} website={website!} />
        <ProjectDescription description={description} />

        <hr className="mb-5 mt-10 border-grey-100" />

        <div className="grid w-full grid-cols-2 gap-10 px-5 py-5 lg:grid-cols-5">
          <CollectionValue value={creator} item=" owners" />
          <CollectionValue value={items} item="items" />
          <CollectionValue value={volume} item="Total volume" />
          <CollectionValue value={floor_price} item="floor price" />
        </div>
      </div>
    </section>
  );
}

function CollectionValue({ value, item }: { item: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 font-rob text-[14px]/[22px] text-white">
      <span className=" font-bold">{Math.floor(Number(value)) as unknown as string}</span>
      <span className=" font-medium">{item}</span>
    </div>
  );
}
