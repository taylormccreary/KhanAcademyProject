var testing = new TestingAPI();

function TestingAPI(){

 function findIn(contentArray, keyword){
  var output = [];
  for (var i = 0; i < contentArray.length; i++){
    keywordFound = find(contentArray[i]["body"], keyword);
    if (keywordFound.length > 0){
      output[output.length] = keywordFound[0];
    }
  }
  return output;
}

  function find(contentTree, keyword){
  var output = [];
  for (var i = 0; i < contentTree["body"].length; i++){
    if (contentTree["body"][i]["type"] == keyword){
      output[output.length] = contentTree["body"][i];
    }
  }
  return output;
}


 this.whiteList = function(content, keyword, term) {
   var tokens = esprima.tokenize(content);
   for (var i = 0; i < tokens.length; i++){
     if (tokens[i]["value"] == keyword){
        return "Good job! The program contains a '" + term + "'";
     }
   }
     return "The program MUST use a '" + term + "'";
 }
 
  this.blackList = function(content, keyword, term) {
   var tokens = esprima.tokenize(content);
   for (var i = 0; i < tokens.length; i++){
     if (tokens[i]["value"] == keyword){
        return "The program MUST NOT use a '" + term + "'";
     }
     
   }
   return "Good job! This program does NOT contain a '" + term + "'";
     
 }


  this.nestedIn = function(contentTree, inner, outer){
    var outputArray = findIn(find(contentTree, outer), inner);
    if(outputArray.length > 0) {
      return "Good job! The program has a '" + inner + "' inside of a '" + outer + "'.";
    }
    return "The program MUST have a '" + inner + "' inside of a '" + outer + "'.";
  };

}





