import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BROCELLE CAR RENTAL",
  description: "We are Car Rentals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
