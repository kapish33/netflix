import styles from './Loading.module.scss';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSkeleton;
