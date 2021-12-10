import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export { default as Board } from './Board'
export { default as Goals } from './Goals'
export { default as Votes } from './Votes'
export { default as Resume } from './Resume'
export { default as GettingStarted } from './GettingStarted'

function Index() {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      history.push('/board')
    } else {
      history.push('/getting-started')
    }
  }, [history])

  return <div />
}

export default Index
