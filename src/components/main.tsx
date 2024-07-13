export default function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col items-center justify-start space-y-10">
    {children}
  </main>
}