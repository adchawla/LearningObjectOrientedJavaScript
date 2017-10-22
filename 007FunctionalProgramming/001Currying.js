/*jshint esversion: 6 */
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {
        //console.log(request.responseText);
        (request.status === 200) ?
            resolves(JSON.parse(request.responseText).results) :
            reject(Error(request.statusText));
    }
    request.onerror = (err) => rejects(err);
    request.send();
});
const userLogs = userName => message =>
    console.log(`${userName} -> ${message}`)

const log = userLogs("grandpa23")

log("attempted to load 20 fake members")
getFakeMembers(20)
    .then(members => log(`successfully loaded ${members.length} members`))
    .catch(error => log("encountered an error loading members"));
