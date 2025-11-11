import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const inviteCode = '9uS8xZgHPW'
    
    const response = await fetch(
      `https://discord.com/api/invites/${inviteCode}?with_counts=true`,
      { 
        next: { revalidate: 60 },
        headers: {
          'Accept': 'application/json',
        }
      }
    )

    if (!response.ok) {
      const inviteData = await response.json().catch(() => null)
      
      if (inviteData?.guild?.id) {
        const widgetResponse = await fetch(
          `https://discord.com/api/guilds/${inviteData.guild.id}/widget.json`,
          { next: { revalidate: 60 } }
        )
        
        if (widgetResponse.ok) {
          const widgetData = await widgetResponse.json()
          return NextResponse.json({
            online: widgetData.presence_count || 0,
            total: widgetData.members?.length || 0,
          })
        }
      }
      
      throw new Error('Failed to fetch Discord stats')
    }

    const data = await response.json()
    
    return NextResponse.json({
      online: data.approximate_presence_count || 0,
      total: data.approximate_member_count || 0,
    })
  } catch (error) {
    console.error('Error fetching Discord stats:', error)
    return NextResponse.json(
      { online: 0, total: 0 },
      { status: 500 }
    )
  }
}

