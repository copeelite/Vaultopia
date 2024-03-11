import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import { UserRole } from '@prisma/client'
import NextAuth, {type DefaultSession} from 'next-auth'
import { Role } from '@prisma/client'

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    role: UserRole
    username?: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      username?: string
      role: Role
    }
  }
}
