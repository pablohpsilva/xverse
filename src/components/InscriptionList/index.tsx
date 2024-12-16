import { FC } from "react";

import { PropsWithTestId } from "@/types/common";
import InscriptionItem from "./InscriptionItem";
import { InscriptionLight, InscriptionResult } from "@/api/types";
import LoadingIcon from "@/components/Icon/Loading";
import withTestId from "@/components/WithTestId";

export type InscriptionListProps = PropsWithTestId<{
  walletAddress: string;
  truncateSuffix?: string;
  truncateLength?: number;
  list?: {
    inscriptionId: InscriptionLight["id"];
    txid: InscriptionResult["txid"];
  }[];
  isLoading?: boolean;
}>;

const InscriptionList: FC<InscriptionListProps> = ({
  walletAddress,
  list = [],
  isLoading = false,
  testId,
}) => {
  if (isLoading)
    return (
      <div
        className="flex p-8 justify-center w-full"
        data-testid={`${testId}.loading`}
      >
        <LoadingIcon />
      </div>
    );

  if (list.length === 0) return null;

  return (
    <ol className="flex flex-col gap-2" data-testid={`${testId}.list`}>
      {list.map(({ inscriptionId, txid }, index) => (
        <li key={`${txid} - ${inscriptionId}`}>
          <InscriptionItem
            walletAddress={walletAddress}
            inscriptionId={inscriptionId}
            testId={`${testId}.list.item.${index}`}
          />
        </li>
      ))}
    </ol>
  );
};

export default withTestId(InscriptionList);
