export default {
  name: '环图',
  type: 'ring',
  data: {
    base: {
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1月1日', '余额': 123, '年龄': 3 },
          { '日期': '1月2日', '余额': 1223, '年龄': 6 },
          { '日期': '1月3日', '余额': 2123, '年龄': 9 },
          { '日期': '1月4日', '余额': 4123, '年龄': 12 },
          { '日期': '1月5日', '余额': 3123, '年龄': 15 },
          { '日期': '1月6日', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {}
    },
    properties: [
      {
        name: 'dimension',
        intro: '维度',
        type: 'string',
        example: '\'余额\'',
        remark: '默认columns第一项为维度'
      },
      {
        name: 'metrics',
        intro: '指标',
        type: 'string',
        example: '\'年龄\'',
        remark: '默认columns第二项为指标'
      },
      {
        name: 'dataType',
        intro: '环图数据类型',
        type: 'string',
        example: '\'KMB\'',
        remark: '可选值: KMB, normal, percent'
      },
      {
        name: 'legendLimit',
        intro: 'legend显示数量限制',
        type: 'number',
        example: '2',
        remark: 'legend数量过多会导致环图样式错误，限制legend最大值并且当超过此值时隐藏legend可以解决这个问题'
      },
      {
        name: 'selectedMode',
        intro: '选中模式',
        type: 'string',
        example: '\'single\'',
        remark: '可选值：single, multiple，默认为false'
      },
      {
        name: 'hoverAnimation',
        intro: '是否开启 hover 在扇区上的放大动画效果',
        type: 'Boolean',
        example: 'true',
        remark: '默认值为true'
      },
      {
        name: 'radius',
        intro: '环图外半径与内半径',
        type: 'array',
        example: '[100, 10]',
        remark: ''
      },
      {
        name: 'offsetY',
        intro: '纵向偏移量',
        type: 'number',
        example: '200',
        remark: ''
      }
    ]
  }
}
