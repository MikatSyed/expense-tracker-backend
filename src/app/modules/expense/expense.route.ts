import express from 'express'
import { expenseController } from './expense.controller'


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

const router = express.Router()

router.get("/", expenseController.getExpenses);
router.post("/", expenseController.createExpense);
router.put("/:id", expenseController.updateExpense);
router.delete("/:id", expenseController.deleteExpense);

export const ExpenseRoutes = router
