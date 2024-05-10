/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            '2xl': '1440px',
            'xl': '1280px',
            'lg': '1024px',
            'md': '768px',
            'sm': '640px',
        },
        extend: {
            colors: {
                'green': '#46A358',
                'white': '#fff',
                'black': '#3D3D3D',
                'cart-white':'rgba(245, 245, 245, 0.5)'
            }
        },
    },
    plugins: [],
}