import Image from 'next/image';

export const Banner = () => (
  <div className="banner_frame_1">
    <div className="flex h-full w-full max-w-[833px] flex-col rounded-[19px] bg-prime-100 md:max-h-[328px] md:flex-row">
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
  </div>
);
export const LenderBanner = () => (
  <div className="banner_frame_2">
    <div className="flex h-full w-full max-w-[833px] flex-col rounded-[19px] bg-[#1C2730] md:max-h-[328px] md:flex-row">
      <div className="flex w-full flex-col gap-7 py-[52px] pl-[38px]">
        <h1 className="font-rob text-[45px]/[45px] font-bold text-white">Lend to the pool, earn from projects </h1>
        <p className="text[14px]/[22px] font-rob font-light text-white">
          Contribute to a particular project of interest or to the Wavvy pool and get interests on your funds.
        </p>
      </div>
      <div className="relative h-[328px] w-[410px] rounded-[19px] bg-opacity-5 bg-banner-frame bg-cover bg-no-repeat">
        {/* <Image
          src="/assets/vectors/3d_vector-2.png"
          alt="buy"
          width={385}
          height={300}
          className="h-full w-full"
          priority
        /> */}
      </div>
    </div>
  </div>
);
