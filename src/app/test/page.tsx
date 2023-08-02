import { getServerSession } from "next-auth/next"
import options from "../api/auth/[...nextauth]/options"

const Test =  async () => {

  const session = await getServerSession(options)

  return (
    <div>{JSON.stringify(session)}</div>
  )
}

export default Test