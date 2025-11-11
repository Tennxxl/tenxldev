'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
  content?: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  onTabChange?: (tabId: string) => void
}

export function Tabs({ tabs, defaultTab, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <div className="w-full">
      <div className="flex gap-2 border-b border-zinc-800/50 dark:border-zinc-700/50 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              'relative px-4 py-2 font-mono text-sm transition-colors',
              'hover:text-zinc-100 dark:hover:text-zinc-100',
              activeTab === tab.id
                ? 'text-zinc-100 dark:text-zinc-100'
                : 'text-zinc-500 dark:text-zinc-500',
              activeTab === tab.id && 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-zinc-100 dark:after:bg-zinc-100'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.find((tab) => tab.id === activeTab)?.content && (
        <div className="mt-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
      )}
    </div>
  )
}



