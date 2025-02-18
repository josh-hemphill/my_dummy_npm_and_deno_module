"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.__esModule = true;
exports.createCat = exports.Cat = void 0;
var runExclusive = require("run-exclusive");
var runExclusive_1 = require("run-exclusive/lib/runExclusive");
var js_yaml_1 = require("js-yaml");
var ts_md5_1 = require("ts-md5");
var path = require("path");
var events_1 = require("events");
var dummyRender_1 = require("./dummyRender");
var lp = require("left-pad");
var hash_1 = require("./hash");
var dns = require("dns");
console.assert(dns !== null);
console.assert(runExclusive.buildMethod === runExclusive_1.buildMethod);
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "CAT";
        _this.color = "BLACK";
        _this.gender = "FEMALE";
        _this.size = "SMALL";
        _this.spell = runExclusive.buildMethod(function (alphabet, letter) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, Math.random() * 100); })];
                    case 1:
                        _a.sent();
                        alphabet[0] += letter;
                        return [2 /*return*/];
                }
            });
        }); });
        _this.spell2 = runExclusive_1.buildMethod(function (alphabet, letter) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, Math.random() * 100); })];
                    case 1:
                        _a.sent();
                        alphabet[0] += letter;
                        return [2 /*return*/];
                }
            });
        }); });
        return _this;
    }
    Cat.prototype.testJsYaml = function () {
        return js_yaml_1.load('hello: world');
    };
    Cat.prototype.testHash = function (type) {
        var input = "Hello World";
        switch (type) {
            case "md5": return ts_md5_1.Md5.hashStr(input);
            case "sha256": return hash_1.sha256(input);
            case "sha3": return hash_1.sha3_512(input);
        }
    };
    Cat.prototype.pathJoin = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return path.join.apply(path, args);
    };
    Cat.prototype.makeSound = function () {
        this.emit("sound", "meow");
    };
    Cat.prototype.dummyRender = function () {
        return dummyRender_1.dummyRender({ "foo": "Hello Isomorphic React" });
    };
    Cat.prototype.testLeftPadWith10 = function (str) {
        return lp(str, 10);
    };
    return Cat;
}(events_1.EventEmitter));
exports.Cat = Cat;
function createCat() {
    return {
        "type": "CAT",
        "color": "BLACK",
        "gender": "FEMALE",
        "size": "SMALL"
    };
}
exports.createCat = createCat;
