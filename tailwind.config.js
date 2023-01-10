/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pt-sans)'], // use as .font-sans utility class
        caption: ['var(--font-pt-sans-caption)'], // use as .font-caption utility class
      },
      colors: {
        'chaos-black': {
          DEFAULT: '#101010',
          50: '#6C6C6C',
          100: '#626262',
          200: '#4D4D4D',
          300: '#393939',
          400: '#242424',
          500: '#101010',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        'cod-gray': {
          DEFAULT: '#191919',
          50: '#757575',
          100: '#6B6B6B',
          200: '#565656',
          300: '#424242',
          400: '#2D2D2D',
          500: '#191919',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        'dusty-gray': {
          DEFAULT: '#979797',
          50: '#F3F3F3',
          100: '#E9E9E9',
          200: '#D4D4D4',
          300: '#C0C0C0',
          400: '#ABABAB',
          500: '#979797',
          600: '#7B7B7B',
          700: '#5F5F5F',
          800: '#434343',
          900: '#272727',
        },
        supernova: {
          DEFAULT: '#FFC700',
          50: '#FFEFB8',
          100: '#FFEBA3',
          200: '#FFE27A',
          300: '#FFD952',
          400: '#FFD029',
          500: '#FFC700',
          600: '#C79B00',
          700: '#8F6F00',
          800: '#574400',
          900: '#1F1800',
        },
      },
      // prose customisations
      typography: ({ theme }) => ({
        // custom `nocturne` color theme
        nocturne: {
          css: {
            '--tw-prose-body': theme('colors.dusty-gray.DEFAULT'), // alternatives: dusty-gray[400/500]
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.pink[700]'), // COLOR?
            '--tw-prose-links': theme('colors.supernova.600'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.supernova.600'),
            '--tw-prose-bullets': theme('colors.supernova.600'),
            '--tw-prose-hr': theme('colors.dusty-gray.DEFAULT'),
            '--tw-prose-quotes': theme('colors.supernova.600'),
            '--tw-prose-quote-borders': theme('colors.supernova.600'),
            '--tw-prose-captions': theme('colors.pink[700]'),
            '--tw-prose-code': theme('colors.dusty-gray.100'), // alternative: chaos-black[50/100] or dusty-gray[100/700]
            '--tw-prose-pre-code': theme('colors.dusty-gray.200'), // alternative: dusty-gray[200/300]
            '--tw-prose-pre-bg': theme('colors.chaos-black.400'),
            '--tw-prose-th-borders': theme('colors.supernova.400'),
            '--tw-prose-td-borders': theme('colors.supernova.400'),
            '--tw-prose-invert-body': theme('colors.pink[200]'), // COLOR?
            '--tw-prose-invert-headings': theme('colors.white'), // COLOR?
            '--tw-prose-invert-lead': theme('colors.pink[300]'), // COLOR?
            '--tw-prose-invert-links': theme('colors.white'), // COLOR?
            '--tw-prose-invert-bold': theme('colors.white'), // COLOR?
            '--tw-prose-invert-counters': theme('colors.pink[400]'), // COLOR?
            '--tw-prose-invert-bullets': theme('colors.pink[600]'), // COLOR?
            '--tw-prose-invert-hr': theme('colors.pink[700]'), // COLOR?
            '--tw-prose-invert-quotes': theme('colors.pink[100]'), // COLOR?
            '--tw-prose-invert-quote-borders': theme('colors.pink[700]'), // COLOR?
            '--tw-prose-invert-captions': theme('colors.pink[400]'), // COLOR?
            '--tw-prose-invert-code': theme('colors.white'), // COLOR?
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'), // COLOR?
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)', // COLOR?
            '--tw-prose-invert-th-borders': theme('colors.pink[600]'), // COLOR?
            '--tw-prose-invert-td-borders': theme('colors.pink[700]'), // COLOR?
          },
        },
        // raw CSS customisations [we only use lg and xl modifiers and they both should have same overrides]
        // for exact modifier see reference here: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        lg: {
          css: {
            blockquote: {
              fontStyle: 'normal',
              backgroundColor: theme('colors.chaos-black.DEFAULT'),
            },
          },
        },
        xl: {
          css: {
            blockquote: {
              fontStyle: 'normal',
              backgroundColor: theme('colors.chaos-black.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
