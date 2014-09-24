$(function() {
  
  $('snippet').each(function() {
    var snippet = $(this).html();
    var snippet_decoded = $('<div/>').text(snippet).html();
    $(this).after($('<pre/>').append($('<code/>').addClass('html').append($.trim(snippet_decoded))));
  });

  $('pre').css({
    overflow: 'auto',
    height: 240,
  })

  hljs.configure({
    tabReplace: '  ', // 4 spaces
  });
  
  hljs.initHighlightingOnLoad();
  
});