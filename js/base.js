import { OAuth2API, mix, urlEncode, verifyMany, load, conf } from "yonius";
import { AccountAPI } from "./context";
import { TokenAPI } from "./token";

const RIPE_WHITE_ADMIN_BASE_URL = "https://white-admin.platforme.com/api/";

export class API extends mix(OAuth2API).with(AccountAPI, TokenAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("RIPE_WHITE_ADMIN_BASE_URL", RIPE_WHITE_ADMIN_BASE_URL);
        this.token = conf("RIPE_WHITE_ADMIN_TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const auth = kwargs.auth === undefined ? true : kwargs.auth;
        delete options.kwargs.auth;
        if (auth) {
            options.headers["Authorization"] = `Bearer ${this.token}`;
        }
    }
}

export default API;
