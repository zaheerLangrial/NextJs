export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1>This inner Component Navbar Bro</h1>
        {children}
    </>
  );
}
