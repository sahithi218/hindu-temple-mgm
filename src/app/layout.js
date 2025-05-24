import { Inter } from "next/font/google";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hindu Temple of Montgomery",
  description:
    "A Sacred Space for Worship, Community, and Cultural Celebration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
