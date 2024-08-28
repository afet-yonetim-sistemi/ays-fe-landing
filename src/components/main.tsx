export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-start space-y-4 md:space-y-10 bg-background">
      {children}
    </main>
  )
}
