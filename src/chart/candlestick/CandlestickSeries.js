import * as zrUtil from 'zrender/src/core/util';
import SeriesModel from '../../model/Series';
import {seriesModelMixin} from '../helper/whiskerBoxCommon';

var CandlestickSeries = SeriesModel.extend({

    type: 'series.candlestick',

    dependencies: ['xAxis', 'yAxis', 'grid'],

    /**
     * @readOnly
     */
    defaultValueDimensions: [
        {name: 'open', defaultTooltip: true},
        {name: 'close', defaultTooltip: true},
        {name: 'lowest', defaultTooltip: true},
        {name: 'highest', defaultTooltip: true}
    ],

    /**
     * @type {Array.<string>}
     * @readOnly
     */
    dimensions: null,

    /**
     * @override
     */
    defaultOption: {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,

        hoverAnimation: true,

        // xAxisIndex: 0,
        // yAxisIndex: 0,

        layout: null, // 'horizontal' or 'vertical'

        itemStyle: {
            color: '#c23531', // 阳线 positive
            color0: '#314656', // 阴线 negative     '#c23531', '#314656'
            borderWidth: 1,
            // FIXME
            // ec2中使用的是lineStyle.color 和 lineStyle.color0
            borderColor: '#c23531',
            borderColor0: '#314656'
        },

        emphasis: {
            itemStyle: {
                borderWidth: 2
            }
        },

        barMaxWidth: null,
        barMinWidth: null,
        barWidth: null,

        large: true,
        largeThreshold: 600,

        progressive: 5e3,
        progressiveThreshold: 1e4,
        progressiveChunkMode: 'mod',

        animationUpdate: false,
        animationEasing: 'linear',
        animationDuration: 300
    },

    /**
     * Get dimension for shadow in dataZoom
     * @return {string} dimension name
     */
    getShadowDim: function () {
        return 'open';
    },

    brushSelector: function (dataIndex, data, selectors) {
        var itemLayout = data.getItemLayout(dataIndex);
        return itemLayout && selectors.rect(itemLayout.brushRect);
    }

});

zrUtil.mixin(CandlestickSeries, seriesModelMixin, true);

export default CandlestickSeries;
