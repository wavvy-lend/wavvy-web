export default function Loan() {
  return (
    <section className="flex w-full items-start gap-5">
      <div className="flex h-full w-full max-w-[614px] flex-col gap-[50px]">
        <div className="h-[205px] w-full rounded-t-[19px] bg-prime-100" />

        <hgroup className="flex flex-col items-start gap-5 font-rob font-bold text-white">
          <h1 className=" text-[30px]/[30px]">Sneakerheads -- NFT Project</h1>
          <p className="text-[18px]/[18px]">By RTFKT</p>
        </hgroup>
        <div className="font-rob text-[14px]/[22px] font-medium text-white">
          <p>
            Clone X Forging 2022 features exclusive apparel designed for Clone X holders.This collection contains
            pre-forged NFTs that can be redeemed for physicals at no extra cost via www.rtfkt.comForging of physical
            starts: Wednesday, 7th September via www.rtfkt.com
          </p>

          <ul>
            <li>⚒️Deadline to Forge physical: 14th September www.rtfkt.com</li>
            <li>⚒️You must forge your apparel within this window to receive the physicals.</li>
          </ul>
          <p className="pt-4">
            Please note: Sneaker Forging is not part of this Forging Event and are Digital Wearables for the time
            being.See the full collection: lookbook.rtfkt.com
          </p>
        </div>
      </div>

      <div className="flex h-[606px] w-[317px] items-start rounded-t-[8px] bg-prime-200 bg-opacity-[0.19] px-4 py-[26px]">
        <div className="flex h-[175px] w-[285px] flex-col items-center justify-center gap-[23px] rounded-lg bg-[#C8304D] bg-opacity-[0.20] px-4 py-[22px] text-center">
          <div className="flex flex-col font-rob text-white">
            <span className="text-[14px]/[22px] font-medium">Project value</span>
            <span className="text-[20px]/[31px] font-bold">0.19011 ETH</span>
          </div>
          <div className="flex flex-col font-rob text-white">
            <span className="text-[14px]/[22px] font-medium">Project value</span>
            <span className="text-[20px]/[31px] font-bold">0.19011 ETH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
