import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'Tennxxl'
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub stats')
    }

    const data = await response.json()
    
    return NextResponse.json({
      followers: data.followers || 0,
      publicRepos: data.public_repos || 0,
    })
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return NextResponse.json(
      { followers: 0, publicRepos: 0 },
      { status: 500 }
    )
  }
}


