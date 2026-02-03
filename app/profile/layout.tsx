import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Profile - AgentProxy",
  description: "Manage your personal information and payment methods",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
