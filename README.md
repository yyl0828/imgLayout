# imgLayout
##图文布局
1. 创建页容器
2. 传入的图片计算比例和大小，添加到页容器中
>使用绝对布局，计算出top和left值定位图片，页面中x,y 值决定图片显示的top和left，pageH记录当前页容器子元素已占高度

>文字跨页处理使用[html2canvas](http://html2canvas.hertzen.com/)转换为图片设置为div的背景设置显示的部分从而达到裁剪的效果

>禁止页面中文字选中复制、右键、图片拖动等操作
```
<body 
 oncontextmenu="return false" 
 onselectstart="return false"
 ondragstart="return false">   　
```