let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
const videoDark = document.getElementById('videoDark');
const videoLight = document.getElementById('videoLight');

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    if(body.classList.contains('dark')){
    videoDark.style.display = 'none';
    videoLight.style.display = 'block';
    videoLight.currentTime = 0;
    videoLight.play();
    videoDark.pause();
    } else {
    videoLight.style.display = 'none';
    videoDark.style.display = 'block';
    videoDark.currentTime = 0;
    videoDark.play();
    videoLight.pause();
    }
})