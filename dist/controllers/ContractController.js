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
var BaseController_1 = require("./BaseController");
var UserModel_1 = require("../models/UserModel");
var ContractModel_1 = require("../models/ContractModel");
var loginMiddleware_1 = require("../middlewares/loginMiddleware");
/**
 * Controller Index
 */
var ContractController = /** @class */ (function (_super) {
    __extends(ContractController, _super);
    /**
     * Constructor
     */
    function ContractController() {
        return _super.call(this) || this;
    }
    ContractController.create = function (router) {
        //log
        console.log("[ContractController::create] Creating ContractController route:");
        //contract view and logic
        router.get("/addContract", loginMiddleware_1.AuthenticationMiddleware.isAuth, function (req, res, next) {
            new ContractController().contractView(req, res, next);
        });
        router.post("/addContract", loginMiddleware_1.AuthenticationMiddleware.isAuth, function (req, res, next) {
            new ContractController().contractLogic(req, res, next);
        });
        //edit contract and logic
        router.get("/editContract/:id", loginMiddleware_1.AuthenticationMiddleware.isAuth, function (req, res, next) {
            new ContractController().contractViewEdit(req, res, next);
        });
        router.post("/editContract", loginMiddleware_1.AuthenticationMiddleware.isAuth, function (req, res, next) {
            new ContractController().contractLogicEdit(req, res, next);
        });
        router.get("/deleteContract/:id", loginMiddleware_1.AuthenticationMiddleware.isAuth, function (req, res, next) {
            new ContractController().deleteContract(req, res, next);
        });
        // add more routes
    };
    ContractController.prototype.index = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                //set custom title
                this.title = "Show login page";
                options = {
                    "message": "Lets freak out",
                };
                //render template
                this.render(req, res, "index", options);
                return [2 /*return*/];
            });
        });
    };
    ContractController.prototype.contractView = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                //set custom title
                this.title = "Show new contract page";
                options = {
                    "message": "",
                };
                //render template
                this.render(req, res, "contract", options);
                return [2 /*return*/];
            });
        });
    };
    ContractController.prototype.contractLogic = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var title, company, year_price, contract, user, contracts, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //set custom title
                        this.title = "Logic to save new contract";
                        title = req.body.title;
                        company = req.body.company;
                        year_price = req.body.year_price;
                        contract = new ContractModel_1.Contract(title, company, year_price, req.session.userId);
                        return [4 /*yield*/, contract.save()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, UserModel_1.User.findById(req.session.userId)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, ContractModel_1.Contract.takeAll(user)];
                    case 3:
                        contracts = _a.sent();
                        options = {
                            "user": user,
                            "contracts": contracts
                        };
                        //render template
                        this.render(req, res, "home", options);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractController.prototype.contractViewEdit = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var contract_id, contract, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //set custom title
                        this.title = "EDIT contract page";
                        contract_id = req.params.id;
                        return [4 /*yield*/, ContractModel_1.Contract.findById(contract_id)];
                    case 1:
                        contract = _a.sent();
                        options = {
                            "contract": contract,
                        };
                        //render template
                        this.render(req, res, "contractEdit", options);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractController.prototype.contractLogicEdit = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var title, company, year_price, id, contract, user, contracts, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //set custom title
                        this.title = "EDIT LOGIC contract page";
                        title = req.body.title;
                        company = req.body.company;
                        year_price = req.body.year_price;
                        id = req.body.id;
                        contract = new ContractModel_1.Contract(title, company, year_price, req.session.userId, id);
                        return [4 /*yield*/, contract.updateExisting()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, UserModel_1.User.findById(req.session.userId)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, ContractModel_1.Contract.takeAll(user)];
                    case 3:
                        contracts = _a.sent();
                        options = {
                            "user": user,
                            "contracts": contracts
                        };
                        //render template
                        this.render(req, res, "home", options);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContractController.prototype.deleteContract = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var contract_id, contract, user, contracts, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //set custom title
                        this.title = "Delete contract";
                        contract_id = req.params.id;
                        return [4 /*yield*/, ContractModel_1.Contract.deleteById(contract_id)];
                    case 1:
                        contract = _a.sent();
                        return [4 /*yield*/, UserModel_1.User.findById(req.session.userId)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, ContractModel_1.Contract.takeAll(user)];
                    case 3:
                        contracts = _a.sent();
                        options = {
                            "user": user,
                            "contracts": contracts
                        };
                        //render template
                        this.render(req, res, "home", options);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ContractController;
}(BaseController_1.BaseController));
exports.ContractController = ContractController;
