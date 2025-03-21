import ExpenseForm from '../components/ExpenseForm'
import ExpenseTable from '../components/ExpenseTable'
import expenseData from "../components/expenseData"
import '../src/App.css'
import { useState } from 'react'

import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Home() {
    const [expense, setExpense] = useState({
        title: '',
        category: '',
        amount: ''
    })
    const [expenses, setExpenses] = useState(expenseData)
    const [roweditingid, setRowEditingId] = useState('')
    const [data, UpdateLocaStorage] = useLocalStorage('Player', [1, 2, 3])

    return (
        <>
            <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Expense Tracker</title>
                <link rel="stylesheet" href="style.css" />
                <main>
                    <h1 onClick={() => { UpdateLocaStorage([4, 5, 6]) }}>Track Your Expense</h1>
                    <h2>{data}</h2>
                    <div className="expense-tracker">
                        <ExpenseForm expense={expense} setExpense={setExpense} roweditingid={roweditingid} setRowEditingId={setRowEditingId} setExpenses={setExpenses} />
                        <ExpenseTable expenses={expenses} setExpenses={setExpenses} setRowEditingId={setRowEditingId} setExpense={setExpense} />
                    </div>
                </main>
            </>

        </>
    )
}