"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const expense_controller_1 = require("./expense.controller");
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const router = express_1.default.Router();
router.get("/", expense_controller_1.expenseController.getExpenses);
router.post("/", expense_controller_1.expenseController.createExpense);
router.put("/:id", expense_controller_1.expenseController.updateExpense);
router.delete("/:id", expense_controller_1.expenseController.deleteExpense);
exports.ExpenseRoutes = router;
