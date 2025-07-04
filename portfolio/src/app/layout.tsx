import './globals.css';
import type { Metadata } from 'next';
import ReduxProvider from '../components/ReduxProvider/ReduxProvider'; // 👈

export const metadata: Metadata = {
  title: 'Web-developer Portfolio',
  description: 'Portfolio of a web developer showcasing skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider> {/* 👈 */}
      </body>
    </html>
  );
}
