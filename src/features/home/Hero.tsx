import Image from 'next/image';

export default function Hero() {
  return (
    <section className=" w-full  gap-5 md:grid md:grid-cols-[minmax(55%,60%)_minmax(30.5%,38.5%)]">
      <Banner />
      {/* TODO */}
      <div className=" w-full rounded-[19px] bg-grey-300 px-[20px] py-[30px]">
        <div className="flex h-[3] w-full items-center justify-between">
          <h1 className=" text-[20px]/[20px] font-bold text-grey-100">Recent purchases</h1>
          <button className="flex items-center gap-2.5 rounded-[8px] bg-grey-200 p-2.5 text-[12px]/[12px] text-[#777777]">
            <span>last 24 hours</span>
            <i className="ri-arrow-down-s-line h-[18px] w-[18px] text-[#777777]" />
          </button>
        </div>

        <div className="my-3 grid  w-full grid-cols-1 grid-rows-2 gap-5 overflow-x-auto overflow-y-auto md:gap-2">
          {/* <div className="mt-3 grid grid-cols-2 grid-rows-2 gap-5"> */}
          <PurchaseItem />
          <PurchaseItem />
          <PurchaseItem />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

const Banner = () => (
  <div className="grid h-full w-full grid-cols-3 content-center overflow-hidden  rounded-[19px] bg-prime-100 bg-banner-frame bg-[length:55%_100%] bg-right-top bg-no-repeat md:bg-[length:50%_100%] lg:bg-[length:35%_100%]">
    <div className="col-start-1 col-end-3 flex w-full flex-col justify-center gap-7 py-[52px] pl-[38px] md:max-w-[400px]">
      <h1 className="font-rob text-[30px]/[45px] font-bold text-white lg:text-[45px]/[45px]">
        Get that NFT project now
      </h1>
      <p className="text[14px]/[22px] font-rob font-light text-white">
        Sign up for an optimized payment plan that allows you to start using the NFTs you purchase with a small deposit,
        and pay off later.
      </p>
    </div>
    <div className="relative h-[330px] w-[250px] rounded-[19px] bg-opacity-5  lg:justify-self-end ">
      <Image
        src="/assets/vectors/3d_vector-1.png"
        alt="buy"
        width={355}
        height={300}
        className="h-full w-full"
        priority
      />
    </div>
  </div>
);

const PurchaseItem = () => {
  return (
    <div className="flex h-full min-h-[70px] items-center gap-4 rounded-[16px] bg-[#111B283B] bg-opacity-[0.23] p-2.5">
      <Image src={'/assets/nfts/nft-2.png'} alt="" width={50} height={50} priority className="rounded-full" />
      <div className="flex w-full flex-col items-center gap-3 text-white">
        <div className="flex w-full flex-row items-end justify-between gap-3 text-[14px]/[14px]">
          <span>We all survived death</span>
          <span>8.71 ETH</span>
        </div>
        <div className="flex w-full flex-row items-end justify-between gap-3 text-[14px]/[14px]">
          <span>01x3564...3647</span>
          <span>Price: 198.71 eth</span>
        </div>
      </div>
    </div>
  );
};
