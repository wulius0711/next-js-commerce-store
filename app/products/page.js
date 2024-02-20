import '@fontsource/play';
import '@fontsource-variable/open-sans';
import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
// import loudspeaker from '../../public/images/products/loudspeaker.png';
// import radio from '../../public/images/products/radio.png';
// import walkman from '../../public/images/products/sony-walkman.png';
// import tapePlayer from '../../public/images/products/tape-player.png';
import productStyles from './Products.module.scss';

export const metadata = {
  title: 'products',
  description: 'best products in town',
};

export default async function ProductsPage() {
  const products = await getProductsInsecure();
  return (
    <div className={productStyles.container}>
      <div className={productStyles.headline}>
        <h1>4th hand music components</h1>
        <h2>choose your favorite</h2>
      </div>
      <div className={productStyles.products}>
        {products.map((product) => {
          return (
            <div key={`products-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                {/* <div>{product.name}</div> */}

                <Image
                  src={`/images/products/${product.name.toLowerCase()}.png`}
                  alt={product.name}
                  width={240}
                  height={240}
                />

                <div className={productStyles.productInfos}>
                  <div className={productStyles.productTitle}>
                    {product.name}
                  </div>
                  <div className={productStyles.productPrice}>
                    {product.price} €
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
