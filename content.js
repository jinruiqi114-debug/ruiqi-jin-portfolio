/* Approved portfolio copy. Language changes preserve video and scroll state. */
(() => {
  const projects = [
    ['goldfish-room','房间里的金鱼','The Goldfish Room','海浪 AI 黑客松获奖单元电影，并入选小红书精选影片。这是一个关于孤独、连接与人与数字世界关系的 AI 影像项目。','An AI film exploring loneliness, connection and our relationship with the digital world. Recognized in an award-winning category at the Hailang AI Hackathon and selected as a featured film on Xiaohongshu.','编剧 · 概念设计 · 视频生成','Screenwriting · Concept design · AI video generation','海浪 AI 黑客松获奖 · 小红书精选影片','Hailang AI Hackathon recognition · Xiaohongshu featured film','https://xhslink.cn/o/9VSZn8zijN3'],
    ['phoenix-share','凤凰财经分享会','Phoenix Digital Economy Talk','受邀担任凤凰数字经济分享嘉宾，分享《AI 时代，如何创造个人复利价值》。从个人兴趣、AI 创作、内容表达和长期积累出发，探讨如何连接多元能力，形成自己的创作方法与个人价值。','Invited by Phoenix Digital Economy to speak on “Creating Compounding Personal Value in the AI Era.” Drawing on personal interests, AI creation and content practice, I explored how diverse skills can develop into a lasting creative approach.','特邀分享嘉宾','Invited speaker','AI 时代，如何创造个人复利价值','Creating Compounding Personal Value in the AI Era',null],
    ['moth-within','虫我','Moth Within','ARENAPEAK 亚洲巅峰赛入围奖作品。以蛾、光、身体变化和女性形象为视觉线索，探索人物、服装、空间与情绪之间的关系，建立一个介于时尚影像与梦境叙事之间的角色世界。','Recognized with a finalist award at the ARENAPEAK Asia competition. Through moths, light, bodily transformation and female imagery, the film explores relationships between character, costume, space and emotion, bringing fashion imagery into a dreamlike narrative.','编剧 · 概念设计 · 视频生成 · 后期配乐','Screenwriting · Concept design · AI video generation · Post-production music','ARENAPEAK 亚洲巅峰赛入围奖','ARENAPEAK Asia finalist award','https://xhslink.cn/o/1wbfQrvo2r6'],
    ['xiaohongshu-director','小红书天才导演计划','Xiaohongshu Genius Director Program','《房间里的金鱼》获得小红书天才导演计划推荐，并获小红书 AI 导演官方推荐。AI 影像、平台内容与个人表达，在这次作品展示中产生了连接。','The Goldfish Room was recommended through Xiaohongshu’s Genius Director Program and its official AI director account, connecting AI filmmaking with a wider creative community.','入选作品：房间里的金鱼','Selected work: The Goldfish Room','小红书天才导演计划推荐','Xiaohongshu Genius Director recommendation','https://xhslink.cn/o/3DM1L2kk3dZ'],
    ['dahua-jinling','大话金陵','Dahua Jinling','AI 影像作品《大话金陵》。以南京城市文化为背景，通过人物、服装、角色设定和画面叙事，构建一个具有东方气质的 AI 影像世界。','An AI film set against the cultural backdrop of Nanjing. Characters, costumes and visual storytelling come together in a cinematic world shaped by Chinese aesthetics.','导演 · 演员 · 后期配乐','Directing · Acting · Post-production music','影石 AI 电影入围','Insta360 AI film competition shortlist','https://xhslink.cn/o/5ULyticFnYw'],
    ['product-design','产品设计','Product Design','我关注产品形态、使用场景与视觉传播之间的关系。从产品概念到场景表达，希望让一个具体的物件拥有自己的气质、故事和视觉世界。','I explore the relationship between product form, everyday use and visual communication. From concepts to contextual imagery, I give everyday objects a distinct character and visual story.','产品概念 · 场景设计 · 视觉表达','Product concepts · Scene design · Visual expression','苹果型香味扩散器 · 产品视觉探索','Apple-shaped scent diffuser · Product imagery',null]
  ];
  projects.push(['generation-rules','生成法则','Rules of Generation','《生成法则》是我个人独立完成的 AI 电影作品。以 AI 为创作媒介，将个人想法转化为影像，探索自己的视觉表达。','Rules of Generation is an independently created AI film. Using AI as a creative medium, I translate personal ideas into moving images and explore my own visual expression.','个人独立完成','Independently created','AI 电影 · 独立创作','AI film · Independent creation','https://xhslink.cn/o/9JfeCyTta5L']);
  const generationCard = document.createElement('a');
  generationCard.className = 'work-card';
  generationCard.href = '#generation-rules';
  generationCard.setAttribute('data-reveal','');
  generationCard.innerHTML = '<div class="work-card__media"><img src="assets/generation-rules.png" alt="生成法则" loading="lazy"></div><div class="work-card__meta t-small"></div>';
  document.querySelector('.work-grid').append(generationCard);
  const generationCase = document.createElement('article');
  generationCase.className = 'case';
  generationCase.id = 'generation-rules';
  generationCase.innerHTML = '<figure class="case__visual"><img src="assets/generation-rules.png" alt="生成法则" loading="lazy"></figure><div class="case__body"></div><ul class="case__facts t-small"></ul>';
  document.getElementById('product-design').after(generationCase);
  const style = document.createElement('style');
  style.textContent = '.language-switch{pointer-events:auto;background:white;border:1px solid #cad0d2;border-radius:24px;display:flex;padding:3px;margin-right:54px}.language-switch button{padding:8px 12px;border-radius:20px;font-size:13px}.language-switch button[aria-pressed="true"]{background:#24363f;color:white}.chrome .burger{display:none}.hero__copy{max-width:650px}.hero__copy h1{font-size:clamp(64px,9vw,130px);margin:12px 0}.hero__stage{grid-template-rows:20svh 1fr auto}.hero__copy .t-lead{font-size:clamp(18px,1.6vw,24px)}.hero__copy p{max-width:600px}.case{scroll-margin-top:90px}.case__visual{margin:0}.contact h2{font-size:clamp(48px,8vw,110px)}.journal-item__year{min-width:70px}.about__grid p{line-height:1.7}.reveal.is-visible{opacity:1}@media(max-width:767px){.language-switch{margin-right:0}.hero__stage{grid-template-rows:110px 1fr auto}.hero__copy h1{font-size:64px}.hero__copy .t-small{font-size:12px}.hero__copy p{margin-bottom:16px}}';
  document.head.append(style);
  const switcher = document.createElement('div');
  switcher.className = 'language-switch';
  switcher.setAttribute('role','group');
  switcher.innerHTML = '<button type="button" lang="zh-CN" data-lang="zh">中文</button><button type="button" lang="en" data-lang="en">EN</button>';
  document.querySelector('.chrome').append(switcher);
  const goldfishArchive = document.createElement('div');
  goldfishArchive.id = 'goldfish-visual-assets';
  goldfishArchive.style.cssText = 'padding:32px 0 56px;border-bottom:1px solid #cad0d2';
  goldfishArchive.innerHTML = '<h3 class="case__title"></h3><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:24px;align-items:start;margin-top:24px"><a href="assets/goldfish-aquarium.png" target="_blank" rel="noopener"><img src="assets/goldfish-aquarium.png" loading="lazy" width="1600" height="2000" style="width:100%;height:auto"></a><a href="assets/goldfish-laptop.png" target="_blank" rel="noopener"><img src="assets/goldfish-laptop.png" loading="lazy" style="width:100%;height:auto"></a></div>';
  const yunaLink = document.createElement('a');
  yunaLink.href = 'assets/goldfish-yuna.png';
  yunaLink.target = '_blank';
  yunaLink.rel = 'noopener';
  yunaLink.innerHTML = '<img src="assets/goldfish-yuna.png" loading="lazy" style="width:100%;height:auto" alt="尤娜角色设定图">';
  goldfishArchive.querySelector('div').append(yunaLink);
  document.querySelector('.moth-archive').before(goldfishArchive);
  function render(lang) {
    const en = lang === 'en';
    const t = (zh, english) => en ? english : zh;
    document.documentElement.lang = en ? 'en' : 'zh-CN';
    goldfishArchive.querySelector('h3').textContent=t('房间里的金鱼 · 视觉资产','The Goldfish Room · Visual assets');
    goldfishArchive.querySelectorAll('img').forEach((img,i)=>{img.alt=i===0?t('鱼缸前的女生 · 柔和光影','Girl beside an aquarium in soft light'):t('女生与笔记本电脑 · 场景设计','Girl with a laptop · Scene design');img.parentElement.setAttribute('aria-label',img.alt+t(' · 查看原图',' · View original'));});
    yunaLink.querySelector('img').alt=t('尤娜 · 角色设定与服装细节','Yuna · Character design and costume details');
    yunaLink.setAttribute('aria-label',t('尤娜角色设定 · 查看原图','Yuna character sheet · View original'));
    document.title = t('靳睿琦 Riki — AI 影像与视觉创作','Riki Jin — AI Films & Visual Creation');
    switcher.setAttribute('aria-label',t('语言切换','Choose language'));
    switcher.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.lang === lang)));
    const nav = document.querySelector('.hero__nav');
    nav.innerHTML = `<a href="#work">${t('作品','Work')}</a><a href="#about">${t('关于我','About')}</a><a href="#contact">${t('联系','Contact')}</a>`;
    document.querySelector('.hero__copy').innerHTML = `<p class="t-small">${t('靳睿琦 Riki · 央美 × 法国高商','Riki Jin · CAFA × KEDGE')}</p><h1 class="t-display">Hi, I’m Riki.</h1><p class="t-small">${t('libtv 先锋创作者 · TapNow 明星创作者 · 可灵优创 · 时尚博主','libtv Pioneer Creator · TapNow Star Creator · Kling Creator · Fashion Creator')}</p><p class="t-lead">${t('用 AI 重新定义视觉创作，审美才是最大的生产力。','Redefining visual creation with AI. Aesthetic vision is my greatest creative strength.')}</p><p class="t-small">${t('我用 AI 连接影像、时尚、人物与内容，把一个想法发展成具有风格、情绪和个人辨识度的视觉世界。','I connect film, fashion, characters and content through AI, developing ideas into visual worlds with emotion and a distinct point of view.')}</p><a class="btn t-ui" href="#work">${t('查看我的作品','Explore my work')}</a> <a class="btn t-ui" href="#about">${t('了解 Riki','Meet Riki')}</a>`;
    document.querySelector('.craft__statement').textContent = t('我相信，审美不仅是视觉风格，也是一种思考方式。','I believe aesthetic vision is a way of thinking, as well as a visual style.');
    document.querySelector('.specs').innerHTML = [[t('AI 电影','AI films'),t('编剧与视觉创作','Writing & visuals')],[t('人物设定','Character design'),t('概念与形象','Concept & identity')],[t('时尚视觉','Fashion imagery'),t('风格与表达','Style & expression')],[t('产品设计','Product design'),t('形态与场景','Form & context')]].map(p=>`<li class="specs__row"><span>${p[0]}</span><span class="is-demoted">${p[1]}</span></li>`).join('');
    document.querySelector('.work__head h2').textContent=t('代表作品','Selected work');
    document.querySelector('.work__head p').textContent=t('从 AI 电影到公开分享，从人物设定到产品视觉，每个项目都记录着我对审美与表达的探索。','From AI films and public talks to character design and product imagery, each project explores a different way to see and express.');
    document.querySelector('.case-studies__head h2').textContent=t('让想法拥有画面，让作品留下印记。','Giving ideas a visual form. Creating work that stays with you.');
    document.querySelector('.case-studies__head > p').textContent=t('这里收录我的代表项目、创作职责与作品链接。','Explore selected projects, my contributions and links to the work.');
    document.querySelector('.case-studies__head .t-small').textContent=t('项目档案 · 01—07','Project archive · 01—07');
    projects.forEach((p,i)=>{
      const section = document.getElementById(p[0]);
      const card = document.querySelector(`.work-card[href="#${p[0]}"]`);
      card.querySelector('.work-card__meta').innerHTML=`<span>${t(p[1],p[2])}</span><span>0${i+1} ↗</span>`;
      [card,section].forEach(e=>e.querySelector('img').alt=t(p[1],p[2]));
      section.querySelector('.case__body').innerHTML=`<p class="t-small is-demoted">0${i+1} / ${t('项目','Project')}</p><h3 class="case__title">${t(p[1],p[2])}</h3><p class="t-body">${t(p[3],p[4])}</p><p class="case__role t-small">${t('我的职责：','My contribution: ')}${t(p[5],p[6])}</p><div class="case__actions t-small"><a href="${p[9] || '#contact'}" ${p[9]?'target="_blank" rel="noopener noreferrer"':''}>${p[9]?t('查看作品 / 推荐 ↗','View work / feature ↗'):t('联系合作 →','Get in touch →')}</a></div>`;
      section.querySelector('.case__facts').innerHTML=`<li><span>${t('项目亮点','Highlights')}</span><span class="is-demoted">${t(p[7],p[8])}</span></li>`;
    });
    document.querySelector('.moth-archive__head h3').textContent=t('虫我 · 视觉档案','Moth Within · Visual archive');
    document.querySelector('.moth-archive__head .t-small').textContent=t('创作过程','Creative process');
    document.querySelector('.moth-archive__head > p').textContent=t('概念、角色、服装与影像关键帧，记录《虫我》从构想到画面的过程。','Concepts, characters, costumes and keyframes trace Moth Within from initial ideas to screen.');
    document.querySelectorAll('.moth-archive img').forEach((img,i)=>img.alt=t(['概念设计','角色设定','服装造型','视频关键帧'][i],['Concept design','Character sheet','Costume design','Film keyframe'][i]));
    document.querySelector('.services__intro').innerHTML=`<p class="t-small is-demoted">${t('合作方向','Collaborations')}</p><h2 class="t-h1">${t('如果你有一个想法，我们可以一起把它变成一个世界。','Have an idea? Let’s give it a world of its own.')}</h2><p class="t-body">${t('从故事与角色出发，参与影像、品牌、产品与平台内容的创作。','From stories and characters to films, brands, products and social content.')}</p>`;
    const services = [['AI 电影与短片','AI films & short films','编剧、概念设计、视频生成与后期配乐。','Screenwriting, concept design, AI video generation and post-production music.'],['人物与时尚视觉','Characters & fashion imagery','人物与角色概念设计、时尚内容与个人视觉形象。','Character concepts, fashion content and personal visual identities.'],['品牌与产品视觉','Brand & product imagery','产品概念、使用场景与品牌视觉表达。','Product concepts, use scenarios and brand imagery.'],['内容与主题分享','Content & talks','AI 创作分享、主题演讲、小红书内容策划与个人 IP。','AI creation talks, speaking engagements, Xiaohongshu content and personal branding.']];
    document.querySelector('.service-list').innerHTML=services.map((s,i)=>`<article class="service"><span class="service__num">0${i+1}</span><div><h3>${t(s[0],s[1])}</h3><p class="t-body is-demoted">${t(s[2],s[3])}</p></div></article>`).join('');
    document.querySelector('.journal__intro').innerHTML=`<p class="t-small">${t('经历亮点','Milestones')}</p><h2 class="t-h1">${t('我做过的事，也构成了我现在的创作方式。','The work I’ve done shapes the way I create today.')}</h2><p class="t-body">${t('从获奖影像到平台推荐，从创作实践到公开分享，持续探索 AI 与个人表达的可能。','From recognized films and platform features to public talks, I continue to explore AI as a medium for personal expression.')}</p>`;
    const milestones = [['影像','Film','作品与认可','Films & recognition','《房间里的金鱼》获海浪 AI 黑客松获奖单元认可，入选小红书精选影片；《虫我》获 ARENAPEAK 亚洲巅峰赛入围奖。','The Goldfish Room received Hailang AI Hackathon recognition and a Xiaohongshu feature; Moth Within received an ARENAPEAK Asia finalist award.'],['平台','Platforms','创作者身份','Creator recognition','libtv 先锋创作者 · TapNow 明星创作者 · 可灵优创；获小红书 AI 导演官方与天才导演计划推荐。','libtv Pioneer Creator · TapNow Star Creator · Kling Creator, with recommendations from Xiaohongshu’s official AI director account and Genius Director Program.'],['分享','Talks','凤凰数字经济特邀嘉宾','Phoenix Digital Economy guest speaker','分享主题：AI 时代，如何创造个人复利价值。','Talk: Creating Compounding Personal Value in the AI Era.']];
    document.querySelector('.journal-list').innerHTML=milestones.map(m=>`<article class="journal-item"><span class="journal-item__year t-small">${t(m[0],m[1])}</span><div><h3>${t(m[2],m[3])}</h3><p class="t-body">${t(m[4],m[5])}</p></div></article>`).join('');
    document.querySelector('.about__grid').innerHTML=`<div class="about__copy"><p class="t-small is-demoted">${t('关于我','About Riki')}</p><h2 class="t-h1">${t('我是靳睿琦 Riki。','I’m Riki Jin.')}</h2><p class="t-body">${t('央美 × 法国高商。我关注 AI 影像、时尚视觉、人物创造与个人表达。我的创作横跨 AI 电影、概念设计、人物设定、产品视觉和内容表达。','CAFA × KEDGE. My practice spans AI films, fashion imagery, character creation, concept design, product visuals and content.')}</p><p class="t-body">${t('我喜欢从一个模糊的想法出发，通过故事、角色、服装、动作和画面，把它逐渐发展成一个完整的视觉世界。AI 是连接想象力、审美与个人表达的一种新方式。','I enjoy developing an initial idea through story, character, costume, movement and imagery into a complete visual world. AI offers a new way to connect imagination, aesthetic vision and personal expression.')}</p></div><div class="t-body"><p>${t('小红书 · 观观 Riki','Xiaohongshu · Guanguan Riki')}</p><h3>3200+ ${t('粉丝','followers')}</h3><p>${t('记录 AI 创作、时尚视觉、人物设计和个人审美实践。这里既是作品展示，也是持续观察、创作和分享的地方。','Sharing AI creation, fashion imagery, character design and aesthetic experiments—a place to showcase work and keep observing, creating and sharing.')}</p><a class="btn" href="https://xhslink.cn/o/WIgGynBWcq" target="_blank" rel="noopener noreferrer">${t('访问小红书主页 ↗','Visit Xiaohongshu ↗')}</a></div>`;
    document.querySelector('.contact__inner > div:first-child').innerHTML=`<p class="t-small">${t('欢迎创意合作','Open to creative collaborations')}</p><h2 class="t-display">${t('让想法开始发生。','Let’s make it happen.')}</h2><p class="t-body" style="max-width:600px">${t('如果你正在构思一部作品、一个品牌、一个角色，或者有一个还没有被说清楚的想法，欢迎和我聊聊。','Whether you’re developing a film, a brand, a character or an idea still taking shape, I’d love to hear from you.')}</p>`;
    const social = document.querySelector('.contact a[href^="https"]');
    social.href='https://xhslink.cn/o/WIgGynBWcq';social.textContent=t('小红书 · 观观 Riki ↗','Xiaohongshu · Guanguan Riki ↗');
    try { localStorage.setItem('riki-language',lang); } catch {}
    window.dispatchEvent(new Event('resize'));
  }
  switcher.addEventListener('click',event=>{const button=event.target.closest('[data-lang]');if(button)render(button.dataset.lang);});
  let initial='zh';try { if(localStorage.getItem('riki-language')==='en')initial='en'; } catch {}
  render(initial);
})();
