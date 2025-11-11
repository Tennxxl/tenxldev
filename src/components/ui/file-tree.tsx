'use client'

import { useState, ReactNode } from 'react'
import { ChevronRight, ChevronDown, Folder as FolderIcon, File as FileIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileTreeProps {
  children: ReactNode
  className?: string
}

export function Tree({ children, className }: FileTreeProps) {
  return (
    <div className={cn('font-mono text-base text-zinc-700 dark:text-zinc-300', className)}>
      {children}
    </div>
  )
}

interface FolderProps {
  name: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Folder({ name, children, defaultOpen = false, className, alwaysOpen = false }: FolderProps & { alwaysOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen || alwaysOpen)

  return (
    <div className={cn('select-none', className)}>
      <div
        className={cn(
          'flex items-center gap-2 py-2 transition-colors',
          alwaysOpen ? '' : 'cursor-pointer hover:text-zinc-900 dark:hover:text-zinc-100'
        )}
        onClick={() => !alwaysOpen && setIsOpen(!isOpen)}
      >
        {!alwaysOpen && (
          isOpen ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )
        )}
        {alwaysOpen && <ChevronDown className="h-5 w-5 opacity-50" />}
        <FolderIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
        <span className="text-lg">{name}</span>
      </div>
      {(isOpen || alwaysOpen) && <div className="ml-6 border-l border-zinc-300 dark:border-zinc-700 pl-3">{children}</div>}
    </div>
  )
}

interface FileProps {
  children: ReactNode
  className?: string
  icon?: string
}

export function File({ children, className, icon }: FileProps) {
  const [iconError, setIconError] = useState(false)

  return (
    <div className={cn('flex items-center gap-2 py-2 text-zinc-600 dark:text-zinc-400', className)}>
      {icon && !iconError ? (
        <img 
          src={icon} 
          alt="" 
          className="h-5 w-5 object-contain rounded"
          onError={() => setIconError(true)}
        />
      ) : (
        <FileIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-500" />
      )}
      <span>{children}</span>
    </div>
  )
}

export const FolderComponent = Folder

