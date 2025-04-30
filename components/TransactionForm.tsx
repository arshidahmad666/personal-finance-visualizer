'use client';
import { useState } from 'react';

const categories = ['Food', 'Transport', 'Shopping', 'Health', 'Utilities', 'Other'];

export default function TransactionForm({ onAdd }: { onAdd: () => void }) {
  const [form, setForm] = useState({ amount: '', date: '', description: '', category: '' });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.amount || !form.date || !form.description || !form.category) return;

    await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount: parseFloat(form.amount) }),
    });

    setForm({ amount: '', date: '', description: '', category: '' });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border p-4 rounded-xl">
      <h2 className="text-lg font-bold">Add Transaction</h2>
      <input className="input" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} type="number" placeholder="Amount" />
      <input className="input" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} type="date" />
      <input className="input" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Description" />
      <select className="input" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        <option value="">Select Category</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button className="btn" type="submit">Add</button>
    </form>
  );
}