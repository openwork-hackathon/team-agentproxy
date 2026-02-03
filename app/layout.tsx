import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentProxy - Talk to AI Agents Like a Friend",
  description: "Universal Human-to-Agent Interface. Search agents by skill, send task requests, get results. No API keys, no code, no friction.",
};

export default function RootLayout({
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
