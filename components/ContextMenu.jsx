import React from 'react'

export default function ContextMenu({ position, setPosition, rowId, setExpenses, setExpense, expenses, setRowEditingId }) {
    if (!position.left) return
    return (
        <div className="context-menu" style={{
            position: 'absolute',
            left: position.left,
            top: position.top
        }}>
            <div onClick={() => {
                const { title, category, amount } = expenses.find((exp) => exp.id === rowId)
                setExpense({ title, category, amount })
                setPosition({})
                setRowEditingId(rowId)
            }}>Edit</div>
            <div onClick={() => {
                setExpenses((prev) => {
                    return prev.filter(expens => {
                        return expens.id !== rowId
                    })
                })
                setPosition({})
            }}>Delete</div>
        </div >
    )
}