// Themed SVG illustrations for each case study image slot.
// Shown as fallback until real images are added to /public.

export function UIStreamingCover() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="sc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0d0d12" stopOpacity="1" />
          <stop offset="0.55" stopColor="#0d0d12" stopOpacity="0.75" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sc-glow" cx="0.68" cy="0.32" r="0.6">
          <stop offset="0" stopColor="#4f46e5" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0d0d12" />
      <rect x="300" y="0" width="500" height="300" fill="#18123a" />
      <rect x="300" y="0" width="500" height="300" fill="url(#sc-glow)" />
      <rect x="0" y="0" width="800" height="300" fill="url(#sc-grad)" />
      {/* Nav */}
      <rect width="800" height="52" fill="#09090e" opacity="0.96" />
      <rect x="32" y="15" width="110" height="22" rx="4" fill="#6c63ff" />
      <rect x="160" y="20" width="44" height="12" rx="2" fill="#bbb" opacity="0.6" />
      <rect x="216" y="20" width="44" height="12" rx="2" fill="#bbb" opacity="0.6" />
      <rect x="272" y="20" width="44" height="12" rx="2" fill="#bbb" opacity="0.6" />
      <rect x="328" y="20" width="56" height="12" rx="2" fill="#bbb" opacity="0.6" />
      <circle cx="744" cy="26" r="8" stroke="#777" strokeWidth="1.5" fill="none" />
      <line x1="750" y1="32" x2="755" y2="37" stroke="#777" strokeWidth="1.5" />
      {/* Hero */}
      <rect x="40" y="82" width="88" height="18" rx="9" fill="#6c63ff" opacity="0.9" />
      <rect x="40" y="112" width="290" height="26" rx="4" fill="#f0f0f0" />
      <rect x="40" y="146" width="230" height="26" rx="4" fill="#ddd" opacity="0.55" />
      <rect x="40" y="184" width="255" height="9" rx="2" fill="#555" />
      <rect x="40" y="199" width="195" height="9" rx="2" fill="#444" />
      <rect x="40" y="222" width="112" height="36" rx="18" fill="#6c63ff" />
      <rect x="162" y="222" width="112" height="36" rx="18" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      {/* Row label */}
      <rect x="32" y="312" width="140" height="11" rx="3" fill="#f0f0f0" opacity="0.75" />
      {/* Thumbnails */}
      <rect x="32" y="332" width="178" height="100" rx="8" fill="#13132a" stroke="#6c63ff" strokeWidth="1.5" />
      <rect x="32" y="332" width="178" height="100" rx="8" fill="#6c63ff" opacity="0.08" />
      <rect x="44" y="366" width="105" height="10" rx="2" fill="#f0f0f0" opacity="0.88" />
      <rect x="44" y="382" width="72" height="8" rx="2" fill="#888" />
      <rect x="222" y="332" width="178" height="100" rx="8" fill="#111118" />
      <rect x="234" y="366" width="88" height="10" rx="2" fill="#3d3d4d" />
      <rect x="234" y="382" width="62" height="8" rx="2" fill="#333" />
      <rect x="412" y="332" width="178" height="100" rx="8" fill="#111118" />
      <rect x="424" y="366" width="98" height="10" rx="2" fill="#3d3d4d" />
      <rect x="424" y="382" width="66" height="8" rx="2" fill="#333" />
      <rect x="602" y="332" width="178" height="100" rx="8" fill="#111118" />
      <rect x="614" y="366" width="93" height="10" rx="2" fill="#3d3d4d" />
      <rect x="614" y="382" width="58" height="8" rx="2" fill="#333" />
    </svg>
  );
}

export function UIStreamingWebHomepage() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#181820" />
      {/* Browser chrome */}
      <rect x="40" y="20" width="720" height="410" rx="10" fill="#111116" stroke="#2a2a38" strokeWidth="1.5" />
      <rect x="40" y="20" width="720" height="36" rx="10" fill="#1c1c28" />
      <rect x="40" y="44" width="720" height="12" fill="#1c1c28" />
      <circle cx="62" cy="38" r="5" fill="#ff5f57" />
      <circle cx="80" cy="38" r="5" fill="#ffbd2e" />
      <circle cx="98" cy="38" r="5" fill="#28c840" />
      <rect x="180" y="28" width="360" height="20" rx="10" fill="#0d0d14" />
      <rect x="200" y="35" width="180" height="6" rx="3" fill="#6c63ff" opacity="0.6" />
      {/* Website inside browser */}
      {/* Nav */}
      <rect x="40" y="56" width="720" height="44" fill="#0d0d12" />
      <rect x="60" y="68" width="80" height="18" rx="3" fill="#6c63ff" />
      <rect x="180" y="72" width="36" height="9" rx="2" fill="#bbb" opacity="0.5" />
      <rect x="226" y="72" width="36" height="9" rx="2" fill="#bbb" opacity="0.5" />
      <rect x="272" y="72" width="36" height="9" rx="2" fill="#bbb" opacity="0.5" />
      {/* Hero */}
      <rect x="40" y="100" width="720" height="170" fill="#18123a" />
      <rect x="40" y="100" width="360" height="170" fill="#0d0d12" opacity="0.8" />
      <rect x="60" y="122" width="72" height="14" rx="7" fill="#6c63ff" opacity="0.85" />
      <rect x="60" y="144" width="240" height="20" rx="3" fill="#f0f0f0" />
      <rect x="60" y="172" width="195" height="20" rx="3" fill="#ddd" opacity="0.5" />
      <rect x="60" y="202" width="90" height="28" rx="14" fill="#6c63ff" />
      <rect x="158" y="202" width="90" height="28" rx="14" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Thumbnails section */}
      <rect x="40" y="270" width="720" height="160" fill="#0e0e15" />
      <rect x="60" y="284" width="100" height="10" rx="3" fill="#f0f0f0" opacity="0.7" />
      <rect x="60" y="302" width="160" height="90" rx="6" fill="#1a1a2e" stroke="#6c63ff" strokeWidth="1" />
      <rect x="230" y="302" width="160" height="90" rx="6" fill="#131320" />
      <rect x="400" y="302" width="160" height="90" rx="6" fill="#131320" />
      <rect x="570" y="302" width="160" height="90" rx="6" fill="#131320" />
    </svg>
  );
}

export function UIStreamingTabletMobile() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="tm-bg" cx="0.5" cy="0.5" r="0.8">
          <stop offset="0" stopColor="#1a1040" stopOpacity="0.6" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0d0d12" />
      <rect width="800" height="450" fill="url(#tm-bg)" />
      {/* Label */}
      <rect x="50" y="28" width="160" height="12" rx="3" fill="#6c63ff" opacity="0.5" />
      <rect x="540" y="28" width="120" height="12" rx="3" fill="#a78bfa" opacity="0.4" />
      {/* Tablet device */}
      <rect x="40" y="55" width="430" height="340" rx="18" fill="#111118" stroke="#2a2a3a" strokeWidth="2" />
      <rect x="54" y="70" width="402" height="312" rx="6" fill="#0d0d12" />
      {/* Tablet screen content - nav */}
      <rect x="54" y="70" width="402" height="40" fill="#09090e" />
      <rect x="68" y="82" width="70" height="16" rx="3" fill="#6c63ff" />
      <rect x="155" y="86" width="30" height="8" rx="2" fill="#888" opacity="0.6" />
      <rect x="194" y="86" width="30" height="8" rx="2" fill="#888" opacity="0.6" />
      {/* Tablet hero */}
      <rect x="54" y="110" width="402" height="160" fill="#18123a" />
      <rect x="54" y="110" width="200" height="160" fill="#0d0d12" opacity="0.75" />
      <rect x="68" y="128" width="60" height="12" rx="6" fill="#6c63ff" opacity="0.9" />
      <rect x="68" y="148" width="175" height="18" rx="3" fill="#f0f0f0" />
      <rect x="68" y="173" width="140" height="14" rx="3" fill="#ddd" opacity="0.5" />
      <rect x="68" y="198" width="80" height="26" rx="13" fill="#6c63ff" />
      {/* Tablet thumbnails */}
      <rect x="54" y="270" width="402" height="112" fill="#0a0a0f" />
      <rect x="66" y="282" width="90" height="9" rx="2" fill="#ddd" opacity="0.6" />
      <rect x="66" y="298" width="115" height="70" rx="5" fill="#13132a" stroke="#6c63ff" strokeWidth="1" />
      <rect x="190" y="298" width="115" height="70" rx="5" fill="#111118" />
      <rect x="314" y="298" width="115" height="70" rx="5" fill="#111118" />

      {/* Mobile device */}
      <rect x="530" y="80" width="210" height="320" rx="24" fill="#111118" stroke="#2a2a3a" strokeWidth="2" />
      <rect x="543" y="96" width="184" height="290" rx="8" fill="#0d0d12" />
      <rect x="610" y="85" width="60" height="6" rx="3" fill="#1e1e2a" />
      {/* Mobile nav */}
      <rect x="543" y="96" width="184" height="36" fill="#09090e" />
      <rect x="555" y="107" width="50" height="14" rx="3" fill="#6c63ff" />
      {/* Mobile hero */}
      <rect x="543" y="132" width="184" height="120" fill="#18123a" />
      <rect x="555" y="148" width="100" height="14" rx="3" fill="#f0f0f0" />
      <rect x="555" y="168" width="80" height="12" rx="3" fill="#ddd" opacity="0.5" />
      <rect x="555" y="188" width="72" height="24" rx="12" fill="#6c63ff" />
      {/* Mobile thumbnails */}
      <rect x="543" y="252" width="184" height="134" fill="#0a0a0f" />
      <rect x="555" y="262" width="70" height="8" rx="2" fill="#ddd" opacity="0.55" />
      <rect x="555" y="276" width="80" height="54" rx="5" fill="#13132a" stroke="#6c63ff" strokeWidth="1" />
      <rect x="645" y="276" width="70" height="54" rx="5" fill="#111118" />
    </svg>
  );
}

export function UsabilityTestingCover() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="ut-hot1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff4444" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#ff8c00" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ffcc00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ut-hot2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff8c00" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffcc00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ut-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#1a1040" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0d0d12" />
      <rect width="800" height="450" fill="url(#ut-bg)" />
      {/* Central phone */}
      <rect x="290" y="40" width="220" height="370" rx="24" fill="#111118" stroke="#2a2a3a" strokeWidth="2" />
      <rect x="302" y="56" width="196" height="340" rx="8" fill="#0a0a12" />
      <rect x="370" y="46" width="60" height="6" rx="3" fill="#1e1e2a" />
      {/* App UI - map feature */}
      <rect x="302" y="56" width="196" height="36" fill="#0d0d18" />
      <rect x="316" y="67" width="80" height="14" rx="3" fill="#f0f0f0" opacity="0.8" />
      <rect x="472" y="67" width="16" height="14" rx="3" fill="#6c63ff" opacity="0.7" />
      {/* Map area */}
      <rect x="302" y="92" width="196" height="200" fill="#13131f" />
      {/* Map grid lines */}
      <line x1="302" y1="130" x2="498" y2="130" stroke="#1e1e2e" strokeWidth="1" />
      <line x1="302" y1="168" x2="498" y2="168" stroke="#1e1e2e" strokeWidth="1" />
      <line x1="302" y1="206" x2="498" y2="206" stroke="#1e1e2e" strokeWidth="1" />
      <line x1="302" y1="244" x2="498" y2="244" stroke="#1e1e2e" strokeWidth="1" />
      <line x1="350" y1="92" x2="350" y2="292" stroke="#1e1e2e" strokeWidth="1" />
      <line x1="400" y1="92" x2="400" y2="292" stroke="#1e1e2e" strokeWidth="1" />
      <line x1="450" y1="92" x2="450" y2="292" stroke="#1e1e2e" strokeWidth="1" />
      {/* Map pin */}
      <circle cx="400" cy="190" r="10" fill="#6c63ff" />
      <circle cx="400" cy="190" r="5" fill="white" />
      {/* Heatmap blobs on map */}
      <ellipse cx="380" cy="175" rx="40" ry="30" fill="url(#ut-hot1)" />
      <ellipse cx="440" cy="220" rx="28" ry="22" fill="url(#ut-hot2)" />
      {/* Bottom bar */}
      <rect x="302" y="292" width="196" height="104" fill="#0d0d18" />
      <rect x="314" y="304" width="80" height="10" rx="3" fill="#6c63ff" opacity="0.6" />
      <rect x="314" y="320" width="150" height="8" rx="2" fill="#333" />
      <rect x="314" y="334" width="120" height="8" rx="2" fill="#333" />
      <rect x="314" y="352" width="100" height="24" rx="12" fill="#6c63ff" />

      {/* Side stats - left */}
      <rect x="50" y="120" width="200" height="90" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="68" y="138" width="60" height="28" rx="4" fill="#6c63ff" opacity="0.2" />
      <rect x="68" y="138" width="60" height="28" rx="4" stroke="#6c63ff" strokeWidth="1" fill="none" />
      <rect x="68" y="174" width="80" height="8" rx="2" fill="#555" />
      <rect x="68" y="188" width="60" height="8" rx="2" fill="#444" />

      <rect x="50" y="230" width="200" height="90" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="68" y="248" width="60" height="28" rx="4" fill="#a78bfa" opacity="0.15" />
      <rect x="68" y="248" width="60" height="28" rx="4" stroke="#a78bfa" strokeWidth="1" fill="none" />
      <rect x="68" y="284" width="80" height="8" rx="2" fill="#555" />
      <rect x="68" y="298" width="60" height="8" rx="2" fill="#444" />

      {/* Side stats - right */}
      <rect x="550" y="120" width="200" height="210" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="568" y="138" width="100" height="10" rx="3" fill="#f0f0f0" opacity="0.7" />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="568" y={162 + i * 38} width={80 + i * 12} height="20" rx="4" fill={i === 0 ? '#6c63ff' : '#1a1a2a'} opacity={i === 0 ? 0.9 : 0.8} />
          <rect x="568" y={162 + i * 38} width={80 + i * 12} height="20" rx="4" stroke={i === 0 ? '#6c63ff' : '#2a2a3a'} strokeWidth="1" fill="none" />
        </g>
      ))}
    </svg>
  );
}

export function UsabilityTestingHeatmap() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="hm1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff3300" stopOpacity="0.85" />
          <stop offset="0.4" stopColor="#ff6600" stopOpacity="0.5" />
          <stop offset="0.7" stopColor="#ffaa00" stopOpacity="0.3" />
          <stop offset="1" stopColor="#ffdd00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hm2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff6600" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#ffaa00" stopOpacity="0.4" />
          <stop offset="1" stopColor="#ffdd00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hm3" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffaa00" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ffdd00" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hm4" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffdd00" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffdd00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0a0a10" />
      {/* Phone frame */}
      <rect x="260" y="20" width="280" height="410" rx="28" fill="#111118" stroke="#222230" strokeWidth="2" />
      <rect x="274" y="36" width="252" height="380" rx="10" fill="#0d0d18" />
      <rect x="365" y="27" width="70" height="7" rx="4" fill="#1a1a28" />
      {/* App UI */}
      <rect x="274" y="36" width="252" height="40" fill="#0d0d18" />
      <rect x="287" y="48" width="100" height="16" rx="3" fill="#f0f0f0" opacity="0.75" />
      <rect x="500" y="48" width="16" height="16" rx="4" fill="#6c63ff" opacity="0.5" />
      {/* Map */}
      <rect x="274" y="76" width="252" height="200" fill="#11111e" />
      {/* Grid */}
      {[106, 136, 166, 196, 226, 256].map(y => (
        <line key={y} x1="274" y1={y} x2="526" y2={y} stroke="#181828" strokeWidth="1" />
      ))}
      {[310, 358, 406, 454, 502].map(x => (
        <line key={x} x1={x} y1="76" x2={x} y2="276" stroke="#181828" strokeWidth="1" />
      ))}
      {/* Heatmap blobs */}
      <ellipse cx="400" cy="165" rx="70" ry="55" fill="url(#hm1)" />
      <ellipse cx="360" cy="200" rx="50" ry="38" fill="url(#hm2)" />
      <ellipse cx="450" cy="140" rx="40" ry="30" fill="url(#hm3)" />
      <ellipse cx="310" cy="185" rx="35" ry="28" fill="url(#hm3)" />
      <ellipse cx="480" cy="200" rx="30" ry="24" fill="url(#hm4)" />
      <ellipse cx="340" cy="130" rx="25" ry="20" fill="url(#hm4)" />
      {/* Pin */}
      <circle cx="400" cy="165" r="7" fill="#ff2200" stroke="white" strokeWidth="1.5" />
      {/* Bottom section */}
      <rect x="274" y="276" width="252" height="140" fill="#0d0d18" />
      {/* Filter tabs */}
      <rect x="284" y="288" width="55" height="22" rx="11" fill="#6c63ff" />
      <rect x="346" y="288" width="55" height="22" rx="11" fill="#1a1a28" />
      <rect x="408" y="288" width="55" height="22" rx="11" fill="#1a1a28" />
      <rect x="284" y="320" width="230" height="8" rx="2" fill="#222" />
      <rect x="284" y="334" width="180" height="8" rx="2" fill="#222" />
      <rect x="284" y="348" width="200" height="8" rx="2" fill="#222" />
      <rect x="284" y="368" width="110" height="26" rx="13" fill="#6c63ff" opacity="0.85" />

      {/* Legend - right side */}
      <rect x="580" y="80" width="160" height="200" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="596" y="98" width="80" height="10" rx="3" fill="#f0f0f0" opacity="0.7" />
      {[
        { color: "#ff3300", label: "High clicks" },
        { color: "#ff8c00", label: "Medium" },
        { color: "#ffcc00", label: "Low clicks" },
        { color: "#4444ff", label: "Ignored" },
      ].map((item, i) => (
        <g key={i}>
          <circle cx="608" cy={128 + i * 38} r="9" fill={item.color} opacity="0.85" />
          <rect x="626" cy={122 + i * 38} width="90" height="8" rx="2" fill="#555" />
        </g>
      ))}

      {/* Left stats */}
      <rect x="60" y="80" width="170" height="60" rx="8" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="76" y="96" width="50" height="24" rx="4" fill="#6c63ff" opacity="0.2" stroke="#6c63ff" strokeWidth="1" />
      <rect x="76" y="128" width="90" height="8" rx="2" fill="#444" />

      <rect x="60" y="160" width="170" height="60" rx="8" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="76" y="176" width="50" height="24" rx="4" fill="#ff6600" opacity="0.15" stroke="#ff6600" strokeWidth="1" />
      <rect x="76" y="208" width="90" height="8" rx="2" fill="#444" />

      <rect x="60" y="240" width="170" height="60" rx="8" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="76" y="256" width="50" height="24" rx="4" fill="#a78bfa" opacity="0.15" stroke="#a78bfa" strokeWidth="1" />
      <rect x="76" y="288" width="90" height="8" rx="2" fill="#444" />
    </svg>
  );
}

export function UXResearchCover() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="ur-bg" cx="0.5" cy="0.5" r="0.75">
          <stop offset="0" stopColor="#1a1040" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0d0d12" />
      <rect width="800" height="450" fill="url(#ur-bg)" />
      {/* Cluster 1 - top left */}
      <text x="80" y="80" fill="#a78bfa" fontSize="10" fontFamily="Inter,sans-serif" opacity="0.6">PAIN POINTS</text>
      <rect x="60" y="90" width="100" height="68" rx="4" fill="#ffd700" opacity="0.88" transform="rotate(-3,110,124)" />
      <rect x="72" y="101" width="76" height="7" rx="2" fill="#1a1000" opacity="0.45" transform="rotate(-3,110,124)" />
      <rect x="72" y="113" width="60" height="7" rx="2" fill="#1a1000" opacity="0.35" transform="rotate(-3,110,124)" />
      <rect x="170" y="82" width="100" height="68" rx="4" fill="#ffd700" opacity="0.82" transform="rotate(2,220,116)" />
      <rect x="182" y="93" width="76" height="7" rx="2" fill="#1a1000" opacity="0.45" transform="rotate(2,220,116)" />
      <rect x="90" y="170" width="100" height="68" rx="4" fill="#ffd700" opacity="0.78" transform="rotate(-1,140,204)" />

      {/* Cluster 2 - top right */}
      <text x="540" y="80" fill="#74c0fc" fontSize="10" fontFamily="Inter,sans-serif" opacity="0.6">MOTIVATIONS</text>
      <rect x="520" y="90" width="100" height="68" rx="4" fill="#74c0fc" opacity="0.82" transform="rotate(2,570,124)" />
      <rect x="530" y="100" width="76" height="7" rx="2" fill="#001a2a" opacity="0.45" transform="rotate(2,570,124)" />
      <rect x="530" y="112" width="56" height="7" rx="2" fill="#001a2a" opacity="0.35" transform="rotate(2,570,124)" />
      <rect x="634" y="95" width="100" height="68" rx="4" fill="#74c0fc" opacity="0.75" transform="rotate(-2,684,129)" />
      <rect x="524" y="172" width="100" height="68" rx="4" fill="#74c0fc" opacity="0.7" transform="rotate(3,574,206)" />

      {/* Cluster 3 - bottom left */}
      <text x="80" y="310" fill="#69db7c" fontSize="10" fontFamily="Inter,sans-serif" opacity="0.6">EXPECTATIONS</text>
      <rect x="60" y="320" width="100" height="68" rx="4" fill="#69db7c" opacity="0.82" transform="rotate(-2,110,354)" />
      <rect x="72" y="330" width="76" height="7" rx="2" fill="#001a00" opacity="0.4" transform="rotate(-2,110,354)" />
      <rect x="72" y="342" width="55" height="7" rx="2" fill="#001a00" opacity="0.3" transform="rotate(-2,110,354)" />
      <rect x="172" y="315" width="100" height="68" rx="4" fill="#69db7c" opacity="0.76" transform="rotate(3,222,349)" />
      <rect x="80" y="395" width="100" height="68" rx="4" fill="#69db7c" opacity="0.7" transform="rotate(1,130,429)" />

      {/* Cluster 4 - bottom right */}
      <text x="540" y="310" fill="#ff6b6b" fontSize="10" fontFamily="Inter,sans-serif" opacity="0.6">BARRIERS</text>
      <rect x="520" y="320" width="100" height="68" rx="4" fill="#ff6b6b" opacity="0.82" transform="rotate(2,570,354)" />
      <rect x="532" y="330" width="76" height="7" rx="2" fill="#2a0000" opacity="0.4" transform="rotate(2,570,354)" />
      <rect x="632" y="318" width="100" height="68" rx="4" fill="#ff6b6b" opacity="0.75" transform="rotate(-3,682,352)" />
      <rect x="525" y="398" width="100" height="68" rx="4" fill="#ff6b6b" opacity="0.68" transform="rotate(2,575,432)" />

      {/* Center connector lines */}
      <line x1="280" y1="180" x2="380" y2="225" stroke="#6c63ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
      <line x1="510" y1="175" x2="415" y2="225" stroke="#6c63ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
      <line x1="280" y1="310" x2="380" y2="270" stroke="#6c63ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
      <line x1="510" y1="305" x2="415" y2="265" stroke="#6c63ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
      {/* Center hub */}
      <circle cx="398" cy="245" r="28" fill="#6c63ff" opacity="0.15" stroke="#6c63ff" strokeWidth="1.5" />
      <rect x="374" y="238" width="48" height="14" rx="4" fill="#6c63ff" opacity="0.5" />
    </svg>
  );
}

export function UXResearchImmersion() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#0d0d12" />
      {/* Title */}
      <rect x="40" y="30" width="200" height="18" rx="4" fill="#f0f0f0" opacity="0.8" />
      <rect x="40" y="56" width="140" height="10" rx="3" fill="#6c63ff" opacity="0.6" />
      {/* 3-column CDE matrix */}
      {["CERTAINTIES", "DOUBTS", "EXPECTATIONS"].map((col, ci) => {
        const x = 40 + ci * 248;
        const colors = ["#6c63ff", "#ff6b6b", "#69db7c"];
        const bgColors = ["#0e0e20", "#1a0e0e", "#0e1a0e"];
        return (
          <g key={col}>
            <rect x={x} y={82} width={230} height={340} rx={10} fill={bgColors[ci]} stroke="#1e1e2a" strokeWidth="1.5" />
            <rect x={x} y={82} width={230} height={36} rx={10} fill={colors[ci]} opacity={0.15} />
            <rect x={x + 14} y={94} width={100} height={12} rx={3} fill={colors[ci]} opacity={0.8} />
            {[0, 1, 2, 3, 4].map(j => (
              <g key={j}>
                <rect x={x + 14} y={134 + j * 54} width={202} height={42} rx={6} fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
                <rect x={x + 24} y={144 + j * 54} width={140} height={9} rx={2} fill="#ddd" opacity={0.5} />
                <rect x={x + 24} y={157 + j * 54} width={105} height={7} rx={2} fill="#777" opacity={0.5} />
              </g>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function UXResearchInterviews() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#111118" />
      {/* Top bar */}
      <rect width="800" height="52" fill="#0d0d12" />
      <rect x="24" y="16" width="140" height="20" rx="4" fill="#6c63ff" opacity="0.25" stroke="#6c63ff" strokeWidth="1" />
      <circle cx="680" cy="26" r="8" fill="#ff4444" />
      <circle cx="706" cy="26" r="8" fill="#ffcc00" />
      <circle cx="732" cy="26" r="8" fill="#28c840" />
      {/* 2x2 video grid */}
      {[0, 1].map(row =>
        [0, 1].map(col => {
          const x = 24 + col * 388;
          const y = 68 + row * 176;
          const isActive = row === 0 && col === 0;
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width={374} height={162} rx={8} fill="#0d0d18" stroke={isActive ? "#6c63ff" : "#1e1e2a"} strokeWidth={isActive ? 2 : 1} />
              {/* Person silhouette */}
              <circle cx={x + 187} cy={y + 62} r={28} fill={isActive ? "#2a2060" : "#1a1a28"} />
              <circle cx={x + 187} cy={y + 48} r={18} fill={isActive ? "#3a3070" : "#222230"} />
              <ellipse cx={x + 187} cy={y + 90} rx={32} ry={20} fill={isActive ? "#2a2060" : "#1a1a28"} />
              {/* Name tag */}
              <rect x={x + 10} y={y + 136} width={80} height={16} rx={3} fill={isActive ? "#6c63ff" : "#1a1a28"} opacity={isActive ? 0.9 : 0.6} />
              {/* Mic icon */}
              <rect x={x + 344} y={y + 136} width={20} height={16} rx={3} fill={isActive ? "#6c63ff" : "#1a1a28"} />
            </g>
          );
        })
      )}
      {/* Bottom controls */}
      <rect y="420" width="800" height="30" fill="#0d0d12" />
      <circle cx="340" cy="435" r="12" fill="#1e1e2a" />
      <circle cx="376" cy="435" r="12" fill="#1e1e2a" />
      <circle cx="412" cy="435" r="12" fill="#1e1e2a" />
      <circle cx="448" cy="435" r="12" fill="#ff4444" />
      <circle cx="484" cy="435" r="12" fill="#1e1e2a" />
    </svg>
  );
}

export function UXResearchAnalysis() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#0d0d12" />
      {/* Header */}
      <rect x="32" y="28" width="200" height="18" rx="4" fill="#f0f0f0" opacity="0.8" />
      <rect x="32" y="54" width="120" height="10" rx="3" fill="#6c63ff" opacity="0.5" />
      {/* Bar chart */}
      <rect x="32" y="82" width="440" height="240" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="50" y="98" width="120" height="12" rx="3" fill="#f0f0f0" opacity="0.7" />
      {/* Bars */}
      {[
        { h: 120, label: "Task 1" },
        { h: 86, label: "Task 2" },
        { h: 148, label: "Task 3" },
        { h: 64, label: "Task 4" },
        { h: 108, label: "Task 5" },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={58 + i * 76} y={282 - bar.h} width={52} height={bar.h} rx={4}
            fill={i === 2 ? "#6c63ff" : "#2a2a3e"} opacity={i === 2 ? 0.9 : 0.7} />
          {i === 2 && <rect x={58 + i * 76} y={282 - bar.h} width={52} height={bar.h} rx={4} fill="#6c63ff" opacity={0.2} />}
          <rect x={58 + i * 76} y={294} width={52} height={8} rx={2} fill="#444" opacity={0.6} />
        </g>
      ))}
      <line x1="50" y1="284" x2="424" y2="284" stroke="#2a2a3a" strokeWidth="1" />

      {/* Insight cards - right column */}
      {[
        { color: "#6c63ff", w: 160 },
        { color: "#a78bfa", w: 130 },
        { color: "#ff6b6b", w: 150 },
      ].map((card, i) => (
        <g key={i}>
          <rect x={502} y={82 + i * 82} width={270} height={70} rx={8} fill="#111118" stroke="#1e1e2a" strokeWidth={1} />
          <rect x={514} y={96 + i * 82} width={4} height={42} rx={2} fill={card.color} />
          <rect x={526} y={98 + i * 82} width={card.w} height={10} rx={3} fill="#f0f0f0" opacity={0.7} />
          <rect x={526} y={114 + i * 82} width={card.w - 20} height={8} rx={2} fill="#555" />
          <rect x={526} y={126 + i * 82} width={card.w - 40} height={8} rx={2} fill="#444" />
        </g>
      ))}

      {/* Quote section */}
      <rect x="32" y="342" width="740" height="84" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="50" y="358" width="8" height="52" rx="2" fill="#6c63ff" opacity="0.7" />
      <rect x="68" y="360" width="480" height="10" rx="3" fill="#ddd" opacity="0.55" />
      <rect x="68" y="376" width="400" height="10" rx="3" fill="#ddd" opacity="0.45" />
      <rect x="68" y="392" width="300" height="10" rx="3" fill="#ddd" opacity="0.35" />
      <rect x="68" y="412" width="80" height="8" rx="2" fill="#6c63ff" opacity="0.5" />
    </svg>
  );
}

export function WebDevCover() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="wd-hero" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#111018" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="wd-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#a78bfa" stopOpacity="0.25" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0d0d12" />
      <rect width="800" height="450" fill="url(#wd-glow)" />
      {/* Abstract background texture - diagonal lines */}
      <line x1="0" y1="50" x2="800" y2="450" stroke="#1e1e2a" strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="150" x2="800" y2="450" stroke="#1e1e2a" strokeWidth="1" opacity="0.3" />
      <line x1="0" y1="250" x2="800" y2="450" stroke="#1e1e2a" strokeWidth="1" opacity="0.2" />
      {/* Nav */}
      <rect width="800" height="52" fill="#09090e" opacity="0.97" />
      <rect x="32" y="16" width="130" height="20" rx="10" fill="#1a1a28" stroke="#6c63ff" strokeWidth="1" />
      <rect x="200" y="20" width="44" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="256" y="20" width="44" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="312" y="20" width="44" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="650" y="12" width="120" height="28" rx="14" fill="#6c63ff" />
      {/* Hero section */}
      <rect x="60" y="82" width="70" height="18" rx="9" fill="#6c63ff" opacity="0.2" stroke="#6c63ff" strokeWidth="1" />
      <rect x="60" y="112" width="380" height="30" rx="5" fill="#f0f0f0" />
      <rect x="60" y="150" width="300" height="30" rx="5" fill="#ddd" opacity="0.55" />
      <rect x="60" y="192" width="340" height="10" rx="3" fill="#444" />
      <rect x="60" y="208" width="280" height="10" rx="3" fill="#3a3a4a" />
      <rect x="60" y="228" width="240" height="10" rx="3" fill="#333" />
      <rect x="60" y="258" width="130" height="40" rx="20" fill="#6c63ff" />
      <rect x="204" y="258" width="130" height="40" rx="20" fill="#1a1a28" stroke="#6c63ff" strokeWidth="1" />
      {/* Right side decorative element */}
      <rect x="480" y="72" width="290" height="330" rx="12" fill="#111118" stroke="#1e1e2a" strokeWidth="1" opacity="0.8" />
      <rect x="494" y="86" width="262" height="180" rx="6" fill="#0d0d18" />
      {/* Abstract person silhouette */}
      <ellipse cx="625" cy="145" rx="40" ry="55" fill="#1e1e2e" />
      <circle cx="625" cy="118" rx="28" cy="118" r="28" fill="#1a1a30" />
      <rect x="494" y="280" width="262" height="12" rx="3" fill="#f0f0f0" opacity="0.7" />
      <rect x="494" y="298" width="200" height="10" rx="3" fill="#555" />
      <rect x="494" y="314" width="220" height="10" rx="3" fill="#444" />
      <rect x="494" y="342" width="120" height="30" rx="15" fill="#6c63ff" opacity="0.9" />
      {/* Trust badges */}
      <rect x="60" y="330" width="370" height="56" rx="8" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <circle cx={92 + i * 118} cy="358" r="12" fill="#6c63ff" opacity="0.2" stroke="#6c63ff" strokeWidth="1" />
          <rect x={112 + i * 118} y="352" width={60} height="8" rx="2" fill="#555" />
          <rect x={112 + i * 118} y="364" width={44} height="7" rx="2" fill="#3a3a4a" />
        </g>
      ))}
    </svg>
  );
}

export function WebDevHome() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="wdh-glow" cx="0.75" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#a78bfa" stopOpacity="0.2" />
          <stop offset="1" stopColor="#0d0d12" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="#0d0d12" />
      <rect width="800" height="450" fill="url(#wdh-glow)" />
      {/* Nav */}
      <rect width="800" height="52" fill="#0a0a10" opacity="0.97" />
      <rect x="32" y="16" width="120" height="20" rx="3" fill="#6c63ff" opacity="0.25" stroke="#6c63ff" strokeWidth="1" />
      <rect x="200" y="20" width="36" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="248" y="20" width="50" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="310" y="20" width="44" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="366" y="20" width="56" height="12" rx="3" fill="#bbb" opacity="0.5" />
      <rect x="654" y="12" width="114" height="28" rx="14" fill="#6c63ff" />
      {/* Hero tag */}
      <rect x="50" y="76" width="200" height="14" rx="7" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" strokeWidth="1" />
      {/* Hero heading */}
      <rect x="50" y="102" width="400" height="32" rx="5" fill="#f0f0f0" />
      <rect x="50" y="142" width="350" height="32" rx="5" fill="#ddd" opacity="0.6" />
      <rect x="50" y="182" width="280" height="32" rx="5" fill="#ccc" opacity="0.4" />
      {/* Subtext */}
      <rect x="50" y="228" width="380" height="10" rx="3" fill="#444" />
      <rect x="50" y="244" width="310" height="10" rx="3" fill="#3a3a4a" />
      {/* CTAs */}
      <rect x="50" y="272" width="160" height="44" rx="22" fill="#6c63ff" />
      <rect x="224" y="272" width="160" height="44" rx="22" fill="#1a1a28" stroke="#a78bfa" strokeWidth="1" />
      {/* Social proof */}
      <rect x="50" y="338" width="380" height="60" rx="10" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={i} x={68 + i * 22} y="350" width={20} height={36} rx="10" fill="#6c63ff" opacity={0.2 + i * 0.06} stroke="#6c63ff" strokeWidth="1" />
      ))}
      <rect x="188" y="354" width="80" height="10" rx="3" fill="#f0f0f0" opacity="0.7" />
      <rect x="188" y="370" width="110" height="8" rx="2" fill="#555" />
      {/* Right image placeholder */}
      <rect x="500" y="60" width="260" height="350" rx="14" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <ellipse cx="630" cy="190" rx="65" ry="85" fill="#1a1a2e" />
      <circle cx="630" cy="148" r="38" fill="#1e1e30" />
      <rect x="520" y="348" width="220" height="44" rx="8" fill="#0d0d18" />
      <rect x="540" y="360" width="100" height="10" rx="3" fill="#6c63ff" opacity="0.5" />
      <rect x="540" y="374" width="130" height="8" rx="2" fill="#333" />
    </svg>
  );
}

export function WebDevBlog() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#0d0d12" />
      {/* Nav */}
      <rect width="800" height="48" fill="#0a0a10" opacity="0.97" />
      <rect x="32" y="14" width="100" height="20" rx="3" fill="#6c63ff" opacity="0.25" stroke="#6c63ff" strokeWidth="1" />
      <rect x="650" y="11" width="118" height="26" rx="13" fill="#6c63ff" />
      {/* Page header */}
      <rect x="32" y="64" width="180" height="22" rx="4" fill="#f0f0f0" opacity="0.8" />
      <rect x="32" y="92" width="280" height="10" rx="3" fill="#444" />
      {/* Blog grid 3 cols */}
      {[0, 1, 2].map(col => {
        const x = 32 + col * 258;
        return (
          <g key={col}>
            {/* Card 1 */}
            <rect x={x} y={116} width={240} height={140} rx={8} fill="#111118" stroke="#1e1e2a" strokeWidth={1} />
            <rect x={x} y={116} width={240} height={70} rx={8} fill="#18183a" />
            <rect x={x} y={168} width={240} height={18} fill="#111118" />
            <rect x={x + 14} y={128} width={50} height={14} rx={7} fill="#6c63ff" opacity={0.7} />
            <rect x={x + 14} y={198} width={180} height={10} rx={3} fill="#f0f0f0" opacity={0.7} />
            <rect x={x + 14} y={214} width={140} height={8} rx={2} fill="#444" />
            <rect x={x + 14} y={226} width={60} height={8} rx={2} fill="#333" />
            {/* Card 2 */}
            <rect x={x} y={270} width={240} height={140} rx={8} fill="#111118" stroke="#1e1e2a" strokeWidth={1} />
            <rect x={x} y={270} width={240} height={70} rx={8} fill="#1a1428" />
            <rect x={x} y={322} width={240} height={18} fill="#111118" />
            <rect x={x + 14} y={282} width={50} height={14} rx={7} fill="#a78bfa" opacity={0.6} />
            <rect x={x + 14} y={352} width={160} height={10} rx={3} fill="#f0f0f0" opacity={0.65} />
            <rect x={x + 14} y={368} width={120} height={8} rx={2} fill="#444" />
            <rect x={x + 14} y={380} width={60} height={8} rx={2} fill="#333" />
          </g>
        );
      })}
    </svg>
  );
}

export function WebDevPost() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="800" height="450" fill="#0d0d12" />
      {/* Nav */}
      <rect width="800" height="48" fill="#0a0a10" opacity="0.97" />
      <rect x="32" y="14" width="100" height="20" rx="3" fill="#6c63ff" opacity="0.25" stroke="#6c63ff" strokeWidth="1" />
      <rect x="650" y="11" width="118" height="26" rx="13" fill="#6c63ff" />
      {/* Article */}
      <rect x="160" y="60" width="480" height="200" rx="10" fill="#18183a" />
      <rect x="178" y="80" width="60" height="14" rx="7" fill="#6c63ff" opacity="0.7" />
      <rect x="178" y="102" width="400" height="22" rx="4" fill="#f0f0f0" opacity="0.88" />
      <rect x="178" y="130" width="320" height="22" rx="4" fill="#ddd" opacity="0.5" />
      <rect x="178" y="162" width="55" height="10" rx="3" fill="#6c63ff" opacity="0.5" />
      <rect x="242" y="164" width="60" height="8" rx="2" fill="#333" />
      {/* Body text */}
      <rect x="160" y="280" width="480" height="10" rx="3" fill="#555" />
      <rect x="160" y="296" width="480" height="10" rx="3" fill="#4a4a5a" />
      <rect x="160" y="312" width="440" height="10" rx="3" fill="#4a4a5a" />
      <rect x="160" y="328" width="480" height="10" rx="3" fill="#444" />
      <rect x="160" y="344" width="380" height="10" rx="3" fill="#3a3a4a" />
      <rect x="160" y="370" width="480" height="10" rx="3" fill="#3a3a4a" />
      <rect x="160" y="386" width="460" height="10" rx="3" fill="#333" />
      <rect x="160" y="402" width="300" height="10" rx="3" fill="#333" />
      {/* Sidebar */}
      <rect x="670" y="280" width="100" height="140" rx="8" fill="#111118" stroke="#1e1e2a" strokeWidth="1" />
      <rect x="682" y="294" width="76" height="10" rx="3" fill="#f0f0f0" opacity="0.6" />
      <rect x="682" y="312" width="76" height="60" rx="4" fill="#18183a" />
      <rect x="682" y="382" width="76" height="8" rx="2" fill="#444" />
      <rect x="682" y="396" width="55" height="8" rx="2" fill="#333" />
    </svg>
  );
}

export function DesignProcessCover() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="dp-bg" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#3b2fa0" stopOpacity="0.3" />
          <stop offset="1" stopColor="#06060e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dp-card3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e1850" />
          <stop offset="1" stopColor="#0f0e28" />
        </linearGradient>
        <linearGradient id="dp-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.65" stopColor="#06060e" stopOpacity="0" />
          <stop offset="1" stopColor="#06060e" stopOpacity="1" />
        </linearGradient>
        <filter id="dp-glow-f">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="#06060e" />
      <rect width="800" height="450" fill="url(#dp-bg)" />

      {/* ── CARD 1 · DISCOVER ── x=20 w=170 */}
      <rect x="20" y="30" width="170" height="270" rx="14" fill="#0c0c1e" stroke="#1e1e38" strokeWidth="1" />
      {/* stage label */}
      <text x="36" y="60" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#555">01</text>
      <text x="36" y="80" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#e0e0f0">Discover</text>

      {/* Visual: 3 person icons + radiating lines (research/interviews) */}
      {/* center person */}
      <circle cx="105" cy="148" r="22" fill="#1a1a38" stroke="#2a2a55" strokeWidth="1.5" />
      <circle cx="105" cy="141" r="9" fill="#6c63ff" opacity="0.6" />
      <path d="M87 162 Q105 154 123 162" stroke="#6c63ff" strokeWidth="2" fill="none" opacity="0.6" />
      {/* left person */}
      <circle cx="58" cy="160" r="16" fill="#141430" stroke="#22223a" strokeWidth="1" />
      <circle cx="58" cy="154" r="6.5" fill="#888" opacity="0.4" />
      <path d="M46 167 Q58 162 70 167" stroke="#888" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* right person */}
      <circle cx="152" cy="160" r="16" fill="#141430" stroke="#22223a" strokeWidth="1" />
      <circle cx="152" cy="154" r="6.5" fill="#888" opacity="0.4" />
      <path d="M140 167 Q152 162 164 167" stroke="#888" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* connecting lines */}
      <line x1="74" y1="158" x2="87" y2="155" stroke="#6c63ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
      <line x1="123" y1="155" x2="136" y2="158" stroke="#6c63ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
      {/* quote bubble */}
      <rect x="36" y="190" width="148" height="48" rx="8" fill="#111128" stroke="#1e1e3a" strokeWidth="1" />
      <rect x="48" y="202" width="90" height="8" rx="3" fill="#6c63ff" opacity="0.35" />
      <rect x="48" y="216" width="110" height="6" rx="3" fill="#333" opacity="0.7" />
      <rect x="48" y="228" width="75" height="6" rx="3" fill="#2a2a3a" opacity="0.6" />

      {/* AI badge */}
      <rect x="36" y="272" width="70" height="20" rx="10" fill="#0a1f18" stroke="#10a37f" strokeWidth="1" />
      <circle cx="48" cy="282" r="5" fill="#10a37f" opacity="0.9" />
      <text x="57" y="286" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#10a37f">ChatGPT</text>

      {/* ── ARROW 1→2 ── */}
      <path d="M196 165 L222 165" stroke="#6c63ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <polygon points="222,161 231,165 222,169" fill="#6c63ff" opacity="0.5" />

      {/* ── CARD 2 · SYNTHESIZE ── x=233 w=170 */}
      <rect x="233" y="30" width="170" height="270" rx="14" fill="#0c0c1e" stroke="#1e1e38" strokeWidth="1" />
      <text x="249" y="60" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#555">02</text>
      <text x="249" y="80" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#e0e0f0">Synthesize</text>

      {/* Visual: affinity map - colorful sticky notes grid */}
      {[
        { x: 252, y: 100, c: "#5c2d91", s: "#7c3aed" },
        { x: 290, y: 97,  c: "#1a3a5c", s: "#3b82f6" },
        { x: 328, y: 100, c: "#1a3a1a", s: "#22c55e" },
        { x: 366, y: 97,  c: "#5c2d91", s: "#7c3aed" },
        { x: 252, y: 138, c: "#1a3a5c", s: "#3b82f6" },
        { x: 290, y: 135, c: "#3a2a00", s: "#f59e0b" },
        { x: 328, y: 138, c: "#5c2d91", s: "#7c3aed" },
        { x: 366, y: 135, c: "#1a3a1a", s: "#22c55e" },
        { x: 252, y: 176, c: "#3a2a00", s: "#f59e0b" },
        { x: 290, y: 173, c: "#5c2d91", s: "#7c3aed" },
        { x: 328, y: 176, c: "#1a3a5c", s: "#3b82f6" },
        { x: 366, y: 173, c: "#3a2a00", s: "#f59e0b" },
      ].map((n, i) => (
        <rect key={i} x={n.x} y={n.y} width="30" height="24" rx="4"
          fill={n.c} stroke={n.s} strokeWidth="0.8" opacity="0.85" />
      ))}
      {/* cluster circle overlay */}
      <circle cx="310" cy="155" r="55" fill="none" stroke="#6c63ff" strokeWidth="1" strokeDasharray="5 4" opacity="0.2" />
      <circle cx="370" cy="140" r="28" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.18" />

      {/* AI badge */}
      <rect x="249" y="272" width="58" height="20" rx="10" fill="#261810" stroke="#CC785C" strokeWidth="1" />
      <circle cx="261" cy="282" r="5" fill="#CC785C" opacity="0.9" />
      <text x="270" y="286" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#CC785C">Claude</text>

      {/* ── ARROW 2→3 ── */}
      <path d="M409 165 L435 165" stroke="#6c63ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <polygon points="435,161 444,165 435,169" fill="#6c63ff" opacity="0.5" />

      {/* ── CARD 3 · DESIGN (highlighted) ── x=446 w=170 */}
      <rect x="446" y="30" width="170" height="270" rx="14" fill="url(#dp-card3)" stroke="#6c63ff" strokeWidth="1.5" />
      {/* top accent line */}
      <rect x="446" y="30" width="170" height="4" rx="2" fill="#6c63ff" opacity="0.7" />
      <text x="462" y="60" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#8b83ff">03</text>
      <text x="462" y="80" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#ffffff">Design</text>

      {/* Visual: Figma-style overlapping frames */}
      {/* Back frame */}
      <rect x="466" y="96" width="115" height="82" rx="7" fill="#0e0e28" stroke="#3a3a70" strokeWidth="1" opacity="0.7" />
      <rect x="472" y="103" width="103" height="14" rx="3" fill="#6c63ff" opacity="0.25" />
      <rect x="472" y="122" width="70" height="7" rx="2" fill="#2a2a5a" opacity="0.7" />
      <rect x="472" y="133" width="85" height="7" rx="2" fill="#222248" opacity="0.6" />
      <rect x="472" y="145" width="55" height="22" rx="11" fill="#6c63ff" opacity="0.4" />
      {/* Figma component indicator */}
      <rect x="548" y="145" width="26" height="26" rx="6" fill="#0e0e28" stroke="#6c63ff" strokeWidth="1" opacity="0.8" />
      <text x="552" y="162" fontFamily="system-ui,sans-serif" fontSize="14" fill="#f24e1e" opacity="0.8">✦</text>
      {/* Mobile frame overlay */}
      <rect x="530" y="102" width="72" height="110" rx="8" fill="#12122a" stroke="#6c63ff" strokeWidth="1.5" opacity="0.9" />
      <rect x="552" y="107" width="28" height="5" rx="3" fill="#2a2a50" />
      <rect x="537" y="118" width="58" height="38" rx="4" fill="#6c63ff" opacity="0.2" />
      <rect x="537" y="160" width="40" height="6" rx="2" fill="#4a4a80" opacity="0.7" />
      <rect x="537" y="170" width="50" height="6" rx="2" fill="#3a3a60" opacity="0.6" />
      <rect x="537" y="183" width="30" height="18" rx="9" fill="#6c63ff" opacity="0.6" />

      {/* AI badge */}
      <rect x="462" y="272" width="64" height="20" rx="10" fill="#0c1020" stroke="#4285f4" strokeWidth="1" />
      <circle cx="474" cy="282" r="5" fill="#4285f4" opacity="0.9" />
      <text x="483" y="286" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#4285f4">Gemini</text>

      {/* ── ARROW 3→4 ── */}
      <path d="M622 165 L648 165" stroke="#6c63ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <polygon points="648,161 657,165 648,169" fill="#6c63ff" opacity="0.5" />

      {/* ── CARD 4 · DELIVER ── x=659 w=122 */}
      <rect x="659" y="30" width="122" height="270" rx="14" fill="#0c0c1e" stroke="#1e1e38" strokeWidth="1" />
      <text x="675" y="60" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#555">04</text>
      <text x="675" y="80" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#e0e0f0">Deliver</text>

      {/* Visual: terminal window */}
      <rect x="668" y="96" width="104" height="130" rx="8" fill="#080810" stroke="#1a1a30" strokeWidth="1" />
      {/* title bar */}
      <rect x="668" y="96" width="104" height="24" rx="8" fill="#111122" />
      <circle cx="681" cy="108" r="4" fill="#ff5f57" opacity="0.8" />
      <circle cx="694" cy="108" r="4" fill="#febc2e" opacity="0.8" />
      <circle cx="707" cy="108" r="4" fill="#28c840" opacity="0.8" />
      {/* code lines */}
      <text x="676" y="134" fontFamily="monospace,sans-serif" fontSize="8" fill="#555">$</text>
      <text x="684" y="134" fontFamily="monospace,sans-serif" fontSize="8" fill="#4ec94e" opacity="0.9">claude build</text>
      <rect x="676" y="141" width="60" height="6" rx="2" fill="#6c63ff" opacity="0.25" />
      <rect x="676" y="151" width="82" height="6" rx="2" fill="#222" opacity="0.8" />
      <rect x="676" y="161" width="50" height="6" rx="2" fill="#222" opacity="0.6" />
      <rect x="676" y="171" width="70" height="6" rx="2" fill="#222" opacity="0.5" />
      <rect x="676" y="181" width="40" height="6" rx="2" fill="#1a3a1a" opacity="0.9" />
      {/* deployed badge */}
      <rect x="668" y="196" width="104" height="26" rx="0" fill="#0a1f0a" />
      <rect x="668" y="196" width="104" height="26" rx="8" fill="#0a1f0a" />
      <circle cx="685" cy="209" r="6" fill="#28c840" opacity="0.85" />
      <text x="680" y="213" fontFamily="system-ui,sans-serif" fontSize="10" fill="#28c840" opacity="0.9">✓</text>
      <text x="695" y="213" fontFamily="system-ui,sans-serif" fontSize="8" fill="#4ec94e" opacity="0.9">MVP live</text>

      {/* AI badge */}
      <rect x="675" y="272" width="84" height="20" rx="10" fill="#130f25" stroke="#7c3aed" strokeWidth="1" />
      <circle cx="687" cy="282" r="5" fill="#7c3aed" opacity="0.9" />
      <text x="696" y="286" fontFamily="system-ui,sans-serif" fontSize="8.5" fill="#7c3aed">Claude Code</text>

      {/* ── BOTTOM TOOL STRIP ── */}
      <line x1="20" y1="318" x2="780" y2="318" stroke="#151528" strokeWidth="1" />
      {/* tool circles row */}
      {[
        { cx: 80,  color: "#10a37f", label: "ChatGPT" },
        { cx: 180, color: "#CC785C", label: "Claude" },
        { cx: 280, color: "#4285f4", label: "Gemini" },
        { cx: 380, color: "#4285f4", label: "NotebookLM" },
        { cx: 500, color: "#f24e1e", label: "Figma Make" },
        { cx: 630, color: "#7c3aed", label: "Claude Code" },
      ].map((t) => (
        <g key={t.cx}>
          <circle cx={t.cx} cy="348" r="14" fill={t.color} opacity="0.12" />
          <circle cx={t.cx} cy="348" r="14" fill="none" stroke={t.color} strokeWidth="1" opacity="0.4" />
          <circle cx={t.cx} cy="348" r="5" fill={t.color} opacity="0.75" />
          <text x={t.cx} y="374" fontFamily="system-ui,sans-serif" fontSize="8.5" fill={t.color}
            opacity="0.7" textAnchor="middle">{t.label}</text>
        </g>
      ))}

      {/* fade out bottom */}
      <rect x="0" y="385" width="800" height="65" fill="url(#dp-fade)" />
    </svg>
  );
}
