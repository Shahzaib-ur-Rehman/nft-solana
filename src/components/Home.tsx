import React, { useEffect, useState, useTransition } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/app/hooks";
import { clearResults, fetchListedNftsByCollectionSymbol } from "@/features/Collections/collectionSlice";
import { CollectionsView } from "@/features/Collections/Collections";
import Input from "./Input";
const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Home = () => {
  const [inputValue, setinputValue] = useState();
  const [_isPending, startTransition] = useTransition();
  const dispatch = useAppDispatch();
  const handleInputChange = (event: any) => {
    startTransition(() => {
      setinputValue(event.target.value);
    });
  };

  useEffect(() => {
    if (inputValue) {
      dispatch(clearResults([]))
      let offset = 0;
      dispatch(
        fetchListedNftsByCollectionSymbol({
          symbol: inputValue,
          offset,
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <MainWrapper>
      <Input value={inputValue} onChange={handleInputChange} />
      <CollectionsView value={inputValue} />
    </MainWrapper>
  );
};

export default Home;
