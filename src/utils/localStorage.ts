export enum LocalStorageKeys {
	CardsMock = 'cardsMock',
}

export function saveToLocalStorage(key: LocalStorageKeys, value: any) {
	return localStorage.setItem(key, JSON.stringify(value))
}

export function getValueFromLocalStorage(key: LocalStorageKeys) {
	return JSON.parse(localStorage.getItem(key) || '{}')
}
