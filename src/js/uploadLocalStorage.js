import { request } from "./dowloadContent.js";

const updateInterval = 60 * 60 * 1000; 

const setDataApiToLocalStorage = async () => {
    const dataApi = await request;
    localStorage.setItem("dataApiCountries", JSON.stringify(dataApi));
    localStorage.setItem("lastUpdateTimestamp", Date.now());
}

const getDatalocalStorage = () => {
    const data = localStorage.getItem("dataApiCountries");
    return data ? JSON.parse(data) : null;
}

const shouldUpdate = () => {
    const lastUpdateTimestamp = localStorage.getItem("lastUpdateTimestamp");
    if (!lastUpdateTimestamp) {
        return true;
    }
    const timeDifference = Date.now() - parseInt(lastUpdateTimestamp);
    return timeDifference >= updateInterval;
}

const updateData = async () => {
    if (shouldUpdate()) {
        await setDataApiToLocalStorage();
    }
}


updateData();
setInterval(updateData, updateInterval);


export {
    getDatalocalStorage
}
