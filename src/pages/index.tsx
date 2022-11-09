import { GetServerSideProps } from 'next'
import { stripe } from 'lib/stripe'

import { HomeLayout } from 'layouts/HomeLayout'
import Stripe from 'stripe'

export interface ProductsProps {
  id: string
  name: string
  imageUrl: string
  price: number
}

export interface HomeProps {
  products: ProductsProps[]
}

export default function Home({ products }: HomeProps) {
  return <HomeLayout products={products} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: { products },
  }
}
