let pageH = 0;
const b = $('.pageContainer')[0];
let UV = document.createElement('div');
UV.className = 'unvisible';
b.appendChild(UV);
let IMARR = []; //存放数组图像全局变量
let x = 0, y = 0; //图片位置坐标，一页内，另起一页后清零
const txtHeight = 19; //文字行高
const width = 400;   //主体内容宽度 px
const height = 600;  //主体内容高度 px

let d;

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

    if (itemWord.trim() !== '') {
        d.appendChild(s);
        txtEnd();
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

    let dImgs = [];

    switch (imgs.length) {
        case 1:
            Img1(imgs);
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

    function Img1(imgs, iw) {
        var i = imgs[0];
        var imgh = iw || i.width;
        //多图时调用img1时，需要占满容器，单张图时使用图片宽度即可
        pushImg(i, imgh);
        addY(i.height);
    }

    function Img2(imgs) {
        var i1 = imgs[0], i2 = imgs[1];
        var a1 = i1.width / i1.height;
        var a2 = i2.width / i2.height;
        var a = a1 + a2;
        pushImg(i1, width * (a1 / a) - 2);
        pushImg(i2, width * (a2 / a) - 2);
        addY(i1.height);
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
            Img1([imgs[0]], width);
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
        var add = parseInt(y) + parseInt(h) + 4;
        if (add + pageH > 600) {
            nextPage();
        }
        else {
            y = add;
            pageH += parseInt(h) + 4;
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
        if ((imgh + pageH ) > height) {
            if (height - pageH > 200) {
                y = 0;
                pageEnd = true;
                w = (im.width / im.height) * (height - pageH - 10);
            }
            else {
                addY(imgh);
            }
        }
        im.width = w;
        $(im).css('top', y + 'px');
        $(im).css('left', x + 'px');
        dImgs.push(im);
        IC.appendChild(im);
        d.appendChild(IC);
        if (v !== 'no') {
            x += parseInt(w) + 2;
        }
        if (pageEnd) {
            x = 0;
        }
    }

    x = 0;
    IMARR = [];

    return ({pageH: pageH, con: d});
}

