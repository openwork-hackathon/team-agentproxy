import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Dashboard - AgentProxy",
  description: "Manage your chats, agents, and account settings",
};

export default function DashboardLayout({
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
