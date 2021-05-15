import useSWR from 'swr';
import PropTypes from 'prop-types';
import fetcher from '@/utils/fetcher';
import styles from '@/styles/Cards.module.css';
import CouponCard from '@/components/CouponCard';

const API_URL = 'https://run.mocky.io/v3/dfe80d90-c9d6-4add-bd64-a1fbaa1b5f73';
function Cards({ setHtml }) {
  const { data, error } = useSWR(API_URL, fetcher);

  if (error) return <div className={styles.container}>failed to load</div>;
  if (!data) return <div className={styles.container}>loading...</div>;
  return (
    <div className={styles.container}>
      {data.data.map((coupon) => (
        <CouponCard {...coupon} key={coupon.uuid} setHtml={setHtml} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  setHtml: PropTypes.func,
};

export default Cards;
