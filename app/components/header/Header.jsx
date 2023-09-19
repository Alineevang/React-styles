import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.lista}>
            <ul className={styles.ul}>
                <div>
                    <img src='logokevlar.png' width={80} height={80} className={styles.image}></img>
                </div>
                <li className={styles.categoria}><Link href={'/'} className={styles.linkar}>Home</Link></li>
                <li className={styles.categoria}><Link href={'/'} className={styles.linkar}>About</Link></li>
                <li className={styles.categoria}><Link href={'/'} className={styles.linkar}>Blog</Link></li>
                <li className={styles.categoria}><Link href={'/'} className={styles.linkar}>Gallery</Link></li>
                <li className={styles.categoria}><Link href={'/'} className={styles.linkar}>Contact Us</Link></li>
            </ul>
        </div>
    );
}
export default Header

