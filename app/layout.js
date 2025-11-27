import "./globals.css";
import { ubuntu } from '@/app/ui/fonts';
import Navbar from "./components/side-nav/page";
import ModernBubbleBackground from "./ui/background";


export const metadata = {
  title: "Muhammad Ahmad",
  description: "Landing page, it have my skills, projects, a lot of ways to contact with me and some about me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} relative overflow-x-clip text-white`}>
        <ModernBubbleBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
