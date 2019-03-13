/*
num 要产生多少个随机数
from 产生随机数的最小值
to 产生随机数的最大值
*/
function createRandom(num ,from ,to)
{
    var arr=[];
    for(var i=from;i<=to;i++)
        arr.push(i);
    arr.sort(function(){
        return 0.5-Math.random();
    });
    arr.length=num;
    return arr;
}
 
function createRandom2(num , from , to)
{
    var arr=[];
    var json={};
    while(arr.length<num)
    {
        //产生单个随机数
        var ranNum=Math.ceil(Math.random()*(to-from))+from;
        //通过判断json对象的索引值是否存在 来标记 是否重复
        if(!json[ranNum])
        {
            json[ranNum]=1;
            arr.push(ranNum);
        }
         
    }
    return arr;
     
     
}
