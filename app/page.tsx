"use client";
import TransactionForm from "../components/TransactionForm";
import BudgetForm from "../components/BudgetForm";
import SummaryCards from "../components/SummaryCards";
import TransactionList from "../components/TransactionList";
import ExpenseChart from "../components/ExpenseChart";
import CategoryPieChart from "../components/CategoryPieChart";
import BudgetComparisonChart from "../components/BudgetComparisonChart";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Personal Finance Visualizer</h1>
      <TransactionForm onAdd={() => window.location.reload()} />
      <BudgetForm onSave={() => window.location.reload()} />
      <SummaryCards />
      <TransactionList />
      <ExpenseChart />
      <CategoryPieChart />
      <BudgetComparisonChart />
    </main>
  );
}
