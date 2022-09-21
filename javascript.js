// list of emojis to cycle through
const emojis = ['🤪', '🤩', '🤓', '😎', '🤠', '👋'];

// container of waving emoji
const waveElement = document.querySelector(".wave");
const emoji = waveElement.firstChild;

var currentEmoji = 1;

waveElement.addEventListener('click', function() {
    waveElement.firstChild.innerHTML = emojis[currentEmoji % emojis.length];
    currentEmoji++;
})

// waving emoji animation

// adds rotate class to the emoji to begin the animation
$(waveElement).mouseenter(function(){
    $(emoji).addClass("rotate")
})

// waits for the animation to finish, then removes class to end the animation
$(waveElement).mouseleave(function(){
    $(emoji).bind('animationiteration webkitAnimationIteration', function() {
        $(emoji).removeClass("rotate");
        $(emoji).unbind('animationiteration webkitAnimationIteration');
    })
})
  
