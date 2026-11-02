(() => {
  const stage=document.querySelector('#stage'), hero=document.querySelector('.hero__stage');
  const videos=[document.querySelector('#v1'),document.querySelector('#v2')];
  let active=0;
  const mobile=matchMedia('(max-width:767px)');
  const mobileSources=['assets/hero-node-1-mobile.mp4','assets/hero-node-5-mobile.mp4'];
  const motionFallbacks=['assets/hero-node-1-mobile.webp','assets/hero-node-5-mobile.webp'];
  let fallbackImage=null;
  let fallbackTimer=null;

  function hideAnimatedFallback(){
    if(fallbackImage)fallbackImage.style.display='none';
    videos[active].parentElement.style.opacity='1';
  }

  function showAnimatedFallback(){
    if(!mobile.matches)return;
    if(!fallbackImage){
      fallbackImage=document.createElement('img');
      fallbackImage.className='mobile-motion-fallback';
      fallbackImage.alt='';
      fallbackImage.setAttribute('aria-hidden','true');
      stage.append(fallbackImage);
    }
    fallbackImage.src=motionFallbacks[active];
    fallbackImage.style.display='block';
    videos[active].parentElement.style.opacity='0';
  }

  function play(){
    if(!mobile.matches)return;
    const v=videos[active];
    v.muted=true;v.defaultMuted=true;v.playsInline=true;
    clearTimeout(fallbackTimer);
    const attempt=v.play();
    if(attempt && attempt.catch)attempt.catch(showAnimatedFallback);
    fallbackTimer=setTimeout(()=>{
      if(v.paused && v.currentTime<0.05)showAnimatedFallback();
    },1200);
  }
  videos.forEach((v,i)=>{
    v.setAttribute('webkit-playsinline','');
    v.addEventListener('playing',()=>{
      if(mobile.matches && i===active){
        clearTimeout(fallbackTimer);
        hideAnimatedFallback();
      }
    });
    v.addEventListener('canplay',()=>{if(mobile.matches && i===active)play();});
    v.addEventListener('ended',()=>{
      if(!mobile.matches)return;
      active=1-i;
      hideAnimatedFallback();
      videos.forEach((video,j)=>video.parentElement.style.opacity=j===active?'1':'0');
      videos[active].currentTime=0;
      videos[active].parentElement.style.opacity='1';
      play();
    });
  });
  function setup(){
    if(mobile.matches){
      hero.prepend(stage);stage.style.opacity='1';
      videos.forEach((v,i)=>{if(v.dataset.mobileReady!=='true'){v.src=mobileSources[i];v.dataset.mobileReady='true';v.load();}v.parentElement.style.opacity=i===active?'1':'0';v.preload='auto';});
      play();
      document.querySelectorAll('.reveal,[data-reveal]').forEach(el=>el.classList.add('is-visible'));
    }else{
      document.body.prepend(stage);
      clearTimeout(fallbackTimer);
      if(fallbackImage)fallbackImage.style.display='none';
      videos.forEach(v=>v.pause());
    }
  }
  mobile.addEventListener('change',setup);setup();
})();
