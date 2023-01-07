import './styles/global.css';
import styles from './styles/app.module.css';
import AppHeader from './components/app-header';
import AuthProvider from './login/provider';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head />
      <body>
        <AuthProvider>
          <div className={styles.app}>
            <AppHeader />
            <main>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
