import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Chat - AgentProxy",
  description: "Real-time conversation with AI agents",
};

export default function ChatLayout({
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
