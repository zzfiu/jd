/*
https://wbbny.m.jd.com/pb/014710620/mTPLZGkAcayB5UvZ6uZCtL3M6ca/index.html?from=home&babelChannel=jdfuceng
*/
require("global-agent/bootstrap");
global.GLOBAL_AGENT.HTTP_PROXY="http://192.168.10.10:8899";

const $ = new Env('京东全民拆快递_任务');
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

let token = '' // token
let jdSignUrl = '' // 算法url
let Authorization = '' // 算法url token 有则填
$.joyytoken = "";
let joyytoken_count = 0

jdSignUrl = $.isNode() ? (process.env.gua_cleancart_SignUrl ? process.env.gua_cleancart_SignUrl : `${jdSignUrl}`) : ($.getdata('gua_cleancart_SignUrl') ? $.getdata('gua_cleancart_SignUrl') : `${jdSignUrl}`);

Authorization = process.env.gua_cleancart_Authorization ? process.env.gua_cleancart_Authorization : `${Authorization}`
if (Authorization && Authorization.indexOf("Bearer ") === -1) Authorization = `Bearer ${Authorization}`

$.token = process.env.gua_log_token || token // token

let logUrl = "" // 填一个[urlArr]里有的
$.logUrl = process.env.jd_qmckd_logUrl || logUrl // 优先选择此url

let openckFlag = 1 // 1开启 2不开启
$.openckFlag = process.env.jd_qmckd_openckFlag || openckFlag // 开启验证appck


let outuserIdArr = [];
let outuserID = '';// 屏蔽账号 2,5,7
if ($.isNode() && process.env.jd_qmckd_outuserID) {
    outuserID = process.env.jd_qmckd_outuserID;
}
for (let i of outuserID && outuserID.split(',')) {
    outuserIdArr.push(i)
}

$.functionCode = 'promote'
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [];
$.cookie = '';
$.inviteList = [];
$.secretpInfo = {};
$.ShInviteList = [];
$.innerShInviteList = [];
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => { };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}

$.appid = 'o2_act';
$.UA = ''
$.UUID = ''
let utils = ''

!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    if (!$.token) {
        console.log("填写log token[gua_log_token]")
        return
    }
    console.log("当前版本：2023年05月24日 V2")
    console.log("TOKEN：" + $.token.replace(/.+(.{5})/, '***$1') + "\n")

    let blacklist = '' // 黑名单 用&隔开 pin值(填中文
    $.blacklist = process.env.jd_qmckd_blacklist || blacklist // 黑名单
    getBlacklist()
    let urlArr = [
        // "http://127.0.0.1",
        "http://g.zxi7.cn",
        "http://jd.smiek.ga:3001",
        "http://jd.smiek.ga",
        "https://jd.smiek.tk",
    ]
    if ($.logUrl && urlArr.includes($.logUrl)) {
        var newarr = []
        newarr.push($.logUrl)
        for (let u of urlArr) {
            if (u && !newarr.includes(u)) {
                newarr.push(u)
            }
        }
        urlArr = newarr
    }
    $.getSignUrl = urlArr[0]
    for (let i of urlArr) {
        $.getSignUrl = i
        await toStatus()
        if ($.toStatus) break
    }
    if (!$.toStatus) {
        console.log($.getSignErr)
        console.log(`无法连接服务器，请检查网络`)
        console.log(`多次请求都无法连接服务器地址：${urlArr[0]}，请添加到代理`)
        return
    }
    $.outFlag = false
    console.log(`您屏蔽的账号是${outuserID}`)
    for (let i = 0; i < cookiesArr.length && true; i++) {
        if (cookiesArr[i]) {
            $.index = i + 1;
            let out = false
            for (let c of outuserIdArr) {
                if (c == $.index) {
                    out = true
                    break
                }
            }
            if (out) continue
            $.cookie = cookiesArr[i];
            $.UserName = decodeURIComponent($.cookie.match(/pt_pin=([^; ]+)(?=;?)/) && $.cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.isLogin = true;
            $.nickName = $.UserName;
            $.hotFlag = false; //是否火爆
            $.joyytoken = ''
            $.joyytokenb = ($.getdata("jd_blog_joyytoken") && $.getdata("jd_blog_joyytoken")[$.UserName]) || ''
            $.uid = ''
            $.logCookie = ""
            $.eid_token = ""
            joyytoken_count = 0
            console.log(`\n*****开始【京东账号${$.index}】${$.nickName || $.UserName}*****\n`);
            if ($.openckFlag + "" == "1" && !$.cookie.includes("pt_key=app_open")) {
                console.log("此号不是appck，跳过")
                continue
            }
            if (!$.cookie) continue
            getUA()
            await jsTk()
            await movement()
            let jd_blog_joyytoken = $.getdata("jd_blog_joyytoken") || {}
            if ($.joyytokenb) {
                jd_blog_joyytoken[$.UserName] = $.joyytokenb
                $.setdata(jd_blog_joyytoken, 'jd_blog_joyytoken')
            } else if (jd_blog_joyytoken[$.UserName]) {
                delete jd_blog_joyytoken[$.UserName]
                $.setdata(jd_blog_joyytoken, 'jd_blog_joyytoken')
            }
            if ($.hotFlag) $.secretpInfo[$.UserName] = false;//火爆账号不执行助力
            await $.wait(10000)
            if ($.vxckFlag + "" == "1" && !$.cookie.includes("pt_key=app_open")) {
                await $.wait(getRndInteger(1000 + $.mckrunwait * 1000, 1500 + $.mckrunwait * 1000));
            }
        }
    }


})()
    .catch((e) => {
        $.log(`❌ ${$.name}, 失败! 原因:`)
        console.log(e)
    })
    .finally(() => {
        $.done();
    })


async function movement() {
    try {
        $.signSingle = {};
        $.homeData = {};
        $.secretp = ``;
        $.taskList = [];
        $.shopSign = ``;
        $.userInfo = ''
        $.collectScore = false
        $.fullFlag = false
        $.toheihao = 3
        // await takePostRequest('getEncryptedPinColor');
        // /*
        await takePostRequest($.functionCode + '_getHomeData');
        if ($.hotFlag) {
            return
        }
        await takePostRequest($.functionCode + '_getMainMsgPopUp');
        if ($.homeData.result) {
            $.homeMainInfo = $.homeData.result.homeMainInfo
            $.raiseInfo = $.homeMainInfo.raiseInfo
            $.fullFlag = $.raiseInfo.fullFlag
            $.scenceId = $.raiseInfo.sceneInfoVo.scenceId
            if($.homeMainInfo.pointplayInfoVO.status == 2 && typeof $.homeMainInfo.pointplayInfoVO.actDone == "undefined"){
                // 做游戏 8、12、17、20
                $.pointplay_actId = $.homeMainInfo.pointplayInfoVO.actId
                await takePostRequest($.functionCode + '_pointplay');
                await $.wait(getRndInteger(3000, 4000))
                await takePostRequest($.functionCode + '_pointplay_award');
            }
            if($.homeMainInfo.raiseInfo.redInfo){
                console.log(`累计已拆${$.homeMainInfo.raiseInfo.redInfo.red}个快递`);
            }
        }
        // await takePostRequest($.functionCode + '_getSignHomeData');

        if ($.fullFlag == true) {
            console.log('已经满级，等待开奖！')
            return
        }

        if (!$.hotFlag) await takePostRequest($.functionCode + '_getTaskDetail');
        $.toheihao = 0
        if (!$.hotFlag) console.log(`\n做任务\n`);
        await $.wait(1000);
        //做任务
        let taskErrorList = []
        let toTaskCount = 0
        do {
            toTaskCount++
            $.toTaskFlag = false
            for (let i = 0; i < $.taskList.length && !$.hotFlag; i++) {
                $.oneTask = $.taskList[i];
                if ([5].includes($.oneTask.taskType) && $.oneTask.status === 1 && $.oneTask.taskName.includes("种草")) {
                    console.log(`做任务3：${$.oneTask.taskName}`);
                    $.taskId = $.oneTask.taskId;
                    $.feedDetailInfo = {};
                    await takePostRequest($.functionCode + '_getFeedDetail');
                    let productList = $.feedDetailInfo.browseShopVo || [];
                    let needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times);
                    for (let j = 0; j < productList.length && needTime > 0; j++) {
                        if (productList[j].status !== 1) {
                            continue;
                        }
                        $.oneActivityInfo = productList[j];
                        await takePostRequest($.functionCode + '_collectScore');
                        await $.wait(getRndInteger(1000, 1500));
                        needTime--;
                        if ($.hotFlag) break
                    }
                } else if ([1, 3, 5, 7, 9, 21, 26].includes($.oneTask.taskType) && $.oneTask.status === 1) { // 21 开通
                    $.activityInfoList = $.oneTask.shoppingActivityVos || $.oneTask.brandMemberVos || $.oneTask.followShopVo || $.oneTask.browseShopVo || $.oneTask.productInfoVos || [];
                    let times = $.oneTask.times || 0
                    for (let j = 0; j < $.activityInfoList.length; j++) {
                        $.taskStatus = true
                        times++
                        $.oneActivityInfo = $.activityInfoList[j];
                        // console.log($.oneActivityInfo.itemId)
                        if ($.oneActivityInfo.status !== 1 || !$.oneActivityInfo.taskToken || taskErrorList.includes($.oneActivityInfo.itemId)) {
                            continue;
                        }
                        $.callbackInfo = {};
                        let taskName = $.oneActivityInfo.title || $.oneActivityInfo.taskName || $.oneActivityInfo.shopName || $.oneActivityInfo.skuName || ""
                        let msg = ''
                        let continueFlag = false
                        if ($.outFlag && [7, 9].includes($.oneTask.taskType)) {
                            msg = ' ip被限制，跳过任务'
                            continueFlag = true
                        }
                        console.log(`做任务：${(taskName).substring(0, 10)} ${$.oneTask.waitDuration > 0 && '等待' + $.oneTask.waitDuration + '秒' || ''}${msg}`);
                        if (continueFlag) {
                            continue
                        }
                        if ($.oneTask.taskType === 21) {
                            let channel = $.oneActivityInfo.memberUrl.match(/channel=(\d+)/) ? $.oneActivityInfo.memberUrl.match(/channel=(\d+)/)[1] : '';
                        }
                        $.collectScore = true
                        await takePostRequest($.functionCode + '_collectScore');
                        if ($.callbackInfo.code === 0 && $.callbackInfo.data && $.callbackInfo.data.result && $.callbackInfo.data.result.taskToken) {
                            await $.wait((Number($.oneTask.waitDuration) || 9) * 1000);
                            let body = ''
                            let sign = ''
                            let signBody = `{"dataSource":"newshortAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.callbackInfo.data.result.taskToken}\\"}"}`
                            body = await jdSign('qryViewkitCallbackResult', signBody)
                            // sign = encryptionSign.getSign("qryViewkitCallbackResult", signBody)
                            // body = sign.data && sign.data.sign && sign.data.sign || ''
                            if (body) await callbackResult(body)
                        }
                        if (!$.taskStatus && $.oneActivityInfo.itemId && !taskErrorList.includes($.oneActivityInfo.itemId)) {
                            taskErrorList.push($.oneActivityInfo.itemId)
                        }
                        await $.wait(getRndInteger(2000, 2500));
                        if ($.hotFlag || times >= $.oneTask.maxTimes) break
                    }
                } else if ([2].includes($.oneTask.taskType) && $.oneTask.status === 1 && $.oneTask.scoreRuleVos[0].scoreRuleType === 2) {
                    console.log(`做任务2：${($.oneTask.taskName).substring(0, 10)};等待完成 (实际不会添加到购物车)`);
                    $.taskId = $.oneTask.taskId;
                    $.feedDetailInfo = {};
                    await takePostRequest($.functionCode + '_getFeedDetail');
                    let productList = $.feedDetailInfo.productInfoVos || $.feedDetailInfo.browseShopVo || [];
                    let needTime = Number($.feedDetailInfo.maxTimes) - Number($.feedDetailInfo.times);
                    for (let j = 0; j < productList.length && needTime > 0; j++) {
                        if (productList[j].status !== 1) {
                            continue;
                        }
                        $.taskToken = productList[j].taskToken;
                        console.log(`加购：${productList[j].skuName}`);
                        await takePostRequest('add_car');
                        await $.wait(getRndInteger(2000, 2500));
                        needTime--;
                        if ($.hotFlag) break
                    }
                } else if ([8].includes($.oneTask.taskType) && $.oneTask.status === 1 && $.oneTask.scoreRuleVos[0].scoreRuleType === 0) {
                    $.activityInfoList = $.oneTask.productInfoVos || [];
                    let times = $.oneTask.times || 0
                    for (let j = 0; j < $.activityInfoList.length; j++) {
                        times++
                        $.oneActivityInfo = $.activityInfoList[j];
                        if ($.oneActivityInfo.status !== 1 || !$.oneActivityInfo.taskToken) {
                            continue;
                        }
                        $.callbackInfo = {};
                        console.log(`做任务4：浏览${($.oneActivityInfo.skuName).substring(0, 10)} ${$.oneTask.waitDuration > 0 && '等待' + $.oneTask.waitDuration + '秒' || ''}`);
                        $.collectScore = true
                        await takePostRequest($.functionCode + '_collectScore');
                        if ($.callbackInfo.code === 0 && $.callbackInfo.data && $.callbackInfo.data.result) {
                            await $.wait((Number($.oneTask.waitDuration) || 9) * 1000);
                            $.collectScore = 2
                            await takePostRequest($.functionCode + '_collectScore');
                        }
                        await $.wait(getRndInteger(2000, 2500));
                        if ($.hotFlag || times >= $.oneTask.maxTimes) break
                    }
                } else if ($.oneTask.status === 3 || (($.oneTask.taskName.includes("去首页") || $.oneTask.taskName.includes("打卡") || $.oneTask.taskName.includes("去APP") || $.oneTask.taskName.includes("去品牌墙浏览")) && $.oneTask.status !== 2) || ($.oneTask.taskName.includes("去逛逛并下单") && $.oneTask.status == 1) || ($.oneTask.taskName.includes("小组件") && $.oneTask.status == 1)) {
                    $.taskStatus = true
                    $.taskId = $.oneTask.taskId
                    $.oneActivityInfo = $.oneTask.simpleRecordInfoVo
                    if (taskErrorList.includes($.oneActivityInfo.taskToken)) {
                        continue
                    }
                    if ($.taskId && $.oneActivityInfo) {
                        console.log(`领取：${$.oneTask.subTitleName} ${$.oneTask.ext && $.oneTask.ext.waitDuration > 0 && '等待' + $.oneTask.ext.waitDuration + '秒' || ''}`);
                        if ($.oneTask.taskName.includes("去品牌墙浏览") || $.oneTask.taskName.includes("去逛逛并下单")) {
                            $.collectScore = true
                            await takePostRequest($.functionCode + '_collectScore');
                            if ($.oneTask.ext && $.oneTask.ext.waitDuration) {
                                await $.wait((Number($.oneTask.ext.waitDuration) || 9) * 1000);
                            } else {
                                await $.wait(getRndInteger(2000, 2500));
                            }
                            if ($.oneTask.taskName.includes("去逛逛并下单") && $.oneTask.ext && $.oneTask.ext.browseTaskId) {
                                $.oneTask.taskId = $.oneTask.ext.browseTaskId
                            }
                        }
                        $.collectScore = 2
                        await takePostRequest($.functionCode + '_collectScore');
                        if (!$.taskStatus && $.oneActivityInfo.taskToken && !taskErrorList.includes($.oneActivityInfo.taskToken)) {
                            taskErrorList.push($.oneActivityInfo.taskToken)
                        }
                        await $.wait(getRndInteger(2000, 2500));
                    }
                }
                if ($.hotFlag) break
            }
            if (!$.hotFlag && $.toTaskFlag && toTaskCount <= 14) await takePostRequest($.functionCode + '_getTaskDetail');
        } while ($.toTaskFlag && toTaskCount <= 14)
        
        // console.log(taskErrorList)
        $.shopInfoList = [];
        // if(!$.hotFlag) await takePostRequest('qryCompositeMaterials');
        // console.log(`\n去做店铺任务\n`);
        $.shopInfoList = [...$.shopInfoList]
        for (let i = 0; i < $.shopInfoList.length && true; i++) {
            $.shopSign = $.shopInfoList[i].extension && $.shopInfoList[i].extension.shopId || $.shopInfoList[i].link && $.shopInfoList[i].link.match(/shopSign=([^&]+)/) && $.shopInfoList[i].link.match(/shopSign=([^&]+)/)[1] || $.shopInfoList[i].earthLogoJumpUrl && $.shopInfoList[i].earthLogoJumpUrl.match(/shopSign=([^&]+)/) && $.shopInfoList[i].earthLogoJumpUrl.match(/shopSign=([^&]+)/)[1] || '';
            if ($.shopSign == '') continue
            console.log(`执行第${i + 1}个店铺任务：${$.shopInfoList[i].name || $.shopInfoList[i].earthName || ''} ID:${$.shopSign}`);
            $.shopResult = {};
            await takePostRequest($.functionCode + '_shopLotteryInfo');
            await $.wait(getRndInteger(2000, 2500));
            if (JSON.stringify($.shopResult) === `{}`) continue;
            $.shopTask = $.shopResult.taskVos;
            for (let i = 0; i < $.shopTask.length; i++) {
                $.oneTask = $.shopTask[i];
                if ([14].includes($.oneTask.taskType) || $.oneTask.status !== 1) { continue; } //不做入会//不做邀请
                $.activityInfoList = $.oneTask.shoppingActivityVos || $.oneTask.simpleRecordInfoVo || $.oneTask.brandMemberVos || $.oneTask.followShopVo || $.oneTask.browseShopVo || [];
                if ([12].includes($.oneTask.taskType)) {//签到
                    if ($.shopResult.dayFirst === 0) {
                        $.oneActivityInfo = $.activityInfoList;
                        console.log($.oneTask.taskName);
                        await takePostRequest($.functionCode + '_bdCollectScore');
                    }
                    await $.wait(getRndInteger(2000, 2500));
                    continue;
                }
                for (let j = 0; j < $.activityInfoList.length; j++) {
                    $.oneActivityInfo = $.activityInfoList[j];
                    if ($.oneActivityInfo.status !== 1 || !$.oneActivityInfo.taskToken) {
                        continue;
                    }
                    $.callbackInfo = {};
                    console.log(`做任务：${$.oneActivityInfo.subtitle || $.oneActivityInfo.title || $.oneActivityInfo.taskName || $.oneActivityInfo.shopName} ${$.oneTask.waitDuration > 0 && '等待' + $.oneTask.waitDuration + '秒' || ''}`);
                    $.collectScore = true
                    await takePostRequest($.functionCode + '_bdCollectScore');
                    if ($.callbackInfo.code === 0 && $.callbackInfo.data && $.callbackInfo.data.result && $.callbackInfo.data.result.taskToken) {
                        await $.wait((Number($.oneTask.waitDuration) || 6) * 1000);
                        await takePostRequest($.functionCode + '_bdCollectScore');
                        // let body = ''
                        // let sign = ''
                        // let signBody = `{"dataSource":"shortTermAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.callbackInfo.data.result.taskToken}\\"}"}`
                        // sign = await jdSign('qryViewkitCallbackResult', signBody)
                        // sign = encryptionSign.getSign("qryViewkitCallbackResult", signBody)
                        // body = sign.data && sign.data.sign && sign.data.sign || ''
                        // if(body) await callbackResult(body)
                    }
                    await $.wait(getRndInteger(2000, 2500));
                }
            }
            await $.wait(1000);
            let boxLotteryNum = $.shopResult.boxLotteryNum;
            for (let j = 0; j < boxLotteryNum; j++) {
                console.log(`开始第${j + 1}次拆盒`)
                //抽奖
                await takePostRequest($.functionCode + '_boxShopLottery');
                await $.wait(getRndInteger(2000, 2500));
            }
            await $.wait(getRndInteger(2000, 2500));
        }
        //==================================首页下方店铺========================================================================

        $.shopTaskList = [];
        // if(!$.hotFlag) await takePostRequest('homePageShop');
        for (let i = 0; i < $.shopTaskList.length; i++) {
            let errTaskOutC = 0
            let errTaskOut = false
            $.oneTask = $.shopTaskList[i];
            $.activityInfoList = $.oneTask.browseShopVo || [];
            for (let j = 0; j < $.activityInfoList.length; j++) {
                $.oneActivityInfo = $.activityInfoList[j];
                if ($.oneActivityInfo.status == 1) {
                    errTaskOut = false
                    if (errTaskOutC > 2) break
                    $.collectScore = true
                    $.callbackInfo = {}
                    let msg = ''
                    let continueFlag = false
                    if ($.outFlag && [7, 9].includes($.oneTask.taskType)) {
                        msg = ' ip被限制，跳过任务'
                        continueFlag = true
                    }
                    console.log($.oneActivityInfo.shopName + msg)
                    if (continueFlag) {
                        continue
                    }
                    await takePostRequest('followShop');
                    await takePostRequest($.functionCode + '_collectScore');
                    if ($.callbackInfo.code === 0 && $.callbackInfo.data && $.callbackInfo.data.result && $.callbackInfo.data.result.taskToken) {
                        errTaskOut = true
                        await $.wait((Number($.oneTask.waitDuration) || 6) * 1000);
                        let body = ''
                        let sign = ''
                        let signBody = `{"dataSource":"newshortAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.callbackInfo.data.result.taskToken}\\"}"}`
                        body = await jdSign('qryViewkitCallbackResult', signBody)
                        // sign = encryptionSign.getSign("qryViewkitCallbackResult", signBody)
                        // body = sign.data && sign.data.sign && sign.data.sign || ''
                        if (body) await callbackResult(body)
                    }
                    await $.wait(getRndInteger(2000, 2500));
                    if ($.hotFlag) break
                    if (errTaskOut === false) errTaskOutC++
                }
            }
        }




        //==================================微信任务========================================================================
        $.wxTaskList = [];
        if (!$.hotFlag && !$.maxLevel) await takePostRequest('wxTaskDetail');
        if (!$.hotFlag) console.log(`\n去做微信任务\n`);
        toTaskCount = 0
        do {
            toTaskCount++
            $.toTaskFlag = false
            for (let i = 0; i < $.wxTaskList.length; i++) {
                $.oneTask = $.wxTaskList[i];
                if ($.oneTask.taskType === 2 || $.oneTask.status !== 1) { continue; } //不做加购
                $.activityInfoList = $.oneTask.shoppingActivityVos || $.oneTask.brandMemberVos || $.oneTask.followShopVo || $.oneTask.browseShopVo || [];
                for (let j = 0; j < $.activityInfoList.length; j++) {
                    $.oneActivityInfo = $.activityInfoList[j];
                    if ($.oneActivityInfo.status !== 1 || !$.oneActivityInfo.taskToken) {
                        continue;
                    }
                    $.callbackInfo = {};
                    let msg = ''
                    let continueFlag = false
                    if ($.outFlag && [7, 9].includes($.oneTask.taskType)) {
                        msg = ' ip被限制，跳过任务'
                        continueFlag = true
                    }
                    console.log(`做任务：${$.oneActivityInfo.title || $.oneActivityInfo.taskName || $.oneActivityInfo.shopName};等待完成${msg}`);
                    if (continueFlag) {
                        continue
                    }
                    $.collectScore = true
                    await takePostRequest($.functionCode + '_collectScore');
                    if ($.callbackInfo.code === 0 && $.callbackInfo.data && $.callbackInfo.data.result && $.callbackInfo.data.result.taskToken) {
                        await $.wait((Number($.oneTask.waitDuration) || 6) * 1000);
                        let body = ''
                        let sign = ''
                        let signBody = `{"dataSource":"newshortAward","method":"getTaskAward","reqParams":"{\\"taskToken\\":\\"${$.callbackInfo.data.result.taskToken}\\"}"}`
                        body = await jdSign('qryViewkitCallbackResult', signBody)
                        // sign = encryptionSign.getSign("qryViewkitCallbackResult", signBody)
                        // body = sign.data && sign.data.sign && sign.data.sign || ''
                        if (body) await callbackResult(body)
                        // } else  {
                        //   await $.wait(2000);
                        //   console.log(`任务完成`);
                    }
                    await $.wait(getRndInteger(2000, 2500));
                    if ($.hotFlag) break
                }
            }
            $.wxTaskList = [];
            if (!$.hotFlag && !$.maxLevel && $.toTaskFlag && toTaskCount <= 3) await takePostRequest('wxTaskDetail');
        } while ($.toTaskFlag && toTaskCount <= 3)
        await $.wait(getRndInteger(2000, 2500));

        await takePostRequest($.functionCode + '_getHomeData');
        if ($.hotFlag) return
        await takePostRequest($.functionCode + '_getMainMsgPopUp');
        $.gradeList = []
        $.sceneList = []
        await takePostRequest($.functionCode + '_floating_layer');
        for(let s of $.sceneList || []){
            if(s.acceptStatus == 0){
                if ($.hotFlag) break
                $.scenceId = s.scenceId
                console.log(`开[${$.scenceId}]红包`);
                await $.wait(2000)
                await takePostRequest($.functionCode + '_floating_layer');
                for(let g of $.gradeList || []){
                    if(g.status == 1){
                        $.gradeId = g.id
                        await $.wait(2000)
                        await takePostRequest($.functionCode + '_grade_award');
                    }
                    if ($.hotFlag) break
                }
            }
        }
        
        
        
    } catch (e) {
        $.logErr(e)
    }
}

async function takePostRequest(type) {
    let body = ``;
    let myRequest = ``;
    let clientVersion = '11.4.0'
    let client = 'apple'
    let appid = 'signed_wh5'
    if ($.vxckFlag + "" == "1" && !$.cookie.includes("pt_key=app_open")) {
        // client = 'xcx'
        // appid = 'signed_mp&loginType=11&loginWQBiz=dacu'
    }
    switch (type) {
        case 'collectFriendRecordColor1':
        case 'collectFriendRecordColor2':
            var assistType = 2
            if (type == 'collectFriendRecordColor1') assistType = 1
            client = 'apple'
            clientVersion = '11.4.0'
            body = `functionId=collectFriendRecordColor&client=${client}&clientVersion=${clientVersion}&body={"mpin":"RnFhwzJQbzLYztRP--sCNXjhDspdIXVoWHs","businessCode":"20136","assistType":"${assistType}","shareSource":1}`;
            myRequest = await getPostRequest('collectFriendRecordColor', body);
            break;
        case 'getEncryptedPinColor':
            client = 'apple'
            clientVersion = '11.4.0'
            body = `functionId=getEncryptedPinColor&client=${client}&clientVersion=11.4.0&body={}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_getMainMsgPopUp':
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"channel":"1"}`;
            // body = await getPostBody(type);
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_customizeGamesIcon':
            body = await getPostBody(type);
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_customizeGamesPrize':
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"appId":"1DFVRwqk","appSign":"1"}`;
            myRequest = await getPostRequest(type, body);
            break;
        case 'homePageShop':
            body = `functionId=${$.functionCode}_getFeedDetail&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={}`;
            myRequest = await getPostRequest(`${$.functionCode}_getFeedDetail`, body);
            break;
        case 'help_home':
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"inviteId":"${$.inviteId}"}`;
            myRequest = await getPostRequest($.functionCode + '_getHomeData', body);
            break;
        case $.functionCode + '_mainDivideRedPacket':
        case $.functionCode + '_getHomeData':
        case $.functionCode + '_getSignHomeData':
        case $.functionCode + '_pointplay':
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_floating_layer':
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"sceneId":${$.scenceId}}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_getTaskDetail':
            body = `functionId=${$.functionCode}_getTaskDetail&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"appSign":3}`;
            myRequest = await getPostRequest($.functionCode + '_getTaskDetail', body);
            break;
        case 'wxTaskDetail':
            body = `functionId=${$.functionCode}_getTaskDetail&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"appSign":2}`;
            myRequest = await getPostRequest($.functionCode + '_getTaskDetail', body);
            break;
        case 'qryCompositeMaterials':
            client = 'apple'
            var arr = { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" }
            body = `functionId=qryCompositeMaterials&client=apple&clientVersion=11.4.0&body=${$.toStr(arr, arr)}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_boxShopLottery':
        case $.functionCode + '_shopLotteryInfo':
            client = 'apple'
            clientVersion = '11.4.0'
            body = `functionId=${type}&body={"shopSign":"${$.shopSign}"}&client=${client}&clientVersion=${clientVersion}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_bdCollectScore':
        case $.functionCode + '_collectScore':
        case $.functionCode + '_raise':
        case $.functionCode + '_sign':
        case $.functionCode + '_collectAutoScore':
        case $.functionCode + '_pointplay_award':
        case $.functionCode + '_grade_award':
        case 'add_car':
            body = await getPostBody(type);
            var f = 0
            if (type == 'add_car') {
                f = 1
                type = $.functionCode + '_collectScore'
            }
            myRequest = await getPostRequest(type, body);
            if (f == 1) type = 'add_car'
            break;
        case $.functionCode + '_getFeedDetail':
            client = 'apple'
            clientVersion = '11.4.0'
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"taskId":"${$.taskId}"}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_getBadgeAward':
            // client = 'm'
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"awardToken":"${$.awardToken}"}`;
            myRequest = await getPostRequest(type, body);
            break;
        case 'followShop':
            client = 'apple'
            clientVersion = '11.4.0'
            body = `functionId=followShop&body={"shopId":"${$.oneActivityInfo.shopId}","follow":true,"type":"0"}&client=apple&clientVersion=${clientVersion}`;
            myRequest = await getPostRequest(type, body);
            break;
        case $.functionCode + '_getWelfareScore':
            body = `functionId=${type}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body={"type":${$.shareType}}`;
            myRequest = await getPostRequest($.functionCode + '_getWelfareScore', body);
            break;
        case 'help':
            body = await getPostBody(type);
            myRequest = await getPostRequest($.functionCode + '_collectScore', body);
            break;
        default:
            console.log(`错误${type}`);
    }
    if (myRequest) {
        return new Promise(async resolve => {
            $.post(myRequest, async (err, resp, data) => {
                try {
                    // console.log(data);
                    await dealReturn(type, data);
                } catch (e) {
                    $.logErr(e, resp)
                } finally {
                    resolve();
                }
            })
        })
    }
}


async function dealReturn(type, res) {
    try {
        data = JSON.parse(res);
    } catch (e) {
        console.log(`返回异常：${res}`);
        return;
    }
    switch (type) {
        case 'help_home':
            break
        case 'collectFriendRecordColor':
            break
        case 'getEncryptedPinColor':
            break
        case $.functionCode + '_pointplay':
            break
        case $.functionCode + '_pointplay_award':
            if (data.code === 0 && data.data && data.data.result) {
                if(data.data.result.levelUpAward){
                    var boxNum = data.data.result.levelUpAward.boxNum
                    if(boxNum) console.log(`拼手速，获得${boxNum}个快递箱`);
                }
                if(data.data.result.beginnerInfo){
                    console.log(`拼手速\n${$.toStr(data.data.result.beginnerInfo)}`);
                }
            }
            break
        case $.functionCode + '_floating_layer':
            if (data.code === 0 && data.data && data.data.result) {
                $.gradeList = data.data.result.gradeList
                if($.sceneList.length == 0) $.sceneList = data.data.result.sceneList
            }
            break
        case $.functionCode + '_getMainMsgPopUp':
            // console.log(res)
            if (data.code === 0 && data.data && data.data.result) {
                // console.log(res)
            }
            break
        case $.functionCode + '_getHomeData':
            if (data.code === 0 && data.data && data.data.result) {
                if (data.data['bizCode'] === 0) {
                    $.homeData = data.data;
                    $.secretp = data.data.result.homeMainInfo.secretp;
                    $.secretpInfo[$.UserName] = $.secretp;
                    // $.secretpInfo[$.UserName] = true
                }
            } else if (data.data && data.data.bizMsg) {
                if (data.data.bizCode === -1001) {
                    $.hotFlag = true;
                }
                console.log(data.data.bizMsg);
            } else {
                if (data.code == -30001) {
                    $.hotFlag = true;
                }
                console.log(res);
            }
            break;
        case $.functionCode + '_getSignHomeData':
            if (data.code === 0) {
                $.signHomeData = data.data.result;
            }
            break;
        case $.functionCode + '_sign':
            if (data.code === 0 && data.data.bizCode === 0) {
                $.toheihao = 0
                console.log(`签到成功`);
                if (data.data.result.redPacketValue) console.log(`签到获得：${data.data.result.redPacketValue} 红包`);
            } else if (data.code === 0 && data.data && (data.data.bizCode === -1002 || data.data.bizCode === -1001)) {
                $.hotFlag = true;
                console.log(`该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题`)
            } else {
                console.log(`签到失败`);
                console.log(data);
            }
            break;
        case $.functionCode + '_getTaskDetail':
            if (data.data && data.data.bizCode === 0) {
                if (!$.toTaskFlag) console.log(`互助码：${data.data.result && data.data.result.inviteId || '助力已满，获取助力码失败'}\n`);
                if (data.data.result && data.data.result.inviteId) {
                    $.inviteList.push({
                        'ues': $.UserName,
                        'inviteId': data.data.result.inviteId,
                        'max': false
                    });
                }
                $.taskList = data.data.result && data.data.result.taskVos || [];
                $.lotteryTaskVos = data.data.result && data.data.result.lotteryTaskVos || [];
            } else if (data.data && data.data.bizMsg) {
                console.log(data.data.bizMsg);
            } else {
                console.log(res);
            }
            break;
        case 'homePageShop':
            if (data.code === 0) {
                $.shopTaskList = data.data.result.taskVos || []
            }
            break;
        case 'wxTaskDetail':
            if (data.code === 0) {
                $.wxTaskList = data.data.result.taskVos;
            }
            break;
        case 'qryCompositeMaterials':
            if (data.code === '0') {
                $.shopInfoList = data.data.brand.list || [];
                console.log(`获取到${$.shopInfoList.length}个店铺`);
            }
            break
        case $.functionCode + '_shopLotteryInfo':
            if (data.code === 0) {
                $.shopResult = data.data.result;
            }
            break;
        case $.functionCode + '_collectAutoScore':
            if (data.code === 0 && data.data && data.data.result) {
                $.toheihao = 0
                console.log(`收取成功，获得：${data.data.result.produceScore}`);
            } else {
                console.log(JSON.stringify(data));
            }
            if (data.code === 0 && data.data && (data.data.bizCode === -1002 || data.data.bizCode === -1001)) {
                // $.hotFlag = true;
                console.log(`该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题`)
            }
            break;
        case $.functionCode + '_getWelfareScore':
            if (data.code === 0 && data.data && data.data.result) {
                if (data.data.result.maxTimes > data.data.result.times) {
                    console.log(`获得: ${data.data.result.score}快递箱`)
                    $.shareFlag = true
                } else {
                    console.log("分享已达上限")
                }
            } else {
                console.log(JSON.stringify(data));
            }

            break;
        case $.functionCode + '_raise':
            $.toTaskFlag = false
            if (data.data && data.data.bizCode === 0) {
                $.toheihao = 0
                $.toTaskFlag = true
                var Award = data.data.result.levelUpAward
                // console.log(Award.elementRedpacket)
                $.raiseFlag = true
                for (let i in Award) {
                    if (i == 'card') {
                        console.log(`获得卡片 ${Award[i].name}`)
                    } else if (i == 'specialCard') {
                        console.log(`获得国粹 ${Award[i].name}`)
                    } else if (i == 'redNum' || i == 'redNumInfo') {
                        $.raiseFlag = true
                        console.log(`获得红包分红 ${Award[i]['redNum'] || Award[i]}份`)
                    } else if (i == 'score') {
                        console.log(`获得金币 ${Award[i]}`)
                    } else if (i == 'redpacketInfo') {
                        console.log(`获得红包 ${Award[i]['delayDays'] ? "预计" + Award[i]['delayDays'] + "个工作日发放" : Award[i]['value'] ? Award[i]['value'] + "元 有效期:" + Award[i]['desc'] : $.toStr(Award[i], Award[i])}`)
                    } else if (i == 'couponInfo') {
                        console.log(`获得优惠券 ${Award[i].usageThreshold}-${Award[i].quota} 有效期:${Award[i].desc}`)
                    } else if (['postcardFirst', 'postcardScore', 'scenceId', 'skyTask', 'timeType', 'type'].includes(i)) {
                    } else {
                        console.log(`获得「${i}」 ${$.toStr(Award[i], Award[i])}`)
                    }
                }
            } else if (data.code === 0 && data.data && (data.data.bizCode === -1002 || data.data.bizCode === -1001)) {
                // $.hotFlag = true;
                console.log(`该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题`)
            } else if (data.data && data.data.bizMsg) {
                console.log(data.data.bizMsg);
            } else {
                console.log(res);
            }
            break;
        case $.functionCode + '_grade_award':
            if (data.data && data.data.bizCode === 0) {
                var myAwardVos = data.data.result.gradeAwardVo
                var list = {
                    "2": "红包",
                    "1": "优惠券",
                }
                var names = {
                    "2": "redpacketVO",
                    "1": "couponVO",
                }
                var m_type = myAwardVos.type
                console.log("获得", list[m_type] || '', names[m_type] && myAwardVos[names[m_type]].value || (m_type == 1 && myAwardVos[names[m_type]].quota + "-" + myAwardVos[names[m_type]].discount + " " + myAwardVos[names[m_type]].limitStr) || myAwardVos)

            } else if (data.data && data.data.bizMsg) {
                console.log(data.data.bizMsg);
            } else {
                console.log(res);
            }
            break;
        case $.functionCode + '_bdCollectScore':
        case $.functionCode + '_collectScore':
            $.callbackInfo = data;
        case $.functionCode + '_boxShopLottery':
            // console.log(res)
            if (/加入品牌会员才能获得金币|这个任务做完/.test($.toStr(res, res))) $.taskStatus = false
            if (data.data && data.data.bizCode === 0) {
                $.toheihao = 0
                $.toTaskFlag = true
                if (!data.data.result.taskToken) {
                    let msg = ''
                    if (data.data.result.score || data.data.result.rewardScore || false) {
                        msg += ` ${data.data.result.score || data.data.result.rewardScore}快递箱`
                    }
                    if (data.data.result.redpacket) msg += ` 红包:${data.data.result.redpacket.value || 0}元 期限:${data.data.result.redpacket.desc || ''}`
                    console.log(`获得:${msg || res}`);
                    if (!msg) $.taskStatus = false
                }
            } else if (data.code === 0 && data.data && (data.data.bizCode === -1002 || data.data.bizCode === -1001)) {
                // $.hotFlag = true;
                console.log(`该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题`)
            } else if (data.data && data.data.bizMsg) {
                $.taskStatus = false
                console.log(data.data.bizMsg);
            } else {
                $.taskStatus = false
                console.log(res);
            }
            break;
        case $.functionCode + '_getFeedDetail':
            if (data.code === 0) {
                $.feedDetailInfo = (data.data.result.addProductVos && data.data.result.addProductVos[0]) || (data.data.result.taskVos && data.data.result.taskVos[0]) || {};
            }
            break;
        case 'add_car':
            if (data.code === 0) {
                $.toTaskFlag = true
                let acquiredScore = data.data.result && data.data.result.acquiredScore || 0
                if (Number(acquiredScore) > 0) {
                    console.log(`加购成功,获得快递箱:${acquiredScore}`);
                } else {
                    console.log(`加购成功`);
                }
            } else {
                console.log(JSON.stringify(data));
                console.log(`加购失败`);
            }
            break
        case 'help':
            // case 'pkHelp':
            // console.log(data);
            if (data.code == 0 && typeof data.data.bizCode != 'undefined') {
                switch (data.data.bizCode) {
                    case 0:
                        $.toheihao = 0
                        console.log(`助力成功`);
                        break;
                    case -201:
                        $.toheihao = 0
                        console.log(`助力已满`);
                        $.oneInviteInfo.max = true;
                        break;
                    case -202:
                        $.toheihao = 0
                        console.log(`已助力`);
                        break;
                    case -8:
                        $.toheihao = 0
                        console.log(`已经助力过该队伍`);
                        break;
                    case -4:
                        $.toheihao = 0
                        console.log(`助力失败：${JSON.stringify(data)}`);
                        break;
                    case -6:
                    case 108:
                        $.toheihao = 0
                        console.log(`助力次数已用光`);
                        $.canHelp = false;
                        break;
                    case -1002:
                        console.log(`助力失败：${JSON.stringify(data)}`);
                        $.canHelp = false;
                        break;
                    default:
                        console.log(`助力失败：${JSON.stringify(data)}`);
                }
            } else {
                console.log("助力失败")
                console.log(data)
            }
            break;
        default:
            console.log(`未判断的异常:${type}\n${res}`);
    }
    let delVxckFlag = false
    if (/运行环境异常/.test($.toStr(res, res))) {
        $.joyytokenb = ""
        $.toheihao++
    } else if (/登陆失败/.test($.toStr(res, res))) {
        $.hotFlag = true;
        delVxckFlag = true
    }
    if ($.toheihao >= 4 && !$.hotFlag) {
        // delVxckFlag = true
        $.hotFlag = true;
        console.log(`该账户脚本执行任务火爆，暂停执行任务，请手动做任务或者等待解决脚本火爆问题\n`)
    }
}

async function getPostBody(type) {
    return new Promise(async resolve => {
        let functionId = '';
        let body = '';
        let taskBody = '';
        let joylog = '';
        let client = 'apple'
        let appid = 'signed_wh5'
        let clientVersion = '11.4.0'
        if ($.vxckFlag + "" == "1" && !$.cookie.includes("pt_key=app_open")) {
            // client = 'xcx'
            // appid = 'signed_mp&loginType=11&loginWQBiz=dacu'
        }
        try {
            var uuid = ``;
            if (type === 'help' || type === 'shHelp') {
                functionId = `${$.functionCode}_collectScore`
                body = { "actionType": "0", "inviteId": $.inviteId }
            } else if (type === $.functionCode + '_sign' || type === $.functionCode + '_collectAutoScore') {
                functionId = type
                body = {}
            } else if (type === $.functionCode + '_raise') {
                functionId = type
                body = { "scenceId": $.scenceId }
            } else if (type === $.functionCode + '_startTraining' || type === $.functionCode + '_speedTraining') {
                functionId = type
                body = {}
            } else if (type === $.functionCode + '_customizeGamesIcon') {
                functionId = type
                body = { "appId": "1DFVRwqk", "appSign": "1" }
            } else if (type === $.functionCode + '_getMainMsgPopUp') {
                functionId = type
                body = { "channel": "1" }
            } else if (type === 'add_car') {
                functionId = `${$.functionCode}_collectScore`
                body = { "taskId": $.taskId, "taskToken": $.taskToken }
            } else if (type ===  $.functionCode + '_pointplay_award') {
                functionId = type
                body = { "actId": $.pointplay_actId }
            } else if (type ===  $.functionCode + '_grade_award') {
                functionId = type
                body = { "gradeId": $.gradeId }
            } else {
                body = { "taskId": $.oneTask.taskId, "taskToken": $.oneActivityInfo.taskToken }
                if (type == $.functionCode + '_bdCollectScore') {
                    body = { ...body, "shopSign": $.shopSign }
                }
                if ($.collectScore === 2) {
                    body = { ...body, "actionType": 0 }
                    $.collectScore = false
                } else if ($.collectScore) {
                    body = { ...body, "actionType": 1 }
                    $.collectScore = false
                }
                functionId = type
            }
            joylog = await getLogs(functionId, body)
            taskBody = `functionId=${functionId}&client=${client}&clientVersion=${clientVersion}&appid=${appid}&body=${JSON.stringify(body)}&joylog=${joylog}`
        } catch (e) {
            $.logErr(e)
        } finally {
            resolve(taskBody);
        }
    })
}
async function getLogs(functionId, body = {}) {
    let num = ''
    let log = ''
    let res = ''
    let joyytoken = ''
    let joyytokenb = ''
    if (!$.joyytoken) {
        $.joyytoken = await gettoken("50180")
    }
    joyytoken = $.joyytoken
    if (!$.joyytokenb) {
        $.joyytokenb = await gettoken("50999")
    }
    joyytokenb = $.joyytokenb
    let resBody = { "fn": "qmckd", "id": functionId, "riskData": '', "pin": $.UserName, "joyytoken": joyytoken, "uid": $.uid || "", "joyytokenb": joyytokenb, "body": body }
    let log_res = await getLog(resBody)
    res = log_res.data
    let resCount = 0
    while (!res && resCount <= 4) {
        resCount++
        console.log(`重新获取算法 第${resCount}次`)
        await $.wait(2000)
        log_res = await getLog(resBody)
        res = log_res.data
    }

    if (!res) {
        console.log('获取不到算法')
        process.exit(1)
    }
    if (res.joyytoken) {
        $.joyytoken = res.joyytoken
    }
    $.logCookie = ""
    if (res.cookie) {
        $.logCookie = res.cookie
    }
    if (res.ua) {
        $.UA = res.ua
    }
    if (res.uid) {
        $.uid = res.uid
    }
    if (res.abcv) {
        $.abcv = res.abcv
    }
    log = res.log || -1
    num = res.random || ''
    return log
}
//log算法
async function getLog(body) {
    return new Promise(resolve => {
        let options = {
            url: `${$.getSignUrl}/jdlog`,
            body: JSON.stringify({ "token": $.token, "body": body }),
            headers: {
                "Content-Type": "application/json",
            },
            timeout: 30000
        }
        let msg = ''
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} 算法 API请求失败，请检查网路重试`)
                } else {
                    data = $.toObj(data, data);
                    if (data && data.code && data.code == 200) {
                        msg = data
                        if (data.msg && data.msg != "success") {
                            console.log(data.msg)
                            if (/次数不够/.test(data.msg)) process.exit(1)
                        }
                    }
                }
            } catch (e) {
                console.log(e)
            } finally {
                resolve(msg);
            }
        })
    })
}
function toStatus() {
    return new Promise(resolve => {
        let get = {
            url: `${$.getSignUrl}/to_status`,
            timeout: 10000
        }
        $.get(get, async (err, resp, data) => {
            try {
                if (err) {
                    $.getSignErr = err
                    // console.log(`${$.toStr(err)}`)
                    // console.log(`${$.name} 连接服务器 API请求失败，请检查网路重试`)
                } else {
                    let res = $.toObj(data, data)
                    if (res && typeof res == 'object') {
                        if (res.msg === "success") {
                            $.toStatus = true
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}
function gettoken(appname) {
    return new Promise(resolve => {
        let body = `content={"appname":"50180","whwswswws":"","jdkey":"a","body":{"platform":"1","sceneid":"","hs":"","version":"w4.0.8"}}`
        if (appname != "50180") {
            body = `content={"appname":"50999","whwswswws":"","jdkey":"a","body":{"platform":"2"}}`
        }
        opts = {
            url: `https://rjsb-token-m.jd.com/gettoken`,
            headers: {
                "accept": "*/*",
                "Origin": "https://wbbny.m.jd.com",
                "Referer": "https://wbbny.m.jd.com/",
                "User-Agent": $.UA,
            },
            body: body
        }
        let msg = ''
        $.post(opts, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${$.toStr(err, err)}`)
                    console.log(`gettoken API请求失败，请检查网路重试`)
                } else {
                    let res = $.toObj(data, data);
                    if (typeof res == 'object') {
                        if (res.joyytoken) {
                            msg = res.joyytoken
                        } else {
                            console.log(data)
                        }
                    } else {
                        console.log(data)
                    }
                }
            } catch (e) {
                console.log(e, resp)
            } finally {
                resolve(msg);
            }
        })
    })
}
async function getPostRequest(type, body) {
    let url = `https://api.m.jd.com/`;
    const method = `POST`;
    let cookies = $.cookie.replace(/;([^\s])/g, '; $1')
    let headers = ''
    headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': `${$.joyytoken && 'joyytokem=50180' + $.joyytoken + '; ' || ''}${cookies} pwdt_id=${encodeURIComponent($.UserName)};${$.uid ? ' sid=' + $.uid + ';' : ''} shshshfpv=;`,
        "Origin": "https://wbbny.m.jd.com",
        "Referer": "https://wbbny.m.jd.com/pb/014710620/mTPLZGkAcayB5UvZ6uZCtL3M6ca/index.html?from=home&babelChannel=jdfuceng",
        "User-Agent": $.UA,
    };
    headers.Cookie = headers.Cookie.replace(/;\s*$/, '')
    headers.Cookie = headers.Cookie.replace(/;([^\s])/g, '; $1')
    if(/functionId=promote_/.test($.toStr(body, body))){
        body += `&x-api-eid-token=${$.eid_token}`
    }
    return { url: url, method: method, headers: headers, body: body, timeout: 30000 };
}
function jdSign(fn, body) {
    let sign = ''
    let flag = false
    try {
        const fs = require('fs');
        if (fs.existsSync('./gua_encryption_sign.js')) {
            const encryptionSign = require('./gua_encryption_sign');
            sign = encryptionSign.getSign(fn, body)
        } else {
            flag = true
        }
        sign = sign.data && sign.data.sign && sign.data.sign || ''
    } catch (e) {
        flag = true
    }
    if (!flag) return sign
    if (!jdSignUrl.match(/^https?:\/\//)) {
        console.log('请填写算法url')
        $.out = true
        return ''
    }
    return new Promise((resolve) => {
        let options = {
            url: jdSignUrl,
            body: `{"fn":"${fn}","body":${body}}`,
            followRedirect: false,
            headers: {
                'Accept': '*/*',
                "accept-encoding": "gzip, deflate, br",
                'Content-Type': 'application/json',
            },
            timeout: 30000
        }
        if (Authorization) options["headers"]["Authorization"] = Authorization
        $.post(options, async (err, resp, data) => {
            try {
                // console.log(data)
                let res = $.toObj(data, data)
                if (typeof res === 'object' && res) {
                    if (res.code && res.code == 200 && res.data) {
                        if (res.data.sign) sign = res.data.sign || ''
                        if (sign != '') resolve(sign)
                    } else {
                        console.log(data)
                    }
                } else {
                    console.log(data)
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve('')
            }
        })
    })
}

//领取奖励
function callbackResult(info) {
    return new Promise((resolve) => {
        let url = {
            url: `https://api.m.jd.com/client.action?functionId=qryViewkitCallbackResult`,
            body: info,
            headers: {
                'Cookie': cookiesArr[$.index - 1],
                'Connection': `keep-alive`,
                'Accept': `*/*`,
                // 'User-Agent': $.UA,
                'User-Agent': `jdapp;iPhone;10.1.4;13.1.2;${randomString(40)};network/wifi;model/iPhone8,1;addressid/;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
                'Accept-Encoding': `gzip, deflate, br`,
                'Accept-Language': `zh-cn`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Referer': ''
            },
            timeout: 30000
        }
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(err);
                    if (resp.statusCode == 403) {
                        console.log('此ip已被限制\n')
                        $.outFlag = true
                    }
                } else {
                    let res = $.toObj(data, data)
                    if (res && typeof res === 'object' && res.toast) {
                        console.log(res.toast.subTitle || data)
                    } else {
                        console.log(data)
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    })
}
async function jsTk(){
    var HASH=function(){function e(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var c=[0,0,0,0];return c[3]+=e[3]+t[3],c[2]+=c[3]>>>16,c[3]&=65535,c[2]+=e[2]+t[2],c[1]+=c[2]>>>16,c[2]&=65535,c[1]+=e[1]+t[1],c[0]+=c[1]>>>16,c[1]&=65535,c[0]+=e[0]+t[0],c[0]&=65535,[c[0]<<16|c[1],c[2]<<16|c[3]]}function t(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var c=[0,0,0,0];return c[3]+=e[3]*t[3],c[2]+=c[3]>>>16,c[3]&=65535,c[2]+=e[2]*t[3],c[1]+=c[2]>>>16,c[2]&=65535,c[2]+=e[3]*t[2],c[1]+=c[2]>>>16,c[2]&=65535,c[1]+=e[1]*t[3],c[0]+=c[1]>>>16,c[1]&=65535,c[1]+=e[2]*t[2],c[0]+=c[1]>>>16,c[1]&=65535,c[1]+=e[3]*t[1],c[0]+=c[1]>>>16,c[1]&=65535,c[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],c[0]&=65535,[c[0]<<16|c[1],c[2]<<16|c[3]]}function c(e,t){return 32===(t%=64)?[e[1],e[0]]:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function r(e,t){return 0===(t%=64)?e:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function a(e,t){return[e[0]^t[0],e[1]^t[1]]}function o(e){return a(e=t(e=a(e=t(e=a(e,[0,e[0]>>>1]),[4283543511,3981806797]),[0,e[0]>>>1]),[3301882366,444984403]),[0,e[0]>>>1])}return{hash128:function(h,n){var A=n||0;n=(h=h||"").length%16;var d=h.length-n,C=[0,A];A=[0,A];for(var s,i,u=[2277735313,289559509],f=[1291169091,658871167],g=0;g<d;g+=16)s=[255&h.charCodeAt(g+4)|(255&h.charCodeAt(g+5))<<8|(255&h.charCodeAt(g+6))<<16|(255&h.charCodeAt(g+7))<<24,255&h.charCodeAt(g)|(255&h.charCodeAt(g+1))<<8|(255&h.charCodeAt(g+2))<<16|(255&h.charCodeAt(g+3))<<24],i=[255&h.charCodeAt(g+12)|(255&h.charCodeAt(g+13))<<8|(255&h.charCodeAt(g+14))<<16|(255&h.charCodeAt(g+15))<<24,255&h.charCodeAt(g+8)|(255&h.charCodeAt(g+9))<<8|(255&h.charCodeAt(g+10))<<16|(255&h.charCodeAt(g+11))<<24],C=e(t(C=e(C=c(C=a(C,s=t(s=c(s=t(s,u),31),f)),27),A),[0,5]),[0,1390208809]),A=e(t(A=e(A=c(A=a(A,i=t(i=c(i=t(i,f),33),u)),31),C),[0,5]),[0,944331445]);switch(s=[0,0],i=[0,0],n){case 15:i=a(i,r([0,h.charCodeAt(g+14)],48));case 14:i=a(i,r([0,h.charCodeAt(g+13)],40));case 13:i=a(i,r([0,h.charCodeAt(g+12)],32));case 12:i=a(i,r([0,h.charCodeAt(g+11)],24));case 11:i=a(i,r([0,h.charCodeAt(g+10)],16));case 10:i=a(i,r([0,h.charCodeAt(g+9)],8));case 9:A=a(A,i=t(i=c(i=t(i=a(i,[0,h.charCodeAt(g+8)]),f),33),u));case 8:s=a(s,r([0,h.charCodeAt(g+7)],56));case 7:s=a(s,r([0,h.charCodeAt(g+6)],48));case 6:s=a(s,r([0,h.charCodeAt(g+5)],40));case 5:s=a(s,r([0,h.charCodeAt(g+4)],32));case 4:s=a(s,r([0,h.charCodeAt(g+3)],24));case 3:s=a(s,r([0,h.charCodeAt(g+2)],16));case 2:s=a(s,r([0,h.charCodeAt(g+1)],8));case 1:C=a(C,s=t(s=c(s=t(s=a(s,[0,h.charCodeAt(g)]),u),31),f))}return C=a(C,[0,h.length]),A=e(A=a(A,[0,h.length]),C=e(C,A)),C=o(C),A=e(A=o(A),C=e(C,A)),("00000000"+(C[0]>>>0).toString(16)).slice(-8)+("00000000"+(C[1]>>>0).toString(16)).slice(-8)+("00000000"+(A[0]>>>0).toString(16)).slice(-8)+("00000000"+(A[1]>>>0).toString(16)).slice(-8)}}}();
    function TDEncrypt(r){r=JSON.stringify(r),r=encodeURIComponent(r);var t="",a=0;do{var c=r.charCodeAt(a++),e=r.charCodeAt(a++),h=r.charCodeAt(a++),n=c>>2;c=(3&c)<<4|e>>4;var o=(15&e)<<2|h>>6,A=63&h;isNaN(e)?o=A=64:isNaN(h)&&(A=64),t=t+"23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(n)+"23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(c)+"23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(o)+"23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(A)}while(a<r.length);return t+"/"}
    var d = [$.UA.substring(0, 90),"zh-CN","applewebkit_chrome","605.1.15","NA","NA",32,"896x414",-480,"sessionStorageKey","localStorageKey","indexedDbKey","openDatabase","NA","iPhone",10,"NA","",null,null]
    var fp = HASH.hash128(d.join("~~~"), 31);
    var s1_array = {"pin": "","oid": "","bizId": "JD-DCHD","fc": "","mode": "strict","p": "s","fp": fp,"ctype": 1,"v": "3.1.1.0","f": "3","o": "wbbny.m.jd.com/pb/014710620/mTPLZGkAcayB5UvZ6uZCtL3M6ca/index.html#/pages/home/index/index","qs": "","jsTk": "","qi": ""}
    var s1 = TDEncrypt(s1_array)
    var f={},d=new Date;f.ts={},f.ts.deviceTime=d.getTime(),f.ca={tdHash:null},f.m={compatMode:"CSS1Compat"},f.fo=["Arial Black","Bauhaus 93","Chalkduster","GungSeo","Hiragino Sans GB","Impact","Menlo","Papyrus","Rockwell"],f.n={vendorSub:"",productSub:"20030107",vendor:"Apple Computer, Inc.",maxTouchPoints:1,pdfViewerEnabled:!1,hardwareConcurrency:10,cookieEnabled:!0,appCodeName:"Mozilla",appName:"Netscape",appVersion:(/\/(.+)/g.exec($.UA) && /\/(.+)/g.exec($.UA)[1]) || $.UA,platform:"iPhone",product:"Gecko",userAgent:$.UA,language:"zh-CN",onLine:!0,webdriver:!1,javaEnabled:!1,deviceMemory:8,enumerationOrder:["vendorSub","productSub","vendor","maxTouchPoints","scheduling","userActivation","doNotTrack","geolocation","connection","plugins","mimeTypes","pdfViewerEnabled","webkitTemporaryStorage","webkitPersistentStorage","hardwareConcurrency","cookieEnabled","appCodeName","appName","appVersion","platform","product","userAgent","language","languages","onLine","webdriver","getGamepads","javaEnabled","sendBeacon","vibrate","bluetooth","clipboard","credentials","keyboard","managed","mediaDevices","storage","serviceWorker","virtualKeyboard","wakeLock","deviceMemory","ink","hid","locks","mediaCapabilities","mediaSession","permissions","presentation","serial","gpu","usb","windowControlsOverlay","xr","userAgentData","clearAppBadge","getBattery","getUserMedia","requestMIDIAccess","requestMediaKeySystemAccess","setAppBadge","webkitGetUserMedia","getInstalledRelatedApps","registerProtocolHandler","unregisterProtocolHandler"]},f.p=[],f.w={devicePixelRatio:1,screenTop:0,screenLeft:0},f.s={availHeight:896,availWidth:414,colorDepth:24,height:896,width:414,pixelDepth:24},f.sc={ActiveBorder:"rgb(118, 118, 118)",ActiveCaption:"rgb(0, 0, 0)",AppWorkspace:"rgb(255, 255, 255)",Background:"rgb(255, 255, 255)",ButtonFace:"rgb(239, 239, 239)",ButtonHighlight:"rgb(239, 239, 239)",ButtonShadow:"rgb(239, 239, 239)",ButtonText:"rgb(0, 0, 0)",CaptionText:"rgb(0, 0, 0)",GrayText:"rgb(128, 128, 128)",Highlight:"rgb(181, 213, 255)",HighlightText:"rgb(0, 0, 0)",InactiveBorder:"rgb(118, 118, 118)",InactiveCaption:"rgb(255, 255, 255)",InactiveCaptionText:"rgb(128, 128, 128)",InfoBackground:"rgb(255, 255, 255)",InfoText:"rgb(0, 0, 0)",Menu:"rgb(255, 255, 255)",MenuText:"rgb(0, 0, 0)",Scrollbar:"rgb(255, 255, 255)",ThreeDDarkShadow:"rgb(118, 118, 118)",ThreeDFace:"rgb(239, 239, 239)",ThreeDHighlight:"rgb(118, 118, 118)",ThreeDLightShadow:"rgb(118, 118, 118)",ThreeDShadow:"rgb(118, 118, 118)",Window:"rgb(255, 255, 255)",WindowFrame:"rgb(118, 118, 118)",WindowText:"rgb(0, 0, 0)"},f.ss={cookie:!0,localStorage:!0,sessionStorage:!0,globalStorage:!1,indexedDB:!0},f.tz=-480,f.lil="",f.wil="",f.ts.deviceEndTime=(new Date).getTime();
    var s2 = TDEncrypt(f)
    const options = {
        url: `https://gia.jd.com/jsTk.do?a=${s1}`,
        body: `d=${s2}`,
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Origin": "https://wbbny.m.jd.com",
            "Referer": "https://wbbny.m.jd.com/",
            "User-Agent": $.UA,
        },
    };
    return new Promise((resolve) => {
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(err);
                } else {
                    let res = $.toObj(data, data)
                    if (res && typeof res === 'object' && res.code == 0 && res.data && res.data.token) {
                        $.eid_token = res.data.token
                    } else {
                        console.log(data)
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        })
    });
}

function getUA() {
    $.uid = ""
    $.UA = `jdapp;iPhone;11.4.0;;;M/5.0;appBuild/168411;jdSupportDarkMode/0;ef/1;ep/${encodeURIComponent(JSON.stringify({ "ciphertype": 5, "cipher": { "ud": "", "sv": "CJGkCm==", "iad": "" }, "ts": Math.floor(new Date().getTime() / 1000), "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=", "version": "1.0.3", "appname": "com.360buy.jdmobile", "ridx": -1 }))};Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
}

/**
 * 黑名单
 */
function getBlacklist() {
    if ($.blacklist == '') return
    console.log('------- 黑名单 -------')
    const result = Array.from(new Set($.blacklist.split('&'))) // 数组去重
    console.log(`${result.join('\n')}`)
    let blacklistArr = result
    let arr = []
    let g = false
    for (let i = 0; i < cookiesArr.length; i++) {
        let s = decodeURIComponent((cookiesArr[i].match(/pt_pin=([^; ]+)(?=;?)/) && cookiesArr[i].match(/pt_pin=([^; ]+)(?=;?)/)[1]) || '')
        if (!s) break
        let f = false
        for (let n of blacklistArr) {
            if (n && n == s) {
                f = true
                break
            }
        }
        if (!f) {
            g = true
            arr.splice(i, -1, cookiesArr[i])
        }
    }
    if (g) cookiesArr = arr
}
function randomString(e) {
    e = e || 32;
    let t = "abcdef0123456789", a = t.length, n = "";
    for (i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}
/**
 * 随机从一数组里面取
 * @param arr
 * @param count
 * @returns {Buffer}
 */
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// 正道的光
function aabbiill() {
    let ccdd = 0
    if (new Date().getUTCHours() + 8 >= 18 && new Date().getUTCHours() + 8 < 24) {
        ccdd = 1
    } else {
        ccdd = getRndInteger(0, 3)
    }
    return ccdd == 1
}

// 随机数
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 计算时间
function timeFn(dateBegin) {
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateEnd = new Date(0);//获取当前时间
    var dateDiff = dateBegin - dateEnd.getTime();//时间差的毫秒数
    var leave1 = dateDiff % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000)    //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)

    var timeFn = hours + ":" + minutes + ":" + seconds;
    return timeFn;
}


function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
