import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex h-full w-full items-start gap-5">
      <Banner />
      {/* TODO */}
      <div className="block h-full w-full rounded-[19px] bg-grey-300 px-[21px] py-[30px] lg:max-w-[400px]">
        <div className="flex w-full items-center justify-between">
          <h1>Recent purchases</h1>
        </div>
      </div>
    </section>
  );
}

const Banner = () => (
  <div className="flex h-full max-h-[328px] w-full max-w-[833px] rounded-[19px] bg-prime-100">
    <div className="flex w-full flex-col gap-7 py-[52px] pl-[38px] lg:max-w-[351px]">
      <h1 className="font-rob text-[45px]/[45px] font-bold text-white">Get that NFT project now</h1>
      <p className="text[14px]/[22px] font-rob font-light text-white">
        Sign up for an optimized payment plan that allows you to start using the NFTs you purchase with a small deposit,
        and pay off later.
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
);
