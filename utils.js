var log = function() {
    console.log.apply(console, arguments)
}

var e = function(sel)　{
    return document.querySelector(sel)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var save = function(array) {
    var s = JSON.stringify(array)
    localStorage.content = s
}

var load = function() {
    var s = localStorage.content
    return JSON.parse(s)
}

// 日期格式化函数
var now = function() {
    var d = new Date()
    var y = d.getFullYear()
    var m = d.getMonth() + 1
    var day = d.getDate()
    var h = d.getHours()
    var f = d.getMinutes()
    var s = d.getSeconds()

    return `${y}/${m}/${day} ${h}:${f}:${s}`
}

var ajax = function(method, path, data, responseCallback) {
    var r = new XMLHttpRequest()
    r.open(method, path, true)
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            responseCallback(r)
        }
    }
    r.send(data)
}

var appendHtml = function(element, position='beforeend', html) {
    element.insertAdjacentHTML(position, html)
}

var bindEvent = function(element, event, callback) {
    element.addEventListener(event, callback)
}

// 用于测试
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}

// 用于测试是否相等
var ensureEqual = function(a, b, message) {
    if (a != b) {
        console.log(message, a, b)
    }
}

var testItem = function() {
    // 调用 ensure
}



