$(document).ready(function()
{
	// Translation selector
	$('#topbar form select').change(function()
	{
		$(this).parents('form').submit();
	});

	// Striped tables
	$('#kodoc-content tbody tr:even').addClass('alt');

	// Toggle menus
	$('#kodoc-menu ol > li').each(function()
	{
		var link = $(this).find('strong');
		var menu = $(this).find('ul');
		// var togg = $('<span class="toggle">[ + ]</span>');

		var open  = function()
		{
			// togg.html('[ &ndash; ]');
			menu.stop().slideDown();
			link.addClass('active');
		};

		var close = function()
		{
			// togg.html('[ + ]');
			menu.stop().slideUp();
			link.removeClass('active');
		};

		if (menu.find('a[href="'+ window.location.pathname +'"]').length)
		{
			// Currently active menu
			link.toggle(close, open);
			link.addClass('active');
		}
		else
		{
			menu.slideUp(0);
			link.toggle(open, close);
			link.removeClass('active');
		}
	});

	// Collapsable class contents
	$('#kodoc-content #toc').each(function()
	{
		var header  = $(this);
		var content = $('#kodoc-content div.toc').hide();

		$('<span class="toggle">[ + ]</span>').toggle(function()
		{
			$(this).html('[ &ndash; ]');
			content.stop().slideDown();
		},
		function()
		{
			$(this).html('[ + ]');
			content.stop().slideUp();
		})
		.appendTo(header);
	});
});
