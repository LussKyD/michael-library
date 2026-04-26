// DRACO Library — Application Logic
// DRACO iNC — A DRACO DYNASTY Technology Department
// Depends on: js/data.js, js/backgrounds.js



var currentBook=null, isFullAccess=false, purchasedBooks={}, readerFontSize=18;
var audioPlaying=false, audioInterval=null, currentUtterance=null, audioWords=[];
var synth=window.speechSynthesis;

function showView(name) {
  document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
  var el = document.getElementById('view-'+name);
  if(el){ el.classList.add('active'); window.scrollTo(0,0); }
  if(name !== 'reader') stopAudio();
  updateLibNav();
  if(name === 'mylibrary') renderLibrary();
}

function updateLibNav() {
  var count = Object.keys(purchasedBooks).length;
  var badge = document.getElementById('lib-badge');
  if(badge){ badge.style.display = count > 0 ? 'inline' : 'none'; badge.textContent = count; }
}

function renderLibrary() {
  var owned = BOOKS.filter(function(b){ return purchasedBooks[b.id]; });
  var grid = document.getElementById('library-grid');
  var empty = document.getElementById('library-empty');
  var sub = document.getElementById('mylib-sub');
  if(!grid) return;
  if(owned.length === 0){
    grid.innerHTML = '';
    if(empty) empty.style.display = 'block';
    if(sub) sub.textContent = 'Books you purchase appear here.';
  } else {
    if(empty) empty.style.display = 'none';
    if(sub) sub.textContent = owned.length + ' book' + (owned.length !== 1 ? 's' : '') + ' in your library.';
    var html = '<div class="books-grid">';
    owned.forEach(function(b){ html += buildCard(b); });
    html += '</div>';
    grid.innerHTML = html;
  }
}

function buildCard(b) {
  var owned = purchasedBooks[b.id];
  var badge = owned ? 'badge-owned' : 'badge-free';
  var badgeText = owned ? 'OWNED' : 'PREVIEW FREE';
  var priceClass = owned ? ' owned' : '';
  var priceText = owned ? '\u2713 Unlocked' : b.currency + ' ' + b.price;
  return '<div class="book-card" onclick="showDetail(\'' + b.id + '\')">'
    + '<div class="book-cover">'
    + '<div class="cover-inner" style="background:' + b.bg + '">'
    + '<div class="cover-title">' + b.title + '</div>'
    + '<div class="cover-author">' + b.author + '</div>'
    + '</div>'
    + '<div class="book-badge ' + badge + '">' + badgeText + '</div>'
    + '</div>'
    + '<div>'
    + '<div class="card-title">' + b.title + '</div>'
    + '<div class="card-author">' + b.author + '</div>'
    + '<div class="card-price' + priceClass + '">' + priceText + '</div>'
    + '</div></div>';
}

function populateHome() {
  var g = document.getElementById('home-grid');
  if(g){ var html=''; BOOKS.slice(0,4).forEach(function(b){ html+=buildCard(b); }); g.innerHTML=html; }
}

var activeCategory='all', activePriceFilter='all', searchTerm='';

function getFiltered() {
  return BOOKS.filter(function(b) {
    var mc = activeCategory === 'all' || b.category === activeCategory;
    var mp = activePriceFilter === 'all'
      || (activePriceFilter === 'owned' && purchasedBooks[b.id])
      || (activePriceFilter === 'paid' && !purchasedBooks[b.id]);
    var ms = !searchTerm || b.title.toLowerCase().indexOf(searchTerm) >= 0 || b.author.toLowerCase().indexOf(searchTerm) >= 0;
    return mc && mp && ms;
  });
}

function populateBrowse() {
  var books = getFiltered();
  var g = document.getElementById('browse-grid');
  var c = document.getElementById('results-count');
  if(g){ var html=''; books.forEach(function(b){ html+=buildCard(b); }); g.innerHTML=html; }
  if(c) c.textContent = 'Showing ' + books.length + ' book' + (books.length !== 1 ? 's' : '');
}

function setFilter(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  populateBrowse();
}
function setPriceFilter(p, btn) { activePriceFilter = p; populateBrowse(); }
function filterBooks(val) { searchTerm = val.toLowerCase(); populateBrowse(); }

function showDetail(id) {
  var book = null;
  for(var i=0; i<BOOKS.length; i++){ if(BOOKS[i].id === id){ book=BOOKS[i]; break; } }
  if(!book) return;
  currentBook = book;
  var owned = purchasedBooks[book.id];
  document.getElementById('d-cat').textContent = book.categoryLabel;
  document.getElementById('d-title').textContent = book.title;
  document.getElementById('d-author').textContent = 'by ' + book.author;
  document.getElementById('d-pages').textContent = book.pages;
  document.getElementById('d-year').textContent = book.year;
  document.getElementById('d-desc').textContent = book.desc;
  document.getElementById('d-price').textContent = owned ? '\u2713 Unlocked' : book.currency + ' ' + book.price;
  var cov = document.getElementById('detail-cover');
  if(cov) cov.innerHTML = '<div class="dc-inner" style="background:' + book.bg + '">'
    + '<div class="dc-title">' + book.title + '</div>'
    + '<div class="dc-author">' + book.author.toUpperCase() + '</div></div>';
  var mb = document.getElementById('d-main-btn');
  var pb = document.getElementById('d-preview-btn');
  if(mb) mb.textContent = owned ? 'Read Full Book' : 'Unlock Full Book \u2014 ' + book.currency + ' ' + book.price;
  if(pb) pb.textContent = owned ? '\uD83C\uDFA7 Listen with AI Audio' : 'Read Free Preview (Chapter 1)';
  if(mb) mb.onclick = function(){ if(purchasedBooks[book.id]) openReader(book,true); else openCheckout(book); };
  if(pb) pb.onclick = function(){ if(purchasedBooks[book.id]){ openReader(book,true); setTimeout(toggleAudio,400); } else openReader(book,false); };
  showView('detail');
}

function openReader(book, full) {
  if(!book) return;
  currentBook = book;
  isFullAccess = full || !!purchasedBooks[book.id];
  var rt = document.getElementById('r-title');
  if(rt) rt.textContent = book.title + ' \u2014 ' + book.author;
  var tl = document.getElementById('toc-list');
  if(tl) {
    var html = '';
    book.chapters.forEach(function(ch, i) {
      var locked = !isFullAccess && i > 0;
      html += '<button class="toc-btn' + (locked?' locked':'') + (i===0?' active':'') + '"'
        + ' onclick="' + (locked ? 'openCheckout(currentBook)' : 'readChapter('+i+')') + '">'
        + ch.title + (locked ? '<span class="toc-lock">&#128274;</span>' : '')
        + '</button>';
    });
    tl.innerHTML = html;
  }
  readChapter(0);
  showView('reader');
  var dl = document.getElementById('dl-btn');
  if(dl) dl.style.opacity = isFullAccess ? '1' : '0.4';
}

function openReaderAudio() { openReader(currentBook, true); setTimeout(toggleAudio, 400); }

function readChapter(idx) {
  var book = currentBook;
  if(!book) return;
  var ch = book.chapters[idx];
  // Only chapter 0 is free; everything else requires purchase
  var locked = !isFullAccess && idx > 0;
  document.querySelectorAll('.toc-btn').forEach(function(b, i){ b.classList.toggle('active', i===idx); });
  var pf = document.getElementById('r-progress');
  if(pf) pf.style.width = Math.round((idx+1)/book.chapters.length*100) + '%';
  if(locked){ openCheckout(book); return; }

  // Get text — only ch1 is shown free
  var rawText = idx === 0 ? (book.ch1||'') : (book['ch'+(idx+1)]||'');

  // Split into readable paragraphs (80-100 words each)
  var paras = [];
  if(rawText) {
    var words = rawText.split(/\s+/);
    var para = '';
    var wcount = 0;
    words.forEach(function(w) {
      if(!w) return;
      para += w + ' ';
      wcount++;
      // Break on sentence end near 80+ words, or hard break at 120
      var endsWithPunct = /[.!?]\s*$/.test(para.trim());
      if(wcount >= 80 && endsWithPunct || wcount >= 120) {
        paras.push(para.trim());
        para = '';
        wcount = 0;
      }
    });
    if(para.trim()) paras.push(para.trim());
  } else {
    paras = ['Chapter text loads from the secure server after purchase. You have full access to this book.'];
  }

  // Build PDF-style document reader
  var html = '';
  html += '<div class="pdf-chapter-header">';
  html += '<div class="pdf-chapter-label">Chapter ' + (idx+1) + '</div>';
  html += '<div class="pdf-chapter-title">' + ch.title + '</div>';
  html += '<div class="pdf-chapter-book">' + book.title + '</div>';
  html += '<div class="pdf-chapter-rule"></div>';
  html += '</div>';

  html += '<div class="pdf-pages">';

  var isFirstPara = true;
  var currentPageParas = [];
  var pageCount = 0;
  var parasPerPage = 4;

  // Group into "pages"
  for(var pi = 0; pi < paras.length; pi += parasPerPage) {
    var pageParagraphs = paras.slice(pi, pi + parasPerPage);
    pageCount++;
    html += '<div class="pdf-page">';
    html += '<div class="pdf-page-content">';
    pageParagraphs.forEach(function(p, li) {
      var isFirst = (pi === 0 && li === 0);
      html += '<p class="pdf-para' + (isFirst ? ' pdf-dropcap' : '') + '" style="font-size:' + readerFontSize + 'px">';
      if(isFirst) {
        // Drop cap on first letter
        var first = p.charAt(0);
        var rest = p.slice(1);
        html += '<span class="dropcap">' + first + '</span>' + rest;
      } else {
        html += p;
      }
      html += '</p>';
    });
    html += '</div>';
    html += '<div class="pdf-page-num">' + (pi/parasPerPage + 1) + '</div>';
    html += '</div>';
  }

  html += '</div>';

  // Paywall after ch1 if not purchased
  if(!isFullAccess && idx === 0) {
    html += '<div class="paywall-zone">';
    html += '<div class="paywall-fade"><div class="paywall-card">';
    html += '<span class="pw-icon">&#128218;</span>';
    html += '<div class="pw-title">End of free preview</div>';
    html += '<p class="pw-desc">You have finished Chapter 1. Unlock the full book to continue reading every chapter, download the PDF, and listen with AI narration.</p>';
    html += '<div class="pw-price">' + book.currency + ' ' + book.price + '</div>';
    html += '<div class="pw-sub">One-time payment &middot; Full access &middot; PDF + AI Audio included</div>';
    html += '<button class="btn-purchase" onclick="openCheckout(currentBook)">Unlock Full Book &mdash; ' + book.currency + ' ' + book.price + '</button>';
    html += '</div></div>';
    html += '</div>';
  }

  var rc = document.getElementById('reader-content');
  if(rc) rc.innerHTML = html;
  audioWords = paras.join(' ').split(' ').filter(function(w){ return w.length > 0; });
  stopAudio();
}


function changeFontSize(d) {
  readerFontSize = Math.max(14, Math.min(26, readerFontSize + d));
  // Target both old rpara class and new pdf-para class
  document.querySelectorAll('.rpara, .pdf-para').forEach(function(p){
    p.style.fontSize = readerFontSize + 'px';
  });
  // Also update line-height on pdf-pages for readability
  document.querySelectorAll('.pdf-page-content').forEach(function(el){
    el.style.lineHeight = readerFontSize > 20 ? '2.2' : '2';
  });
}

function handleDownload() {
  if(!currentBook) return;
  if(!purchasedBooks[currentBook.id]){ openCheckout(currentBook); return; }
  alert('Downloading "' + currentBook.title + '.pdf"\nIn production this links to the secure PDF on the server.');
}

function toggleAudio() {
  var panel = document.getElementById('audio-panel');
  if(!panel) return;
  if(panel.classList.contains('open')){ closeAudio(); }
  else {
    if(!isFullAccess){ openCheckout(currentBook); return; }
    panel.classList.add('open');
    var tb = document.getElementById('audio-toggle-btn');
    if(tb) tb.classList.add('on');
    initAudio();
  }
}

function closeAudio() {
  stopAudio();
  var panel = document.getElementById('audio-panel');
  if(panel) panel.classList.remove('open');
  var tb = document.getElementById('audio-toggle-btn');
  if(tb) tb.classList.remove('on');
}

function initAudio() {
  var speed = parseFloat(document.getElementById('speed-select').value || '1');
  var total = Math.round(audioWords.length / 150 * 60 / speed);
  var te = document.getElementById('a-total');
  var se = document.getElementById('audio-seek');
  var ce = document.getElementById('a-current');
  if(te) te.textContent = fmtTime(total);
  if(se) se.value = 0;
  if(ce) ce.textContent = '0:00';
  setStatus('Ready \u2014 ' + audioWords.length + ' words');
}

function togglePlay() { if(audioPlaying) pauseAudio(); else startAudio(); }

function startAudio() {
  audioPlaying = true;
  var pb = document.getElementById('play-btn');
  var pd = document.getElementById('pdot');
  if(pb) pb.innerHTML = '&#9646;&#9646;';
  if(pd) pd.classList.add('playing');
  setStatus('Playing...');
  if(synth) {
    synth.cancel();
    var txt = audioWords.join(' ');
    currentUtterance = new SpeechSynthesisUtterance(txt);
    currentUtterance.rate = parseFloat(document.getElementById('speed-select').value || '1');
    var voices = synth.getVoices();
    var vv = document.getElementById('voice-select').value || '';
    voices.forEach(function(v) {
      if(vv.indexOf('GB') >= 0 && v.lang.indexOf('en-GB') >= 0) currentUtterance.voice = v;
      else if(vv.indexOf('AU') >= 0 && v.lang.indexOf('en-AU') >= 0) currentUtterance.voice = v;
    });
    currentUtterance.onboundary = function(e) {
      if(e.name === 'word') {
        var prog = e.charIndex / txt.length * 100;
        var spd = parseFloat(document.getElementById('speed-select').value || '1');
        var tot = audioWords.length / 150 * 60 / spd;
        var seek = document.getElementById('audio-seek');
        var cur = document.getElementById('a-current');
        if(seek) seek.value = prog;
        if(cur) cur.textContent = fmtTime(Math.round(tot * prog / 100));
      }
    };
    currentUtterance.onend = function() {
      audioPlaying = false;
      var pb2 = document.getElementById('play-btn');
      var pd2 = document.getElementById('pdot');
      if(pb2) pb2.innerHTML = '&#9654;';
      if(pd2) pd2.classList.remove('playing');
      setStatus('Complete');
    };
    synth.speak(currentUtterance);
  } else { simulateProgress(); }
}

function pauseAudio() {
  audioPlaying = false;
  var pb = document.getElementById('play-btn');
  var pd = document.getElementById('pdot');
  if(pb) pb.innerHTML = '&#9654;';
  if(pd) pd.classList.remove('playing');
  if(synth) synth.pause();
  clearInterval(audioInterval);
  setStatus('Paused');
}

function stopAudio() {
  audioPlaying = false;
  clearInterval(audioInterval);
  var pb = document.getElementById('play-btn');
  var pd = document.getElementById('pdot');
  if(pb) pb.innerHTML = '&#9654;';
  if(pd) pd.classList.remove('playing');
  if(synth) synth.cancel();
}

function simulateProgress() {
  var spd = parseFloat(document.getElementById('speed-select').value || '1');
  var tot = audioWords.length / 150 * 60 / spd;
  var prog = 0;
  audioInterval = setInterval(function() {
    if(!audioPlaying){ clearInterval(audioInterval); return; }
    prog += (100/tot) * 0.1;
    if(prog >= 100){
      prog = 100; clearInterval(audioInterval); audioPlaying = false;
      var pb = document.getElementById('play-btn');
      var pd = document.getElementById('pdot');
      if(pb) pb.innerHTML = '&#9654;';
      if(pd) pd.classList.remove('playing');
      setStatus('Complete');
    }
    var s = document.getElementById('audio-seek');
    var c = document.getElementById('a-current');
    if(s) s.value = prog;
    if(c) c.textContent = fmtTime(Math.round(tot * prog / 100));
  }, 100);
}

function seekAudio(val) {
  if(synth){ synth.cancel(); audioPlaying = false; }
  clearInterval(audioInterval);
  var pb = document.getElementById('play-btn');
  var pd = document.getElementById('pdot');
  if(pb) pb.innerHTML = '&#9654;';
  if(pd) pd.classList.remove('playing');
  var spd = parseFloat(document.getElementById('speed-select').value || '1');
  var tot = audioWords.length / 150 * 60 / spd;
  var c = document.getElementById('a-current');
  if(c) c.textContent = fmtTime(Math.round(tot * val / 100));
  setStatus('Seeked \u2014 press play');
}

function changeVoice() { if(audioPlaying){ pauseAudio(); startAudio(); } }
function changeSpeed() { initAudio(); }
function fmtTime(s) { var m=Math.floor(s/60); var sec=Math.round(s%60); return m+':'+(sec<10?'0':'')+sec; }
function setStatus(msg) { var el=document.getElementById('audio-status'); if(el) el.textContent=msg; }

function openCheckout(book) {
  if(!book) return;
  currentBook = book;
  var ms = document.getElementById('modal-sub');
  var mo = document.getElementById('modal-order');
  if(ms) ms.textContent = book.title + ' by ' + book.author;
  if(mo) mo.innerHTML = '<div class="order-row"><span>' + book.title + '</span><span>' + book.currency + ' ' + book.price + '</span></div>'
    + '<div class="order-row"><span>PDF Download</span><span>Included</span></div>'
    + '<div class="order-row"><span>AI Audio Narration</span><span>Included</span></div>'
    + '<div class="order-row total"><span>Total</span><span>' + book.currency + ' ' + book.price + '</span></div>';
  var m = document.getElementById('checkout-modal');
  if(m) m.classList.add('open');
}

function closeCheckout() {
  var m = document.getElementById('checkout-modal');
  if(m) m.classList.remove('open');
}

function completeCheckout() {
  if(!currentBook) return;
  purchasedBooks[currentBook.id] = true;
  closeCheckout();
  var st = document.getElementById('s-title');
  if(st) st.textContent = currentBook.title;
  showView('success');
  populateHome();
  populateBrowse();
  updateLibNav();
}

document.getElementById('checkout-modal').addEventListener('click', function(e){ if(e.target===this) closeCheckout(); });
if(synth) synth.onvoiceschanged = function(){};
populateHome();
populateBrowse();
