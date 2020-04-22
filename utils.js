// 格式化时间
function formatTime(date) {
    h = '' + date.getHours()
    m = '' + date.getMinutes()
    s = '' + date.getSeconds()
    h = h.length > 1 ? h : '0' + h
    m = m.length > 1 ? m : '0' + m
    s = s.length > 1 ? s : '0' + s
    return `${h}:${m}:${s}`
}

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


// 点击按钮开始倒计时，倒计时期间按钮无法被点击，结束后可以被点击
var btn = document.querySelector('#btn1')        

var cutdown = function(count) {
    if (count === 0) {
        btn.disabled = false
    } else {
        setTimeout(function() {
            count -= 1
            btn.innerHTML = '同意 (' + count + ')'
            cutdown(count)
        }, 1000)
    }            
}

btn.addEventListener('click', function() {
    this.disabled = true
    let count = 6
    this.innerHTML = '同意 (' + count + ')'
    cutdown(count)
})

// 复选框的全选和取消功能
var cs = document.querySelectorAll('.checkbox')
var checkall = document.querySelector('.checkAll')

checkall.addEventListener('click', function() {
    if (checkall.checked === true) {
        for (var i = 0; i < cs.length; i++) {
            var c = cs[i]
            c.checked = true
        }
    } else {
        for (var i = 0; i < cs.length; i++) {
            var c = cs[i]
            c.checked = false
        }
    }
})


function getDuplicateInArray(array) {
    var o = {};
    var result = [];

    array.forEach(function (item) {
        if(!o[item]) {
            o[item] = 0
        }
        o[item] += 1
    })

    for (var prop in o) {
       if(o[prop] >= 2) {
           result.push(prop)
       }
    }
    
    return result
}

// node.js 加密
var hash_md5 = function(value) {
    var crypto = require('crypto')
    var md5 = crypto.createHash('md5')
    var hash = md5.update(value).digest('hex')
    return hash
}


// 处理 size 中的数组
const flatArray2Object = function (item) {
	const data = {};
	item.forEach((value, index) => {
		data[index.toString()] = value;
	})
	return data;
}

const normalize = function (item) {
	const sizes = item.sizes;
	Object.keys(sizes).forEach((key) => {
		let value = sizes[key];
		if (Array.isArray(value)) {
			value = flatArray2Object(value);
		}
		sizes[key] = value;
	});
	item.sizes = sizes;
	return item;
};

Object.keys(response).map((id) => {
	response[id] = normalize(response[id]);
});

console.info(JSON.stringify(response, undefined, 2));
