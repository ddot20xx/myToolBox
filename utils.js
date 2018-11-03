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

// 批量绑定事件
var btns = document.querySelectorAll('.radio-button')
for (var i = 0; i < btns.length; i++) {
    var b = btns[i]
    b.addEventListener('click', function(event) {
        var self = event.target
        clearActive()
        self.classList.add('active')
    })
}

//先删除现有的，再添加新的
var clearActive = function() {
    var s = document.querySelector('.active')
    if (s != null) {
        s.classList.remove('active')
    }
}

// 2. 同步滚动
// 同步滚动功能实际上非常简单，只要监听 Editor 和 Viewer 的滚动事件，每次一个滚动的时候改变另一个的滚动轴，使得它们的百分比一样。
var $divs = $('textarea#editor, div#preview');
var sync = function(e){
   var $other = $divs.not(this).off('scroll')
   other = $other.get(0);
   var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
   other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
   setTimeout( function(){
       $other.on('scroll', sync );
   }, 200);
}
$divs.on('scroll', sync);



// 同步滚动二
var divs = $('#editor, #preview')
var sync = function(e){
    var others = divs.not(this).off('scroll')
    var other = others[0]
    var p = this.scrollHeight - this.scrollTop
    other.scrollTop = other.scrollHeight - p
    setTimeout( function() {
        others.on('scroll', sync )
    }, 200)
}
divs.on('scroll', sync)
})
