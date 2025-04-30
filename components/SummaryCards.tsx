"use client";
import { useEffect, useState } from "react";

export default function SummaryCards() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState<any[]>([]);
  // const [categoryBreakdown, setCategoryBreakdown] = useState<any>({});
  const [categoryBreakdown, setCategoryBreakdown] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    const fetchData = async () => {
      const transactionsRes = await fetch("/api/transactions");
      const transactions = await transactionsRes.json();
      const budgetsRes = await fetch(
        "/api/budgets?month=" +
          new Date().toLocaleString("default", { month: "long" })
      );
      const budgets = await budgetsRes.json();

      setTotalExpenses(
        transactions.reduce((acc: number, t: any) => acc + t.amount, 0)
      );

      const breakdown = transactions.reduce((acc: any, transaction: any) => {
        acc[transaction.category] =
          (acc[transaction.category] || 0) + transaction.amount;
        return acc;
      }, {});

      setCategoryBreakdown(breakdown);
      setRecentTransactions(transactions.slice(-5).reverse());
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold">Total Expenses</h3>
        <p>${totalExpenses}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold">Category Breakdown</h3>
        {Object.entries(categoryBreakdown).map(([category, amount]) => (
          <p key={category}>
            {category}: ${amount}
          </p>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="font-bold">Recent Transactions</h3>
        {recentTransactions.map((transaction: any) => (
          <p key={transaction._id}>
            {transaction.description} - ${transaction.amount}
          </p>
        ))}
      </div>
    </div>
  );
}
