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
         "如果事与愿违 就相信上帝一定另有安排",
     "是非对错，有时只是角度问题",
     "越在意什么，什么越会折磨你",
     "反感一个人，连听见名字都恶心",
     "温和久了，稍有脾气就成了恶人",
     "离去的都是风景，留下的才是人生",
     "任何安慰都没有自己看透来的奏效",
     "我也想对每个人好，可狼我喂不饱",
     "友情都存在着吃醋，更别说爱情了",
     "原有前程可奔赴，亦有岁月可回首",
     "偏见来自无非两个地方：无知和愚蠢",
     "其实一切的问题，时间已经给了答案",
     "所有偷过的懒，都会变成打脸的巴掌",
     "信任变得很难，假的和真的越来越像",
     "理性的人适合共事，感性的人适合共处",
     "没有新故事的人，才会对过去念念不忘",
     "你嘴巴那么毒，内心一定是有很多苦吧",
     "人生有两次很棒，虚惊一场和失而复得",
     "如果觉得生活苦，那就给自己撒点糖吧",
     "如果没有见过光明，我本可以忍受黑暗",
     "谁心里没有故事，只不过是学会了控制",
     "我觉得单身挺好，可是一直却招人讽刺",
     "我欣赏你的直言不讳，但请管好你的嘴",
     "希望曾经的仰望，都能成为以后的日常",
     "心若没有栖息的地方，到哪里都是流浪",
     "越长大你越知道，有钱比有什么都舒坦",
     "两个人的沟通，70%是情绪，30%是内容",
     "不发生点烂事，永远看不清身边人的模样",
     "对于我们最爱的人，不说永远，只说珍惜",
     "多少次的义无反顾，在时间面前也得认输",
     "我会等，因为最好的东西，总是压轴出场",
     "幸福是比较级，要有东西垫底才感觉的到",
     "在泥泞的道路上，要保持一颗玩泥巴的心",
     "这世界上唯一扛得住岁月摧残的就是才华",
     "半山腰总是最挤的，所以你得去山顶看看",
     "电影是多么慈祥，总是让错过的人重新相逢",
     "哭，并不是因为脆弱，而是因为坚强得太久",
     "梦想成真之前，它看上去总是那么遥不可及",
     "人生是场荒芜的旅行，冷暖自知，苦乐在心",
     "如果每个人都理解你，那你得普通成什么样",
     "少又不甘，多又嫌烦，哪有恰到好处的陪伴",
     "听说过很多减肥方法，依然胖着过完这一生",
     "我不在意你曾堕落，我只在意你是否会崛起"
];

window.onload = function () {

    var $dailytextbox = $('.dailytext');
    var length = sentence.length;


    // 搜索功能
    var $search_btn = $('.search-btn');
    var search_url = 'https://cn.bing.com/search?q=';

    $search_btn.click(function(){
        var search_input = $('.search-txt').val();
        search_url = search_url + search_input;
        // console.log(search_url);
        window.location.href = search_url;

    });


    //回车键访问

    $(document).keydown(function(e){
        var search_input = $('.search-txt').val();
        if(e.keyCode == 13 &&  search_input != ""){
            search_url = search_url + search_input;
            // console.log(search_url);
            window.location.href = search_url;
        }else{
            
        }
    });

    //回车键搜索




// 搜索功能
  // 搜索功能
  
    // 语句切换
    $dailytextbox.click(function(){
        var rand = parseInt(Math.random()*(0-length+1)+length);
        $dailytextbox.text('');
        $dailytextbox.append("「 "+sentence[rand]+" 」");
        
    })

    $(document).ready(function(){
        var rand = parseInt(Math.random()*(0-length+1)+length);
        $dailytextbox.text('');
        $dailytextbox.append("「 "+sentence[rand]+" 」");
     })


    // 切换背景
    var $Bcg_button = $('.changebcg');
    var $play_btn = $('.play');
    var $body = $('body');
    var bcg_end = 19;
    var rand_i = parseInt(Math.random()*(2-bcg_end+1)+bcg_end);
    var url = "url('images/bcg"+rand_i+".jpg')";

    console.log(url);
    $body.css("background-image",url);
    $Bcg_button.click(function(){
         rand_i = parseInt(Math.random()*(2-bcg_end+1)+bcg_end);
         url = "url('images/bcg"+rand_i+".jpg')";
        $body.css("background-image",url);
    });
    $play_btn.click(function(){
        window.location.href = "pannel.html";
    })


    // 显示时间
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


