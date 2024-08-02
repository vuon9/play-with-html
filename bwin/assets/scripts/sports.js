
      <!-- scoreboard templates -->
      <script id='empty' type='text/html'><span></span></script>
      <script id="pairgame" type="text/x-jquery-tmpl">   
        {{tmpl "#scoreboard-header"}}
        <table>
          <tr>
            <td class="player1">${participants[0]}</td>
            <td class="score">
              {{if state === 'NotStarted'}}
              -:-
              {{else state != "NotStarted" && state != "Penalty"}}
              ${score.p1}:${score.p2}
              {{/if}}
            </td>               
            <td class="player2">${participants[1]}</td>
          </tr>            
        </table>  
        <div class="footer">      
          <div>
            {{if state === 'NotStarted'}}
            {{tmpl "#start-time-tmpl"}}
            {{else}}
            <span {{if state === "Penalty"}}class="highlight"{{/if}}>${period}</span>
            {{if customTimer}}
            <span>${customTimer}</span>
            {{else state == "Started" || state == "ExtraTime"}}
            <span class="minutes-timer">${minutesTimerString}</span>
            {{/if}}
            {{/if}}
          </div>
        </div>
      </script>
      <script id="pairgame-compact" type="text/x-jquery-tmpl">   
        {{tmpl "#scoreboard-header-compact"}}
        <table>
          <tr>
            <td class="player1">${participants[0]}</td>
            <td class="score">
              {{if state === 'NotStarted'}}
              -:-
              {{else state != "NotStarted" && state != "Penalty"}}
              ${score.p1}:${score.p2}
              {{/if}}
            </td>
            <td class="player2">${participants[1]}</td>
          </tr>
        </table>
        <div class="footer">
          <div {{if state === "Penalty"}}class="highlight"{{/if}}>${period}</div>
          {{if state === 'NotStarted'}}
          <div>{{tmpl "#start-time-tmpl"}}</div>
          {{else}}
          {{if customTimer}}
          <div>${customTimer}</div>
          {{else state == "Started" || state == "ExtraTime"}}
          <div class="minutes-timer">${minutesTimerString}</div>
          {{/if}}
          {{/if}}
        </div>
      </script>
      <script id="setgame" type="text/x-jquery-tmpl">                
        {{tmpl "#scoreboard-header"}}
        <div>
          ${participants[0]}<br>
          ${participants[1]}
        </div>
        {{if state == 'Started'}}
        <table>          
          <tr>{{tmpl(score, {val: 'setNames'}) "#set-row"}}</tr>
          <tr>{{tmpl(score, {val: 'p1', row: 1, id: sport.id}) "#set-row"}}</tr>
          <tr>{{tmpl(score, {val: 'p2', row: 2, id: sport.id}) "#set-row"}}</tr>
        </table>
        {{else}}
        <div class="footer">  
          <div>
            {{tmpl "#start-time-tmpl"}}
          </div>
        </div>
        {{/if}}
      </script>
      <script id="setgame-compact" type="text/x-jquery-tmpl">
        {{tmpl "#scoreboard-header-compact"}}
        <div class="content">
          <table>
            <tr>
              <td>&nbsp;</td>
              {{tmpl(score, {val: 'setNames'}) "#set-row"}}
            </tr>
            <tr>
              <td class="player-cell">${participants[0]}</td>
              {{tmpl(score, {val: 'p1', row: 1, id: sport.id}) "#set-row"}}
            </tr>
            <tr>
              <td class="player-cell">${participants[1]}</td>
              {{tmpl(score, {val: 'p2', row: 2, id: sport.id}) "#set-row"}}
            </tr>
          </table>
        </div>

        <div class="footer">
          {{if state === 'NotStarted'}}
          <div>${period}</div>
          <div>{{tmpl "#start-time-tmpl"}}</div>
          {{/if}}
        </div>
      </script>
      <script id="set-row" type="text/x-jquery-tmpl">
        <td class="separator-cell">&nbsp;</td>
        <td class="ball-cell">
          {{if $data.serve === $item.row && !$data.tiebreak}}
          {{tmpl($item) "#sport-icon-small-tmpl"}}
          {{/if}}
        </td>
        {{each $data[$item.val]}}
        <td 
        class="set-cell {{if $data.set == $index+1}}current-set{{else ($item.val == 'p1' && $value > $data.p2[$index]) || ($item.val == 'p2' && $value > $data.p1[$index])}}highlight{{/if}}">
        {{if typeof $value !== 'number' || $value >= 0}}${$value}{{else}}-{{/if}}
      </td>
      {{/each}}
      <td>&nbsp;</td>
    </script>
    <script id="tournament-tmpl" type="text/x-jquery-tmpl">
      {{tmpl "#scoreboard-header"}}
      <table>
        <tr>
          <td>
            <ol>
              {{each participants}}
              <li>${$value}</li>
              {{/each}}
            </ol>
          </td>
          <td>
            <div>${eventName}</div>
            {{if state === 'NotStarted'}}
            {{tmpl "#start-time-tmpl"}}
            {{else}}  
            {{if customTimer}}
            <span>${customTimer}</span>
            {{else}}      
            <span class="timer">${timerString}</span>
            {{/if}}
            {{/if}}
          </td>
        </tr>
      </table>
    </script>
    <script id="live-teaser-events-list" type="text/x-jquery-tmpl">
      <li>
        <h5 id="${sport.id}" title="${sport.name} (${events.length})" data-sport-name="${sport.name}">
          {{tmpl(sport) "#sport-icon-tmpl"}} 
          <span>${sport.name}{{if collapsed}} (${events.length}){{/if}}</span>
        </h5>
        <ul {{if collapsed}}style="display:none"{{/if}}>
          {{each events}} 
          <li id="${id}" {{if $index === events.length - 1}}class="last"{{/if}}>
            <a href="${url}">                    
              <h6>${eventName}</h6>                    
              {{if league}}
              <div>${league}</div>
              <span>${startDateString} ${startTimeString}</span>
              {{else state == 'NotStarted'}}
              {{tmpl($value) "#start-time-tmpl"}}                        
              {{else score}}
              <span>${score.p1}:${score.p2}</span><span>${period}</span>
              {{if sport.id == 4}} 
              <span>${minutesTimerString}</span>
              {{/if}}
              {{else state}}
              <span>${period}</span>
              {{/if}}                                     
              {{tmpl(media) "#media-icon-tmpl"}}
            </a>
          </li>
          {{/each}}
        </ul>
        
      </li>
    </script>
    <script id="live-teaser-events-ticker" type="text/x-jquery-tmpl">    
      {{each events}}

      <a href="${url}" target="_parent">
        {{if state == 'NotStarted'}}
        <span>${eventName}</span>
        <b>{{tmpl($value) "#start-time-tmpl"}}</b>
        {{else score}}
        <span>${eventName.split(' - ')[0]}</span>
        <b>${score.p1}:${score.p2}</b>
        <span>${eventName.split(' - ')[1]}</span>
        {{/if}}
      </a>
      <span class="event-separator">|</span>

      {{/each}}
    </script>
    <script id="calendar-events-list" type="text/x-jquery-tmpl">
      <li>
        <h5> ${name}</h5>    
        <table style="width: 100%">
          {{each events}} 
          <tr>                
            <td>
              ${startTimeString}
              {{tmpl(media) "#media-icon-tmpl"}}
            </td>
            <td>
              <a href="${url}">                    
                {{tmpl(sport) "#sport-icon-tmpl"}}
                <h6>${title}</h6> 
                <span>${league}</span>                      
              </a>
            </td>
          </tr>
          {{/each}}
        </table>  
      </li>
    </script>
    <!-- common templates -->
    <script id="sport-icon-tmpl" type="text/x-jquery-tmpl">            
      <span class="sporticon" style="background-position:${-(Math.floor(id%10)*19)}px ${-(Math.floor(id/10)*19)}px; float: left;"></span>
    </script>
    <script id="sport-icon-small-tmpl" type="text/x-jquery-tmpl">            
      <span class="sporticonsmall" style="background-position:${-(Math.floor(id%10)*10)}px ${-(Math.floor(id/10)*10)}px; float: left;"></span>
    </script>
    <script id="media-icon-tmpl" type="text/x-jquery-tmpl">
      {{if video}}
      <span class="videoicon">video</span>
      {{else audio}}
      <span class="audioicon">audio</span>
      {{/if}}
    </script>
    <script id="start-time-tmpl" type="text/x-jquery-tmpl">
      {{if startCountDown < 6 && startCountDown > 0}}
      <span class="highlight">${startCountDownString}</span>
      {{else}}
      <span>${startTimeString}</span>
      {{/if}}
    </script>
    <script id="scoreboard-header" type="text/x-jquery-tmpl">
      <div class="header">
        {{tmpl(sport) "#sport-icon-tmpl"}}
        <h4 title="${title}"> 
          ${title} 
        </h4>
        {{tmpl(media) "#media-icon-tmpl"}}
      </div>
    </script>
    <script id="scoreboard-header-compact" type="text/x-jquery-tmpl">
      <div class="header-bg"></div>
      <div class="header">
        {{if state == 'NotStarted'}}
        <span class="liveicon">${liveText}</span>
        {{else}}
        <span class="livenow">${liveText}</span>
        {{/if}}
        <div>
          <a href="${headerLink}" target="_parent">
            <span>${title}</span>
          </a>
        </div>
        {{if media.video}}
        <span class="videomark">${videoText}</span>
        {{/if}}
      </div>
    </script>