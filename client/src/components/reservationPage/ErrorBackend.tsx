interface ErrorMessage {
    message: string;
}

function ErrorBackend({message}:ErrorMessage) {
  return (
    <div>
      <span>{message} </span>
    </div>
  )
}

export default ErrorBackend
