export const FallbackError = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className={'flex flex-col justify-center h-screen text-center items-center gap-4'}>
      <p>Something went wrong:</p>
      <pre className={'text-red-500'}>{error?.message || ''}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
