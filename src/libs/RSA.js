import crypto from 'crypto';

export const publicEncrypt = (publicKey, encryptStr) => {
  return crypto.publicEncrypt(publicKey, Buffer.from(encryptStr)).toString('base64');
};
