/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

const isProduction = process.env.NODE_ENV === 'production'

declare global {
  // Must use var, not let or const: https://stackoverflow.com/questions/35074713/extending-typescript-global-object-in-node-js/68328575#68328575

  var prisma: PrismaClient
}
const prisma = globalThis.prisma ?? new PrismaClient({
  log: isProduction
    ? ['error']
    : [
        'query',
        'info',
        'error',
        'warn',
      ],
})

export default prisma
