export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <main className="min-w-screen min-h-screen flex justify-center items-center bg-orange-400">
        {children}
      </main>
    </body>
  );
}
