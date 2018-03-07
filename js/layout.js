let pageH = 0;
const b = $('.pageContainer')[0];
let UV = document.createElement('div');
UV.className = 'unvisible';
b.appendChild(UV);
let IMARR = []; //存放数组图像全局变量
let x = 0, y = 0; //图片位置坐标，一页内，另起一页后清零
const txtHeight = 19; //文字行高
const textWidth = 15;
const width = 400;   //主体内容宽度 px
const height = 600;  //主体内容高度 px
const pathLength = 10 //边角虚框长度

let d;
let data = [
    {
        text: '今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦今天阳光明媚适合旅游哦',
        imgs: [
            'http://img1.timeface.cn/times/wx/9624df2cb41cfacf56057c14ff5e4531.jpg@198w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/90f0fdf772cc6e079d9c0263905548c8.jpg@133w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/cc93a3bca1a25c7a392cf6cbc0fc57f5.jpg@195w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/037dc969bc660c5583db2c99241cce1f.jpg@197w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/6fe88e53e70e661e583b48dbba8960f3.jpg@130w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/14f313ec954b59f1df2e6ec7682f05a7.jpg@130w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/182b8e2a6c92be3319c8c6b898378fcc.jpg@130w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/df2ddbb4b2c51214eb407e752cc41221.jpg@175w_4000h_1l_1pr_2o.jpg',
            // 'http://img1.timeface.cn/times/wx/8624e1fb3114d75781e50348cb11d79e.jpg@796w_4000h_1l_1pr_2o.jpg'
        ]
    },
    /*    {
            text: '一首歌，每当有那么一两句歌词触动了你心里的那根弦，你总会不轻易的就去喜欢上它。一件小' +
            '。柔和的风吹过来似乎都告诉你说，这就是爱，这就是你可以消除一切烦恼的地方。”',
            imgs: [
                'img/214.png',
                'http://img1.timeface.cn/times/wx/8624e1fb3114d75781e50348cb11d79e.jpg@796w_4000h_1l_1pr_2o.jpg'
    //                'http://img1.timeface.cn/times/wx/230f8d9dcfdda09b9e5b68006a196e3c.jpg@197w_4000h_1l_1pr_2o.jpg',
    //                'http://img1.timeface.cn/times/wx/230f8d9dcfdda09b9e5b68006a196e3c.jpg@197w_4000h_1l_1pr_2o.jpg',
            ]
        },
        {
            "text": '一首歌，每当有那么一两句歌词触动了你心里的那根弦，你总会不轻易的就去喜欢上它。一件小事，每当有那么一两个动作让你回忆起了以前，你总会默默的呆滞去回想。这些歌感人，这些事感动，这些所有都是感情！记得有这么一桥段：“其实那个山坡其实并不干净，那边的夜景其实也不美，可是总有两个人觉得那里就是世外桃源，就像是找到了一块充满了宝藏的地方。有倾诉者，就会有聆听者。柔和的风吹过来似乎都告诉你说，这就是爱，这就是你可以消除一切烦恼的地方。”\n' +
            '　　直到有一天，你也会为人父母。当你看到自己的孩子哇哇降世，你总会爱不释手。无论这个小生命做了什么，你都会觉得他是那样的惹人怜爱，是那样的美。当他一天天长大，在你眼里他犯的错，他有的毛病，他有过的胜利，他有过的点点滴滴，你总会帮他总结，帮他在翅膀丰腴之前默默的付出。记得有这样的一个故事：“其实这个房子并不豪华，那里的生活条件其实也不富裕，可是那一家人生活的非常幸福快乐，每个成员都知道这是他们翅膀的落脚点，飞累了就能回来得' +
            '到微笑。有哭泣，就会有安慰你的人。热乎乎的饭菜都想告诉你说，这就是家，这就是你可以得到幸福的地方。”' +
            '一桌麻将圈围着四个老人，香烟还是时不时的点着。每当摸到一张自己不要牌还是会拧起眉头。看着身边的朋友们，你总会觉得自己并不孤单。当我们牵手走过，一起风雨无阻的相互扶持，你会为他高兴为他庆贺每一次他的成功，为他悲伤每一次的不如意，在别人的生命中也留下自己的脚印。记得有这样的朋友：“其实他们并不是各个都家产百万，他们的工作其实也不是最好的，可是当有个人遇到苦难总会有那么一些手默默的伸出来帮助你，希' +
            '望你也能跟他们一样顺顺利利，这就是朋友，这是你一辈子都离不开的一些人。' +
            '其实这个房子并不豪华，那里的生活条件其实也不富裕，可是那一家人生活的非常幸福快乐，每个成员都知道这是他们翅膀的落脚点，飞累了就能回来得到微笑。有哭泣，' +
            '就会有安慰你的人。热乎乎的饭菜都想告诉你说，这就是家，这就是你可以得到幸福的地方。',
            imgs: []
        }*/
];
var index = 0;//循环数组索引
compute();


function compute(d) {
    start(data[index], d).then(val => {
        if (index === data.length - 1) return;
        index++;
        if ((data[index].text.trim() !== '' && val.pageH < (height - 100)) || (data[index].imgs.length !== 0 && val.pageH < (height - 200))) {
            //若该数组中文字不为空且页容器剩余高度大于100px或者该数组含有图片且页容器剩余高度大于200px，那么将这个页容器再重新利用，否则新创建页容器
            var fillHeight = pageH;
            if (val.con.innerHTML.indexOf('fillDiv') > 0) {
                //若在同一页中已经含有填充元素，下一个填充元素的高度应该首先减去上一个填充元素的高度
                var fillH = $('div .fillDiv:last').height();
                fillHeight = pageH - parseInt(fillH);
            }

            var all = $(val.con).children();
            for (var i = 0; i < all.length; i++) {
                if (all[i].className == 'imgTxt' || all[i].className == 'itemWord') {
                    fillHeight -= $(all[i]).height() + 5;
                    //减去文字容器所占高度  （*隐患部分）
                }
            }
            $(val.con).append('<div class="fillDiv" style="height: ' + fillHeight + 'px;width: 100%"></div>');
            y = 0;
            compute(val.con);
        }
        else {
            pageH = 0;
            compute();
        }
    });
}

function start(data, con) {
    var imgs = data.imgs;
    var re = 8;

    if (typeof(con) == "undefined") {
        d = document.createElement('div');
        d.className = 'pageCenter'; //页容器
        b.appendChild(d);
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
                    re = layout({text: data.text, imgs: IMARR});
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


function layout(data) {
    const itemWord = data.text;
    const imgs = data.imgs;
    let IC = document.createElement('div');
    IC.className = 'imgContainer'; //图片容器

    let s = document.createElement('span');
    s.className = 'itemWord';

    s.innerText = itemWord;

    let svg = setSvg('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        version: '1.1',
        width: width,
        height: height
    }, d);

    if (itemWord.trim() !== '') {
        if (imgs.length === 1) {
            setImg().then(re => {
                var g = setSvg('g', '', svg);
                //计算剩余空间大概能放置的字数
                var sideX = (width - re.x) / textWidth;
                var sideY = (re.hEnd - re.hStart) / txtHeight;
                if (itemWord.length < sideX * sideY) {
                    var yS = (sideY - Math.ceil(itemWord.length / sideX)) * txtHeight / 2;
                    pushTxt(re.x, yS, false, 0);
                    var pathPos = 'M' + (width - pathLength) + ' ' + parseInt(re.hStart) + ' L' + width + ' ' + parseInt(re.hStart)
                        + ' L' + width + ' ' + (parseInt(re.hStart) + pathLength);
                    setSvg('path', {d: pathPos}, svg);
                    pathPos = 'M' + (width - pathLength) + ' ' + parseInt(re.hEnd) + ' L' + width + ' ' + parseInt(re.hEnd)
                        + ' L' + width + ' ' + (parseInt(re.hEnd) - pathLength);
                    setSvg('path', {d: pathPos}, svg);
                }
                else {
                    //图片旁边放置满后，将x置为0，重新从上次结束位置开始放置
                    new Promise((resolve, reject) => {
                        pushTxt(re.x - 10, re.hStart + 15, 0, false, resolve);
                    }).then(val => {
                        pushTxt(10, re.hEnd + txtHeight, true, val);
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

                        if (textx > 390) {
                            g = setSvg('g', '', svg);
                            textx = xS;
                            texty += txtHeight;
                            oW ? pageH += txtHeight : '';
                        }
                        else if (textx < 390) {
                            g.appendChild(text);
                            text.setAttribute('x', textx);
                            text.setAttribute('y', texty);
                        }

                    }
                }


            });
        }
        else {
            d.appendChild(s);
            txtEnd();
        }

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

    function txtEnd() {
        var txth = $(s).outerHeight(true);
        if (height - pageH < txtHeight) {
            nextPage();
        }
        if (txth < height - pageH) {
            pageH += $(s).outerHeight(true);
            d.appendChild(s);
        }
        else {
            /*如果文字在当前页面放不下需要分成两页，将文字转换成BASE64编码图像，
            设置成div背景图并进行裁剪显示
             */
            var imgTxt = document.createElement('div');
            imgTxt.className = 'imgTxt';
            d.appendChild(imgTxt);

            toImg(s).then(val => {
                $(imgTxt).css('background-image', 'url(' + val + ')');
                var endH = Math.floor((height - pageH) / txtHeight) * txtHeight;
                $(imgTxt).css('height', endH);

                //数据恢复初始化，重新创建页面
                nextPage();

                var imgTxt2 = document.createElement('div');
                imgTxt2.className = 'imgTxt';
                d.appendChild(imgTxt2);
                $(imgTxt2).css('background-image', 'url(' + val + ')');
                $(imgTxt2).css('height', Math.floor((txth - endH) / txtHeight) * txtHeight);
                $(imgTxt2).css('background-position', 'left bottom');
                pageH += $(imgTxt2).height();

            });

        }
    }

    function toImg(item) {
        return new Promise((resolve, reject) => {
            html2canvas(item).then(canvas => {
                var img = canvas.toDataURL("image/png");
                $($(d.lastChild).prev()).remove();
                resolve(img);
            });
        });

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
                    imgW = width;
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
                        var f = (width / (10 * a3 + 5 ));//图片比例
                        pushImg(oneArr[0].image, f * 10 * a3 - 2);
                        pushImg(re1.image, f * 5 - 2, 'no');
                        addY(re1.image.height);
                        pushImg(re2.image, f * 5 - 2, 'no');
                        addY(re2.image.height);
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
                x = 0;

            }

            function Img4(imgs) {
                if (Math.round(Math.random()) === 0) {
                    Img1(imgs[0], width);
                    imgs.splice(0, 1);
                    Img3(imgs);
                }
                else {
                    Img2(imgs);
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
                    if (ratio < 0.5 || ratio > 1.6) { //图片宽度百分百
                        pushImg(im, width);
                        addY(im.height);
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
                var add = parseInt(y) + parseInt(h) + 2;
                if (add + pageH > 600) {
                    nextPage();
                }
                else {
                    y = add;
                    pageH += parseInt(h) + 2;
                }
            }

            function nextPage() {
                y = 0;
                x = 0;
                pageH = 0;
                IC = document.createElement('div');
                IC.className = 'imgContainer'; //图片容器

                d = document.createElement('div');
                d.className = 'pageCenter'; //页容器

                b.appendChild(d);
                d.appendChild(IC);
            }

            function pushImg(im, w, v) {
                var pageEnd = false;
                var imgh = (im.height / im.width) * w;
                if (parseInt(x) + parseInt(w) >= width) {
                    x = 0;
                }
                // 图片放入后的高度如果超出容器高度，且图片纵横比例不大于3，就将该图片自适应到该容器中
                if (((imgh + pageH ) > height && (im.height / im.width) < 3)
                    || ((im.height / im.width) > 3) && height - pageH > height * (2 / 3)) {
                    if (height - pageH > height * (1 / 3)) {
                        y = 0;
                        pageEnd = true;
                        w = (im.width / im.height) * (height - pageH - 10);
                    }
                    else {
                        addY(imgh);
                    }
                }
                //如果纵横比大于3且容器剩余高度小于容器2/3的高度是，创建新页面
                else if ((im.height / im.width) > 3 && height - pageH < height * (2 / 3)) {
                    nextPage();
                }
                im.width = w;
                $(im).css('top', y + 'px');
                $(im).css('left', x + 'px');
                dImgs.push(im);
                IC.appendChild(im);
                d.appendChild(IC);
                if (v !== 'no') {
                    x += parseInt(w) + 3;
                }
                if (pageEnd) {
                    x = 0;
                }
            }

            resolve({hStart: hStart, hEnd: pageH, x: x});
        })
    }

    x = 0;
    IMARR = [];

    return ({pageH: pageH, con: d});
}

