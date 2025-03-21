import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function ExpenseForm({ setExpenses, expense, setExpense, roweditingid, setRowEditingId }) {

    const [errors, setErrors] = useState({})

    const validationConfig = {
        title: [
            { required: true, message: 'Please enter title' },
            { minLength: 4, message: 'Title should be at least 4 characters long' },
        ],
        category: [{ required: true, message: 'Please select a category' }],
        amount: [{ required: true, message: 'Please enter an amount' }]
    }

    const validate = (formData) => {
        const errorsData = {}

        Object.entries(formData).forEach(([key, value]) => {
            validationConfig[key].some((rule) => {
                if (rule.required && !value) {
                    errorsData[key] = rule.message
                    return true
                }

                if (rule.minLength && value.length < 4) {
                    errorsData[key] = rule.message
                    return true
                }
                if (rule.numeric && isNaN(value)) {
                    errorsData[key] = rule.message
                    return true
                }
            })
        })

        setErrors(errorsData)
        return errorsData
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateResult = validate(expense);
        if (Object.keys(validateResult).length) return;

        if (roweditingid) {
            // If editing, update the existing expense
            setExpenses((prev) =>
                prev.map((singleExpense) =>
                    singleExpense.id === roweditingid ? { ...expense, id: roweditingid } : singleExpense
                )
            );
        } else {
            // If adding new, create a new entry
            setExpenses((prevState) => [
                ...prevState,
                { ...expense, id: crypto.randomUUID() },
            ]);
        }

        // Reset form and editing mode
        setExpense({ title: '', category: '', amount: '' });
        setRowEditingId(null);
    };


    const handleChange = (e) => {
        const { name, value } = e.target
        setExpense((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        setErrors({})
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <Input
                label="Title"
                id="title"
                name="title"
                value={expense.title}
                onChange={handleChange}
                error={errors.title}
            />
            <Select
                label="Category"
                id="category"
                name="category"
                value={expense.category}
                onChange={handleChange}
                options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine', 'Electronics']}
                defaultOption="Select Category"
                error={errors.category}
            />
            <Input
                type="number"
                label="Amount"
                id="amount"
                name="amount"
                value={expense.amount}
                onChange={handleChange}
                error={errors.amount}
            />
            <button className="add-btn">{roweditingid ? "Update Data" : "Add Data"}</button>
        </form>
    )
}