import Image from 'next/image';

const HowItworks = () => {
  return (
    <section className="h-full w-full rounded-3xl bg-grey-200 p-6">
      <h1 className="py-[60px] text-center text-[45px]/[45px] font-bold text-white">How it works</h1>
      <div className="flex w-full items-start gap-4">
        <Image src={'/assets/nft-banner.png'} alt="How it works" width={450} height={422} className="" priority />

        <div className="grid grid-cols-2 gap-3">
          <StepFeature
            id="01"
            label="Connect Your Wallet"
            description="Connect Your Wallet
            Connecting your wallet gives WAVVY access to set up the platform to your needs."
          />
          <StepFeature
            id="02"
            label="Select NFT Collection"
            description="Below are NFT collections that we curently supported by our platform and are eligible for loans."
          />
          <StepFeature
            id="03"
            label="Search by NFT token ID"
            description="Make a direct search to the NFT token you want and if its available you can make a purchase."
          />
          <StepFeature
            id="04"
            label="Get Loan from pool"
            description="You will provided with diffrent flexible loan terms to pick from the."
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-3 px-4">
        <StepFeature
          id="05"
          label="Start loan plan"
          description="Once you've settled on a loan term and decided to borrow, it's a matter of a click away we will make the purchase for you directly."
        />
        {/* <StepFeature id="06" label="" description="" /> */}
      </div>
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
