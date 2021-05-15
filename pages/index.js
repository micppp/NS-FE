import { useState } from 'react';
import Head from 'next/head';
import CouponCards from '../components/CouponCards';
import Preview from '../components/Preview';
import Header from '../layout/Header';

export default function Home() {
  const [html, setHtml] = useState('');

  return (
    <>
      <Head>
        <title>Coopon</title>
        <meta
          name="description"
          content="We are a bit like Groupon, but for Coupons."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CouponCards setHtml={setHtml} />
      {html && <Preview html={html} setHtml={setHtml} />}
    </>
  );
}
