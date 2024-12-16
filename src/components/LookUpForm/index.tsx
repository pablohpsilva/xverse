"use client";
import { FormEvent, useState } from "react";

import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Text from "@/components/Text";
import InscriptionList from "@/components/InscriptionList";
import useInfiniteScroll from "react-infinite-scroll-hook";

const LookUpForm = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [hasNextPage, setHasNextPage] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setLoading] = useState(false);
  const [inscriptionList, setInscriptionList] = useState<
    { inscriptionId: string; txid: string }[]
  >([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const _walletAddress = formData.get("walletAddress") as string;
    if (walletAddress !== _walletAddress) {
      setInscriptionList([]);
    }
    setWalletAddress(_walletAddress ?? "");
    loadMore(_walletAddress);
  };

  const loadMore = async (walletAddress: string) => {
    try {
      setError(undefined);
      setLoading(true);
      const response = await fetch(
        `https://api-3.xverse.app/v1/address/${walletAddress}/ordinal-utxo?limit=30&offset=${inscriptionList.length}`
      );
      const { results, limit, offset, total } = await response.json();

      const transformedResults = results.map((result: typeof results) => ({
        inscriptionId: result.inscriptions[0].id,
        txid: result.txid,
      }));

      setInscriptionList((prevItems) => [...prevItems, ...transformedResults]);
      setHasNextPage(total > offset + limit);
    } catch (err) {
      setError(err?.toString());
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [infiniteRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: () => loadMore(walletAddress),
    disabled: !!error,
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <>
      <section className="flex flex-col gap-2">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <TextField
            name="walletAddress"
            label="Owner Bitcoin Address:"
            type="text"
          />
          <Button className="w-full" formAction="submit" isLoading={isLoading}>
            <Text>Look up</Text>
          </Button>
        </form>
      </section>

      <section className="flex flex-col gap-2">
        <Text>Results</Text>
        <InscriptionList
          walletAddress={walletAddress}
          list={inscriptionList}
          isLoading={isLoading}
        />
        <div ref={infiniteRef} />
      </section>
    </>
  );
};

export default LookUpForm;
