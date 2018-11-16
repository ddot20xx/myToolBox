<template>
    <div class="hello">
        <barChart title="ggg" age='32' :componentData="barData"></barChart>
    </div>
</template>

<script>
import barChart from './barChart'
import bar from './bar'

export default {
    name: 'HelloWorld',
    data () {
        return {
            barData: {
                // select options
                selectOption:
                    [{
                      value: '选项1',
                      label: '黄金糕'
                    }, {
                      value: '选项2',
                      label: '双皮奶'
                    }, {
                      value: '选项3',
                      label: '蚵仔煎'
                    }, {
                      value: '选项4',
                      label: '龙须面'
                    }, {
                      value: '选项5',
                      label: '北京烤鸭'
                    }],
                selectFlag: true,
                // chart id
                chartId: 'barChart1',
                // chart option data
                chartOption: {
                    // title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["2012年","2013年","2014年","2015年","2016年","2017年"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [123, 205, 368, 457, 552, 720]
                    }]
                }
            }
        }
    },
    components: {
        barChart,
        bar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
