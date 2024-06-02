import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osprey Invites",
  description: "Osprey invites marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "md:overflow-hidden md:h-screen")}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
