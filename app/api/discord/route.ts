import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  try {
    // Use Lanyard API to get real-time Discord presence data
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`)
    
    if (!response.ok) {
      throw new Error(`Lanyard API error: ${response.status}`)
    }

    const lanyardData = await response.json()
    
    if (!lanyardData.success) {
      throw new Error('Lanyard API returned unsuccessful response')
    }

    const data = lanyardData.data
    
    // Transform Lanyard data to our format
    const discordData = {
      id: data.discord_user.id,
      username: data.discord_user.username,
      discriminator: data.discord_user.discriminator,
      avatar: data.discord_user.avatar 
        ? `https://cdn.discordapp.com/avatars/${userId}/${data.discord_user.avatar}.png`
        : `https://ui-avatars.com/api/?name=${data.discord_user.username}&background=3b82f6&color=fff&size=64`,
      status: data.discord_status || 'offline',
      activities: data.activities || [],
      // Additional Lanyard data
      spotify: data.spotify || null,
      listening_to_spotify: data.listening_to_spotify || false,
      active_on_discord_mobile: data.active_on_discord_mobile || false,
      active_on_discord_desktop: data.active_on_discord_desktop || false,
      kv: data.kv || {}
    }

    return NextResponse.json(discordData)
  } catch (error) {
    console.error('Lanyard API error:', error)
    
    // Fallback to mock data if Lanyard API fails
    const mockDiscordData = {
      id: userId,
      username: 'buzzdev',
      discriminator: '1234',
      avatar: `https://ui-avatars.com/api/?name=buzzdev&background=3b82f6&color=fff&size=64`,
      status: 'online',
      activities: [
        {
          name: 'Sleeping...',
          type: 0,
          state: ' ? ',
          details: ' ? ',
          application_id: '438122941302046720'
        }
      ],
      spotify: null,
      listening_to_spotify: false,
      active_on_discord_mobile: false,
      active_on_discord_desktop: true,
      kv: {}
    }

    return NextResponse.json(mockDiscordData)
  }
}
