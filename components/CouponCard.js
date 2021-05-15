import { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import formatDate from '@/utils/formatDate';
import multipleClasses from '@/utils/multipleClasses';
import styles from '@/styles/Card.module.css';

function Card({
  description,
  ends_at: endsAt,
  html,
  is_enabled: isEnabled,
  name,
  screenshot_url: screenshotUrl,
  starts_at: startsAt,
  voucher_code: voucherCode,
  voucher_code_expires_days: voucherCodeExpiresDays,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={screenshotUrl} alt="" height={100} width={100} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.dates}>
          {startsAt && endsAt ? (
            <>
              <div className={styles.datewrap}>
                <span className={styles.label}>Start: </span>
                <time className={styles.date} datatime={startsAt}>
                  {formatDate(startsAt)}
                </time>
              </div>
              <div>
                <span className={styles.label}>Expiry: </span>
                <time className={styles.date} datatime={endsAt}>
                  {formatDate(endsAt)}
                </time>
              </div>
            </>
          ) : (
            <div className={styles.description}>
              This coupon runs forever! 🚀
            </div>
          )}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            {open ? 'Less' : 'More'} Info
          </button>
          <button
            className={multipleClasses([styles.button, styles.secondary])}
          >
            Preview
          </button>
        </div>
        {open && (
          <div className={styles.voucher}>
            {voucherCode ? (
              <>
                <div className={styles.code}>{voucherCode}</div>
                <p className={styles.expiration}>
                  Please note, the voucher will expire in{' '}
                  {voucherCodeExpiresDays} days
                </p>
              </>
            ) : (
              'No Voucher Code needed! Just visit the website and the discount is applied automatically'
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string,
  ends_at: PropTypes.string,
  html: PropTypes.string,
  is_enabled: PropTypes.bool,
  name: PropTypes.string,
  screenshot_url: PropTypes.string,
  starts_at: PropTypes.string,
  voucher_code: PropTypes.string,
  voucher_code_expires_days: PropTypes.number,
};

export default Card;
