import { NftItemCard } from "@/features/project/components/NftCard";
import { Collections, ICollectionItems } from "@/interface/util_interface";

const NftItemsCard = ({ NftItems, collection }: { NftItems: ICollectionItems[]; collection: Collections }) => {
  // console.log({collection})
    return (
      <>
        {NftItems?.map((item: ICollectionItems, index) => (
          <NftItemCard
            key={index}
            {...item}
            floorPrice={NftItems[0].floorPrice}
            loanPrice={NftItems[0].loanPrice}
            floorPriceCurrency={NftItems[0].floorPriceCurrency}
            network={collection.network}
            collectionId={collection.unique_id}
          />
        ))}
      </>
    );
  };

  export default NftItemsCard