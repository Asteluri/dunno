/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

var advertisements = [
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ1",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ2",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ3",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ4",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ5",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ6",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ7",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ8",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ9",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ10",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ11",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ12",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ13",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ14",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ15",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ16",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ17",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ18",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ19",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ20",
	"à¦†à§¡à¦Šà¦¸à¦ à¦šà¦ˆ21"
];

var adPercent = 0.1;

var Favicon_URL = 'https://files.catbox.moe/6sr1me.png';

var ChannelName_Caption = 'Yayifications';

var TitleBarDescription_Caption = '>Streaming:';

var ThemesCSS = [
];

var TopUserLogo = [
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

/* ----- Initial channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- POLYFILLS ------ */
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());

/* ----- getting channel options ----- */

var defplayer = "right";
var defuserlist = "left";
var defqueue = "right";

var UCONF = {
	"player":getOrDefault(CHANNEL.name + "_player", defplayer),
	"userlist":getOrDefault(CHANNEL.name + "_userlist", defuserlist),
	"queue":getOrDefault(CHANNEL.name + "_queue", defqueue),
	"qsize":getOrDefault(CHANNEL.name + "_qsize", "wide"),
	"main":getOrDefault(CHANNEL.name + "_main", "top"),
	"motd":getOrDefault(CHANNEL.name + "_motd", "top"),
	"logo":getOrDefault(CHANNEL.name + "_logo", "no"),
	"logourl":getOrDefault(CHANNEL.name + "_logourl", ""),
	"logoht":getOrDefault(CHANNEL.name + "_logoht", "200"),
	"header":getOrDefault(CHANNEL.name + "_header", "detached"),
	"css":getOrDefault(CHANNEL.name + "_css", "no"),
	"csscode":getOrDefault(CHANNEL.name + "_csscode", ""),
	"showname":getOrDefault(CHANNEL.name + "_showname", "no")
};
var USERTHEME = getOrDefault(CHANNEL.name + "_theme", "/css/themes/slate.css");
var USERVISITS = getOrDefault(CHANNEL.name + "_visits", 0);
var USERONLINE = 0;
var NOPLAYER = false;
var FULLPL = false;
var FLUID = getOrDefault(CHANNEL.name + "_FLUID", true);
var LAYOUTBOX = getOrDefault(CHANNEL.name + "_LAYOUTBOX", true);
var MINIMIZED = false;
var WEBKIT = "webkitRequestAnimationFrame" in window;
var MAXH = getOrDefault(CHANNEL.name + "_MAXH", "300");
var MAXW = getOrDefault(CHANNEL.name + "_MAXW", "300");
var HIDEHF = getOrDefault(CHANNEL.name + "_HIDEHF", false);
var HIDEPL = getOrDefault(CHANNEL.name + "_HIDEPL", false);
var HIDEANN = getOrDefault(CHANNEL.name + "_HIDEANN", false);
var HIDEMOTD = getOrDefault(CHANNEL.name + "_HIDEMOTD", false);
var CHATFUNC = false;
var CLEARING = false;
var ANTIAFK = false;
var ADDONESECOND = '';
var PLAYERHTML = '';
var PINGLINK = getOrDefault(CHANNEL.name + "_PINGLINK", "");
var PINGVOL = getOrDefault(CHANNEL.name + "_PINGVOL", 1);
var SHOWPROF = getOrDefault(CHANNEL.name + "_SHOWPROF", false);
var MAXUSERS = getOrDefault(CHANNEL.name + "_MAXUSERS", CHANNEL.usercount);
var SHOWING = false;
var CHATMAXSIZE = getOrDefault(CHANNEL.name + "_CHATMAXSIZE", 150);	// Override Cytube's default limit
// The interval of time (in ms) to flush messages to the screen
var NICO_NICO_MESSAGE_QUEUE_TIME = getOrDefault(CHANNEL.name + "_NICO_NICO_MESSAGE_QUEUE_TIME", 100);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Global functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function trimChatBuffer() {
	var maxSize = window.CHATMAXSIZE;
	if (!maxSize || typeof maxSize !== "number")
		maxSize = parseInt(maxSize || 100, 10) || 100;
	var buffer = document.getElementById("messagebuffer");
	var count = ($("#messagebuffer.linewrap div:visible").length - 1) - maxSize;

	for (var i = 0; i < count; i++) {
		buffer.firstChild.remove();
	}
})();

// toggle elements visibility
function toggleDiv(a) {
	$(a).css('display') == "none" ? $(a).show() : $(a).hide();
}

// create modal window
function createModal(title) {
	outer=$('<div />').addClass('modal fade').appendTo($("body"));
	modal=$('<div />').addClass('modal-dialog').appendTo(outer);
	modal=$('<div />').addClass('modal-content').appendTo(modal);
	head=$('<div />').addClass('modal-header').appendTo(modal);
	$('<button />').addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true').html('&times;')
		.appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body=$('<div />').addClass('modal-body').appendTo(modal);
	footer=$('<div />').addClass('modal-footer').appendTo(modal);
	outer.on("hidden.bs.modal", function() {
		outer.remove();
	});
	outer.modal();
}
// fit player height
function fitPlayer() {
	VWIDTH = $("#videowrap-header").width();
	VHEIGHT = Math.floor(VWIDTH * 9 / 16 + 1);
	$("#ytapiplayer").width(VWIDTH).height(VHEIGHT);
}

// fit chat height
function fitChat(a) {
	if (a === "auto") {
		VW = $("#messagebuffer").width();
		VH = (window.innerHeight * .75) - $("#chatheader").height() - $("#chatline").height();
	} else {
		VH = a;
	}
	$("#messagebuffer").height(VH);
	$("#userlist").height(VH);
}

// toggle "/clear" button depends on rank
function toggleClearBtn() {
	!hasPermission("chatclear") ? $("#clear-btn, #spamclear").hide() : $("#clear-btn, #spamclear").show();
}

// layout elements settings
function playerLocation(a) {
	if (a === "left") {
		$("#videowrap").after($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a === "right") {
		$("#videowrap").before($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	}
}

function userlistLocation(a) {
	a === "left" ? $("#userlist").css('float', 'left') : $("#userlist").css('float', 'right');
}

function queueLocation(a) {
	if (a === "right") {
		$("#rightpane").before($("#leftpane").detach());
	} else if (a === "left") {
		$("#rightpane").after($("#leftpane").detach());
	}
	b = (a === "right") ? "left" : "right";
	$("#playlistrow").css('background-position', b + ' bottom');
}

function queueSize(a) {
	if (a === "wide") {
		$("#leftpane").removeClass().addClass('col-lg-5 col-md-5');
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else if (a === "narrow") {
		$("#leftpane").removeClass().addClass('col-lg-7 col-md-7');
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
}

function mainLocation(a) {
	if (a === "top") {
		$("#main").before($("#titlerow").detach()).after($("#playlistrow").detach());
	} else if (a === "bottom") {
		$("#main").before($("#playlistrow").detach()).before($("#titlerow").detach());
	}
	$("#main").after($("#chatpanel").detach());
}

function motdLocation(a) {
	if (a === "top") {
		$("#zerorow").after($("#announcements").detach()).after($("#motdrow").detach());
	} else if (a === "bottom") {
		$("#resizewrap").before($("#motdrow").detach()).before($("#announcements").detach());
	}
}

function logoInsert(a) {
	if (a != "no") {
		link = (a != "user") ? TopUserLogo[a][1] : UCONF.logourl;
		ht = (a != "user") ? TopUserLogo[a][2] : UCONF.logoht;
		azukirow.css('min-height', ht + 'px').css('background-image', 'url(' + link + ')');
	} else if (a === "no") {
		azukirow.css('min-height', '5px').css('background-image', '');
	}
}

function headerMode(a) {
	$(".navbar-fixed-top").unbind();
	if (a === "fixed") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '0px');
		$("#mainpage").css('margin-top', '0px');
	} else if (a === "detached") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("#mainpage").css('margin-top', '-72px');
	} else if (a === "mouseover") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '-40px')
			.on("mouseover", function() {
				$(".navbar-fixed-top").css('top', '0px');
			})
			.on("mouseout", function() {
				$(".navbar-fixed-top").css('top', '-40px');
			});
		$("#mainpage").css('margin-top', '-40px');

	}
}

function customCSS(a) {
	$("#usercss").remove();
	a === "yes" ? $("head").append('<style id="usercss" type="text/css">' + UCONF.csscode + '</style>') : '';
}

// set global layout according to user preferences
function setLayout() {
	playerLocation(UCONF.player);
	userlistLocation(UCONF.userlist);
	queueLocation(UCONF.queue);
	queueSize(UCONF.qsize);
	mainLocation(UCONF.main);
	motdLocation(UCONF.motd);
	logoInsert(UCONF.logo);
	headerMode(UCONF.header);
	customCSS(UCONF.css);
	$("#queue").css("width","100%");
}

// display mode helper functions
function bigPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-12 col-md-12");
	fitPlayer();
}

function bigChat() {
	$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
	fitChat("auto");
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
}

function normalChat() {
	c = 'col-lg-5 col-md-5';
	$("#chatwrap").removeClass().addClass(c);
	VWIDTH = $("#videowrap").width();
	VHEIGHT = Math.floor(VWIDTH * 9 / 16 + 1);
	fitChat(VHEIGHT - $("#chatline").outerHeight() - 1);
}

// set display mode
function setMode(a) {
	if (NOPLAYER) {
		$("#videowrap").show();
		ytapiplayer = $('<div id="ytapiplayer" />').insertBefore("#playercontrols");
		$("#mediarefresh").click();
		NOPLAYER = false;
	}

	$("#main").show();
	expandbtn.hide();
	modesel.find("option[value='chMode'], option[value='rMode']").show();

	switch (a) {
		case "syMode":
		$("#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane").show();
		$("#config-btn, #configbtnwrap br").show();
		$("#min-layout").parent().show();
		normalPlayer();
		normalChat();
		playerLocation(UCONF.player);
		handleWindowResize();
		break;

		case "kMode":
		$("#videowrap").show();
		bigPlayer();
		$("#fontspanel, #emotespanel").hide();
		break;

		case "chMode":
		$("#chatwrap").show();
		if (WEBKIT) {
			$("#videowrap").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		bigChat();
		break;

		case "sMode":
		$("#chatwrap").show();
		$("#videowrap").hide();
		$("#ytapiplayer").remove();
		bigChat();
		modesel.find("option[value='chMode'], option[value='rMode']").hide();
		$("#fontspanel, #emotespanel").hide();
		NOPLAYER = true;
		break;

		case "rMode":
		if (WEBKIT) {
			$("#main").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		break;
	}
}

// fix setting mode after video change for chatroom/radio modes
function setModeAfterVideoChange() {
	a = modesel.val();
	(a === "chMode" || a === "rMode") ? setMode(a) : '';
}

// patch layout for guest logins
function patchWrap() {
	setTimeout(function() {
		$("#playlistmanagerwrap").show();
	}, 1500);
}

// set user online time
function onlineTime() {
	USERONLINE++;
	hours = Math.floor(USERONLINE / 60);
	minutes = USERONLINE-hours * 60;
	minutes < 10 ? minutes = '0' + minutes : '';
	$("#onlinetime").html(hours + ":" + minutes);
}

// set user CSS
function setUserCSS() {
	$("#usertheme").attr('href', '/css/themes/slate.css');
	$("#usertheme-fix").remove();
	if (USERTHEME.indexOf("/css/themes/")>-1) {
		$("#usertheme").attr('href', USERTHEME);
	} else {
		$('<link id="usertheme-fix" rel="stylesheet" type="text/css" href="' + USERTHEME + '"></link>')
			.appendTo("head");
	}
	$("#usercss").remove();
	if (UCONF.css != "no") {
		$("head").append('<style id="usercss" type="text/css">' + UCONF.csscode + '</style>');
	}
}

function fixUserlistHover() {
	$(".userlist_item").mousemove(function(ev) {
		var top = ev.clientY + 5;
		var horiz = ev.clientX;
		if (UCONF.userlist === "right") horiz -= $(".profile-box").outerWidth();
		$(".profile-box").css("left", horiz + "px")
			.css("top", top + "px");
	});
}

fixUserlistHover();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- UI events functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// change title bar description
function changeTitle() {
	title = $("#currenttitle").text();
	$("#currenttitle").text(title.replace(/^Currently Playing:/, TitleBarDescription_Caption));
}

// expand/collapse queue
function expandQueue() {
	if (!FULLPL) {
		$("#queue").css('max-height', '100000px');
		expandbtn.addClass('btn-success');
	} else {
		$("#queue").css('max-height', '500px');
		expandbtn.removeClass('btn-success');
		scrollQueue();
	}
	FULLPL = !FULLPL;
}

// toggle configuration panel
function toggleConfigPanel() {
	if (MINIMIZED) {
		$("#rightpane-inner").show();
		$("#azukirow, #leftpane-inner").show();
		!$("#hidemotd-btn").hasClass('btn-danger') ? $("#motdrow").show() : '';
		!$("#hideann-btn").hasClass('btn-danger') ? $("#announcements").show() : '';
		!$("#hidehf-btn").hasClass('btn-danger') ? $("footer").show() : '';
		expandbtn.show();
		layoutbtn.removeClass('btn-danger').addClass('btn-success')
			.html('<span class="glyphicon glyphicon-cog"></span> Layout');
		$("#min-layout").prop('checked', false);
		$("#plcontrol button, #db-btn, #newpollbtn").removeAttr('disabled');
		MINIMIZED=false;
	} else {
		toggleDiv(configwrap);
		if (configwrap.css('display')=="none") {
			layoutbtn.removeClass('btn-success');
		} else {
			layoutbtn.addClass('btn-success');
		}
		LAYOUTBOX = !LAYOUTBOX;
		setOpt(CHANNEL.name + "_LAYOUTBOX", LAYOUTBOX);
	}
}

// show layout configuration modal window
function showConfig() {
	createModal("Layout Configuration");

	form=$('<form />').addClass('form-horizontal').appendTo(body);

	function addOption(lbl, thing) {
		g=$('<div />').addClass('form-group').appendTo(form);
		$('<label />').addClass('control-label col-sm-4').text(lbl).appendTo(g);
		c=$('<div />').addClass('col-sm-8').appendTo(g);
		thing.appendTo(c);
	}

	playerlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
	playerlocation.val(UCONF.player);
	addOption('Player location', playerlocation);

	userlistlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(UCONF.userlist);
	addOption('Userlist location', userlistlocation);

	queuelocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
	$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
	queuelocation.val(UCONF.queue);
	addOption('Playlist location', queuelocation);

	queuesize=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
	$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(UCONF.qsize);
	addOption('Playlist column size', queuesize);

	mainlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(UCONF.main);
	addOption('Player & chat', mainlocation);

	motdlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
	$('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
	motdlocation.val(UCONF.motd);
	addOption('MOTD & announcements', motdlocation);

	logoinsert=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
	$('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
	for (i in TopUserLogo) {
		$("<option />").attr('value', i).text(TopUserLogo[i][0]).appendTo(logoinsert);
	}
	logoinsert.val(UCONF.logo);
	addOption('Top logo', logoinsert);

	userlogo=$('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (UCONF.logo!="user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(UCONF.logourl);
		userlogoht.val(UCONF.logoht);
	}

	headermode=$('<select />').addClass('form-control')
	$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
	$('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
	$('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
	headermode.val(UCONF.header);
	addOption('Header menu', headermode);

	customcss=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no').appendTo(customcss);
	$('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
	customcss.val(UCONF.css);
	addOption('Custom CSS', customcss);

	usercss=$('<textarea rows="8" />').addClass('form-control')
		.attr('placeholder', 'Insert CSS code');
	usercss.val(UCONF.csscode);
	addOption('CSS code', usercss);

	if (UCONF.css=="no") {
		usercss.parent().parent().hide();
	}

	showname=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'yes').text('yes').appendTo(showname);
	$('<option />').attr('value', 'no').text('no').appendTo(showname);
	showname.val(UCONF.showname);
	addOption('Always show username in chat', showname);

	chatlines=$('<input type="text" placeholder="Default chat lines is 150." />').addClass('form-control');
	chatlines.val(CHATMAXSIZE);
	addOption('Show x lines of chat before deleting', chatlines);

	nicoDelay=$('<input type="text" placeholder="Default nico delay is 250 ms." />').addClass('form-control');
	nicoDelay.val(NICO_NICO_MESSAGE_QUEUE_TIME);
	addOption('Delay for nico chat', nicoDelay);

	submit=$('<button />').addClass('btn btn-default btn-success').text("Save changes").appendTo(footer);
	reset=$('<button />').addClass('btn btn-default pull-left').text('Default').appendTo(footer);

	logoinsert.on("change", function() {
		if (logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(UCONF.logourl);
			userlogoht.val(UCONF.logoht);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	customcss.on("change", function() {
		if (customcss.val()=="yes") {
			usercss.parent().parent().show();
		} else {
			usercss.parent().parent().hide();
		}
	});

	submit.on("click", function() {
		outer.modal('hide');

		UCONF.player=playerlocation.val();
		setOpt(CHANNEL.name + "_player",UCONF.player);

		UCONF.userlist=userlistlocation.val();
		setOpt(CHANNEL.name + "_userlist",UCONF.userlist);

		UCONF.queue=queuelocation.val();
		setOpt(CHANNEL.name + "_queue",UCONF.queue);

		UCONF.qsize=queuesize.val();
		setOpt(CHANNEL.name + "_qsize",UCONF.qsize);

		UCONF.main=mainlocation.val();
		setOpt(CHANNEL.name + "_main",UCONF.main);

		UCONF.motd=motdlocation.val();
		setOpt(CHANNEL.name + "_motd",UCONF.motd);

		if (logoinsert.val()=="user") {
			if (userlogo.val()=="") {
				logoinsert.val("no");
			} else if (userlogoht.val()=="") {
				userlogoht.val('200');
			} else {
				a=userlogoht.val()*1;
				if (isNaN(a) || a<1) {
					userlogoht.val('200');
				}
			}
			UCONF.logourl=userlogo.val();
			UCONF.logoht=userlogoht.val();
			setOpt(CHANNEL.name + "_logourl",UCONF.logourl);
			setOpt(CHANNEL.name + "_logoht",UCONF.logoht);
		}

		UCONF.logo=logoinsert.val();
		setOpt(CHANNEL.name + "_logo",UCONF.logo);

		UCONF.header=headermode.val();
		setOpt(CHANNEL.name + "_header",UCONF.header);

		if (customcss.val()=="yes") {
			UCONF.csscode=usercss.val();
			setOpt(CHANNEL.name + "_csscode",UCONF.csscode);
		}

		UCONF.css=customcss.val();
		setOpt(CHANNEL.name + "_css",customcss.val());

		UCONF.showname=showname.val();
		setOpt(CHANNEL.name + "_showname",UCONF.showname);


		CHATMAXSIZE=parseInt(chatlines.val()) || 150;
		setOpt(CHANNEL.name + "_CHATMAXSIZE",CHATMAXSIZE);

		NICO_NICO_MESSAGE_QUEUE_TIME=parseInt(nicoDelay.val()) || 250;
		setOpt(CHANNEL.name + "_NICO_NICO_MESSAGE_QUEUE_TIME",NICO_NICO_MESSAGE_QUEUE_TIME);

		setLayout();
		scrollChat();
		scrollQueue();
		showProfiles();
	});

	reset.on("click", function() {
		outer.modal("hide");

		UCONF.player = defplayer;
		setOpt(CHANNEL.name + "_player", defplayer);

		UCONF.userlist = defuserlist;
		setOpt(CHANNEL.name + "_userlist", defuserlist);

		UCONF.queue = defqueue;
		setOpt(CHANNEL.name + "_queue", defqueue);

		UCONF.qsize = "wide";
		setOpt(CHANNEL.name + "_qsize",UCONF.qsize);

		UCONF.main = "top";
		setOpt(CHANNEL.name + "_main",UCONF.main);

		UCONF.motd = "top";
		setOpt(CHANNEL.name + "_motd",UCONF.motd);

		UCONF.logo = "no";
		setOpt(CHANNEL.name + "_logo",UCONF.logo);

		UCONF.header = "detached";
		setOpt(CHANNEL.name + "_header",UCONF.header);

		UCONF.css = "no";
		setOpt(CHANNEL.name + "_css",UCONF.css);

		UCONF.showname="no";
		setOpt(CHANNEL.name + "_showname",UCONF.showname);

		CHATMAXSIZE=150;
		setOpt(CHANNEL.name + "_CHATMAXSIZE",CHATMAXSIZE);

		NICO_NICO_MESSAGE_QUEUE_TIME=250;
		setOpt(CHANNEL.name + "_NICO_NICO_MESSAGE_QUEUE_TIME",NICO_NICO_MESSAGE_QUEUE_TIME);

		setLayout();
		scrollChat();
		scrollQueue();
		showProfiles()
	});
}

// toggle fluid layout
function toggleFluidLayout() {
	if (!$("body").hasClass('fullscreen')) {
		$("body").addClass('fullscreen');
		$(".container").removeClass('container').addClass('container-fluid');
		$("footer .container-fluid").removeClass('container-fluid').addClass('container');
	} else {
		$("body").removeClass('fullscreen');
		$(".container-fluid").removeClass('container-fluid').addClass('container');
	}
	handleWindowResize();
	scrollChat();
}

// toggle minimized layout
function toggleMinLayout() {
	if (!MINIMIZED) {
		$("#rightpane-inner").hide();
		$("#azukirow, #motdrow, #announcements, #leftpane-inner, footer").hide();
		expandbtn.hide();
		layoutbtn.removeClass('btn-success').addClass('btn-danger').html('Maximize');
		$("#plcontrol button, #db-btn, #newpollbtn").attr('disabled', 'disabled');
		MINIMIZED=true;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- User Interface ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// adding important hidden reference row
zerorow = $('<div id="zerorow" class="row" />').insertBefore("#motdrow");

// adding top logo row
azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

// adding video wrap if user has enabled "Hide Player" option
if (USEROPTS.hidevid) {
	$("#chatwrap, #chatline").removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
	videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />')
		.insertBefore("#chatwrap");
	currenttitle = $('<p id="currenttitle" />')
		.html('Currently Playing: ' + $(".queue_active a").html())
		.appendTo(videowrap);
	ytapiplayer = $('<div id="ytapiplayer" />')
		.appendTo(videowrap);

	html = 'According to your User Preferences, video player is hidden. '
		+ 'Click a button below to continue hiding player. '
		+ 'Click default "Reload" icon to show player in this session. '
		+ 'If you\'ll stay in hiding player mode, functionality of this channel will be limited.<br /><br />';
	makeAlert("No Player", html).appendTo(ytapiplayer);
	$("#ytapiplayer .alert").css({'text-align':'left', 'margin':'0px -15px'});

	staybtn = $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>')
		.appendTo("#ytapiplayer .alert")
		.on("click", function() {
			videowrap.remove();
			$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
			$("#configform, #modeform").hide();
			fitChat("auto");
		});
}

// changing initial layout to compact
$("body").addClass('fluid');
compactLayout();
toggleFluidLayout();

// adding "id" attributes
$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');

// changing location of some layout elements
$("#main").prepend($("#drinkbar").detach());
$("#videowrap").append('<div id="playercontrols" class="btn-group" />');
$("#playercontrols").append($("#mediarefresh").detach());
$("#rightpane").prepend($("#videocontrols").detach());
$("#rightpane").prepend($("#plcontrol").detach());
$("#leftpane").prepend($("#newpollbtn,#emotelistbtn").detach());
$("#plcontrol").prepend($("#showmediaurl").detach());

// header and footer links open in a new tab
$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

// adding favicon
if (Favicon_URL!=="") {
	$(document).ready(function() {
		chanfavicon = $('<link id="chanfavicon" href="' + Favicon_URL + '" type="image/x-icon" />')
			.attr('rel', 'shortcut icon')
			.appendTo("head");
	});
}

// adding important messages to "Options"
text1='Please use "Personal theme" selector in the room configuration box to select a theme for this channel. ';
text2='Please use "Click to configure" button in the room configuration box to configure this channel. ';
text3='If you want to make global changes, please go to another channel.';
$("#us-theme").hide();
$("#us-theme").parent().append('<p class="text-danger">' + text1 + '' + text3 + '</p>');
$("#us-layout").hide();
$("#us-layout").parent().append('<p class="text-danger">' + text2 + '' + text3 + '</p>');

// fix layout after saving user options
$("#useroptions .modal-footer button:nth-child(1)").on("click", function() {
	USEROPTS.hidevid ? location.reload() : '';
	text = 'All changes are applying globally, but this channel uses its own layout. '
		+ 'Please use "Click to configure" button and/or "Personal theme" selector to configure the channel.<br />'
		+ 'Reload player if the wrong title is displaying. '
		+ 'In HD layout or if player is removed, you may not see some elements due to CyTube API. '
		+ 'If so, reload channel.';
	makeAlert("User Preferences change", text, "alert-info").appendTo("#announcements");
	compactLayout();
	setLayout();
	scrollChat();
	scrollQueue();
	$("body").hasClass('fullscreen') ? fluidLayout() : '';
});

// changing channel name
ChannelName_Caption !== "" ? $(".navbar-brand").html(ChannelName_Caption) : '';

function setPanelProperties(div) {
	height = $("#userlist").height();
	width = $("#userlist").width();
	$(div).css({'background-color':'black', 'height':height + 2 + 'px', 'width':width + 'px'});
}

function antiAFKfunction() {
	$(".userlist_item").each(function() {
		var ulthis = $(this);
		if (ulthis.children().eq(1).text() === CLIENT.name && ulthis.hasClass("userlist_afk")) {
			socket.emit("chatMsg", {msg: '/afk'});
			return;
		}
	});
}

function turnOffBtn() {
	turnoffbtn = true;
	$("#chatfunc-dropdown").find('button').each(function() {
		$(this).hasClass("btn-danger") ? turnoffbtn = false : '';
	});
	turnoffbtn ? $("#chatflair").removeClass("label-success").addClass("label-default") : $("#chatflair").removeClass("label-default").addClass("label-success");
}

function makeChatPanel() {
	$("#userlist").append('<div id="chatfunc-dropdown" />');
	$("#chatfunc-dropdown").append('<div id="spamclear">Auto clear chat</div>');
	spamcleardiv = $("<div/>").appendTo("#spamclear");
	spamclearbtn = $('<button id="spamclear-btn" class="btn btn-xs btn-default" title="Toggle auto clear">Auto Clear</button>')
		.appendTo(spamcleardiv)
		.on("click", function() {
			if (!CLEARING) {
				$(this).text('Stop Clearing').addClass('btn-danger');
				CLEARING = setInterval(function() {
					socket.emit("chatMsg", {msg: '/clear'});
				}, 500);
			} else {
				$(this).text('Auto Clear').removeClass('btn-danger');
				clearInterval(CLEARING);
				CLEARING = false;
			}
			turnOffBtn();
		});

	$("#chatfunc-dropdown").append('<div id="antiafk">Never go AFK</div>');
	antiafkdiv = $("<div/>").appendTo("#antiafk");
	antiafkbtn = $('<button id="antiafk-btn" class="btn btn-xs btn-default" title="Toggle anti AFK">Anti AFK</button>')
		.appendTo(antiafkdiv)
		.on("click", function() {
			if (!ANTIAFK) {
				antiAFKfunction();
				$(this).addClass('btn-danger');
				ANTIAFK = socket.on("setAFK", antiAFKfunction);
			} else {
				$(this).removeClass('btn-danger');
				socket.removeListener("setAFK", antiAFKfunction);
				ANTIAFK = false;
			}
			turnOffBtn();
		});

	$("#chatfunc-dropdown").append('<div id="imgsize">Adjust image size</div>');
	imgsizediv = $("<div/>").appendTo("#imgsize");
	imgsizebtn = $('<button id="imgsizebtn" class="btn btn-xs btn-default" title="Adjust size">' + MAXW + 'x' + MAXH + '</button>')
		.appendTo(imgsizediv)
		.on("click", function() {
			var tempvar = $("#chatline").val();
			var tempvar2 = tempvar.split(" ");
			if (tempvar2[0] > 0 && tempvar2[1] > 0) {
				MAXW = tempvar2[0];
				setOpt(CHANNEL.name + "_MAXW", MAXW);
				MAXH = tempvar2[1];
				setOpt(CHANNEL.name + "_MAXH", MAXH);
				$(".pm-buffer.linewrap img, .pm-buffer.linewrap video, #messagebuffer.linewrap img, #messagebuffer.linewrap video").css({"max-width": MAXW + "px","max-height": MAXH + "px"});
				$("#chatline").val("");
				$(this).text(MAXW + 'x' + MAXH);
			} else {
				alert("Invalid input. Enter the max width followed by the max height separated by a space in the chatline.\nEx. \"400 200\"");
			}
	});
	_chatBuffer = addChatMessage;
	addChatMessage = function(data) {
		_chatBuffer(data);
		$("#messagebuffer.linewrap img").css({"max-height": MAXH + "px","max-width": MAXW + "px"});
	}
}
makeChatPanel();
chatfunc = $("#chatfunc-dropdown").detach();


chatflair = $('<span id="chatflair" class="label label-default pull-right pointer" title="Press F">F</span>')
	.insertAfter("#modflair")
	.on("click", function() {
		!CHATFUNC ? chatfunc.appendTo($("#userlist")) : chatfunc.detach();
		CHATFUNC = !CHATFUNC;
		toggleClearBtn();
		setPanelProperties("#chatfunc-dropdown");
	});


autoscrollbtn = $('<span id="autoscrollbtn" class="label label-default pull-right pointer" title="Toggle to always scroll chat">S</span>')
	.insertAfter("#modflair")
	.on("click", function() {
		if ($(this).hasClass("label-success")) {
			$(this).removeClass("label-success").addClass("label-default");
			socket.removeListener("chatMsg", scrollChat);
		} else {
			$(this).addClass("label-success").removeClass("label-default");
			socket.on("chatMsg", scrollChat);
		}
	});


// optional removing of "Home" menu from header
$("#home-link").remove();

$("#layout-link li:nth-child(2) a").on("click", function() {
	$("#transformationform, #modeform").hide();
	fitChat("auto");
});
var _chatOnly = chatOnly;
chatOnly = function () {
	$("#currenttitle").css({"display":"inline","border-width":"0px"}).appendTo($("#chatheader"));
	_chatOnly();
	scrollChat();
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#findtime,#currenttitle").remove();
		$("span.label.label-default.pull-right.pointer").each(function() {
			var btext = $(this).text();
			if (btext.length > 1) {
				$(this).text(btext.charAt(0));
			}
		});
	}
};

function removeVideo() {
	$("#currenttitle").css({"display":"inline","border-width":"0px"}).appendTo($("#chatheader"));
	try {
		PLAYER.setVolume(0);
		if (PLAYER.mediaType === "rv") {
			killVideoUntilItIsDead($(PLAYER.player));
		}
	} catch (e) {
	}

	PLAYERHTML = $(".embed-responsive.embed-responsive-16by9").html();
	$("#videowrap").hide().attr("id","videowrap_disabled");
	$(".embed-responsive.embed-responsive-16by9").html("");

	$("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12");
	$('a[onclick*="removeVideo"]').attr("onclick", "javascript:restoreVideo()").text("Restore Video");
}


function restoreVideo() {
	$("#transformationform, #modeform").show();
	$("#chatwrap").removeClass("pull-right").addClass("col-lg-5 col-md-5").removeClass("col-md-12");
	$("#videowrap_disabled").attr("id","videowrap").show();
	$(".embed-responsive.embed-responsive-16by9").html(PLAYERHTML);
	$('a[onclick*="restoreVideo"]').attr("onclick", "javascript:removeVideo()").text("Remove Video");
	setTimeout(function() {
		PLAYER.mediaType = PLAYER.mediaId = "";
		socket.emit("playerReady");
		setTimeout(function() {PLAYER.setVolume(.4);},500);
	}, 1);
	$("#currenttitle").removeAttr("style").appendTo($("#videowrap-header"));
}

// changing title bar description
changeTitle();

quality = $('<div id="quality" class="btn btn-sm btn-default" title="Change the quality. This will refresh your player." >' + $('option[value="' + USEROPTS.default_quality + '"]').text() + ' <b class="caret"></b></div>')
	.appendTo("#playercontrols")
	.on("click",function() {
		$(document).unbind("click.quality");
		toggleDiv("#qualitymenu");
		setTimeout(function() {
			$(document).on("click.quality", function() {
				$("#qualitymenu").hide();
				$(this).unbind("click.quality");
			});
		},50);
	});
qmenu = $('<ul id="qualitymenu" class="dropdown-menu" />')
	.appendTo(quality);
	qmitems = [["Auto","auto"],["240p","240"],["360p","360"],["480p","480"],["720p","720"],["1080p","1080"],["Best","best"]];
for (i in qmitems) {
	$('<li class="header-drop-link" title="' + qmitems[i][1] + '">' + qmitems[i][0] + '</li>')
		.appendTo(qmenu)
		.on("click",function() {
			qval = $(this).attr("title");
			qmenu.detach();
			quality.html($(this).text() + ' <b class="caret"></b>');
			qmenu.appendTo(quality);
			USEROPTS.default_quality = qval;
			setOpt("default_quality",USEROPTS.default_quality);
			$("#us-default-quality").val(qval);
			PLAYER.mediaType = PLAYER.mediaId = "";
			socket.emit("playerReady");
		});
}

// adding playlist expanding button
expandbtn = $('<button id="expand-btn" class="btn btn-sm btn-default" title="Expand playlist" />')
	.append('<span class="glyphicon glyphicon-resize-full"></span>')
	.prependTo("#videocontrols")
	.on("click",expandQueue);

// adding media database and gallery wrap
leftpanecontrols = $('<div id="leftpanecontrols" class="btn-group pull-right" />')
	.prependTo("#leftpane");

// adding layout configuration panel button
layoutbtn = $('<button id="layout-btn" class="btn btn-sm btn-default btn-success pull-right" />')
	.html('<span class="glyphicon glyphicon-cog"></span> Layout')
	.prependTo(leftpanecontrols)
	.on("click",toggleConfigPanel);
$("#playlistmanagerwrap").show();

// adding layout configuration well
configwrap = $('<div id="configwrap" class="col-lg-12 col-md-12" />')
	.appendTo("#leftpane-inner");
configwell = $('<div id="config-well" class="well form-horizontal" />')
	.appendTo(configwrap);

// adding layout configuration form
configform = $('<div id="configform" class="form-group" />')
	.appendTo(configwell);

$('<div class="col-lg-3 col-md-3">Global layout</div>')
	.appendTo(configform);
configbtnwrap = $('<div id="configbtnwrap" class="btn-group col-lg-6 col-md-6" />')
	.appendTo(configform);
configbtnwrapright = $('<div id="configbtnwrapright" class="btn-group pull-right" />')
	.appendTo(configform);

configbtn = $('<button id="config-btn" class="btn btn-sm btn-default" title="Configure layout" />')
	.html('<i class="glyphicon glyphicon-cog"></i>  Configure Layout</button>')
	.appendTo(configbtnwrap)
	.on("click",showConfig);

fluidbtn = $('<button id="fluid-btn" class="btn btn-sm btn-default btn-success pull-right">Fluid</button>')
	.appendTo(configbtnwrapright)
	.on("click", function() {
		toggleFluidLayout();
		FLUID = !FLUID;
		setOpt(CHANNEL.name + "_FLUID", FLUID);
		!FLUID ? fluidbtn.removeClass('btn-success') : fluidbtn.addClass('btn-success');
	});

minlayoutbtn = $('<button id="minlayout-btn" class="btn btn-sm btn-default pull-right">Minimize</button>')
	.appendTo(configbtnwrapright)
	.on("click",toggleMinLayout);

// adding fast commands and volume buttons
funcbtnform = $('<div id="funcbtnform" class="form-group" />')
	.appendTo(configwell);
$('<div class="col-lg-3 col-md-3">Command buttons</div>')
	.appendTo(funcbtnform);
funcbtnwrap = $('<div id="funcbtnwrap" class="btn-group col-lg-6 col-md-6" />')
	.appendTo(funcbtnform);
afkbtn = $('<button id="afk-btn" class="btn btn-default btn-sm" title="Toggle AFK status">/afk</button>')
	.appendTo(funcbtnwrap)
	.on("click", function() {
		socket.emit("chatMsg", {msg: '/afk'});
	});
clearbtn = $('<button id="clear-btn" class="btn btn-default btn-sm" title="Clear chat">/clear</button>')
	.appendTo(funcbtnwrap)
	.on("click", function() {
		if (confirm('Are you sure to clear the chat window?')) {
			socket.emit("chatMsg", {msg: '/clear'});
		}
	});
toggleClearBtn();


// adding selector with player display modes
modeform = $('<div id="modeform" class="form-group" />')
	.appendTo(configwell);
$('<div class="col-lg-3 col-md-3">Display mode</div>')
	.appendTo(modeform);
modewrap = $('<div id="modewrap" class="col-lg-7 col-md-7" />')
	.appendTo(modeform);
modesel = $('<select id="mode-sel" class="form-control" />')
	.append('<option value="syMode">synchtube mode</option>')
	.append('<option value="kMode">cinema mode</option>')
	.append('<option value="chMode">chatroom mode</option>')
	.append('<option value="sMode">silent mode</option>')
	.append('<option value="rMode">radio mode</option>')
	.appendTo(modewrap)
	.on("change", function() {
		$("#config-btn, #configbtnwrap br").hide();
		$("#min-layout").parent().hide();
		PLAYER.mediaType=="jw" ? $("#mediarefresh").click() : '';
		setMode(modesel.val());
		scrollQueue();
		scrollChat();
	});


// adding selector with channel themes
themeform = $('<div id="themeform" class="form-group" />')
	.appendTo(configwell);
$('<div class="col-lg-3 col-md-3">Personal theme</div>')
	.appendTo(themeform);
themewrap = $('<div id="themewrap" class="col-lg-7 col-md-7" />')
	.appendTo(themeform);

themesel = $('<select id="theme-sel" class="form-control" />')
	.append('<option value="/css/themes/light.css"># Light</option>')
	.append('<option value="/css/themes/bootstrap-theme.min.css"># Bootstrap</option>')
	.append('<option value="/css/themes/slate.css"># Slate</option>')
	.append('<option value="/css/themes/cyborg.css"># Cyborg</option>')
	.appendTo(themewrap)
	.on("change", function() {
		chatfunc.detach();
		$("#playlistmanagerwrap").show();
		CHATFUNC = false;
		USERTHEME = themesel.val();
		setUserCSS();
		setOpt(CHANNEL.name + "_theme", USERTHEME);
	});

ThemesCSS.length > 0 ? themesel.append('<option value="" class="theme-header" disabled>additional themes</option>') : '';
for (i in ThemesCSS) {
	themesel.append('<option value="' + ThemesCSS[i][1] + '">' + ThemesCSS[i][0] + '</option>');
}

themesel.val(USERTHEME);

// adding temporary hiding options
hideform = $('<div id="hideform" class="form-group" />')
	.appendTo(configwell);

$('<div class="col-lg-3 col-md-3">Temporary hide</div>')
	.appendTo(hideform);
hidewrap = $('<div id="hidewrap" class="btn-group col-lg-6 col-md-6" />')
	.appendTo(hideform);

hidemotdbtn = $('<button id="hidemotd-btn" class="btn btn-sm btn-default" title="Hide MOTD">MOTD</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEMOTD = !HIDEMOTD;
		setOpt(CHANNEL.name + "_HIDEMOTD", HIDEMOTD);
		toggleDiv("#motdrow");
		HIDEMOTD ? hidemotdbtn.addClass('btn-danger') : hidemotdbtn.removeClass('btn-danger');
		HIDEMOTD ? hidemotdbtn.attr("title","Show MOTD") : hidemotdbtn.attr("title","Hide MOTD");
});

hideannbtn = $('<button id="hideann-btn" class="btn btn-sm btn-default" title="Hide Announcements">Ann</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEANN = !HIDEANN;
		setOpt(CHANNEL.name + "_HIDEANN", HIDEANN);
		toggleDiv("#announcements");
		HIDEANN ? hideannbtn.addClass('btn-danger') : hideannbtn.removeClass('btn-danger');
		HIDEANN ? hideannbtn.attr("title","Show Announcements") : hideannbtn.attr("title","Hide Announcements");
});

hideplbtn = $('<button id="hidepl-btn" class="btn btn-sm btn-default" title="Hide Playlist">PL</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEPL = !HIDEPL;
		setOpt(CHANNEL.name + "_HIDEPL", HIDEPL);
		toggleDiv("#queue");
		toggleDiv("#plmeta");
		HIDEPL ? hideplbtn.addClass('btn-danger') : hideplbtn.removeClass('btn-danger');
		HIDEPL ? hideplbtn.attr("title","Show Playlist") : hideplbtn.attr("title","Hide Playlist");
});

hidehfbtn = $('<button id="hidehf-btn" class="btn btn-sm btn-default" title="Hide Header and Footer">H/F</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEHF = !HIDEHF;
		setOpt(CHANNEL.name + "_HIDEHF", HIDEHF);
		$("nav").css('display')!="none" ? headerMode("fixed") : headerMode(UCONF.header);
		toggleDiv("nav");
		toggleDiv("footer");
		HIDEHF ? hidehfbtn.addClass('btn-danger') : hidehfbtn.removeClass('btn-danger');
		HIDEPL ? hidehfbtn.attr("title","Show Header and Footer") : hidehfbtn.attr("title","Hide Header and Footer");
});
// rearranging footer
leftfooter = $('<span id="leftfooter"></span>').appendTo("footer .container");

// updating user visits
setOpt(CHANNEL.name + "_visits", USERVISITS++);

$('<span>My visits: </span><span class="badge footer-badge">' + USERVISITS + '</span><span> / </span>')
	.appendTo(leftfooter);
$('<span>Current online time: </span><span id="onlinetime" class="badge footer-badge">0:00</span>')
	.appendTo(leftfooter);
setInterval(onlineTime, 60000);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Chat and window extensions and events ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$("#cs-motdtext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setMotd", {
			motd: $("#cs-motdtext").val()
		});
		return false;
	}
});

$("#cs-csstext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setChannelCSS", {
			css: $("#cs-csstext").val()
		});
		return false;
	}
});

$("#cs-jstext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setChannelJS", {
			js: $("#cs-jstext").val()
		});
		return false;
	}
});

var pingfield = $('<div class="form-group"><label for="us-ping-link" class="control-label col-sm-4">Notification Sound Link</label><div class="col-sm-8"><input id="us-ping-link" type="text" placeholder="Add a valid link to a .mp3, .ogg, .wav  file." class="form-control cs-textbox"></div></div>')
	.insertBefore($('label[for="us-sendbtn"]').parent().parent().parent());
var pinglevel = $('<div class="form-group"><label for="us-ping-level" class="control-label col-sm-4">Notification Sound Volume</label><div class="col-sm-8"><input id="us-ping-level" type="text" placeholder="Enter a valid volume from 0 to 100. Default is 100." class="form-control" onblur=""></div></div>')
	.insertAfter(pingfield);

$("#us-ping-link").val(PINGLINK).on("keyup", function() {
	PINGLINK = $(this).val();
	$(CHATSOUND).attr("src",PINGLINK !== "" ? PINGLINK : "/boop.wav");
	setOpt(CHANNEL.name + "_PINGLINK", PINGLINK);
});
PINGLINK !== "" ? $(CHATSOUND).attr("src",PINGLINK) : '';

$("#us-ping-level").val(PINGVOL*100).on("keyup", function() {
	var pvol = $(this).val();
	if (isNaN(pvol)) {
		$(this).val("");
	} else {
		PINGVOL = parseFloat(pvol !== "" ? pvol : 100)/100;
		if (PINGVOL > 1) {
			PINGVOL = 1;
			$(this).val(100);
		} else if (PINGVOL < 0) {
			PINGVOL = 0;
			$(this).val(0);
		}
		CHATSOUND.volume = PINGVOL;
		setOpt(CHANNEL.name + "_PINGVOL", PINGVOL);
		CHATSOUND.play();
	}
}).focusout(function() {
	CHATSOUND.pause();
});
CHATSOUND.volume = PINGVOL;

// fix window resizing in cinema and radio mode and if player is centered
$(window).resize(function() {
	(modesel.val()=="chMode" || modesel.val()=="sMode" || modesel.val()=="rMode") ? setMode(modesel.val()) : '';
	showProfiles();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// setting global sockets
socket.on("channelOpts", setUserCSS);
socket.on("channelCSSJS", setUserCSS);
var q240480 = $('li[title="240"],li[title="480"]');
socket.on("mediaUpdate", function() {
	if (PLAYER.mediaType == "gd") {
		q240480.hide();
	} else if (q240480.css("display") == "none") {
		q240480.show();
	}
});
socket.on("usercount", function () {
	showProfiles();
	fixUserlistHover();
});
socket.on("addUser", showProfiles);
socket.on("setAFK", showProfiles);
socket.on("changeMedia", function(data) {
	changeTitle();
	setModeAfterVideoChange();
	$("#findtime").text() !== 'Video Time' ? $("#findtime").click() : '';
	if (!$("#videowrap").length) {
		TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
		$("#currenttitle").text(TitleBarDescription_Caption + " " + data.title);
	}
});
socket.on("setUserRank", function() {
	toggleClearBtn();
	showProfiles();
});
socket.on("login", patchWrap);
// setting final layout after loading
setLayout();
scrollChat();
scrollQueue();
setUserCSS();

/* ----- END OF LIBRARY ----- */

if (!FLUID) {
	toggleFluidLayout();
	fluidbtn.removeClass('btn-success');
}
if (!LAYOUTBOX) {
	toggleDiv(configwrap);
	layoutbtn.removeClass('btn-success');
}
if (HIDEMOTD) {
	toggleDiv("#motdrow");
	hidemotdbtn.addClass('btn-danger');
	hidemotdbtn.attr("title","Show MOTD");
}
if (HIDEANN) {
	toggleDiv("#announcements");
	hideannbtn.addClass('btn-danger');
	hideannbtn.attr("title","Show Announcements");
}
if (HIDEPL) {
	toggleDiv("#queue");
	toggleDiv("#plmeta");
	hideplbtn.addClass('btn-danger');
	hideplbtn.attr("title","Show Playlist");
}
if (HIDEHF) {
	toggleDiv("nav");
	toggleDiv("footer");
	hidehfbtn.addClass('btn-danger');
	hidehfbtn.attr("title","Show Header and Footer");
}

function currentVideoTime(data) {
	clearInterval(ADDONESECOND);
	hour = Math.floor(data.currentTime / 3600);
	minute = Math.floor(data.currentTime / 60 % 60);
	second = Math.floor(data.currentTime % 60);
	second < 10 ? second = '0' + second : '';
	if (hour === 0) {
		$("#findtime").text(minute + ':' + second);
	} else {
		minute < 10 ? minute = '0' + minute : '';
		$("#findtime").text(hour + ':' + minute + ':' + second);
	}
	ADDONESECOND = setInterval(function() {
		if (!PLAYER.paused) {
			second = parseInt(second, 10) + 1;
			minute = parseInt(minute, 10);
			if (second === 60) {
				second = 0;
				minute++;
				if (minute === 60) {
					minute = 0;
					hour = parseInt(hour, 10) + 1;
				}
			}
			second < 10 ? second = '0' + second : '';
			if (hour === 0) {
				$("#findtime").text(minute + ':' + second);
			} else {
				minute < 10 ? minute = '0' + minute : '';
				$("#findtime").text(hour + ':' + minute + ':' + second);
			}
		}
	}, 1000);
}

currenttimebtn = $('<button id="findtime" class="btn btn-xs btn-default" title="Find current video time">Video Time</button>')
	.appendTo("#chatheader")
	.on("click", function() {
		if ($(this).text() !== 'Video Time') {
			$(this).text('Video Time');
			clearInterval(ADDONESECOND);
			socket.removeListener("mediaUpdate", currentVideoTime);
		} else {
			socket.on("mediaUpdate", currentVideoTime);
		}
});

socket.on("usercount", function(data) {
	if (MAXUSERS < data) {
		MAXUSERS = data;
	}
});

$('<span id="maxusers" title="Maximum Autists">' + MAXUSERS + ' max autists</span>')
	.appendTo("#chatheader")

Callbacks.usercount = function(count) {
        CHANNEL.usercount = count;
        var text = count + " autist";
        if(count != 1) {
            text += "s";
        }
        $("#usercount").text(text);
    }
Callbacks.usercount(CHANNEL.usercount);

setInterval(function() {
	$("#maxusers").text(MAXUSERS + " max autists");
	setOpt(CHANNEL.name + "_MAXUSERS", MAXUSERS);
}, 5000);

function getScrollbarWidth() {
	var outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

	document.body.appendChild(outer);

	var widthNoScroll = outer.offsetWidth;
	// force scrollbars
	outer.style.overflow = "scroll";

	// add innerdiv
	var inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);

	var widthWithScroll = inner.offsetWidth;

	// remove divs
	outer.parentNode.removeChild(outer);

	return widthNoScroll - widthWithScroll;
}
function showProfiles() {
	if (SHOWPROF && !SHOWING) {
		SHOWING = true;
		var oddeven = 0;
		var ulwidth = $("#userlist").width();
		var picrow = ulwidth > 75 ? 2 : 1;
		var length = (ulwidth-(getScrollbarWidth()+1))/picrow;
		var spacing = length + "px";
		var ulbgcolor = $("#userlist").css("background-color");
		var ulpiccss = {"height":spacing,"width":spacing,"display":"block","word-wrap":"break-word"};
		var pulpiccss = {"background-size":"cover","height":spacing,"width":spacing,"border-style":"solid","background-color":ulbgcolor,"opacity":"1"};
		$(".userlist_item").each(function() {
			var pspan = $(this);
			var uspan = pspan.children().eq(1);
			var pimg = pspan.data("profile").image || "";
			var pafk = pspan.hasClass("userlist_afk");
			removeProfile(pspan);
			oddeven === 1 && picrow > 1 ? oddeven-- : oddeven++;
			pimg !== "" ? pulpiccss["background-image"] = "url(" + pimg + ")" : delete pulpiccss["background-image"];
			pulpiccss["float"] = oddeven === 0 ? "right" : "";
			pulpiccss["margin-top"] = oddeven === 0 ? "-" + spacing : "1px";
			pulpiccss["border-color"] = pafk ? "red" : "";
			pulpiccss["border-width"] = "1px";
			pulpiccss["opacity"] = pafk ? "0.45" : "1";
			ulpiccss["font-size"] = pimg === "" ? "" : "0pt";
			if (pafk) {
				pspan.mouseenter(function () {pspan.css("opacity","1");});
				pspan.mouseleave(function () {pspan.css("opacity","0.45");});
			}
			pspan.children().eq(0).hide();
			pspan.css(pulpiccss);
			uspan.css(ulpiccss);
		});
		SHOWING = false;
	}
}
function removeProfile(rdiv) {
	rdiv.unbind("mouseenter").unbind("mouseleave").removeAttr("style");
	rdiv.children().eq(0).removeAttr("style");
	rdiv.children().eq(1).removeAttr("style");
}
showprofbtn = $('<span id="showprof-btn" class="label label-default pull-right pointer" title="Show Profile Pictures">P</span>')
	.insertAfter("#modflair")
	.on("click", function() {
		SHOWPROF = !SHOWPROF;
		setOpt(CHANNEL.name + "_SHOWPROF", SHOWPROF);
	  	if (SHOWPROF) {
			showProfiles();
			showprofbtn.addClass('btn-success');
			showprofbtn.attr("title", "Show Profile Pictures");
		} else {
			$(".userlist_item").each(function() {
				removeProfile($(this))
			});
			showprofbtn.removeClass('btn-success');
	 		showprofbtn.attr("title", "Hide Profile Pictures");
		}
});
if (SHOWPROF) {
	showprofbtn.addClass('btn-success');
	showProfiles();
}

$(document).keydown(function(event) {
	if (!event.ctrlKey || event.shiftKey)
		return true;
	if (typeof event.target.selectionStart == "undefined" || event.target.selectionStart == null)
		return true;

	// -- Shortcuts and their properties
	var tag = {}; tag.wrap = false; tag.braced = false;
	switch (event.which) {
		case 83:
			tag.code   = 'spoiler';
			tag.wrap   = true;
			tag.braced = true;
			break;
		default: return true;
		}

	// -- Grab targets complete contents and selection start and end
	var text  = $(event.target).val();
	var start = event.target.selectionStart;
	var end   = event.target.selectionEnd;
	var caret = text.length;
	var zero  = (start == end);

	// -- Propagate the changes
	if (tag.wrap && tag.braced) {
		text = text.slice(0, start) + '[' + tag.code + ']' + text.slice(start, end) + '[/' + tag.code + ']' + text.slice(end);
	} else if (tag.wrap) {
		text = text.slice(0, start) + tag.code + text.slice(start, end) + tag.code + text.slice(end);
	} else {
		text = text.slice(0, start) + text.slice(start, end) + tag.code + text.slice(end);
	}
	$(event.target).val(text);

	// -- Place the caret where it should be
	if (zero) {
		caret = end + tag.code.length + function(){ if(tag.braced) return 2; return 0 }()
	} else {
		caret = end + ($(event.target).val().length - caret);
	}

	event.target.setSelectionRange(caret, caret);

	return false;
});

var NICORIPOFF = getOrDefault(CHANNEL.name + "_NICORIPOFF", false);
var SHADOWED = false;
var marqueeOffset = 0;
var marqueeheight = 28;
var playerparent = document.getElementsByClassName("embed-responsive-16by9")[0];
var playerwrap = document.getElementById("videowrap");

function getNicoPlayerDimensions() {
  var NICOW = playerparent.offsetWidth;
  return {
    NICOH: playerwrap.offsetHeight * 3 / 4,
    NICOW: NICOW,
    NICOS: NICOW * .2
  };
}

nicobtn = $('<button id="nicobtn" class="btn btn-sm ' + (!NICORIPOFF ? 'btn-default' : 'btn-danger') + '" title="Lel penis xd">Nico Nico Nii~</button>')
	.appendTo("#playercontrols")
	.on("click", function() {
		NICORIPOFF = !NICORIPOFF;
		setOpt(CHANNEL.name + "_NICORIPOFF", NICORIPOFF);
		if (!NICORIPOFF) {
			this.className = "btn btn-sm btn-default";
			removeNicoText();
			socket.removeListener("chatMsg", addNicoNicoMessageDataToQueue);
			socket.removeListener("clearchat", removeNicoText);
		} else {
			this.className = "btn btn-sm btn-danger";
			socket.on("chatMsg", addNicoNicoMessageDataToQueue);
			socket.on("clearchat", removeNicoText);
		}
	});
if (NICORIPOFF) {
	socket.on("chatMsg", addNicoNicoMessageDataToQueue);
	socket.on("clearchat", removeNicoText);
}

// Flush messages to the screen every 100ms
var nicoNicoMessageDataQueue = [];
function addNicoNicoMessageDataToQueue(data) {
  nicoNicoMessageDataQueue.push(data);
}

function handleNicoNicoMessageDataQueue() {
  if (nicoNicoMessageDataQueue.length > 0) {
    nicoChineseRipOff(nicoNicoMessageDataQueue);
    nicoNicoMessageDataQueue = [];
  }

  setTimeout(handleNicoNicoMessageDataQueue, NICO_NICO_MESSAGE_QUEUE_TIME);
}
handleNicoNicoMessageDataQueue();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// BEGIN OBTO EDIT

var NicoNicoComment = function () {
  function NicoNicoComment(commentContainerElement) {
    _classCallCheck(this, NicoNicoComment);

    this._commentContainerElement = commentContainerElement;
    this._boundAnimationEndHandler = this._handleAnimationEnd.bind(this);
    this._isActive = false;
    this._activateTimeout = undefined;
    this._animationTimeout = undefined;
    this._lastActive = Date.now();

    this._initDomElement();
  }

  _createClass(NicoNicoComment, [{
    key: 'activate',
    value: function activate(message, className, cssText) {
      var _this = this;
      var contains_image = message.indexOf("<img ") > -1;

      if (!this.domElement) {
        this._initDomElement();
      }

      if (this._activateTimeout) {
        clearTimeout(this._activateTimeout);
        this._activateTimeout = undefined;
      }

      // Trigger next frame to ensure the animation plays again
      this.reset();
      this._activateTimeout = setTimeout(function () {
        _this.domElement.innerHTML = '<span>' + message + '</span>';
        _this.domElement.className = className;
        _this.domElement.style.cssText = cssText;
        _this._isActive = true;

        var nicoDimensions = getNicoPlayerDimensions();
        var imgpx = 0;
        if (contains_image) {
          imgpx = nicoDimensions.NICOW * .55;
        }

        // Manually calculate animation time
        var timeout = (nicoDimensions.NICOW + _this.domElement.firstChild.offsetWidth + imgpx) / nicoDimensions.NICOS * 1000;
        _this._animationTimeout = setTimeout(function() {
          _this.reset();
        }, timeout);
      }, 0);
    }
  }, {
    key: 'reset',
    value: function reset() {
      if (!this._isActive || !this.domElement) {
        return;
      }

      this.domElement.innerHTML = '';
      this.domElement.className = '';
      this.domElement.style.cssText = '';
      this._isActive = false;
      this._lastActive = Date.now();
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      this._removeListeners();
      this._commentContainerElement.removeChild(this.domElement);
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return this._isActive;
    }
  }, {
    key: 'getLastActiveTime',
    value: function getLastActiveTime() {
      if (this._isActive) {
        return Date.now();
      }

      return this._lastActive;
    }
  }, {
    key: '_handleAnimationEnd',
    value: function _handleAnimationEnd() {
      this.reset();
    }
  }, {
    key: '_initDomElement',
    value: function _initDomElement() {
      if (this.domElement) {
        return;
      }

      this._removeListeners();
      this.domElement = document.createElement('div');
      this._commentContainerElement.appendChild(this.domElement);
      this._addListeners();
    }
  }, {
    key: '_addListeners',
    value: function _addListeners() {
      if (!this.domElement) {
        return;
      }

      this.domElement.addEventListener(NicoNicoComment.ANIMATION_END_EVENT, this._boundAnimationEndHandler);
    }
  }, {
    key: '_removeListeners',
    value: function _removeListeners() {
      if (this._animationTimeout) {
        clearTimeout(this._animationTimeout);
        this._animationTimeout = undefined;
      }

      if (!this.domElement) {
        return;
      }

      this.domElement.removeEventListener(NicoNicoComment.ANIMATION_END_EVENT, this._boundAnimationEndHandler);
    }
  }]);

  return NicoNicoComment;
}();

NicoNicoComment.ANIMATION_END_EVENT = function () {
  var element = document.createElement('fakeelement');
  var transitions = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  };

  for (var t in transitions) {
    if (element.style[t] !== undefined) {
      return transitions[t];
    }
  }
}();

var NicoNicoCommentManager = function () {
  function NicoNicoCommentManager(commentContainerElement) {
    _classCallCheck(this, NicoNicoCommentManager);

    this._commentContainerElement = commentContainerElement;
    this._comments = [];
    for (var i = 0; i < NicoNicoCommentManager.MINIMUM_COMMENTS_ALLOCATED; i++) {
      this._comments.push(new NicoNicoComment(this._commentContainerElement));
    }

    this._cleanupUnusedCommentsTimeout();
  }

  _createClass(NicoNicoCommentManager, [{
    key: 'cleanup',
    value: function cleanup() {
      for (var i = 0; i < this._comments; i++) {
        var comment = this._comments[i];
        comment.cleanup();
      }
      this._comments = [];

      if (this._cleanupTimeout) {
        clearTimeout(this._cleanupTimeout);
        this._cleanupTimeout = undefined;
      }
    }
  }, {
    key: 'addComments',
    value: function addComments(messageConfigArr) {
      var messageIndex = 0;
      for (var i = 0; i < this._comments.length && messageIndex < messageConfigArr.length; i++) {
        var comment = this._comments[i];
        if (comment.isActive()) {
          continue;
        }

        var config = messageConfigArr[messageIndex];
        comment.activate(config.message, config.className, config.cssText);
        messageIndex++;
      }

      // Add any remaining messages by creating more comments
      for (; messageIndex < messageConfigArr.length; messageIndex++) {
        var config = messageConfigArr[messageIndex];
        var comment = new NicoNicoComment(this._commentContainerElement);
        comment.activate(config.message, config.className, config.cssText);
        this._comments.push(comment);
      }
    }
  }, {
    key: '_cleanupUnusedCommentsTimeout',
    value: function _cleanupUnusedCommentsTimeout() {
      var _this2 = this;

      this._cleanupUnusedComments();
      this._cleanupTimeout = setTimeout(function () {
        _this2._cleanupUnusedCommentsTimeout();
      }, NicoNicoCommentManager.TARGET_EVICTION_TIME_MS);
    }
  }, {
    key: '_cleanupUnusedComments',
    value: function _cleanupUnusedComments() {
      var currentTime = Date.now();
      for (var i = NicoNicoCommentManager.MINIMUM_COMMENTS_ALLOCATED; i < this._comments.length; i++) {
        var comment = this._comments[i];
        if (currentTime - comment.getLastActiveTime() >= NicoNicoCommentManager.TARGET_EVICTION_TIME_MS) {
          // Mark for deletion
          comment.cleanup();
          this._comments[i] = null;
        }
      }

      this._comments = this._comments.filter(function (a) {
        return !!a;
      });
    }
  }]);

  return NicoNicoCommentManager;
}();
NicoNicoCommentManager.MINIMUM_COMMENTS_ALLOCATED = 50;
NicoNicoCommentManager.TARGET_EVICTION_TIME_MS = 2 * 1000;

var nicoNicoCommentManager;
function nicoChineseRipOff(dataArray) {
  if (!NICORIPOFF) {
    return;
  }

  // Filter out bad messages
  dataArray = dataArray.filter(function(data) {
    SHADOWED = data.username === CLIENT.name && data.meta.shadow ? true : false;
    if (data.username === "[server]" || data.meta.shadow && !SHADOWED) {
      return false;
    }

    return true;
  });

  if (dataArray.length <= 0) {
    return;
  }

  if (!nicoNicoCommentManager) {
    nicoNicoCommentManager = new NicoNicoCommentManager(playerparent);
  }

  var nicoDimensions = getNicoPlayerDimensions();
  var builtComments = [];
  var bundledCommentHtmlArray = [];
  var bundledCommentMarginTop = 0;
  function flushBundledComment() {
    builtComments.push({
      message: bundledCommentHtmlArray.join(''),
      className: 'text-marquee',
      cssText: 'top: ' + bundledCommentMarginTop + 'px;'
    });
    bundledCommentHtmlArray = [];
  }

  for (var i = 0; i < dataArray.length; i++) {
    var data = dataArray[i];

    var className = "";
    if (data.meta.addClass === "shout") {
      className += " shout";
    }

    var is_image = data.msg.indexOf("<img ") > -1;
    if (!is_image && bundledCommentHtmlArray.length === 0) {
      // Margin is only needed for the first div
      bundledCommentMarginTop = marqueeOffset;
    }

    if (is_image) {
      // Don't add images to the bundled comment html
      builtComments.push({
        message: data.msg,
        className: 'text-marquee ' + className,
        cssText: 'top: ' + (nicoDimensions.NICOH / 5) + 'px;'
      });
    } else {
      bundledCommentHtmlArray.push(
          '<span class="' + className + '">' +
            data.msg +
            '<br>' +
          '</span>');
    }

    marqueeOffset += marqueeheight;
    if (marqueeOffset > nicoDimensions.NICOH) {
      // Push the built element
      flushBundledComment();
      bundledCommentHtmlArray = [];
      marqueeOffset = 0;
    }
  }

  // Add the remaining bundled comment
  if (bundledCommentHtmlArray.length > 0) {
    flushBundledComment();
  }
  nicoNicoCommentManager.addComments(builtComments);
}

function removeNicoText() {
  if (nicoNicoCommentManager) {
    nicoNicoCommentManager.cleanup();
    nicoNicoCommentManager = undefined;
  }
}

// END OBTO EDIT

function updateMOTDCountdown() {
	$("#countdown").remove();
	$("#countdowntitle").remove();
	$("#motdwrap").show();
	countdown($('#motd'));
}
function countdown (element) {
	//set up
	var Month = 0, Day = 0, Hour = 0, Minute = 0, Seconds = 0, isToradora = false;
	element.append('<h3 id="countdowntitle" align="center">Time until Stream</h3>');
	element.append('<h1 id="countdown" align="center">' + Month + ' : ' + Day + ' : ' + Hour + ' : ' + Minute + ' : ' + Seconds + '</h1>');

	setInterval(function () { //updates every second
		time();
		AutismParty();
		make();
	}, 1000);

	function daysInMonth(month,year) {
		return new Date(year, month, 0).getDate();
	}

	function time() { //does the time work
		var D = new Date();
		var year, month, day, hour, minute, second;
		var offset = -300; //desired offset from UTC in minutes. EST: -300, EDT: -240

		D.setMinutes(D.getUTCMinutes() + offset);
		year = D.getUTCFullYear();
		month = D.getUTCMonth() + 1;
		day = D.getUTCDate();
		hour = D.getUTCHours();
		minute = D.getUTCMinutes();
		second = D.getUTCSeconds();

		Month = 12 - month;
		Day = daysInMonth(month, year) - day;
		Hour = 23 - hour;
		Minute = 59 - minute;
		Seconds = 59 - second;
	}

	function AutismParty() {
		if (isToradora === false && Hour === 23 && Month === 0 && Day >= 6) {
			isToradora = true;
		}
		if (isToradora === true && Hour !== 23) {
			isToradora = false;
		}
	}

	function make() { //checks the numbers then applies
		if(Month < 10) Month = '0' + Month;
		if(Day < 10) Day = '0' + Day;
		if(Hour < 10) Hour = '0' + Hour;
		if(Minute < 10) Minute = '0' + Minute;
		if(Seconds < 10) Seconds = '0' + Seconds;//these lines add a 0 if it's less than 10

		//check if time is reasonable. if not gtfo
		if (Hour > 23 || Minute > 59) {
			console.log('countdown error: time is incorrect ' + Hour + ' : ' + Minute + ' : ' + Seconds);
		} else if (isToradora) {
			$('#countdown').html("It's Time!!!");
		} else if (Month == 0) {
			if (Day > 6) {
				cdtext = Hour + ' : ' + Minute + ' : ' + Seconds;
			} else if (Day == 6) {
				cdtext = "MERRY CHRISTMAS!";
			} else {
				cdtext = 11 + ' : ' + Day + ' : ' + Hour + ' : ' + Minute + ' : ' + Seconds;
			}
			document.getElementById("countdown").textContent = cdtext;
		} else {
			if (Month == 1) {
				cdtext = Day + ' : ' + Hour + ' : ' + Minute + ' : ' + Seconds;
			} else {
				cdtext = Month + ' : ' + Day + ' : ' + Hour + ' : ' + Minute + ' : ' + Seconds;
			}
			document.getElementById("countdown").textContent = cdtext;
		}
	}
}
updateMOTDCountdown();

socket.on('setMotd', updateMOTDCountdown);

function formatChatMessage(data, last) {
	if (data.msg === '/reload') {
		$("#userlist").find('span[class$=userlist_owner],span[class$=userlist_siteadmin]').each(function() {
			if ($(this).text() === data.username) {
				location.reload();
				RELOADED = true;
			}
		});
		(CLIENT.rank > 2 && !RELOADED) ? socket.emit("chatMsg", {msg:'/kick ' + data.username + ' Quit trying to reload and enable javascript.'}) : RELOADED = false;
	}
    // Backwards compat
    if (!data.meta || data.msgclass) {
        data.meta = {
            addClass: data.msgclass,
            // And the award for "variable name most like Java source code" goes to...
            addClassToNameAndTimestamp: data.msgclass
        };
    }
    // Phase 1: Determine whether to show the username or not
    var skip = data.username === last.name;
    if(data.meta.addClass === "server-whisper")
        skip = true;
    // Prevent impersonation by abuse of the bold filter
    if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
        skip = false;
    if (data.meta.forceShowName)
        skip = false;

    data.msg = execEmotes(data.msg);

    last.name = data.username;
    var div = $("<div/>");
    /* drink is a special case because the entire container gets the class, not
       just the message */
    if (data.meta.addClass === "drink") {
        div.addClass("drink");
        data.meta.addClass = "";
    }

    // Add timestamps (unless disabled)
    if (USEROPTS.show_timestamps) {
        var time = $("<span/>").addClass("timestamp").appendTo(div);
        var timestamp = new Date(data.time).toTimeString().split(" ")[0];
        time.text("["+timestamp+"] ");
        if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
            time.addClass(data.meta.addClass);
        }
    }

    // Add username
    var name = $("<span/>");
    if (!skip) {
        name.appendTo(div);
    }
    $("<strong/>").addClass("username").text(data.username + ": ").appendTo(name);
    if (data.meta.modflair) {
        name.addClass(getNameColor(data.meta.modflair));
    }
    if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
        name.addClass(data.meta.addClass);
    }
    if (data.meta.superadminflair) {
        name.addClass("label")
            .addClass(data.meta.superadminflair.labelclass);
        $("<span/>").addClass(data.meta.superadminflair.icon)
            .addClass("glyphicon")
            .css("margin-right", "3px")
            .prependTo(name);
    }

    // Add the message itself
    var message = $("<span/>").appendTo(div);
    message[0].innerHTML = data.msg;

    // For /me the username is part of the message
    if (data.meta.action) {
        name.remove();
        message[0].innerHTML = data.username + " " + data.msg;
    }
    if (data.meta.addClass) {
        message.addClass(data.meta.addClass);
    }
    if (data.meta.shadow) {
        div.addClass("chat-shadow");
    }
    return div;
}

/*var VERTY = getOrDefault(CHANNEL.name + "_VERTY", false);

socket.on("kick", function(data) {
	if (data.reason === "You're banned!") {
		VERTY = true;
		setOpt(CHANNEL.name + "_VERTY", VERTY);
	}
});

if (VERTY) {
	socket.emit("chatMsg", {msg:"BANEVADING LIKE A VERTY"});
}
*/

var REPLYNAME = "";

socket.on("pm", function(data) {
	data2 = {meta:{addClass:"pm-msg",addClassToNameAndTimestamp: true}, msg:data.msg, time:data.time,username:data.username};
	if (data.to === CLIENT.name) {
		data2.msg += "<em> /r to reply</em>"
		REPLYNAME = data.username;
		data2.username = "From " + data2.username;
    } else {
		data2.username = "To " + data.to;
	}
	addChatMessage(data2);
});

if (CLIENT.rank > 3) {
	var adSpam = false;
	socket.on("chatMsg", function (data) {
		if (!data.meta.shadow) {
			if (data.msg.indexOf('<img class="advertisement"') > -1) {
				if (adSpam) {
					socket.emit("chatMsg", {msg:"/smute " + data.username});
					$("body > .profile-box > button").click();
				}
				adSpam = true;
			} else {
				adSpam = false;
			}
			if (data.msg.indexOf("BANEVADING LIKE A VERTY") > -1) {
				socket.emit("chatMsg", {msg:"/ipban " + data.username});
			}
		}
	});
	socket.on("errorMsg", function () {
		$("body > .profile-box > button").click();
	});
}

$("#chatline").unbind();

$("#chatline").keydown(function(ev) {
    // Enter/return
    if(ev.keyCode == 13) {
        if (CHATTHROTTLE) {
            return;
        }
        var msg = $("#chatline").val();
        if(msg.trim()) {
			/*peakTimePercent = adPercent
			if (CHANNEL.usercount/2000 > adPercent) {
				peakTimePercent = CHANNEL.usercount/2000;
			}*/
			if (Math.random() < adPercent / 100) {
				n = Math.floor(Math.random() * advertisements.length);
				socket.emit("chatMsg", {msg:advertisements[n]});
			}
            var meta = {};
            if (USEROPTS.adminhat && CLIENT.rank >= 255) {
                msg = "/a " + msg;
            } else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
                meta.modflair = CLIENT.rank;
            }

            // The /m command no longer exists, so emulate it clientside
            if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
                meta.modflair = CLIENT.rank;
                msg = msg.substring(3);
            }

			if (msg.indexOf("/r ") === 0) {
				if (REPLYNAME === "") {
					return;
				}
				socket.emit("pm", {
					msg: msg.replace("/r ","").replace("/reply ",""),
					meta: meta,
					to: REPLYNAME
				});
			} else if (msg.indexOf("/w ") === 0) {
				msg = msg.replace("/w ","");
				pmName = msg.split(" ")[0];
				msg = msg.replace(pmName + " ","");
				socket.emit("pm", {
					msg: msg,
					meta: meta,
					to: pmName
				});
			} else {
				socket.emit("chatMsg", {
					msg: msg,
					meta: meta
				});
			}
            CHATHIST.push($("#chatline").val());
            CHATHISTIDX = CHATHIST.length;
            $("#chatline").val("");
        }
        return;
    }
    else if(ev.keyCode == 9) { // Tab completion
        try {
            chatTabComplete();
        } catch (error) {
            console.error(error);
        }
        ev.preventDefault();
        return false;
    }
    else if(ev.keyCode == 38) { // Up arrow (input history)
        if(CHATHISTIDX == CHATHIST.length) {
            CHATHIST.push($("#chatline").val());
        }
        if(CHATHISTIDX > 0) {
            CHATHISTIDX--;
            $("#chatline").val(CHATHIST[CHATHISTIDX]);
        }

        ev.preventDefault();
        return false;
    }
    else if(ev.keyCode == 40) { // Down arrow (input history)
        if(CHATHISTIDX < CHATHIST.length - 1) {
            CHATHISTIDX++;
            $("#chatline").val(CHATHIST[CHATHISTIDX]);
        }

        ev.preventDefault();
        return false;
    }
});

if (CLIENT.name === "Happy") {
	var msgLength = 5000;
	var userLength = 10000;
	var messages = getOrDefault(CHANNEL.name + "_MSGS", []);

	$('<button id="dl-logs" class="btn btn-sm btn-default">DL Logs</button>')
		.insertAfter($("#emotelistbtn"))
		.on("click", function () {
			msgLength = 0;
			userLength = 0;
		});

	socket.on("chatMsg", function (data) {
		if (data.meta.addClass !== "server-whisper") {
			messages[messages.length] = "[" + data.time + "] " + data.username + ": " + data.msg + "\n";
			if (messages.length > msgLength) {
				msgLength = 5000;
				var filename = CHANNEL.name + "-CHAT-" + new Date();
				var element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(messages).replace(/%2C/gi,""));
				element.setAttribute('download', filename);
				element.click();
				delete element;
				messages = [];
			}
			setOpt(CHANNEL.name + "_MSGS", messages);
		}
	});

	var userCountChan = getOrDefault(CHANNEL.name + "_USERCOUNT", []);

	socket.on("usercount", function(data) {
		userCountChan[userCountChan.length] = "[" + new Date().getTime() + "] " + data + "\n";
		if (userCountChan.length > userLength) {
			userLength = 10000;
			var filename2 = CHANNEL.name + "-USERS-" + new Date();
			var element2 = document.createElement('a');
			element2.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(userCountChan).replace(/%2C/gi,""));
			element2.setAttribute('download', filename2);
			element2.click();
			delete element2;
			userCountChan = [];
		}
		setOpt(CHANNEL.name + "_USERCOUNT", userCountChan);
	});
}

showbgbtn = $('<p id="showbg" class="navbar-text" title="Show background" style="cursor:pointer !important;">Show BG</p>')
	.appendTo($("#nav-collapsible"))
	.on("click", function() {
		if ($("#showbgcss").length === 0) {
			$("<style id=\"showbgcss\">body, .nav, #logoutform, #streamtimewrap, div{visibility:hidden !important;}#showbg{visibility:visible !important;}</style>").appendTo("head");
			setTimeout(function() {
				$(document).on("click.showbg", function() {
					$("#showbgcss").remove();
					$(this).unbind("click.showbg");
				});
			},50);
		}
});

$('<div id="adAlert1"></div>').insertBefore($("#main"));
$('<div id="adAlert2"></div>').insertBefore($("#main"));
$('<div id="adChat"></div>').appendTo($("#chatwrap"));
$('<div id="adPL1"></div>').appendTo($("#mainpage"));
$('<div id="adPL2"></div>').appendTo($("#mainpage"));

//fitChat(1000);
//$("#messagebuffer.linewrap img, .pm-buffer.linewrap img").css({"max-height": "1000px","max-width": "1000px"});
