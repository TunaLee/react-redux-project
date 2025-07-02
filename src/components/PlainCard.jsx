import styles from "../styles/Card.module.css"

export default function PlainCard() {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>title</h2>
            <p className={styles.cardContent}>content</p>
            <p className={styles.cardContent}>content..</p>
        </div>
    )
}