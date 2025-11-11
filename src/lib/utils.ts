import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDiscordAvatarUrl(
  userId: string,
  avatarHash: string | null,
  size: number = 512
): string {
  if (avatarHash) {
    const format = avatarHash.startsWith('a_') ? 'gif' : 'png'
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.${format}?size=${size}`
  } else {
    try {
      const userIdBigInt = BigInt(userId)
      const defaultAvatarIndex = Number(userIdBigInt >> 22n) % 6
      return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarIndex}.png?size=${size}`
    } catch {
      return `https://cdn.discordapp.com/embed/avatars/0.png?size=${size}`
    }
  }
}



