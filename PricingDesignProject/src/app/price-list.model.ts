export interface PriceList {
  header: {
    headerText: string;
    headerAddText: string;
  };
  price: {
    priceCount: string;
    priceTime: string;
  };
  description: string[];
}
