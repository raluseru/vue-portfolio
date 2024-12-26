/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss/colors'

export default {
    content: ['./src/**/*.{vue,html,js}'],
    theme: {
        extend: {
            colors: {
                'regal-blue': '#A4EBF3',
            },
        },
    },
    darkMode: ['selector'],
    plugins: [],
}
