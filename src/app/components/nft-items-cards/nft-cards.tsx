import { NftItemCard } from "@/features/project/components/NftCard";
import { Collections, ICollectionItems } from "@/interface/util_interface";

const NftItemsCard = ({ NftItems, collection }: { NftItems: ICollectionItems[]; collection: Collections }) => {
    return (
      <>
        {NftItems?.map((item: ICollectionItems, index) => (
          <NftItemCard
            key={index}
            {...item}
            itemsNumber={collection.no_of_items}
            floorPrice={collection.floor_price}
            network={collection.network}
          />
        ))}
      </>
    );
  };

  export default NftItemsCard