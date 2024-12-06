import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "H2O",
  description: "GLe site bleu sous l'eau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
