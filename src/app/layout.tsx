// @ts-ignore: allow side-effect import of CSS without type declarations
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}