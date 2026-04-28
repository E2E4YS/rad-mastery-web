// Lightweight inline SVG icons — institutional, no emoji, no cartoonish style.
// Each takes a className for sizing/color; stroke-based for crispness at all sizes.

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

const IconTube = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="9" y="2.5" width="6" height="5" rx="1" />
    <path d="M12 7.5v3" />
    <path d="M7 13.5h10l-1.5 5h-7z" />
    <path d="M11 18.5v3" />
    <path d="M13 18.5v3" />
  </svg>
);

const IconPatient = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <circle cx="12" cy="6" r="2.2" />
    <path d="M5.5 18c1.4-3 4.1-4.5 6.5-4.5s5.1 1.5 6.5 4.5" />
    <path d="M3.5 21h17" />
  </svg>
);

const IconTechnical = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 17h16" />
    <path d="M4 12h10" />
    <path d="M4 7h6" />
    <circle cx="17" cy="12" r="2.2" />
    <circle cx="13" cy="7" r="2.2" />
    <circle cx="9" cy="17" r="2.2" />
  </svg>
);

const IconCriteria = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="4" y="3.5" width="16" height="17" rx="2" />
    <path d="M8 8.5h8" />
    <path d="M8 12.5h8" />
    <path d="M8 16.5h5" />
    <path d="M16.5 16.5l1.4 1.4 2.6-2.6" />
  </svg>
);

const IconFeedback = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 6.5h16v9.5H13l-3.5 3v-3H4z" />
    <path d="M8 11h8" />
    <path d="M8 8.5h5" />
  </svg>
);

const IconRepeat = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 9a6 6 0 0 1 10.5-3.5L17 8" />
    <path d="M17 4v4h-4" />
    <path d="M20 15a6 6 0 0 1-10.5 3.5L7 16" />
    <path d="M7 20v-4h4" />
  </svg>
);

const IconArrowRight = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const IconCheck = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M5 12.5l4 4L19 7" />
  </svg>
);

const IconShield = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 3.5l7 2.5v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6z" />
    <path d="M9 12.5l2.2 2.2L15 11" />
  </svg>
);

const IconClock = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

const IconBeam = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 4v3" />
    <path d="M12 11l-5 9" />
    <path d="M12 11l5 9" />
    <path d="M12 11l-2.5 9" />
    <path d="M12 11l2.5 9" />
    <circle cx="12" cy="9.5" r="2.2" />
  </svg>
);

const IconBuilding = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 21V6l8-3 8 3v15" />
    <path d="M4 21h16" />
    <path d="M9 21v-5h6v5" />
    <path d="M8 9h2M14 9h2M8 13h2M14 13h2" />
  </svg>
);

const IconMail = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

const IconMenu = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

const IconClose = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
);

const IconLogoMark = ({ className = 'w-7 h-7' }) => (
  // Stylized "RM" mark — abstract crosshair + ring (radiography reference, not a real medical mark)
  <svg viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="16" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="M16 1.5v6M16 24.5v6M1.5 16h6M24.5 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconChip = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <rect x="9" y="9" width="6" height="6" rx="0.5" />
    <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
  </svg>
);

const IconLayers = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M12 3.5L3 8l9 4.5L21 8z" />
    <path d="M3 13l9 4.5L21 13" />
    <path d="M3 17.5L12 22l9-4.5" />
  </svg>
);

const IconDevice = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
    <path d="M11 18.5h2" />
  </svg>
);

const IconBook = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5z" />
    <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
  </svg>
);

Object.assign(window, {
  IconTube, IconPatient, IconTechnical, IconCriteria, IconFeedback, IconRepeat,
  IconArrowRight, IconCheck, IconShield, IconClock, IconBeam, IconBuilding,
  IconMail, IconMenu, IconClose, IconLogoMark, IconChip, IconLayers, IconDevice, IconBook,
});
