function App() {

  type Cofi = string

  let hola: Cofi = 'hola'

  return (
    <div className="grid place-content-center h-screen">
      <h1 className="text-5xl text-lilac-500 bg-gray p-6">Hello world</h1>
      {hola}
    </div>
  )
}

export default App
