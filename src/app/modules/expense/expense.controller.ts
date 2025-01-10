import { RequestHandler } from 'express-serve-static-core'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { ExpenseService } from './expense.service'

const createExpense: RequestHandler = catchAsync(async (req, res, next) => {
  try {
    const { ...data } = req.body
    const newExpense = await ExpenseService.createExpense(data)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Expenses created successfully',
      data: newExpense,
    })
  } catch (err) {
    next(err)
  }
})

const getExpenses = catchAsync(async (req: Request, res: Response) => {
  const user = req.user
  const result = await ExpenseService.getAllExpenses(user)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expenses retrieved successfully !',
    data: result,
  })
})
const updateExpense = catchAsync(async (req: Request, res: Response) => {
  const ExpenseId = req.params.id
  const updateData = req.body;
  const result = await ExpenseService.updateExpense(ExpenseId,updateData)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expenses retrieved successfully !',
    data: result,
  })
})
const deleteExpense = catchAsync(async (req: Request, res: Response) => {
  const ExpenseId = req.params.id
  const result = await ExpenseService.deleteExpense(ExpenseId)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expenses retrieved successfully !',
    data: result,
  })
})

export const expenseController = {
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense
}
