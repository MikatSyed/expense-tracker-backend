"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = exports.deleteExpense = exports.updateExpense = exports.getExpenseById = exports.getAllExpenses = exports.createExpense = void 0;
const http_status_1 = __importDefault(require("http-status"));
const expense_model_1 = __importDefault(require("./expense.model"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const createExpense = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expense = new expense_model_1.default(data);
        return yield expense.save();
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Error creating expense');
    }
});
exports.createExpense = createExpense;
const getAllExpenses = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield expense_model_1.default.find({ userId }).sort({ date: -1 }); // Sorting expenses by date in descending order
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Error fetching expenses');
    }
});
exports.getAllExpenses = getAllExpenses;
const getExpenseById = (expenseId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield expense_model_1.default.findOne({ _id: expenseId, userId });
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Error fetching expense');
    }
});
exports.getExpenseById = getExpenseById;
const updateExpense = (expenseId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedExpense = yield expense_model_1.default.findOneAndUpdate(updateData, { new: true } // Return the updated document
        );
        if (!updatedExpense) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Expense not found');
        }
        return updatedExpense;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Error updating expense');
    }
});
exports.updateExpense = updateExpense;
const deleteExpense = (expenseId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedExpense = yield expense_model_1.default.findOneAndDelete({ _id: expenseId, userId });
        if (!deletedExpense) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Expense not found');
        }
        return deletedExpense;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Error deleting expense');
    }
});
exports.deleteExpense = deleteExpense;
exports.ExpenseService = {
    createExpense: exports.createExpense,
    getAllExpenses: exports.getAllExpenses,
    getExpenseById: exports.getExpenseById,
    updateExpense: exports.updateExpense,
    deleteExpense: exports.deleteExpense,
};
