import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Settings - AgentProxy",
  description: "Manage your account preferences and privacy settings",
};

export default function SettingsLayout({
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
