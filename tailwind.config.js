module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    enabled: true,
    content: ['./src/**/*.ts', './src/**/*.html'],
    options: {
      whitelistPatterns: [
        /^font/,
        /^cursor/,
        /^pl-/,
        /^px-/,
        /^pr-/,
        /^ml-/,
        /^mx-/,
        /^mr-/,
        /^mb-/,
        /^mt-/,
        /^ng-/
      ]
    }
  },
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          50: '#fafbfc',
          100: '#f7fafc',
          200: '#EBECF0',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c'
        },
        red: {
          100: '#fff5f5',
          200: '#fed7d7',
          300: '#feb2b2',
          400: '#fc8181',
          500: '#f56565',
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a'
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e'
        },
        yellow: {
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210'
        },
        green: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d'
        },
        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52'
        },
        blue: {
          100: '#ebf8ff',
          150: '#deebffe6',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          550: '#4C9AFF',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365'
        },
        indigo: {
          100: '#ebf4ff',
          200: '#c3dafe',
          300: '#a3bffa',
          400: '#7f9cf5',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b'
        },
        primary: '#0052CC',
        tertiary: '#e6e9f0',
        textHeader: '#344563',
        textDarkest: '#172b4d',
        textDark: '#42526E',
        textMedium: '#5E6C84',
        textLight: '#8993a4',
        textLink: '#0052cc',
        textLogo: '#DEEBFF',

        backgroundDarkPrimary: '#0747A6',
        backgroundMedium: '#dfe1e6',
        backgroundLight: '#ebecf0',
        backgroundLightest: '#F4F5F7',
        backgroundLightPrimary: '#D2E5FE',
        backgroundLightSuccess: '#E4FCEF',

        borderLightest: '#dfe1e6',
        borderLight: '#C1C7D0',
        borderInputFocus: '#4c9aff'
      },
      spacing: {
        sidebar: '240px',
        topbar: '56px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        full: '0 0 0 1px rgb(9 30 66 / 8%), 0 2px 4px 1px rgb(9 30 66 / 8%)',
        none: 'none',
      },
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        'not-allowed': 'not-allowed',
        crosshair: 'crosshair',
        'zoom-in': 'zoom-in',
        'ew-resize': 'ew-resize'
      }
    }
  }
}
