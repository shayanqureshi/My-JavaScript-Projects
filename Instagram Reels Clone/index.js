const videos = document.querySelectorAll("video");

for(let video of videos){
    video.addEventListener("click", function(){
        
        if (video.paused){
            video.play()
        }
        else{
            video.pause();
        }
    })
    if (video.ended){
        video.play();
    }
}