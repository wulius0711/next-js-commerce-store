import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import productStyles from '../Products.module.scss';

// or Dynamic metadata
export function generateMetadata(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  return {
    title: singleProduct.productName,
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  console.log('Check: ', singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <div className={productStyles.container}>
      <div className={productStyles.headline}>
        <h1>{singleProduct.productName}</h1>

        <Image
          src={`/images/products/${singleProduct.productName}.png`}
          alt={singleProduct.productName}
          width={240}
          height={240}
        />
        <div>{singleProduct.price} €</div>
      </div>
    </div>
  );
}
