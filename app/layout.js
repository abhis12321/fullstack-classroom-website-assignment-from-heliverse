import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./__components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "classroom website",
  description: "A full stack classroom website assignment from Heliverse for An intern role.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
