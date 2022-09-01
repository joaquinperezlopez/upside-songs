export interface WebsocketMessage {
  type: string;
  payload: PriceInfo;
}

export interface PriceItem {
  bid: number;
  ask: number;
}

export interface PriceInfo {
  bookPrices: {
    [song: string]: PriceItem;
  };
}
