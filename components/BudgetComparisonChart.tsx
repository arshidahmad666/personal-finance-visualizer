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

export default function BudgetComparisonChart() {
  const [budgetData, setBudgetData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const transactionsRes = await fetch("/api/transactions");
      const transactions = await transactionsRes.json();
      const budgetsRes = await fetch(
        "/api/budgets?month=" +
          new Date().toLocaleString("default", { month: "long" })
      );
      const budgets = await budgetsRes.json();

      const comparisonData = budgets.map((budget: any) => {
        const actual = transactions
          .filter((t: any) => t.category === budget.category)
          .reduce((acc: number, t: any) => acc + t.amount, 0);
        return { category: budget.category, budget: budget.amount, actual };
      });

      setBudgetData(comparisonData);
    };
    fetchData();
  }, []);

  return (
    <div className="my-6">
      <h3 className="font-bold mb-4">Budget vs Actual</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={budgetData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="budget" fill="#8884d8" />
          <Bar dataKey="actual" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
