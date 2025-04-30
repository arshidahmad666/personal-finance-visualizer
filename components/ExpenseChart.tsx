"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ExpenseChart() {
  const [expenses, setExpenses] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      const grouped = data.reduce((acc: any, transaction: any) => {
        const month = new Date(transaction.date).toLocaleString("default", {
          month: "short",
        });
        acc[month] = (acc[month] || 0) + transaction.amount;
        return acc;
      }, {});
      setExpenses(
        Object.entries(grouped).map(([month, total]) => ({ month, total }))
      );
    };
    fetchData();
  }, []);

  return (
    <div className="my-6">
      <h3 className="font-bold mb-4">Monthly Expenses</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={expenses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
