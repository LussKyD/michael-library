// DRACO Library — SVG Background Scenes
// DRACO iNC — A DRACO DYNASTY Technology Department

var SVG_HERO = `<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="hglow" cx="50%" cy="60%" r="70%">
    <stop offset="0%" stop-color="#2a1c08"/>
    <stop offset="60%" stop-color="#0f0c05"/>
    <stop offset="100%" stop-color="#0A0A0F"/>
  </radialGradient>
  <radialGradient id="lamp1" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lamp2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="arch" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#1a1005"/>
    <stop offset="100%" stop-color="#0A0A0F"/>
  </linearGradient>
  <filter id="blur1"><feGaussianBlur stdDeviation="18"/></filter>
  <filter id="blur2"><feGaussianBlur stdDeviation="6"/></filter>
</defs>

<!-- Base -->
<rect width="1440" height="900" fill="url(#hglow)"/>

<!-- Warm candlelight glows -->
<ellipse cx="720" cy="420" rx="500" ry="320" fill="url(#lamp1)" filter="url(#blur1)"/>
<ellipse cx="200" cy="300" rx="180" ry="120" fill="url(#lamp2)" filter="url(#blur1)"/>
<ellipse cx="1240" cy="280" rx="180" ry="120" fill="url(#lamp2)" filter="url(#blur1)"/>

<!-- Floor -->
<rect x="0" y="760" width="1440" height="140" fill="#0d0b06"/>
<rect x="0" y="758" width="1440" height="4" fill="#8B6914" opacity="0.3"/>

<!-- Back wall -->
<rect x="0" y="0" width="1440" height="760" fill="#0f0c07" opacity="0.4"/>

<!-- === LEFT BOOKSHELF UNIT === -->
<rect x="0" y="0" width="185" height="760" fill="#0d0b06"/>
<!-- Shelf boards -->
<rect x="0" y="120" width="185" height="8" fill="#6b4c18"/>
<rect x="0" y="255" width="185" height="8" fill="#6b4c18"/>
<rect x="0" y="390" width="185" height="8" fill="#6b4c18"/>
<rect x="0" y="525" width="185" height="8" fill="#6b4c18"/>
<rect x="0" y="660" width="185" height="8" fill="#6b4c18"/>
<!-- Shelf 1 books -->
<rect x="5" y="35" width="18" height="85" rx="1" fill="#7a3a1a"/>
<rect x="25" y="42" width="14" height="78" rx="1" fill="#1a3a5c"/>
<rect x="41" y="30" width="20" height="90" rx="1" fill="#4a2e0f"/>
<rect x="63" y="38" width="16" height="82" rx="1" fill="#8B6914"/>
<rect x="81" y="45" width="22" height="75" rx="1" fill="#2a4a1a"/>
<rect x="105" y="33" width="17" height="87" rx="1" fill="#5c2a0a"/>
<rect x="124" y="40" width="19" height="80" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="145" y="36" width="15" height="84" rx="1" fill="#1a2a4a"/>
<rect x="162" y="44" width="21" height="76" rx="1" fill="#6b2a1a"/>
<!-- Shelf 2 books -->
<rect x="5" y="170" width="20" height="85" rx="1" fill="#2a1a5c"/>
<rect x="27" y="178" width="15" height="77" rx="1" fill="#5c3a1a"/>
<rect x="44" y="165" width="18" height="90" rx="1" fill="#8B6914"/>
<rect x="64" y="172" width="22" height="83" rx="1" fill="#1a4a1a"/>
<rect x="88" y="168" width="16" height="87" rx="1" fill="#7a2a1a"/>
<rect x="106" y="175" width="19" height="80" rx="1" fill="#2a3a5c"/>
<rect x="127" y="163" width="14" height="92" rx="1" fill="#5c4a1a"/>
<rect x="143" y="170" width="21" height="85" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="166" y="176" width="17" height="79" rx="1" fill="#3a1a2a"/>
<!-- Shelf 3 books -->
<rect x="5" y="305" width="16" height="85" rx="1" fill="#8B6914"/>
<rect x="23" y="312" width="20" height="78" rx="1" fill="#1a2a5c"/>
<rect x="45" y="300" width="15" height="90" rx="1" fill="#4a1a1a"/>
<rect x="62" y="308" width="22" height="82" rx="1" fill="#2a5c1a"/>
<rect x="86" y="303" width="18" height="87" rx="1" fill="#5c3a0a"/>
<rect x="106" y="310" width="14" height="80" rx="1" fill="#8B6914" opacity="0.8"/>
<rect x="122" y="306" width="21" height="84" rx="1" fill="#1a3a5c"/>
<rect x="145" y="313" width="17" height="77" rx="1" fill="#6b1a2a"/>
<rect x="164" y="300" width="19" height="90" rx="1" fill="#3a2a0a"/>
<!-- Shelf 4 books -->
<rect x="5" y="440" width="22" height="85" rx="1" fill="#1a1a5c"/>
<rect x="29" y="448" width="16" height="77" rx="1" fill="#7a4a0a"/>
<rect x="47" y="435" width="19" height="90" rx="1" fill="#8B6914" opacity="0.9"/>
<rect x="68" y="442" width="14" height="83" rx="1" fill="#2a4a2a"/>
<rect x="84" y="437" width="21" height="88" rx="1" fill="#5c1a1a"/>
<rect x="107" y="445" width="17" height="80" rx="1" fill="#1a4a3a"/>
<rect x="126" y="438" width="20" height="87" rx="1" fill="#4a3a0a"/>
<rect x="148" y="443" width="15" height="82" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="165" y="436" width="18" height="89" rx="1" fill="#2a1a4a"/>
<!-- Shelf 5 books -->
<rect x="5" y="575" width="17" height="85" rx="1" fill="#5c2a0a"/>
<rect x="24" y="582" width="21" height="78" rx="1" fill="#1a3a2a"/>
<rect x="47" y="570" width="15" height="90" rx="1" fill="#8B6914"/>
<rect x="64" y="577" width="20" height="83" rx="1" fill="#3a1a5c"/>
<rect x="86" y="572" width="18" height="88" rx="1" fill="#6b3a0a"/>
<rect x="106" y="579" width="14" height="81" rx="1" fill="#2a2a5c"/>
<rect x="122" y="573" width="22" height="87" rx="1" fill="#1a5c1a"/>
<rect x="146" y="580" width="16" height="80" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="164" y="574" width="19" height="86" rx="1" fill="#4a1a2a"/>
<!-- Vertical dividers -->
<rect x="183" y="0" width="3" height="760" fill="#3a2a0a"/>
<rect x="184" y="0" width="1" height="760" fill="#8B6914" opacity="0.2"/>

<!-- === RIGHT BOOKSHELF UNIT === -->
<rect x="1255" y="0" width="185" height="760" fill="#0d0b06"/>
<rect x="1255" y="120" width="185" height="8" fill="#6b4c18"/>
<rect x="1255" y="255" width="185" height="8" fill="#6b4c18"/>
<rect x="1255" y="390" width="185" height="8" fill="#6b4c18"/>
<rect x="1255" y="525" width="185" height="8" fill="#6b4c18"/>
<rect x="1255" y="660" width="185" height="8" fill="#6b4c18"/>
<!-- Right shelf books row 1 -->
<rect x="1258" y="35" width="19" height="85" rx="1" fill="#2a4a5c"/>
<rect x="1279" y="42" width="15" height="78" rx="1" fill="#7a3a0a"/>
<rect x="1296" y="30" width="22" height="90" rx="1" fill="#8B6914"/>
<rect x="1320" y="38" width="17" height="82" rx="1" fill="#3a2a5c"/>
<rect x="1339" y="45" width="20" height="75" rx="1" fill="#5c1a1a"/>
<rect x="1361" y="33" width="14" height="87" rx="1" fill="#1a5c2a"/>
<rect x="1377" y="40" width="21" height="80" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="1400" y="36" width="16" height="84" rx="1" fill="#4a2a1a"/>
<rect x="1418" y="44" width="18" height="76" rx="1" fill="#2a1a5c"/>
<!-- Right shelf books row 2 -->
<rect x="1258" y="170" width="16" height="85" rx="1" fill="#6b3a0a"/>
<rect x="1276" y="178" width="22" height="77" rx="1" fill="#1a2a5c"/>
<rect x="1300" y="165" width="18" height="90" rx="1" fill="#8B6914" opacity="0.8"/>
<rect x="1320" y="172" width="15" height="83" rx="1" fill="#4a1a2a"/>
<rect x="1337" y="168" width="20" height="87" rx="1" fill="#2a5c1a"/>
<rect x="1359" y="175" width="17" height="80" rx="1" fill="#5c4a0a"/>
<rect x="1378" y="163" width="14" height="92" rx="1" fill="#1a3a5c"/>
<rect x="1394" y="170" width="23" height="85" rx="1" fill="#8B6914" opacity="0.5"/>
<rect x="1419" y="176" width="18" height="79" rx="1" fill="#3a1a4a"/>
<!-- Right shelf rows 3-5 (abbreviated for performance) -->
<rect x="1258" y="305" width="20" height="85" rx="1" fill="#8B6914"/>
<rect x="1280" y="312" width="16" height="78" rx="1" fill="#2a1a5c"/>
<rect x="1298" y="300" width="22" height="90" rx="1" fill="#5c2a0a"/>
<rect x="1322" y="308" width="15" height="82" rx="1" fill="#1a4a2a"/>
<rect x="1339" y="303" width="19" height="87" rx="1" fill="#6b1a1a"/>
<rect x="1360" y="310" width="21" height="80" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="1383" y="306" width="17" height="84" rx="1" fill="#2a3a5c"/>
<rect x="1402" y="313" width="14" height="77" rx="1" fill="#4a3a0a"/>
<rect x="1418" y="300" width="20" height="90" rx="1" fill="#1a2a4a"/>
<rect x="1258" y="440" width="18" height="85" rx="1" fill="#5c1a2a"/>
<rect x="1278" y="448" width="22" height="77" rx="1" fill="#8B6914" opacity="0.9"/>
<rect x="1302" y="435" width="15" height="90" rx="1" fill="#2a4a5c"/>
<rect x="1319" y="442" width="20" height="83" rx="1" fill="#7a4a0a"/>
<rect x="1341" y="437" width="16" height="88" rx="1" fill="#1a5c3a"/>
<rect x="1359" y="445" width="23" height="80" rx="1" fill="#4a2a1a"/>
<rect x="1384" y="438" width="17" height="87" rx="1" fill="#8B6914" opacity="0.5"/>
<rect x="1403" y="443" width="19" height="82" rx="1" fill="#3a1a5c"/>
<rect x="1424" y="436" width="14" height="89" rx="1" fill="#5c3a0a"/>
<rect x="1258" y="575" width="21" height="85" rx="1" fill="#1a3a5c"/>
<rect x="1281" y="582" width="17" height="78" rx="1" fill="#7a2a0a"/>
<rect x="1300" y="570" width="19" height="90" rx="1" fill="#8B6914"/>
<rect x="1321" y="577" width="14" height="83" rx="1" fill="#2a5c2a"/>
<rect x="1337" y="572" width="22" height="88" rx="1" fill="#4a1a3a"/>
<rect x="1361" y="579" width="16" height="81" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="1379" y="573" width="20" height="87" rx="1" fill="#1a2a5c"/>
<rect x="1401" y="580" width="18" height="80" rx="1" fill="#6b3a0a"/>
<rect x="1421" y="574" width="15" height="86" rx="1" fill="#3a2a1a"/>
<rect x="1253" y="0" width="3" height="760" fill="#3a2a0a"/>
<rect x="1255" y="0" width="1" height="760" fill="#8B6914" opacity="0.2"/>

<!-- === CENTRE ARCHWAY === -->
<path d="M500,760 L500,200 Q500,80 720,80 Q940,80 940,200 L940,760 Z" fill="#0d0b06"/>
<path d="M510,760 L510,205 Q510,95 720,95 Q930,95 930,205 L930,760 Z" fill="#0f0c07"/>
<!-- Archway frame -->
<path d="M500,760 L500,200 Q500,80 720,80 Q940,80 940,200 L940,760" fill="none" stroke="#8B6914" stroke-width="4" opacity="0.6"/>
<path d="M508,760 L508,203 Q508,88 720,88 Q932,88 932,203 L932,760" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.25"/>
<!-- Archway decorative keystone -->
<polygon points="720,60 700,90 740,90" fill="#8B6914" opacity="0.7"/>
<rect x="715" y="55" width="10" height="8" fill="#C9A84C" opacity="0.5"/>
<!-- Archway pillar left -->
<rect x="494" y="200" width="16" height="560" fill="#1a1408"/>
<rect x="494" y="200" width="2" height="560" fill="#8B6914" opacity="0.4"/>
<rect x="508" y="200" width="2" height="560" fill="#8B6914" opacity="0.15"/>
<!-- Archway pillar right -->
<rect x="930" y="200" width="16" height="560" fill="#1a1408"/>
<rect x="942" y="200" width="2" height="560" fill="#8B6914" opacity="0.4"/>
<rect x="930" y="200" width="2" height="560" fill="#8B6914" opacity="0.15"/>

<!-- === READING TABLE INSIDE ARCH === -->
<rect x="580" y="600" width="280" height="16" rx="3" fill="#3a2a0a"/>
<rect x="578" y="598" width="284" height="5" rx="2" fill="#8B6914" opacity="0.5"/>
<rect x="590" y="616" width="12" height="120" fill="#2a1a08"/>
<rect x="838" y="616" width="12" height="120" fill="#2a1a08"/>
<!-- Table lamp -->
<rect x="717" y="520" width="6" height="82" fill="#5c4a18"/>
<ellipse cx="720" cy="520" rx="42" ry="22" fill="#C9A84C" opacity="0.8"/>
<ellipse cx="720" cy="542" rx="55" ry="8" fill="#C9A84C" opacity="0.12" filter="url(#blur2)"/>
<!-- Lamp glow on table surface -->
<ellipse cx="720" cy="598" rx="120" ry="25" fill="#C9A84C" opacity="0.08"/>
<!-- Open book on table -->
<path d="M640,598 Q720,575 800,598" fill="#F0EDE8" opacity="0.85"/>
<line x1="720" y1="575" x2="720" y2="598" stroke="#8B6914" stroke-width="1.5" opacity="0.7"/>
<line x1="650" y1="590" x2="718" y2="580" stroke="#8B8070" stroke-width="0.6" opacity="0.5"/>
<line x1="650" y1="594" x2="718" y2="585" stroke="#8B8070" stroke-width="0.6" opacity="0.5"/>
<line x1="722" y1="580" x2="790" y2="590" stroke="#8B8070" stroke-width="0.6" opacity="0.5"/>
<line x1="722" y1="585" x2="790" y2="594" stroke="#8B8070" stroke-width="0.6" opacity="0.5"/>

<!-- === CANDLES ON SIDE SHELVES === -->
<rect x="88" y="108" width="5" height="14" fill="#F0EDE8"/>
<ellipse cx="90" cy="108" rx="3" ry="2" fill="#C9A84C" opacity="0.9"/>
<ellipse cx="90" cy="105" rx="12" ry="8" fill="#C9A84C" opacity="0.2" filter="url(#blur2)"/>
<rect x="140" y="243" width="5" height="14" fill="#F0EDE8"/>
<ellipse cx="142" cy="243" rx="3" ry="2" fill="#C9A84C" opacity="0.9"/>
<ellipse cx="142" cy="240" rx="12" ry="8" fill="#C9A84C" opacity="0.18" filter="url(#blur2)"/>
<rect x="1310" y="108" width="5" height="14" fill="#F0EDE8"/>
<ellipse cx="1312" cy="108" rx="3" ry="2" fill="#C9A84C" opacity="0.9"/>
<ellipse cx="1312" cy="105" rx="12" ry="8" fill="#C9A84C" opacity="0.2" filter="url(#blur2)"/>
<rect x="1360" y="243" width="5" height="14" fill="#F0EDE8"/>
<ellipse cx="1362" cy="243" rx="3" ry="2" fill="#C9A84C" opacity="0.9"/>

<!-- Gold horizontal rule at bottom -->
<rect x="0" y="756" width="1440" height="2" fill="#8B6914" opacity="0.3"/>
<!-- Subtle floor tiles -->
<line x1="0" y1="800" x2="1440" y2="800" stroke="#8B6914" stroke-width="0.5" opacity="0.12"/>
<line x1="0" y1="850" x2="1440" y2="850" stroke="#8B6914" stroke-width="0.5" opacity="0.12"/>
<line x1="240" y1="756" x2="240" y2="900" stroke="#8B6914" stroke-width="0.5" opacity="0.08"/>
<line x1="480" y1="756" x2="480" y2="900" stroke="#8B6914" stroke-width="0.5" opacity="0.08"/>
<line x1="720" y1="756" x2="720" y2="900" stroke="#8B6914" stroke-width="0.5" opacity="0.08"/>
<line x1="960" y1="756" x2="960" y2="900" stroke="#8B6914" stroke-width="0.5" opacity="0.08"/>
<line x1="1200" y1="756" x2="1200" y2="900" stroke="#8B6914" stroke-width="0.5" opacity="0.08"/>
</svg>`;

var SVG_BROWSE = `<svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bbg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#12121A"/>
    <stop offset="100%" stop-color="#0A0A0F"/>
  </linearGradient>
  <radialGradient id="bglow" cx="50%" cy="0%" r="60%">
    <stop offset="0%" stop-color="#1a1a08" stop-opacity="0.8"/>
    <stop offset="100%" stop-color="#0A0A0F" stop-opacity="0"/>
  </radialGradient>
  <filter id="bblur"><feGaussianBlur stdDeviation="12"/></filter>
</defs>
<rect width="1440" height="320" fill="url(#bbg)"/>
<rect width="1440" height="320" fill="url(#bglow)"/>

<!-- Gold top border -->
<rect x="0" y="0" width="1440" height="3" fill="#C9A84C" opacity="0.5"/>
<rect x="0" y="3" width="1440" height="1" fill="#C9A84C" opacity="0.15"/>

<!-- Book spine pattern — full row across the top -->
<g opacity="0.22">
  <!-- Row of book spines along top edge -->
  <rect x="0" y="8" width="22" height="90" rx="1" fill="#7a3a1a"/>
  <rect x="24" y="14" width="16" height="84" rx="1" fill="#1a3a5c"/>
  <rect x="42" y="6" width="20" height="96" rx="1" fill="#4a2e0f"/>
  <rect x="64" y="10" width="18" height="92" rx="1" fill="#8B6914"/>
  <rect x="84" y="16" width="24" height="86" rx="1" fill="#2a4a1a"/>
  <rect x="110" y="8" width="15" height="94" rx="1" fill="#5c2a0a"/>
  <rect x="127" y="12" width="21" height="90" rx="1" fill="#8B6914" opacity="0.7"/>
  <rect x="150" y="7" width="17" height="95" rx="1" fill="#1a2a4a"/>
  <rect x="169" y="14" width="23" height="88" rx="1" fill="#6b2a1a"/>
  <rect x="194" y="9" width="19" height="93" rx="1" fill="#3a4a0a"/>
  <rect x="215" y="15" width="16" height="87" rx="1" fill="#2a1a5c"/>
  <rect x="233" y="6" width="22" height="96" rx="1" fill="#8B6914"/>
  <rect x="257" y="11" width="18" height="91" rx="1" fill="#5c1a2a"/>
  <rect x="277" y="8" width="20" height="94" rx="1" fill="#1a4a3a"/>
  <rect x="299" y="14" width="15" height="88" rx="1" fill="#7a4a0a"/>
  <rect x="316" y="7" width="23" height="95" rx="1" fill="#8B6914" opacity="0.6"/>
  <rect x="341" y="12" width="17" height="90" rx="1" fill="#2a2a5c"/>
  <rect x="360" y="9" width="21" height="93" rx="1" fill="#4a1a1a"/>
  <rect x="383" y="6" width="16" height="96" rx="1" fill="#1a5c1a"/>
  <rect x="401" y="13" width="24" height="89" rx="1" fill="#6b3a0a"/>
  <rect x="427" y="8" width="18" height="94" rx="1" fill="#8B6914"/>
  <rect x="447" y="15" width="20" height="87" rx="1" fill="#3a1a5c"/>
  <rect x="469" y="7" width="15" height="95" rx="1" fill="#5c2a1a"/>
  <rect x="486" y="11" width="22" height="91" rx="1" fill="#1a3a5c"/>
  <rect x="510" y="8" width="17" height="94" rx="1" fill="#8B6914" opacity="0.8"/>
  <rect x="529" y="14" width="21" height="88" rx="1" fill="#4a3a0a"/>
  <rect x="552" y="6" width="19" height="96" rx="1" fill="#2a4a5c"/>
  <rect x="573" y="10" width="16" height="92" rx="1" fill="#7a2a1a"/>
  <rect x="591" y="8" width="23" height="94" rx="1" fill="#8B6914" opacity="0.5"/>
  <rect x="616" y="13" width="18" height="89" rx="1" fill="#1a5c2a"/>
  <rect x="636" y="7" width="20" height="95" rx="1" fill="#3a2a5c"/>
  <rect x="658" y="11" width="15" height="91" rx="1" fill="#6b4a0a"/>
  <rect x="675" y="8" width="22" height="94" rx="1" fill="#8B6914"/>
  <rect x="699" y="14" width="17" height="88" rx="1" fill="#2a1a4a"/>
  <rect x="718" y="6" width="21" height="96" rx="1" fill="#5c1a1a"/>
  <rect x="741" y="10" width="16" height="92" rx="1" fill="#1a4a5c"/>
  <rect x="759" y="8" width="24" height="94" rx="1" fill="#8B6914" opacity="0.7"/>
  <rect x="785" y="13" width="18" height="89" rx="1" fill="#4a2a1a"/>
  <rect x="805" y="7" width="20" height="95" rx="1" fill="#2a5c1a"/>
  <rect x="827" y="11" width="15" height="91" rx="1" fill="#7a3a0a"/>
  <rect x="844" y="8" width="22" height="94" rx="1" fill="#8B6914" opacity="0.6"/>
  <rect x="868" y="14" width="19" height="88" rx="1" fill="#1a2a5c"/>
  <rect x="889" y="6" width="17" height="96" rx="1" fill="#5c3a0a"/>
  <rect x="908" y="10" width="23" height="92" rx="1" fill="#8B6914"/>
  <rect x="933" y="8" width="16" height="94" rx="1" fill="#2a3a4a"/>
  <rect x="951" y="14" width="21" height="88" rx="1" fill="#6b1a2a"/>
  <rect x="974" y="7" width="18" height="95" rx="1" fill="#1a5c3a"/>
  <rect x="994" y="11" width="20" height="91" rx="1" fill="#8B6914" opacity="0.5"/>
  <rect x="1016" y="8" width="15" height="94" rx="1" fill="#4a1a4a"/>
  <rect x="1033" y="13" width="22" height="89" rx="1" fill="#7a4a1a"/>
  <rect x="1057" y="6" width="17" height="96" rx="1" fill="#2a2a5c"/>
  <rect x="1076" y="10" width="21" height="92" rx="1" fill="#8B6914"/>
  <rect x="1099" y="8" width="16" height="94" rx="1" fill="#5c1a3a"/>
  <rect x="1117" y="14" width="23" height="88" rx="1" fill="#1a4a2a"/>
  <rect x="1142" y="7" width="18" height="95" rx="1" fill="#6b3a1a"/>
  <rect x="1162" y="11" width="20" height="91" rx="1" fill="#8B6914" opacity="0.7"/>
  <rect x="1184" y="8" width="15" height="94" rx="1" fill="#2a1a5c"/>
  <rect x="1201" y="13" width="22" height="89" rx="1" fill="#5c4a0a"/>
  <rect x="1225" y="6" width="17" height="96" rx="1" fill="#1a3a5c"/>
  <rect x="1244" y="10" width="21" height="92" rx="1" fill="#8B6914" opacity="0.6"/>
  <rect x="1267" y="8" width="19" height="94" rx="1" fill="#4a2a2a"/>
  <rect x="1288" y="14" width="16" height="88" rx="1" fill="#2a5c1a"/>
  <rect x="1306" y="7" width="23" height="95" rx="1" fill="#7a2a0a"/>
  <rect x="1331" y="11" width="18" height="91" rx="1" fill="#8B6914"/>
  <rect x="1351" y="8" width="20" height="94" rx="1" fill="#1a2a4a"/>
  <rect x="1373" y="13" width="15" height="89" rx="1" fill="#5c2a2a"/>
  <rect x="1390" y="6" width="22" height="96" rx="1" fill="#8B6914" opacity="0.5"/>
  <rect x="1414" y="10" width="17" height="92" rx="1" fill="#3a1a4a"/>
  <rect x="1433" y="8" width="7" height="94" rx="1" fill="#6b4a0a"/>
</g>

<!-- Shelf board under spines -->
<rect x="0" y="102" width="1440" height="6" fill="#6b4c18" opacity="0.4"/>
<rect x="0" y="108" width="1440" height="1" fill="#C9A84C" opacity="0.1"/>

<!-- Educational grid pattern in middle area -->
<g opacity="0.06">
  <line x1="0" y1="150" x2="1440" y2="150" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="0" y1="200" x2="1440" y2="200" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="0" y1="250" x2="1440" y2="250" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="0" y1="300" x2="1440" y2="300" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="100" y1="110" x2="100" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="220" y1="110" x2="220" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="360" y1="110" x2="360" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="520" y1="110" x2="520" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="700" y1="110" x2="700" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="900" y1="110" x2="900" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="1080" y1="110" x2="1080" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="1240" y1="110" x2="1240" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
  <line x1="1380" y1="110" x2="1380" y2="320" stroke="#C9A84C" stroke-width="0.8"/>
</g>

<!-- Warm centre glow -->
<ellipse cx="720" cy="0" rx="600" ry="180" fill="#C9A84C" opacity="0.03" filter="url(#bblur)"/>
</svg>`;

var SVG_MYLIB = `<svg viewBox="0 0 1440 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="lbg" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#1a1208"/>
    <stop offset="40%" stop-color="#12120f"/>
    <stop offset="100%" stop-color="#0a0a18"/>
  </linearGradient>
  <radialGradient id="lglow" cx="62%" cy="50%" r="40%">
    <stop offset="0%" stop-color="#2a1c08" stop-opacity="0.9"/>
    <stop offset="100%" stop-color="#0A0A0F" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="lampglow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.5"/>
    <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
  </radialGradient>
  <filter id="lgblur"><feGaussianBlur stdDeviation="20"/></filter>
  <filter id="lsblur"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="1440" height="300" fill="url(#lbg)"/>
<rect width="1440" height="300" fill="url(#lglow)"/>

<!-- Left bookcase wall -->
<rect x="0" y="0" width="340" height="300" fill="#0f0c08" opacity="0.8"/>
<!-- Left shelves -->
<rect x="0" y="55" width="340" height="6" fill="#6b4c18" opacity="0.7"/>
<rect x="0" y="130" width="340" height="6" fill="#6b4c18" opacity="0.7"/>
<rect x="0" y="205" width="340" height="6" fill="#6b4c18" opacity="0.7"/>
<rect x="0" y="280" width="340" height="6" fill="#6b4c18" opacity="0.7"/>
<!-- Left shelf books row 1 -->
<rect x="5" y="8" width="18" height="47" rx="1" fill="#7a3a1a" opacity="0.8"/>
<rect x="25" y="14" width="14" height="41" rx="1" fill="#1a3a5c" opacity="0.8"/>
<rect x="41" y="6" width="20" height="49" rx="1" fill="#4a2e0f" opacity="0.8"/>
<rect x="63" y="10" width="16" height="45" rx="1" fill="#8B6914" opacity="0.8"/>
<rect x="81" y="15" width="22" height="40" rx="1" fill="#2a4a1a" opacity="0.8"/>
<rect x="105" y="7" width="15" height="48" rx="1" fill="#5c2a0a" opacity="0.8"/>
<rect x="122" y="12" width="19" height="43" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="143" y="8" width="16" height="47" rx="1" fill="#1a2a4a" opacity="0.8"/>
<rect x="161" y="14" width="21" height="41" rx="1" fill="#6b2a1a" opacity="0.8"/>
<rect x="184" y="9" width="17" height="46" rx="1" fill="#3a4a0a" opacity="0.8"/>
<rect x="203" y="15" width="20" height="40" rx="1" fill="#2a1a5c" opacity="0.8"/>
<rect x="225" y="6" width="14" height="49" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="241" y="11" width="22" height="44" rx="1" fill="#5c1a2a" opacity="0.8"/>
<rect x="265" y="8" width="16" height="47" rx="1" fill="#1a4a3a" opacity="0.8"/>
<rect x="283" y="13" width="19" height="42" rx="1" fill="#7a4a0a" opacity="0.8"/>
<rect x="304" y="7" width="15" height="48" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="321" y="12" width="17" height="43" rx="1" fill="#2a2a5c" opacity="0.8"/>
<!-- Left shelf books row 2 -->
<rect x="5" y="83" width="20" height="47" rx="1" fill="#1a2a5c" opacity="0.8"/>
<rect x="27" y="88" width="16" height="42" rx="1" fill="#7a3a0a" opacity="0.8"/>
<rect x="45" y="80" width="18" height="50" rx="1" fill="#8B6914" opacity="0.8"/>
<rect x="65" y="85" width="22" height="45" rx="1" fill="#4a1a2a" opacity="0.8"/>
<rect x="89" y="81" width="15" height="49" rx="1" fill="#2a5c1a" opacity="0.8"/>
<rect x="106" y="87" width="20" height="43" rx="1" fill="#5c4a0a" opacity="0.8"/>
<rect x="128" y="82" width="17" height="48" rx="1" fill="#1a3a5c" opacity="0.8"/>
<rect x="147" y="86" width="14" height="44" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="163" y="80" width="21" height="50" rx="1" fill="#6b1a1a" opacity="0.8"/>
<rect x="186" y="84" width="18" height="46" rx="1" fill="#2a3a5c" opacity="0.8"/>
<rect x="206" y="81" width="16" height="49" rx="1" fill="#5c3a0a" opacity="0.8"/>
<rect x="224" y="87" width="22" height="43" rx="1" fill="#1a5c2a" opacity="0.8"/>
<rect x="248" y="82" width="15" height="48" rx="1" fill="#7a2a2a" opacity="0.8"/>
<rect x="265" y="85" width="19" height="45" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="286" y="80" width="17" height="50" rx="1" fill="#2a4a5c" opacity="0.8"/>
<rect x="305" y="86" width="21" height="44" rx="1" fill="#4a2a0a" opacity="0.8"/>
<rect x="328" y="81" width="10" height="49" rx="1" fill="#8B6914" opacity="0.5"/>
<!-- Row 3 books -->
<rect x="5" y="158" width="17" height="47" rx="1" fill="#5c2a0a" opacity="0.8"/>
<rect x="24" y="163" width="22" height="42" rx="1" fill="#1a3a2a" opacity="0.8"/>
<rect x="48" y="156" width="15" height="49" rx="1" fill="#8B6914" opacity="0.8"/>
<rect x="65" y="161" width="20" height="44" rx="1" fill="#3a1a5c" opacity="0.8"/>
<rect x="87" y="157" width="18" height="48" rx="1" fill="#6b3a0a" opacity="0.8"/>
<rect x="107" y="164" width="16" height="41" rx="1" fill="#2a2a5c" opacity="0.8"/>
<rect x="125" y="158" width="21" height="47" rx="1" fill="#1a5c1a" opacity="0.8"/>
<rect x="148" y="162" width="14" height="43" rx="1" fill="#8B6914" opacity="0.7"/>
<rect x="164" y="157" width="22" height="48" rx="1" fill="#4a1a2a" opacity="0.8"/>
<rect x="188" y="163" width="17" height="42" rx="1" fill="#7a4a0a" opacity="0.8"/>
<rect x="207" y="158" width="20" height="47" rx="1" fill="#1a2a5c" opacity="0.8"/>
<rect x="229" y="162" width="15" height="43" rx="1" fill="#5c2a1a" opacity="0.8"/>
<rect x="246" y="156" width="19" height="49" rx="1" fill="#8B6914" opacity="0.6"/>
<rect x="267" y="161" width="22" height="44" rx="1" fill="#2a4a1a" opacity="0.8"/>
<rect x="291" y="158" width="16" height="47" rx="1" fill="#6b1a3a" opacity="0.8"/>
<rect x="309" y="163" width="20" height="42" rx="1" fill="#3a3a5c" opacity="0.8"/>
<rect x="331" y="157" width="7" height="48" rx="1" fill="#7a3a0a" opacity="0.8"/>
<!-- Shelf vertical divider -->
<rect x="338" y="0" width="3" height="300" fill="#2a1a08"/>
<rect x="339" y="0" width="1" height="300" fill="#8B6914" opacity="0.3"/>

<!-- === READING DESK AREA (centre-right) === -->
<!-- Desk surface -->
<rect x="700" y="200" width="540" height="14" rx="2" fill="#2a1a08"/>
<rect x="698" y="197" width="544" height="6" rx="1" fill="#8B6914" opacity="0.45"/>
<!-- Desk legs -->
<rect x="715" y="214" width="14" height="86" rx="1" fill="#1f1408"/>
<rect x="1210" y="214" width="14" height="86" rx="1" fill="#1f1408"/>

<!-- Desk lamp -->
<rect x="888" y="118" width="5" height="84" fill="#4a3a14"/>
<!-- Lamp arm -->
<path d="M890,118 Q910,100 930,115" stroke="#4a3a14" stroke-width="4" fill="none"/>
<!-- Lamp head -->
<ellipse cx="930" cy="115" rx="36" ry="20" fill="#C9A84C" opacity="0.9"/>
<ellipse cx="930" cy="133" rx="48" ry="9" fill="#C9A84C" opacity="0.15" filter="url(#lsblur)"/>
<!-- Lamp warm glow -->
<ellipse cx="930" cy="180" rx="180" ry="60" fill="url(#lampglow)" filter="url(#lgblur)"/>
<!-- Warm light pool on desk -->
<ellipse cx="920" cy="200" rx="140" ry="22" fill="#C9A84C" opacity="0.07"/>

<!-- Open book on desk -->
<path d="M820,200 Q920,180 1020,200" fill="#F0EDE8" opacity="0.82"/>
<line x1="920" y1="180" x2="920" y2="200" stroke="#8B6914" stroke-width="2" opacity="0.6"/>
<line x1="832" y1="193" x2="918" y2="183" stroke="#8B8070" stroke-width="0.7" opacity="0.45"/>
<line x1="832" y1="197" x2="918" y2="188" stroke="#8B8070" stroke-width="0.7" opacity="0.45"/>
<line x1="922" y1="183" x2="1008" y2="193" stroke="#8B8070" stroke-width="0.7" opacity="0.45"/>
<line x1="922" y1="188" x2="1008" y2="197" stroke="#8B8070" stroke-width="0.7" opacity="0.45"/>

<!-- Stacked books on desk left -->
<rect x="730" y="172" width="70" height="30" rx="1" fill="#3a2a0a"/>
<rect x="733" y="163" width="64" height="12" rx="1" fill="#5c3a10"/>
<rect x="736" y="154" width="58" height="12" rx="1" fill="#7a4a18"/>
<rect x="728" y="170" width="74" height="4" rx="1" fill="#8B6914" opacity="0.4"/>
<rect x="731" y="161" width="68" height="4" rx="1" fill="#8B6914" opacity="0.3"/>
<rect x="734" y="152" width="62" height="4" rx="1" fill="#8B6914" opacity="0.25"/>

<!-- Ink pot and quill on desk right -->
<ellipse cx="1150" cy="199" rx="14" ry="7" fill="#1a1a1a"/>
<rect x="1136" y="176" width="28" height="25" rx="3" fill="#1a1a1a"/>
<ellipse cx="1150" cy="176" rx="14" ry="5" fill="#2a2a2a"/>
<!-- Quill -->
<path d="M1140,175 Q1125,155 1110,130" stroke="#F0EDE8" stroke-width="1.5" fill="none" opacity="0.6"/>
<path d="M1140,175 Q1130,160 1112,132" stroke="#C9A84C" stroke-width="0.5" fill="none" opacity="0.4"/>

<!-- Stars/particles -->
<circle cx="450" cy="30" r="1.2" fill="#C9A84C" opacity="0.4"/>
<circle cx="600" cy="80" r="0.8" fill="#C9A84C" opacity="0.3"/>
<circle cx="1350" cy="40" r="1.2" fill="#C9A84C" opacity="0.35"/>
<circle cx="1280" cy="90" r="0.8" fill="#C9A84C" opacity="0.3"/>
<circle cx="400" cy="150" r="1" fill="#C9A84C" opacity="0.25"/>
<circle cx="550" cy="200" r="0.6" fill="#C9A84C" opacity="0.2"/>
<circle cx="1400" cy="160" r="1" fill="#C9A84C" opacity="0.25"/>
</svg>`;

var SVG_DETAIL = `<svg viewBox="0 0 1440 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
  <radialGradient id="dglow" cx="50%" cy="0%" r="80%">
    <stop offset="0%" stop-color="#1a1408"/>
    <stop offset="100%" stop-color="#0A0A0F"/>
  </radialGradient>
  <radialGradient id="dspot" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.12"/>
    <stop offset="100%" stop-color="#C9A84C" stop-opacity="0"/>
  </radialGradient>
  <filter id="dblur"><feGaussianBlur stdDeviation="16"/></filter>
</defs>
<rect width="1440" height="340" fill="url(#dglow)"/>

<!-- Warm ceiling glow -->
<ellipse cx="720" cy="0" rx="500" ry="200" fill="url(#dspot)" filter="url(#dblur)"/>

<!-- Perspective grid — ceiling to horizon -->
<g opacity="0.1" stroke="#C9A84C" stroke-width="0.7" fill="none">
  <!-- Horizontal lines receding to vanishing point -->
  <line x1="0" y1="340" x2="1440" y2="340"/>
  <line x1="0" y1="280" x2="1440" y2="280"/>
  <line x1="0" y1="220" x2="1440" y2="220"/>
  <line x1="0" y1="160" x2="1440" y2="160"/>
  <line x1="0" y1="100" x2="1440" y2="100"/>
  <line x1="0" y1="50" x2="1440" y2="50"/>
  <!-- Diagonal perspective lines to vanishing point (720, 0) -->
  <line x1="0" y1="340" x2="720" y2="0"/>
  <line x1="160" y1="340" x2="720" y2="0"/>
  <line x1="320" y1="340" x2="720" y2="0"/>
  <line x1="480" y1="340" x2="720" y2="0"/>
  <line x1="640" y1="340" x2="720" y2="0"/>
  <line x1="800" y1="340" x2="720" y2="0"/>
  <line x1="960" y1="340" x2="720" y2="0"/>
  <line x1="1120" y1="340" x2="720" y2="0"/>
  <line x1="1280" y1="340" x2="720" y2="0"/>
  <line x1="1440" y1="340" x2="720" y2="0"/>
</g>

<!-- Architectural columns on each side -->
<!-- Left column 1 -->
<rect x="60" y="0" width="28" height="340" fill="#0f0c08" opacity="0.9"/>
<rect x="60" y="0" width="3" height="340" fill="#8B6914" opacity="0.4"/>
<rect x="85" y="0" width="3" height="340" fill="#8B6914" opacity="0.2"/>
<!-- Left column 2 -->
<rect x="190" y="0" width="22" height="340" fill="#0f0c08" opacity="0.7"/>
<rect x="190" y="0" width="2" height="340" fill="#8B6914" opacity="0.3"/>
<rect x="210" y="0" width="2" height="340" fill="#8B6914" opacity="0.15"/>
<!-- Right column 1 -->
<rect x="1352" y="0" width="28" height="340" fill="#0f0c08" opacity="0.9"/>
<rect x="1352" y="0" width="3" height="340" fill="#8B6914" opacity="0.2"/>
<rect x="1377" y="0" width="3" height="340" fill="#8B6914" opacity="0.4"/>
<!-- Right column 2 -->
<rect x="1228" y="0" width="22" height="340" fill="#0f0c08" opacity="0.7"/>
<rect x="1228" y="0" width="2" height="340" fill="#8B6914" opacity="0.15"/>
<rect x="1248" y="0" width="2" height="340" fill="#8B6914" opacity="0.3"/>

<!-- Gold cornice line at top -->
<rect x="0" y="0" width="1440" height="4" fill="#8B6914" opacity="0.5"/>
<rect x="0" y="4" width="1440" height="1" fill="#C9A84C" opacity="0.3"/>

<!-- Cornice decorative elements -->
<rect x="0" y="5" width="1440" height="18" fill="#0f0c08" opacity="0.6"/>
<!-- Repeated cornice blocks -->
<g fill="#8B6914" opacity="0.3">
  <rect x="20" y="8" width="40" height="12" rx="1"/>
  <rect x="80" y="8" width="40" height="12" rx="1"/>
  <rect x="140" y="8" width="40" height="12" rx="1"/>
  <rect x="200" y="8" width="40" height="12" rx="1"/>
  <rect x="260" y="8" width="40" height="12" rx="1"/>
  <rect x="320" y="8" width="40" height="12" rx="1"/>
  <rect x="380" y="8" width="40" height="12" rx="1"/>
  <rect x="440" y="8" width="40" height="12" rx="1"/>
  <rect x="500" y="8" width="40" height="12" rx="1"/>
  <rect x="560" y="8" width="40" height="12" rx="1"/>
  <rect x="620" y="8" width="40" height="12" rx="1"/>
  <rect x="680" y="8" width="40" height="12" rx="1"/>
  <rect x="740" y="8" width="40" height="12" rx="1"/>
  <rect x="800" y="8" width="40" height="12" rx="1"/>
  <rect x="860" y="8" width="40" height="12" rx="1"/>
  <rect x="920" y="8" width="40" height="12" rx="1"/>
  <rect x="980" y="8" width="40" height="12" rx="1"/>
  <rect x="1040" y="8" width="40" height="12" rx="1"/>
  <rect x="1100" y="8" width="40" height="12" rx="1"/>
  <rect x="1160" y="8" width="40" height="12" rx="1"/>
  <rect x="1220" y="8" width="40" height="12" rx="1"/>
  <rect x="1280" y="8" width="40" height="12" rx="1"/>
  <rect x="1340" y="8" width="40" height="12" rx="1"/>
  <rect x="1400" y="8" width="40" height="12" rx="1"/>
</g>

<!-- Gold ornamental details -->
<circle cx="720" cy="2" r="6" fill="#C9A84C" opacity="0.6"/>
<circle cx="720" cy="2" r="3" fill="#C9A84C" opacity="0.9"/>
<polygon points="720,20 714,35 726,35" fill="#8B6914" opacity="0.4"/>

<!-- Subtle floor line -->
<rect x="0" y="330" width="1440" height="10" fill="#0d0b06" opacity="0.5"/>
<rect x="0" y="328" width="1440" height="3" fill="#8B6914" opacity="0.2"/>
</svg>`;
