/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: {
              ligthGray: '#F1F4F9'
            }
          }
        },
        fontSize: {
          sm: ['14px', '20px'],
          base: ['15px', '24px'],
        }
      },
    plugins: [],
  }