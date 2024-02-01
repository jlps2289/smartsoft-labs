// Helpers
import { desencryptHelper, encryptHelper } from '@helpers/encrypt.helper';

/** Llaves del storage. */
const keys: StorageKeys = {
	token: encryptHelper('token'),
	session: encryptHelper('session'),
};

const storage = sessionStorage;

/**
 * Save info in storage.
 * @param key Name key.
 * @param payload Info to save.
 */
const setItem = <T = unknown>(key: string, payload: T) => storage.setItem(key, encryptHelper(payload));

/**
 * Get info to storage.
 * @param key Name key.
 * @return Info.
 */
const getItem = <T>(key: string): T | undefined => {
	const PAYLOAD_ENCRYPT = storage.getItem(key);
	if (PAYLOAD_ENCRYPT == null || PAYLOAD_ENCRYPT.trim() === '') {
		return;
	}
	return desencryptHelper<T>(PAYLOAD_ENCRYPT);
};

/**
 * Remove item to storage.
 * @param key Name key.
 */
const removeItem = (key: string) => storage.removeItem(key);

/** Clear storage. */
const clearStorage = () => storage.clear();

const encryptStorage = {
	setItem,
	getItem,
	removeItem,
};

// #region  Interfaces

type StorageKeys = {
	token: string;
	session: string;
};

// #endregion

export { keys, encryptStorage, setItem, getItem, removeItem, clearStorage };
