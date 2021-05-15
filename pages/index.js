import Head from 'next/head';
import Header from '@/components/Header';
import CouponCards from '@/components/CouponCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coopon</title>
        <meta
          name="description"
          content="We are a bit like Groupon, but for Coupons."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CouponCards />
    </>
  );
}
