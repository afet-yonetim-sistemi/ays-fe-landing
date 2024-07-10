export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex min-h-screen flex-col items-center justify-start px-20 space-y-10 my-5 container">
    {children}
  </main>
}