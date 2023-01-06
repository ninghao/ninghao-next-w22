type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head />
      <body>
        <header>
          <div>
            <span>🏝</span> 宁皓网
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
