/*
转赚红包
执行流程，车头输出助力码--助力--抽奖--检查提现
可指定PIN车头(只能1个)，不指定默认CK1， 变量 JDZHBTOPPIN='jdpin'
运行一次抽奖次数,默认抽完，控制变量 JDZHBLTNUM='200'
每次抽奖间隔，默认1秒，控制变量 JDZHBDELAY='3'
开启提现到上限转红包 JDZHBTORED='true'
代理变量DY_PROXY='https://api'，仅对助力使用，支持类星空的api 
默认提现，不提现的变量 NOTX='true' 
updatetime:2023/10/11
 */const $ = new Env("Jd转赚红包");
const _0x1ba322 = $.isNode() ? require("./sendNotify") : "",
  _0x3c9b54 = $.isNode() ? require("./jdCookie.js") : "",
  _0x27d0aa = require("./function/dylanz"),
  _0xb7b786 = require("./USER_AGENTS");
let _0x9bb7 = [],
  _0x1086ee = [],
  _0x23b352 = [],
  _0x197937 = [],
  _0x2f135f,
  _0x364e5c = [],
  _0x34ba65 = "",
  _0x4d767c = "",
  _0x171e44 = "",
  _0x5c4c67,
  _0x553f2d = process.env.JDZHBNUM || "9999",
  _0x3e86c2 = process.env.JDZHBLTNUM || "-1",
  _0x114199 = process.env.JDZHBDELAY || "1",
  _0x5c5c5a = process.env.JDZHBTORED || false,
  _0x149c95 = process.env.JDZHBTOPPIN || "",
  _0xeb7bca = process.env.TXSILENT || false,
  _0x597149 = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0x2f135f = require("./function/proxy.js");
  $.dget = _0x2f135f.intoRequest($.get.bind($), true);
  $.dpost = _0x2f135f.intoRequest($.post.bind($), true);
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dpost = $.post;
} else $.dpost = $.post;
if ($.isNode()) {
  Object.keys(_0x3c9b54).forEach(_0x4d6384 => {
    _0x364e5c.push(_0x3c9b54[_0x4d6384]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x364e5c = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x5dd2ef($.getdata("CookiesJD") || "[]").map(_0x135f60 => _0x135f60.cookie)].filter(_0x3297c1 => !!_0x3297c1);
!(async () => {
  if (!_0x364e5c[0]) {
    const _0x1de8ab = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x1de8ab);
    return;
  }
  $.log("\n>>>>请注意此活动助力机会是24小时一次，不是0点刷新！！！<<<<");
  $.log("\n当前版本：20231011 20提现金");
  console.log("执行流程，车头开团--助力--抽奖--提现");
  console.log("问题建议：https://t.me/dylan_jdpro");
  let _0xaf7585 = await _0x3fed7e();
  if (_0x149c95) {
    {
      console.log("\n已指定PIN：" + _0x149c95);
      let _0x3385bc = _0x364e5c.findIndex(_0x530065 => _0x530065.includes(_0x149c95));
      if (_0x3385bc == -1) {
        console.log("运行的CK中没找到指定的PIN，停止执行！");
        return;
      }
      _0x34ba65 = _0x364e5c[_0x3385bc];
    }
  } else {
    console.log("\n未指定PIN默认CK1车头");
    _0x34ba65 = _0x364e5c[0];
  }
  $.UserName = decodeURIComponent(_0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/) && _0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.UA = _0xb7b786.UARAM ? _0xb7b786.UARAM() : _0xb7b786.USER_AGENT;
  console.log("\n——————————————车头开团——————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await _0x31f31c();
  if (!$.isLogin) {
    const _0x3f1363 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x3f1363);
    $.isNode() && (await _0x1ba322.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie"));
    return;
  }
  await _0x429de7(1);
  await $.wait(1000);
  if (_0xaf7585.length != 0) {
    {
      let _0x197b6a = _0xaf7585[Math.floor(Math.random() * _0xaf7585.length)];
      console.log("车头去助力 -> 作者");
      $.UserName = decodeURIComponent(_0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/) && _0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.UA = _0xb7b786.UARAM ? _0xb7b786.UARAM() : _0xb7b786.USER_AGENT;
      await _0x5e0279(_0x197b6a);
      await $.wait(2000);
    }
  }
  console.log("————————————————————————————————————");
  console.log("\n\n开始助力车头...");
  _0x5c4c67 = 0;
  for (let _0x1cd1d6 of _0x9bb7) {
    if (_0x364e5c.length === 1) {
      console.log("");
      break;
    }
    console.log("\n去助力-> " + _0x1cd1d6);
    $.suc = 0;
    $.alr = 0;
    $.nhp = 0;
    for (let _0x22c7c8 = _0x5c4c67; _0x22c7c8 < _0x364e5c.length; _0x22c7c8++) {
      if (_0x364e5c[_0x22c7c8]) {
        {
          _0x34ba65 = _0x364e5c[_0x22c7c8];
          $.UserName = decodeURIComponent(_0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/) && _0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
          $.index = _0x22c7c8 + 1;
          $.isLogin = true;
          $.nickName = "";
          $.UA = _0xb7b786.UARAM ? _0xb7b786.UARAM() : _0xb7b786.USER_AGENT;
          console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
          await _0x5e0279(_0x1cd1d6);
          if ($.suc > Number(_0x553f2d) + 1) {
            {
              $.log("已达目标助力数，跳出！");
              _0x5c4c67 = _0x22c7c8 + 1;
              break;
            }
          }
          await $.wait(1000);
        }
      }
    }
    if ($.index === _0x364e5c.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  console.log("\n\n开始抽奖和提现...");
  _0x3e86c2 > -1 && console.log("\n已设置本次运行抽奖次数 " + _0x3e86c2);
  let _0x4cc183 = new Date();
  _0x4cc183.setDate(_0x4cc183.getDate() - 1);
  for (let _0x2acbfd = 0; _0x2acbfd < _0x364e5c.length; _0x2acbfd++) {
    if (_0x364e5c[_0x2acbfd]) {
      _0x34ba65 = _0x364e5c[_0x2acbfd];
      $.UserName = decodeURIComponent(_0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/) && _0x34ba65.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x2acbfd + 1;
      $.isLogin = true;
      $.nickName = "";
      $.fail = 0;
      _0x1086ee = [];
      _0x23b352 = [];
      $.txj = true;
      $.fg = 1;
      $.txfull = false;
      $.nocashnum = 0;
      $.end = false;
      $.hotflag = false;
      $.toredfailnum = 0;
      $.UA = _0xb7b786.UARAM ? _0xb7b786.UARAM() : _0xb7b786.USER_AGENT;
      console.log("\n\n--------开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "----------\n");
      let _0x12c841 = await _0x429de7(0);
      if (_0x12c841.code != "0") continue;
      $.log("本轮已抽奖次数：" + _0x12c841.data.drawPrizeNum);
      $.log("当前剩余抽奖次数：" + $.times);
      $.log("本轮结束时间： " + _0x343458(new Date(Date.now() + _0x12c841.data.countDownTime)) + "\n");
      for (let _0x437d02 = 0; _0x437d02 < (_0x3e86c2 > -1 && _0x3e86c2 < $.times ? _0x3e86c2 : $.times); _0x437d02++) {
        {
          process.stdout.write("\n第" + (_0x437d02 + 1) + "次抽奖结果：");
          for (let _0xd64664 of Array(3)) {
            await _0x2182a2(_0xd64664 + 1);
            if (!$.hotflag) break;
            await $.wait(Math.random() * 500 + _0x114199 * 1000);
          }
          if ($.end) break;
          $.txj && (await _0x14a1fa());
          await $.wait(Math.random() * 500 + _0x114199 * 1000);
          if ($.fail > 2) {
            $.log("连续3次优惠券，不继续抽了");
            break;
          }
        }
      }
      _0x23b352.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + _0x23b352.reduce((_0xb68a6f, _0x4b2322) => _0xb68a6f + _0x4b2322 * 100, 0) / 100 + "元");
      _0x1086ee.length !== 0 && $.log("\n本次抽奖获得现金总计：" + _0x1086ee.reduce((_0xe1d23b, _0x3eded5) => _0xe1d23b + _0x3eded5 * 100, 0) / 100 + "元");
      if (_0x597149 != "true") {
        if (new Date().getHours() < 6 && _0xeb7bca) continue;
        $.log("\n开始提现(遍历奖励列表)...");
        _0x5c5c5a && $.log("\n已开启转红包，提现上限后会自动转红包！！\n");
        for (let _0x1fdd63 = 0; _0x1fdd63 < 50; _0x1fdd63++) {
          if ($.nocashnum > 2 || $.toredfailnum > 4) break;
          if ($.txfull && !_0x5c5c5a) {
            $.log("\n本月提现到上限!如转红包请设置变量");
            break;
          }
          await _0x244ffc(_0x1fdd63 + 1);
          await $.wait(1000);
          if (!$.baglist || $.baglist.length === 0) break;
          for (let _0x565761 of $.baglist) {
            if (new Date(_0x565761.createTime) < _0x4cc183 || $.toredfailnum > 4) {
              $.nocashnum = 5;
              break;
            }
            if (_0x565761.prizeType == 4) {
              if (_0x565761.state == 0 || _0x565761.state == 2) {
                process.stdout.write("" + Number(_0x565761.amount));
                let _0x355b95 = await _0x41e139(_0x565761);
                $.txfail && (await $.wait(3000), _0x355b95 = await _0x41e139(_0x565761));
                if ($.txfull && !_0x5c5c5a) break;
                await $.wait(1000);
                if (_0x355b95.data.message.includes("上限") && _0x5c5c5a && $.toredfailnum < 5) await _0xf569f5(_0x565761);
                await $.wait(4000);
              } else {
                if (_0x565761.state == 8) {}
              }
            }
          }
        }
      } else $.log("\n已设置不提现！");
      _0x197937 = [];
      await $.wait(2000);
    }
  }
})().catch(_0x29897c => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x29897c + "!", "");
}).finally(() => {
  $.done();
});
async function _0x429de7(_0x2c2e33) {
  let _0x30eb63 = "functionId=inviteFissionHome&body={\"linkId\":\"3orGfh1YkwNLksxOcN8zWQ\",\"inviter\":\"\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  return new Promise(async _0x2a4667 => {
    $.post(_0xd41f04(_0x30eb63), async (_0x1ab694, _0xc7a799, _0x216430) => {
      try {
        if (_0x1ab694) {
          console.log("" + JSON.stringify(_0x1ab694));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          {
            _0x216430 = JSON.parse(_0x216430);
            if (_0x216430.code == 0) {
              $.times = _0x216430.data.prizeNum;
              if (_0x2c2e33) console.log("助力码：" + _0x216430.data.inviter);
              _0x9bb7.push(_0x216430.data.inviter);
            } else console.log(_0x216430.errMsg);
          }
        }
      } catch (_0x13d02c) {
        $.logErr(_0x13d02c, _0xc7a799);
      } finally {
        _0x2a4667(_0x216430);
      }
    });
  });
}
async function _0x14a1fa() {
  const _0x3e0397 = {
    "mMFOp": function (_0x38e55d, _0x3dad68) {
      return _0x38e55d == _0x3dad68;
    },
    "bAnMd": "swWRq",
    "wDIFp": "NqJwY",
    "SAQTn": "inviteFissionReceive",
    "EKrhV": "ios"
  };
  const _0x10d0d0 = _0x3e0397,
    _0x470c5b = {
      "linkId": "3orGfh1YkwNLksxOcN8zWQ"
    };
  let _0x505187 = _0x470c5b,
    _0x2f25aa = {
      "appId": "b8469",
      "fn": _0x10d0d0.SAQTn,
      "body": _0x505187,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": _0x10d0d0.EKrhV,
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x10d0d0.mMFOp($.fg, 1) && ($.fg = 0);
  _0x505187 = await _0x27d0aa.getbody(_0x2f25aa);
  if (!_0x505187) return;
  return new Promise(async _0x24bd11 => {
    _0x10d0d0.wDIFp === "yQrkG" ? _0x57498f.isLogin = false : $.post(_0xd41f04(_0x505187), async (_0xa687a5, _0x12a8c3, _0xa020d8) => {
      try {
        _0xa687a5 ? (console.log("" + JSON.stringify(_0xa687a5)), console.log("receive请求失败，请检查网路重试")) : (_0xa020d8 = JSON.parse(_0xa020d8), _0x10d0d0.mMFOp(_0xa020d8.code, 0) ? _0x10d0d0.bAnMd !== _0x10d0d0.bAnMd ? (_0x13d4e6.log("结果：没有次数了！"), _0x560c5b.nohelp = true, _0x59c1d1.nhp++) : $.log("----提现金：" + _0xa020d8.data.amount) : $.txj = false);
      } catch (_0x24fbb8) {
        $.logErr(_0x24fbb8, _0x12a8c3);
      } finally {
        _0x24bd11(_0xa020d8);
      }
    });
  });
}
async function _0x2182a2(_0x48ac6a) {
  const _0x3f1eef = {
    "PTtLj": function (_0x38021c, _0x3d37e2) {
      return _0x38021c === _0x3d37e2;
    },
    "dPDeP": "VlcdZ",
    "HLjOJ": function (_0x277c90, _0x137471) {
      return _0x277c90 === _0x137471;
    },
    "kIVui": "hTIAT",
    "kednH": "activities_platform",
    "GMgNZ": function (_0x3056b6, _0x23ce71) {
      return _0x3056b6 == _0x23ce71;
    }
  };
  const _0x4c4db0 = _0x3f1eef,
    _0x5021ac = {
      "linkId": "3orGfh1YkwNLksxOcN8zWQ"
    };
  let _0x57b80d = _0x5021ac,
    _0x2f62d0 = {
      "appId": "c02c6",
      "fn": "inviteFissionDrawPrize",
      "body": _0x57b80d,
      "apid": _0x4c4db0.kednH,
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "xcr": $.fg,
      "ua": $.UA
    };
  _0x4c4db0.GMgNZ($.fg, 1) && ($.fg = 0);
  _0x57b80d = await _0x27d0aa.getbody(_0x2f62d0);
  if (!_0x57b80d) return;
  return new Promise(async _0x2547ad => {
    $.post(_0xd41f04(_0x57b80d), async (_0x5d5c05, _0x3c0eb4, _0x280d81) => {
      try {
        if (_0x5d5c05) {
          console.log("" + JSON.stringify(_0x5d5c05));
          console.log("lottery请求失败，请检查网路重试");
        } else {
          if (_0x4c4db0.PTtLj(_0x4c4db0.dPDeP, "xqNTk")) _0x25f219(_0x342343);else {
            _0x280d81 = JSON.parse(_0x280d81);
            if (_0x280d81.code == 0) {
              const _0x169e77 = _0x280d81.data.prizeType;
              if (!_0x169e77) fail++;
              switch (_0x169e77) {
                case 1:
                  process.stdout.write("垃圾卷😤");
                  $.fail++;
                  $.hotflag = false;
                  break;
                case 4:
                  let _0x1889a3 = parseFloat(_0x280d81.data.prizeValue).toFixed(2);
                  process.stdout.write(_0x1889a3 + "现金💰️");
                  _0x1086ee.push(_0x1889a3);
                  const _0x1e58aa = {
                    "prizeValue": _0x280d81.data.prizeValue,
                    "id": _0x280d81.data.id,
                    "poolBaseId": _0x280d81.data.poolBaseId,
                    "prizeGroupId": _0x280d81.data.prizeGroupId,
                    "prizeBaseId": _0x280d81.data.prizeBaseId
                  };
                  _0x197937.push(_0x1e58aa);
                  $.fail = 0;
                  $.hotflag = false;
                  break;
                case 2:
                  let _0x38878d = parseFloat(_0x280d81.data.prizeValue).toFixed(2);
                  process.stdout.write(_0x38878d + "红包🧧 ");
                  _0x23b352.push(_0x38878d);
                  $.fail = 0;
                  $.hotflag = false;
                  break;
                default:
                  $.hotflag = false;
                  console.log(JSON.stringify(_0x280d81.data));
              }
            } else {
              if (_0x280d81.errMsg.includes("火爆")) _0x4c4db0.HLjOJ("Hknxh", _0x4c4db0.kIVui) ? _0x5ba4c2.log("----提现金：" + _0x478d2f.data.amount) : (process.stdout.write("未中奖 "), $.hotflag = true);else _0x280d81.errMsg.includes("结束") ? ($.end = true, $.hotflag = false, console.log(_0x280d81.errMsg)) : ($.hotflag = false, console.log(_0x280d81.errMsg));
            }
          }
        }
      } catch (_0x46e5a) {
        $.logErr(_0x46e5a, _0x3c0eb4);
      } finally {
        _0x2547ad(_0x280d81);
      }
    });
  });
}
async function _0x244ffc(_0xa8ac04) {
  const _0x37e0f1 = {
    "pageNum": _0xa8ac04,
    "pageSize": 100,
    "linkId": "3orGfh1YkwNLksxOcN8zWQ",
    "business": "fission"
  };
  let _0x5efa4f = _0x37e0f1,
    _0x41061e = {
      "appId": "f2b1d",
      "fn": "superRedBagList",
      "body": _0x5efa4f,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  _0x5efa4f = await _0x27d0aa.getbody(_0x41061e);
  if (!_0x5efa4f) return;
  return new Promise(async _0x1e9ace => {
    $.get(_0xd41f04(_0x5efa4f), async (_0x1805ba, _0x120294, _0x5a6e30) => {
      try {
        if (_0x1805ba) {
          console.log("" + JSON.stringify(_0x1805ba));
          console.log(" API请求失败，请检查网路重试");
        } else {
          {
            _0x5a6e30 = JSON.parse(_0x5a6e30);
            if (_0x5a6e30.code == 0) $.baglist = _0x5a6e30.data.items;else {
              console.log(_0x5a6e30.errMsg);
            }
          }
        }
      } catch (_0x1ab458) {
        $.logErr(_0x1ab458, _0x120294);
      } finally {
        _0x1e9ace(_0x5a6e30);
      }
    });
  });
}
async function _0x5e0279(_0x2be71b) {
  const _0x39bd10 = {
    "wBbYS": "oxkby",
    "xQYUO": function (_0x337135, _0x579337) {
      return _0x337135 === _0x579337;
    },
    "EuDrv": "QEbTd",
    "miSJP": function (_0x1d8ffa, _0x3747ec) {
      return _0x1d8ffa == _0x3747ec;
    },
    "qUUzm": function (_0x4719e8, _0x245272) {
      return _0x4719e8 == _0x245272;
    },
    "EXRMc": function (_0x32b84b, _0x1441d0) {
      return _0x32b84b !== _0x1441d0;
    },
    "bhLvu": "TyfTp",
    "cXuHK": "结果：没有次数了！",
    "oRsRJ": function (_0x53c4bf, _0x9f060a) {
      return _0x53c4bf == _0x9f060a;
    },
    "CseFX": "KtZjb",
    "yrgYs": "结果：TA未开启新的一轮 💤",
    "JQPCF": function (_0x25f22e, _0x535fe1) {
      return _0x25f22e === _0x535fe1;
    },
    "ePALZ": "BMfXy",
    "FFxvu": "https-proxy-agent",
    "WJPum": "02f8d"
  };
  const _0x5de3c9 = _0x39bd10,
    _0x2ac6f7 = {
      "linkId": "3orGfh1YkwNLksxOcN8zWQ",
      "isJdApp": true,
      "inviter": _0x2be71b
    };
  let _0xbe34db = _0x2ac6f7,
    _0x22fd1e = {
      "appId": _0x5de3c9.WJPum,
      "fn": "inviteFissionBeforeHome",
      "body": _0xbe34db,
      "apid": "activities_platform",
      "ver": $.UA.split(";")[2],
      "cl": "ios",
      "user": $.UserName,
      "code": 1,
      "xcr": 1,
      "ua": $.UA
    };
  _0xbe34db = await _0x27d0aa.getbody(_0x22fd1e);
  if (!_0xbe34db) return;
  return new Promise(async _0x1817dd => {
    const _0x391f82 = {
      "OhQsP": _0x5de3c9.FFxvu
    };
    const _0x508bcf = _0x391f82;
    $.dpost(_0xd41f04(_0xbe34db), async (_0x27f6e3, _0x4f11ed, _0x540d1d) => {
      try {
        if (_0x5de3c9.wBbYS !== "oxkby") {
          _0x280239(_0x508bcf.OhQsP);
          _0x139d1c = _0x2d24e5("./function/proxy.js");
          _0x213dae.dget = _0x161731.intoRequest(_0x297105.get.bind(_0xe427d), true);
          _0x41e250.dpost = _0x489e5e.intoRequest(_0x46810b.post.bind(_0x3d6ff5), true);
        } else {
          if (_0x27f6e3) {
            console.log("" + JSON.stringify(_0x27f6e3));
            console.log("help请求失败，请检查网路重试");
          } else {
            if (_0x5de3c9.xQYUO(_0x5de3c9.EuDrv, "WGouc")) _0x4e8038.data.resCode === "0" ? _0xccd762.stdout.write("🧧 ") : (_0x4fedd0.stdout.write("❎ "), _0x352bdf.toredfailnum++);else {
              _0x540d1d = JSON.parse(_0x540d1d);
              if (_0x540d1d.code == 0) {
                {
                  if (!_0x540d1d.data.helpFlg) {
                    $.log("结果：不能助力自己！");
                    return;
                  }
                  if (_0x540d1d.data.helpResult == 1) {
                    $.suc++;
                    $.alr = 0;
                    console.log("结果：助力成功 ✅ " + ($.suc || ""));
                  } else {
                    if (_0x5de3c9.miSJP(_0x540d1d.data.helpResult, 6)) {
                      console.log("结果：已经助力过TA！");
                      $.alr++;
                    } else {
                      if (_0x5de3c9.qUUzm(_0x540d1d.data.helpResult, 3)) _0x5de3c9.EXRMc(_0x5de3c9.bhLvu, "FAhmD") ? (console.log(_0x5de3c9.cXuHK), $.nohelp = true, $.nhp++) : (_0x58c4bf.log("结果：没有助力次数！"), _0x39926c.nhp++);else {
                        if (_0x5de3c9.oRsRJ(_0x540d1d.data.helpResult, 2)) _0x5de3c9.EXRMc("KtZjb", _0x5de3c9.CseFX) ? _0x5ced90.log(_0x8b2ac4.msg) : ($.log("结果：助力黑了 💣"), $.hot = true);else {
                          if (_0x540d1d.data.helpResult == 4) {
                            $.log("结果：没有助力次数！");
                            $.nhp++;
                          } else _0x540d1d.data.helpResult == 8 ? $.log(_0x5de3c9.yrgYs) : console.log(JSON.stringify(_0x540d1d));
                        }
                      }
                    }
                  }
                }
              } else console.log(_0x540d1d.errMsg);
            }
          }
        }
      } catch (_0x3be6df) {
        $.logErr(_0x3be6df, _0x4f11ed);
      } finally {
        if (_0x5de3c9.JQPCF("tNQux", _0x5de3c9.ePALZ)) {
          const _0x4a2786 = _0x14a928 ? function () {
            if (_0x267002) {
              const _0x192e87 = _0x26207f.apply(_0x862649, arguments);
              _0x2b737d = null
              return _0x192e87;
            }
          } : function () {};
          _0x23016f = false
          return _0x4a2786;
        } else _0x1817dd(_0x540d1d);
      }
    });
  });
}
async function _0x41e139(_0x6e09bc) {
  let _0x34aa6e = "functionId=apCashWithDraw&body={\"linkId\":\"3orGfh1YkwNLksxOcN8zWQ\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x6e09bc.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x6e09bc.poolBaseId + ",\"prizeGroupId\":" + _0x6e09bc.prizeGroupId + ",\"prizeBaseId\":" + _0x6e09bc.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  return new Promise(async _0x5ad815 => {
    $.post(_0xd41f04(_0x34aa6e), async (_0x47479e, _0x1fd528, _0x4f5805) => {
      try {
        if (_0x47479e) {
          console.log("" + JSON.stringify(_0x47479e));
          console.log("apCashWithDraw请求失败，请检查网路重试");
        } else {
          _0x4f5805 = JSON.parse(_0x4f5805);
          if (_0x4f5805.code == 0) {
            if (_0x4f5805.data.message.indexOf("待发放") > -1) {
              process.stdout.write("❎");
              $.txfail = true;
            } else {
              if (_0x4f5805.data.message.includes("上限")) $.txfull = true;else _0x4f5805.data.message.includes("提现") ? (process.stdout.write("✅ "), $.txfail = false) : console.log(_0x4f5805.data.message);
            }
          } else console.log(_0x4f5805.errMsg);
        }
      } catch (_0x4f6d62) {
        $.logErr(_0x4f6d62, _0x1fd528);
      } finally {
        _0x5ad815(_0x4f5805);
      }
    });
  });
}
function _0xf569f5(_0x45f491) {
  const _0x41da16 = {
    "VnbYf": "debu",
    "lxJwi": "iItVK",
    "qazgI": "application/x-www-form-urlencoded"
  };
  const _0x1ca19f = _0x41da16;
  let _0x26729f = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x45f491.id + ",\"business\":\"fission\",\"poolId\":" + _0x45f491.poolBaseId + ",\"prizeGroupId\":" + _0x45f491.prizeGroupId + ",\"prizeId\":" + _0x45f491.prizeBaseId + ",\"linkId\":\"3orGfh1YkwNLksxOcN8zWQ\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x5ee003 = {
    "Host": "api.m.jd.com",
    "Origin": "https://prodev.m.jd.com",
    "Content-Type": _0x1ca19f.qazgI,
    "User-Agent": $.UA,
    "Cookie": _0x34ba65
  };
  const _0x7020f1 = {
    "url": "https://api.m.jd.com/api",
    "body": _0x26729f,
    "headers": _0x5ee003
  };
  let _0x3e1859 = _0x7020f1;
  return new Promise(async _0x3ea532 => {
    const _0x3dfd2c = {
      "tgLiF": function (_0x31c821, _0x46d671) {
        return _0x31c821 === _0x46d671;
      },
      "sPtgU": _0x1ca19f.VnbYf,
      "cepyw": _0x1ca19f.lxJwi,
      "WzVmX": function (_0x4d96c6, _0x1c210c) {
        return _0x4d96c6 === _0x1c210c;
      },
      "TCHTf": "jUsKn"
    };
    const _0x1f0255 = _0x3dfd2c;
    $.post(_0x3e1859, async (_0x230304, _0x22ca56, _0x80ae72) => {
      const _0x34ca2e = {
        "QVbzx": function (_0x3126b1, _0x4c96d0) {
          return _0x1f0255.tgLiF(_0x3126b1, _0x4c96d0);
        },
        "yGbjt": _0x1f0255.sPtgU,
        "wwgMS": "gger"
      };
      if ("iItVK" !== _0x1f0255.cepyw) return false;else try {
        if (_0x1f0255.WzVmX("KZzVk", "qQbMp")) try {
          return _0x424190.parse(_0x430099);
        } catch (_0x45fb11) {
          _0x53c102.log(_0x45fb11)
          _0x4adb92.msg(_0x2f883b.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie")
          return [];
        } else {
          if (_0x230304) {
            if (_0x1f0255.TCHTf !== "yabSq") {
              console.log("" + JSON.stringify(_0x230304));
              console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
            } else {
              if (_0x2c7d7d) {
                _0x47408f = _0x292f59.parse(_0x156844);
                if (_0x3c2c7c.islogin === "1") {} else _0x34ca2e.QVbzx(_0x5ede0b.islogin, "0") && (_0x3c883a.isLogin = false);
              }
            }
          } else {
            _0x80ae72 = JSON.parse(_0x80ae72);
            if (_0x80ae72.code == 0) _0x1f0255.WzVmX(_0x80ae72.data.resCode, "0") ? process.stdout.write("🧧 ") : (process.stdout.write("❎ "), $.toredfailnum++);else _0x80ae72.errMsg === "失败" ? (process.stdout.write("❎ "), $.toredfailnum++) : console.log(_0x80ae72.errMsg);
          }
        }
      } catch (_0x4360b3) {
        $.logErr(_0x4360b3, _0x22ca56);
      } finally {
        _0x3ea532(_0x80ae72);
      }
    });
  });
}
function _0xd41f04(_0x10ae6f) {
  const _0x5703fc = {
    "mXgoV": "https://prodev.m.jd.com",
    "cFZIY": "application/x-www-form-urlencoded"
  };
  const _0x5529e6 = _0x5703fc,
    _0x1b57b3 = {
      "Host": "api.m.jd.com",
      "Origin": _0x5529e6.mXgoV,
      "Content-Type": _0x5529e6.cFZIY,
      "User-Agent": $.UA,
      "Cookie": _0x34ba65
    };
  const _0x505c91 = {};
  _0x505c91.url = "https://api.m.jd.com/?" + _0x10ae6f
  _0x505c91.headers = _0x1b57b3
  return _0x505c91;
}
function _0x31f31c() {
  const _0x2d3d8a = {
    "VLCcE": "https://plogin.m.jd.com/cgi-bin/ml/islogin"
  };
  const _0xcee4c5 = _0x2d3d8a;
  return new Promise(_0x20f713 => {
    const _0x45f2bf = {
      "RvybI": "DSTuA",
      "TJstA": function (_0x1e92be, _0x41c934) {
        return _0x1e92be === _0x41c934;
      },
      "HJfAm": "OSHQM"
    };
    const _0x5e43d5 = _0x45f2bf,
      _0xa6393b = {
        "Cookie": _0x34ba65,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      };
    const _0x7ffed8 = {
      "url": _0xcee4c5.VLCcE,
      "headers": _0xa6393b,
      "timeout": 10000
    };
    const _0x126e8e = _0x7ffed8;
    $.get(_0x126e8e, (_0x3d64a1, _0x3121a6, _0x360b62) => {
      try {
        if ("DSTuA" === _0x5e43d5.RvybI) {
          if (_0x360b62) {
            _0x360b62 = JSON.parse(_0x360b62);
            if (_0x360b62.islogin === "1") {} else _0x360b62.islogin === "0" && ($.isLogin = false);
          }
        } else {
          _0x3c10c3.log("" + _0xecf942.stringify(_0x20fcfd));
          _0x22b75d.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
        }
      } catch (_0x55d604) {
        console.log(_0x55d604);
      } finally {
        _0x5e43d5.TJstA("LtuYX", _0x5e43d5.HJfAm) ? _0x2308d3(_0x3ee733) : _0x20f713();
      }
    });
  });
}
function _0x19c1f0() {
  const _0xd3adf7 = {
    "jisvI": "wSpBx"
  };
  const _0x2030a2 = _0xd3adf7;
  return new Promise(_0x1ae684 => {
    {
      if (_0x2030a2.jisvI !== "hrSaq") $.log("京东账号" + $.index + $.nickName + "\n" + _0x4d767c);else {
        const _0x59a04a = _0x2f62ea.apply(_0x37b968, arguments);
        _0x5d6b63 = null
        return _0x59a04a;
      }
    }
    _0x1ae684();
  });
}
function _0x4169e4(_0x3821f3) {
  const _0x19d5a5 = {
    "JyHok": function (_0x1c2799, _0x38c742) {
      return _0x1c2799 === _0x38c742;
    },
    "Tcbdf": "object"
  };
  const _0x645248 = _0x19d5a5;
  try {
    if (_0x645248.JyHok("JrqpN", "wtwkF")) {
      _0x4ae23a.log("\n服务连接失败，终止执行！");
      _0x36c08d.exit(111);
    } else {
      if (typeof JSON.parse(_0x3821f3) == _0x645248.Tcbdf) return true;
    }
  } catch (_0x3cf1b2) {
    console.log(_0x3cf1b2)
    console.log("京东服务器访问数据为空，请检查自身设备网络情况")
    return false;
  }
}
function _0x3fed7e() {
  const _0x30b6e6 = {
    "cvxYs": "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/jd50cxj"
  };
  const _0x7b6cad = _0x30b6e6,
    _0x25f29c = {
      "url": _0x7b6cad.cvxYs,
      "timeout": 30000
    };
  let _0x268f7c = _0x25f29c;
  return new Promise(_0x521c07 => {
    $.get(_0x268f7c, async (_0x2dd4de, _0x5b134e, _0x365d3c) => {
      try {
        if (_0x2dd4de) {
          console.log("\n服务连接失败，终止执行！");
          process.exit(111);
        } else {
          {
            if (_0x365d3c) {
              _0x365d3c = JSON.parse(_0x365d3c);
              if (_0x365d3c.code === 200) _0x171e44 = _0x365d3c.data;else {}
            }
          }
        }
      } catch (_0x46d3dd) {
        $.logErr(_0x46d3dd, _0x5b134e);
      } finally {
        _0x521c07(_0x171e44);
      }
    });
  });
}
function _0x343458(_0x3a05c1) {
  const _0x4c6be1 = _0x3a05c1.getFullYear(),
    _0x15ce1e = ("0" + (_0x3a05c1.getMonth() + 1)).slice(-2),
    _0x33ae1b = ("0" + _0x3a05c1.getDate()).slice(-2),
    _0x4e7b5a = ("0" + _0x3a05c1.getHours()).slice(-2),
    _0x32a591 = ("0" + _0x3a05c1.getMinutes()).slice(-2),
    _0x596021 = ("0" + _0x3a05c1.getSeconds()).slice(-2);
  return _0x4c6be1 + "/" + _0x15ce1e + "/" + _0x33ae1b + " " + _0x4e7b5a + ":" + _0x32a591 + ":" + _0x596021;
}
function _0x5dd2ef(_0xe78095) {
  const _0x37d427 = function () {
      const _0x44e09f = {
        "hEbbM": function (_0x2bcfd9, _0xc3c5a5) {
          return _0x2bcfd9 !== _0xc3c5a5;
        }
      };
      const _0x41d92a = _0x44e09f;
      let _0xc91f30 = true;
      return function (_0x18cca7, _0x57ba03) {
        {
          const _0x23b028 = _0xc91f30 ? function () {
            if (_0x41d92a.hEbbM("lHgDJ", "uDXbA")) {
              if (_0x57ba03) {
                const _0x435866 = _0x57ba03.apply(_0x18cca7, arguments);
                _0x57ba03 = null
                return _0x435866;
              }
            } else _0x1ec288.logErr(_0x3cff4b, _0x23a452);
          } : function () {};
          _0xc91f30 = false
          return _0x23b028;
        }
      };
    }(),
    _0xef2c85 = _0x37d427(this, function () {
      return _0xef2c85.toString().search("(((.+)+)+)+$").toString().constructor(_0xef2c85).search("(((.+)+)+)+$");
    });
  _0xef2c85();
  const _0x5c3c72 = function () {
    let _0x73a042 = true;
    return function (_0x201deb, _0xe4cef8) {
      const _0x4299cf = _0x73a042 ? function () {
        if (_0xe4cef8) {
          const _0x50b020 = _0xe4cef8.apply(_0x201deb, arguments);
          _0xe4cef8 = null
          return _0x50b020;
        }
      } : function () {};
      _0x73a042 = false
      return _0x4299cf;
    };
  }();
  {
    _0x5c3c72(this, function () {
      const _0x20f1e6 = new RegExp("function *\\( *\\)"),
        _0x26f35e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x36365b = _0x3da20a("init");
      if (!_0x20f1e6.test(_0x36365b + "chain") || !_0x26f35e.test(_0x36365b + "input")) {
        _0x36365b("0");
      } else _0x3da20a();
    })();
  }
  if (typeof _0xe78095 == "string") try {
    return JSON.parse(_0xe78095);
  } catch (_0x5c2a47) {
    console.log(_0x5c2a47)
    $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie")
    return [];
  }
}
function _0x1b74a7(_0x5286c6) {
  const _0x591893 = {
    "kuLZe": "MDmGC",
    "OzdcL": function (_0x4bfd1b, _0x233dc0) {
      return _0x4bfd1b === _0x233dc0;
    },
    "KcFZN": "application/json"
  };
  const _0x1842d4 = _0x591893,
    _0xc474b2 = {
      "Content-Type": _0x1842d4.KcFZN
    };
  let _0x40d131 = {
      "url": "http://123.57.164.4:8080/",
      "body": JSON.stringify(_0x5286c6),
      "headers": _0xc474b2,
      "timeout": 10000
    },
    _0x122450 = "";
  return new Promise(_0x4f4ba5 => {
    const _0x46b4fe = {
      "BHAwC": "BxAeJ",
      "ZYOeH": _0x1842d4.kuLZe,
      "bWMlG": function (_0x59f87f, _0x11a677) {
        return _0x1842d4.OzdcL(_0x59f87f, _0x11a677);
      }
    };
    $.post(_0x40d131, (_0x553675, _0x5c5284, _0x491845) => {
      try {
        _0x553675 ? console.log("连接失败") : (_0x491845 = JSON.parse(_0x491845), _0x491845.code == 200 ? _0x46b4fe.ZYOeH !== "MmIOX" ? _0x122450 = _0x491845.data : _0xbad906(_0x5d4ece) : $.log(_0x491845.msg));
      } catch (_0x13d0b0) {
        console.log(_0x13d0b0, _0x5c5284);
      } finally {
        if (_0x46b4fe.bWMlG("nokPA", "nokPA")) _0x4f4ba5(_0x122450);else return true;
      }
    });
  });
}
function _0x3da20a(_0x268921) {
  function _0x346b52(_0x42db92) {
    const _0x160b2e = {
      "ZOpsF": "vJmqH",
      "ASCPH": "CookieJD2"
    };
    const _0x1ddeca = _0x160b2e;
    if (typeof _0x42db92 === "string") return function (_0x49aac2) {}.constructor("while (true) {}").apply("counter");else ("" + _0x42db92 / _0x42db92).length !== 1 || _0x42db92 % 20 === 0 ? function () {
      const _0xc82b27 = {
        "IRCKi": function (_0x3fb27a, _0x5ef6db) {
          return _0x3fb27a + _0x5ef6db;
        },
        "AufmZ": function (_0x3d6b67, _0x375fb1) {
          return _0x3d6b67 == _0x375fb1;
        }
      };
      const _0x231d9e = _0xc82b27;
      if (_0x1ddeca.ZOpsF === "stXTE") {
        _0x551be7.log(_0x231d9e.IRCKi("\n已指定PIN：", _0x1bc5c5));
        let _0x495c38 = _0x2aaa84.findIndex(_0x4cd9b4 => _0x4cd9b4.includes(_0x202eb3));
        if (_0x231d9e.AufmZ(_0x495c38, -1)) {
          _0x5a18d7.log("运行的CK中没找到指定的PIN，停止执行！");
          return;
        }
        _0x6014ab = _0x2925f6[_0x495c38];
      } else return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x346b52(++_0x42db92);
  }
  try {
    {
      if (_0x268921) {
        return _0x346b52;
      } else {
        _0x346b52(0);
      }
    }
  } catch (_0x394a00) {}
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post)
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers.Content-Type, delete t.headers.Content-Length);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers.set-cookie) {
            const s = t.headers.set-cookie.map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers.Content-Type && (t.headers.Content-Type = "application/x-www-form-urlencoded"), t.headers && delete t.headers.Content-Length, this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else if (this.isQuanX()) {
        t.method = "POST";
        this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: false
        }));
        $task.fetch(t).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => e(t));
      } else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t.open-url,
              s = t.mediaUrl || t.media-url;
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t.open-url || t.url || t.openUrl,
              s = t.media-url || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t.open-url;
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\n🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}