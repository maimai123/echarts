define(function (require) {

    require('../../echarts').extendComponentModel({

        type: 'tooltip',

        defaultOption: {
            // 一级层叠，频繁变化的tooltip指示器在pc上独立一层
            zlevel: 1,

            // 二级层叠
            z: 8,

            show: true,

            // tooltip主体内容
            showContent: true,

            // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
            trigger: 'item',

            // If the tooltip follow the mouse position
            // TODO
            // followMouse: true,

            // 位置 {Array} | {Function}
            // position: null

            // 内容格式器：{string}（Template） ¦ {Function}
            // formatter: null
            // 数据孤岛内容格式器
            islandFormatter: '{a} <br/>{b} : {c}',

            // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            showDelay: 20,

            // 隐藏延迟，单位ms
            hideDelay: 100,

            // 动画变换时间，单位s
            transitionDuration: 0.4,

            enterable: false,

            // 提示背景颜色，默认为透明度为0.7的黑色
            backgroundColor: 'rgba(0,0,0,0.7)',

            // 提示边框颜色
            borderColor: '#333',

            // 提示边框圆角，单位px，默认为4
            borderRadius: 4,

            // 提示边框线宽，单位px，默认为0（无边框）
            borderWidth: 0,

            // 提示内边距，单位px，默认各方向内边距为5，
            // 接受数组分别设定上右下左边距，同css
            padding: 5,

            // 坐标轴指示器，坐标轴触发有效
            axisPointer: {
                // 默认为直线
                // 可选为：'line' | 'shadow' | 'cross'
                type: 'line',

                // type 为 line 的时候有效，指定 tooltip line 所在的轴，可选
                // 可选 'x' | 'y' | 'angle' | 'radius' | 'auto'
                // 默认 'auto'，会选择类型为 cateogry 的轴，对于双数值轴，笛卡尔坐标系会默认选择 x 轴
                // 极坐标系会默认选择 angle 轴
                axis: 'auto',

                // 直线指示器样式设置
                lineStyle: {
                    color: '#48b',
                    width: 2,
                    type: 'solid'
                },

                crossStyle: {
                    color: '#1e90ff',
                    width: 1,
                    type: 'dashed',

                    // TODO formatter

                    textStyle: {}
                },

                // 阴影指示器样式设置
                shadowStyle: {
                    color: 'rgba(150,150,150,0.3)',
                    width: 'auto',
                    type: 'default'
                }
            },
            textStyle: {
                color: '#fff'
            }
        }
    });
});