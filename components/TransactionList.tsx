"use client";
import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/transactions?id=${id}`, { method: "DELETE" });
    setTransactions(transactions.filter((t) => t._id !== id));
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold">Transactions</h3>
      <ul className="space-y-2">
        {transactions.map((transaction: any) => (
          <li
            key={transaction._id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
          >
            <span>
              {transaction.description} - ${transaction.amount}
            </span>
            <button
              onClick={() => handleDelete(transaction._id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
