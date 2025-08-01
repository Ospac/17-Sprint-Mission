const colors = {
  primary: '#3692ff',
  gray800: '#1f2937',
  gray700: '#374151',
  gray600: '#4b5563',
  gray500: '#6b7280',
  gray400: '#9ca3af',
  gray200: '#e5e7eb',
  gray100: '#f3f4f6',
  gray50: '#F9FAFB',
  errorRed: '#f74747',
  white: '#ffffff',
};

const fontFamily = {
  primary: `"pretendard", sans-serif`,
  logo: `"ROKAF_Sans_Medium", sans-serif`,
};

const fontSize = {
  xs: '0.75rem' /* 12px */,
  sm: '0.875rem' /* 14px */,
  md: '1rem' /* 16px, base */,
  lg: '1.125rem' /* 18px */,
  xl: '1.25rem' /* 20px,*/,
  '2xl': '1.5rem' /* 24px */,
  '3xl': '1.75rem' /* 28px */,
};

const spacing = {
  header: '72px',
  xs: '5px',
  sm: '10px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '128px',
};

const borderRadius = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '40px',
  circle: '9999px',
};

const theme = {
  colors,
  fontFamily,
  fontSize,
  spacing,
  borderRadius,
};

export default theme;
export type Theme = typeof theme;
