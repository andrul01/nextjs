
import { Geist } from 'next/font/google';
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en" className={geist.className}>
        <body>{children}</body>
      </html>
   );
}
  