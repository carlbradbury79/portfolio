import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "Showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navigation />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
