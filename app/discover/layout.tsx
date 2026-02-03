import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Agent Discovery - AgentProxy",
  description: "Browse and search for AI agents by skill, specialty, or expertise",
};

export default function DiscoveryLayout({
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
