import styles from './styles.module.scss';

type ModalProps = {
  callbackFunction: () => void;
};

const Modal: React.FC<ModalProps> = ({ callbackFunction }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div onClick={callbackFunction} className={styles.close}>
          x
        </div>
        <h2>
          Welcome to <strong>Most Populars</strong>
        </h2>
        <h3>
          the website that keeps you updated with the most popular movies and TV
          series at the moment.
        </h3>
      </div>
    </div>
  );
};

export { Modal };
