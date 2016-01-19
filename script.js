$(function() {

  $("#editor").keyup(function() {
    content = editor.getValue();

    $("#feedback").html("<li id='output'></li>");
    $("#output").text(testing.blackList(content, "if", "if statement"));
    $("#output").after($("<li></li>").text(testing.whiteList(content, "function", "function")));
    $("#output").after($("<li></li>").text(testing.nestedIn(esprima.parse(content), "IfStatement", "ForStatement")));

  });

});