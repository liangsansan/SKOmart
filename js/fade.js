document.addEventListener('DOMContentLoaded',()=>{
        /*var focus = document.querySelector('#focus');
        var bigpic = focus.querySelector('#bigpic');
        var bigList = bigpic.children;*/

        var banner = document.querySelector('#banner');
        var bannerList = banner.querySelector('.banner_ul');
        var bannerLis = bannerList.children;
        // @生成html解构
        // 复制所有图片作为小图
        /*var smallpic = bigpic.cloneNode(true);
        smallpic.id = 'smallpic';
        var smallList = smallpic.children;

        // 小图容器
        var smallWrap = document.createElement('div');
        smallWrap.classList.add('small-wrap');

        smallWrap.appendChild(smallpic);
        focus.appendChild(smallWrap);*/


        // 左右按钮
        /*var btnPrev = document.createElement('a');
        btnPrev.classList.add('prev');
        btnPrev.innerHTML = '&lt;'
        var btnNext = document.createElement('a');
        btnNext.classList.add('next');
        btnNext.innerHTML = '&gt;'

        focus.appendChild(btnPrev);
        focus.appendChild(btnNext);*/

        // @初始化

        // 当前索引值
        var index = 0;

        // 上一张索引值
        var lastIndex = 0;

        var len = bannerLis.length;

        // 大图：把除第一张图以外的图片透明度改成0
        // 小图：把除第一张以外的图片透明度改成0.5
        for(var i=0;i<len;i++){
            if(i===0){
                continue;
            }
            animate(bannerLis[i],{opacity:0});
            // animate(smallList[i],{opacity:0.5});
        }

        // 设置#smallList的宽度
        /*var firstImg = smallList[0].querySelector('img');
        var imgWidth;
        firstImg.onload = function(){
            imgWidth = firstImg.offsetWidth+10;
            smallpic.style.width = imgWidth*len + 'px';
        }*/

        // @淡入淡出效果
        var timer = setInterval(autoPlay,3000);

        banner.onmouseenter = function(){
            console.log(1);
            clearInterval(timer);
        }
        banner.onmouseleave = function(){
            timer = setInterval(autoPlay,3000);
            console.log(2);
        }

        function autoPlay(){
            index++;

            showPic();
        }


        function showPic(){
            if(index<0){
                index = len - 1;
            }else if(index>len-1){
                index = 0;
            }

            // 大图
            animate(bannerLis[index],{opacity:1});
            animate(bannerLis[lastIndex],{opacity:0});

            // 小图
          /*  animate(smallList[index],{opacity:1});
            animate(smallList[lastIndex],{opacity:0.5});
*/

            // 小图滚动
            /*animate(smallpic,{left:-imgWidth*index});*/

            // 动画后
            // 更新lastIndex
            lastIndex = index;
        }
    });