import http from "@config/axios";
import { baseURL } from "./config/baseUrl";

Vue.prototype.$http = http;
Vue.prototype.$baseURL = baseURL;