/*
10.11~10.26 惠聚京东 好物连连 [gua_opencard43.js]
新增开卡脚本 (脚本已加密
一次性脚本

1.邀请一人20豆
2.开7张 成功开1张 获得1次抽奖
  抽奖可能获得5/666京豆
3.关注5豆 
4.加购0京豆 1次游戏机会
  (默认不加购 如需加购请设置环境变量[guaopencard_addSku43]为"true"
5.浏览商品0豆 2次游戏机会

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

默认脚本不执行
如需执行脚本请设置环境变量
guaopencard43="true"
每个账号之间延迟 100=延迟100秒 0=延迟0秒会使用每3个账号延迟60秒
guaopenwait_All 所有
guaopenwait43="0"


All变量适用
————————————————
入口：[ 10.11~10.26 惠聚京东 好物连连 (https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=llk20211015&shareUuid=4fd72b2ca1a14e75a7b5cb57e0e9d91f)]

请求太频繁会被黑ip
过10分钟再执行

============Quantumultx===============
[task_local]
#10.11~10.26 惠聚京东 好物连连
47 4 11-26 10 * https://raw.githubusercontent.com/smiek2221/scripts/master/gua_opencard43.js, tag=10.11~10.26 惠聚京东 好物连连, enabled=true

*/
let guaopencard_addSku = "false"
let guaopencard = "true"
let guaopenwait = "1"

const $ = new Env('10.11~10.26 惠聚京东 好物连连');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
//IOS等用户直接用NobyDa的jd cookie
/*
 *Progcessed By JSDec in 0.05s
 *JSDec - JSDec.js.org
 */
 var _0xode = 'jsjiami.com.v6',
 _0x2a8b = [_0xode, 'isNode', 'keys', 'forEach', 'push', 'env', 'JD_DEBUG', 'false', 'log', 'getdata', 'CookieJD', 'CookieJD2', 'CookiesJD', 'map', 'cookie', 'filter', 'guaopencard_addSku43', 'guaopencard_addSku_All', 'guaopencard43', 'guaopencard_All', 'guaopenwait43', 'guaopenwait_All', 'hotFlag', 'outFlag', 'activityEnd', 'true', '如需执行脚本请设置环境变量[guaopencard43]为\"true\"', 'msg', 'name', '【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', 'activityId', 'llk20211015', 'shareUuid', '4fd72b2ca1a14e75a7b5cb57e0e9d91f', '入口:\x0ahttps://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=', '&shareUuid=', 'length', 'UserName', 'match', 'index', 'bean', 'nickName', '\x0a\x0a******开始【京东账号', '*********\x0a', 'actorUuid', '此ip已被限制，请过10分钟后再执行脚本', 'sendNotify', 'catch', 'logErr', 'finally', 'done', 'hasEnd', 'endTime', 'Token', 'Pin', 'isvObfuscator', '获取[token]失败！', '获取cookie失败', '活动结束', '此ip已被限制，请过10分钟后再执行脚本\x0a', 'getSimpleActInfoVo', 'getMyPing', '获取[Pin]失败！', 'accessLogWithAD', 'getUserInfo', 'activityContent', '获取不到[actorUuid]退出执行，请重新执行', 'now', 'drawContent', 'wait', 'openList', 'allOpenCard', 'info', 'checkOpenCard', '开卡任务', 'openCard', 'status', 'joinVenderId', 'venderId', 'random', '已全部开卡', '关注: ', 'followShop', 'yaoqing', '签到: ', 'sign', '加购: ', 'addCart', '如需加购请设置环境变量[guaopencard_addSku43]为\"true\"', 'runFalag', '浏览商品: ', 'visitSku', 'visitSkuList', 'goodsCode', 'visitSkuValue', 'browseGoods', 'drawCount', '次抽奖', 'startDraw', 'score', '值 游戏:', 'point', 'getDrawRecordHasCoupon', 'getShareRecord', '当前助力:', '后面的号都会助力:', '休息1分钟，别被黑ip了\x0a可持续发展', 'https://lzdz1-isv.isvjcloud.com', 'POST', 'https://api.m.jd.com/client.action?functionId=isvObfuscator', 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=f68594bd84ce00a89cb53f9436300defecedbdb0&client=apple&clientVersion=10.1.4&st=1633922764639&sv=111&sign=faf2058f54e8e60ecc55f3e00635c86b', '/dz/common/getSimpleActInfoVo', 'activityId=', '/customer/getMyPing', 'userId=', 'shopId', '&token=', '&fromType=APP', '/common/accessLogWithAD', '/drawCenter/activity?activityId=', 'venderId=', '&code=99&pin=', '&activityId=', '&pageUrl=', '&subType=app&adSource=', '/wxActionCommon/getUserInfo', 'pin=', '/dingzhi/linkgame/activity/content', '&pin=', '&pinImg=', 'attrTouXiang', '&nick=', 'nickname', '&cjyxPin=&cjhyPin=&shareUuid=', '/dingzhi/taskact/common/drawContent', '/dingzhi/linkgame/checkOpenCard', '/dingzhi/linkgame/task/info', '/dingzhi/linkgame/draw/bean', '/dingzhi/linkgame/follow/shop', '/dingzhi/linkgame/', '&value=', '/dingzhi/linkgame/assist', '/dingzhi/linkgame/assist/status', 'viewVideo', 'toShop', 'addSku', '/dingzhi/dz/openCard/saveTask', 'toShopValue', 'addSkuValue', '&actorUuid=', '&taskType=', '&taskValue=', '/dingzhi/linkgame/draw/record', '/dingzhi/linkgame/help/list', 'post', 'statusCode', 'undefined', 'toStr', ' API请求失败，请检查网路重试', 'parse', ' 执行任务异常', 'object', 'errcode', 'token', 'message', 'isvObfuscator ', 'result', 'data', 'errorMessage', 'secretPin', 'yunMidImageUrl', 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png', 'activity', 'isEnd', 'actor', 'cardList1', 'cardList2', 'cardList', 'openCardList', 'openCardScore1', 'score1', 'openCardScore2', 'score2', 'drawScore', 'addBeanNum', 'addPoint', '游戏机会', 'beanNumMember', 'assistSendStatus', ' 额外获得:', '热门文章', '浏览店铺', '浏览商品', 'drawOk', 'drawInfoType', '空气💨', '获得:', '我的奖品：', 'recordList', 'infoName', '20京豆', 'replace', 'infoType', 'value', '邀请好友(', 'ShareCount', 'shareList', '=========== 你邀请了:', '助力成功', '已经助力过', '已经助力其他人', '-> ', 'indexOf', 'application/json', 'gzip, deflate, br', 'zh-cn', 'keep-alive', 'application/x-www-form-urlencoded', 'XMLHttpRequest', 'Referer', 'https://lzdz1-isv.isvjcloud.com/dingzhi/customized/common/activity?activityId=', 'Cookie', 'AUTH_C_USER=', 'get', ' cookie API请求失败，请检查网路重试', '活动已结束', 'headers', 'set-cookie', 'Set-Cookie', 'split', 'trim', 'LZ_TOKEN_KEY=', 'LZ_TOKEN_VALUE=', 'lz_jdpin_token=', 'jdapp;iPhone;10.1.4;13.1.2;', ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1', 'abcdef0123456789', 'charAt', 'floor', 'jAQsjWiamOXrhEAid.cEGwCQPom.vQZ6=='];
var _0x3a6d = function(_0x50b579, _0x1a4950) {
 _0x50b579 = ~~'0x' ['concat'](_0x50b579);
 var _0x4606cd = _0x2a8b[_0x50b579];
 return _0x4606cd;
};
(function(_0xe884da, _0x5f5d37) {
 var _0x4534d8 = 0x0;
 for (_0x5f5d37 = _0xe884da['shift'](_0x4534d8 >> 0x2); _0x5f5d37 && _0x5f5d37 !== (_0xe884da['pop'](_0x4534d8 >> 0x3) + '')['replace'](/[AQWOXrhEAdEGwCQPQZ=]/g, ''); _0x4534d8++) {
     _0x4534d8 = _0x4534d8 ^ 0xadd7e;
 }
}(_0x2a8b, _0x3a6d));
let cookiesArr = [],
 cookie = '';
if ($[_0x3a6d('0')]()) {
 Object[_0x3a6d('1')](jdCookieNode)[_0x3a6d('2')](_0x2e1d0e => {
     cookiesArr[_0x3a6d('3')](jdCookieNode[_0x2e1d0e]);
 });
 if (process[_0x3a6d('4')][_0x3a6d('5')] && process[_0x3a6d('4')][_0x3a6d('5')] === _0x3a6d('6')) console[_0x3a6d('7')] = () => {};
} else {
 cookiesArr = [$[_0x3a6d('8')](_0x3a6d('9')), $[_0x3a6d('8')](_0x3a6d('a')), ...jsonParse($[_0x3a6d('8')](_0x3a6d('b')) || '[]')[_0x3a6d('c')](_0x832422 => _0x832422[_0x3a6d('d')])][_0x3a6d('e')](_0x31bf20 => !!_0x31bf20);
}
guaopencard_addSku = $[_0x3a6d('0')]() ? process[_0x3a6d('4')][_0x3a6d('f')] ? process[_0x3a6d('4')][_0x3a6d('f')] : '' + guaopencard_addSku : $[_0x3a6d('8')](_0x3a6d('f')) ? $[_0x3a6d('8')](_0x3a6d('f')) : '' + guaopencard_addSku;
guaopencard_addSku = $[_0x3a6d('0')]() ? process[_0x3a6d('4')][_0x3a6d('10')] ? process[_0x3a6d('4')][_0x3a6d('10')] : '' + guaopencard_addSku : $[_0x3a6d('8')](_0x3a6d('10')) ? $[_0x3a6d('8')](_0x3a6d('10')) : '' + guaopencard_addSku;
guaopencard = $[_0x3a6d('0')]() ? process[_0x3a6d('4')][_0x3a6d('11')] ? process[_0x3a6d('4')][_0x3a6d('11')] : '' + guaopencard : $[_0x3a6d('8')](_0x3a6d('11')) ? $[_0x3a6d('8')](_0x3a6d('11')) : '' + guaopencard;
guaopencard = $[_0x3a6d('0')]() ? process[_0x3a6d('4')][_0x3a6d('12')] ? process[_0x3a6d('4')][_0x3a6d('12')] : '' + guaopencard : $[_0x3a6d('8')](_0x3a6d('12')) ? $[_0x3a6d('8')](_0x3a6d('12')) : '' + guaopencard;
guaopenwait = $[_0x3a6d('0')]() ? process[_0x3a6d('4')][_0x3a6d('13')] ? process[_0x3a6d('4')][_0x3a6d('13')] : '' + guaopenwait : $[_0x3a6d('8')](_0x3a6d('13')) ? $[_0x3a6d('8')](_0x3a6d('13')) : '' + guaopenwait;
guaopenwait = $[_0x3a6d('0')]() ? process[_0x3a6d('4')][_0x3a6d('14')] ? process[_0x3a6d('4')][_0x3a6d('14')] : '' + guaopenwait : $[_0x3a6d('8')](_0x3a6d('14')) ? $[_0x3a6d('8')](_0x3a6d('14')) : '' + guaopenwait;
guaopenwait = parseInt(guaopenwait, 0xa) || 0x0;
allMessage = '';
message = '';
$[_0x3a6d('15')] = ![];
$[_0x3a6d('16')] = ![];
$[_0x3a6d('17')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
 if ($[_0x3a6d('0')]()) {
     if (guaopencard + '' != _0x3a6d('18')) {
         console[_0x3a6d('7')](_0x3a6d('19'));
     }
     if (guaopencard + '' != _0x3a6d('18')) {
         return;
     }
 }
 if (!cookiesArr[0x0]) {
     $[_0x3a6d('1a')]($[_0x3a6d('1b')], _0x3a6d('1c'), _0x3a6d('1d'), {
         'open-url': _0x3a6d('1d')
     });
     return;
 }
 $[_0x3a6d('1e')] = _0x3a6d('1f');
 $[_0x3a6d('20')] = _0x3a6d('21');
 console[_0x3a6d('7')](_0x3a6d('22') + $[_0x3a6d('1e')] + _0x3a6d('23') + $[_0x3a6d('20')]);
 for (let _0x3e310f = 0x0; _0x3e310f < cookiesArr[_0x3a6d('24')]; _0x3e310f++) {
     cookie = cookiesArr[_0x3e310f];
     if (cookie) {
         $[_0x3a6d('25')] = decodeURIComponent(cookie[_0x3a6d('26')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x3a6d('26')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
         $[_0x3a6d('27')] = _0x3e310f + 0x1;
         message = '';
         $[_0x3a6d('28')] = 0x0;
         $[_0x3a6d('15')] = ![];
         $[_0x3a6d('29')] = '';
         console[_0x3a6d('7')](_0x3a6d('2a') + $[_0x3a6d('27')] + '】' + ($[_0x3a6d('29')] || $[_0x3a6d('25')]) + _0x3a6d('2b'));
         await getUA();
         await run();
         if (_0x3e310f == 0x0 && !$[_0x3a6d('2c')]) break;
         if ($[_0x3a6d('16')] || $[_0x3a6d('17')]) break;
     }
 }
 if ($[_0x3a6d('16')]) {
     let _0xb5bc06 = _0x3a6d('2d');
     $[_0x3a6d('1a')]($[_0x3a6d('1b')], '', '' + _0xb5bc06);
     if ($[_0x3a6d('0')]()) await notify[_0x3a6d('2e')]('' + $[_0x3a6d('1b')], '' + _0xb5bc06);
 }
})()[_0x3a6d('2f')](_0x278db3 => $[_0x3a6d('30')](_0x278db3))[_0x3a6d('31')](() => $[_0x3a6d('32')]());
async function run() {
 try {
     $[_0x3a6d('33')] = !![];
     $[_0x3a6d('34')] = 0x0;
     lz_jdpin_token_cookie = '';
     $[_0x3a6d('35')] = '';
     $[_0x3a6d('36')] = '';
     let _0x444366 = ![];
     await takePostRequest(_0x3a6d('37'));
     if ($[_0x3a6d('35')] == '') {
         console[_0x3a6d('7')](_0x3a6d('38'));
         return;
     }
     await getCk();
     if (activityCookie == '') {
         console[_0x3a6d('7')](_0x3a6d('39'));
         return;
     }
     if ($[_0x3a6d('17')] === !![]) {
         console[_0x3a6d('7')](_0x3a6d('3a'));
         return;
     }
     if ($[_0x3a6d('16')]) {
         console[_0x3a6d('7')](_0x3a6d('3b'));
         return;
     }
     await takePostRequest(_0x3a6d('3c'));
     await takePostRequest(_0x3a6d('3d'));
     if (!$[_0x3a6d('36')]) {
         console[_0x3a6d('7')](_0x3a6d('3e'));
         return;
     }
     await takePostRequest(_0x3a6d('3f'));
     await takePostRequest(_0x3a6d('40'));
     await takePostRequest(_0x3a6d('41'));
     if (!$[_0x3a6d('2c')]) {
         console[_0x3a6d('7')](_0x3a6d('42'));
         return;
     }
     if ($[_0x3a6d('33')] === !![] || Date[_0x3a6d('43')]() > $[_0x3a6d('34')]) {
         $[_0x3a6d('17')] = !![];
         console[_0x3a6d('7')](_0x3a6d('3a'));
         return;
     }
     await takePostRequest(_0x3a6d('44'));
     await $[_0x3a6d('45')](0x3e8);
     $[_0x3a6d('46')] = [];
     $[_0x3a6d('47')] = ![];
     await takePostRequest(_0x3a6d('48'));
     await takePostRequest(_0x3a6d('49'));
     if ($[_0x3a6d('47')] == ![]) {
         console[_0x3a6d('7')](_0x3a6d('4a'));
         for (o of $[_0x3a6d('46')]) {
             $[_0x3a6d('4b')] = ![];
             if (o[_0x3a6d('4c')] == 0x0) {
                 _0x444366 = !![];
                 $[_0x3a6d('4d')] = o[_0x3a6d('4e')];
                 await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0xbb8 + 0xbb8, 0xa));
                 await joinShop();
                 await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x3e8 + 0x3e8, 0xa));
                 await takePostRequest(_0x3a6d('41'));
                 await takePostRequest(_0x3a6d('44'));
                 await takePostRequest(_0x3a6d('49'));
                 await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0xbb8 + 0x7d0, 0xa));
             }
         }
     } else {
         console[_0x3a6d('7')](_0x3a6d('50'));
     }
     $[_0x3a6d('7')](_0x3a6d('51') + $[_0x3a6d('52')]);
     if (!$[_0x3a6d('52')] && !$[_0x3a6d('16')]) {
         _0x444366 = !![];
         await takePostRequest(_0x3a6d('52'));
         await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x7d0 + 0xbb8, 0xa));
     }
     $[_0x3a6d('53')] = ![];
     await takePostRequest('邀请');
     if ($[_0x3a6d('53')]) {
         await takePostRequest('助力');
     }
     $[_0x3a6d('7')](_0x3a6d('54') + $[_0x3a6d('55')]);
     if (!$[_0x3a6d('55')] && !$[_0x3a6d('16')]) {
         _0x444366 = !![];
         await takePostRequest(_0x3a6d('55'));
         await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x7d0 + 0xbb8, 0xa));
     }
     $[_0x3a6d('7')](_0x3a6d('56') + $[_0x3a6d('57')]);
     if (!$[_0x3a6d('57')] && !$[_0x3a6d('16')]) {
         if (guaopencard_addSku + '' == _0x3a6d('18')) {
             _0x444366 = !![];
             await takePostRequest(_0x3a6d('57'));
             await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x7d0 + 0xfa0, 0xa));
         } else {
             console[_0x3a6d('7')](_0x3a6d('58'));
         }
     }
     $[_0x3a6d('59')] = !![];
     $[_0x3a6d('7')](_0x3a6d('5a') + $[_0x3a6d('5b')]);
     if (!$[_0x3a6d('5b')] && !$[_0x3a6d('16')]) {
         _0x444366 = !![];
         for (let _0x5f3943 of $[_0x3a6d('5c')] || []) {
             if ($[_0x3a6d('59')] == ![]) break;
             if (_0x5f3943[_0x3a6d('5d')] && _0x5f3943[_0x3a6d('4c')] === 0x0) {
                 $[_0x3a6d('5e')] = _0x5f3943[_0x3a6d('5d')];
                 await takePostRequest(_0x3a6d('5f'));
                 await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0xbb8 + 0xbb8, 0xa));
             }
         }
     }
     $[_0x3a6d('59')] = !![];
     for (m = 0x1; $[_0x3a6d('60')]--; m++) {
         if (Number($[_0x3a6d('60')]) <= 0x0) break;
         console[_0x3a6d('7')]('第' + m + _0x3a6d('61'));
         await takePostRequest(_0x3a6d('62'));
         if ($[_0x3a6d('59')] == ![]) break;
         await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x7d0 + 0x7d0, 0xa));
     }
     if (_0x444366) {
         await takePostRequest(_0x3a6d('41'));
     }
     console[_0x3a6d('7')]($[_0x3a6d('63')] + _0x3a6d('64') + $[_0x3a6d('65')]);
     await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x3e8 + 0x7d0, 0xa));
     await takePostRequest(_0x3a6d('66'));
     await takePostRequest(_0x3a6d('67'));
     if ($[_0x3a6d('16')]) {
         console[_0x3a6d('7')](_0x3a6d('3b'));
         return;
     }
     console[_0x3a6d('7')]($[_0x3a6d('2c')]);
     console[_0x3a6d('7')](_0x3a6d('68') + $[_0x3a6d('20')]);
     if ($[_0x3a6d('27')] == 0x1) {
         $[_0x3a6d('20')] = $[_0x3a6d('2c')];
         console[_0x3a6d('7')](_0x3a6d('69') + $[_0x3a6d('20')]);
     }
     await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x3e8 + 0x1388, 0xa));
     if (_0x444366) await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x3e8 + 0x2710, 0xa));
     if (guaopenwait) {
         if ($[_0x3a6d('27')] != cookiesArr[_0x3a6d('24')]) {
             console[_0x3a6d('7')]('等待' + guaopenwait + '秒');
             await $[_0x3a6d('45')](parseInt(guaopenwait, 0xa) * 0x3e8);
         }
     } else {
         if ($[_0x3a6d('27')] % 0x3 == 0x0) console[_0x3a6d('7')](_0x3a6d('6a'));
         if ($[_0x3a6d('27')] % 0x3 == 0x0) await $[_0x3a6d('45')](parseInt(Math[_0x3a6d('4f')]() * 0x1388 + 0xea60, 0xa));
     }
 } catch (_0x11778e) {
     console[_0x3a6d('7')](_0x11778e);
 }
}
async function takePostRequest(_0x2f4bde) {
 if ($[_0x3a6d('16')]) return;
 let _0x35b6b8 = _0x3a6d('6b');
 let _0x527eef = '';
 let _0x6c0b29 = _0x3a6d('6c');
 let _0x5291ae = '';
 switch (_0x2f4bde) {
     case _0x3a6d('37'):
         _0x35b6b8 = _0x3a6d('6d');
         _0x527eef = _0x3a6d('6e');
         break;
     case _0x3a6d('3c'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('6f');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')];
         break;
     case _0x3a6d('3d'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('71');
         _0x527eef = _0x3a6d('72') + ($[_0x3a6d('73')] || $[_0x3a6d('4e')] || '') + _0x3a6d('74') + $[_0x3a6d('35')] + _0x3a6d('75');
         break;
     case _0x3a6d('3f'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('76');
         let _0x5160c4 = _0x35b6b8 + _0x3a6d('77') + $[_0x3a6d('1e')] + _0x3a6d('23') + $[_0x3a6d('20')];
         _0x527eef = _0x3a6d('78') + ($[_0x3a6d('73')] || $[_0x3a6d('4e')] || '') + _0x3a6d('79') + encodeURIComponent($[_0x3a6d('36')]) + _0x3a6d('7a') + $[_0x3a6d('1e')] + _0x3a6d('7b') + encodeURIComponent(_0x5160c4) + _0x3a6d('7c');
         break;
     case _0x3a6d('40'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('7d');
         _0x527eef = _0x3a6d('7e') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     case _0x3a6d('41'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('7f');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]) + _0x3a6d('81') + encodeURIComponent($[_0x3a6d('82')]) + _0x3a6d('83') + encodeURIComponent($[_0x3a6d('84')]) + _0x3a6d('85') + $[_0x3a6d('20')];
         break;
     case _0x3a6d('44'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('86');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     case _0x3a6d('49'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('87');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     case _0x3a6d('48'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('88');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     case _0x3a6d('62'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('89');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     case _0x3a6d('52'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('8a');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     case _0x3a6d('55'):
     case _0x3a6d('57'):
     case _0x3a6d('5f'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('8b') + _0x2f4bde;
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         if (_0x2f4bde == _0x3a6d('5f')) _0x527eef += _0x3a6d('8c') + $[_0x3a6d('5e')];
         break;
     case '邀请':
     case '助力':
         if (_0x2f4bde == '助力') {
             _0x35b6b8 = _0x35b6b8 + _0x3a6d('8d');
         } else {
             _0x35b6b8 = _0x35b6b8 + _0x3a6d('8e');
         }
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]) + _0x3a6d('23') + $[_0x3a6d('20')];
         break;
     case _0x3a6d('8f'):
     case _0x3a6d('5b'):
     case _0x3a6d('90'):
     case _0x3a6d('91'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('92');
         let _0x514aac = '';
         let _0x2645df = '';
         if (_0x2f4bde == _0x3a6d('8f')) {
             _0x514aac = 0x1f;
             _0x2645df = 0x1f;
         } else if (_0x2f4bde == _0x3a6d('5b')) {
             _0x514aac = 0x5;
             _0x2645df = $[_0x3a6d('5e')] || 0x5;
         } else if (_0x2f4bde == _0x3a6d('90')) {
             _0x514aac = 0xe;
             _0x2645df = $[_0x3a6d('93')] || 0xe;
         } else if (_0x2f4bde == _0x3a6d('91')) {
             _0x514aac = 0x2;
             _0x2645df = $[_0x3a6d('94')] || 0x2;
         }
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]) + _0x3a6d('95') + $[_0x3a6d('2c')] + _0x3a6d('96') + _0x514aac + _0x3a6d('97') + _0x2645df;
         break;
     case _0x3a6d('66'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('98');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]) + _0x3a6d('95') + $[_0x3a6d('2c')];
         break;
     case _0x3a6d('67'):
         _0x35b6b8 = _0x35b6b8 + _0x3a6d('99');
         _0x527eef = _0x3a6d('70') + $[_0x3a6d('1e')] + _0x3a6d('80') + encodeURIComponent($[_0x3a6d('36')]);
         break;
     default:
         console[_0x3a6d('7')]('错误' + _0x2f4bde);
 }
 let _0x29bfd7 = getPostRequest(_0x35b6b8, _0x527eef, _0x6c0b29);
 return new Promise(async _0x1372dd => {
     $[_0x3a6d('9a')](_0x29bfd7, (_0xd49002, _0x1691d5, _0x57d898) => {
         try {
             setActivityCookie(_0x1691d5);
             if (_0xd49002) {
                 if (_0x1691d5 && typeof _0x1691d5[_0x3a6d('9b')] != _0x3a6d('9c')) {
                     if (_0x1691d5[_0x3a6d('9b')] == 0x1ed) {
                         console[_0x3a6d('7')](_0x3a6d('3b'));
                         $[_0x3a6d('16')] = !![];
                     }
                 }
                 console[_0x3a6d('7')]('' + $[_0x3a6d('9d')](_0xd49002, _0xd49002));
                 console[_0x3a6d('7')](_0x2f4bde + _0x3a6d('9e'));
             } else {
                 dealReturn(_0x2f4bde, _0x57d898);
             }
         } catch (_0x1ad428) {
             console[_0x3a6d('7')](_0x1ad428, _0x1691d5);
         } finally {
             _0x1372dd();
         }
     });
 });
}
async function dealReturn(_0x18ddac, _0x40a705) {
 let _0x5acf5c = '';
 try {
     if (_0x18ddac != _0x3a6d('3f') || _0x18ddac != _0x3a6d('44')) {
         if (_0x40a705) {
             _0x5acf5c = JSON[_0x3a6d('9f')](_0x40a705);
         }
     }
 } catch (_0x4e1735) {
     console[_0x3a6d('7')](_0x18ddac + _0x3a6d('a0'));
     console[_0x3a6d('7')](_0x40a705);
     $[_0x3a6d('59')] = ![];
 }
 try {
     switch (_0x18ddac) {
         case _0x3a6d('37'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a2')] == 0x0) {
                     if (typeof _0x5acf5c[_0x3a6d('a3')] != _0x3a6d('9c')) $[_0x3a6d('35')] = _0x5acf5c[_0x3a6d('a3')];
                 } else if (_0x5acf5c[_0x3a6d('a4')]) {
                     console[_0x3a6d('7')](_0x3a6d('a5') + (_0x5acf5c[_0x3a6d('a4')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x40a705);
             }
             break;
         case _0x3a6d('3c'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     if (typeof _0x5acf5c[_0x3a6d('a7')][_0x3a6d('73')] != _0x3a6d('9c')) $[_0x3a6d('73')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('73')];
                     if (typeof _0x5acf5c[_0x3a6d('a7')][_0x3a6d('4e')] != _0x3a6d('9c')) $[_0x3a6d('4e')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('4e')];
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('3d'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     if (_0x5acf5c[_0x3a6d('a7')] && typeof _0x5acf5c[_0x3a6d('a7')][_0x3a6d('a9')] != _0x3a6d('9c')) $[_0x3a6d('36')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('a9')];
                     if (_0x5acf5c[_0x3a6d('a7')] && typeof _0x5acf5c[_0x3a6d('a7')][_0x3a6d('84')] != _0x3a6d('9c')) $[_0x3a6d('84')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('84')];
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('40'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     if (_0x5acf5c[_0x3a6d('a7')] && typeof _0x5acf5c[_0x3a6d('a7')][_0x3a6d('aa')] != _0x3a6d('9c')) $[_0x3a6d('82')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('aa')] || _0x3a6d('ab');
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('41'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     $[_0x3a6d('34')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('34')] || _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ac')][_0x3a6d('34')] || 0x0;
                     $[_0x3a6d('33')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ad')] || ![];
                     $[_0x3a6d('60')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ae')][_0x3a6d('60')] || 0x0;
                     $[_0x3a6d('65')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ae')][_0x3a6d('65')] || 0x0;
                     $[_0x3a6d('63')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ae')][_0x3a6d('63')] || 0x0;
                     $[_0x3a6d('2c')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ae')][_0x3a6d('2c')] || '';
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('48'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     $[_0x3a6d('57')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('57')] || ![];
                     $[_0x3a6d('52')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('52')] || ![];
                     $[_0x3a6d('55')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('55')] || ![];
                     $[_0x3a6d('5b')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('5b')] || ![];
                     $[_0x3a6d('5c')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('5c')] || [];
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('49'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     let _0x30ab20 = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('af')] || [];
                     let _0x34fb30 = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b0')] || [];
                     let _0x45dea6 = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b1')] || [];
                     let _0x30e3aa = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b2')] || [];
                     $[_0x3a6d('46')] = [..._0x45dea6, ..._0x30ab20, ..._0x34fb30, ..._0x30e3aa];
                     $[_0x3a6d('47')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('47')] || ![];
                     $[_0x3a6d('b3')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b4')] || 0x0;
                     $[_0x3a6d('b5')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b6')] || 0x0;
                     $[_0x3a6d('b7')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b7')] || 0x0;
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('62'):
         case _0x3a6d('52'):
         case _0x3a6d('8f'):
         case _0x3a6d('5b'):
         case _0x3a6d('90'):
         case _0x3a6d('91'):
         case _0x3a6d('55'):
         case _0x3a6d('57'):
         case _0x3a6d('5f'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     if (typeof _0x5acf5c[_0x3a6d('a7')] == _0x3a6d('a1')) {
                         let _0x152372 = '';
                         let _0x17e922 = '抽奖';
                         if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('b8')]) {
                             _0x152372 = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b8')] + '京豆';
                         }
                         if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('b9')]) {
                             _0x152372 += ' ' + _0x5acf5c[_0x3a6d('a7')][_0x3a6d('b9')] + _0x3a6d('ba');
                         }
                         if (_0x18ddac == _0x3a6d('52')) {
                             _0x17e922 = '关注';
                             if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('bb')] && _0x5acf5c[_0x3a6d('a7')][_0x3a6d('bc')]) {
                                 _0x152372 += _0x3a6d('bd') + _0x5acf5c[_0x3a6d('a7')][_0x3a6d('bb')] + '京豆';
                             }
                         } else if (_0x18ddac == _0x3a6d('91') || _0x18ddac == _0x3a6d('57')) {
                             _0x17e922 = '加购';
                         } else if (_0x18ddac == _0x3a6d('8f')) {
                             _0x17e922 = _0x3a6d('be');
                         } else if (_0x18ddac == _0x3a6d('90')) {
                             _0x17e922 = _0x3a6d('bf');
                         } else if (_0x18ddac == _0x3a6d('5b') || _0x18ddac == _0x3a6d('5f')) {
                             _0x17e922 = _0x3a6d('c0');
                         } else if (_0x18ddac == _0x3a6d('55')) {
                             _0x17e922 = '签到';
                         } else {
                             _0x152372 = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('c1')] == !![] && (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('c2')] == 0x6 && _0x5acf5c[_0x3a6d('a7')][_0x3a6d('1b')] || '') || _0x3a6d('c3');
                         }
                         if (!_0x152372) {
                             _0x152372 = _0x3a6d('c3');
                         }
                         console[_0x3a6d('7')](_0x17e922 + _0x3a6d('c4') + (_0x152372 || _0x40a705));
                     } else {
                         console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                     }
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     $[_0x3a6d('59')] = ![];
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('66'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![]) {
                     console[_0x3a6d('7')](_0x3a6d('c5'));
                     let _0x2fdb72 = 0x0;
                     let _0x1beab1 = 0x0;
                     for (let _0x19e3a2 in _0x5acf5c[_0x3a6d('a7')][_0x3a6d('c6')]) {
                         let _0x23a386 = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('c6')][_0x19e3a2];
                         if (_0x23a386[_0x3a6d('c7')] == _0x3a6d('c8')) {
                             _0x2fdb72++;
                             _0x1beab1 = _0x23a386[_0x3a6d('c7')][_0x3a6d('c9')]('京豆', '');
                         } else {
                             console[_0x3a6d('7')]('' + (_0x23a386[_0x3a6d('ca')] != 0xa && _0x23a386[_0x3a6d('cb')] && _0x23a386[_0x3a6d('cb')] + ':' || '') + _0x23a386[_0x3a6d('c7')]);
                         }
                     }
                     if (_0x2fdb72 > 0x0) console[_0x3a6d('7')](_0x3a6d('cc') + _0x2fdb72 + '):' + (_0x2fdb72 * parseInt(_0x1beab1, 0xa) || 0x1e) + '京豆');
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case _0x3a6d('67'):
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a6')] && _0x5acf5c[_0x3a6d('a6')] === !![] && _0x5acf5c[_0x3a6d('a7')]) {
                     $[_0x3a6d('cd')] = _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ce')][_0x3a6d('24')];
                     $[_0x3a6d('7')](_0x3a6d('cf') + _0x5acf5c[_0x3a6d('a7')][_0x3a6d('ce')][_0x3a6d('24')] + '个');
                 } else if (_0x5acf5c[_0x3a6d('a8')]) {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + (_0x5acf5c[_0x3a6d('a8')] || ''));
                 } else {
                     console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             break;
         case '邀请':
         case '助力':
             if (typeof _0x5acf5c == _0x3a6d('a1')) {
                 if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('4c')] == 0xc8) {
                     if (_0x18ddac == '助力') {
                         console[_0x3a6d('7')](_0x3a6d('d0'));
                     } else {
                         $[_0x3a6d('53')] = !![];
                     }
                 } else if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('4c')] == 0x69) {
                     console[_0x3a6d('7')](_0x3a6d('d1'));
                 } else if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('4c')] == 0x68) {
                     console[_0x3a6d('7')](_0x3a6d('d2'));
                 } else if (_0x5acf5c[_0x3a6d('a7')][_0x3a6d('4c')] == 0x65) {} else {
                     console[_0x3a6d('7')](_0x40a705);
                 }
             } else {
                 console[_0x3a6d('7')](_0x18ddac + ' ' + _0x40a705);
             }
             case _0x3a6d('3f'):
             case _0x3a6d('44'):
                 break;
             default:
                 console[_0x3a6d('7')](_0x18ddac + _0x3a6d('d3') + _0x40a705);
     }
     if (typeof _0x5acf5c == _0x3a6d('a1')) {
         if (_0x5acf5c[_0x3a6d('a8')]) {
             if (_0x5acf5c[_0x3a6d('a8')][_0x3a6d('d4')]('火爆') > -0x1) {
                 $[_0x3a6d('15')] = !![];
             }
         }
     }
 } catch (_0x1ce252) {
     console[_0x3a6d('7')](_0x1ce252);
 }
}

function getPostRequest(_0x7cec1d, _0x1fb379, _0x34df10 = _0x3a6d('6c')) {
 let _0x3bd055 = {
     'Accept': _0x3a6d('d5'),
     'Accept-Encoding': _0x3a6d('d6'),
     'Accept-Language': _0x3a6d('d7'),
     'Connection': _0x3a6d('d8'),
     'Content-Type': _0x3a6d('d9'),
     'Cookie': cookie,
     'User-Agent': $['UA'],
     'X-Requested-With': _0x3a6d('da')
 };
 if (_0x7cec1d[_0x3a6d('d4')](_0x3a6d('6b')) > -0x1) {
     _0x3bd055[_0x3a6d('db')] = _0x3a6d('dc') + $[_0x3a6d('1e')] + _0x3a6d('23') + $[_0x3a6d('20')];
     _0x3bd055[_0x3a6d('dd')] = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($[_0x3a6d('36')] && _0x3a6d('de') + $[_0x3a6d('36')] + ';' || '') + activityCookie;
 }
 return {
     'url': _0x7cec1d,
     'method': _0x34df10,
     'headers': _0x3bd055,
     'body': _0x1fb379,
     'timeout': 0x7530
 };
}

function getCk() {
 /* ck */
 return new Promise(_0x4e7ad0 => {
     let _0x57ff06 = {
         'url': _0x3a6d('dc') + $[_0x3a6d('1e')] + _0x3a6d('23') + $[_0x3a6d('20')],
         'followRedirect': ![],
         'headers': {
             'User-Agent': $['UA']
         },
         'timeout': 0x7530
     };
     $[_0x3a6d('df')](_0x57ff06, async (_0x41ba0c, _0x569d10, _0x8ca25b) => {
         try {
             if (_0x41ba0c) {
                 if (_0x569d10 && typeof _0x569d10[_0x3a6d('9b')] != _0x3a6d('9c')) {
                     if (_0x569d10[_0x3a6d('9b')] == 0x1ed) {
                         console[_0x3a6d('7')](_0x3a6d('3b'));
                         $[_0x3a6d('16')] = !![];
                     }
                 }
                 console[_0x3a6d('7')]('' + $[_0x3a6d('9d')](_0x41ba0c));
                 console[_0x3a6d('7')]($[_0x3a6d('1b')] + _0x3a6d('e0'));
             } else {
                 let _0x4551cb = _0x8ca25b[_0x3a6d('26')](/(活动已经结束)/) && _0x8ca25b[_0x3a6d('26')](/(活动已经结束)/)[0x1] || '';
                 if (_0x4551cb) {
                     $[_0x3a6d('17')] = !![];
                     console[_0x3a6d('7')](_0x3a6d('e1'));
                 }
                 setActivityCookie(_0x569d10);
             }
         } catch (_0x29105a) {
             $[_0x3a6d('30')](_0x29105a, _0x569d10);
         } finally {
             _0x4e7ad0();
         }
     });
 });
}

function setActivityCookie(_0x15e39a) {
 let _0x45d444 = '';
 let _0xbd0346 = '';
 let _0x17e729 = '';
 let _0x4b4f7c = _0x15e39a && _0x15e39a[_0x3a6d('e2')] && (_0x15e39a[_0x3a6d('e2')][_0x3a6d('e3')] || _0x15e39a[_0x3a6d('e2')][_0x3a6d('e4')] || '') || '';
 let _0x48b6c4 = '';
 if (_0x4b4f7c) {
     if (typeof _0x4b4f7c != _0x3a6d('a1')) {
         _0x48b6c4 = _0x4b4f7c[_0x3a6d('e5')](',');
     } else _0x48b6c4 = _0x4b4f7c;
     for (let _0x290a7b of _0x48b6c4) {
         let _0xbc7704 = _0x290a7b[_0x3a6d('e5')](';')[0x0][_0x3a6d('e6')]();
         if (_0xbc7704[_0x3a6d('e5')]('=')[0x1]) {
             if (_0xbc7704[_0x3a6d('d4')](_0x3a6d('e7')) > -0x1) _0x45d444 = _0xbc7704[_0x3a6d('c9')](/ /g, '') + ';';
             if (_0xbc7704[_0x3a6d('d4')](_0x3a6d('e8')) > -0x1) _0xbd0346 = _0xbc7704[_0x3a6d('c9')](/ /g, '') + ';';
             if (_0xbc7704[_0x3a6d('d4')](_0x3a6d('e9')) > -0x1) _0x17e729 = '' + _0xbc7704[_0x3a6d('c9')](/ /g, '') + ';';
         }
     }
 }
 if (_0x45d444 && _0xbd0346) activityCookie = _0x45d444 + ' ' + _0xbd0346;
 if (_0x17e729) lz_jdpin_token_cookie = _0x17e729;
}
async function getUA() {
 $['UA'] = _0x3a6d('ea') + randomString(0x28) + _0x3a6d('eb');
}

function randomString(_0xdd8f61) {
 _0xdd8f61 = _0xdd8f61 || 0x20;
 let _0x495697 = _0x3a6d('ec'),
     _0x5943a3 = _0x495697[_0x3a6d('24')],
     _0x4e7c43 = '';
 for (i = 0x0; i < _0xdd8f61; i++) _0x4e7c43 += _0x495697[_0x3a6d('ed')](Math[_0x3a6d('ee')](Math[_0x3a6d('4f')]() * _0x5943a3));
 return _0x4e7c43;
};
_0xode = 'jsjiami.com.v6';


function joinShop() {
  if(!$.joinVenderId) return
  return new Promise(async resolve => {
    $.shopactivityId = ''
    await $.wait(1000)
    await getshopactivityId()
    let activityId = ``
    if($.shopactivityId) activityId = `,"activityId":${$.shopactivityId}`
    const options = {
      url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${$.joinVenderId}","shopId":"${$.joinVenderId}","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0${activityId},"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888`,
      headers: {
        'Content-Type': 'text/plain; Charset=UTF-8',
        'Origin': 'https://api.m.jd.com',
        'Host': 'api.m.jd.com',
        'accept': '*/*',
        'User-Agent': $.UA,
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': cookie
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        // console.log(data)
        let res = $.toObj(data);
        if(typeof res == 'object'){
          if(res.success === true){
            console.log(res.message)
            if(res.result && res.result.giftInfo){
              for(let i of res.result.giftInfo.giftList){
                console.log(`入会获得:${i.discountString}${i.prizeName}${i.secondLineDesc}`)
              }
            }
          }else if(typeof res == 'object' && res.message){
            console.log(`${res.message || ''}`)
          }else{
            console.log(data)
          }
        }else{
          console.log(data)
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
function getshopactivityId() {
  return new Promise(resolve => {
    const options = {
      url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=%7B%22venderId%22%3A%22${$.joinVenderId}%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888`,
      headers: {
        'Content-Type': 'text/plain; Charset=UTF-8',
        'Origin': 'https://api.m.jd.com',
        'Host': 'api.m.jd.com',
        'accept': '*/*',
        'User-Agent': $.UA,
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie': cookie
      }
    }
    $.get(options, async (err, resp, data) => {
      try {
        let res = $.toObj(data);
        if(res.success == true){
          // console.log($.toStr(res.result))
          console.log(`入会:${res.result.shopMemberCardInfo.venderCardName || ''}`)
          $.shopactivityId = res.result.interestsRuleList && res.result.interestsRuleList[0] && res.result.interestsRuleList[0].interestsInfo && res.result.interestsRuleList[0].interestsInfo.activityId || ''
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
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

