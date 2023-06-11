import Image from 'next/image';

const HowItworks = () => {
  return (
    <section className="mt-6 h-full w-full rounded-3xl bg-grey-200 p-6">
      <h1 className="py-[60px] text-center text-[45px]/[45px] font-bold text-white">How it works</h1>
      <div className="flex w-full items-start gap-4 pb-6">
        <Image src={'/assets/nft-banner.png'} alt="How it works" width={450} height={422} className="" priority />

        <div className="grid grid-cols-2 gap-3">
          <StepFeature
            id="01"
            label="Connect Your Wallet"
            description="This sets up your account and is required to perform any action on Wavvy."
          />
          <StepFeature
            id="02"
            label="Choose an NFT Collection"
            description="Above are NFT collections that we curently support and are eligible for loans on Polygon."
          />
          <StepFeature
            id="03"
            label="Search for NFT Token ID"
            description="Search for the NFT token of your choice, and if its listed for sale you can make a purchase instantly."
          />
          <StepFeature
            id="04"
            label="Select a Pool to Fund Purchase"
            description="You will be provided with different flexible loan terms by lenders to fund your purchase."
          />
          <StepFeature
            id="05"
            label="Complete Purchase"
            description="Once you've settled on a loan term, just click on buy and Wavvy will make the purchase. If purchase was successfull, visit your dashboard to view NFT"
          />
        </div>
      </div>
      {/* <div className="flex w-full items-center gap-3 px-4">
        <StepFeature
          id="05"
          label="Start loan plan"
          description="Once you've settled on a loan term and decided to borrow, it's a matter of a click away we will make the purchase for you directly."
        />
      </div> */}
    </section>
  );
};

export default HowItworks;

const StepFeature = ({ id, label, description }: { id: string; label: string; description: string }) => (
  <div className="flex w-full flex-col items-start gap-2 font-rob text-grey-100">
    <span className="font-rob text-[18px]/[44px] font-medium">{id}</span>
    <h3 className="text-[30px]/[30px] font-medium">{label}</h3>
    <p className="text-[16px]/[28px] font-light">{description}</p>
  </div>
);
