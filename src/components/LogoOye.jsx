/**
 * Oyê brand logo system.
 * Based on the brand identity: colored tile + descriptor word (regular) + "Oyê." (bold).
 *
 * Variants:
 *   tile      — full square tile with bg color + descriptor + wordmark (brand lockup)
 *   wordmark  — just "Oyê." bold, no tile bg (for headers / light contexts)
 *   inline    — horizontal: descriptor + wordmark side by side (compact)
 */

export function LogoTile({
  descriptor = 'Pergunte',
  color = 'navy',   // navy | blue | green | slate | white
  size = 'md',      // sm | md | lg
}) {
  const palette = {
    navy:  { bg: '#14324A', text: '#ffffff' },
    blue:  { bg: '#1F5C88', text: '#ffffff' },
    green: { bg: '#2F6F5E', text: '#ffffff' },
    slate: { bg: '#65716F', text: '#ffffff' },
    white: { bg: '#ffffff', text: '#132A4E', border: '1.5px solid #e0e0e0' },
  }
  const sizes = {
    sm: { tile: 80,  desc: 10, word: 26 },
    md: { tile: 120, desc: 15, word: 38 },
    lg: { tile: 160, desc: 20, word: 52 },
  }
  const p = palette[color] || palette.navy
  const s = sizes[size] || sizes.md
  const ratio = s.tile / 120

  return (
    <svg
      width={s.tile}
      height={s.tile}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Oyê — ${descriptor}`}
      role="img"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <rect
        x="0" y="0" width="120" height="120"
        fill={p.bg}
        stroke={p.border || 'none'}
        strokeWidth={p.border ? 1.5 : 0}
      />
      <text
        x="50%" y="46%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={p.text}
        fontFamily="'Aptos Display', 'Aptos', 'Segoe UI', sans-serif"
        fontWeight="400"
        fontSize="14"
        letterSpacing="-0.01em"
      >
        {descriptor}
      </text>
      <text
        x="50%" y="76%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={p.text}
        fontFamily="'Aptos Display', 'Aptos', 'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="38"
        letterSpacing="-0.06em"
      >
        Oyê.
      </text>
    </svg>
  )
}

export function LogoWordmark({
  dark = true,      // true = ink on light, false = white on dark
  size = 'md',      // sm | md | lg | xl
}) {
  const color = dark ? '#14324A' : '#ffffff'
  const fontSizes = { sm: '1.4rem', md: '1.9rem', lg: '2.6rem', xl: '3.6rem' }
  const fs = fontSizes[size] || fontSizes.md

  return (
    <span
      aria-label="Oyê"
      style={{
        fontFamily: "'Aptos Display', 'Aptos', 'Segoe UI', sans-serif",
        fontWeight: 700,
        fontSize: fs,
        letterSpacing: '-0.07em',
        lineHeight: 1,
        color,
        display: 'inline-block',
        userSelect: 'none',
      }}
    >
      Oyê.
    </span>
  )
}

export function LogoInline({
  descriptor = null,
  dark = true,
  size = 'md',
}) {
  const color = dark ? '#14324A' : '#ffffff'
  const mutedColor = dark ? '#5e7a8a' : 'rgba(255,255,255,0.65)'
  const fontSizes = { sm: '1.25rem', md: '1.7rem', lg: '2.3rem' }
  const descSizes = { sm: '0.6rem', md: '0.7rem', lg: '0.9rem' }
  const fs = fontSizes[size] || fontSizes.md
  const ds = descSizes[size] || descSizes.md

  return (
    <span
      aria-label={descriptor ? `${descriptor} Oyê` : 'Oyê'}
      style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.25em', lineHeight: 1 }}
    >
      {descriptor && (
        <span style={{
          fontFamily: "'Aptos Display', 'Aptos', 'Segoe UI', sans-serif",
          fontWeight: 400,
          fontSize: ds,
          letterSpacing: '0.04em',
          color: mutedColor,
          textTransform: 'uppercase',
        }}>
          {descriptor}
        </span>
      )}
      <span style={{
        fontFamily: "'Aptos Display', 'Aptos', 'Segoe UI', sans-serif",
        fontWeight: 700,
        fontSize: fs,
        letterSpacing: '-0.07em',
        color,
        userSelect: 'none',
      }}>
        Oyê.
      </span>
    </span>
  )
}

export default LogoWordmark
