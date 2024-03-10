import { useRouteError } from 'react-router-dom'
import '../styles/Error.css'

export default function ErrorPage() {
  const error: unknown = useRouteError()
  console.error(error)

  return (
    <div className='error-page'>
      <h1 className='red'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='red'>
        <i>{(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}</i>
      </p>
    </div>
  )
}
