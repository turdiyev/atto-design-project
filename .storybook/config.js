import addons from '@storybook/addons'

// get an instance to the communication channel for the manager and preview
const channel = addons.getChannel()

// switch body class for story along with interface theme
channel.on('DARK_MODE', isDark => {
  if (isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})