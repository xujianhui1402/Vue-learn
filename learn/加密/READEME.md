```
import CryptoJS from 'crypto-js'

const keyStr = 'encode@z#h^y!l.$'
const ivStr = 'decode@z#h^y!l.$'
  /**
   * 参考https://blog.csdn.net/qq_38689395/article/details/115715761,对称加密DES AES，但是加密后出现转义字符导致无法正常存储
   * @param {*} data 
   * @param {*} keyS 
   * @param {*} ivS 
   * @returns 
   */
   encrypt(data, keyS, ivS) {
    let key = keyS || keyStr
    let iv = ivS || ivStr
    key = CryptoJS.enc.Utf8.parse(key)
    iv = CryptoJS.enc.Utf8.parse(iv)
    const src = CryptoJS.enc.Utf8.parse(data)
    return CryptoJS.DES.encrypt(src, key, {
      iv: iv, // 初始向量
      mode: CryptoJS.mode.CBC, // 加密模式
      padding: CryptoJS.pad.Pkcs7, // 填充方式
    }).toString()
  },
  
  decrypt(data, keyS, ivS) {
    let key = keyS || keyStr
    let iv = ivS || ivStr
    key = CryptoJS.enc.Utf8.parse(key)
    iv = CryptoJS.enc.Utf8.parse(iv)
    return CryptoJS.DES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8)
  },
```