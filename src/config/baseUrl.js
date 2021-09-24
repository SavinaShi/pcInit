// 接口请求地址
const httpObj = {
  // dev: "http://192.168.3.232:8001",
  dev: "https://uatapi.kaiboke.net",
  // sit: "https://test-starrai.3tilabs.com/cms",
  sit: "https://daniel.3tilabs.com/cms",
  test: "https://daniel.3tilabs.com/cms",
  // test: "https://test-starrai.3tilabs.com/cms",
  prd: "https://api.kaiboke.net",
  uat: "https://uatapi.kaiboke.net",
  'prd-sgp': "https://api.kaibo.ai",
  'uat_sgp': "https://uatapi.kaibo.ai",
  // 'prd-sgp': "https://asiaapi.kaiboke.net",
};
// 跳转Lazada登录回调地址
const httpNavObj = {
  // dev: "",
  dev: "ws://192.168.3.231:8001",
  sit: "https://daniel.3tilabs.com/cms",
  test: "https://daniel.3tilabs.com/cms",
  // sit: "https://test-starrai.3tilabs.com",
  // test: "https://test-starrai.3tilabs.com",
  uat: "https://uat.kaiboke.net",
  prd: "https://kaiboke.net",
  // 'prd-sgp': "https://www.kaibo.ai",
  'prd-sgp': "https://sg.kaibo.ai",
  // 'uat_sgp': "https://uatapi.kaibo.ai",
  // 'prd-sgp': "https://asia.kaiboke.net",

};

// sit: "https://daniel.3tilabs.com/cms",

const webSocketObj = {
  // dev: "ws://192.168.3.231:8001",
  // dev: "wss://api.kaiboke.net",
  // dev: "ws://192.168.5.51:8001", // 孟
  dev: "ws://192.168.3.231:8001", // 吕
  sit: "wss://test-starrai.3tilabs.com/cms",
  test: "wss://test-starrai.3tilabs.com/cms",
  uat: "wss://uatapi.kaiboke.net",
  prd: "wss://api.kaiboke.net",
  'prd-sgp': "wss://api.kaiboke.ai",
  // 'prd-sgp': "wss://asiaapi.kaiboke.net",
  'uat_sgp': "wss://uatapi.kaibo.ai",
  // prd: "wss://maybelline.3tilabs.com",
};

// 视频保存后缀
const videoPath = {
  dev: "",
  // dev: "?response-content-disposition=attachment",
  sit: "?response-content-disposition=attachment",
  test: "?response-content-disposition=attachment",
  uat: "?response-content-disposition=attachment",
  prd: "?response-content-disposition=attachment",
  'uat_sgp': "",
  'prd-sgp': "",
}
export const baseURL = httpObj[process.env.VUE_APP_STARRAI_ENV]; // 接口请求地址
export const baseNavURL = httpNavObj[process.env.VUE_APP_STARRAI_ENV]; // 跳转Lazada登录回调地址
export const publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvZysbYTdfhMfOqGyZuaIycjsEks2c5fP2Py3Ia8PyHbPurTx/rIWBRhqIG0M8Jfvrmkmn5uXMkN1w4LTLYpTrx835sCx2hPoMO+MKf14/U2LOiMlh5wNZcFG+gn5xS57weiR+Ty1GTIn141wSlnqIlXSNSJiSmKdxredPDc+iJQIDAQAB";
export const webSocketURL = webSocketObj[process.env.VUE_APP_STARRAI_ENV];

export const webvideoURL = videoPath[process.env.VUE_APP_STARRAI_ENV];
