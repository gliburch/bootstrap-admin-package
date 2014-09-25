$(function() {
  
  $('snippet').each(function() {
    var obj = $(this);
    var snippet_html = obj.html()
    var snippet_html_decoded = $.trim($('<div/>').text(snippet_html).html());
    // var code_block = $('<pre/>').append($('<code/>').addClass('html').append($.trim(snippet_decoded)));
    // $(this).after(code_block);

    // var code_block = $('<pre/>').append($('<code/>').addClass('html').append($.trim(snippet_decoded)));
    
    $('<div style="overflow:hidden"></div>')
      .append($('<pre class="scroll-top"></pre>'))
      .find('pre')
        .append($('<code class="html"></code>'))
        .find('code')
          .append(snippet_html_decoded)
        .end()
      .end()
      .append($('<button class="btn btn-info btn-xs pull-right">Copy</button>'))
      .find('button')
        .on('click', function() {
          prompt('[Ctrl-c] 를 눌러 복사하고, 원하는 곳에 [Ctrl-v] 를 눌러 붙여넣으세요.', snippet_html);
        })
      .end()
      .insertAfter(obj);

    $('pre code').scroll(function() {
      var scroll_from_top = $(this).scrollTop();
      var scroll_from_bottom = this.scrollHeight - $(this).scrollTop() - $(this).height();
      var box = $(this).closest('pre');
      if(scroll_from_top < 20) {
        box.addClass('scroll-top');
        box.removeClass('scroll-middle');
        box.removeClass('scroll-bottom');
      } else if(scroll_from_top >= 20 && scroll_from_bottom >= 20) {
        box.removeClass('scroll-top');
        box.addClass('scroll-middle');
        box.removeClass('scroll-bottom');
      } else if(scroll_from_bottom < 20) {
        box.removeClass('scroll-top');
        box.removeClass('scroll-middle');
        box.addClass('scroll-bottom');
      }
    });


  });

  hljs.configure({
    tabReplace: '  ', // 4 spaces
  });
  
  hljs.initHighlightingOnLoad();
  
});