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
	video,
	vid_items = ["hello world", "adventure zone opening", "shower clown", "dnd beyond", "pirate geoff", "last surprise"],
	vid_tabs;

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
				(video = $("<iframe>")).addClass(
					"video-content"
				).attr({
					"height":'315',
					"width":'560',
					"src":'https://www.youtube.com/embed/Yw6u6YkTgQ4?controls=0',
					"frameborder":'0',
					"allow":'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
				})
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



	for(i = 0; i < nav_items.length; i++){
		nav.append(
			(nav_tabs = $("<p>")).addClass(
				"nav-tabs"
			).css({
				"color":'white',
				"font-size":'20px',
				"font-weight":'300px',
				"cursor":'pointer',
			}).text(
				nav_items[i]
			)
		)
	}

	for(j = 0; j < vid_items.length; j++){
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
			)
		)
	}

	document.getElementByClassName("vid-tabs").hover(
		vid_tabs.css({
			"letter-spacing":'4px',
			"transition":"ease-in-out .25s"

		})
	)


});