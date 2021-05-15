import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import styles from '@/styles/Cards.module.css';

import CouponCard from '@/components/CouponCard';

export default function Cards() {
  const { data, error } = useSWR(
    'https://run.mocky.io/v3/dfe80d90-c9d6-4add-bd64-a1fbaa1b5f73',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className={styles.container}>
      {data.data.map((coupon) => (
        <CouponCard {...coupon} key={coupon.uuid} />
      ))}
    </div>
  );
}
