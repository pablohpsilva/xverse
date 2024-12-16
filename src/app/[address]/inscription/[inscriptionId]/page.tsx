import Header from "@/components/Header";
import InscriptionRender from "@/components/InscriptionRender";
import Text from "@/components/Text";
import TextFieldDisplay from "@/components/TextFieldDisplay";
import { ROUTES } from "@/constants/routes";

type Props = {
  params: Promise<{ address: string; inscriptionId: string }>;
};

const fetchInscriptionData = async (address: string, inscriptionId: string) => {
  const response = await fetch(
    `https://api-3.xverse.app/v1/address/${address}/ordinals/inscriptions/${inscriptionId}`
  );
  return response.json();
};

export default async function InscriptionPage(props: Props) {
  const { address, inscriptionId } = await props.params;
  const inscriptionData = await fetchInscriptionData(address, inscriptionId);

  return (
    <>
      <Header title="Details" hasBackButton backButtonHref={ROUTES.ROOT} />

      <main className="flex flex-col gap-8 page-wrapper">
        <section className="flex flex-col gap-2 px-4 sm:flex-row">
          <InscriptionRender
            contentType={inscriptionData.content_type}
            src={`https://ord.xverse.app/content/${inscriptionId}`}
          />

          <div>
            <Text size="md">Inscription {inscriptionData.number}</Text>

            <hr className="border-light opacity-10 my-4" />

            <TextFieldDisplay label="Inscription ID" value={inscriptionId} />

            <TextFieldDisplay disabled label="Owner Address" value={address} />
          </div>
        </section>

        <section className="flex flex-col gap-2 px-4 mb-8">
          <Text size="md">Attributes</Text>

          <TextFieldDisplay
            label="Content Type"
            value={inscriptionData.content_type}
          />

          <TextFieldDisplay
            label="Content Length"
            value={inscriptionData.content_length}
          />

          <TextFieldDisplay
            label="Inscription Address"
            value={inscriptionData.address}
          />

          <TextFieldDisplay
            label="Inscription Genesis Address"
            value={inscriptionData.genesis_address}
          />

          <TextFieldDisplay
            label="Inscription Genesis Block Height"
            value={inscriptionData.genesis_block_height}
          />

          <TextFieldDisplay
            label="Inscription Genesis Block Hash"
            value={inscriptionData.genesis_block_hash}
          />

          <TextFieldDisplay
            label="Inscription Genesis TX ID"
            value={inscriptionData.genesis_tx_id}
          />

          <TextFieldDisplay
            label="Inscription Genesis Fee"
            value={inscriptionData.genesis_fee}
          />

          <TextFieldDisplay
            label="Inscription Genesis Timestamp"
            value={inscriptionData.genesis_timestamp}
          />
        </section>
      </main>
    </>
  );
}
