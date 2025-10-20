import { useMemo, useState, type ChangeEvent } from "react"

export default function BudgetForm() {

    const [budget, setBudget] = useState<number | "">("")

    const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const value = e.target.value
        setBudget(value === "" ? "" : Number(value))
    }
    const isValid = useMemo(() => {
        return typeof budget === "number" && budget > 0
    }, [budget])

    return (
        <form className="space-y-4">
            <div className="flex flex-col space-y-5">
                <label className="text-sm font-medium text-gray-700">Definir Presupuesto</label>
                <input
                    onChange={(e) => { handleBudgetChange(e) }}
                    id="budget"
                    type="number"
                    className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese su presupuesto"
                    name="budget"
                    value={budget}
                />
            </div>

            <input
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 border border-blue-600 rounded-md shadow-sm hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                value="Guardar"
                disabled={!isValid}
            />

        </form>
    )
}
