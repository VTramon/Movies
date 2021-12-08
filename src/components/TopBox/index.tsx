/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type TopBoxProps = {
  children: ReactNode;
};

const TopBox: React.FC<TopBoxProps> = (props) => {
  return <section className={styles.box}>{props.children}</section>;
};

export { TopBox };
