import 'vuetify/styles' // globální styly
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'plantTheme',
        themes: {
            plantTheme: {
                dark: false,
                colors: {
                    background: '#FAFAF7',
                    surface: '#FFFFFF',

                    primary: '#2F5D50',
                    secondary: '#8FA89B',

                    error: '#C4473D',
                    success: '#5B8A72',

                    'on-background': '#1F2D2A',
                    'on-surface': '#1F2D2A',

                    'state-hover': 'rgba(47, 93, 80, 0.08)',
                    'state-focus': 'rgba(47, 93, 80, 0.12)',
                    'state-pressed': 'rgba(47, 93, 80, 0.16)',
                },
            },
        },
    },
})
