var banners = ["./img/pc.jpg","./img/lupa.png"];

var bannerAtual = 0;

function trocaBanner(){
    bannerAtual = (bannerAtual +1) %2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 3000);

const AudioP = document.querySelector('#audioplayer');

const InputRange = document.querySelector('#input-range');

const ButtonPlay = document.querySelector('#Play');

InputRange.addEventListener("input", () => {  AudioP.volume = InputRange.value;});

ButtonPlay.addEventListener("click", () => {
    AudioP.play();
});



