
import httpStatus from 'http-status';
import { IExpense } from './expense.interface';
import Expense from './expense.model';
import ApiError from '../../../errors/ApiError';

 const createExpense = async (data: IExpense): Promise<IExpense> => {
  try {
    const expense = new Expense(data);
    return await expense.save();
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error creating expense');
  }
};

 const getAllExpenses = async (userId: string): Promise<IExpense[]> => {
  try {
    return await Expense.find({ userId }).sort({ date: -1 }); // Sorting expenses by date in descending order
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error fetching expenses');
  }
};

 const getExpenseById = async (expenseId: string, userId: string): Promise<IExpense | null> => {
  try {
    return await Expense.findOne({ _id: expenseId, userId });
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error fetching expense');
  }
};

 const updateExpense = async (
    expenseId: string,
    updateData: Partial<IExpense>
  ): Promise<IExpense | null> => {
    try {
      const updatedExpense = await Expense.findOneAndUpdate(
        { _id: expenseId }, // Filter to find the expense by ID
        updateData,         // Update data
        { new: true }       // Return the updated document
      );
  
      if (!updatedExpense) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
      }
  
      return updatedExpense;
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error updating expense');
    }
  };
  

 const deleteExpense = async (expenseId: string): Promise<IExpense | null> => {
  try {
    const deletedExpense = await Expense.findOneAndDelete({ _id: expenseId });
    if (!deletedExpense) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found');
    }
    return deletedExpense;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Error deleting expense');
  }
};

export const ExpenseService = {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
