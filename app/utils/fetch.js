export function fetchGET(url, options = {}) {
    return fetch(url, options);
}

export function fetchPOST(url, options = {}) {
    let opt = Object.assign({
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        }}, options);

    return fetch(url, opt);
}