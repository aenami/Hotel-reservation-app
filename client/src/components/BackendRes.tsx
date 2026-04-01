type Response = {
    message: string
}

function BackendRes({message}: Response) {
  return (
    <div>
      <span className="text-red-500">{message}</span>
    </div>
  )
}

export default BackendRes
