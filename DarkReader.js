// ==UserScript==
// @name         DarkReader
// @namespace    https://viayoo.com/
// @version      0.1
// @homepageURL  https://app.viayoo.com/addons/63
// @author       Sky
// @run-at       document-start
// @match        *
// @grant        none
// ==/UserScript==
/*
* @name: DarkReader
* @Author: Sky
* @version: 1.0.1
* @description: js脚本实现夜间模式
* @include: *
* @createTime: 2021-2-18 22:40
*/
(function(){const w = window;
/*以下参数可修改，推荐取值范围1~100，=null表示恢复默认值*/
w.DR_setting0=100; /*亮度*/
w.DR_setting1=90; /*对比度*/
w.DR_setting2=10; /*滤蓝光程度*/
/*－－－－以下勿改－－－－*/
const key=encodeURIComponent('DarkReader:执行判断');if(w[key]){return;}try{w[key]=true;const lib=document.createElement('script');lib.src='https://cdn.jsdelivr.net/gh/IlysvlVEizbr/via-DarkReader@1.0.1/DarkReader.js';lib.defer=true;document.body.append(lib);}catch(err){console.log('DarkReader：',err);}})();