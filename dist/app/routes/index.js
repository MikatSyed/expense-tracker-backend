"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_route_1 = require("../modules/expense/expense.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/expenses',
        route: expense_route_1.ExpenseRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
