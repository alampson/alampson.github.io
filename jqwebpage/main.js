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
	k,
	l,
	m,
	nav_tabs,
	footer_text,
	hwvideo,
	tovideo,
	scvideo,
	dbvideo,
	pgvideo,
	lsvideo,
	claudio,
	ktaudio,
	mdaudio,
	vid_items = ["hello world", "adventure zone opening", "shower clown", "dnd beyond", "pirate geoff", "last surprise"],
	vid_tabs,
	aud_items = ["voodoo woman - koko taylor", "cosmic love - florence and the machine", "go to the light - murder by death", "girl with one eye - florence and the machine", "dangerous animal - arctic monkeys"],
	aud_tabs,
	pod_items = ["my brother, my brother, and me", "critical role", "the adventure zone", "bomBARDed", "lore", "the penumbra podcast"],
	pod_tabs,
	port_item,
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
		"background-image":'url("https://i.ibb.co/0f7Pnc7/Better-Honest-Antelope-size-restricted.gif")',
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
				(ktaudio = $("<iframe>")).addClass(
					"audio-content"
				).attr({
					"height":'290px',
					"width":'100%',
					"style":'border:1px solid rgba(0, 0, 0, 0.12);max-width:500px',
					"id":'kt_audio',
					"src":'https://music.amazon.com/embed/B002F6LQDM/?id=IdfGYhJwRb&marketplaceId=ATVPDKIKX0DER&musicTerritory=US',
				}).hide(),
				(mdaudio = $("<iframe>")).addClass(
					"audio-content"
				).attr({
					"height":'290px',
					"width":'100%',
					"style":'border:1px solid rgba(0, 0, 0, 0.12);max-width:500px',
					"id":'md_audio',
					"src":'https://music.amazon.com/embed/B002F6LQDM/?id=IdfGYhJwRb&marketplaceId=ATVPDKIKX0DER&musicTerritory=US',
				}).hide(),
				(claudio = $("<iframe>")).addClass(
					"audio-content"
				).attr({
					"height":'290px',
					"width":'100%',
					"style":'border:1px solid rgba(0, 0, 0, 0.12);max-width:500px',
					"id":'al_audio',
					"src":'https://music.amazon.com/embed/B002F6LQDM/?id=IdfGYhJwRb&marketplaceId=ATVPDKIKX0DER&musicTerritory=US',
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


// ------------------------------------------------- //
// HEADER NAV OPTIONS BUILD START //

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

// HEADER NAV OPTIONS BUILD END //
// ------------------------------------------------- //

// ------------------------------------------------- //
// SIDE NAV OPTIONS BUILD START //

	// DEFAULTING TO THE VID-TABS PANEL //
	for(j = 0; j < vid_items.length; j++){
		dummy_val = vid_items[j].replace(/\s/g, '');
		col.append(
			(vid_tabs = $("<p>")).addClass(
				"sidenav-tabs vid-tabs"
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

	// these are necessary to build outside of the click function -
	// otherwise the hover functionality won't work correctly
	// so after we build, we hide it to make sure that the sidenav
	// panel doesn't get crammed with options from all nav selections
	for(k = 0; k < aud_items.length; k++){
		dummy_val = aud_items[k].replace(/\s/g, '');
		col.append(
			(aud_tabs = $("<p>")).addClass(
				"sidenav-tabs aud-tabs"
			).css({
				"color":'white',
				"font-size":'1em',
				"font-weight":'300px',
				"cursor":'pointer',
				"width":'auto',
				"letter-spacing":'1px',
				"transition":"ease-in-out .25s"
			}).text(
				aud_items[k]
			).attr(
				"id", dummy_val
			)
		)
	}
	$(".aud-tabs").hide();


	for(l = 0; l < pod_items.length; l++){
		dummy_val = pod_items[l].replace(/\s/g, '');
		col.append(
			(pod_tabs = $("<p>")).addClass(
				"sidenav-tabs pod-tabs"
			).css({
				"color":'white',
				"font-size":'1em',
				"font-weight":'300px',
				"cursor":'pointer',
				"width":'auto',
				"letter-spacing":'1px',
				"transition":"ease-in-out .25s"
			}).text(
				pod_items[l]
			).attr(
				"id", dummy_val
			)
		)
	}
	$(".pod-tabs").hide();

// SIDE NAV OPTIONS BUILD END //
// ------------------------------------------------- //

// ------------------------------------------------- //
// HEADER NAV CLICK FUNCTIONALITY START //
	if($("#videos").click(function(){
		$(".sidenav-tabs").hide();
		$(".vid-tabs").show();
		$(".video-content").hide();
		$(".audio-content").hide();
		$(".podcast-content").hide();
		$(".portfolio-content").hide();
		$("#hw_video").show();
	}));

	if($("#audio").click(function(){
		$(".sidenav-tabs").hide();	
		$(".aud-tabs").show();
	}));

	if($("#podcasts").click(function(){
		$(".sidenav-tabs").hide();
		$(".pod-tabs").show()
	}));

	if($("#portfolio").click(function(){
		$(".sidenav-tabs").hide();	
		//$(".port-tabs").show();

		//this is only gonna have the link to my portfolio, so it'll be structured a bit differently
	}));

// HEADER NAV CLICK FUNCTIONALITY END
// -------------------------------------------------- //

	// ------------------------------------------------------ //
	// START OF HOVER FUNCTIONALITY //

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
	$(function() {        
	    $('.aud-tabs').hover(function(){  
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
	    $('.pod-tabs').hover(function(){  
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
	// END OF HOVER FUNCTIONALITY //
	// ---------------------------------------------------------- //



	// ---------------------------------------------------------- //
	// START OF CLICK FUNCTIONALITY //

		// start of video click func //
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
		// end of video click func //

		// start of audio click func //
		/*
	if($("#arsonist'slullaby-hozier").click(function(){
		$(".audio-content").hide();
		$("#al_audio").show();
		$(".footer-text").html("arsonist's lullaby - hozier");
	}));
	*/
	if($("#voodoowoman-kokotaylor").click(function(){
		$(".audio-content").hide();
		$("#vw_audio").show();
		$(".footer-text").html("voodoo woman - koko taylor");
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

	// END OF CLICK FUNCTIONALITY //
	// ---------------------------------------------------------- //

});