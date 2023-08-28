import { getRandomItem } from "./placesUtil";

export const storeInCache = (identifier,data) => {
    sessionStorage.clear()  // clear out existing items
    sessionStorage.setItem(identifier,JSON.stringify(data));
}

export const getFromCache = (identifier) => {
    const cacheData  = sessionStorage.getItem(identifier);
    const array = JSON.parse(cacheData)
    const item = getRandomItem(array)
    sessionStorage.clear()
    sessionStorage.setItem(identifier,JSON.stringify(array));
    return item;
}