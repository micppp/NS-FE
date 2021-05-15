import PropTypes from 'prop-types';
import styles from '../styles/Preview.module.css';

function Preview({ html, setHtml }) {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.iframe}
        src={'data:text/html,' + encodeURIComponent(html)}
      />
      <button className={styles.button} onClick={() => setHtml('')}>
        Close
      </button>
    </div>
  );
}

Preview.propTypes = {
  html: PropTypes.string,
  setHtml: PropTypes.func,
};

export default Preview;
