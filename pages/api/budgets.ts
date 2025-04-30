import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../lib/db';
import { Budget } from '../../models/Budget';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    const month = req.query.month;
    const budgets = await Budget.find(month ? { month } : {});
    return res.status(200).json(budgets);
  }

  if (req.method === 'POST') {
    const { category, amount, month } = req.body;
    const existing = await Budget.findOne({ category, month });
    if (existing) await existing.deleteOne();
    const newBudget = await Budget.create({ category, amount, month });
    return res.status(201).json(newBudget);
  }

  res.status(405).end();
}