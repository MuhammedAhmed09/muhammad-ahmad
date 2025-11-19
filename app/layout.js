import "./globals.css";
import 'sal.js/dist/sal.css';
import ubuntu from '@/app/ui/fonts';
import Navbar from "./components/side-nav/page";


export const metadata = {
  title: "Muhammad Ahmad",
  description: "Home page, it have my skills, projects, a lot of ways to contact with me and some about me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
