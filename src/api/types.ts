export type Sat = {
  number: string;
  rarity_ranking: string;
  offset: number;
};

export type Inscription = {
  id: string;
  number: number;
  address: string;
  genesis_address: string;
  genesis_block_height: number;
  genesis_block_hash: string;
  genesis_tx_id: string;
  genesis_fee: number;
  genesis_timestamp: number;
  location: string;
  output: string;
  offset: number;
  sat_ordinal: number;
  sat_rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  sat_coinbase_height: number;
  mime_type: string;
  content_type: string;
  content_length: number;
  tx_id: string;
  timestamp: number;
  value: number;
  category: string | null;
  collection_id: string | null;
  collection_name: string | null;
  inscription_floor_price: number;
};

export type InscriptionLight = {
  id: string;
  offset: number;
  content_type: string;
};

export type InscriptionResult = {
  txid: string;
  vout: number;
  block_height: number;
  value: number;
  sats: Sat[];
  inscriptions: InscriptionLight[];
};

export type InscriptionResultLight = {
  txid: InscriptionResult["txid"];
  inscriptionId: InscriptionLight["id"];
};

export type InscriptionResponse = {
  limit: number;
  offset: number;
  total: number;
  results: InscriptionResult[];
};
