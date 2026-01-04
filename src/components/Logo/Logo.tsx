import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      {/* Signet with orange circle */}
      <Image
        src="/branding/signet-loschke-highlight.png"
        alt="Rico Loschke"
        width={56}
        height={56}
        loading={loading}
        fetchPriority={priority}
        className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0"
      />

      {/* Text Logo using Noto Sans */}
      <span className="font-sans font-bold text-xl md:text-2xl whitespace-nowrap text-[#151416] dark:text-white">
        Hi, ich bin Rico
      </span>
    </div>
  )
}
