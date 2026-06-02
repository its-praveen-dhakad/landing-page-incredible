const {
  useState: useWebState
} = React;
const ICONS = {
  search: React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), React.createElement("path", {
    d: "m20 20-3.5-3.5"
  })),
  bell: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
  }), React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  user: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  })),
  phone: React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8.09 9.67a16 16 0 0 0 6.24 6.24l1.19-1.19a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.92z"
  }),
  users: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87"
  }), React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  home: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M3 12 12 3l9 9"
  }), React.createElement("path", {
    d: "M5 10v10h14V10"
  })),
  calendar: React.createElement(React.Fragment, null, React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })),
  trophy: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"
  }), React.createElement("path", {
    d: "M7 4H4v2a3 3 0 0 0 3 3M17 4h3v2a3 3 0 0 1-3 3"
  })),
  chart: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M3 3v18h18"
  }), React.createElement("path", {
    d: "m7 14 4-4 4 4 5-5"
  })),
  settings: React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  plus: React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  play: React.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3",
    fill: "currentColor"
  }),
  heart: React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }),
  share: React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), React.createElement("line", {
    x1: "8.59",
    y1: "13.51",
    x2: "15.42",
    y2: "17.49"
  }), React.createElement("line", {
    x1: "15.41",
    y1: "6.51",
    x2: "8.59",
    y2: "10.49"
  })),
  arrowRight: React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })),
  arrowLeft: React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), React.createElement("polyline", {
    points: "12 19 5 12 12 5"
  })),
  chevronD: React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }),
  chevronR: React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }),
  more: React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.5",
    fill: "currentColor"
  })),
  check: React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }),
  x: React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  filter: React.createElement("polygon", {
    points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
  }),
  globe: React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), React.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  })),
  flag: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), React.createElement("line", {
    x1: "4",
    y1: "22",
    x2: "4",
    y2: "15"
  })),
  shield: React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }),
  money: React.createElement(React.Fragment, null, React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  upload: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), React.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), React.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  })),
  download: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })),
  zap: React.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    fill: "currentColor"
  }),
  ban: React.createElement(React.Fragment, null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), React.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "19.07",
    y2: "19.07"
  })),
  eye: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  edit: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), React.createElement("path", {
    d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"
  })),
  logout: React.createElement(React.Fragment, null, React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }), React.createElement("polyline", {
    points: "16 17 21 12 16 7"
  }), React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "9",
    y2: "12"
  })),
  inbox: React.createElement(React.Fragment, null, React.createElement("polyline", {
    points: "22 12 16 12 14 15 10 15 8 12 2 12"
  }), React.createElement("path", {
    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  })),
  flame: React.createElement("path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
  })
};
function WIcon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none'
}) {
  const path = ICONS[name];
  if (!path) return null;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-block',
      verticalAlign: 'middle',
      flexShrink: 0
    }
  }, path);
}
function WButton({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  full,
  onClick,
  style,
  disabled
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: '0 12px',
      fontSize: 13,
      borderRadius: 8,
      gap: 6
    },
    md: {
      height: 40,
      padding: '0 16px',
      fontSize: 14,
      borderRadius: 10,
      gap: 8
    },
    lg: {
      height: 48,
      padding: '0 22px',
      fontSize: 15,
      borderRadius: 12,
      gap: 8
    }
  };
  const variants = {
    primary: {
      background: '#00ADEE',
      color: '#fff',
      boxShadow: '0 6px 18px rgba(0,173,247,.32)'
    },
    secondary: {
      background: '#F5F5F5',
      color: '#1A1A1A'
    },
    dark: {
      background: '#1A1A1A',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: '#00ADEE'
    },
    outline: {
      background: '#fff',
      color: '#1A1A1A',
      border: '1px solid #E5E5E5'
    },
    danger: {
      background: '#FF383C',
      color: '#fff'
    },
    'danger-soft': {
      background: '#FFE4E5',
      color: '#FF383C'
    },
    'success-soft': {
      background: '#E5F6EC',
      color: '#1B7C44'
    }
  };
  return React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all .15s ease',
      opacity: disabled ? 0.5 : 1,
      ...sizes[size],
      ...variants[variant],
      ...(full ? {
        width: '100%'
      } : {}),
      ...style
    }
  }, icon, children, iconRight);
}
function WBadge({
  tone = 'neutral',
  children,
  dot,
  size = 'md'
}) {
  const map = {
    live: {
      bg: '#FF383C',
      fg: '#fff'
    },
    neutral: {
      bg: '#F5F5F5',
      fg: '#353535'
    },
    brand: {
      bg: '#00ADEE',
      fg: '#fff'
    },
    'brand-soft': {
      bg: '#E8F6FE',
      fg: '#0079B0'
    },
    success: {
      bg: '#E5F6EC',
      fg: '#1B7C44'
    },
    warning: {
      bg: '#FFF6E1',
      fg: '#9A6E14'
    },
    danger: {
      bg: '#FFE4E5',
      fg: '#FF383C'
    },
    dark: {
      bg: '#1A1A1A',
      fg: '#fff'
    },
    gold: {
      bg: 'linear-gradient(135deg,#FFE08A,#E89A00)',
      fg: '#1A1A1A'
    }
  };
  const c = map[tone] || map.neutral;
  const h = size === 'sm' ? 20 : size === 'lg' ? 28 : 24;
  const fs = size === 'sm' ? 10 : size === 'lg' ? 12 : 11;
  return React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: h,
      padding: `0 ${h * 0.4}px`,
      borderRadius: 999,
      background: c.bg,
      color: c.fg,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: fs,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, dot && React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: c.fg
    }
  }), children);
}
function WAvatar({
  src,
  name,
  size = 36,
  tint = '#EDBBD6',
  square
}) {
  const init = name ? name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase() : '';
  return React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: square ? 10 : '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      color: '#1A1A1A',
      fontSize: Math.max(10, Math.round(size * 0.35)),
      background: tint,
      overflow: 'hidden',
      flexShrink: 0
    }
  }, src ? React.createElement("img", {
    src: src,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    alt: ""
  }) : init);
}
function WInput({
  label,
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  type = 'text',
  size = 'md'
}) {
  const [focus, setFocus] = useWebState(false);
  const heights = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const h = heights[size];
  return React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--ip-font-display)'
    }
  }, label && React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 12,
      color: '#444',
      letterSpacing: '.01em'
    }
  }, label), React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      borderRadius: 10,
      background: '#F5F5F5',
      border: focus ? '1.5px solid #00ADEE' : '1.5px solid transparent',
      boxShadow: focus ? '0 0 0 4px rgba(0,173,238,.15)' : 'none',
      transition: 'all .15s ease'
    }
  }, prefix, React.createElement("input", {
    type: type,
    value: value ?? '',
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      color: '#1A1A1A',
      minWidth: 0
    }
  }), suffix));
}
function WCard({
  children,
  padding = 20,
  style
}) {
  return React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      border: '1px solid #EDEDEF',
      padding,
      ...style
    }
  }, children);
}
function WMetric({
  label,
  value,
  delta,
  deltaTone = 'success',
  icon,
  accent = '#00ADEE'
}) {
  const tones = {
    success: '#1B7C44',
    danger: '#FF383C',
    neutral: '#666'
  };
  return React.createElement(WCard, {
    padding: 20,
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 12,
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, label), icon && React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: accent + '1A',
      color: accent,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(WIcon, {
    name: icon,
    size: 16,
    color: accent
  }))), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: '#1A1A1A',
      letterSpacing: '-.01em',
      marginTop: 10
    }
  }, value), delta && React.createElement("div", {
    style: {
      marginTop: 4,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 12,
      color: tones[deltaTone]
    }
  }, deltaTone === 'success' ? '▲' : deltaTone === 'danger' ? '▼' : '·', " ", delta));
}
Object.assign(window, {
  WIcon,
  WButton,
  WBadge,
  WAvatar,
  WInput,
  WCard,
  WMetric
});
const V1W = 1280;
const V1ResponsiveContext = React.createContext({
  width: V1W,
  isMobile: false,
  isTablet: false
});
const V1JoinModalContext = React.createContext(() => {});
function V1ResponsiveProvider({
  children
}) {
  const getWidth = () => typeof window === 'undefined' ? V1W : window.innerWidth;
  const [width, setWidth] = React.useState(getWidth);
  React.useEffect(() => {
    const onResize = () => setWidth(getWidth());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return React.createElement(V1ResponsiveContext.Provider, {
    value: {
      width,
      isMobile: width < 760,
      isTablet: width < 1040
    }
  }, children);
}
function useV1Layout() {
  return React.useContext(V1ResponsiveContext);
}
function useV1JoinModal() {
  return React.useContext(V1JoinModalContext);
}
function V1Nav() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const openJoinModal = useV1JoinModal();
  const links = [{
    label: 'How it works',
    href: '#how'
  }, {
    label: 'Formats',
    href: '#events'
  }, {
    label: 'Creator preview',
    href: '#creators'
  }, {
    label: 'For partners',
    href: '#partners'
  }, {
    label: 'FAQ',
    href: '#faq'
  }];
  return React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(18px) saturate(180%)',
      borderBottom: '1px solid #EDEDEF'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: isMobile ? '14px 22px' : '16px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: isTablet ? 18 : 36
    }
  }, React.createElement("a", {
    href: "#top",
    "aria-label": "Incredible home",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      flexShrink: 0
    }
  }, React.createElement("img", {
    src: "assets/logos/Incredible platform-03.svg",
    style: {
      height: 30
    },
    alt: ""
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: '#1A1A1A',
      letterSpacing: '-.01em'
    }
  }, "Incr\xE8dible")), !isMobile && React.createElement("nav", {
    style: {
      display: 'flex',
      gap: isTablet ? 2 : 6,
      flex: 1,
      justifyContent: isTablet ? 'center' : 'flex-start'
    }
  }, links.map(link => React.createElement("a", {
    key: link.label,
    href: link.href,
    style: {
      padding: isTablet ? '8px 9px' : '8px 14px',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: '#444',
      textDecoration: 'none',
      borderRadius: 8,
      cursor: 'pointer'
    }
  }, link.label))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginLeft: 'auto'
    }
  }, React.createElement(WButton, {
    size: "md",
    variant: "primary",
    onClick: () => openJoinModal({
      title: 'Join the Incredible beta',
      subtitle: 'Verify your mobile number to reserve early access.'
    })
  }, isMobile ? 'Join' : 'Join waitlist'))));
}
function V1WaitlistForm({
  stacked,
  id = 'waitlist'
}) {
  const {
    isMobile
  } = useV1Layout();
  const [phone, setPhone] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [step, setStep] = React.useState('phone');
  const [message, setMessage] = React.useState('');
  const shouldStack = stacked || isMobile;
  const isOtpStep = step === 'otp';
  const isVerified = step === 'verified';
  const messageTone = message.startsWith('Incorrect') || message.startsWith('Enter') ? '#FF383C' : isVerified ? '#1B7C44' : 'rgba(53,53,53,.65)';
  function handleSubmit(e) {
    e.preventDefault();
    if (isVerified) return;
    if (step === 'phone') {
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 10) {
        setMessage('Enter a valid mobile number.');
        return;
      }
      setStep('otp');
      setMessage('OTP sent to your mobile number.');
      return;
    }
    if (otp.trim() === '123456') {
      setStep('verified');
      setMessage('Mobile number verified. You are on the early access list.');
      return;
    }
    setMessage('Incorrect OTP. Please try again.');
  }
  return React.createElement("div", {
    id: id,
    style: {
      maxWidth: 480,
      width: shouldStack ? '100%' : 'auto'
    }
  }, React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: shouldStack ? 'column' : 'row',
      gap: 10,
      background: '#fff',
      padding: 8,
      borderRadius: 14,
      boxShadow: '0 12px 32px rgba(15,23,42,.08)',
      border: '1px solid #EDEDEF',
      width: '100%'
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: 1,
      padding: '0 14px',
      height: 48,
      borderRadius: 10,
      background: '#F5F5F5'
    }
  }, React.createElement(WIcon, {
    name: isVerified ? 'check' : isOtpStep ? 'shield' : 'phone',
    size: 16,
    color: isVerified ? '#1B7C44' : '#888'
  }), React.createElement("input", {
    value: isOtpStep ? otp : phone,
    onChange: e => {
      if (isOtpStep) setOtp(e.target.value);else setPhone(e.target.value);
      if (message) setMessage('');
    },
    placeholder: isOtpStep ? 'Enter 6-digit OTP' : '+91 98765 43210',
    type: "tel",
    inputMode: isOtpStep ? 'numeric' : 'tel',
    autoComplete: isOtpStep ? 'one-time-code' : 'tel',
    "aria-label": isOtpStep ? 'One-time password' : 'Mobile number',
    disabled: isVerified,
    maxLength: isOtpStep ? 6 : undefined,
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--ip-font-body)',
      fontSize: 15,
      color: '#1A1A1A'
    }
  })), React.createElement(WButton, {
    size: "lg",
    variant: "primary",
    full: shouldStack,
    disabled: isVerified,
    iconRight: !isVerified && React.createElement(WIcon, {
      name: "arrowRight",
      size: 16,
      color: "#fff"
    })
  }, isVerified ? 'Verified ✓' : isOtpStep ? 'Verify OTP' : 'Get early access')), message && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 10,
      fontFamily: 'var(--ip-font-body)',
      fontSize: 13,
      lineHeight: 1.4,
      color: messageTone
    }
  }, React.createElement("span", null, message), isOtpStep && React.createElement("button", {
    type: "button",
    onClick: () => {
      setStep('phone');
      setOtp('');
      setMessage('');
    },
    style: {
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: '#00ADEE',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Change number")));
}
function V1JoinModal({
  config,
  onClose
}) {
  const {
    isMobile
  } = useV1Layout();
  React.useEffect(() => {
    if (!config) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [config, onClose]);
  if (!config) return null;
  const title = config.title || 'Join the Incredible beta';
  const subtitle = config.subtitle || 'Enter your mobile number and verify the OTP to reserve early access.';
  return React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "join-modal-title",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(10,16,24,.58)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: isMobile ? 'flex-end' : 'center',
      justifyContent: 'center',
      padding: isMobile ? 14 : 32
    }
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: 520,
      background: '#fff',
      borderRadius: isMobile ? 22 : 28,
      padding: isMobile ? 22 : 30,
      boxShadow: '0 30px 90px rgba(15,23,42,.35)',
      border: '1px solid rgba(255,255,255,.7)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 18,
      marginBottom: 18
    }
  }, React.createElement("div", null, React.createElement(WBadge, {
    tone: "brand-soft",
    dot: true
  }, "Private beta"), React.createElement("h2", {
    id: "join-modal-title",
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 28 : 34,
      lineHeight: 1.08,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '14px 0 8px'
    }
  }, title), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'rgba(53,53,53,.68)',
      margin: 0
    }
  }, subtitle)), React.createElement("button", {
    type: "button",
    "aria-label": "Close popup",
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      border: '1px solid #EDEDEF',
      background: '#F9F9FA',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, React.createElement(WIcon, {
    name: "x",
    size: 16,
    color: "#1A1A1A"
  }))), React.createElement(V1WaitlistForm, {
    stacked: true,
    id: null
  }), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 12,
      lineHeight: 1.45,
      color: 'rgba(53,53,53,.55)',
      marginTop: 14
    }
  }, "We will use this number for beta access and OTP verification updates.")));
}
function V1Hero() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  return React.createElement("section", {
    id: "top",
    style: {
      padding: isMobile ? '48px 22px 32px' : isTablet ? '64px 32px 32px' : '72px 40px 32px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1fr 460px',
      gap: isMobile ? 34 : 56,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 999,
      background: '#F0FAFF',
      color: '#0079B0',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: '#00ADEE'
    }
  }), "Private beta waitlist"), React.createElement("h1", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 44 : isTablet ? 60 : 72,
      lineHeight: 1.02,
      letterSpacing: '-.025em',
      color: '#1A1A1A',
      margin: '20px 0 18px'
    }
  }, "Where stars are ", React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg, #00ADEE 0%, #0079B0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, "discovered"), "."), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: isMobile ? 17 : 19,
      lineHeight: 1.5,
      color: 'rgba(53,53,53,.75)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, "Incredible is an upcoming talent competition app for creators, fans, and event partners. We are building the first beta now: join the waitlist for early access, pilot updates, and launch invites."), React.createElement(V1WaitlistForm, null), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isMobile ? 22 : 36,
      marginTop: 32
    }
  }, [{
    v: 'Beta',
    l: 'opening soon'
  }, {
    v: 'India-first',
    l: 'pilot roadmap'
  }, {
    v: 'Creators + fans',
    l: 'early access list'
  }].map(s => React.createElement("div", {
    key: s.l
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: '#1A1A1A',
      letterSpacing: '-.01em'
    }
  }, s.v), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 13,
      color: 'rgba(53,53,53,.6)',
      marginTop: 2
    }
  }, s.l))))), React.createElement(V1HeroPhone, null)));
}
function V1HeroPhone() {
  const {
    isMobile
  } = useV1Layout();
  const phoneWidth = isMobile ? 278 : 320;
  const phoneHeight = isMobile ? 504 : 580;
  return React.createElement("div", {
    style: {
      position: 'relative',
      height: isMobile ? 535 : 600,
      maxWidth: isMobile ? 340 : 'none',
      margin: isMobile ? '0 auto' : 0
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-10% -20%',
      background: 'radial-gradient(closest-side, rgba(0,173,238,.35), transparent 70%)',
      filter: 'blur(40px)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      right: isMobile ? 0 : -40,
      width: isMobile ? 92 : 120,
      height: isMobile ? 92 : 120,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#FF4D6D,#C9184A)',
      filter: 'blur(8px)',
      opacity: .35
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%) rotate(-2deg)',
      width: phoneWidth,
      height: phoneHeight,
      borderRadius: isMobile ? 38 : 44,
      background: '#1A1A1A',
      padding: isMobile ? 8 : 10,
      boxShadow: '0 30px 80px rgba(15,23,42,.25), 0 0 0 1px rgba(0,0,0,.1)'
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: isMobile ? 30 : 34,
      background: '#fff',
      overflow: 'hidden',
      position: 'relative'
    }
  }, React.createElement(V1PhoneScreen, null), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 90,
      height: 24,
      borderRadius: 999,
      background: '#1A1A1A',
      zIndex: 5
    }
  }))), React.createElement("div", {
    style: {
      position: 'absolute',
      top: isMobile ? 78 : 100,
      right: isMobile ? 0 : 0,
      padding: isMobile ? '10px 12px' : '12px 16px',
      background: '#fff',
      borderRadius: 14,
      boxShadow: '0 12px 28px rgba(15,23,42,.15)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      transform: 'rotate(4deg)'
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#EDBBD6url(assets/illustrations/contestant-1.png) center/cover',
      backgroundImage: 'url(assets/illustrations/contestant-1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#1A1A1A'
    }
  }, "Beta invite requested"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 11,
      color: 'rgba(53,53,53,.6)'
    }
  }, "for early creator access"))), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: isMobile ? 50 : 80,
      left: isMobile ? 0 : -10,
      padding: '10px 14px',
      background: '#1A1A1A',
      borderRadius: 12,
      boxShadow: '0 12px 28px rgba(15,23,42,.25)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      transform: 'rotate(-3deg)'
    }
  }, React.createElement(WBadge, {
    tone: "brand",
    dot: true,
    size: "sm"
  }, "Preview"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 12,
      color: '#fff'
    }
  }, "Talent stage prototype")));
}
function V1PhoneScreen() {
  return React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#F9F9FA',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("div", {
    style: {
      padding: '46px 18px 12px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 11,
      color: 'rgba(53,53,53,.6)'
    }
  }, "Beta preview"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: '#1A1A1A',
      letterSpacing: '-.01em'
    }
  }, "Upcoming stages")), React.createElement(WAvatar, {
    name: "Riya",
    tint: "#D7CDF5",
    size: 32
  }))), React.createElement("div", {
    style: {
      margin: '0 18px',
      borderRadius: 16,
      overflow: 'hidden',
      position: 'relative',
      aspectRatio: '16/10'
    }
  }, React.createElement("img", {
    src: "assets/illustrations/contestant-1.png",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    alt: ""
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,.8) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, React.createElement(WBadge, {
    tone: "brand",
    dot: true,
    size: "sm"
  }, "Preview")), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 12,
      right: 12,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "Aarya Mehta"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 11,
      opacity: .8
    }
  }, "Creator profile preview"))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '14px 18px',
      overflow: 'hidden'
    }
  }, [{
    l: '🎤 Singing',
    g: 'linear-gradient(135deg,#6A5BFF,#3A2BC4)'
  }, {
    l: '💃 Dance',
    g: 'linear-gradient(135deg,#FF8A3D,#D14E00)'
  }, {
    l: '🎭 Comedy',
    g: 'linear-gradient(135deg,#F4B83A,#C77F00)'
  }].map(c => React.createElement("div", {
    key: c.l,
    style: {
      padding: '8px 12px',
      borderRadius: 999,
      background: c.g,
      color: '#fff',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: 'nowrap'
    }
  }, c.l))), React.createElement("div", {
    style: {
      margin: '0 18px',
      background: '#fff',
      borderRadius: 14,
      padding: 14,
      border: '1px solid #EDEDEF'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 13,
      color: '#1A1A1A'
    }
  }, "Creator shortlist"), React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 10,
      color: '#00ADEE'
    }
  }, "See all")), [{
    n: 'Naomi Z',
    v: 'Beta',
    t: '#BFE5FA'
  }, {
    n: 'Kabir S',
    v: 'Pilot',
    t: '#BFE9D6'
  }].map((p, i) => React.createElement("div", {
    key: p.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 0'
    }
  }, React.createElement("div", {
    style: {
      width: 18,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 800,
      fontSize: 12,
      color: '#1A1A1A'
    }
  }, i + 2), React.createElement(WAvatar, {
    name: p.n,
    tint: p.t,
    size: 26,
    square: true
  }), React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#1A1A1A'
    }
  }, p.n), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11,
      color: '#00ADEE'
    }
  }, p.v)))));
}
function V1HowItWorks() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const audiences = [{
    id: 'fan',
    label: 'I want to watch',
    emoji: '👀',
    steps: [{
      t: 'Join the waitlist',
      d: 'Reserve early access with mobile verification.'
    }, {
      t: 'Get your beta invite',
      d: 'We will open pilot access in phases as the app develops.'
    }, {
      t: 'Discover pilot stages',
      d: 'Preview singing, dance, comedy and creator-led formats.'
    }, {
      t: 'Support pilot rounds',
      d: 'Be ready to back creators once beta events begin.'
    }]
  }, {
    id: 'contestant',
    label: 'I want to create',
    emoji: '🎤',
    steps: [{
      t: 'Request creator access',
      d: 'Tell us your category, city and social profile.'
    }, {
      t: 'Build your profile',
      d: 'Prepare short talent reels for the beta creator flow.'
    }, {
      t: 'Join a pilot stage',
      d: 'Get invited when your category enters testing.'
    }, {
      t: 'Launch with a spotlight',
      d: 'Early creators get priority placement during the first public rollout.'
    }]
  }, {
    id: 'organiser',
    label: 'I want to host',
    emoji: '🎪',
    steps: [{
      t: 'Request partner access',
      d: 'Share the event format you want to bring online.'
    }, {
      t: 'Shape your rules',
      d: 'Plan rounds, categories, moderation and judging before launch.'
    }, {
      t: 'Preview the dashboard',
      d: 'Review voting tools, sponsor placements and audience analytics.'
    }, {
      t: 'Launch with support',
      d: 'Work with our team when pilot partner events are ready.'
    }]
  }];
  const [tab, setTab] = React.useState('fan');
  const active = audiences.find(a => a.id === tab);
  return React.createElement("section", {
    id: "how",
    style: {
      padding: isMobile ? '64px 22px' : isTablet ? '72px 32px' : '80px 40px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36,
      gap: isMobile ? 18 : 40
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "How it works"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 34 : 44,
      lineHeight: 1.05,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '10px 0 0'
    }
  }, "One app. Three ways to play.")), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'rgba(53,53,53,.7)',
      maxWidth: 380,
      margin: 0
    }
  }, "Whether you want to watch, create, or host, the beta will open in phases while the app is being built.")), React.createElement("div", {
    style: {
      display: 'flex',
      width: isMobile ? '100%' : 'fit-content',
      flexWrap: 'wrap',
      padding: 5,
      borderRadius: 14,
      background: '#F5F5F5',
      gap: 4,
      marginBottom: 36
    }
  }, audiences.map(a => React.createElement("button", {
    key: a.id,
    onClick: () => setTab(a.id),
    style: {
      flex: isMobile ? '1 1 100%' : '0 0 auto',
      padding: '10px 20px',
      borderRadius: 10,
      border: 'none',
      cursor: 'pointer',
      background: tab === a.id ? '#fff' : 'transparent',
      color: tab === a.id ? '#1A1A1A' : 'rgba(53,53,53,.6)',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 14,
      boxShadow: tab === a.id ? '0 2px 6px rgba(15,23,42,.06)' : 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      transition: 'all .15s ease'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, a.emoji), " ", a.label))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: 18
    }
  }, active.steps.map((s, i) => React.createElement("div", {
    key: s.t,
    style: {
      background: '#fff',
      borderRadius: 18,
      padding: 24,
      border: '1px solid #EDEDEF',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#F0FAFF',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: '#00ADEE'
    }
  }, "0", i + 1), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: '#1A1A1A',
      marginTop: 18,
      letterSpacing: '-.01em'
    }
  }, s.t), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'rgba(53,53,53,.7)',
      marginTop: 6
    }
  }, s.d)))));
}
function V1LiveEvents() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const openJoinModal = useV1JoinModal();
  const events = [{
    name: 'Voice of Mumbai',
    sub: 'Singing pilot',
    city: 'Mumbai first',
    focus: 'Creator auditions',
    status: 'Planned',
    img: 'assets/illustrations/onboarding-bg.png',
    cat: '🎤 Singing'
  }, {
    name: 'Step Up India',
    sub: 'Dance pilot',
    city: 'Pan-India roadmap',
    focus: 'Short-form dance battles',
    status: 'Beta soon',
    img: 'assets/illustrations/contestant-2.png',
    cat: '💃 Dance'
  }, {
    name: 'Open Mic Lab',
    sub: 'Comedy pilot',
    city: 'Goa · Mumbai roadmap',
    focus: 'Creator-led rounds',
    status: 'Planned',
    img: 'assets/illustrations/contestant-1.png',
    cat: '🎭 Comedy'
  }];
  return React.createElement("section", {
    id: "events",
    style: {
      padding: isMobile ? '32px 22px 64px' : isTablet ? '40px 32px 72px' : '40px 40px 80px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28,
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "Pilot formats"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 34 : 44,
      lineHeight: 1.05,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '10px 0 0'
    }
  }, "Formats we are preparing.")), React.createElement("a", {
    onClick: () => openJoinModal({
      title: 'Get launch updates',
      subtitle: 'Verify your mobile number to receive beta and pilot-format updates.'
    }),
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: '#00ADEE',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, "Get launch updates \u2192")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1.4fr 1fr 1fr',
      gap: 20
    }
  }, events.map((e, i) => React.createElement("div", {
    key: e.name,
    style: {
      position: 'relative',
      borderRadius: 22,
      overflow: 'hidden',
      height: isMobile ? 360 : i === 0 ? 460 : 380,
      background: '#1A1A1A'
    }
  }, React.createElement("img", {
    src: e.img,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .85
    },
    alt: ""
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.55) 50%, rgba(0,0,0,.92) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      right: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement(WBadge, {
    tone: "brand",
    dot: true
  }, e.status), React.createElement("span", {
    style: {
      padding: '5px 11px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.16)',
      backdropFilter: 'blur(10px)',
      color: '#fff',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11
    }
  }, e.cat)), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 22,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11,
      color: 'rgba(255,255,255,.7)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, e.sub), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: i === 0 ? 30 : 24,
      lineHeight: 1.1,
      letterSpacing: '-.02em',
      margin: '6px 0 12px'
    }
  }, e.name), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--ip-font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,.75)',
      marginBottom: 16
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(WIcon, {
    name: "globe",
    size: 12,
    color: "rgba(255,255,255,.75)"
  }), " ", e.city), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(WIcon, {
    name: "flag",
    size: 12,
    color: "rgba(255,255,255,.75)"
  }), " Pilot roadmap")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      gap: 14
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 11,
      color: 'rgba(255,255,255,.6)'
    }
  }, "Launch focus"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: '#fff'
    }
  }, e.focus)), React.createElement(WButton, {
    size: "md",
    variant: "primary",
    onClick: () => openJoinModal({
      title: `Join ${e.name} waitlist`,
      subtitle: `Verify your mobile number for ${e.sub.toLowerCase()} beta updates.`
    })
  }, "Join waitlist")))))));
}
function V1Contestants() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const openJoinModal = useV1JoinModal();
  const list = [{
    rank: 1,
    name: 'Aarya Mehta',
    handle: '@aarya',
    status: 'Creator beta',
    event: 'Voice pilot',
    tint: '#EDBBD6',
    img: 'assets/illustrations/contestant-1.png',
    trend: 'Singing'
  }, {
    rank: 2,
    name: 'Naomi Zelu',
    handle: '@naomi',
    status: 'Profile draft',
    event: 'Dance pilot',
    tint: '#BFE5FA',
    img: 'assets/illustrations/contestant-2.png',
    trend: 'Dance'
  }, {
    rank: 3,
    name: 'Kabir Shah',
    handle: '@kabir',
    status: 'Early invite',
    event: 'Comedy pilot',
    tint: '#BFE9D6',
    img: 'assets/illustrations/contestant-1.png',
    trend: 'Comedy'
  }, {
    rank: 4,
    name: 'Riya Sen',
    handle: '@riya',
    status: 'Beta profile',
    event: 'Modeling pilot',
    tint: '#D7CDF5',
    img: 'assets/illustrations/contestant-2.png',
    trend: 'Modeling'
  }, {
    rank: 5,
    name: 'Aman Kapoor',
    handle: '@aman',
    status: 'Creator waitlist',
    event: 'Step Up pilot',
    tint: '#F0E0BF',
    img: 'assets/illustrations/contestant-1.png',
    trend: 'Fitness'
  }];
  return React.createElement("section", {
    id: "creators",
    style: {
      padding: isMobile ? '64px 22px' : isTablet ? '72px 32px' : '80px 40px',
      background: '#F9F9FA'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36,
      gap: 18
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "Creator preview"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 34 : 44,
      lineHeight: 1.05,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '10px 0 0'
    }
  }, "A preview of the creator experience.")), React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 13,
      color: '#0079B0'
    }
  }, React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#00ADEE',
      boxShadow: '0 0 0 5px rgba(0,173,238,.18)'
    }
  }), " Beta preview \xB7 not public yet")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1.1fr 1fr',
      gap: 28
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 24,
      overflow: 'hidden',
      background: '#1A1A1A',
      minHeight: isMobile ? 440 : 500
    }
  }, React.createElement("img", {
    src: list[0].img,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      inset: 0
    },
    alt: ""
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,.3) 0%, rgba(0,0,0,.95) 85%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 22,
      left: 22,
      right: 22,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 14px',
      borderRadius: 999,
      background: 'linear-gradient(135deg,#FFE08A,#E89A00)',
      color: '#1A1A1A',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: '.02em'
    }
  }, "Creator spotlight"), React.createElement(WBadge, {
    tone: "brand",
    dot: true
  }, "Preview")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: isMobile ? 20 : 26,
      right: isMobile ? 20 : 26,
      bottom: isMobile ? 20 : 26,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,.7)'
    }
  }, list[0].event), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 32 : 40,
      letterSpacing: '-.02em',
      margin: '4px 0 2px'
    }
  }, list[0].name), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.6)'
    }
  }, list[0].handle), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 18
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 38 : 48,
      color: '#00ADEE',
      letterSpacing: '-.02em'
    }
  }, "Beta"), React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.7)'
    }
  }, list[0].trend, " profile")), React.createElement(WButton, {
    size: "lg",
    variant: "primary",
    onClick: () => openJoinModal({
      title: 'Join as a creator',
      subtitle: 'Verify your mobile number to request creator beta access.'
    }),
    style: {
      marginTop: 22
    },
    icon: React.createElement(WIcon, {
      name: "upload",
      size: 16,
      color: "#fff"
    })
  }, "Join as creator"))), React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 24,
      padding: 24,
      border: '1px solid #EDEDEF'
    }
  }, list.slice(1).map((p, i) => React.createElement("div", {
    key: p.handle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 4px',
      borderBottom: i < list.length - 2 ? '1px solid #F0F0F2' : 'none'
    }
  }, React.createElement("div", {
    style: {
      width: 28,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 800,
      fontSize: 18,
      color: '#1A1A1A',
      textAlign: 'center'
    }
  }, p.rank), React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: p.tint,
      backgroundImage: `url(${p.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: '#1A1A1A'
    }
  }, p.name), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 12,
      color: 'rgba(53,53,53,.6)'
    }
  }, p.handle, " \xB7 ", p.event)), React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: '#00ADEE'
    }
  }, p.status), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 11,
      color: '#1F8A5B'
    }
  }, p.trend)), !isMobile && React.createElement(WButton, {
    size: "sm",
    variant: "outline"
  }, "Preview"))), React.createElement("button", {
    onClick: () => openJoinModal({
      title: 'Join creator waitlist',
      subtitle: 'Enter your mobile number to get creator onboarding updates.'
    }),
    style: {
      width: '100%',
      marginTop: 18,
      padding: '12px',
      borderRadius: 10,
      background: '#F5F5F5',
      border: 'none',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 13,
      color: '#1A1A1A',
      cursor: 'pointer'
    }
  }, "Join creator waitlist \u2192")))));
}
function V1Categories() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const cats = [{
    id: 'singing',
    label: 'Singing',
    emoji: '🎤',
    count: 'Pilot format',
    grad: 'linear-gradient(135deg,#6A5BFF,#3A2BC4)'
  }, {
    id: 'dance',
    label: 'Dance',
    emoji: '💃',
    count: 'Beta format',
    grad: 'linear-gradient(135deg,#FF8A3D,#D14E00)'
  }, {
    id: 'comedy',
    label: 'Comedy',
    emoji: '🎭',
    count: 'Pilot format',
    grad: 'linear-gradient(135deg,#F4B83A,#C77F00)'
  }, {
    id: 'modeling',
    label: 'Modeling',
    emoji: '📸',
    count: 'Roadmap format',
    grad: 'linear-gradient(135deg,#1A1A1A,#3D3D44)'
  }, {
    id: 'photo',
    label: 'Photography',
    emoji: '📷',
    count: 'Roadmap format',
    grad: 'linear-gradient(135deg,#27AE60,#0D6B3A)'
  }, {
    id: 'fitness',
    label: 'Fitness',
    emoji: '💪',
    count: 'Roadmap format',
    grad: 'linear-gradient(135deg,#FF383C,#9A1F22)'
  }, {
    id: 'rap',
    label: 'Rap & Spoken',
    emoji: '🎙️',
    count: 'Roadmap format',
    grad: 'linear-gradient(135deg,#00ADEE,#0079B0)'
  }, {
    id: 'mag',
    label: 'Magic & Variety',
    emoji: '🎩',
    count: 'Roadmap format',
    grad: 'linear-gradient(135deg,#9C27B0,#560E66)'
  }];
  return React.createElement("section", {
    id: "categories",
    style: {
      padding: isMobile ? '64px 22px' : isTablet ? '72px 32px' : '80px 40px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "Categories"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 34 : 44,
      lineHeight: 1.05,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '10px 0 14px'
    }
  }, "Find your stage."), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 17,
      lineHeight: 1.5,
      color: 'rgba(53,53,53,.7)',
      maxWidth: 600,
      margin: '0 auto'
    }
  }, "We are shaping the first pilot categories with early users before public launch.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: 16
    }
  }, cats.map(c => React.createElement("div", {
    key: c.id,
    style: {
      position: 'relative',
      height: isMobile ? 154 : 180,
      borderRadius: 18,
      padding: 20,
      background: c.grad,
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      boxShadow: '0 8px 22px rgba(15,23,42,.12)'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 40,
      lineHeight: 1
    }
  }, c.emoji), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.01em'
    }
  }, c.label), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 12,
      opacity: .8,
      marginTop: 4
    }
  }, c.count)), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'rgba(255,255,255,.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(WIcon, {
    name: "arrowRight",
    size: 14,
    color: "#fff"
  }))))));
}
function V1AppPreview() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const openJoinModal = useV1JoinModal();
  return React.createElement("section", {
    style: {
      padding: isMobile ? '72px 22px' : isTablet ? '88px 32px' : '100px 40px',
      background: '#0E0E10',
      color: '#fff',
      overflow: 'hidden',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '-15%',
      width: 700,
      height: 700,
      borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(0,173,238,.18), transparent 70%)',
      filter: 'blur(20px)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
      gap: isMobile ? 44 : 80,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "The beta app"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 38 : 56,
      lineHeight: 1.04,
      letterSpacing: '-.025em',
      color: '#fff',
      margin: '14px 0 22px'
    }
  }, "Built for vertical talent.", React.createElement("br", null), "Designed for ", React.createElement("span", {
    style: {
      color: '#00ADEE'
    }
  }, "beta feedback.")), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 18,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.75)',
      margin: 0,
      maxWidth: 480
    }
  }, "The app is still in development. These screens show the planned mobile experience: vertical discovery, verified access, pilot-stage profiles, and voting tools ready for testing."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 36
    }
  }, [{
    i: 'play',
    t: 'Vertical reels',
    d: 'Short talent drops built for swipe-first discovery.'
  }, {
    i: 'phone',
    t: 'Verified access',
    d: 'Mobile number and OTP flow for early access requests.'
  }, {
    i: 'chart',
    t: 'Pilot voting',
    d: 'Voting will open only during approved beta events.'
  }, {
    i: 'shield',
    t: 'Trust tools',
    d: 'Moderation and integrity checks are planned into the beta.'
  }].map(f => React.createElement("div", {
    key: f.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'rgba(0,173,238,.15)',
      border: '1px solid rgba(0,173,238,.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(WIcon, {
    name: f.i,
    size: 18,
    color: "#00ADEE"
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: '#fff'
    }
  }, f.t), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,.55)'
    }
  }, f.d))))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: 14,
      marginTop: 36
    }
  }, React.createElement("a", {
    onClick: () => openJoinModal({
      title: 'Join iOS beta waitlist',
      subtitle: 'Verify your mobile number to get iOS beta access updates.'
    }),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 22px',
      background: '#fff',
      color: '#1A1A1A',
      borderRadius: 12,
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M17.05 12.04c-.04-3.37 2.75-4.99 2.88-5.07-1.57-2.3-4.02-2.61-4.89-2.65-2.08-.21-4.06 1.23-5.11 1.23-1.07 0-2.69-1.2-4.42-1.17-2.27.03-4.37 1.32-5.54 3.35-2.36 4.09-.6 10.13 1.7 13.45 1.13 1.63 2.46 3.45 4.2 3.39 1.69-.07 2.32-1.09 4.36-1.09 2.03 0 2.6 1.09 4.37 1.05 1.81-.03 2.96-1.65 4.07-3.29 1.28-1.89 1.81-3.72 1.83-3.81-.04-.02-3.51-1.35-3.55-5.39z"
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 9,
      opacity: .7
    }
  }, "Coming soon"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "iOS beta"))), React.createElement("a", {
    onClick: () => openJoinModal({
      title: 'Join Android beta waitlist',
      subtitle: 'Verify your mobile number to get Android beta access updates.'
    }),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 22px',
      background: '#fff',
      color: '#1A1A1A',
      borderRadius: 12,
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24"
  }, React.createElement("path", {
    fill: "#00ADEE",
    d: "M3.6 1.6c-.4.4-.6.9-.6 1.6v17.6c0 .7.2 1.2.6 1.6L13 12.6 3.6 1.6z"
  }), React.createElement("path", {
    fill: "#FF4D6D",
    d: "M16.5 9.2L5.1 2.5c-.6-.3-1.2-.4-1.5-.1L13 12.6l3.5-3.4z"
  }), React.createElement("path", {
    fill: "#F4B83A",
    d: "M20.2 11.1c-.6-.3-1.6-.9-1.6-.9l-2.1 1.2 2.1 1.2s1-.6 1.6-.9c.7-.4.6-1.2 0-1.6z"
  }), React.createElement("path", {
    fill: "#27AE60",
    d: "M3.6 22.4c.3.3.9.2 1.5-.1l11.4-6.7-3.5-3.5-9.4 10.3z"
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 9,
      opacity: .7
    }
  }, "Coming soon"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Android beta"))))), React.createElement("div", {
    style: {
      position: 'relative',
      height: isMobile ? 500 : 660,
      maxWidth: isMobile ? 320 : 540,
      width: '100%',
      margin: isTablet ? '0 auto' : 0
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: isMobile ? 0 : 40,
      width: isMobile ? 190 : 260,
      height: isMobile ? 400 : 540,
      borderRadius: isMobile ? 30 : 36,
      background: '#1A1A1A',
      padding: 6,
      boxShadow: '0 30px 80px rgba(0,0,0,.45)',
      transform: 'rotate(-8deg)'
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: isMobile ? 24 : 30,
      overflow: 'hidden',
      background: '#F9F9FA'
    }
  }, React.createElement(V1PhoneScreen, null))), React.createElement("div", {
    style: {
      position: 'absolute',
      top: isMobile ? 54 : 60,
      left: isMobile ? 100 : 200,
      width: isMobile ? 205 : 280,
      height: isMobile ? 430 : 580,
      borderRadius: isMobile ? 34 : 40,
      background: '#1A1A1A',
      padding: isMobile ? 6 : 8,
      boxShadow: '0 40px 100px rgba(0,0,0,.6)',
      zIndex: 2
    }
  }, React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: isMobile ? 28 : 32,
      overflow: 'hidden',
      background: '#1A1A1A',
      position: 'relative'
    }
  }, React.createElement(V1VoteScreen, null), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 80,
      height: 22,
      borderRadius: 999,
      background: '#1A1A1A'
    }
  }))))));
}
function V1VoteScreen() {
  const openJoinModal = useV1JoinModal();
  return React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: '#1A1A1A'
    }
  }, React.createElement("img", {
    src: "assets/illustrations/contestant-2.png",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .8
    },
    alt: ""
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,.9) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 50,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#fff'
    }
  }, React.createElement(WBadge, {
    tone: "brand",
    dot: true,
    size: "sm"
  }, "Preview"), React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11
    }
  }, "Beta screen")), React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      top: '40%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    i: 'heart',
    n: 'Save',
    c: '#FF4D6D'
  }, {
    i: 'comment-outline',
    n: 'Pilot'
  }, {
    i: 'share',
    n: 'Share'
  }].map(a => React.createElement("div", {
    key: a.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      background: 'rgba(0,0,0,.45)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, a.i === 'heart' ? React.createElement(WIcon, {
    name: "heart",
    size: 18,
    color: a.c,
    fill: a.c
  }) : a.i === 'comment-outline' ? React.createElement(WIcon, {
    name: "users",
    size: 16,
    color: "#fff"
  }) : React.createElement(WIcon, {
    name: "share",
    size: 16,
    color: "#fff"
  })), React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 10,
      color: '#fff'
    }
  }, a.n)))), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 70,
      bottom: 18,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 16
    }
  }, "Naomi Zelu"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 11,
      opacity: .8
    }
  }, "@naomi \xB7 Dance pilot preview"), React.createElement("button", {
    onClick: () => openJoinModal({
      title: 'Join the beta',
      subtitle: 'Verify your mobile number to reserve early app access.'
    }),
    style: {
      marginTop: 10,
      padding: '8px 16px',
      borderRadius: 999,
      background: '#00ADEE',
      color: '#fff',
      border: 'none',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      boxShadow: '0 8px 22px rgba(0,173,247,.4)'
    }
  }, "Join beta")));
}
function V1LeaderboardScreen() {
  const list = [{
    n: 'Aarya M',
    v: 'Beta',
    t: '#EDBBD6',
    img: 'assets/illustrations/contestant-1.png'
  }, {
    n: 'Naomi Z',
    v: 'Pilot',
    t: '#BFE5FA',
    img: 'assets/illustrations/contestant-2.png'
  }, {
    n: 'Kabir S',
    v: 'Invite',
    t: '#BFE9D6',
    img: 'assets/illustrations/contestant-1.png'
  }, {
    n: 'Riya S',
    v: 'Draft',
    t: '#D7CDF5',
    img: 'assets/illustrations/contestant-2.png'
  }, {
    n: 'Aman K',
    v: 'Waitlist',
    t: '#F0E0BF',
    img: 'assets/illustrations/contestant-1.png'
  }];
  return React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#fff',
      padding: '50px 14px 14px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: '#1A1A1A',
      letterSpacing: '-.01em'
    }
  }, "Pilot shortlist"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 10,
      color: 'rgba(53,53,53,.6)'
    }
  }, "Beta profiles")), React.createElement(WBadge, {
    tone: "brand-soft",
    size: "sm"
  }, "Preview")), list.map((p, i) => React.createElement("div", {
    key: p.n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 0',
      borderBottom: i < list.length - 1 ? '1px solid #F0F0F2' : 'none'
    }
  }, React.createElement("div", {
    style: {
      width: 20,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 800,
      fontSize: 12,
      color: i < 3 ? '#1A1A1A' : 'rgba(53,53,53,.5)'
    }
  }, i + 1), React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: p.t,
      backgroundImage: `url(${p.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#1A1A1A'
    }
  }, p.n), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE'
    }
  }, p.v))));
}
function V1Prize() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const openJoinModal = useV1JoinModal();
  return React.createElement("section", {
    style: {
      padding: isMobile ? '64px 22px' : isTablet ? '72px 32px' : '80px 40px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: isMobile ? 24 : 32,
      padding: isMobile ? 28 : 56,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #00ADEE 0%, #0079B0 60%, #00ADEE 100%)',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      right: -80,
      width: 360,
      height: 360,
      borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(255,224,138,.5), transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -120,
      left: -80,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(closest-side, rgba(255,77,109,.4), transparent 70%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1.4fr 1fr',
      gap: isMobile ? 34 : 56,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: 'rgba(255,255,255,.85)',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "Early access"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 48 : 72,
      lineHeight: 1,
      letterSpacing: '-.03em',
      color: '#fff',
      margin: '14px 0 12px'
    }
  }, "Be first in line."), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: isMobile ? 17 : 19,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.85)',
      maxWidth: 480,
      margin: 0
    }
  }, "Join the waitlist for beta invites, pilot city updates, creator onboarding, and launch rewards as Incredible gets closer to release."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, React.createElement(WButton, {
    size: "lg",
    variant: "dark",
    onClick: () => openJoinModal({
      title: 'Get early access',
      subtitle: 'Verify your mobile number to join the Incredible early access list.'
    }),
    style: {
      background: '#1A1A1A',
      color: '#fff'
    },
    iconRight: React.createElement(WIcon, {
      name: "arrowRight",
      size: 16,
      color: "#fff"
    })
  }, "Join waitlist"))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    t: 'Beta invite',
    v: 'Early',
    sub: 'Priority access when the first testing slots open.'
  }, {
    t: 'Creator priority',
    v: 'First',
    sub: 'Early creators can prepare profiles before public rollout.'
  }, {
    t: 'Launch rewards',
    v: 'Ready',
    sub: 'Founder-list updates, city pilots, and release announcements.'
  }].map(p => React.createElement("div", {
    key: p.t,
    style: {
      background: 'rgba(255,255,255,.14)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,.18)',
      borderRadius: 16,
      padding: '18px 20px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      gap: isMobile ? 8 : 16
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 600,
      fontSize: 13,
      color: 'rgba(255,255,255,.85)'
    }
  }, p.t), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-.01em'
    }
  }, p.v)), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 12,
      color: 'rgba(255,255,255,.7)',
      marginTop: 4
    }
  }, p.sub)))))));
}
function V1Partners() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  const openJoinModal = useV1JoinModal();
  return React.createElement("section", {
    id: "partners",
    style: {
      padding: isMobile ? '64px 22px' : isTablet ? '72px 32px' : '80px 40px',
      background: '#F9F9FA'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: isMobile ? 24 : 32,
      padding: isMobile ? 28 : 56,
      border: '1px solid #EDEDEF',
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
      gap: isMobile ? 34 : 56,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "For organisers & brands"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 32 : 38,
      lineHeight: 1.1,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '12px 0 16px'
    }
  }, "Plan your first digital talent competition."), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'rgba(53,53,53,.7)',
      margin: 0
    }
  }, "Incredible is preparing tools for voting, moderation, audience analytics, sponsor visibility, and creator operations. Partner access will open as the beta becomes ready for pilot events."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)',
      gap: 14,
      marginTop: 28
    }
  }, [{
    t: 'Pilot planning',
    d: 'format and rollout support'
  }, {
    t: 'Custom rules',
    d: 'rounds, judging and moderation'
  }, {
    t: 'Sponsor-ready',
    d: 'brand placements in the roadmap'
  }, {
    t: 'Launch support',
    d: 'hands-on beta onboarding'
  }].map(s => React.createElement("div", {
    key: s.t
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: '#1A1A1A',
      letterSpacing: '-.01em'
    }
  }, s.t), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 13,
      color: 'rgba(53,53,53,.6)'
    }
  }, s.d)))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: 12,
      marginTop: 28
    }
  }, React.createElement(WButton, {
    size: "lg",
    variant: "primary",
    onClick: () => openJoinModal({
      title: 'Join partner waitlist',
      subtitle: 'Verify your mobile number so our team can follow up about partner beta access.'
    })
  }, "Join partner waitlist"), React.createElement(WButton, {
    size: "lg",
    variant: "outline"
  }, "Request beta demo \u2192"))), React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 22,
      background: '#1A1A1A',
      overflow: 'hidden',
      aspectRatio: '4/3'
    }
  }, React.createElement("img", {
    src: "assets/illustrations/contestant-2.png",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .9
    },
    alt: ""
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,.1) 0%, rgba(0,0,0,.65) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18
    }
  }, React.createElement(WBadge, {
    tone: "brand"
  }, "Partner preview")), React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 22,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-.01em'
    }
  }, "Partner preview: sponsor visibility, engagement analytics, and creator operations in one dashboard."), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 16
    }
  }, React.createElement(WAvatar, {
    name: "Aman Mehra",
    tint: "#F0E0BF",
    size: 36
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 13
    }
  }, "Incredible Partner Team"), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 11,
      opacity: .7
    }
  }, "Pilot planning support"))))))));
}
function V1FAQ() {
  const {
    isMobile
  } = useV1Layout();
  const qs = [{
    q: 'Is the app live right now?',
    a: 'Not yet. Incredible is under development, and this landing page is collecting verified early access requests before the first beta opens.'
  }, {
    q: 'When will early access open?',
    a: 'Beta invites will roll out in phases. We will start with a small group of creators, fans, and partner organisers so the core experience can be tested carefully.'
  }, {
    q: 'Can I compete right now?',
    a: 'Not yet. Join the waitlist as a creator and we will contact you when your category or city is part of a pilot stage.'
  }, {
    q: 'Are the app screens and formats final?',
    a: 'No. They are product previews that show the intended direction while the app is being built. Final features, rules, and event formats may change before launch.'
  }, {
    q: 'Why do you ask for a mobile number?',
    a: 'Mobile verification helps us keep early access requests clean and prepares the app for OTP-based login during beta testing.'
  }, {
    q: 'Can organisers join the beta?',
    a: 'Yes. Event organisers, colleges, creators, and brands can join the partner waitlist to discuss pilot formats and beta demos.'
  }];
  const [open, setOpen] = React.useState(0);
  return React.createElement("section", {
    id: "faq",
    style: {
      padding: isMobile ? '64px 22px' : '80px 40px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 12,
      color: '#00ADEE',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "FAQ"), React.createElement("h2", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: isMobile ? 34 : 44,
      lineHeight: 1.05,
      letterSpacing: '-.02em',
      color: '#1A1A1A',
      margin: '10px 0 0'
    }
  }, "Questions, answered.")), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, qs.map((qa, i) => React.createElement("div", {
    key: qa.q,
    style: {
      background: '#fff',
      border: '1px solid #EDEDEF',
      borderRadius: 14,
      padding: isMobile ? '18px 18px' : '20px 24px',
      cursor: 'pointer'
    },
    onClick: () => setOpen(open === i ? -1 : i)
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: '#1A1A1A',
      letterSpacing: '-.005em'
    }
  }, qa.q), React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: open === i ? '#00ADEE' : '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all .2s ease'
    }
  }, React.createElement(WIcon, {
    name: open === i ? 'x' : 'plus',
    size: 14,
    color: open === i ? '#fff' : '#1A1A1A'
  }))), open === i && React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'rgba(53,53,53,.75)',
      marginTop: 14,
      maxWidth: 760
    }
  }, qa.a)))));
}
function V1Footer() {
  const {
    isMobile,
    isTablet
  } = useV1Layout();
  return React.createElement("footer", {
    style: {
      background: '#1A1A1A',
      color: '#fff',
      padding: isMobile ? '56px 22px 28px' : '64px 40px 32px'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '1.4fr repeat(4, 1fr)',
      gap: isMobile ? 28 : 40,
      marginBottom: 48
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, React.createElement("img", {
    src: "assets/logos/Incredible platform-01.svg",
    style: {
      height: 32
    },
    alt: ""
  }), React.createElement("span", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-.01em'
    }
  }, "Incr\xE8dible")), React.createElement("p", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.6)',
      maxWidth: 320,
      margin: '0 0 22px'
    }
  }, "Incredible is an upcoming talent competition app for creators, fans, and event partners. Join the waitlist while the beta is being built."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['Instagram', 'TikTok', 'YouTube', 'X', 'LinkedIn'].map(s => React.createElement("a", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: 'rgba(255,255,255,.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 11,
      color: '#fff',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, s[0])))), [{
    t: 'Product',
    l: ['How it works', 'Categories', 'Pilot formats', 'Creator preview', 'For partners']
  }, {
    t: 'Company',
    l: ['About', 'Careers', 'Press kit', 'Blog', 'Contact']
  }, {
    t: 'Legal',
    l: ['Terms', 'Privacy', 'Community guidelines', 'Trust & safety']
  }, {
    t: 'Beta access',
    l: ['iOS beta waitlist', 'Android beta waitlist', 'Launch updates', 'Help center']
  }].map(col => React.createElement("div", {
    key: col.t
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.85)',
      marginBottom: 16
    }
  }, col.t), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.l.map(li => React.createElement("a", {
    key: li,
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.6)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, li)))))), React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.05)',
      borderRadius: 22,
      padding: isMobile ? 22 : 32,
      display: 'grid',
      gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
      gap: isMobile ? 22 : 32,
      alignItems: 'center',
      marginBottom: 48
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-.01em'
    }
  }, "One email a month. No spam."), React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.6)',
      marginTop: 6
    }
  }, "Product updates, beta invites, and pilot city notes.")), React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: 10
    }
  }, React.createElement("input", {
    placeholder: "you@stagename.com",
    type: "email",
    inputMode: "email",
    autoComplete: "email",
    "aria-label": "Email address",
    style: {
      flex: 1,
      minWidth: 0,
      height: 48,
      padding: '0 16px',
      borderRadius: 10,
      border: '1px solid rgba(255,255,255,.15)',
      background: 'rgba(255,255,255,.06)',
      color: '#fff',
      fontFamily: 'var(--ip-font-body)',
      fontSize: 14,
      outline: 'none'
    }
  }), React.createElement(WButton, {
    size: "lg",
    variant: "primary",
    full: isMobile
  }, "Subscribe"))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.08)'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'var(--ip-font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,.4)'
    }
  }, "\xA9 2026 Incredible Platform \xB7 Made in India"))));
}
function LandingV1() {
  const [joinModal, setJoinModal] = React.useState(null);
  const openJoinModal = React.useCallback(config => setJoinModal(config || {}), []);
  const closeJoinModal = React.useCallback(() => setJoinModal(null), []);
  return React.createElement(V1ResponsiveProvider, null, React.createElement(V1JoinModalContext.Provider, {
    value: openJoinModal
  }, React.createElement("div", {
    style: {
      width: '100%',
      background: '#fff',
      color: '#1A1A1A',
      fontFamily: 'var(--ip-font-body)',
      overflow: 'hidden'
    }
  }, React.createElement(V1Nav, null), React.createElement(V1Hero, null), React.createElement(V1HowItWorks, null), React.createElement(V1LiveEvents, null), React.createElement(V1Contestants, null), React.createElement(V1Categories, null), React.createElement(V1AppPreview, null), React.createElement(V1Prize, null), React.createElement(V1Partners, null), React.createElement(V1FAQ, null), React.createElement(V1Footer, null)), React.createElement(V1JoinModal, {
    config: joinModal,
    onClose: closeJoinModal
  })));
}
Object.assign(window, {
  LandingV1
});
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(LandingV1));