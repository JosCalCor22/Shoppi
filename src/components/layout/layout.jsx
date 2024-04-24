function Layout ({ children }) {
  return(
    <section className="flex width-full gap-8">
      {children}
    </section>
  )
}

export { Layout }