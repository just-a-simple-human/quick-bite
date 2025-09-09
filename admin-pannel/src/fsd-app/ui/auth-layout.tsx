function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <main className="min-w-screen min-h-screen flex justify-center items-center bg-orange-400  font-nunito-sans">
        {children}
      </main>
    </body>
  );
}

export { AuthLayout };
