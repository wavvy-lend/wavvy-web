import { CreatePool } from '@/features/Pool/CreatePool';

export default function Pools() {
  return (
    <>
      <section className="flex w-full items-center justify-between gap-4 rounded-lg bg-prime-200 bg-opacity-[0.19] px-8 py-5">
        <CreatePool />
      </section>

      <section className="h-full w-full"></section>
    </>
  );
}
