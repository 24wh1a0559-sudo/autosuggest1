var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest";

var searchbar=document.getElementById("search-bar");
var searchsuggestions=document.getElementById("search-suggestions");
//whenever input changes we call input

searchbar.addEventListener("input",function(){
//get the data what u want
//user type data in the query int the api
//make api call
//suggestions will come
//append  all the search suggestions to div tag involved in UI 
   var query=searchbar.value.trim();
   //console.log(query);
   fetchsuggestions(query);
});

 function fetchsuggestions(query){
    var fullAPI=API_URL+"?q="+query+"&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
         .then(function(res){
            return res.json();
         })
         .then(function(data){
            //console.log(data);
             showSuggestions(data);
         })
         .catch(function(err){
            console.log("Error:"+err);
         })
 }
  function showSuggestions(data){
      var values=data.results;
      if(data.count===0){
        searchsuggestions.innerHTML="<div>No matching results found</div>";
      }
      else{
        var htmlString="";
        for(var i=0;i<values.length;i++){
            htmlString+="<div>"+
            "<span class='suggestion-item'>"+values[i].text+"</span>"
            +"<span class='suggestion-data'>"+values[i].data +"</span>"+
            "</div>";
        }
        searchsuggestions.innerHTML=htmlString;
      }

  }