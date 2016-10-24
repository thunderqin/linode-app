/**
 * Created by qinguolei on 16/10/21.
 */
var t = fetch('http://127.0.0.1:3000/api/jsonp');

t.then(function(res){
    return res.json();
}).then(function(d){
    console.log(d);
})

/*$.getJSON("http://127.0.0.1:3000/api/jsonp?callback=?",
	function(data) {
    	console.log(data);
});*/

$('.post').on('click',function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/post",
        type: 'post',
        data: {user:'guoxi',pw:'hah'},
        jsonp:'callback',
        success:function(d) {
            alert(JSON.stringify(d))
        },
        timeout:3000
    });
});
$('.jsonp').on('click',function(){
    $.ajax({
        url:"http://127.0.0.1:3000/api/jsonp",
        dataType:'jsonp',
        data:'',
        jsonp:'callback',
        success:function(d) {
            alert(JSON.stringify(d))
        },
        timeout:3000
    });
});

