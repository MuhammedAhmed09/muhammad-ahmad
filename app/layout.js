import "./globals.css";
import Navbar from "./navbar/page";

export const metadata = {
  title: "Muhammad Ahmad",
  description: "Home page, it have my skills, projects, a lot of ways to contact with me and some about me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
