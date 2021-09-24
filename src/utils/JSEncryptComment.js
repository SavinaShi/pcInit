import JSEncrypt from 'jsencrypt/bin/jsencrypt'
//JSEncrypt加密方法
export const encryptedData = (publicKey, data) => {
    //new一个对象
    let encrypt = new JSEncrypt()
    //设置公钥
    encrypt.setPublicKey(publicKey)
    //password是要加密的数据,此处不用注意+号,因为rsa自己本身已经base64转码了,不存在+,全部是二进制数据
    let result = encrypt.encrypt(data)
    return result
};
//JSEncrypt解密方法
export const decryptData = (publicKey, data) => {
    // 新建JSEncrypt对象
    let decrypt = new JSEncrypt()
    // 设置私钥
    decrypt.setPrivateKey(publicKey)
    // 解密数据
    let result = decrypt.decrypt(data)
    return result
};