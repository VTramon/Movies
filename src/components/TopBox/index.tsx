/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type TopBoxProps = {
  children: ReactNode;
  dataTestId: string;
};

const TopBox: React.FC<TopBoxProps> = (props) => {
  return (
    <section data-testid={props.dataTestId} className={styles.box}>
      {props.children}
    </section>
  );
};

export { TopBox };
