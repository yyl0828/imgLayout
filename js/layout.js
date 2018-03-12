let pageH = 0;
const b = $('.pageContainer')[0];
const ul = $('.pages')[0];
let UV = document.createElement('div');
UV.className = 'unvisible';
b.appendChild(UV);
let IMARR = []; //存放数组图像全局变量
let x = 0, y = 0; //图片位置坐标，一页内，另起一页后清零
const txtHeight = 19; //文字行高
const textWidth = 15;
let width;   //主体内容宽度 px
let height;  //主体内容高度 px
const pathLength = 10; //边角虚框长度
let layoutStyle = 'layout-2';


let d;
let svg;
let c;
let data = [
    /*   {
           text: '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦' +
           '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦',
           imgs: [
               'http://img1.timeface.cn/times/wx/9624df2cb41cfacf56057c14ff5e4531.jpg@198w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/90f0fdf772cc6e079d9c0263905548c8.jpg@133w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/cc93a3bca1a25c7a392cf6cbc0fc57f5.jpg@195w_4000h_1l_1pr_2o.jpg',
               // 'http://img1.timeface.cn/times/wx/037dc969bc660c5583db2c99241cce1f.jpg@197w_4000h_1l_1pr_2o.jpg',
               // 'http://img1.timeface.cn/times/wx/6fe88e53e70e661e583b48dbba8960f3.jpg@130w_4000h_1l_1pr_2o.jpg',
               // 'http://img1.timeface.cn/times/wx/14f313ec954b59f1df2e6ec7682f05a7.jpg@130w_4000h_1l_1pr_2o.jpg',
               // 'http://img1.timeface.cn/times/wx/182b8e2a6c92be3319c8c6b898378fcc.jpg@130w_4000h_1l_1pr_2o.jpg',
               // 'http://img1.timeface.cn/times/wx/df2ddbb4b2c51214eb407e752cc41221.jpg@175w_4000h_1l_1pr_2o.jpg',
               // 'http://img1.timeface.cn/times/wx/8624e1fb3114d75781e50348cb11d79e.jpg@796w_4000h_1l_1pr_2o.jpg'
           ],
           time: 1488878875,
       },
       {
           "text": '一件小事，每当有那么一两个动作让你回忆起了以前',
           time: 1489310875,
           imgs: [
               'http://img1.timeface.cn/times/wx/037dc969bc660c5583db2c99241cce1f.jpg@197w_4000h_1l_1pr_2o.jpg',
           ]
       },
       {
           "text": '一首歌，每当有那么一两句歌词触动了你心里的那根弦',
           time: 1489310875,
           imgs: [
               'http://img1.timeface.cn/times/wx/037dc969bc660c5583db2c99241cce1f.jpg@197w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/6fe88e53e70e661e583b48dbba8960f3.jpg@130w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/14f313ec954b59f1df2e6ec7682f05a7.jpg@130w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/182b8e2a6c92be3319c8c6b898378fcc.jpg@130w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/df2ddbb4b2c51214eb407e752cc41221.jpg@175w_4000h_1l_1pr_2o.jpg',
               'http://img1.timeface.cn/times/wx/8624e1fb3114d75781e50348cb11d79e.jpg@796w_4000h_1l_1pr_2o.jpg'
           ]
       },*/
    {
        "text": "新年快乐，晚安~么么啾~啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        "imgs": [
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCheiaKamgiaibes7VkbjewB3UKuSrxQ9GzPdDXBYKeLrIb3Xfugk8DDzVibPvvVibSR2Pc%2F0"
        ],
        "id": 450272,
        "time": 1514743861
    },
    {
        "text": "唯有美食以相聚",
        "imgs": [
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXhDVibkDeclStt18jGKbarFeHqF6icsbsHvBz0APXJ9rOuTmDpS4nPMpI%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXhDVibkDeclStOyjficFomHEnYfp76MnBMerAnNhb2kiaqmleJyIy9UTbY%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXhDVibkDeclStlLibZDa0xXX3P2G8OwtNj5OSShDGZ13uUMibN48VicYTqY%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXpRMWBrrkXQy0CvYChgnXlh7JjfWVcAibZMibWHHJSqfL4j0jJ9h1wado%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXpRMWBrrkXQyHmNyU6WXaibW6P77Hu0icmj0uib2W7oDhHQeFWQrVUmIOc%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXpRMWBrrkXQyAuLnMoeDOjRQumBc2T8l79RiaOgpvYaT8RHws9Fl4LnQ%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXpRMWBrrkXQypHU9PKkn8ZFlibq311iaoBibJ2FZ38ic7Hias2vNt1ibmgB1g%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXpRMWBrrkXQyjkspyNagib0thsTv8UgS40eLKRF5v6ibXhYPZuyEVsqeo%2F0",
            "https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXuwBzW9MvznXibPH7MkIQ2EBdgOP7icdZqsE2hdlToK7MwH19dzhpeeiao%2F0",
        ],
        "time": 1515817993
    },
    {
        "text": "冬天里来煮个火锅↵↵也是极好的",
        "imgs": ["https://weixinshu.com/images/fetch?url=http%3A%2F%2Fshmmsns.qpic.cn%2Fmmsns%2F1LlgQzJVOyCVxxtugdbkXrlFb87HnPzXkrNB1yQcVwFLdFf9RM1vs4wD6zS9VAGfgEFldQ4s040%2F0",],
        "time": 1517134141
    },
    {
        "text": "名花倾国两相欢名花倾国两相欢名花倾国两相欢名花倾国两相欢名花倾国两相欢名花倾国两相欢名花倾国两相欢",
        "imgs": [],
        "time": 1485672333
    }
];
var index = 0;//循环数组索引
compute();


function compute(d) {
    start(data[index], d).then(val => {
        if (index === data.length - 1) return;
        index++;
        if (layoutStyle === 'layout-1') {
            if ((data[index].imgs.length === 0 && val.pageH < (height - 100)) || (data[index].imgs.length !== 0 && val.pageH < (height - 200))) {
                //若该数组中文字不为空且页容器剩余高度大于100px或者该数组含有图片且页容器剩余高度大于200px，那么将这个页容器再重新利用，否则新创建页容器
                y += 30;
                pageH += 30;
                compute(val.con);
            }
            else {
                pageH = 0;
                y = 0;
                compute();
            }
        }
        else if (layoutStyle === 'layout-2') {
            if ((data[index].imgs.length === 0 && val.pageH < (height - 100)) || (data[index].imgs.length !== 0 && val.pageH < (height - 200)) || x < width / 2) {
                //若该数组中文字不为空且页容器剩余高度大于100px或者该数组含有图片且页容器剩余高度大于200px，那么将这个页容器再重新利用，否则新创建页容器
                y += 10;
                pageH += 10;
                compute(val.con);
            }
            else {
                pageH = 0;
                y = 0;
                compute();
            }
        }
    });
}

function start(data, con) {
    var imgs = data.imgs;
    var re = 8;

    if (typeof(con) == "undefined") {

        c = document.createElement('li');
        c.className = 'pageItem ' + layoutStyle; //页容器
        ul.appendChild(c);

        var foot = document.createElement('footer');
        foot.className = 'footer'; //页容器
        c.appendChild(foot);
        $(foot).html('<hr/> <div class="footDate">2017/08</div><div class="pagination">4</div><div class="bookName">绵绵</div>');

        d = document.createElement('div');
        d.className = 'pageCenter'; //页容器
        c.appendChild(d);

        height = $('.' + layoutStyle + ' .pageCenter').height();
        width = $('.' + layoutStyle + ' .pageCenter').width();

        svg = setSvg('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1',
            width: width,
            height: height
        }, d);

    }
    else {
        d = con;
    }

    imgs.forEach(function (val, index) {
        var im = new Image();
        im.src = val;
        UV.appendChild(im);
        im.addEventListener('load', function () {
            //图片加载完成后将图片添加到全局图片数组中
            IMARR.push(im);
        }, false);
    });

    return new Promise((resolve, reject) => {
        var check = setInterval(function () {
            //当全部图片加载完成后再执行layout函数
            if (IMARR.length === imgs.length) {
                try {
                    if (layoutStyle === 'layout-1') {
                        re = layout1({text: data.text, imgs: IMARR, time: data.time});
                    }
                    else if (layoutStyle === 'layout-2') {
                        re = layout2({text: data.text, imgs: IMARR, time: data.time});
                    }

                    clearInterval(check);
                    resolve(re);
                } catch (e) {
                    clearInterval(check);
                    console.log(e);
                }
            }
        }, 50);
    });

    // return re;

}

//创建svg元素，tag标签名称,attr需设置的属性（对象形式），parEle创建元素的父容器
function setSvg(tag, attr, parEle) {
    var ele = $(document.createElementNS('http://www.w3.org/2000/svg', tag));
    if (attr !== '') {
        for (var key in attr) {
            ele.attr(key, attr[key]);
        }
    }
    if (parEle) parEle.appendChild(ele[0]);
    return ele[0];
}

//日期补零
function fillIn(str) {
    if (str.length === 1) {
        str = '0' + str;
    }
    return str;
}

function layout1(data) {
    const itemWord = data.text;
    const imgs = data.imgs;
    const time = data.time;
    let IC = document.createElement('div');
    IC.className = 'imgContainer'; //图片容器
    setTime();
    if (itemWord.trim() !== '') {
        if (imgs.length === 1) {
            setImg().then(re => {
                var g = setSvg('g', '', svg);
                //计算图片旁边剩余空间大概能放置的字数
                var sideX = (width - re.x) / textWidth;
                var sideY = (re.hEnd - re.hStart) / txtHeight;
                if (itemWord.length < sideX * sideY) {
                    var yS = ((sideY - Math.ceil(itemWord.length / sideX)) * txtHeight / 2) + re.hStart;
                    pushTxt(re.x, yS, false, 0);
                    setPath(width - 2, re.hStart + 1, 'RT');
                    setPath(width - 2, re.hEnd, 'RB');
                }
                else {
                    //图片旁边放置满后，将x置为0，重新从上次结束位置开始放置
                    new Promise((resolve, reject) => {
                        pushTxt(re.x, re.hStart + 15, 0, false, resolve);
                    }).then(val => {
                        pushTxt(0, re.hEnd + txtHeight, true, val);
                    });
                }

                //svg元素设置文字
                //xS，yS,x,y轴文字开始位置  oW是否溢出图片 fS for循环开始数字,resolve为Promise参数
                function pushTxt(xS, yS, oW, fS, resolve) {
                    var textx = xS;
                    var texty = yS;
                    for (var i = fS; i < itemWord.length; i++) {
                        var text = setSvg('text', '', '');
                        text.innerHTML = itemWord.charAt(i);
                        textx += textWidth;
                        if (!oW) {
                            if (texty > re.hEnd) {
                                resolve(i - 1);
                                return;
                            }
                        }
                        else {
                            pageH = texty;
                        }

                        if (textx >= (width - textWidth - 2)) {
                            if (pageH + txtHeight > height && oW) {
                                nextPage();
                                texty = 0;
                                pageH = 0;
                            }
                            g = setSvg('g', '', svg);
                            textx = xS + textWidth;
                            texty += txtHeight;
                            oW ? pageH += txtHeight : '';
                            g.appendChild(text);
                            text.setAttribute('x', textx);
                            text.setAttribute('y', texty);
                        }
                        else if (textx < (width - textWidth - 2)) {
                            g.appendChild(text);
                            text.setAttribute('x', textx);
                            text.setAttribute('y', texty);
                        }

                    }
                }

                //svg元素设置文字
                //xS，yS,x,y轴文字开始位置  oW左边是否无图片 fS for循环开始数字,resolve为Promise参数

            });
        }
        else {
            var g = setSvg('g', '', svg);
            var textx = 0;
            var texty = pageH + txtHeight;
            for (var i = 0; i < itemWord.length; i++) {
                var text = setSvg('text', '', '');
                text.innerHTML = itemWord.charAt(i);
                textx += textWidth;
                if (i === 0) textx -= textWidth;
                pageH = texty;
                if (textx >= (width - textWidth - 2)) {
                    if (pageH + txtHeight > height) {
                        nextPage();
                        texty = 0;
                        pageH = 0;
                    }
                    g = setSvg('g', '', svg);
                    textx = 0;
                    texty += txtHeight;
                    pageH += txtHeight;
                    g.appendChild(text);
                    text.setAttribute('x', textx);
                    text.setAttribute('y', texty);

                }
                else if (textx < (width - textWidth - 2)) {
                    g.appendChild(text);
                    text.setAttribute('x', textx);
                    text.setAttribute('y', texty);
                }

            }
            y = pageH + txtHeight;
            pageH += txtHeight;

            setImg();
        }
    }

    function setTime() {
        var div = document.createElement('div');
        var date = new Date(parseInt(time) * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var h = y;
        var day = fillIn(date.getDate().toString());
        var hour = fillIn(date.getHours().toString());
        var minute = fillIn(date.getMinutes().toString());

        $(div).html('<div class="date" style="top:' + (h + 40) + 'px;left:20px">' + day + '</div>' +
            '<div class="time" style="top:' + (h + 67 ) + 'px;left:20px">' + hour + ':' + minute + '</div>');
        c.appendChild(div);
    }

    function setImg() {
        return new Promise((resolve, reject) => {
            var hStart = pageH;
            let dImgs = [];

            switch (imgs.length) {
                case 1:
                    Img1(imgs[0]);
                    break;
                case 2:
                    Img2(imgs);
                    break;
                case 3:
                    Img3(imgs);
                    break;
                case 4:
                    Img4(imgs);
                    break;
                case 5:
                    Img5(imgs);
                    break;
                case 6:
                    Img6(imgs);
                    break;
                case 7:
                    Img7(imgs);
                    break;
                case 8:
                    Img8(imgs);
                    break;
                case 9:
                    Img9(imgs);
                    break;
            }

            function Img1(img, iw) {
                var i = img;
                var imgW = iw || i.width;
                //多图时调用img1时，需要占满容器，单张图时使用图片宽度(宽度小于容器宽度时)即可
                if (imgW > width) {
                    imgW = width - 150;
                }
                else if (i.height > 600) {
                    imgW = (height / i.height) * i.width;
                }
                pushImg(i, imgW);
                addY(i.height);
            }

            function Img2(imgs) {
                var i1 = imgs[0], i2 = imgs[1];
                var a1 = i1.width / i1.height;
                var a2 = i2.width / i2.height;
                var a = a1 + a2;
                //纵横比过小或者过大时，单张放置
                if (a1 < 0.3 || a1 > 3 || a2 < 0.3 || a2 > 3) {
                    Img1(imgs[0]);
                    Img1(imgs[1]);
                }
                else {
                    pushImg(i1, width * (a1 / a) - 2);
                    pushImg(i2, width * (a2 / a) - 2);
                    addY(i1.height);
                }
            }

            function Img3(imgs) {
                var re = getRatio(imgs);
                var dir = '';
                if ((re.rect.length === 1 && re.square.length === 2) ||
                    (re.square.length === 1 && re.rect.length === 2) ||
                    re.rect.length === 3) {
                    var oneArr = [];
                    var twoArr = [];
                    if (re.rect.length === 1) {
                        oneArr = re.rect;
                        twoArr = re.square;
                        re.rect[0].ratio > 1 ? dir = 'hor' : dir = 'ver';
                    }
                    else if (re.rect.length === 2) {
                        twoArr = re.rect;
                        oneArr = re.square;
                    }
                    else {
                        var max = getMax(re.rect);
                        oneArr = [re.rect[max]];
                        re.rect.splice(max, 1);
                        twoArr = re.rect;
                    }

                    var re1 = twoArr[0];
                    var re2 = twoArr[1];
                    var re3 = oneArr[0];
                    var a1 = re1.ratio;
                    var a2 = re2.ratio;
                    var a3 = re3.ratio;
                    var a = a1 + a2;
                    if (dir === '' || dir === 'hor') {
                        pushImg(oneArr[0].image, width);
                        addY(oneArr[0].image.height);
                        pushImg(re1.image, width * (a1 / a) - 2);
                        pushImg(re2.image, width * (a2 / a) - 2);
                        addY(re2.image.height);
                    }
                    else if (dir === 'ver') {
                        var im3 = (re3.image.height / re3.image.width);
                        var f = width / ((2 + im3) / im3);
                        var auto = pushImg(oneArr[0].image, (2 * f / im3) - 2);
                        if (auto.autoH) {
                            f = (auto.w + 2) * im3 / 2;
                        }
                        pushImg(re1.image, f - 2, 'no');
                        addY(f);
                        pushImg(re2.image, f - 2, 'no');
                        addY(f);
                    }

                }
                else if (re.square.length === 3) {
                    var imageH = 0;
                    re.square.forEach(function (val, index) {
                        pushImg(val.image, width / 3 - 2);
                        imageH = val.image.height;
                    });
                    addY(imageH);
                }
                else {
                    var arrs = [];
                    for (var key in re) {
                        if (key === 'rect' || key === 'square') {
                            for (var i = 0; i < re[key].length; i++) {
                                arrs.push(re[key][i]);
                            }
                        }
                    }
                    if (arrs.length === 2) {
                        var im1 = arrs[0];
                        var im2 = arrs[1];
                        pushImg(im1.image, width * (im1.ratio / ( im2.ratio + im1.ratio)) - 2);
                        pushImg(im2.image, width * (im2.ratio / ( im2.ratio + im1.ratio)) - 2);
                        addY(im2.image.height);
                    }
                    else {
                        var im1 = arrs[0];
                        pushImg(im1.image, width - 2);
                        addY(im1.image.height);
                    }
                }
                x = 0;

            }

            function Img4(imgs) {
                if (Math.round(Math.random()) === 0) {
                    Img1(imgs[0], width);
                    imgs.splice(0, 1);
                    Img3(imgs);

                }
                else {
                    Img2([imgs[0], imgs[1]]);
                    imgs.splice(0, 2);
                    Img2(imgs);
                }
            }

            function Img5(imgs) {
                Img2(imgs);
                imgs.splice(0, 2);
                Img3(imgs);
            }

            function Img6(imgs) {
                Img3([imgs[0], imgs[1], imgs[2]]);
                imgs.splice(0, 3);
                Img3(imgs);
            }

            function Img7(imgs) {
                Img3([imgs[0], imgs[1], imgs[2]]);
                imgs.splice(0, 3);
                Img4(imgs);
            }

            function Img8(imgs) {
                Img4([imgs[0], imgs[1], imgs[2], imgs[3]]);
                imgs.splice(0, 4);
                Img4(imgs);
            }

            function Img9(imgs) {
                if (Math.round(Math.random()) === 0) {
                    Img4([imgs[0], imgs[1], imgs[2], imgs[3]]);
                    imgs.splice(0, 4);
                    Img5(imgs);

                }
                else {
                    Img6([imgs[0], imgs[1], imgs[2], imgs[3], imgs[4], imgs[5]]);
                    imgs.splice(0, 6);
                    Img3(imgs);

                }
            }

            function getRatio(ims) {
                var re = {
                    square: [],
                    rect: [],
                    full: []
                };
                ims.forEach(function (val, index, arr) {
                    var im = val;
                    var ratio = im.width / im.height;
                    if (ratio < 0.4 || ratio > 1.8) { //图片宽度百分百
                        pushImg(im, width);
                        if (im.className.indexOf('rotateImg') > 0) {
                            var h = parseInt(im.height) + parseInt($(im).css('top')) * 2;
                            addY(h);
                        }
                        else {
                            addY(im.height);
                        }

                        re.full.push({ratio: ratio, image: im});
                    } else if ((ratio >= 0.5 && ratio <= 0.8) || (ratio >= 1.2 && ratio <= 1.6)) {
                        re.rect.push({ratio: ratio, image: im}); //图片宽度按照比例计算
                    } else if (ratio > 0.8 && ratio < 1.2) {
                        re.square.push({ratio: ratio, image: im}); //图片基本为正方形
                    }
                });
                return re;
            }

            function getMax(arr) {
                var index = 0;
                var max = arr[0].ratio;
                var len = arr.length;
                for (var i = 1; i < len; i++) {
                    if (arr[i].ratio > max) {
                        max = arr[i].ratio;
                        index = i;
                    }
                }
                return index;
            }

            function addY(h) {
                var add = parseInt(y) + parseInt(h) + 4;
                if (add > 600) {
                    nextPage();
                }
                else {
                    y = add;
                    pageH += parseInt(h) + 2;
                }
            }


            function pushImg(im, w, v) {
                var pageEnd = false;
                var imgh = (im.height / im.width) * w;
                var originW = w;
                var autoH = false;
                var border = false;
                //1.底部自适应
                // 图片放入后的高度如果超出容器高度，且图片纵横比例不大于3，就将该图片自适应到该容器中
                if (((imgh + pageH ) > height && (im.height / im.width) < 3)
                    || ((im.height / im.width) > 3) && height - pageH > height * (2 / 3)) {
                    if (height - pageH > height * (1 / 3)) {
                        // y = 0;
                        pageEnd = true;
                        w = (im.width / im.height) * (height - pageH - 10);
                        autoH = true;
                        // x += (parseInt(originW) - parseInt(w)) / 2;
                    }
                    else {
                        addY(imgh);
                    }
                }
                //如果纵横比大于3且容器剩余高度小于容器2/3的高度是，创建新页面
                else if ((im.height / im.width) > 3 && height - pageH < height * (2 / 3)) {
                    nextPage();
                }
                //2.图片宽度为满屏且纵横比不是过大时，设置四角虚框
                if (w === width && (im.height / im.width) < 1.9 && (im.height / im.width) > 0.6 && imgs.length !== 1) {
                    if (w > (width * 3 / 4)) {
                        w = width * 3 / 4;
                    }
                    if ((im.height / im.width) > 0.9 && (im.height / im.width) < 1.1) {
                        w = width * 3 / 5;
                        imgh = imgh * 3 / 5;
                    }
                    border = true;
                    setPath(2, y + 1, 'LT');
                    setPath(width - 2, y + 1, 'RT');
                    setPath(2, y + imgh, 'LB');
                    setPath(width - 2, y + imgh, 'RB');
                    x = (width - w) / 2;
                    if (!((im.height / im.width) > 0.9 && (im.height / im.width) < 1.1)) {
                        y += ((im.height / im.width) * originW - ((im.height / im.width) * w)) / 2;
                    }
                    $(im).css('transform', 'rotate(3deg)');
                    im.className += ' rotateImg';
                }

                if (parseInt(x) + parseInt(w) >= width) {
                    x = 0;
                }
                //3.前两步处理过的图片若高度大于页容器
                if ((im.height / im.width) * w > height) {
                    imgh = height - 4;
                    w = ( im.width / im.height) * imgh;
                }
                im.width = w;
                $(im).css('top', y + 'px');
                $(im).css('left', x + 'px');
                dImgs.push(im);
                im.className += ' img';
                IC.appendChild(im);
                d.appendChild(IC);
                if (v !== 'no') {
                    x += parseInt(w) + 3;
                }
                if (border) addY(((im.height / im.width) * originW - ((im.height / im.width) * w)) / 2);


                return {autoH: autoH, w: w};
                /* if (pageEnd) {
                     x = 0;
                 }*/
            }

            resolve({hStart: hStart, hEnd: pageH, x: x});
        })
    }


    function setPath(px, py, type) {
        var pathPos;
        //type path的位置左上左下右上右下，传入px,py为角坐标
        switch (type) {
            case 'LT':
                pathPos = 'M' + px + ' ' + (py + pathLength) + ' L' + px + ' ' + py + ' L' + (px + pathLength) + ' ' + py;
                break;
            case 'RT':
                pathPos = 'M' + px + ' ' + (py + pathLength) + ' L' + px + ' ' + py + ' L' + (px - pathLength) + ' ' + py;
                break;
            case 'LB':
                pathPos = 'M' + px + ' ' + (py - pathLength) + ' L' + px + ' ' + py + ' L' + (px + pathLength) + ' ' + py;
                break;
            case 'RB':
                pathPos = 'M' + px + ' ' + (py - pathLength) + ' L' + px + ' ' + py + ' L' + (px - pathLength) + ' ' + py;
                break;
            default:
                break;
        }
        setSvg('path', {d: pathPos, 'stroke-width': 2, 'stroke': '#aaa', 'fill': 'transparent'}, svg);
    }

    x = 0;
    IMARR = [];

    return ({pageH: pageH, con: d});
}

function nextPage() {
    y = 0;
    x = 0;
    pageH = 0;
    IC = document.createElement('div');
    IC.className = 'imgContainer'; //图片容器

    c = document.createElement('li');
    c.className = 'pageItem ' + layoutStyle; //页容器
    ul.appendChild(c);

    var foot = document.createElement('footer');
    foot.className = 'footer'; //页容器
    c.appendChild(foot);
    $(foot).html('<hr/> <div class="footDate">2017/08</div><div class="pagination">4</div><div class="bookName">绵绵</div>');

    d = document.createElement('div');
    d.className = 'pageCenter'; //页容器

    svg = setSvg('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        version: '1.1',
        width: width,
        height: height
    }, d);

    c.appendChild(d);
    d.appendChild(IC);
}

function layout2(data) {
    const itemWord = data.text;
    let imgs = data.imgs;
    const time = data.time;


    let IC = document.createElement('div');
    IC.className = 'imgContainer'; //图片容器

    if (y > height - 30 && x < width / 2) {
        x = width / 2 + 10;
        y = 0;
        pageH = 0;
    }
    setTime();
    setTxt();
    if (imgs.length > 0) {
        setImg();
    }


    function setTxt() {
        var g = setSvg('g', '', svg);
        var textx = x;
        var texty = pageH + txtHeight;
        var edge = x + width / 2 - textWidth - 2;
        for (var i = 0; i < itemWord.length; i++) {
            var text = setSvg('text', '', '');
            text.innerHTML = itemWord.charAt(i);
            textx += textWidth;
            if (i === 0) textx -= textWidth;
            pageH = texty;
            if (textx >= edge) {
                if (pageH + txtHeight > height) {
                    if (x < width / 2) {
                        x = width / 2 + 10;
                        y = 0;
                        pageH = 0;
                    }
                    else {
                        nextPage();
                    }
                    texty = 0;
                    pageH = 0;
                }
                g = setSvg('g', '', svg);
                textx = x;
                texty += txtHeight;
                pageH += txtHeight;
                g.appendChild(text);
                text.setAttribute('x', textx);
                text.setAttribute('y', texty);

            }
            else if (textx < edge) {
                g.appendChild(text);
                text.setAttribute('x', textx);
                text.setAttribute('y', texty);
            }

        }
        y = pageH + 8;
        pageH += 8;

    }

    function setTime() {
        var div = document.createElement('div');
        var date = new Date(parseInt(time) * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var h = y;
        var day = fillIn(date.getDate().toString());
        var hour = fillIn(date.getHours().toString());
        var minute = fillIn(date.getMinutes().toString());

        var g = setSvg('g', '', svg);
        setSvg('rect', {x: x, y: y, rx: 2, ry: 2, fill: '#ca5858', width: 30, height: 30}, g);
        var textD = setSvg('text', {'class': 'date', x: x + 6, y: y + 20, fill: '#fff'}, g);
        textD.innerHTML = day;
        setSvg('rect', {x: x + 190, y: y + 5, rx: 4, ry: 4, fill: '#aaa', width: 40, height: 23}, g);
        var textH = setSvg('text', {'class': 'time', x: x + 195, y: y + 20, fill: '#fff'}, g);
        textH.innerHTML = hour + ':' + minute;
        y += 30;
        pageH += 30;

    }

    function setImg() {

        for (var i = 0; i < imgs.length; i++) {
            checkImg(i);
        }

        function checkImg(i) {
            var im = imgs[i];
            var ratio = im.height / im.width;
            im.width = width / 2 - 20;
            im.height = im.width * ratio;
            if (y + im.height > height) {
                if (x < width / 2) {
                    x = width / 2 + 10;
                    y = 0;
                    pageH = 0;

                    $(im).css('top', y + 'px');
                    $(im).css('left', x + 'px');
                    im.className += ' img';
                    IC.appendChild(im);
                    d.appendChild(IC);
                    y += im.height + 2;
                    pageH += im.height + 2;
                }
                else {
                    //nextpage函数
                    y = 0;
                    x = 0;
                    pageH = 0;
                    IC = document.createElement('div');
                    IC.className = 'imgContainer'; //图片容器

                    c = document.createElement('li');
                    c.className = 'pageItem ' + layoutStyle; //页容器
                    ul.appendChild(c);

                    var foot = document.createElement('footer');
                    foot.className = 'footer'; //页容器
                    c.appendChild(foot);
                    $(foot).html('<hr/> <div class="footDate">2017/08</div><div class="pagination">4</div><div class="bookName">绵绵</div>');

                    d = document.createElement('div');
                    d.className = 'pageCenter'; //页容器

                    svg = setSvg('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        version: '1.1',
                        width: width,
                        height: height
                    }, d);

                    c.appendChild(d);
                    d.appendChild(IC);

                    $(im).css('top', y + 'px');
                    $(im).css('left', x + 'px');
                    im.className += ' img';
                    IC.appendChild(im);
                    d.appendChild(IC);
                    y += im.height + 2;
                    pageH += im.height + 2;
                }
            }
            else {
                $(im).css('top', y + 'px');
                $(im).css('left', x + 'px');
                im.className += ' img';
                IC.appendChild(im);
                d.appendChild(IC);
                y += im.height + 2;
                pageH += im.height + 2;
            }

        }

    }

    IMARR = [];
    return ({pageH: pageH, con: d});
}

