import React from "react";
var CryptoJS = require("crypto-js");

export const Encryptpayload = (data, key) => {
  // this function will take the two parameters (key and data) and encrypt the data
  return CryptoJS.AES.encrypt(data, key).toString();
};

export const DecryptpayLoad = (ciphertext, key) => {
  // this function will take the two parameters (key and ciphertext) and return decrypted data
  var bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
