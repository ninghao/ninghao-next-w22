import './styles/global.css';
import styles from './styles/app.module.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head />
      <body>
        <div className={styles.app}>
          <header>
            <div>
              <span>🏝</span> 宁皓网
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
