

import { client } from "@/sanity/lib/client";
import Image from "next/image";

const getProductData = async (id: string) => {
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]{
      title, price,
      "imageUrl": image.asset->url
    }`,
    { id }
  );
  return product;
};

interface ProductDetails {
  title: string;
  imageUrl: string;
  price: number;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product: ProductDetails | null = await getProductData(params.id);

  if (!product) {
    return (
      <div className="max-w-screen-lg mx-auto mt-16 text-center p-8 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Product Not Found</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the product you are looking for does not exist or has been removed.
        </p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Go back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">{product.title}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg border shadow-sm object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Price: <span className="text-blue-600">${product.price}</span>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              This is a high-quality product perfect for enhancing your space with style and comfort Dont miss the chance to own it
            </p>
          </div>
          <div>
            <button className="w-full lg:w-1/2 bg-blue-600 text-white text-lg py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
