/*
Last Modified time: 2020-11-20 14:11:01
活动入口：京东金融-双签
特殊说明：偷ck的哦
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东金融-双签
10 * * * * jd_daily_egg.js, tag=白条抽奖, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdte.png, enabled=true
 */
var OＯ0$='jsjiami.com.v6',OＯ0$_=['‮OＯ0$'],QOQ0Q=[OＯ0$,'YXIy','Y3J5cHRpY28=','YXdhcmRMaXN0Vm8=','c3RyaW5n','5Lqs5Lic6YeR6J6N5Y+M562+','aXNOb2Rl','anNkb20=','Li9zZW5kTm90aWZ5','Li9qZENvb2tpZS5qcw==','a2V5cw==','ZW52','SkRfREVCVUc=','ZmFsc2U=','bG9n','Q29va2llSkQ=','Z2V0ZGF0YQ==','bWFw','Y29va2ll','ZmlsdGVy','6K+35Yu/6ZqP5oSP5ZyoQm94SnPovpPlhaXmoYbkv67mlLnlhoXlrrkK5bu66K6u6YCa6L+H6ISa5pys5Y676I635Y+WY29va2ll','44CQ5o+Q56S644CR6K+35YWI6I635Y+W5Lqs5Lic6LSm5Y+35LiAY29va2llCuebtOaOpeS9v+eUqE5vYnlEYeeahOS6rOS4nOetvuWIsOiOt+WPlg==','bXNn','bmFtZQ==','bGVuZ3Ro','VXNlck5hbWU=','bWF0Y2g=','aW5kZXg=','bmlja05hbWU=','CioqKioqKioqKioq5byA5aeL44CQ5Lqs5Lic6LSm5Y+3','KioqKioqKioK','aXNMb2dpbg==','5Lqs5Lic6LSm5Y+3','Cuivt+mHjeaWsOeZu+W9leiOt+WPlgpodHRwczovL2JlYW4ubS5qZC5jb20vYmVhbi9zaWduSW5kZXguYWN0aW9u','c2VuZE5vdGlmeQ==','Y29va2ll5bey5aSx5pWIIC0g','LCDlpLHotKUhIOWOn+WboDog','ZmluYWxseQ==','ZG9uZQ==','Z2V0UlNBUHViS2V5','cG9zdA==','c3RyaW5naWZ5','Z2V0UlNBUHViS2V5IEFQSeivt+axguWksei0pe+8jOivt+ajgOafpee9kei3r+mHjeivlQ==','cmVzdWx0RGF0YQ==','cmVzQnVzaURhdGE=','cGFyc2U=','cmVzdWx0Q29kZQ==','bG9nRXJy','YmFzZQ==','cXVlcnlTaWduQ2FsZW5kYXI=','SlJBUFA2LjA=','eyJlaWQiOiIiLCJmcCI6IiIsInNka1Rva2VuIjoiIiwidG9rZW4iOiIifQ==','SkRfSlJfQVBQ','cXVlcnlEcmF3Q2hhbmNlIEFQSeivt+axguWksei0pe+8jOivt+ajgOafpee9kei3r+mHjeivlQ==','IEFQSeivt+axguWksei0pe+8jOivt+ajgOafpee9kei3r+mHjeivlQ==','bm9h','MzExMzcyOTMwMzQ3MzcwNDk2','Y3J5','c2V0UHVibGljS2V5U3RyaW5n','cnNhS2V5','ZW5jcnlwdERhdGE=','Y2lwaGVy','5Lqs5Lic5pyN5Yqh5Zmo6L+U5Zue56m65pWw5o2u','anJTaWduIEFQSeivt+axguWksei0pe+8jOivt+ajgOafpee9kei3r+mHjeivlQ==','cmVzQnVzaUNvZGU=','ZGVjcnlwdERhdGE=','cGxhaW50ZXh0','cmVzQnVzaU1zZw==','MDAwc3E=','RjY4QjJDM0U3MQ==','amluZ2RvdQ==','eyJmcCI6IiIsImVpZCI6IiIsInNka1Rva2VuIjoiIiwic2lkIjoiIn0=','bnUuanIuamQuY29t','a2VlcC1hbGl2ZQ==','YXBwbGljYXRpb24vanNvbg==','TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBXTFotQU4wMCBCdWlsZC9IVUFXRUlXTFotQU4wMDsgd3YpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vNC4wIENocm9tZS84OS4wLjQzODkuNzIgTVFRQnJvd3Nlci82LjIgVEJTLzA0NTk0NyBNb2JpbGUgU2FmYXJpLzUzNy4zNi9hcHBsaWNhdGlvbj1KREpSLUFwcCZjbGllbnRUeXBlPWFuZHJvaWQmZGV2aWNlSWQ9MTM0MzIzOTMxNjE2MjM5My01MzYzNTM4MzYzMDM2NjY2JnRva2VuX2VpZD1qZGQwMUxSN0RFUDY1Q1BaM1BQR0M1NU1QR1gzTldaSkc1U0lXVFhOUVZVUTNPUVAyRkc2REpTNFZRNlUySEFQRTdBU01MNExCTjJVV043VVpZQlVKVkREVklWQVRIWUNXUTdGM0pXTzdPMlkwMTIzNDU2NyZhbmRyX2lkPTEzNDMyMzkzMTYxNjIzOTMtNTM2MzUzODM2MzAzNjY2NiZvYV9pZD0wMzAzMDMwMzAzMDMwMzAzRDIwMzAzMDMwM0QyMDMwMzAzMDMtRDIwMzAzMDMwM0QyMDMwMzAzMDMwMzAzMDMwMzAzMDMwMzAzJmV1ZnY9MSZzcmM9aHVhd2VpJnZlcnNpb249Ni4zLjQ3JmNsaWVudFZlcnNpb249Ni4zLjQ3Jm9zVmVyc2lvbj0xMCZvc05hbWU9V0xaLUFOMDAmaXNVcGRhdGU9MSZIaUNsVmVyc2lvbj02LjMuNDgmbmV0V29yaz0xJm5ldFdvcmtUeXBlPTEmQ3BheUpTPVVuaW9uUGF5LzEuMCBKREpSJnNQb2ludD0mKiNAamRQYXlTREsqI0BqZFBheUNoYW5uZWw9amRGaW5hbmNlJmpkUGF5Q2hhbm5lbFZlcnNpb249Ni4zLjQ3JmpkUGF5U2RrVmVyc2lvbj00LjAwLjMzLjAwJmFuZHJvaWRCcmFuZD1IVUFXRUkmYW5kcm9pZE1hbnVmYWN0dXJlcj1IVUFXRUkmamRQYXlDbGllbnROYW1lPUFuZHJvaWQqI0BqZFBheVNESyojQA==','YXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTg=','aHR0cHM6Ly9tMS5qci5qZC5jb20=','Y29tLmpkLmpyYXBw','Z2V0VGltZQ==','anJTaWduMiBBUEnor7fmsYLlpLHotKXvvIzor7fmo4Dmn6XnvZHot6/ph43or5U=','YnVzaW5lc3NEYXRh','YnVzaW5lc3NDb2Rl','ZGF0YQ==','YnVzaW5lc3NNc2c=','cHVzaA==','YXBwbGljYXRpb24vanNvbix0ZXh0L3BsYWluLCAqLyo=','Z3ppcCwgZGVmbGF0ZSwgYnI=','emgtY24=','Li9VU0VSX0FHRU5UUw==','SkRVQQ==','amRhcHA7aVBob25lOzkuNC40OzE0LjM7bmV0d29yay80ZztNb3ppbGxhLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDE0XzMgbGlrZSBNYWMgT1MgWCkgQXBwbGVXZWJLaXQvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUvMTVFMTQ4O3N1cHBvcnRKRFNIV0svMQ==','aHR0cHM6Ly93cS5qZC5jb20vdXNlci9pbmZvL1F1ZXJ5SkRVc2VySW5mbz9zY2VuZXZhbD0y','SkRfVVNFUl9BR0VOVA==','VVNFUl9BR0VOVA==','bmlja25hbWU=','bXMuanIuamQuY29t','aHR0cHM6Ly9tZW1iZXIuanIuamQuY29t','aHR0cHM6Ly9tZW1iZXIuanIuamQuY29tLw==','cmVxRGF0YT0=','TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTAuMTU7IHJ2OjkxLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvOTEuMA==','aHR0cHM6Ly9lY28uanIuamQuY29tLw==','aHR0cHM6Ly9lY28uanIuamQuY29tL2JhaXRpYW9fbG90dGVyeS8jLz9hY3RObz0yMTEyMTMyMDIyNDM0MDAwMDAwMDM5OTkmY2hhbm5lbD13MDE=','TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBIYXJtb255T1M7IFdMWi1BTjAwOyBITVNDb3JlIDYuMi4wLjMwMikgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkyLjAuNDUxNS4xMDUgSHVhd2VpQnJvd3Nlci8xMi4wLjIuMzAxIE1vYmlsZSBTYWZhcmkvNTM3LjM2','ZGFuZ2Vyb3VzbHk=','UmVzb3VyY2VMb2FkZXI=','VmlydHVhbENvbnNvbGU=','d2FpdA==','d2luZG93','Z2V0SmRFaWQ=','QUFSMg==','grjWsjiVUOapfmJiq.rcom.v6=='];if(function(_0x153b19,_0x277da3,_0x560fa5){function _0x1bc24c(_0x1ef75a,_0x388a8d,_0x2efa7c,_0xe3dfc5,_0x63c6f,_0x496f63){_0x388a8d=_0x388a8d>>0x8,_0x63c6f='po';var _0x2c69af='shift',_0x45e399='push',_0x496f63='‮';if(_0x388a8d<_0x1ef75a){while(--_0x1ef75a){_0xe3dfc5=_0x153b19[_0x2c69af]();if(_0x388a8d===_0x1ef75a&&_0x496f63==='‮'&&_0x496f63['length']===0x1){_0x388a8d=_0xe3dfc5,_0x2efa7c=_0x153b19[_0x63c6f+'p']();}else if(_0x388a8d&&_0x2efa7c['replace'](/[grWVUOpfJqr=]/g,'')===_0x388a8d){_0x153b19[_0x45e399](_0xe3dfc5);}}_0x153b19[_0x45e399](_0x153b19[_0x2c69af]());}return 0xe402d;};return _0x1bc24c(++_0x277da3,_0x560fa5)>>_0x277da3^_0x560fa5;}(QOQ0Q,0xe0,0xe000),QOQ0Q){OＯ0$_=QOQ0Q['length']^0xe0;};function OO$$Q0(_0x4a8331,_0x4671ee){_0x4a8331=~~'0x'['concat'](_0x4a8331['slice'](0x1));var _0x23eae5=QOQ0Q[_0x4a8331];if(OO$$Q0['$QO$OQ']===undefined&&'‮'['length']===0x1){(function(){var _0x343765;try{var _0x444ce3=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x343765=_0x444ce3();}catch(_0x573093){_0x343765=window;}var _0x2a2a42='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x343765['atob']||(_0x343765['atob']=function(_0x1717f0){var _0x7676d1=String(_0x1717f0)['replace'](/=+$/,'');for(var _0x585d9e=0x0,_0x31098e,_0x117533,_0x1e7ee5=0x0,_0x252c2f='';_0x117533=_0x7676d1['charAt'](_0x1e7ee5++);~_0x117533&&(_0x31098e=_0x585d9e%0x4?_0x31098e*0x40+_0x117533:_0x117533,_0x585d9e++%0x4)?_0x252c2f+=String['fromCharCode'](0xff&_0x31098e>>(-0x2*_0x585d9e&0x6)):0x0){_0x117533=_0x2a2a42['indexOf'](_0x117533);}return _0x252c2f;});}());OO$$Q0['QQO$0Q']=function(_0x196199){var _0x40d1a7=atob(_0x196199);var _0x3f998c=[];for(var _0xeee792=0x0,_0x24a12f=_0x40d1a7['length'];_0xeee792<_0x24a12f;_0xeee792++){_0x3f998c+='%'+('00'+_0x40d1a7['charCodeAt'](_0xeee792)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3f998c);};OO$$Q0['OQ00OQ']={};OO$$Q0['$QO$OQ']=!![];}var _0x205792=OO$$Q0['OQ00OQ'][_0x4a8331];if(_0x205792===undefined){_0x23eae5=OO$$Q0['QQO$0Q'](_0x23eae5);OO$$Q0['OQ00OQ'][_0x4a8331]=_0x23eae5;}else{_0x23eae5=_0x205792;}return _0x23eae5;};const $=new Env(OO$$Q0('‮0'));const jsdom=$[OO$$Q0('‫1')]()?require(OO$$Q0('‮2')):'';const JD_API_HOST='https://ms.jr.jd.com/gw/generic/hy/h5/m';const notify=$[OO$$Q0('‫1')]()?require(OO$$Q0('‫3')):'';const jdCookieNode=$['isNode']()?require(OO$$Q0('‫4')):'';let cookiesArr=[],cookie='';if($[OO$$Q0('‫1')]()){Object[OO$$Q0('‫5')](jdCookieNode)['forEach'](OO000O0=>{cookiesArr['push'](jdCookieNode[OO000O0]);});if(process[OO$$Q0('‫6')]['JD_DEBUG']&&process[OO$$Q0('‫6')][OO$$Q0('‫7')]===OO$$Q0('‫8'))console[OO$$Q0('‮9')]=()=>{};}else{cookiesArr=[$['getdata'](OO$$Q0('‫a')),$[OO$$Q0('‮b')]('CookieJD2'),...jsonParse($[OO$$Q0('‮b')]('CookiesJD')||'[]')[OO$$Q0('‫c')](QOQQ0O0=>QOQQ0O0[OO$$Q0('‫d')])][OO$$Q0('‫e')]($Q$0QO=>!!$Q$0QO);}!(async()=>{var OOO00Q={'QQQ0$':OO$$Q0('‫f'),'O$0Q0Q':OO$$Q0('‮10'),'Q0Q$0Q':'https://bean.m.jd.com/bean/signIndex.action','$0$0OQ':function($0QOQQ){return $0QOQQ();},'$Q$O$':function($0$$O0,OQQQOO){return $0$$O0<OQQQOO;},'OQ0$$O':function(OQ0OQ0,OOQ0OOQ){return OQ0OQ0===OOQ0OOQ;},'OQO0O0':function($$0Q0O,O$$0$$){return $$0Q0O(O$$0$$);},'O$O$Q$':function(Q0OO$O,Q00O0OO){return Q0OO$O+Q00O0OO;}};if(!cookiesArr[0x0]){$[OO$$Q0('‮11')]($[OO$$Q0('‫12')],OOO00Q['O$0Q0Q'],OOO00Q['Q0Q$0Q'],{'open-url':OOO00Q['Q0Q$0Q']});return;}await OOO00Q['$0$0OQ'](jstoken2);for(let O0O$QO=0x0;OOO00Q['$Q$O$'](O0O$QO,cookiesArr[OO$$Q0('‮13')]);O0O$QO++){if(cookiesArr[O0O$QO]){if(OOO00Q['OQ0$$O']('QOQ0QQO','QOQ0QQO')){cookie=cookiesArr[O0O$QO];$[OO$$Q0('‫14')]=OOO00Q['OQO0O0'](decodeURIComponent,cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie[OO$$Q0('‫15')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[OO$$Q0('‫16')]=OOO00Q['O$O$Q$'](O0O$QO,0x1);$['isLogin']=!![];$[OO$$Q0('‫17')]='';$['stopNext']=![];await OOO00Q['$0$0OQ'](TotalBean);console[OO$$Q0('‮9')](OO$$Q0('‫18')+$[OO$$Q0('‫16')]+'】'+($[OO$$Q0('‫17')]||$[OO$$Q0('‫14')])+OO$$Q0('‮19'));if(!$[OO$$Q0('‮1a')]){$[OO$$Q0('‮11')]($[OO$$Q0('‫12')],'【提示】cookie已失效',OO$$Q0('‫1b')+$[OO$$Q0('‫16')]+'\x20'+($[OO$$Q0('‫17')]||$['UserName'])+OO$$Q0('‮1c'),{'open-url':OOO00Q['Q0Q$0Q']});if($[OO$$Q0('‫1')]()){await notify[OO$$Q0('‫1d')]($[OO$$Q0('‫12')]+OO$$Q0('‮1e')+$[OO$$Q0('‫14')],'京东账号'+$[OO$$Q0('‫16')]+'\x20'+$[OO$$Q0('‫14')]+'\x0a请重新登录获取cookie');}continue;}await OOO00Q['$0$0OQ'](jdDailyEgg);}else{console['log'](e);$[OO$$Q0('‮11')]($[OO$$Q0('‫12')],'',OOO00Q['QQQ0$']);return[];}}}})()['catch'](OQ$0Q$=>{$['log']('','❌\x20'+$[OO$$Q0('‫12')]+OO$$Q0('‮1f')+OQ$0Q$+'!','');})[OO$$Q0('‫20')](()=>{$[OO$$Q0('‮21')]();});async function jdDailyEgg(){var $Q0$QQ={'QQQ00QO':function(O$OQ0){return O$OQ0();},'Q0O00O':function(O0Q0$0){return O0Q0$0();}};await $Q0$QQ['QQQ00QO'](querySignCalendar);await $Q0$QQ['Q0O00O'](getRSAPubKey);await $Q0$QQ['Q0O00O'](jrSign);await $Q0$QQ['Q0O00O'](jrSign2);}function getRSAPubKey(){var $0OO={'OOOQ0QO':function(O0Q$$0,O0Q0Q$){return O0Q$$0===O0Q0Q$;},'OO0QOO':function(QQQ0OQ0){return QQQ0OQ0();},'QQQQ$O':function(Q00OO$,OO$QO){return Q00OO$!==OO$QO;},'OQQ000O':function(O000O0O,O$QQOO){return O000O0O!==O$QQOO;},'OQ0O0QO':function($$000$,QQ0Q00Q){return $$000$===QQ0Q00Q;},'$$$0OO':function(OOOOQ0Q,O0$0QO){return OOOOQ0Q!==O0$0QO;},'OQ0QQ0':function($$O$0O,Q$O,O0$$OQ){return $$O$0O(Q$O,O0$$OQ);},'Q0Q0$':OO$$Q0('‮22')};body={'channel':'sy','channelLv':'sy'};return new Promise(async $Q$QQO=>{var $Q0O0$={'OQOQQ0Q':function(QOQQ0QO,OOQOQ0Q){return $0OO['OOOQ0QO'](QOQQ0QO,OOQOQ0Q);},'$0Q0OQ':function(Q0$Q0){return $0OO['OO0QOO'](Q0$Q0);},'$0$QO$':function(QQQ0O00,OO0Q0OO){return $0OO['QQQQ$O'](QQQ0O00,OO0Q0OO);},'Q0O0OQ':function(QO$OO,Q$O$O0){return $0OO['OQQ000O'](QO$OO,Q$O$O0);},'OOOO0O':function($Q$QO0,O0OOQ){return $0OO['OQ0O0QO']($Q$QO0,O0OOQ);},'OQ0$00':function($O0$OQ,O$O){return $0OO['$$$0OO']($O0$OQ,O$O);}};if($0OO['$$$0OO']('O00O$O','OOOOOQO')){$[OO$$Q0('‮23')]($0OO['OQ0QQ0'](taskUrl,$0OO['Q0Q0$'],body),(OO00O,OOQQOQO,O0QQO$)=>{var Q$Q0Q={'$O0QQ0':function(Q0QQQQ0,OQOO$$){return $Q0O0$['OQOQQ0Q'](Q0QQQQ0,OQOO$$);},'OO0O$$':function(O00$Q$){return $Q0O0$['$0Q0OQ'](O00$Q$);}};try{if(OO00O){if($Q0O0$['$0$QO$']('OOQ0$Q','QQOOQ$')){console['log'](''+JSON[OO$$Q0('‮24')](OO00O));console[OO$$Q0('‮9')](OO$$Q0('‮25'));}else{$['rsaKey']=O0QQO$[OO$$Q0('‫26')][OO$$Q0('‫27')];}}else{if($Q0O0$['Q0O0OQ']('OOQQ00Q','OOQQ00Q')){$['done']();}else{if(O0QQO$){if($Q0O0$['OOOO0O']('Q$OO0','O0000QQ')){O0QQO$=JSON[OO$$Q0('‮28')](O0QQO$);if(O0QQO$[OO$$Q0('‫26')]&&Q$Q0Q['$O0QQ0'](O0QQO$[OO$$Q0('‫29')],0x0)){$['rsaKey']=O0QQO$['resultData'][OO$$Q0('‫27')];}}else{O0QQO$=JSON['parse'](O0QQO$);if(O0QQO$['resultData']&&$Q0O0$['OOOO0O'](O0QQO$[OO$$Q0('‫29')],0x0)){if($Q0O0$['OQ0$00']('OQQOQ0O','Q0QOOOQ')){$['rsaKey']=O0QQO$[OO$$Q0('‫26')][OO$$Q0('‫27')];}else{Q$Q0Q['OO0O$$']($Q$QQO);}}}}else{console[OO$$Q0('‮9')]('京东服务器返回空数据');}}}}catch(O0OQQOO){$[OO$$Q0('‮2a')](O0OQQOO,OOQQOQO);}finally{if($Q0O0$['OOOO0O']('$$O$','$$O$')){$Q0O0$['$0Q0OQ']($Q$QQO);}else{$[OO$$Q0('‮9')]('','❌\x20'+$[OO$$Q0('‫12')]+',\x20失败!\x20原因:\x20'+e+'!','');}}});}else{$[OO$$Q0('‮1a')]=![];return;}});}function querySignCalendar(){var QO$0O0={'QQQQ0QO':function(O00OQ0Q){return O00OQ0Q();},'$0OQOO':function(QO$O0O,QQ0O$){return QO$O0O!==QQ0O$;},'$Q0O$O':function(Q$Q0Q$,Q0OO$$){return Q$Q0Q$===Q0OO$$;},'$0$OO':function(OQQQOO0){return OQQQOO0();},'OOOOO0O':OO$$Q0('‫2b'),'Q$Q0O':function($0$0$$,Q$Q$QO,OQQ0QOO){return $0$0$$(Q$Q$QO,OQQ0QOO);},'Q$Q$Q0':OO$$Q0('‮2c'),'QQ$O$':OO$$Q0('‫2d'),'QO$QQQ':OO$$Q0('‮2e'),'$$0$O':OO$$Q0('‮2f')};body={'channelSource':QO$0O0['QQ$O$'],'riskDeviceParam':QO$0O0['QO$QQQ'],'site':QO$0O0['$$0$O'],'channel':'sy','channelLv':'sy'};return new Promise(async OQ$0Q=>{var Q0O0O0O={'Q000QOQ':QO$0O0['OOOOO0O']};$[OO$$Q0('‮23')](QO$0O0['Q$Q0O'](taskUrl,QO$0O0['Q$Q$Q0'],body),(O$$$OO,OQ0$$,$O0$$$)=>{var OO0QQQQ={'QO$Q$$':function($$Q$0Q){return QO$0O0['QQQQ0QO']($$Q$0Q);}};try{if(QO$0O0['$0OQOO']('QOQ0Q$','QOQ0Q$')){$[OO$$Q0('‫17')]=$O0$$$[Q0O0O0O['Q000QOQ']]&&$O0$$$[Q0O0O0O['Q000QOQ']]['nickname']||$['UserName'];}else{if(O$$$OO){console[OO$$Q0('‮9')](''+JSON[OO$$Q0('‮24')](O$$$OO));console['log'](OO$$Q0('‫30'));}else{if($O0$$$){if(QO$0O0['$0OQOO']('OQQ0$0','OQQ0$0')){OO0QQQQ['QO$Q$$'](OQ$0Q);}else{$O0$$$=JSON[OO$$Q0('‮28')]($O0$$$);if($O0$$$[OO$$Q0('‫26')]&&QO$0O0['$Q0O$O']($O0$$$[OO$$Q0('‫29')],0x0)){if(QO$0O0['$0OQOO']('$0O0Q$','$0O0Q$')){console['log'](''+JSON[OO$$Q0('‮24')](O$$$OO));console[OO$$Q0('‮9')]($[OO$$Q0('‫12')]+OO$$Q0('‮31'));}else{$['noa']=$O0$$$[OO$$Q0('‫26')][OO$$Q0('‫27')][OO$$Q0('‫32')];}}}}else{console[OO$$Q0('‮9')]('京东服务器返回空数据');}}}}catch(QQ0QQQ0){$[OO$$Q0('‮2a')](QQ0QQQ0,OQ0$$);}finally{QO$0O0['$0$OO'](OQ$0Q);}});});}function jrSign(){var $$QQQQ={'Q00O0$':function(O0Q0OO,QQ0Q0QO){return O0Q0OO===QQ0Q0QO;},'$OOQQ$':function(OQQQ0Q0,QOQOQOQ){return OQQQ0Q0===QOQOQOQ;},'QQ$O$$':function(Q0$$QO,OQQ$QO){return Q0$$QO!==OQQ$QO;},'$Q0O0Q':function(O0OO00Q,O00O$){return O0OO00Q===O00O$;},'OQOQOQ0':function(O00QO,Q$$O0O){return O00QO==Q$$O0O;},'Q0QQ0O0':function($Q0O$Q){return $Q0O$Q();},'O$0OO$':function(Q0000QQ,OO$0$,OQQQ$$){return Q0000QQ(OO$0$,OQQQ$$);},'OOQQ0Q':'jrSign','OOQOO0O':OO$$Q0('‫33'),'OOOQ$0':OO$$Q0('‫2d'),'OO0Q0Q':OO$$Q0('‮2f')};bodyinfo={'videoId':$$QQQQ['OOQOO0O'],'channelSource':$$QQQQ['OOOQ$0'],'noa':$[OO$$Q0('‫32')]};$[OO$$Q0('‫34')][OO$$Q0('‮35')]($[OO$$Q0('‮36')]);sign=$['cry'][OO$$Q0('‮37')](JSON[OO$$Q0('‮24')](bodyinfo))[OO$$Q0('‫38')];body={'site':$$QQQQ['OO0Q0Q'],'videoId':$$QQQQ['OOQOO0O'],'channelSource':$$QQQQ['OOOQ$0'],'encryptData':sign,'riskDeviceParam':'{}','channel':'sy','channelLv':'sy'};return new Promise(async Q0QQ000=>{var O$OQO$={'QQO0$O':function(Q$OOO$,Q0QOO0){return $$QQQQ['$Q0O0Q'](Q$OOO$,Q0QOO0);}};$[OO$$Q0('‮23')]($$QQQQ['O$0OO$'](taskUrl,$$QQQQ['OOQQ0Q'],body),($0OQO,$$0OQ0,$Q000)=>{var QOQQQQQ={'$Q$Q$0':function(OQ$Q$,Q$QO0$){return $$QQQQ['Q00O0$'](OQ$Q$,Q$QO0$);}};try{if($$QQQQ['$OOQQ$']('Q00Q00','Q00Q00')){if($0OQO){if($$QQQQ['QQ$O$$']('O0OQQ$','O0OQQ$')){if($Q000){$Q000=JSON[OO$$Q0('‮28')]($Q000);if($Q000['resultData']&&QOQQQQQ['$Q$Q$0']($Q000[OO$$Q0('‫29')],0x0)){$[OO$$Q0('‮36')]=$Q000['resultData'][OO$$Q0('‫27')];}}else{console[OO$$Q0('‮9')](OO$$Q0('‮39'));}}else{console[OO$$Q0('‮9')](''+JSON[OO$$Q0('‮24')]($0OQO));console[OO$$Q0('‮9')](OO$$Q0('‫3a'));}}else{if($$QQQQ['$OOQQ$']('Q$QQQ0','Q$QQQ0')){if($Q000){$Q000=JSON[OO$$Q0('‮28')]($Q000);if($Q000['resultData']&&$$QQQQ['$Q0O0Q']($Q000[OO$$Q0('‫29')],0x0)){if($$QQQQ['QQ$O$$']('O$QQ0Q','O$QQ0Q')){console['log'](''+JSON[OO$$Q0('‮24')]($0OQO));console['log']('jrSign2\x20API请求失败，请检查网路重试');}else{if($$QQQQ['OQOQOQ0']($Q000['resultData'][OO$$Q0('‫3b')],0x0)){result=$[OO$$Q0('‫34')][OO$$Q0('‫3c')]($Q000[OO$$Q0('‫26')][OO$$Q0('‫27')])[OO$$Q0('‫3d')];console[OO$$Q0('‮9')](result);}else{console[OO$$Q0('‮9')]($Q000[OO$$Q0('‫26')][OO$$Q0('‮3e')]);}}}}else{console[OO$$Q0('‮9')](OO$$Q0('‮39'));}}else{$[OO$$Q0('‫17')]=$[OO$$Q0('‫14')];}}}else{$[OO$$Q0('‮2a')](e,$$0OQ0);}}catch(OQO000Q){$[OO$$Q0('‮2a')](OQO000Q,$$0OQ0);}finally{if($$QQQQ['QQ$O$$']('OQO0QO','Q0Q$OQ')){$$QQQQ['Q0QQ0O0'](Q0QQ000);}else{$Q000=JSON[OO$$Q0('‮28')]($Q000);if($Q000[OO$$Q0('‫26')]&&O$OQO$['QQO0$O']($Q000['resultCode'],0x0)){$[OO$$Q0('‫32')]=$Q000[OO$$Q0('‫26')][OO$$Q0('‫27')][OO$$Q0('‫32')];}}}});});}function jrSign2(){var Q0O00Q={'QO0Q$O':function(OOO0$O,Q$Q0$0){return OOO0$O===Q$Q0$0;},'O000O$':OO$$Q0('‫8'),'$QQ$Q0':function(QQ$$QQ,OOQOOO0){return QQ$$QQ!==OOQOOO0;},'OOQQ0Q0':function(QOO00QO,OOQQO0O){return QOO00QO==OOQQO0O;},'O0O$$O':OO$$Q0('‫3f'),'O0QOQOO':function(QO0QOOO,QOQOOO){return QO0QOOO!==QOQOOO;},'$OQ00Q':function($OO$QQ){return $OO$QQ();},'$O$O$$':function(OOOQQ0O,O0O00Q){return OOOQQ0O==O0O00Q;},'QQ00OQ':OO$$Q0('‫40'),'Q0O0OQQ':OO$$Q0('‫41'),'Q$OQO':OO$$Q0('‮42'),'OQ00QQQ':OO$$Q0('‫43'),'OQO$$':OO$$Q0('‫44'),'O0$0$0':OO$$Q0('‮45'),'$OQ0':OO$$Q0('‫46'),'$0O$Q0':OO$$Q0('‮47'),'Q00O$0':OO$$Q0('‮48'),'O0000O0':OO$$Q0('‮49'),'$OQ$O':'https://m1.jr.jd.com/','OQ000OQ':'gzip,\x20deflate,\x20br','Q$0QQ0':'zh-CN,zh;q=0.9,th-CN;q=0.8,th;q=0.7,vi-CN;q=0.6,vi;q=0.5,en-US;q=0.4,en;q=0.3','QQO$$0':function(OO$$0Q,Q$OO){return OO$$0Q(Q$OO);}};body={'actCode':Q0O00Q['QQ00OQ'],'type':0x4,'frontParam':{'belong':Q0O00Q['Q0O0OQQ']},'riskDeviceParam':Q0O00Q['Q$OQO']};opts={'url':'https://nu.jr.jd.com/gw/generic/jrm/h5/m/process?_='+new Date()[OO$$Q0('‫4a')](),'headers':{'Host':Q0O00Q['OQ00QQQ'],'Connection':Q0O00Q['OQO$$'],'Accept':Q0O00Q['O0$0$0'],'User-Agent':Q0O00Q['$OQ0'],'Content-Type':Q0O00Q['$0O$Q0'],'Origin':Q0O00Q['Q00O$0'],'X-Requested-With':Q0O00Q['O0000O0'],'Referer':Q0O00Q['$OQ$O'],'Accept-Encoding':Q0O00Q['OQ000OQ'],'Accept-Language':Q0O00Q['Q$0QQ0'],'cookie':cookie},'body':'reqData='+Q0O00Q['QQO$$0'](encodeURIComponent,JSON['stringify'](body))};return new Promise(async OO0QOQO=>{var O000OO0={'OQOQQOQ':function($O00$$,OQOQOO){return Q0O00Q['$O$O$$']($O00$$,OQOQOO);}};$['post'](opts,($O$Q$O,Q$0,O0QQQQQ)=>{var $Q$={'QOO$':function(Q00$O,$0O$Q$){return Q0O00Q['QO0Q$O'](Q00$O,$0O$Q$);},'$000$':Q0O00Q['O000O$']};try{if($O$Q$O){console['log'](''+JSON['stringify']($O$Q$O));console[OO$$Q0('‮9')](OO$$Q0('‫4b'));}else{if(O0QQQQQ){O0QQQQQ=JSON[OO$$Q0('‮28')](O0QQQQQ);if(O0QQQQQ[OO$$Q0('‫26')]&&Q0O00Q['QO0Q$O'](O0QQQQQ[OO$$Q0('‫29')],0x0)){if(Q0O00Q['$QQ$Q0']('$QQ$$$','$QQ$$$')){if(O000OO0['OQOQQOQ'](O0QQQQQ['resultData'][OO$$Q0('‫3b')],0x0)){result=$['cry'][OO$$Q0('‫3c')](O0QQQQQ[OO$$Q0('‫26')][OO$$Q0('‫27')])['plaintext'];console['log'](result);}else{console[OO$$Q0('‮9')](O0QQQQQ[OO$$Q0('‫26')][OO$$Q0('‮3e')]);}}else{if(Q0O00Q['OOQQ0Q0'](O0QQQQQ[OO$$Q0('‫26')]['data'][OO$$Q0('‫4c')][OO$$Q0('‮4d')],Q0O00Q['O0O$$O'])){console[OO$$Q0('‮9')](O0QQQQQ[OO$$Q0('‫26')][OO$$Q0('‫4e')][OO$$Q0('‫4c')]['businessData']['awardListVo'][0x0]['name']);}else{console[OO$$Q0('‮9')](O0QQQQQ['resultData'][OO$$Q0('‫4e')][OO$$Q0('‫4c')][OO$$Q0('‮4f')]);}}}}else{if(Q0O00Q['O0QOQOO']('OO$0QQ','O$$QO0')){console[OO$$Q0('‮9')]('京东服务器返回空数据');}else{Object[OO$$Q0('‫5')](jdCookieNode)['forEach']($QQ0$Q=>{cookiesArr[OO$$Q0('‮50')](jdCookieNode[$QQ0$Q]);});if(process[OO$$Q0('‫6')][OO$$Q0('‫7')]&&$Q$['QOO$'](process['env'][OO$$Q0('‫7')],$Q$['$000$']))console['log']=()=>{};}}}}catch(O00QQQO){$[OO$$Q0('‮2a')](O00QQQO,Q$0);}finally{Q0O00Q['$OQ00Q'](OO0QOQO);}});});}function TotalBean(){var QOOQQ00={'OQ0QOQ':function($OQ$OO,O0OQQ){return $OQ$OO!==O0OQQ;},'$0OO0Q':function(OQQ$OO,QQOQOO){return OQQ$OO===QQOQOO;},'QQ$Q$Q':'retcode','OQQQO':OO$$Q0('‫2b'),'Q0Q0OQQ':function($$$$0){return $$$$0();},'O0OO0Q0':OO$$Q0('‮51'),'OO0000Q':'application/x-www-form-urlencoded','Q0$OQ$':OO$$Q0('‮52'),'OOO0$':OO$$Q0('‫53'),'$$O00Q':OO$$Q0('‫44'),'O00O0QO':'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','$0$QQQ':function(O000Q,O$QQO){return O000Q(O$QQO);},'$$$0O':OO$$Q0('‮54'),'OQO0QQQ':OO$$Q0('‫55'),'QQ00$0':OO$$Q0('‫56')};return new Promise(async $O$0O0=>{if(QOOQQ00['$0OO0Q']('QQ0OOOO','$000$Q')){$[OO$$Q0('‮2a')](e,resp);}else{const $Q0O={'url':OO$$Q0('‮57'),'headers':{'Accept':QOOQQ00['O0OO0Q0'],'Content-Type':QOOQQ00['OO0000Q'],'Accept-Encoding':QOOQQ00['Q0$OQ$'],'Accept-Language':QOOQQ00['OOO0$'],'Connection':QOOQQ00['$$O00Q'],'Cookie':cookie,'Referer':QOOQQ00['O00O0QO'],'User-Agent':$['isNode']()?process['env']['JD_USER_AGENT']?process[OO$$Q0('‫6')][OO$$Q0('‫58')]:QOOQQ00['$0$QQQ'](require,QOOQQ00['$$$0O'])[OO$$Q0('‫59')]:$[OO$$Q0('‮b')](QOOQQ00['OQO0QQQ'])?$[OO$$Q0('‮b')](QOOQQ00['OQO0QQQ']):QOOQQ00['QQ00$0']}};$[OO$$Q0('‮23')]($Q0O,($OO0O$,QO000OO,$OOQQQ)=>{if(QOOQQ00['OQ0QOQ']('OQ0O$Q','OQ0O$Q')){$[OO$$Q0('‫32')]=$OOQQQ[OO$$Q0('‫26')][OO$$Q0('‫27')][OO$$Q0('‫32')];}else{try{if($OO0O$){console[OO$$Q0('‮9')](''+JSON[OO$$Q0('‮24')]($OO0O$));console['log']($[OO$$Q0('‫12')]+OO$$Q0('‮31'));}else{if($OOQQQ){$OOQQQ=JSON[OO$$Q0('‮28')]($OOQQQ);if(QOOQQ00['$0OO0Q']($OOQQQ[QOOQQ00['QQ$Q$Q']],0xd)){$[OO$$Q0('‮1a')]=![];return;}if(QOOQQ00['$0OO0Q']($OOQQQ[QOOQQ00['QQ$Q$Q']],0x0)){$[OO$$Q0('‫17')]=$OOQQQ[QOOQQ00['OQQQO']]&&$OOQQQ[QOOQQ00['OQQQO']][OO$$Q0('‫5a')]||$['UserName'];}else{$['nickName']=$[OO$$Q0('‫14')];}}else{console[OO$$Q0('‮9')](OO$$Q0('‮39'));}}}catch(Q$$0QO){$[OO$$Q0('‮2a')](Q$$0QO,QO000OO);}finally{QOOQQ00['Q0Q0OQQ']($O$0O0);}}});}});}function taskUrl(OOQO0OO,O$QOO$){var $Q0OQO={'QO00Q0O':OO$$Q0('‫5b'),'O$OOO0':'keep-alive','O0QOQOQ':'application/json','$QO0$':OO$$Q0('‫46'),'OQOO0Q0':'application/x-www-form-urlencoded;charset=UTF-8','O$O00$':OO$$Q0('‫5c'),'O0OOQQ0':'com.jd.jrapp','O0O$00':OO$$Q0('‫5d'),'QQOQ$$':OO$$Q0('‮52'),'OO0Q$$':'zh-CN,zh;q=0.9,th-CN;q=0.8,th;q=0.7,vi-CN;q=0.6,vi;q=0.5,en-US;q=0.4,en;q=0.3','OO$QQO':function(O$00,QOQ0Q0){return O$00(QOQ0Q0);}};return{'url':JD_API_HOST+'/'+OOQO0OO,'headers':{'Host':$Q0OQO['QO00Q0O'],'Connection':$Q0OQO['O$OOO0'],'Accept':$Q0OQO['O0QOQOQ'],'User-Agent':$Q0OQO['$QO0$'],'Content-Type':$Q0OQO['OQOO0Q0'],'Origin':$Q0OQO['O$O00$'],'X-Requested-With':$Q0OQO['O0OOQQ0'],'Referer':$Q0OQO['O0O$00'],'Accept-Encoding':$Q0OQO['QQOQ$$'],'Accept-Language':$Q0OQO['OO0Q$$'],'cookie':cookie},'body':OO$$Q0('‮5e')+$Q0OQO['OO$QQO'](encodeURIComponent,JSON[OO$$Q0('‮24')](O$QOO$))};}async function jstoken2(){var O0O0={'OO0QOQQ':OO$$Q0('‫5f'),'OQ00OO0':OO$$Q0('‫60'),'QQ$0O$':OO$$Q0('‫61'),'Q0O0Q00':OO$$Q0('‮62'),'$$Q$$O':OO$$Q0('‫63'),'$OQ00O':function(O00Q00Q,O$O$O){return O00Q00Q!==O$O$O;}};const {JSDOM}=jsdom;let O$$$O0=new jsdom[(OO$$Q0('‮64'))]({'userAgent':O0O0['OO0QOQQ'],'referrer':O0O0['OQ00OO0']});let OQ0OO=new jsdom[(OO$$Q0('‫65'))]();let O0OOOO0={'url':O0O0['QQ$0O$'],'referrer':O0O0['OQ00OO0'],'userAgent':O0O0['Q0O0Q00'],'runScripts':O0O0['$$Q$$O'],'resources':O$$$O0,'includeNodeLocations':!![],'storageQuota':0x989680,'pretendToBeVisual':!![],'virtualConsole':OQ0OO};const $OO$$0=new JSDOM('<body>\x0a\x20\x20<script\x20src=\x22https://jrsecstatic.jdpay.com/jr-sec-dev-static/aar2.min.js\x22></script>\x0a\x20\x20<script\x20src=\x22https://m.jr.jd.com/common/jssdk/jrbridge/2.0.0/jrbridge.js\x22></script>\x0a\x20\x20<script\x20src=\x22https://jrsecstatic.jdpay.com/jr-sec-dev-static/cryptico.min.js\x22></script>\x0a\x20\x20<script\x20src=\x22//gia.jd.com/m.html\x22></script>\x0a\x20\x20<script\x20src=\x22//gias.jd.com/js/m.js\x22></script>\x0a\x20\x20</body>',O0OOOO0);await $[OO$$Q0('‮66')](0x5dc);try{if(O0O0['$OQ00O']('QOOQQOQ','OOOO00Q')){$['getid']=$OO$$0[OO$$Q0('‫67')][OO$$Q0('‮68')]();$OO$$0['window'][OO$$Q0('‮69')]['init']();$[OO$$Q0('‫6a')]=new $OO$$0[(OO$$Q0('‫67'))]['AAR2']();$['cry']=$OO$$0[OO$$Q0('‫67')][OO$$Q0('‫6b')];}else{console[OO$$Q0('‮9')](data[OO$$Q0('‫26')][OO$$Q0('‫4e')]['businessData']['businessData'][OO$$Q0('‮6c')][0x0][OO$$Q0('‫12')]);}}catch($0Q0$Q){}}function jsonParse($O00O){var O0OOO00={'$0OO$Q':function(OQ000QQ,QQ0O0O0){return OQ000QQ==QQ0O0O0;},'OQQO000':OO$$Q0('‮6d'),'Q0O0Q0O':OO$$Q0('‫f'),'QQ0Q000':function(QO0$$$,$$000Q){return QO0$$$==$$000Q;},'QOO00OO':function(O0$0Q$,O$QQQQ){return O0$0Q$===O$QQQQ;}};if(O0OOO00['QQ0Q000'](typeof $O00O,O0OOO00['OQQO000'])){if(O0OOO00['QOO00OO']('OQQOQ0','OQQQQ0Q')){if(O0OOO00['$0OO$Q'](typeof $O00O,O0OOO00['OQQO000'])){try{return JSON[OO$$Q0('‮28')]($O00O);}catch(QOQQOQO){console['log'](QOQQOQO);$[OO$$Q0('‮11')]($[OO$$Q0('‫12')],'',O0OOO00['Q0O0Q0O']);return[];}}}else{try{return JSON[OO$$Q0('‮28')]($O00O);}catch(O0OQ$){console['log'](O0OQ$);$['msg']($['name'],'',O0OOO00['Q0O0Q0O']);return[];}}}};OＯ0$='jsjiami.com.v6';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }