function createWebService(baseUrl) {
    return new Proxy({}, {
        get(target, propKey, receiver) {
            return ()=> hget(baseUrl, propKey)
        }
    })
}

function hget(baseUrl, propKey) {
    return baseUrl + "/" + propKey
    //return () => httpGet(baseUrl+'/'+propKey)
}

const service = createWebService("http://example.com/get")
console.log(service.employees())
//service.employees() will trigger Proxy get function, and "employees" as propKey
//service.employees().then(json=>{const employees = JSON.parse(json})