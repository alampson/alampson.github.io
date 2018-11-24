var 
	header,
	main_content,
	footer,
	nav,
	col,
	content,
	nav_items = ["videos", "audio", "podcasts", "portfolio"],
	i,
	j,
	nav_tabs,
	footer_text,
	hwvideo,
	tovideo,
	scvideo,
	dbvideo,
	pgvideo,
	lsvideo,
	vid_items = ["hello world", "adventure zone opening", "shower clown", "dnd beyond", "pirate geoff", "last surprise"],
	vid_tabs,
	dummy_val,
	classname;

/* video links
	taz opening   = https://www.youtube.com/embed/P3k6uxJ6yYs
	shower clown  = https://www.youtube.com/embed/ZvoVWSP-T4Q
	dnd beyond    = https://www.youtube.com/embed/A4BuL886bJA
	pirate geoff  = https://www.youtube.com/embed/0UoHTFI2fV4
	last surprise = https://www.youtube.com/embed/J3Qhzv6A5CU
*/

/* audio links (use soundcloud)





*/

/* podcast links




*/

$(document).ready(function(){
	$("body").css({
		"background-color":'black',
		"margin":'0',
		"padding":'0',
		"display":'flex',
		"flex-direction":'column',
	}).append(
		(header = $("<div>")).addClass(
			"header-container"
		).css({
			"width":'100%',
			"background-image":'url("https://thumbs.gfycat.com/TenderSilentAfricangoldencat-size_restricted.gif")',
			"align-content":'middle',
			"justify-content":'space-around',
			"display":'flex',

		}).append(
			(nav = $("<div>")).addClass(
				"nav-container"
			).css({
				"display":'flex',
				"flex-direction":'row',
				"justify-content":'space-evenly',
				"flex":'1',
				"margin":'20px',

			})
		),
		(main_content = $("<div>")).addClass(
			"main-content"
		).css({
			"width":'100%',
			"height":'80vh',
			"display":'flex',
			"flex":'1',
			"flex-direction":'row',
			"justify-content":'space-evenly',

		}).append(
			(col = $("<div>")).addClass(
				"sidenav"
			).css({
				"display":'flex',
				"flex-direction":'column',
				"background-image":'url("https://media.giphy.com/media/oj6FEw8sztDDG/giphy.gif")',
				"width":'25%',
				"justify-content":'space-evenly',
				"text-align":'left',
				"padding":'0px 20px',

			}),
			(content = $("<div>")).addClass(
				"inner-content-wrapper"
			).css({
				"display":'flex',
				"flex-direction":'row',
				"margin":'5px',
				"flex":'1 1 auto',
				"justify-content":'space-around',
				"align-items":'center'
			}).append(
				(hwvideo = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/Yw6u6YkTgQ4',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
					"id":'hw_video'
				}),
				(tovideo = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/P3k6uxJ6yYs',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
					"id":'to_video',
				}).hide(),
				(scvideo = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/ZvoVWSP-T4Q',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
					"id":'sc_video',
				}).hide(),
				(dbvideo = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/A4BuL886bJA',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
					"id":'db_video',
				}).hide(),
				(pgvideo = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/0UoHTFI2fV4',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
					"id":'pg_video',
				}).hide(),
				(lsvideo = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/J3Qhzv6A5CU',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
					"id":'ls_video',
				}).hide(),

			)
		),

		(footer = $("<div>")).addClass(
			"footer-content"
		).css({
			"display":'flex',
			"justify-content":'space-evenly'
		}).append(
			(footer_text = $("<p>")).addClass(
				"footer-text"
			).css({
				"color":'white',
				"font-size":'10px',
			}).html("hello world")
		),
	)
	$(function() {        
	    $('.vid-tabs').hover(function(){  
	        $(this).css({
	        	"letter-spacing":'3px',
	        	"color":'skyblue',
	        	"text-decoration":'underline'
	        })
	    },    
	    function(){ 
	        $(this).css({
	        	"letter-spacing":'1px',
	        	"color":'white',
	        	"text-decoration":'none'
	        })
	    });
	});
	$(function() {        
	    $('.nav-tabs').hover(function(){  
	        $(this).css({
	        	"letter-spacing":'3px',
	        	"color":'skyblue',
	        	"text-decoration":'underline'
	        })
	    },    
	    function(){ 
	        $(this).css({
	        	"letter-spacing":'1px',
	        	"color":'white',
	        	"text-decoration":'none'
	        })
	    });
	});


	for(i = 0; i < nav_items.length; i++){
		dummy_val = nav_items[i].replace(/\s/g, '');
		nav.append(
			(nav_tabs = $("<p>")).addClass(
				"nav-tabs"
			).css({
				"color":'white',
				"font-size":'20px',
				"font-weight":'300px',
				"cursor":'pointer',
				"letter-spacing":'1px',
				"transition":"ease-in-out .25s"
			}).text(
				nav_items[i]
			).attr(
				"id", dummy_val
			)
		)
	}

	for(j = 0; j < vid_items.length; j++){
		dummy_val = vid_items[j].replace(/\s/g, '');
		col.append(
			(vid_tabs = $("<p>")).addClass(
				"vid-tabs"
			).css({
				"color":'white',
				"font-size":'1em',
				"font-weight":'300px',
				"cursor":'pointer',
				"width":'auto',
				"letter-spacing":'1px',
				"transition":"ease-in-out .25s"
			}).text(
				vid_items[j]
			).attr(
				"id", dummy_val
			)
		)
	}

	if($("#helloworld").click(function(){
		$(".video-content").hide();
		$("#hw_video").show();
		$(".footer-text").html("hello world");
	}));
	if($("#adventurezoneopening").click(function(){
		$(".video-content").hide();
		$("#to_video").show();
		$(".footer-text").html("the adventure zone opening");
	}));
	if($("#showerclown").click(function(){
		$(".video-content").hide();
		$("#sc_video").show();
		$(".footer-text").html("shower clown");
	}));
	if($("#dndbeyond").click(function(){
		$(".video-content").hide();
		$("#db_video").show();
		$(".footer-text").html("dnd beyond");
	}));
	if($("#pirategeoff").click(function(){
		$(".video-content").hide();
		$("#pg_video").show();
		$(".footer-text").html("pirate geoff");
	}));
	if($("#lastsurprise").click(function(){
		$(".video-content").hide();
		$("#ls_video").show();
		$(".footer-text").html("last surprise");
	}));



/*
	document.getElementByClassName("vid-tabs").hover(
		vid_tabs.css({
			"letter-spacing":'4px',
			"transition":"ease-in-out .25s"

		})
	)
*/

});