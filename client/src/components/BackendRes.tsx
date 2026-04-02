type TResponse = {
  response: {
    err: boolean;
    message: string;
  }
}

function BackendRes({response}: TResponse) {
  return (
    <div className={response.err === true ? 'bg-red-300' : 'bg-green-300'}>
      <span className={response.err === true ? 'text-red-600' : 'bg-green-600'}>{ response.message}</span>
    </div>
  )
}

export default BackendRes
