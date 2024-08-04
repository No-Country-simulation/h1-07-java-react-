import { PopoverContent, PopoverTrigger, Popover} from '@nextui-org/react'
import React from 'react'

interface PopoverProps {
  locate: 'top' | 'right'
  children: React.ReactNode
  title: string
  content: string
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "foreground"
}

export const PopoverMessage: React.FC<PopoverProps> = ({ locate, children, title, content, color }) => {
  return (
    <Popover placement={locate} color={color} className=' w-64'>
      <PopoverTrigger>
        {
          children
        }
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{title}</div>
          <div className="text-tiny">{content}</div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
