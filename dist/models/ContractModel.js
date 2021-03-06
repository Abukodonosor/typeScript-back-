"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var DB_1 = require("./DB");
var Contract = /** @class */ (function (_super) {
    __extends(Contract, _super);
    function Contract(title, company, price_year, user_id, id) {
        if (user_id === void 0) { user_id = null; }
        if (id === void 0) { id = null; }
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.company = company;
        _this.price_year = price_year;
        _this.user_id = user_id;
        _this.id = id;
        return _this;
    }
    Contract.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (_this.id == undefined)
                            _this.insertNew();
                        else
                            _this.updateExisting();
                        resolve(true);
                    })];
            });
        });
    };
    Contract.prototype.insertNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = [this.title, this.company, this.price_year, this.user_id];
                return [2 /*return*/, new Promise(function (resolve) {
                        DB_1.DB.conn.query("INSERT INTO " + Contract.tableName + " (title, company_name, price_year, user_id) VALUES (?,?,?,?)", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    ;
    Contract.prototype.updateExisting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                params = [this.title, this.company, this.price_year, this.id];
                return [2 /*return*/, new Promise(function (resolve) {
                        DB_1.DB.conn.query("UPDATE " + Contract.tableName + " SET title = ?, company_name = ?, price_year = ? WHERE id = ?", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    ;
    //static functions
    Contract.takeAll = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            var _this = this;
            return __generator(this, function (_a) {
                params = [user.id];
                result = [];
                return [2 /*return*/, new Promise(function (resolve) {
                        DB_1.DB.conn.query("SELECT * FROM " + _this.tableName + " WHERE user_id = ?", params, function (err, rows) {
                            if (err)
                                throw err;
                            if (rows.length) {
                                for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                                    var row = rows_1[_i];
                                    result.push(new Contract(row.title, row.company_name, row.price_year, row.user_id, row.id));
                                }
                            }
                            resolve(result);
                        });
                    })];
            });
        });
    };
    Contract.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = [id];
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.conn.query("SELECT * FROM " + Contract.tableName + " WHERE id = ?", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve({
                                title: rows[0].title,
                                company: rows[0].company_name,
                                price_year: rows[0].price_year,
                                user_id: rows[0].user_id,
                                id: rows[0].id
                            });
                        });
                    })];
            });
        });
    };
    Contract.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            var _this = this;
            return __generator(this, function (_a) {
                params = [id];
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.conn.query("DELETE FROM " + Contract.tableName + " WHERE id = ?", params, function (err, rows) {
                            if (err)
                                throw err;
                            resolve(true);
                        });
                    })];
            });
        });
    };
    //name of table in our DB
    Contract.tableName = 'contract';
    return Contract;
}(DB_1.DB));
exports.Contract = Contract;
