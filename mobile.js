(() => {
  const stage=document.querySelector('#stage'), hero=document.querySelector('.hero__stage');
  const videos=[document.querySelector('#v1'),document.querySelector('#v2')];
  let active=0;
  const mobile=matchMedia('(max-width:767px)');
  const mobileSources=['assets/hero-node-1-mobile.mp4','assets/hero-node-5-mobile.mp4'];
  function play(){
    if(!mobile.matches)return;
    const v=videos[active];
    v.muted=true;v.defaultMuted=true;v.playsInline=true;
    v.play().catch(()=>{});
  }
  videos.forEach((v,i)=>{
    v.setAttribute('webkit-playsinline','');
    v.addEventListener('ended',()=>{
      if(!mobile.matches)return;
      active=1-i;
      videos.forEach((video,j)=>video.parentElement.style.opacity=j===active?'1':'0');
      videos[active].currentTime=0;play();
    });
  });
  function setup(){
    if(mobile.matches){
      hero.prepend(stage);stage.style.opacity='1';
      videos.forEach((v,i)=>{if(v.dataset.mobileReady!=='true'){v.src=mobileSources[i];v.dataset.mobileReady='true';v.load();}v.parentElement.style.opacity=i===active?'1':'0';v.preload='auto';});
      play();
      document.querySelectorAll('.reveal,[data-reveal]').forEach(el=>el.classList.add('is-visible'));
    }else{document.body.prepend(stage);videos.forEach(v=>v.pause());}
  }
  mobile.addEventListener('change',setup);setup();
})();
