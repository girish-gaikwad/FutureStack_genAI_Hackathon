"use client"
import { DesignaliCreative } from '@/components/main'
import React, { use, useEffect } from 'react'
import { toast } from 'sonner'

function Demoapp() {
  useEffect(() => {
    // Your effect logic here
    toast.success("LoggedIn Successfully", {
      description: "Welcome back!",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }, [])

  return (
    <div>
      <DesignaliCreative />
    </div>
  )
}

export default Demoapp
