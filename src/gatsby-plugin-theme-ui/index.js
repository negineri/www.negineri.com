import { roboto } from "@theme-ui/presets"

export default {
  ...roboto,
  colors: {
    ...roboto.colors,
    primary: '#2196F3',
    modes: {
      dark: {
        text: '#FFF',
        background: '#121212',
        primary: '#90CAF9',
        secondary: '#CE93D8',
        muted: '#f1f3f4'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      backgroundPosition: 'center',
      transition: 'background 0.8s',
      '&:hover': {
        background: '#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%',
      },
      '&:active': {
          backgroundColor: '#6eb9f7',
          backgroundSize: '100%',
          transition: 'background 0s'
      },
      '&:focus:not(.focus-visible)': {
        outline: "none"
      },
      cursor: "pointer"
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  }
}