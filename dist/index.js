"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json('wow');
});
const DB = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
];
app.get('/courses', (req, res) => {
    let foundCurses = DB;
    if (req.query.search) {
        foundCurses = DB.filter(({ name }) => name.includes(req.query.search));
    }
    res.status(200).json(foundCurses);
});
app.get('/courses/:id', (req, res) => {
    const requestedCourse = DB.find((c) => c.id === +req.params.id);
    if (!requestedCourse) {
        res.status(404).send('no course found');
        return;
    }
    res.status(200).json(requestedCourse);
});
app.post('/courses', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400);
        return;
    }
    const newCourse = { id: +new Date(), name };
    DB.push(newCourse);
    res.status(201).json(newCourse);
});
app.listen(port, () => {
    console.log('Server launched');
});
