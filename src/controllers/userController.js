"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.deleteUser = exports.deleteAllUsers = exports.loadUsers = void 0;
var db_1 = require("../services/db");
var axios_1 = require("axios");
var loadUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, users, db, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get('https://jsonplaceholder.typicode.com/users')];
            case 1:
                response = _a.sent();
                users = response.data;
                db = (0, db_1.getDb)();
                return [4 /*yield*/, db.collection('users').insertMany(users)];
            case 2:
                _a.sent();
                res.status(200).send();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(500).send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.loadUsers = loadUsers;
var deleteAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                db = (0, db_1.getDb)();
                return [4 /*yield*/, db.collection('users').deleteMany({})];
            case 1:
                _a.sent();
                res.status(200).send();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteAllUsers = deleteAllUsers;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, db, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userId = parseInt(req.params.userId);
                db = (0, db_1.getDb)();
                return [4 /*yield*/, db.collection('users').deleteOne({ id: userId })];
            case 1:
                _a.sent();
                res.status(200).send();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).send(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, db, user, posts, comments_1, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                userId = parseInt(req.params.userId);
                db = (0, db_1.getDb)();
                return [4 /*yield*/, db.collection('users').findOne({ id: userId })];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 4];
                return [4 /*yield*/, db.collection('posts').find({ userId: userId }).toArray()];
            case 2:
                posts = _a.sent();
                return [4 /*yield*/, db.collection('comments').find({ postId: { $in: posts.map(function (post) { return post.id; }) } }).toArray()];
            case 3:
                comments_1 = _a.sent();
                user.posts = posts.map(function (post) { return (__assign(__assign({}, post), { comments: comments_1.filter(function (comment) { return comment.postId === post.id; }) })); });
                res.status(200).json(user);
                return [3 /*break*/, 5];
            case 4:
                res.status(404).send('User not found');
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_4 = _a.sent();
                res.status(500).send(error_4);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, db, existingUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                user = req.body;
                db = (0, db_1.getDb)();
                return [4 /*yield*/, db.collection('users').findOne({ id: user.id })];
            case 1:
                existingUser = _a.sent();
                if (!existingUser) return [3 /*break*/, 2];
                res.status(409).send('User already exists');
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, db.collection('users').insertOne(user)];
            case 3:
                _a.sent();
                res.status(201).send();
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_5 = _a.sent();
                res.status(500).send(error_5);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
