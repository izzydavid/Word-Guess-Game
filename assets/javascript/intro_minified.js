function gameStart(){$("#hangman, #gifyButtons, #animeSearch").delay(500).fadeIn("slow")}function showButtons(){$("#gifyButtons, .carousel").empty(),topics.forEach((function(t,a){var n=$("<a>");n.addClass("waves-effect waves-light btn"),n.addClass("material-icons { font-size: 12px}"),n.addClass("animeButton").text(topics[a]).attr("data-anime",topics[a]),$("#gifyButtons").append(n),console.log(a),console.log(t)}))}function addGifyButtons(){$("#addGify").on("click",(function(t,a,n){t.preventDefault(),$("#gifyButtons").empty();var i=$("#gifyInput").val().trim();if(""===i)return!1;topics.push(i),showButtons()}))}$(document).ready((function(t){$(".carousel").carousel({noWrap:!0,onCycleTo:null}),t.preventDefault(t),M.AutoInit()})),setTimeout((function(){$("#introVideo")[0].play(),$("#video")[0].pause(),$("#introVideo").fadeIn("slow")}),4e4),$("strong, span, #blanks, #animeTitle, #animeTitle2, #introVideo, #playButton").hide(),$("#gifyButtons, h1, #animePick").hide(),$("#playAgain, #animeSearch, #inputRow").hide(),$(".carousel").hide(),$("#playButton").delay(26e3).fadeIn("slow"),$("#playButton").on("click",(function(){$("#animePick").delay(200).fadeIn("slow"),$("#playButton").remove(),$("#video").animate({opacity:.8})})),$("#movieBtn").on("click",(function(){$("strong, #blanks, #animeTitle").delay(200).fadeIn("slow"),$("#showBtn, #movieBtn, #animePick").remove(),$(".carousel, span, #inputRow").delay(500).fadeIn("slow"),gameStart(),showButtons(),M.AutoInit()})),$("#showBtn").on("click",(function(){$("strong, #blanks, #animeTitle2").delay(200).fadeIn("slow"),$("#showBtn, #movieBtn, #animePick").remove(),$(".carousel, span, #inputRow").delay(500).fadeIn("slow"),gameStart(),showButtons(),M.AutoInit()})),fetch("https://api.giphy.com/v1/gifs/search?q=").then((function(t){return t.json()}));var topics=["cowboy bepop","trigun","my neighbor totoro","death note","Akira"];$("#gifyButtons").on("click",".animeButton",(function(){$(".carousel").empty();var t="https://api.giphy.com/v1/gifs/search?q="+$(this).attr("data-anime")+"&api_key=Qxpp4x5d7fMc17qfyggEeDXHcJFmzIWO&limit=5&rating=pg-13";$.ajax({url:t,method:"GET"}).then((function(a){console.log(t),console.log(a);for(var n=0;n<5;n++)console.log(a),console.log(a.data[n].images.original.url),$(".carousel").prepend(`\n     \t<div class="carousel-item"> \n\t\t<img class="card card-image hoverable" src='${a.data[n].images.fixed_height_still.url}', \n\t\tdata-still='${a.data[n].images.fixed_height_still.url}'\n\t\tdata-animate='${a.data[n].images.fixed_height.url}'\n\t\tdata-state='still'>\n\t\t<div class="card-action"> <a href='${a.data[n].url}'target="_blank">Download Gify!</a> </div>\n\t\t</div>`),M.AutoInit();$("img").hover((function(){"still"===$(this).attr("data-state")?($(this).attr("src",$(this).attr("data-animate")),$(this).attr("data-state","animate")):($(this).attr("src",$(this).attr("data-still")),$(this).attr("data-state","still"))}))}))})),addGifyButtons(),winGame(),showButtons(),hoverImage();