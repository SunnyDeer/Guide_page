var sentence = [
    "别慌，月亮也在大海某处迷茫",
    "无论风暴将我带到什么岸边，我都将以主人的身份上岸",
     "后背上的疼痛是为了萌发翅膀。静止不动的石头必将爬满青苔", 
     "你要批评指点四周风景，首先你要爬上屋顶", 
     "为了好好偷懒，一定要非常努力", 
     "自己发光，而不是被谁照亮",
      "热爱可抵岁月漫长", 
      "他们试图把你埋了，你要记得你是种子", 
     "あなたもきっと、誰かの奇跡 （你也一定会是某个人的奇迹）",
      "一事无成也代表万事皆有可能！", 
     "未来可期 人生值得", "别否定自己你特别好特别温柔特别值得",
     "要善良，要勇敢，要像星星一样努力发光", "前路浩浩荡荡 万物皆可期待", 
     "往後的日子都是崭新的了 別再回头看了", "日益努力而后风生水起", 
     "要做什么梦是每个人的自由",
      "我在追逐的不是别人啊，是我自己满怀期待的心",
       "没有谁天生倔强，只是为了梦想寸步不让", "没关系 天空越黑星星越亮",
        "你不扬帆，没人替你起航", "每一个不曾起舞的日子，都是对生命的辜负",
         "如果事与愿违 就相信上帝一定另有安排"
];

window.onload = function () {

    var $dailytextbox = $('.dailytext');
    var length = sentence.length;
    
    $dailytextbox.click(function(){
        var rand = parseInt(Math.random()*(0-length+1)+length);
        this.innerHTML ="「 "+sentence[rand]+" 」";
        console.log(sentence[rand]);
    })



    setInterval(function () {
            var t = new Date();
            var year = t.getFullYear(); //获取当前时间的年份
            var month = t.getMonth() + 1; //获取当前时间的月份
            var day = t.getDate(); //获取当前时间的日
            var week = t.getDay(); //获取当前时间的星期
            var arr = new Array("星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日", ); //规划星期的输出
            var hour = t.getHours(); //获取当前时间的时
            var minute = t.getMinutes(); //获取当前时间的分
            var second = t.getSeconds(); //获取当前时间的秒
            document.getElementById('datetime').innerHTML = year + " 年 " + month + " 月 " + day + " 日 " + arr[week] + "   " + hour + ((minute < 10) ? ":0" : ":") + minute + ((second < 10) ? ":0" : ":") + second + " " + ((hour > 12) ? "下午" : "上午");;
        }

        , 1000);
}