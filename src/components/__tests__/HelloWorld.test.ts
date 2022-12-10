import { render, screen, cleanup } from '@testing-library/vue'
import UserEvent from '@testing-library/user-event'
import HelloWorld from '@/components/HelloWorld.vue'

afterEach(() => cleanup())

describe('<HelloWorld />', async () => {
  it('should renders without errors', async () => {
    const userEvent = UserEvent.setup()
    render(HelloWorld, {
      props: {
        msg: 'message',
      },
    })
    await userEvent.click(screen.getByRole('button'))
    const count = await screen.findByText(String(`The count is 1`))
    expect(count).toBeTruthy()
  })
})
