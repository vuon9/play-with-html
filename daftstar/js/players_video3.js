$(document).ready(function(){

	$("#jquery_jplayer_3").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
				ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
				poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			});

            	$('.jpv-video a.jpv-hd-on').hide();
                $('.jpv-video a.jpv-hd-off').click(function() {

                    $(this).hide();
                    $('.jpv-video a.jpv-hd-on').show();
                    $('.jpv-player').jPlayer('setMedia', {
                    m4v: '/my-no-hd-media-file.m4v',
                    poster: '/path-to-poster.jpg'
                    });
                    $('.jpv-player').jPlayer('play');
                });
                $('.jpv-video a.jpv-hd-on').click(function() {
                    $(this).hide();
                    $('.jpv-video a.jpv-hd-off').show();
                    $('.jpv-player').jPlayer('setMedia', {
                    m4v: '/my-hd-media-file.m4v',
                    poster: '/path-to-poster.jpg'
                    });
                    $('.jpv-player').jPlayer('play');
                });
		},
        play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},

		swfPath: "js",
		supplied: "webmv, ogv, m4v",
        cssSelectorAncestor: "#jp_container_3",
        autohide: {
                restored: false, fadeIn:500,
        },
		size: {
			width: "960px",
			height: "540px",
			cssClass: "jpv-video-360p"
		},

        cssSelector: {
          videoPlay: '.jpv-video-play',
          play: '.jpv-play',
          pause: '.jpv-pause',
          stop: '.jpv-stop',
          seekBar: '.jpv-seek-bar',
          playBar: '.jpv-play-bar',
          mute: '.jpv-mute',
          unmute: '.jpv-unmute',
          volumeBar: '.jpv-volume-bar',
          volumeBarValue: '.jpv-volume-bar-value',
          volumeMax: '.jpv-volume-max',
          currentTime: '.jpv-current-time',
          duration: '.jpv-duration',
          fullScreen: '.jpv-full-screen',
          restoreScreen: '.jpv-restore-screen',
          repeat: '.jpv-repeat',
          repeatOff: '.jpv-repeat-off',
          gui: '.jpv-gui',
          noSolution: '.jpv-no-solution'
       }
	});

    var myPlayer = $("#jquery_jplayer_3"),
		myPlayerData,
		fixFlash_mp4, // Flag: The m4a and m4v Flash player gives some old currentTime values when changed.
		fixFlash_mp4_id, // Timeout ID used with fixFlash_mp4
		ignore_timeupdate, // Flag used with fixFlash_mp4
		options = {
			ready: function () {
    			$(this).jPlayer("setMedia", {
    				m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
    				ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
    				webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
    				poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
    			});
                // HD Button Actions
                $('.jpv-video a.jpv-hd-on').hide();
                $('.jpv-video a.jpv-hd-off').click(function() {

                    $(this).hide();
                    $('.jpv-video a.jpv-hd-on').show();
                    $('.jpv-player').jPlayer('setMedia', {
                    m4v: '/my-no-hd-media-file.m4v',
                    poster: '/path-to-poster.jpg'
                    });
                    $('.jpv-player').jPlayer('play');
                });
                $('.jpv-video a.jpv-hd-on').click(function() {
                    $(this).hide();
                    $('.jpv-video a.jpv-hd-off').show();
                    $('.jpv-player').jPlayer('setMedia', {
                    m4v: '/my-hd-media-file.m4v',
                    poster: '/path-to-poster.jpg'
                    });
                    $('.jpv-player').jPlayer('play');
                });

    		},
    		swfPath: "js",
    		supplied: "webmv, ogv, m4v",

  			timeupdate: function(event) {
				if(!ignore_timeupdate) {
					myControl.progress.slider("value", event.jPlayer.status.currentPercentAbsolute);
				}
			},
			volumechange: function(event) {
				if(event.jPlayer.options.muted) {
					myControl.volume.slider("value", 0);
				} else {
					myControl.volume.slider("value", event.jPlayer.options.volume);
				}
			},
			swfPath: "../js",
			supplied: "m4a, oga",
			cssSelectorAncestor: "#jp_container_3",
			wmode: "window"
		},
		myControl = {
			progress: $(options.cssSelectorAncestor + " .jpv-progress"),
			volume: $(options.cssSelectorAncestor + " .jpv-volume-bar")
		};

	// Instance jPlayer
	myPlayer.jPlayer(options);

	// A pointer to the jPlayer data object
	myPlayerData = myPlayer.data("jPlayer");

	// Define hover states of the buttons


	// Create the progress slider control
	myControl.progress.slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = myPlayerData.status.seekPercent;
			if(sp > 0) {
				// Apply a fix to mp4 formats when the Flash is used.
				if(fixFlash_mp4) {
					ignore_timeupdate = true;
					clearTimeout(fixFlash_mp4_id);
					fixFlash_mp4_id = setTimeout(function() {
						ignore_timeupdate = false;
					},1000);
				}
				// Move the play-head to the value and factor in the seek percent.
				myPlayer.jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					myControl.progress.slider("value", 0);
				}, 0);
			}
		}
	});
    myControl.progress.bind('mouseover',function(){
      $('.jpv-play-bar-win').show();
    })
    myControl.progress.bind('mouseout',function(){
      $('.jpv-play-bar-win').hide();
    })


	// Create the volume slider control
	myControl.volume.slider({
		animate: "fast",
		max: 1,
		range: "min",
		step: 0.01,
		value : $.jPlayer.prototype.options.volume,
		slide: function(event, ui) {
			myPlayer.jPlayer("option", "muted", false);
			myPlayer.jPlayer("option", "volume", ui.value);
		}
	});

    //Hide controls when mouseis out
    $('.videoPlayer').mouseenter(function(){
      $('.jpv-gui').show();
    })
    $('.videoPlayer').mouseleave(function(){
      if(!$(myPlayer).data("jPlayer").status.paused){
      $('.jpv-gui').fadeOut(200);
      }
    });

});