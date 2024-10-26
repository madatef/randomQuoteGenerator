import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import "./globals.css";
import {Roboto, Dancing_Script, Ballet, Lavishly_Yours, Luxurious_Script} from 'next/font/google'


export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
});
export const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-dancing'
});
export const ballet = Ballet(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-ballet'
  }
);
export const lavish = Lavishly_Yours(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-lavish'
  }
);
const lux = Luxurious_Script(
  {
    subsets: ['latin'],
    display: 'swap',
    weight: ['400'],
    variable: '--font-lux'
  }
);


export const metadata: Metadata = {
  title: "Random Quote Generatore",
  description: "Randome quote generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
