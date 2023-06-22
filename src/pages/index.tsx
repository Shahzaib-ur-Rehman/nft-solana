import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HomeCard from "../components/Home";
import { useAppDispatch } from "@/app/hooks";
import { fetchListedNftsByCollectionSymbol } from "@/features/Collections/collectionSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    let offset = 0;
    dispatch(
      fetchListedNftsByCollectionSymbol({
        symbol: "okay_bears",
        offset,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>NFT</title>
        <meta name="description" content="NFT Collections" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <HomeCard/>
        </main>
    </>
  );
}
