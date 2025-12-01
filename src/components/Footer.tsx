import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>FXTrusts</h3>
                        <p>
                            Empowering institutional finance with next-generation trading infrastructure.
                        </p>
                    </div>
                    <div className={styles.column}>
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Execution</a></li>
                            <li><a href="#">Liquidity</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.legal}>
                    <p>
                        © 2024 FXTrusts Ltd. All rights reserved.
                    </p>
                    <p style={{ fontWeight: 'bold', color: '#0F172A' }}>
                        Disclaimer: FXTrusts is a technology provider, not a financial broker.
                    </p>
                    <p>
                        We provide software solutions for institutional clients. We do not hold client funds or execute trades.
                        All trading services are provided by our regulated partners.
                    </p>
                </div>
            </div>
        </footer>
    );
}
