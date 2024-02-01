import CryptoJS from 'crypto-js';

// Constants
import { ENCRYPT } from '@constants/environments.constant';

const ENCRYPT_KEY = ENCRYPT.key; // length: 22
const ENCRYPT_IV = ENCRYPT.iv; // length: 22
const ENCRYPT_KEY_SIZE = ENCRYPT.keySize; // size: 32

/**
 * Encriptar la información.
 * @param payload Información a guardar.
 * @return Información encrypt.
 */
const encryptHelper = <T>(payload: T): string => {
	const payloadString = JSON.stringify(payload);

	const key = CryptoJS.enc.Base64.parse(ENCRYPT_KEY);
	const iv = CryptoJS.enc.Base64.parse(ENCRYPT_IV);
	const keySize = CryptoJS.enc.Base64.parse(ENCRYPT_KEY_SIZE);

	const payloadEncrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(payloadString), key, {
		keySize,
		iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	});

	return payloadEncrypted.toString();
};

/**
 * Obtener el payload de la información encrypt.
 * @param encrypt String a desencriptar.
 * @return Información desencrypt.
 */
const desencryptHelper = <T>(encrypt: string): T | undefined => {
	if (encrypt.trim() === '') {
		return;
	}

	try {
		const key = CryptoJS.enc.Base64.parse(ENCRYPT_KEY);
		const iv = CryptoJS.enc.Base64.parse(ENCRYPT_IV);
		const keySize = CryptoJS.enc.Base64.parse(ENCRYPT_KEY_SIZE);

		const bytes = CryptoJS.AES.decrypt(encrypt, key, {
			keySize,
			iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7,
		});

		const payloadJSON = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

		return payloadJSON;
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(err);
	}
};

export { encryptHelper, desencryptHelper };
