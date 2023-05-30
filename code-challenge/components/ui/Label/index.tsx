import styles from "./Label.module.css";

export interface Props {
  children: string;
}

function Label({ children }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{children}</span>
    </div>
  );
}

export default Label;
