"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function CategoryPieChart() {
  const [categoryData, setCategoryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      const categoryWise = data.reduce((acc: any, transaction: any) => {
        acc[transaction.category] =
          (acc[transaction.category] || 0) + transaction.amount;
        return acc;
      }, {});
      setCategoryData(
        Object.entries(categoryWise).map(([category, total]) => ({
          name: category,
          value: total,
        }))
      );
    };
    fetchData();
  }, []);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF8042",
    "#FFBB28",
  ];

  return (
    <div className="my-6">
      <h3 className="font-bold mb-4">Category Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {categoryData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
