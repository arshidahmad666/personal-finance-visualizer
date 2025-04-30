import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../lib/db';
import { Transaction } from '../../models/Transaction';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === 'GET') {
    const transactions = await Transaction.find();
    return res.status(200).json(transactions);
  }

  if (req.method === 'POST') {
    const { amount, date, description, category } = req.body;
    const transaction = await Transaction.create({ amount, date, description, category });
    return res.status(201).json(transaction);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    await Transaction.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted' });
  }

  res.status(405).end();
}