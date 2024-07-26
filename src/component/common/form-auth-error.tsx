import React from "react"

interface FormAuthErrorProps {
  children: React.ReactNode
}
export function FormAuthError({ children }: FormAuthErrorProps) {

  return (
    <div className='rounded p-2 bg-danger border-danger'>{children}</div>
  )
}