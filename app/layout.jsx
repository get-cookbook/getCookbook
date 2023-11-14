import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "get(cookbook)",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html className="w-screen h-screen overflow-x-hidden">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
