export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-screen flex-col items-center justify-start p-24 space-y-10">
    {children}
  </main>
}