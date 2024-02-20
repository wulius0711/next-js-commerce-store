import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
import productStyles from '../Products.module.scss';

// or Dynamic metadata
export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct.name,
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  console.log('Check: ', singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <div className={productStyles.container}>
      <div className={productStyles.headline}>
        <h1>{singleProduct.name}</h1>

        <Image
          src={`/images/products/${singleProduct.name}.png`}
          alt={singleProduct.name}
          width={240}
          height={240}
        />
        <div>{singleProduct.price} €</div>
      </div>
    </div>
  );
}
