const express = require("express");
const cors = require("cors");
const i18next_express_middleware_1 = require("i18next-express-middleware");
const routes_1 = require("./routes");
const locale_1 = require("./utils/locale");
const path = require("path");
const PORT = process.env.PORT || 3000;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    let artsStatic, clientStatic, app;
    return __generator(this, function (_a) {
        artsStatic = path.resolve(__dirname, '../arts/static');
        clientStatic = path.resolve(__dirname, '../client/static');
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
