1. 安装并创建项目

    安装 vue-cli: `npm install -g @vue/cli`

    拉取旧版本，并创建一个项目：
    ```
        npm install -g @vue/cli-init
        # `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
        vue init webpack my-project
    ```

2. 启动

    ```
        cd my-project
        npm start / npm run dev
    ```

3. 工程目录

4. 模板语法

4.1 {{ 变量名 }} 只能存在单行语句
4.2 v-once  v-html  v-bind  v-bind的简写(:)
4.3 v-if    v-show

> v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

> v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

> 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

> 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

4.4 v-for: value    (index, value)  (value, key, index)

    注意 :key=index 添加到标签中


5. 事件

5.1 `v-on:click="event function name"`
    其简写为: `@click="event function name"`
    函数中可以改变 data 中的值。`this.name = value`。数据改变引起视图变化。

5.2 参数传递
    标签和函数定义中添加：(参数) / (参数, $event)

5.3 向数组中添加数据项
    `this.arrName.push()`
    其支持：push()、pop()、shift()、unshift()、append()等。
    cancat() 数组合并。

**变异方法**：改变原数组，可以引起页面更新；不改变原数组，则视图不更新。

6. 计算属性

> 可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

7. style 和 class 的绑定 (v-bind 或简写 : )

'className' = classname
'className' = boolean
className = classname  // 前面是对象
'className1' = classname1, 'className2' = classname2  // 绑定多个

绑定的形式可以是字符串、变量、 对象、 数组。

8. 表单输入绑定

绑定：v-model="变量名"

显示: {{ 变量名 }}

在显示中添加样式，支持多行输出：`style="white-space: pre-line;"`

绑定表单输入的修饰符

.lazy 改变为 change 事件绑定； .number 自动将用户的输入值转为数值类型（v-model.number="age"） .trim  自动过滤用户输入的首尾空白字符。

watch: 监听事件(实时监听数据变化)。和计算属性的比较，优先使用计算属性。

9. 组件

style 标签中添加 scoped 指定 css样式只在当前组件中有效。

10. 组件传递数据（组件间通信）

父传子：props
子传父：emit事件 -- $emit(key, value) 其中 key 是父组件需要自定义事件的名称，value 是子组件要传递的数据。

11. 动态组件

v-bind:is=""

keep-alive

12. props 父组件向子组件传递数据

传递单个值、 多个值[]、对象（传递值的类型检测）。

可以指定传递值的默认值(default)或者必须值(required: true)。如果默认值是数组或者对象，必须返回一个函数。

13. 处理边界情况

$root: 访问根实例中的数据；

$parent: 访问父组件中的数据。

> 如果可能，尽量不这样读取数据。以做到组件间的低耦合。

14. 访问子组件实例或子元素(操作原生 DOM )

一般情况下不需要操作原生 DOM，改变属性可以用 v-bind; 改变值可以用数据传递；但如需操作时，可以用 ref="value", 然后

```
mounted: {
    this.$refs.value // 即为绑定的原生 DOM 元素
}
```
> audio 标签有一些隐藏属性，如 currentTime 等，或 input 标签的值，可以使用 ref 来操作。


15. **插槽**（内容分发的功能）：即传递的内容在组件中添加。
<slot></slot>
**具名插槽**，插槽的默认值。
**编译作用域**：在哪个组件定义，就在哪个组件中编译。

**作用域插槽**：内容展示由父组件传递给子组件(UI由父组件传递给子组件)，UI 上要显示的内容由子组件决定。`slot-scope="name"`, `{{ name.value }}`显示子组件传递过来的内容。


16. 生命周期

**创建、渲染、 更新、 消毁**四个阶段分别前后共8个位置。

17. 动画：有四种方法，CSS 两种（常用）；JS (不常用)。
在进入/离开的过渡中，会有 6 个 class 切换。

v-enter  v-enter-active  v-enter-to  v-leave     v-leave-active  v-leave-to

**CSS 动画也分两种：一种自定义，另一种是使用 Animate 库。** 写法固定如下 ：

```
<button @click="show = !show">
    Toggle render
</button>
<transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello</p>
</transition>
```

> www.swiper.com.cn 工具网站。
> 引入动画要脱离文档流。

18. 自定义指令

在 main.js 中自定义全局指令
```
Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
    })
```
使用时用`v-focus`。

> 效果如页面打开时输入框自动获取焦点。

定义局部指令：组件中 directives: {}

```
directives: {
    inserted: function (el) {
        el.focus()
    }
}
```

19. 过滤器

同上面的局部指令, 在组件中添加 filters:{} 部分。

20. Axios: 替代 vue-resource。
    
    Axios 基于 promise 的 HTTP 库

    安装: cnpm install axios

    使用: 
    ```
    import Axios from 'axios'

    Vue.prototype.$axios = Axios

    // 组件中使用 GET 请求
    mounted () {
        this.$axios.get(url)
        .then (res => {
            console.log(res.data)
        })
        .catch (error => {
            console.log(error)
        })
        // GET 带参数
        this.$axios.get(url， {
            params: {
                type: 'lala',
                count: 30
            }
        })
        .then (res => {
            console.log(res.data)
        })
        .catch (error => {
            console.log(error)
        })
    }

    // POST 请求
    
    import qs from 'qs' // qs 解决参数格式转码问题。 ?name=lala&age=20 => { name:lala, age:20 }

    mounted () {
        this.$axios.psot(url， qs.stringify({
            user_id: 'lalal',
            password: 'dfsaf'
        }))
        .then (res => {
            console.log(res.data)
        })
        .catch (error => {
            console.log(error)
        })
    }
```

21. axios 全局配置

在 main.js 中全局配置： 参见官网文档

跨域在 webpack 中配置。

**拦截器**： 在发送请求前和接收数据前做判断，比如发送数据前判断数据是否有问题，接收数据前先判断数据是否符合预期，符合再接收。

拦截器只有两个。在 main.js 中：
```
// 请求拦截器, 比如post请求中需要对参数进行处理，如果请求较多可以放在请求拦截器中处理
Axios .interceptors.request.use(function (config) {
    if (config.method === 'post') {
        confog.data = qs.stringify(config.data)
    }
    return config
}, function (error) {
    return Promise.reject(error)
    })

// 响应拦截器
Axios.interceptors.response.use(function (response) {
    // console.log(response) 
    if (!response.data) {
        return {
            msg: '数据错误'
        }
    } 
    return response
}, function (error) {
    return Promise.reject(error)
})
```

