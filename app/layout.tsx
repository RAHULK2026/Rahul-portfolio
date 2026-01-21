import "./globals.css";
import Navbar from "app/layout.tsx";
import Footer from "components/footer.tsx";
";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
export default function Footer() {
  return (
    <footer className="w-full flex justify-center mt-20 mb-6">
      <div className="w-[95%] max-w-7xl text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Monovo. All rights reserved.
      </div>
    </footer>
  );
}





        <Footer />
      </body>
    </html>
  );
}
