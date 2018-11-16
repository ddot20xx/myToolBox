<template lang="html">
    <div id="">
        <div class="barComponent">
            <div class="selector" v-if="flag">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
            </div>

            <div class="back">返回</div>
            <div :id="id" :style="{width: '300px', height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "barchart",
    props: {
        componentData: Object,
    },
    data () {
        return {
            id: this.componentData.chartId,
            options: this.componentData.selectOption,
            value: '选项1',
            flag: this.selectFlag
        }
    },
    methods: {
        drawBar: function () {
            var id = this.componentData.chartId
            var option = this.componentData.chartOption
            let barChart = this.$echarts.init(document.getElementById(id))
            barChart.setOption(option)
        }
    },
    mounted () {
        this.drawBar()
        console.log('dd', this.selectFlag)
    }
}
</script>

<style scoped>
.barComponent {
    position: relative;
    width: 400px;
    height: 300px;
    outline: 1px solid red;
}
.back {
    position: absolute;
    top: 10px;
    right: 20px;
}
</style>
