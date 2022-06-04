import React from "react";
import Search from "../Search";
import SourceLinks from "../SourceLinks";

export default class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      links: [
        // 第一页
        [
          {
            itemName: "编程导航",
            itemUrl: "https://www.code-nav.cn",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png",
          },
          {
            itemName: "Bilibili",
            itemUrl: "https://www.bilibili.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610687628081-bilibili.png",
          },
          {
            itemName: "GitHub",
            itemUrl: "https://github.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610896059065-9919.png",
          },
          {
            itemName: "CSDN",
            itemUrl: "https://www.csdn.net/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/src=http _img3.doubanio.com_lpic_s26866793.jpg&refer=http _img3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg.jpg",
          },
          {
            itemName: "牛客网",
            itemUrl: "https://www.nowcoder.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo_87_87.png",
          },
          {
            itemName: "LeetCode",
            itemUrl: "https://leetcode-cn.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1609848636738-IMG_1307(20210105-200954).JPG",
          },
          {
            itemName: "知乎",
            itemUrl: "https://www.zhihu.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/apple-touch-icon-76.7a750095.png",
          },
          {
            itemName: "51CTO",
            itemUrl: "https://www.51cto.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610280843910-510.png",
          },
          {
            itemName: "简书",
            itemUrl: "https://www.jianshu.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610687861229-jianshu.jpg",
          },
          {
            itemName: "InfoQ",
            itemUrl: "https://www.infoq.cn",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610688420833-infoq.jpg",
          },
          {
            itemName: "掘金",
            itemUrl: "https://juejin.cn/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610941467025-juejin(1).png",
          },
          {
            itemName: "思否",
            itemUrl: "https://segmentfault.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/tzbv3-ez9gg.png",
          },
        ],
        // 第二页
        [
          {
            itemName: "开源中国",
            itemUrl: "https://www.oschina.net/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610688246707-openchina.png",
          },
          {
            itemName: "博客园",
            itemUrl: "https://www.cnblogs.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610940860862-bokeyuan.png",
          },
          {
            itemName: "V2EX",
            itemUrl: "https://www.v2ex.com/",
            itemImg:
              "https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610692355577-icon-192.png",
          },
          {
            itemName: "程序员客栈",
            itemUrl: "https://www.proginn.com/",
            itemImg: "https://stacdn.proginn.com/favicon_new.ico",
          },
          {
            itemName: "Less",
            itemUrl: "https://less.bootcss.com/",
            itemImg: "https://less.bootcss.com/public/img/less_logo.png",
          },
          {
            itemName: "W3C",
            itemUrl: "https://www.w3school.com.cn/",
            itemImg: "https://www.w3school.com.cn/ui2019/logo-180.png",
          },
          {
            itemName: "极简插件",
            itemUrl: "https://chrome.zzzmh.cn/#/index",
            itemImg: "https://chrome.zzzmh.cn/favicon.ico",
          },
          {
            itemName: "React",
            itemUrl: "https://reactjs.org/",
            itemImg: "https://reactjs.org/logo-180x180.png",
          },
          {
            itemName: "Vue3",
            itemUrl: "https://vuejs.org/",
            itemImg: "https://vuejs.org/logo.svg",
          },
          {
            itemName: "Bootstrap3",
            itemUrl: "https://www.bootcss.com/",
            itemImg:
              "https://v4.bootcss.com/docs/4.6/assets/img/favicons/favicon-32x32.png",
          },
          {
            itemName: "dowebok",
            itemUrl: "https://www.dowebok.com/code",
            itemImg: "https://www.dowebok.com/favicon.ico",
          },
          {
            itemName: "Python",
            itemUrl: "https://www.python.org/",
            itemImg: "https://www.python.org/static/favicon.ico",
          },
        ],
        // 第三页
        [
          {
            itemName: "jq22",
            itemUrl: "https://www.jq22.com/",
            itemImg:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F04%2F13%2F599d9800e3de4_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650106397&t=8d929bde3693a1656c26e741f36e5d1f",
          },
          {
            itemName: "jQuery之家",
            itemUrl: "http://www.htmleaf.com/",
            itemImg: "http://www.htmleaf.com/images/logo.svg",
          },
          {
            itemName: "VSCode扩展库",
            itemUrl: "https://marketplace.visualstudio.com/VSCode",
            itemImg:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2F18d43cb7f037e1c91dfd7b0c34b8df51.png&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650106249&t=4f0d6124d9884c3163b027c4f6d9e331",
          },
          {
            itemName: "Oracle",
            itemUrl: "https://www.oracle.com/index.html",
            itemImg:
              "https://img0.baidu.com/it/u=3702964089,2580827107&fm=253&fmt=auto&app=138&f=JPG?w=300&h=300",
          },
          {
            itemName: "Sass",
            itemUrl: "https://www.sasscss.com/",
            itemImg:
              "https://www.sasscss.com/assets/img/logos/sass-77bd637b.png",
          },
          {
            itemName: "jQuery文档",
            itemUrl: "https://www.jquery123.com/",
            itemImg:
              "https://www.jquery123.com/assets/images/jquery-logo-md.png",
          },
          {
            itemName: "前端文档工具",
            itemUrl: "https://www.html.cn/nav/",
            itemImg:
              "https://img0.baidu.com/it/u=2182900381,3413934517&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          },
          {
            itemName: "jQueryUI文档",
            itemUrl: "https://www.html.cn/jquery-ui-api/",
            itemImg: "https://www.html.cn/css88/2016/12/jqueryui.png",
          },
          {
            itemName: "Jetbrains",
            itemUrl: "https://www.jetbrains.com/",
            itemImg:
              "https://img1.baidu.com/it/u=2436362558,3606528205&fm=253&fmt=auto&app=138&f=JPG?w=462&h=407",
          },
          {
            itemName: "CodePen",
            itemUrl: "https://codepen.io/",
            itemImg: "https://www.html.cn/css88/2016/12/codepen.png",
          },
          {
            itemName: "php中文网",
            itemUrl: "https://www.php.cn/",
            itemImg: "https://www.php.cn/favicon.ico",
          },
          {
            itemName: "HTML中文网",
            itemUrl: "https://www.html.cn/",
            itemImg: "https://www.html.cn/favicon.ico",
          },
        ],
        // 第四页
        [
          {
            itemName: "staticFile",
            itemUrl: "https://staticfile.org/",
            itemImg: "https://staticfile.org/assets/images/light-logo.png",
          },
          {
            itemName: "VoidCanvas",
            itemUrl: "https://www.voidcanvas.com/",
            itemImg:
              "https://www.voidcanvas.com/_nuxt/icons/icon_64x64.f96f77.png",
          },
          {
            itemName: "MDN参考文档",
            itemUrl: "https://developer.mozilla.org/zh-CN/",
            itemImg:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftm-image.tianyancha.com%2Ftm%2F61b45ce7b585e95dd32f8e6f1cad7d01.jpg&refer=http%3A%2F%2Ftm-image.tianyancha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650446605&t=2b077639b7f057d9a1065e9aeee963ef",
          },
          {
            itemName: "CSDN技能树",
            itemUrl: "https://bbs.csdn.net/skill/algorithm",
            itemImg:
              "https://img-operation.csdnimg.cn/csdn/silkroad/img/1637552122121.png",
          },
          {
            itemName: "NPM官网",
            itemUrl: "https://www.npmjs.com/",
            itemImg:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qzroc.com%2Fusr%2Fuploads%2F2020%2F06%2F3080200810.jpeg&refer=http%3A%2F%2Fwww.qzroc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650524138&t=3a7b9f4c450245a97954bc3deb13cfd5",
          },
          {
            itemName: "资格考试网大全",
            itemUrl:
              "https://zhouyu2156.gitee.io/rabbitwarehouse/DevelopmentCode/Programming/src/assets/qualifications.pdf",
            itemImg:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.3png.com%2Fabce6ca4b424484603c48e3ec4854eb9e2f2.png&refer=http%3A%2F%2Fimg2.3png.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656772257&t=844e3743f8d2071632f278c80d811689",
          },
          {
            itemName: "HTML实时标准",
            itemUrl: "https://html.spec.whatwg.org/",
            itemImg: "https://resources.whatwg.org/logo.svg",
          },
          {
            itemName: "CodePen",
            itemUrl: "https://codepen.io/",
            itemImg:
              "https://img0.baidu.com/it/u=564013150,962238864&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260",
          },
          {
            itemName: "免费网页特效",
            itemUrl: "https://www.html5tricks.com/tag/html5%E5%8A%A8%E7%94%BB/",
            itemImg: "https://www.w3.org/html/logo/img/html5-topper.png",
          },
          {
            itemName: "站长之家",
            itemUrl: "https://sc.chinaz.com/tag_jiaoben/HTML5.html",
            itemImg:
              "https://img1.baidu.com/it/u=1307035692,2865310833&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=452",
          },
          {
            itemName: "特效大全",
            itemUrl: "http://www.bootstrapmb.com/",
            itemImg:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F0t%2Fut%2F6q.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650818865&t=937545ab6fe772f543e2ddd4ec9d255e",
          },
          {
            itemName: "菜鸟教程",
            itemUrl: "https://www.runoob.com/",
            itemImg: "https://static.runoob.com/images/favicon.ico",
          },
        ],
        // 第五页
        [
          {
            itemName: "Bootstrap",
            itemUrl: "https://www.bootcss.com/",
            itemImg:
              "https://fastly.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.53/dist/ico/favicon.ico",
          },
          {
            itemName: "TailwindCSS",
            itemUrl: "https://www.tailwindcss.cn/",
            itemImg: "https://www.tailwindcss.cn/favicon-32x32.png",
          },
          {
            itemName: "React.js",
            itemUrl: "https://reactjs.bootcss.com/",
            itemImg: "https://reactjs.bootcss.com/favicon.ico",
          },
          {
            itemName: "Vue.js",
            itemUrl: "https://vuejs.bootcss.com/",
            itemImg:
              "https://vuejs.bootcss.com/images/icons/apple-icon-60x60.png",
          },
          {
            itemName: "Svelte.js",
            itemUrl: "https://www.sveltejs.cn/",
            itemImg: "https://www.sveltejs.cn/favicon.png",
          },
          {
            itemName: "jQuery",
            itemUrl: "https://www.jquery123.com/",
            itemImg: "https://www.jquery123.com/assets/images/favicon.ico",
          },
          {
            itemName: "Babel.js",
            itemUrl: "https://www.babeljs.cn/",
            itemImg: "https://www.babeljs.cn/img/babel.png",
          },
          {
            itemName: "Lodash",
            itemUrl: "https://www.lodashjs.com/",
            itemImg: "https://www.lodashjs.com/img/logo.png",
          },
          {
            itemName: "Node.js",
            itemUrl: "https://nodejs.bootcss.com/",
            itemImg: "https://nodejs.bootcss.com/img/favicon.ico",
          },
          {
            itemName: "Grunt",
            itemUrl: "https://www.gruntjs.net/",
            itemImg: "https://www.gruntjs.net/img/favicons/favicon-32x32.png",
          },
          {
            itemName: "Gulp",
            itemUrl: "https://www.gulpjs.com.cn/",
            itemImg: "https://www.gulpjs.com.cn/img/favicon.png",
          },
          {
            itemName: "npm",
            itemUrl: "https://www.npmjs.cn/",
            itemImg: "https://www.npmjs.cn/images/npm.svg",
          },
        ],
        // 第六页
        [
          {
            itemName: "pnpm",
            itemUrl: "https://www.pnpm.cn/",
            itemImg: "https://www.pnpm.cn/img/logos/pnpm-standard-no-text.png",
          },
          {
            itemName: "Yarn",
            itemUrl: "https://www.yarnpkg.cn/",
            itemImg:
              "https://www.yarnpkg.cn/favicon-32x32.png?v=6143f50112ddba9fdb635b0af2f32aff",
          },
          {
            itemName: "webpack",
            itemUrl: "https://www.webpackjs.com/",
            itemImg: "https://www.webpackjs.com/assets/favicon.ico",
          },
          {
            itemName: "Rollup.js",
            itemUrl: "https://www.rollupjs.com/",
            itemImg: "https://www.rollupjs.com/img/favicon.png",
          },
          {
            itemName: "Parcel",
            itemUrl: "https://www.parceljs.cn/",
            itemImg: "https://www.parceljs.cn/assets/favicon.ico",
          },
          {
            itemName: "PostCSS",
            itemUrl: "https://www.postcss.com.cn/",
            itemImg: "https://www.postcss.com.cn/favicon.61a31adb.ico",
          },
          {
            itemName: "Next.js",
            itemUrl: "https://www.nextjs.cn/",
            itemImg: "https://www.nextjs.cn/static/favicon/favicon-32x32.png",
          },
          {
            itemName: "Nuxt.js",
            itemUrl: "https://www.nuxtjs.cn/",
            itemImg: "https://www.nuxtjs.cn/icon.png",
          },
          {
            itemName: "Docusaurus",
            itemUrl: "https://www.docusaurus.cn/",
            itemImg: "https://www.docusaurus.cn/img/docusaurus.svg",
          },
          {
            itemName: "Gatsby.js",
            itemUrl: "https://www.gatsbyjs.cn/",
            itemImg:
              "https://www.gatsbyjs.cn/icons/icon-48x48.png?v=edf3d310d67f8284a562bc3a58c3e761",
          },
          {
            itemName: "Gridsome",
            itemUrl: "https://www.gridsome.cn/",
            itemImg:
              "https://www.gridsome.cn/assets/static/favicon.b9532cc.c6d52b979318cc0b0524324281174df2.png",
          },
          {
            itemName: "VuePress",
            itemUrl: "https://www.vuepress.cn/",
            itemImg:
              "https://www.vuepress.cn/icons/msapplication-icon-144x144.png",
          },
        ],
        // 第七页
        [
          {
            itemName: "SASS",
            itemUrl: "https://www.sasscss.com/",
            itemImg:
              "https://www.sasscss.com/assets/img/logos/sass-77bd637b.png",
          },
          {
            itemName: "Less.js",
            itemUrl: "https://less.bootcss.com/",
            itemImg: "https://less.bootcss.com/public/ico/favicon.ico",
          },
          {
            itemName: "PurgeCSS",
            itemUrl: "https://www.purgecss.cn/",
            itemImg: "https://www.purgecss.cn/img/logo.png",
          },
          {
            itemName: "cssnano",
            itemUrl: "https://www.cssnano.cn/",
            itemImg: "https://www.cssnano.cn/img/favicon.ico",
          },
          {
            itemName: "WebAssembly",
            itemUrl: "https://www.wasm.com.cn/",
            itemImg: "https://www.wasm.com.cn/css/webassembly.png",
          },
          {
            itemName: "Redux.js",
            itemUrl: "https://www.reduxjs.cn/",
            itemImg: "https://www.reduxjs.cn/img/favicon/favicon.ico",
          },
          {
            itemName: "Markdown",
            itemUrl: "https://www.markdown.xyz/",
            itemImg: "https://www.markdown.xyz/favicon.ico",
          },
          {
            itemName: "MDX",
            itemUrl: "https://www.mdxjs.cn/",
            itemImg: "https://mdx-logo.vercel.app/",
          },
          {
            itemName: "Fastify",
            itemUrl: "https://www.fastify.cn/",
            itemImg:
              "https://www.fastify.cn/images/apple-icon-72x72.e49b27cfe1ab1461.png",
          },
          {
            itemName: "Rome",
            itemUrl: "https://www.romejs.cn/",
            itemImg: "https://www.romejs.cn/img/rome-logo-black.png",
          },
          {
            itemName: "Mirage",
            itemUrl: "https://www.miragejs.cn/",
            itemImg:
              "https://www.miragejs.cn/favicon-32x32.png?v=4b2671f784721600311c3551544b1101",
          },
          {
            itemName: "goHugo",
            itemUrl: "https://www.gohugo.cn/",
            itemImg: "https://www.gohugo.cn/favicon-32x32.png",
          },
        ],
        // 第八页
        [
          {
            itemName: "Deno",
            itemUrl: "https://www.denojs.cn/",
            itemImg: "https://www.denojs.cn/img/favicon.ico",
          },
          {
            itemName: "Sapper",
            itemUrl: "https://www.sapperjs.com/",
            itemImg: "https://www.sapperjs.com/favicon.png",
          },
          {
            itemName: "Sequelize",
            itemUrl: "https://www.sequelize.com.cn/",
            itemImg: "https://www.sequelize.com.cn/img/brand_logo.png",
          },
          {
            itemName: "ProGit",
            itemUrl: "https://www.progit.cn/",
            itemImg: "https://www.progit.cn/images/cover.png",
          },
          {
            itemName: "TypeScript",
            itemUrl: "https://typescript.bootcss.com/",
            itemImg: "https://typescript.bootcss.com/favicon.ico",
          },
          {
            itemName: "Preact",
            itemUrl: "https://www.preactjs.com.cn/",
            itemImg: "https://www.preactjs.com.cn/favicon.ico",
          },
          {
            itemName: "Recoil",
            itemUrl: "https://www.recoiljs.cn/",
            itemImg: "https://www.recoiljs.cn/img/favicon.png",
          },
          {
            itemName: "Handlebars",
            itemUrl: "https://www.handlebarsjs.cn/",
            itemImg:
              "https://www.handlebarsjs.cn/images/handlebars_logo_bg.png",
          },
          {
            itemName: "Pug",
            itemUrl: "https://www.pugjs.cn/",
            itemImg: "https://www.pugjs.cn/images/favicon-32x32.png",
          },
          {
            itemName: "Express",
            itemUrl: "https://www.expressjs.com.cn/",
            itemImg: "https://www.expressjs.com.cn/images/favicon.png",
          },
          {
            itemName: "Jest",
            itemUrl: "https://www.jestjs.cn/",
            itemImg: "https://www.jestjs.cn/img/jest.png",
          },
          {
            itemName: "Nginx",
            itemUrl: "https://www.cnginx.com/",
            itemImg: "https://www.cnginx.com/nginx.png",
          },
        ],
        // 第九页
        [
          {
            itemName: "Blitz",
            itemUrl: "https://www.blitzjs.cn/",
            itemImg: "https://www.blitzjs.cn/32x32-Favicon-Purple.png",
          },
          {
            itemName: "Alpine.js",
            itemUrl: "https://www.alpinejs.cn/",
            itemImg: "https://www.alpinejs.cn/img/logo.png",
          },
          {
            itemName: "Lerna",
            itemUrl: "https://www.lernajs.cn/",
            itemImg: "https://www.lernajs.cn/images/lerna-hero.svg",
          },
          {
            itemName: "Axios",
            itemUrl: "https://www.axios-http.cn/",
            itemImg: "https://www.axios-http.cn/assets/favicon.ico",
          },
          {
            itemName: "Strapi",
            itemUrl: "https://www.strapi.cn/",
            itemImg: "https://strapi.io/assets/favicon-32x32.png",
          },
          {
            itemName: "CDN免费资源库",
            itemUrl: "https://cdnjs.com/",
            itemImg: "https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg",
          },
          {
            itemName: "TopUI框架",
            itemUrl: "http://demo.topjui.com/",
            itemImg: "http://demo.topjui.com/topjui/images/logo.png",
          },
          {
            itemName: "EasyUI中文文档",
            itemUrl: "https://www.jeasyui.cn/",
            itemImg: "https://www.jeasyui.cn/favicon.ico",
          },
          {
            itemName: "阿里React组件库",
            itemUrl: "https://ant.design/index-cn",
            itemImg:
              "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
          },
          {
            itemName: "阿里图标库",
            itemUrl: "https://www.iconfont.cn/",
            itemImg:
              "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
          },
          {
            itemName: "LayUI",
            itemUrl: "https://www.layuiweb.com/",
            itemImg: "https://www.layuion.com/favicon.ico",
          },
          {
            itemName: "FrozenUI",
            itemUrl: "http://frozenui.github.io/",
            itemImg: "http://frozenui.github.io/assets/img/logo.png",
          },
        ],
        // 第十页
        [
          {
            itemName: "醉牛前端",
            itemUrl: "https://f2er.club/",
            itemImg: "https://f2er.club/img/favicon.ico",
          },
          {
            itemName: "GUI编程网",
            itemUrl: "http://www.bl186.net/",
            itemImg: "http://www.bl186.net/static/css/favicon.ico",
          },
          {
            itemName: "PyQt框架",
            itemUrl: "https://www.qt.io/zh-cn/",
            itemImg:
              "https://www.qt.io/hubfs/qt-design-system/assets/logos/qt-logo.svg",
          },
          {
            itemName: "BootstrapCDN",
            itemUrl: "https://www.bootstrapcdn.com/",
            itemImg:
              "https://www.bootstrapcdn.com/assets/img/favicons/favicon.3f81f6a.ico",
          },
          {
            itemName: "React构建教程",
            itemUrl: "https://create-react-app.dev/",
            itemImg: "https://create-react-app.dev/img/logo.svg",
          },
          {
            itemName: "DayJS",
            itemUrl: "https://dayjs.fenxianglu.cn/",
            itemImg: "https://dayjs.fenxianglu.cn/assets/logo.png",
          },
          {
            itemName: "Vant",
            itemUrl: "https://youzan.github.io/vant/#/zh-CN",
            itemImg: "https://cdn.jsdelivr.net/npm/@vant/assets/logo.png",
          },
          {
            itemName: "Element-UI",
            itemUrl: "https://element-plus.org/zh-CN/",
            itemImg: "https://element-plus.org/images/element-plus-logo.svg",
          },
          {
            itemName: "React中文文档",
            itemUrl: "https://zh-hans.reactjs.org/",
            itemImg:
              "https://zh-hans.reactjs.org/favicon-32x32.png?v=f4d46f030265b4c48a05c999b8d93791",
          },
          {
            itemName: "VARLET框架",
            itemUrl: "https://varlet.gitee.io/varlet-ui/#/zh-CN/home",
            itemImg: "https://varlet-varletjs.vercel.app/varlet_icon.png",
          },
          {
            itemName: "EasyUI官网",
            itemUrl: "https://www.jeasyui.net/",
            itemImg:
              "https://www.jeasyui.net/Application/Home/View/Public/img/favicon.ico",
          },
          {
            itemName: "jQueryAPI文档",
            itemUrl: "https://jqueryapi.net/",
            itemImg: "https://jqueryapi.net/favicon.ico",
          },
        ],
        // 第十一页
        [
          {
            itemName: "Hutool",
            itemUrl: "https://hutool.cn/",
            itemImg: "https://plus.hutool.cn/images/logo_484.png",
          },
          {
            itemName: "LeafLetJS",
            itemUrl: "https://leafletjs.com/",
            itemImg: "https://leafletjs.com/docs/images/favicon.ico",
          },
          {
            itemName: "MDN文档",
            itemUrl: "https://developer.mozilla.org/zh-CN/",
            itemImg: "https://developer.mozilla.org/favicon-48x48.cbbd161b.png",
          },
          {
            itemName: "HTML标准",
            itemUrl: "https://html.spec.whatwg.org/",
            itemImg: "https://resources.whatwg.org/logo.svg",
          },
          {
            itemName: "CanvasAPI",
            itemUrl: "https://www.canvasapi.cn/",
            itemImg: "https://www.canvasapi.cn/favicon.ico",
          },
          {
            itemName: "Cesium3D",
            itemUrl: "https://cesium.com/",
            itemImg: "https://cesium.com/cesium-logomark-192.png",
          },
          {
            itemName: "LayUI",
            itemUrl: "https://www.layuion.com/",
            itemImg: "https://www.layuion.com/favicon.ico",
          },
          {
            itemName: "Bootstrap5",
            itemUrl: "https://v5.bootcss.com/",
            itemImg:
              "https://v5.bootcss.com/docs/5.1/assets/img/favicons/favicon.ico",
          },
          {
            itemName: "花瓣资源",
            itemUrl: "https://www.hbzyz.org/",
            itemImg:
              "https://www.hbzyz.org/zb_users/upload/2020/11/202011221606031120713778.png",
          },
          {
            itemName: "EnglishClub",
            itemUrl: "https://www.englishclub.com/",
            itemImg: "https://www.englishclub.com/favicon-32x32.png",
          },
          {
            itemName: "查字典",
            itemUrl: "https://www.chazidian.com/",
            itemImg: "https://www.chazidian.com/favicon.ico",
          },
          {
            itemName: "Cambridge",
            itemUrl: "https://dictionary.cambridge.org/",
            itemImg:
              "https://dictionary.cambridge.org/external/images/og-image.png",
          },
        ],
        // 第十二页
        [
          {
            itemName: "数据分析",
            itemUrl: "https://spssau.com/",
            itemImg: "https://spssau.com/favicon.png",
          },
          {
            itemName: "全历史",
            itemUrl: "https://www.allhistory.com/",
            itemImg:
              "https://static.allhistory.com/online/common/img/logo-ah.5721.png",
          },
          {
            itemName: "EasyUI官网",
            itemUrl: "http://www.jeasyui.com/",
            itemImg: "https://www.jeasyui.com/favicon.ico",
          },
          {
            itemName: "EasyUI文档",
            itemUrl: "https://www.jeasyui.net/",
            itemImg:
              "https://www.jeasyui.net/Application/Home/View/Public/img/favicon.ico",
          },
          {
            itemName: "MatPlotLib",
            itemUrl: "https://matplotlib.org/",
            itemImg: "https://matplotlib.org/_static/favicon.ico",
          },
          {
            itemName: "Anaconda",
            itemUrl: "https://www.anaconda.com/",
            itemImg:
              "https://www.anaconda.com/assets/build/favicons/apple-touch-icon-5bbdb087c5.png",
          },
          {
            itemName: "NumPy",
            itemUrl: "http://www.numpy.org.cn/",
            itemImg: "https://www.numpy.org.cn/icons/safari-pinned-tab.svg",
          },
          {
            itemName: "Pandas",
            itemUrl: "https://pandas.pydata.org/",
            itemImg: "https://pandas.pydata.org/static/img/pandas_white.svg",
          },
          {
            itemName: "Pandas中文",
            itemUrl: "https://www.pypandas.cn/",
            itemImg:
              "https://www.pypandas.cn/icons/apple-touch-icon-152x152.png",
          },
          {
            itemName: "PyTorch",
            itemUrl: "https://pytorch.org/",
            itemImg: "https://pytorch.org/favicon.ico",
          },
          {
            itemName: "百度开放平台",
            itemUrl: "https://ai.baidu.com/",
            itemImg:
              "https://aip.bdstatic.com/portal-pc-node/dist/1652787772063/favicon-32.ico",
          },
          {
            itemName: "PyQt",
            itemUrl: "https://www.qt.io/zh-cn/",
            itemImg:
              "https://www.qt.io/hubfs/qt-design-system/assets/logos/qt-logo.svg",
          },
        ],
        // 第十二页
        [
          {
            itemName: "扩展迷",
            itemUrl: "https://www.extfans.com/",
            itemImg:
              "https://static-public.infinitytab.com/sites-resource/extfans/61ea85a31aec3f3365dbe165/icon_1642759665914.jpg",
          },
          {
            itemName: "画夹插件",
            itemUrl: "https://huajiakeji.com/",
            itemImg: "https://huajiakeji.com/favicon.ico",
          },
          {
            itemName: "插件大全",
            itemUrl: "http://cd.cduukj.com/",
            itemImg:
              "http://cd.cduukj.com/wp-content/uploads/2020/09/2020092723174661.ico",
          },
          {
            itemName: "Git官网",
            itemUrl: "https://git-scm.com/",
            itemImg: "https://git-scm.com/favicon.ico",
          },
          {
            itemName: "Gitee码云",
            itemUrl: "https://gitee.com/",
            itemImg: "https://gitee.com/static/images/logo_themecolor.png",
          },
          {
            itemName: "百度翻译",
            itemUrl: "https://fanyi.baidu.com/home",
            itemImg: "https://fanyi.baidu.com/favicon.ico",
          },
          {
            itemName: "百度地图API",
            itemUrl: "https://lbsyun.baidu.com/",
            itemImg:
              "https://mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico",
          },
          {
            itemName: "EChart可视化",
            itemUrl: "https://echarts.apache.org/zh/index.html",
            itemImg:
              "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png?_v_=20200710_1",
          },
          {
            itemName: "D3.js",
            itemUrl: "https://d3js.org/",
            itemImg: "https://d3js.org/favicon.png",
          },
          {
            itemName: "Microsoft官网",
            itemUrl: "https://www.microsoft.com/zh-cn/",
            itemImg: "https://c.s-microsoft.com/favicon.ico?v2",
          },
          {
            itemName: "Node中文网",
            itemUrl: "http://nodejs.cn/",
            itemImg: "http://img.nodejs.cn/favicon.png",
          },
          {
            itemName: "Node官网",
            itemUrl: "https://nodejs.dev/",
            itemImg:
              "https://nodejs.dev/icons/icon-48x48.png?v=adbe265cf4d3f10447eb015f0951c53c",
          },
        ],
        // 第十三页
        [
          {
            itemName: "Electron",
            itemUrl: "https://www.electronjs.org/",
            itemImg:
              "https://static.oschina.net/uploads/logo/electron_tAOTZ.png",
          },
          {
            itemName: "Vue3中文网",
            itemUrl: "https://staging-cn.vuejs.org/",
            itemImg: "https://staging-cn.vuejs.org/logo.svg",
          },
          {
            itemName: "Vue脚手架",
            itemUrl: "https://cli.vuejs.org/zh/",
            itemImg: "https://staging-cn.vuejs.org/logo.svg",
          },
          {
            itemName: "React脚手架",
            itemUrl: "https://create-react-app.bootcss.com/",
            itemImg:
              "https://create-react-app.bootcss.com/img/favicon/favicon.ico",
          },
          {
            itemName: "python中文网",
            itemUrl: "https://www.python-china.com/",
            itemImg: "https://www.python.org/static/favicon.ico",
          },
          {
            itemName: "即时设计",
            itemUrl: "https://js.design/home",
            itemImg: "https://img.js.design/assets/webImg/favicon.ico",
          },
          {
            itemName: "虎课网",
            itemUrl: "https://huke88.com/",
            itemImg: "https://huke88.com/favicon.ico",
          },
          {
            itemName: "慕课网",
            itemUrl: "https://www.imooc.com/",
            itemImg: "https://www.imooc.com/favicon.ico",
          },
          {
            itemName: "传智播客",
            itemUrl: "https://www.itcast.cn/",
            itemImg: "https://www.itcast.cn/images/logo2020.jpg",
          },
          {
            itemName: "Adobe",
            itemUrl: "https://www.adobe.com/cn/",
            itemImg: "https://www.adobe.com/favicon.ico",
          },
          {
            itemName: "Markdown",
            itemUrl: "https://markdown.com.cn/",
            itemImg: "https://markdown.com.cn/hero.png",
          },
          {
            itemName: "知末",
            itemUrl: "https://www.znzmo.com/",
            itemImg: "https://cdn.code.znzmo.com/lanmuUpdate/img/favicon.ico",
          },
        ],
        [
          {
            itemName: "软考官网",
            itemUrl: "https://www.ruankao.org.cn/",
            itemImg: "https://www.ruankao.org.cn/asset/image/public/logo2.png",
          },
          {
            itemName: "pip官网",
            itemUrl: "https://pypi.org/",
            itemImg: "https://pypi.org/static/images/logo-small.95de8436.svg",
          },
          {
            itemName: "100百分自考网",
            itemUrl: "https://www.exam100.net/html/zkzn/",
            itemImg: "https://www.exam100.net/favicon.ico",
          },
          {
            itemName: "学信网",
            itemUrl: "https://www.chsi.com.cn/",
            itemImg: "https://t1.chei.com.cn/chsi/favicon.ico",
          },
          {
            itemName: "会计网",
            itemUrl: "http://kzp.mof.gov.cn/",
            itemImg: "https://kzp.mof.gov.cn/assets/images/favicon.ico",
          },
          {
            itemName: "全国普通话考试",
            itemUrl: "http://www.cltt.org/#/webHome",
            itemImg: "https://www.cltt.org/favicon.ico",
          },
          {
            itemName: "中国教育考试网",
            itemUrl: "http://www.neea.edu.cn/",
            itemImg: "http://www.neea.edu.cn/res/Home/structure/22051678.png",
          },
          {
            itemName: "免费API",
            itemUrl: "https://api.aa1.cn/",
            itemImg:
              "https://www.wpon.cn/wp-content/uploads/2021/06/cropped-2021061403342088-192x192.png",
          },
          {
            itemName: "Apifox",
            itemUrl: "https://www.apifox.cn/",
            itemImg: "https://cdn.apifox.cn/logo/apifox-logo-512.png",
          },
          {
            itemName: "聚合数据API",
            itemUrl: "https://www.juhe.cn/",
            itemImg: "https://www.juhe.cn/favicon.ico",
          },
          {
            itemName: "Lightly",
            itemUrl: "https://lightly.teamcode.com/",
            itemImg: "https://lightly.teamcode.com/favicon.svg",
          },
          {
            itemName: "JS Garden",
            itemUrl: "http://bonsaiden.github.io/JavaScript-Garden/zh/",
            itemImg:
              "https://bonsaiden.github.io/JavaScript-Garden/favicon.ico?v=2",
          },
        ],
      ],
    };
  }
  render() {
    return (
      // 最外层当做body来使用 内层为container容器承内容
      <div id="content">
        <div className="container">
          <Search />
          <SourceLinks links={this.state.links} />
        </div>
      </div>
    );
  }
}
