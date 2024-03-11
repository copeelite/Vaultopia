
import {useSession} from 'next-auth/react'

export const useCureentUser = () => {
    const session = useSession()
    return session.data?.user
}