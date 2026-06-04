// ----------------------------------------------------------
// i18n — single-language render, toggled via the bottom-right pill.
// Persisted in localStorage so the choice survives reloads.
// To add new content: put data-i18n="key" on the element and add
// matching entries in DICT.zh / DICT.en below.
// ----------------------------------------------------------
(function () {
  const DICT = {
    zh: {
      'title.page':      '黑胶上的威士忌 · Whiskey on Vinyl',
      'nav.about':       '初衷',
      'nav.room':        '空间',
      'nav.philosophy':  '理念',
      'nav.members':     '会员',
      'nav.contact':     '联系',
      'hero.eyebrow':    '— 一间清吧',
      'hero.title':      '<span>黑胶上的</span><br/><em>威士忌</em>',
      'hero.sub':        '深夜,留给愿意慢下来的人。',
      'hero.cta1':       '走进这里 <span aria-hidden="true">→</span>',
      'hero.cta2':       '关于这间屋子',
      'about.title':     '初衷',
      'about.lead':      '酒精只是媒介。<br/>音乐、时间与情绪,<br/>才是这里真正被消费的东西。',
      'about.p1':        '繁市需要一间不催促的房间。这里没有翻台、没有推销、没有需要被介绍的自己。',
      'about.p2':        '你可以坐三个小时,只点一杯;也可以不说话,只是听完一整面黑胶。',
      'about.p3':        '我们筛选环境,不筛选身份 — 不预设性别,不预设年龄的上限或下限(18 起),只希望进来的人,都愿意把音量调低一点。',
      'room.title':      '空间',
      'room.quote':      '一张唱片的长度,大约是二十二分钟。<br/><span class="muted">我们把空间也按这个节奏设计。</span>',
      'room.light.key':  '灯光',
      'room.light.val':  '低于阅读所需<br/>高于看不清对面的人',
      'room.sound.key':  '声场',
      'room.sound.val':  '黑胶为主,数字为辅<br/>人声永远小于音乐',
      'room.seat.key':   '座位',
      'room.seat.val':   '数量被刻意压低<br/>留给愿意停留的人',
      'room.scent.key':  '气味',
      'room.scent.val':  '木 · 烟 · 纸<br/>不使用香氛喷雾',
      'philo.title':     '理念',
      'philo.h1':        '<span class="ord" aria-hidden="true">•</span> 慢是一种稀缺品',
      'philo.p1':        '夜晚不该被效率追赶。这里的一切节奏,以唱片的 A 面与 B 面计算。',
      'philo.h2':        '<span class="ord" aria-hidden="true">•</span> 门槛不是傲慢',
      'philo.p2':        '我们筛选的是态度,不是消费力。安静、尊重、好奇 — 只此三样。',
      'philo.h3':        '<span class="ord" aria-hidden="true">•</span> 收藏比消费更接近艺术',
      'philo.p3':        '威士忌、黑胶、座位,都可以被"保留",而不是被"卖出"。',
      'members.title':   '会员',
      'members.quote':   '会员不是优惠,是一种归属方式。',
      'members.li1':     '<span>一张</span>保留座位',
      'members.li2':     '<span>一份</span>不会公开的深夜菜单',
      'members.li3':     '<span>一组</span>可试听的黑胶清单',
      'members.li4':     '<span>一道</span>After Hours 通行',
      'members.li5':     '<span>一格</span>属于你的私人储酒位',
      'members.fine':    '会员名额有限,采邀请与推荐制。详情请于到店后询问。',
      'who.title':       '客人',
      'who.body':        '不需要解释自己是谁。<br/>但如果你愿意,我们大致认得这样的人 —',
      'who.list':        '设计师 · 音乐人 · 写作的人 · 拍照的人 ·<br/>在城市里上班却仍然相信夜晚的人 ·<br/>以及任何愿意把手机倒扣放下的人。',
      'contact.title':   '联系',
      'contact.dt1':     '地址',
      'contact.dd1':     '隐于市中心 · 具体位置请于预约后告知',
      'contact.dt2':     '时间',
      'contact.dd2':     '每天 9:00pm — 3:00am',
      'contact.dt3':     '预约',
      'contact.dd3':     'danielrong16@gmail.com · 微信 yj0919jy',
      'contact.manners': '请勿拍摄他人。请把声音留给音乐。',
      'foot.tagline':    '黑胶上的威士忌',
      'foot.copy':       '© 2026 — A room, not a bar.',
    },
    en: {
      'title.page':      'Whiskey on Vinyl · A listening room',
      'nav.about':       'About',
      'nav.room':        'Room',
      'nav.philosophy':  'Philosophy',
      'nav.members':     'Members',
      'nav.contact':     'Contact',
      'hero.eyebrow':    '— A listening room',
      'hero.title':      '<span>Whiskey</span><br/><em>on Vinyl</em>',
      'hero.sub':        'A room between the city and the night.',
      'hero.cta1':       'Step inside <span aria-hidden="true">→</span>',
      'hero.cta2':       'About this room',
      'about.title':     'About',
      'about.lead':      'Alcohol is only the medium.<br/>Music, time and mood —<br/>that is what is truly consumed here.',
      'about.p1':        'A loud city needs a room that does not rush you. No table turns, no upsells, no version of yourself to introduce.',
      'about.p2':        'You can sit for three hours over a single drink. You can stay silent and just listen through one whole side of a record.',
      'about.p3':        'We curate the room, not the people — no assumptions about gender, no upper or lower age bracket (18+), only the hope that whoever walks in is willing to turn their volume down a little.',
      'room.title':      'The Room',
      'room.quote':      'One side of a record runs about twenty-two minutes.<br/><span class="muted">We designed the room to that same rhythm.</span>',
      'room.light.key':  'Light',
      'room.light.val':  'Below reading level<br/>Above seeing-no-one level',
      'room.sound.key':  'Sound',
      'room.sound.val':  'Vinyl first, digital second<br/>The room is always quieter than the music',
      'room.seat.key':   'Seats',
      'room.seat.val':   'Deliberately few<br/>Reserved for those willing to stay',
      'room.scent.key':  'Scent',
      'room.scent.val':  'Wood · smoke · paper<br/>No diffusers, no sprays',
      'philo.title':     'Philosophy',
      'philo.h1':        '<span class="ord" aria-hidden="true">•</span> Slowness is scarce',
      'philo.p1':        'The night should not be chased by efficiency. Here, every pace is measured in A-sides and B-sides.',
      'philo.h2':        '<span class="ord" aria-hidden="true">•</span> A threshold is not arrogance',
      'philo.p2':        'We filter for attitude, not spending. Quiet, respectful, curious — only those three.',
      'philo.h3':        '<span class="ord" aria-hidden="true">•</span> Keeping is closer to art than consuming',
      'philo.p3':        'Whiskey, vinyl, a seat — all of these can be "reserved", not just "sold".',
      'members.title':   'Members',
      'members.quote':   'Membership is not a discount. It is a way of belonging.',
      'members.li1':     '<span>One</span> reserved seat',
      'members.li2':     '<span>One</span> private after-hours menu',
      'members.li3':     '<span>One</span> listening list of vinyl',
      'members.li4':     '<span>One</span> After-Hours passage',
      'members.li5':     '<span>One</span> private bottle locker',
      'members.fine':    'Membership is limited. Invitation and referral only. Please ask at the bar.',
      'who.title':       'Who Comes Here',
      'who.body':        'You do not have to explain who you are.<br/>But if you wish, we tend to recognise these —',
      'who.list':        'Designers · musicians · writers · photographers ·<br/>the city-employed who still believe in the night ·<br/>and anyone willing to put their phone face-down.',
      'contact.title':   'Find Us',
      'contact.dt1':     'Address',
      'contact.dd1':     'Hidden in the city centre · exact location shared after booking',
      'contact.dt2':     'Hours',
      'contact.dd2':     'Nightly 9:00pm — 3:00am',
      'contact.dt3':     'Booking',
      'contact.dd3':     'danielrong16@gmail.com · WeChat yj0919jy',
      'contact.manners': 'Please do not photograph other guests. Leave the sound for the music.',
      'foot.tagline':    'Whiskey on Vinyl',
      'foot.copy':       '© 2026 — A room, not a bar.',
    },
  };

  const root = document.documentElement;
  const KEY = 'wov.lang';
  const saved = (function () {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  })();
  const initial = (saved === 'en' || saved === 'zh') ? saved : 'zh';

  function applyLang(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    const dict = DICT[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val !== undefined) {
        if (el.tagName === 'TITLE') {
          // <title> only honours textContent
          el.textContent = val;
        } else {
          el.innerHTML = val;
        }
      }
    });
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
  }

  applyLang(initial);

  document.querySelectorAll('.lang-toggle button').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.set));
  });
})();

// ----------------------------------------------------------
// Clock: rotate the bar-spoon (hour) and cocktail-pick (minute) hands
// based on actual wall-clock time. Updates every 30s.
// ----------------------------------------------------------
(function () {
  const hourEl = document.getElementById('handHour');
  const minEl = document.getElementById('handMinute');
  if (!hourEl || !minEl) return;
  function tick() {
    const now = new Date();
    const h = now.getHours() % 12;
    const m = now.getMinutes();
    const s = now.getSeconds();
    const minDeg = (m + s / 60) * 6;
    const hourDeg = (h + m / 60) * 30;
    hourEl.setAttribute('transform', `rotate(${hourDeg.toFixed(2)})`);
    minEl.setAttribute('transform', `rotate(${minDeg.toFixed(2)})`);
  }
  tick();
  setInterval(tick, 30000);
})();

// ----------------------------------------------------------
// Subtle reveal-on-scroll + smooth anchor scroll.
// Keep it light — the page is meant to feel quiet.
// ----------------------------------------------------------
(function () {
  // Tag elements that should fade-in.
  const targets = document.querySelectorAll(
    '.block, .block-title, .block-body, .block-quote, .room-cell, .philo article, .member-list li, .who-list, .contact-list > div, .foot-logo'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    targets.forEach((el) => io.observe(el));
  } else {
    targets.forEach((el) => el.classList.add('is-in'));
  }

  // Smooth scroll for in-page anchors (with reduced-motion respect).
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReduce ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  });
})();
