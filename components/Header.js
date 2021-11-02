import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>Bring Dat</span> Heat 🔥</h1>
            <p className={headerStyles.description}>Keep up to date with the latest Next.js crash courses.</p>
        </div>
    )
}

export default Header;