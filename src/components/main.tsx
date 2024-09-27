const Main = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className="flex flex-col items-center justify-start space-y-4 md:space-y-10 bg-background">
      {children}
    </main>
  )
}

export default Main
