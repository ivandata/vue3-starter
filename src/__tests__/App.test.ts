import { render } from '@testing-library/vue'
import App from './App.vue'
import { describe, it } from 'vitest'

describe('App', async () => {
  it('should renders without errors', () => {
    render(App)
  })
})
