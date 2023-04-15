import Image from 'next/image';

const CollectionCard = ({ image }: { image: string }) => (
  <div className="block h-full w-full max-w-[319px] rounded-[19px] bg-grey-200 p-4 font-rob">
    <Image src={image} alt="project" width={293} height={98} className="mb-[21px] rounded-[16px]" />

    <h1 className="truncate pb-2 font-rob text-base/[16px] font-bold text-white">Chromie Squiggle by Snowfro</h1>

    <p className="font-rob text-[14px]/[14px] font-bold text-white text-opacity-60">By Art_Blocks</p>

    <span className="flex w-full justify-end gap-4 py-[28px]">
      <span className="text-[12px]/[12px] font-normal text-white">Floor Price:</span>
      <span className="text-[14px]/[14px] font-bold text-white">0.08 ETH</span>
    </span>

    <button className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-prime-200 px-[29px] py-[15px] font-rob text-[14px]/[14px] font-bold text-white">
      Buy Now
    </button>
  </div>
);

export default function Collections() {
  return (
    <>
      <section className="flex h-full w-full items-start gap-5">
        <div className="flex h-full max-h-[328px] w-full max-w-[833px] rounded-[19px] bg-prime-100">
          <div className="flex w-full flex-col gap-7 py-[52px] pl-[38px] lg:max-w-[351px]">
            <h1 className="font-rob text-[45px]/[45px] font-bold text-white">Get that NFT project now</h1>
            <p className="text[14px]/[22px] font-rob font-light text-white">
              Sign up for an optimized payment plan that allows you to start using the NFTs you purchase with a small
              deposit, and pay off later.
            </p>
          </div>
          <div className="relative h-[328px] w-[430px] rounded-[19px] bg-opacity-5 bg-banner-frame bg-cover bg-no-repeat">
            <Image
              src="/assets/vectors/3d_vector-1.png"
              alt="buy"
              width={385}
              height={300}
              className="h-full w-full"
              priority
            />
          </div>
        </div>

        <div className="block h-full w-full rounded-[19px] bg-grey-300 px-[21px] py-[30px] lg:max-w-[400px]">
          <div className="flex w-full items-center justify-between">
            <h1>Recent purchases</h1>
          </div>
        </div>
      </section>

      <section className="h-full w-full">
        <div className="my-[30px] mb-8 flex w-full items-center justify-between px-2">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">collections</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
          <CollectionCard image="/assets/project-buy.png" />
        </div>

        <div className="my-[30px] mb-8 mt-[108px] flex w-full items-center justify-between px-2">
          <h2 className="font-rob text-[45px]/[45px] font-bold text-white">Lendable projects</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-4">
          <CollectionCard image="/assets/project-sell.png" />
          <CollectionCard image="/assets/project-sell.png" />
          <CollectionCard image="/assets/project-sell.png" />
          <CollectionCard image="/assets/project-sell.png" />
        </div>
      </section>
    </>
  );
}
