
function getsource(id){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=e0f6e22e1f944acaaec181c9e011de7b",
        success:function(res){
            document.getElementById("sourceLink").innerHTML=res.sourceUrl
            document.getElementById("sourceLink").href=res.sourceUrl
        }
    });
}
function getrecepe(q){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/search?apiKey=e0f6e22e1f944acaaec181c9e011de7b&number=1&query"+q,
        success: function(res){
            document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src="+res.baseUrl+res.results[0].image+''
            "width='400'/><br> ready in"+res.results[0].res.results[0].readyInMinutes+" minutes";
            getsource(res.results[0].id)
        }
    })
}