import Link from 'next/link';
import styles from '@/styles/Footer.module.css'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <div className={styles.newsletter}>
          <h3 className={styles.title}>Stay Updated</h3>
          <p className={styles.subtitle}>Subscribe to our newsletter for exclusive deals.</p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Sections */}
        <div className={styles.links}>
          {/* Shop Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Shop</h4>
            <ul className={styles.linkList}>
              <li><Link href="/products" className={styles.link}>All Products</Link></li>
              <li><Link href="/categories" className={styles.link}>Categories</Link></li>
              <li><Link href="/sales" className={styles.link}>Sales</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/careers" className={styles.link}>Careers</Link></li>
              <li><Link href="/press" className={styles.link}>Press</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Support</h4>
            <ul className={styles.linkList}>
              <li><Link href="/help" className={styles.link}>Help Center</Link></li>
              <li><Link href="/shipping" className={styles.link}>Shipping Info</Link></li>
              <li><Link href="/returns" className={styles.link}>Returns</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Follow Us</h4>
            <ul className={styles.socialList}>
              <li><Link href="https://twitter.com" className={`${styles.link} ${styles.socialIcon}`} aria-label="Twitter">🐦</Link></li>
              <li><Link href="https://instagram.com" className={`${styles.link} ${styles.socialIcon}`} aria-label="Instagram">📷</Link></li>
              <li><Link href="https://facebook.com" className={`${styles.link} ${styles.socialIcon}`} aria-label="Facebook">📘</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>&copy; {currentYear} E-Shop. All rights reserved.</p>
          <ul className={styles.legalLinks}>
            <li><Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={styles.legalLink}>Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;