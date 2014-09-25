$(function() {
  
  $('snippet').each(function() {
    var obj = $(this);
    var snippet_html = obj.html()
    var snippet_html_decoded = $.trim($('<div/>').text(snippet_html).html());
    // var code_block = $('<pre/>').append($('<code/>').addClass('html').append($.trim(snippet_decoded)));
    // $(this).after(code_block);

    // var code_block = $('<pre/>').append($('<code/>').addClass('html').append($.trim(snippet_decoded)));
    
    $('<div></div>')
      .append($('<pre></pre>'))
      .find('pre')
        .append($('<code></code>'))
        .addClass('html')
        .find('code')
          .append(snippet_html_decoded)
        .end()
      .end()
      .append($('<button></button>'))
      .find('button')
        .addClass('btn btn-default btn-xs')
        .text('Copy')
        .on('click', function() {
          prompt('[Ctrl-c] 를 눌러 복사하고, 원하는 곳에 [Ctrl-v] 를 눌러 붙여넣으세요.', snippet_html);
        })
      .end()
      .insertAfter(obj);


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