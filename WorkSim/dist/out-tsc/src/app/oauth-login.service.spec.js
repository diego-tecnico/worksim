"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var oauth_login_service_1 = require("./oauth-login.service");
describe('OAuthLoginService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [oauth_login_service_1.OAuthLoginService]
        });
    });
    it('should be created', testing_1.inject([oauth_login_service_1.OAuthLoginService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=oauth-login.service.spec.js.map