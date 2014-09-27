$(function() {

	function missSnippet(obj, data) {
		// <snippet> source 요청이 실패했을 때 오류 메시지 박스
		$('<div class="panel panel-danger"></div>')
			.append('<div class="panel-heading">Snippet load error!</div>')
			.append('<div class="panel-body">"' + obj.attr('source') + '" 지정된 경로 파일을 찾을 수 없습니다.</div>')
			.appendTo(obj);
	}

	function drawSnippet(obj, data) {
		obj.append(data);
	}

	function drawCodebox(obj, data) {
		var snippet_html = data;
		var snippet_html_decoded = $.trim($('<div/>').text(snippet_html).html());
		// <snippet> 뒤에 붙이는 코드블럭 템플릿
		$('<div style="overflow:hidden"></div>')
			.append('<pre></pre>')
			.find('pre')
				.append('<code class="html"></code>')
				.find('code')
					.append(snippet_html_decoded)
				.end()
			.end()
			.append('<button class="btn btn-info btn-xs pull-right">Copy</button>')
			.find('button')
				.on('click', function() {
					prompt('[Ctrl-c] 를 눌러 복사하고, 원하는 곳에 [Ctrl-v] 를 눌러 붙여넣으세요.', snippet_html);
				})
			.end()
			.insertAfter(obj);
	}
	
	$('snippet').each(function() {
		var obj = $(this);
		// <snippet> 에 source attribute 가 있으면 해당 타깃 파일의 텍스트를 삽입하고 코드블럭을 그린다.
		if(obj.attr('source')) {
			$.get(obj.attr('source'), function(data) {
				drawSnippet(obj, data);
			}).fail(function(data) {
				missSnippet(obj, data);
			}).done(function(data) {
				drawCodebox(obj, data);
				obj.removeAttr('source');
			})
		// <snippet> 에 source attribute 가 없으면 코드블럭만 그린다.
		} else {
			drawCodebox(obj, obj.html());
		}
	});

	// 모든 Ajax 요청이 끝난 후에 DOM 관련 처리
	$(document).ajaxStop(function() {
		$('pre code').each(function() {
			// 코드 박스가 스크롤이 생기면 그림자 효과를 준다.
			if(this.scrollHeight > $(this).height()) {
				var box = $(this).closest('pre');
				box.addClass('scroll-top');
			}
			// 스크롤 위치에 따라 그림자 효과의 변화를 준다.
			$(this).scroll(function() {
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
	});
	
});