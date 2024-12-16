import { FC } from "react";
import Link from "next/link";

import Text from "@/components/Text";
import ChevronRightIcon from "@/components/Icon/ChevronRight";
import { PropsWithTestId } from "@/types/common";
import withTestId from "@/components/WithTestId";
import { truncateString } from "@/utils/truncate";
import { InscriptionLight } from "@/api/types";
import { ROUTES } from "@/constants/routes";

export type InscriptionItemProps = PropsWithTestId<{
  walletAddress: string;
  truncateSuffix?: string;
  truncateLength?: number;
  inscriptionId: InscriptionLight["id"];
}>;

const InscriptionItem: FC<InscriptionItemProps> = ({
  walletAddress,
  truncateLength = 9,
  truncateSuffix = "",
  inscriptionId,
  testId,
}) => {
  const inscriptionTruncatedId = truncateString(
    inscriptionId,
    truncateLength,
    truncateSuffix
  );
  return (
    <Link
      href={ROUTES.INSCRIPTION({ walletAddress, inscriptionId })}
      className="flex flex-row justify-between items-center gap-2 w-full py-2"
      data-testid={testId}
    >
      <Text data-testid={`${testId}.text`}>
        Inscription {inscriptionTruncatedId}
      </Text>
      <ChevronRightIcon />
    </Link>
  );
};

export default withTestId(InscriptionItem);
