"use client";
import { useState, useEffect } from "react";

const categories = [
  "Food",
  "Transport",
  "Shopping",
  "Health",
  "Utilities",
  "Other",
];

export default function BudgetForm({ onSave }: { onSave: () => void }) {
  const [form, setForm] = useState({ category: "", amount: "", month: "" });
  const [budgets, setBudgets] = useState<any[]>([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      const res = await fetch(
        "/api/budgets?month=" +
          new Date().toLocaleString("default", { month: "long" })
      );
      const data = await res.json();
      setBudgets(data);
    };
    fetchBudgets();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.category || !form.amount || !form.month) return;

    await fetch("/api/budgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded-xl">
      <h2 className="text-lg font-bold">Set Monthly Budget</h2>
      <select
        className="input"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        className="input"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        type="number"
        placeholder="Amount"
      />
      <input
        className="input"
        value={form.month}
        onChange={(e) => setForm({ ...form, month: e.target.value })}
        placeholder="Month"
      />
      <button className="btn" type="submit">
        Save Budget
      </button>
    </form>
  );
}
