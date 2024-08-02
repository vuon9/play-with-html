/**
*  START JS ON LOAD PAGE
*  created on 12.06.2013
*/
$(document).ready(function() {
    // ADD SOME ACTIONS HERE
    hoverShareGroup($('.share-group'));
    applySelect($('.slt-list'));
    //colorBox($('.photo-box'));
});

/** +++++++++++++++++++++++++++++++  **/
/*        FUNCTION FOR ACTIONS        */
/** +++++++++++++++++++++++++++++++  **/

/**
*	hover on Share Group - Event detail page
*/
function hoverShareGroup(obj) {
    if (obj.length <= 0) return;

    obj.on('mouseover', function(e) {       
        $(this).find('p').show();
    }).on('mouseout', function(e) {
        $(this).find('p').hide();
    });   
}

/**
*  colorBox
*  @ obj images
*/
function colorBox(obj){
    obj.colorbox({rel:'group1'});
}

/**
*  APPLY SELECT BOX
*  @ obj select class
*/
function applySelect (obj) {
	if (obj.length <= 0) return;
	// select element styling
    obj.each(function(){
        var title = $(this).attr('title');
        var classn = $(this).attr('class');
        if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
        $(this)
            .css({'z-index':10,'opacity':0, 'filter': 'alpha(opacity=0)', '-khtml-appearance':'none'})
            .after('<span class="'+classn+'">' + title + '</span>')
            .change(function(){
                val = $('option:selected',this).text();
                $(this).next().text(val);
                })
        $(this).bind('click',function(){
          $(this).next().addClass('focus');
        });
        $(this).bind('change',function(){
          $(this).next().addClass('focus');
        });
        $(this).blur(function() {
            $(this).next().removeClass('focus');
        });
    });    
}


/**
*  callVideoPlayer
*  @ videodata : JSON FOR SHOW & PLAY VIDEO
*  
    videodata {
        obj     : '#player'
        vsource :  {
                m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
                ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
                poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
            }
        size    : {
            width: "960px",
            height: "540px",
            cssClass: "jpv-video-360p"
        }
    }
*/
function callVideoPlayer (videodata) {
    var vobj =  $(videodata.obj);
    var $parent_player   = vobj.parents('.jpv-video');
    var parent_player_id = '#' + vobj.parents('.jpv-video').attr('id');
   
    vobj.jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", videodata.vsource);

                $parent_player.find('a.jpv-hd-on').hide();
                $parent_player.find('a.jpv-hd-off').click(function() {

                    $(this).hide();
                    $parent_player.find('a.jpv-hd-on').show();
                    vobj.jPlayer('setMedia', {
                        m4v: '/my-no-hd-media-file.m4v',
                        poster: '/path-to-poster.jpg'
                    });
                    vobj.jPlayer('play');
                });
                $parent_player.find('a.jpv-hd-on').click(function() {
                    $(this).hide();
                    $parent_player.find('a.jpv-hd-off').show();
                    vobj.jPlayer('setMedia', {
                        m4v: '/my-hd-media-file.m4v',
                        poster: '/path-to-poster.jpg'
                    });
                    vobj.jPlayer('play');
                });
        },
        play: function() { // To avoid both jPlayers playing together.
            $(this).jPlayer("pauseOthers");
        },

        swfPath: "js",
        supplied: "webmv, ogv, m4v",
        cssSelectorAncestor: parent_player_id,
        autohide: {
                restored: false, fadeIn:500,
        },
        size: videodata.size,

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

    var myPlayer = vobj,
        myPlayerData,
        fixFlash_mp4, // Flag: The m4a and m4v Flash player gives some old currentTime values when changed.
        fixFlash_mp4_id, // Timeout ID used with fixFlash_mp4
        ignore_timeupdate, // Flag used with fixFlash_mp4
        options = {
            ready: function () {
                $(this).jPlayer("setMedia", videodata.vsource);
                // HD Button Actions
                $parent_player.find('a.jpv-hd-on').hide();
                $parent_player.find('a.jpv-hd-off').click(function() {

                    $(this).hide();
                    $parent_player.find('a.jpv-hd-on').show();
                    myPlayer.jPlayer('setMedia', {
                        m4v: '/my-no-hd-media-file.m4v',
                        poster: '/path-to-poster.jpg'
                    });
                    myPlayer.jPlayer('play');
                });
                $parent_player.find('a.jpv-hd-on').click(function() {
                    $(this).hide();
                    $parent_player.find('a.jpv-hd-off').show();
                    myPlayer.jPlayer('setMedia', {
                        m4v: '/my-hd-media-file.m4v',
                        poster: '/path-to-poster.jpg'
                    });
                    myPlayer.jPlayer('play');
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
            cssSelectorAncestor: parent_player_id,
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
      $parent_player.find('.jpv-play-bar-win').show();
    })
    myControl.progress.bind('mouseout',function(){
      $parent_player.find('.jpv-play-bar-win').hide();
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
    $parent_player.mouseenter(function(){
      $parent_player.find('.jpv-gui').show();
    })
    $parent_player.mouseleave(function(){
      if(!$(myPlayer).data("jPlayer").status.paused){
        $parent_player.find('.jpv-gui').fadeOut(200);
      }
    });
}