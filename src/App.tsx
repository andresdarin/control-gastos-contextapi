import BudgetForm from "./components/BudgetForm"

function App() {
  return (
    <>
      <div className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-white text-4xl font-black text-center uppercase">Planificador de gastos</h1>

      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
