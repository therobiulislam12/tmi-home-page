import "./globals.css";

export const metadata = {
  title: "Moving Image — Video Production Company in Singapore",
  description:
    "Video Production in Singapore with over 600+ videos. Since 2016 we've delivered projects for Shell, LG, Maybank, Foodpanda and more across Singapore and Southeast Asia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
