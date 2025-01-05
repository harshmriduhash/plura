import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/hooks/theme-provider";
import { PosthogProvider } from "@/hooks/posthog";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Plura",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <PosthogProvider>
        <body
          className={` bg-background font-sans min-h-screen min-w-80 ${GeistSans.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col items-center bg-background overflow-hidden mt-20">
              {children}
            </div>
          </ThemeProvider>
          <Toaster />
        </body>
      </PosthogProvider>
    </html>
  );
}
