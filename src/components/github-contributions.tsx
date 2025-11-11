'use client'

interface GitHubContributionsProps {
  username: string
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  return (
    <div className="font-mono w-full mx-auto mb-6 p-4 rounded-xl backdrop-blur-md bg-black/60 dark:bg-zinc-900/60 border border-white/10 dark:border-zinc-800/50 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-xl text-zinc-100 dark:text-zinc-100">My GitHub</h3>
        </div>
      </div>

      <div className="mb-4 flex justify-center">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=vue-dark&show_icons=true&hide_border=true&count_private=true`}
          alt="GitHub Stats"
          className="w-full max-w-2xl"
        />
      </div>
    </div>
  )
}

