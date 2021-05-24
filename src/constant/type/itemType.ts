export type item = {
  type: string;
  name: string;
  uid: string;
  price: {
    type: string;
    number: number;
  };
  img: string;
};

export type cart = {
  item: item;
  number: number;
};
