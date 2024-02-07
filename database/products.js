import 'server-only';

const products = [
  {
    id: 1,
    productName: 'sony-walkman',
    type: 'tape',
    price: 112,
  },
  {
    id: 2,
    productName: 'radio',
    type: 'Freqency',
    price: 212,
  },
  {
    id: 3,
    productName: 'loudspeaker',
    type: 'output',
    price: 221,
  },
  {
    id: 4,
    productName: 'tape-player',
    type: 'tape',
    price: 121,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
