import { Card } from "@/components/Card";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchListedNftsByCollectionSymbol } from "./collectionSlice";
const Container = styled.div`
  padding: 3em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 80%;
`;
type Symbol = {
  value: string | undefined;
};
export const CollectionsView = ({value}: any) => {
  const [PageNumber, setPageNumber] = useState(0)
  const collectionResults = useAppSelector((state) => state.collectionResults);
  const dispatch = useAppDispatch();

  const handleScroll = (event: any) => {
    if (
      window.innerHeight + event.target.documentElement.scrollTop + 1 >=
      event.target.documentElement.scrollHeight
    ) {
      let offset = 0 + 1;
      setPageNumber((prev)=>prev+1)
      
    }
  };

  useEffect(() => {
     if (PageNumber>0) {
      dispatch(
        fetchListedNftsByCollectionSymbol({
          symbol: value ==undefined ? 'okay_bears':value,
          offset:PageNumber,
        })
      );
     }
  }, [PageNumber])
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      
      {collectionResults?.results?.length
        ? collectionResults.results.map((nft) => (
            <Card
              key={nft.title}
              title={nft.collectionTitle}
              date={1}
              price={nft.price}
              imgUrl={nft.img}
            />
          ))
        : null}
        {collectionResults.error ? (
        <div className="text-center">Error: {collectionResults.error}</div>
      ) : null}
    </Container>
  );
};
