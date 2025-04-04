import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export const metadata = {
  title: "First",
  description: "My First App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-grow">{children}</main> {/* Pushes footer down */}
        <Footer />
      </body>
    </html>
  );
}
