import Image from 'next/image';

export default function NoContent() {
  return (
    <div className="my-[100px] flex h-full w-full flex-col justify-center gap-[25px] px-[100px]">
      <Image src="/assets/vectors/no-content.svg" alt="" width={197} height={191} />

      <p className="text-[18px[18px]  font-rob text-[18px]/[18px] font-bold text-[#bfbfbf] text-opacity-80">
        You don’t have any projects
      </p>
    </div>
  );
}
