
/**
 * Save data on storage
 * @param {string} key – save on storage based on a key 
 * @param {string} value – object data to store 
 */
function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * Load data on storage
 * @param {string} key – load from storage based on a key 
 * @returns {any} stored object data
 */
function load(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);  
} 

/**
 * delete data on storage
 * @param {string} key – delete object based on a key   
 */
function remove(key) {
    localStorage.removeItem(key);
}

export {
    save, load, remove
}