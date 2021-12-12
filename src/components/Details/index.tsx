import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.details}>
      <h1>pagina {id}</h1>
    </div>
  );
};

export { Details };
