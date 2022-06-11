const { arrayContaining } = require("expect");

// Code your solution here
function findMatching (driver, name) {
    return driver.filter(function(newDriver){
        return newDriver.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch (drivers, string) {
    return drivers.filter(function(newDriver){
        return newDriver.slice(0, 1) === string.slice(0,1)
    })
}
function matchName( driver, name) {
    return driver.filter(function(driver){
        return driver.name === name
    })
}