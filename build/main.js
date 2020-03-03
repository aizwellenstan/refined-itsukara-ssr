var express = require("express");
var cors = require("cors");
var i18next_express_middleware_1 = require("i18next-express-middleware");
var routes_1 = require("./routes");
var locale_1 = require("./utils/locale");
var path = require("path");
var PORT = process.env.PORT || 3000;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    let artsStatic, clientStatic, app;
    return __generator(this, function (_a) {
        artsStatic = path.resolve(__dirname, '../packages/arts/static');
        clientStatic = path.resolve(__dirname, '../packages/client/static');
        app = express()
            .use(cors())
            .use(express.static(artsStatic))
            .use(express.static(clientStatic))
            .use(i18next_express_middleware_1.handle(locale_1.createI18n()))
            .use(routes_1.routes);
        app.listen(PORT, function () {
            // eslint-disable-next-line no-console
            console.log('🎉 Server is running at ' + ("http://localhost:" + 3000));
        });
        return [2 /*return*/];
    });
}); })();
