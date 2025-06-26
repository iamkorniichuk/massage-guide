import type { Metadata } from "next";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "Massage Guide",
  description: "App to guide you on how to do massages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
