(() => {
  const stage=document.querySelector('#stage'), hero=document.querySelector('.hero__stage');
  const videos=[document.querySelector('#v1'),document.querySelector('#v2')];
  const button=document.createElement('button');
  button.className='mobile-play';button.type='button';button.textContent='▶ 播放 / Play';
  stage.append(button);
  let active=0;
  const mobile=matchMedia('(max-width:767px)');
  const mobileSources=['assets/hero-node-1-mobile.mp4','assets/hero-node-5-mobile.mp4'];
  function play(){
    if(!mobile.matches)return;
    const v=videos[active];
    v.muted=true;v.defaultMuted=true;v.playsInline=true;
    v.play().then(()=>button.hidden=true).catch(()=>button.hidden=false);
  }
  videos.forEach((v,i)=>{
    v.setAttribute('webkit-playsinline','');
    v.addEventListener('playing',()=>{if(mobile.matches)button.hidden=true;});
    v.addEventListener('ended',()=>{
      if(!mobile.matches)return;
      active=1-i;
      videos.forEach((video,j)=>video.parentElement.style.opacity=j===active?'1':'0');
      videos[active].currentTime=0;play();
    });
  });
  button.addEventListener('click',play);
  function setup(){
    if(mobile.matches){
      hero.prepend(stage);stage.style.opacity='1';
      videos.forEach((v,i)=>{if(v.dataset.mobileReady!=='true'){v.src=mobileSources[i];v.dataset.mobileReady='true';v.load();}v.parentElement.style.opacity=i===active?'1':'0';v.preload='auto';});
      button.hidden=false;play();
      document.querySelectorAll('.reveal,[data-reveal]').forEach(el=>el.classList.add('is-visible'));
    }else{document.body.prepend(stage);videos.forEach(v=>v.pause());button.hidden=true;}
  }
  mobile.addEventListener('change',setup);setup();
})();
