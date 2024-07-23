export default function Providers({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider defaultTheme="system" attribute="class">
        <div>{children}</div>
      </ThemeProvider>
    );
  }