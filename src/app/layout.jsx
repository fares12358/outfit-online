import Nav from "./Components/Nav";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen  container mx-auto bg-[url('/images/main.png')] bg-cover bg-center`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
