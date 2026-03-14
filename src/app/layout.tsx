import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CursorEffect from "@/components/ui/CursorEffect";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageTransition from "@/components/ui/PageTransition";
import LoaderProvider from "@/components/ui/LoaderProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <LoaderProvider>

          <Navbar />

          <SmoothScroll />
          <ScrollProgress />
          <CursorEffect />

          <PageTransition>
            {children}
          </PageTransition>

        </LoaderProvider>

      </body>
    </html>
  );
}
