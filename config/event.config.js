'use strict';

module.exports = {
    project: {
        common: {
            name: '通用',
            event: {
                induction: '感应',
                Scan: '扫码',
                BaNfc: 'BA卡感应',
                openList: '打开列表',
                TP: '浏览时间',
                Click: '点击',
                Error: '错误',
            },
        },
        'bplus-product-detail': {
            name: '产品详情',
            event: {
                openProduct: '打开详情',
                selectSku: '查看sku',
                buyClick: '点击购买按钮',
            },
        },
        'bplus-quadrant-shelf': {
            name: '通用货架',
            event: {
                selectCommodity: '选择商品',
            },
        },
        'bplus-mask': {
            name: '面膜货架',
            event: {
                'switch-cd': '切换商品',
            },
        },
        'bplus-perfumeTest': {
            name: '香水测试',
            event: {
                start: '开始测试',
                finished: '完成测试',
                sendReport: '发送报告',
            },
        },
        'perfume-h5': {
            name: '香水H5',
            event: {
                reportEnter: '打开报告',
            },
        },
        'new-makeup': {
            name: '口红试妆',
            event: {
                startLipstickMakeup: '开始试妆',
                SyncCollectPhone: '同步到手机',
                balogin: 'BA登录',
                applyMakeup: '试妆',
                clickCollect: '收藏商品',
            },
        },
        'makeup-collect': {
            name: '试妆H5',
            event: {
                viewMakeupCollect: '打开手机收藏',
            },
        },
        'bplus-jewelry': {
            name: '首饰货架',
            event: {
                goTopic: '查看品牌',
            },
        },
        'bplus-guide': {
            name: '导览屏',
            event: {
                clickErea: '查看区域',
            },
        },
        'bplus-batool': {
            name: 'BA工具',
            event: {
                login: '登录',
                recommend: '推荐商品',
                syncToMobile: '同步到手机',
            },
        },
        'bplus-skintest': {
            name: '肌肤测试',
            event: {
                saveRecord: '提交问卷',
                finished: '完成报告',
            },
        },
    },
    equipment: {
        '6155a65a8d59af13d4b30f73': {
            name: '导览屏-右',
            account: 'csgjguide-right',
            area: '导览',
            taEvent: 'Click',
        },
        '6155a64a8d59af13d4b30f72': {
            name: '导览屏-左',
            account: 'csgjguide-left',
            area: '导览',
            taEvent: 'Click',
        },
        '6155a63f8d59af13d4b30f71': {
            name: '导览屏-上',
            account: 'csgjguide-top',
            area: '导览',
            taEvent: 'Click',
        },
        '61529926af52ff4e480c734f': {
            name: '导览屏-下',
            account: 'csgjguide-bottom',
            area: '导览',
            taEvent: 'Click',
        },
        '6152923537000d629f38881a': {
            name: '试妆-1',
            account: 'csgjmakeup1',
            area: '口红墙',
            taEvent: 'applyMakeup',
        },
        '6151999a9cfa660acc9cf524': {
            name: '试妆-2',
            account: 'csgjmakeup2',
            area: '口红墙',
            taEvent: 'applyMakeup',
        },
        '61529926af52ff4e480c7333': {
            name: '口红货架-1',
            account: 'csgjlipstick1',
            area: '口红墙',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7334': {
            name: '口红货架-2',
            account: 'csgjlipstick2',
            area: '口红墙',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7335': {
            name: '口红货架-3',
            account: 'csgjlipstick3',
            area: '口红墙',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7336': {
            name: '口红货架-4',
            account: 'csgjlipstick4',
            area: '口红墙',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c733e': {
            name: '眼影货架-1',
            account: 'csgjeyeshadow1',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c733f': {
            name: '眼影货架-2',
            account: 'csgjeyeshadow2',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7340': {
            name: '眼影货架-3',
            account: 'csgjeyeshadow3',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7341': {
            name: '腮红货架-1',
            account: 'csgjblusher1',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7342': {
            name: '眼线货架-1',
            account: 'csgjeyeliner1',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7344': {
            name: '睫毛膏货架-1',
            account: 'csgjmascara1',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7343': {
            name: '眉笔货架-1',
            account: 'csgjeyebrow1',
            area: '玩色区',
            taEvent: 'selectCommodity',
        },
        '6143458b808831bf41d78af3': {
            name: '肌肤测试-1',
            account: 'csgjskintest1',
            area: '测肤',
            taEvent: 'Scan',
        },
        '614345b0808831bf41d78af4': {
            name: '肌肤测试-2',
            account: 'csgjskintest2',
            area: '测肤',
            taEvent: 'Scan',
        },
        '615000c7b79f073520c29fe4': {
            name: '首饰货架-1',
            account: 'csgjjewelry1',
            area: '首饰',
            taEvent: 'Click',
        },
        '615000c7b79f073520c29fe5': {
            name: '首饰货架-2',
            account: 'csgjjewelry2',
            area: '首饰',
            taEvent: 'Click',
        },
        '61500471b79f073520c29fe9': {
            name: '首饰货架-3',
            account: 'csgjjewelry3',
            area: '首饰',
            taEvent: 'Click',
        },
        '61529926af52ff4e480c7337': {
            name: '粉底&气垫货架-1',
            account: 'csgjfoundation1',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7338': {
            name: '粉底&气垫货架-2',
            account: 'csgjfoundation2',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7339': {
            name: '粉底&气垫货架-3',
            account: 'csgjfoundation3',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c733a': {
            name: '粉底&气垫货架-4',
            account: 'csgjfoundation4',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c733c': {
            name: '遮瑕货架-1',
            account: 'csgjconcealer1',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c733d': {
            name: '定妆货架-1',
            account: 'csgjbase1',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c733b': {
            name: '高光货架-1',
            account: 'csgjhighlight1',
            area: '底子区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7332': {
            name: '美发货架-1',
            account: 'csgjhair1',
            area: '个护区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7331': {
            name: '身体货架-1',
            account: 'csgjbody1',
            area: '个护区',
            taEvent: 'selectCommodity',
        },
        '6142e15937000d629fccbe37': {
            name: '面膜货架-1',
            account: 'csgjmask1',
            area: '个护区',
            taEvent: 'Click',
        },
        '61529926af52ff4e480c732e': {
            name: '香水-1',
            account: 'csgjperfume1',
            area: '香水区',
            taEvent: 'Scan',
        },
        '61529926af52ff4e480c732f': {
            name: '香水-2',
            account: 'csgjperfume2',
            area: '香水区',
            taEvent: 'Scan',
        },
        '61529926af52ff4e480c7345': {
            name: '成分货架-1',
            account: 'csgjelement1',
            area: '成分区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7346': {
            name: '成分货架-2',
            account: 'csgjelement2',
            area: '成分区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7347': {
            name: '成分-3',
            account: 'csgjelement3',
            area: '成分区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7348': {
            name: '成分货架-4',
            account: 'csgjelement4',
            area: '成分区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7349': {
            name: '成分货架-5',
            account: 'csgjelement5',
            area: '成分区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c734a': {
            name: '高化货架-1',
            account: 'csgjskincare1',
            area: '护肤步骤',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c734b': {
            name: '高化货架-2',
            account: 'csgjskincare2',
            area: '护肤步骤',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c734c': {
            name: '高化货架-3',
            account: 'csgjskincare3',
            area: '护肤步骤',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c734d': {
            name: '高化货架-4',
            account: 'csgjskincare4',
            area: '护肤步骤',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c734e': {
            name: '敏感货架-1',
            account: 'csgjsensitive1',
            area: '敏感区',
            taEvent: 'selectCommodity',
        },
        '61529926af52ff4e480c7330': {
            name: '男士货架-1',
            account: 'csgjmale1',
            area: '男士区',
            taEvent: 'selectCommodity',
        },
    },
};
