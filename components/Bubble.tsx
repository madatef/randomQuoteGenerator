'use client'




export const Bubble = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    
  return (
    <div style={{transition: 'height 1s ease-in-out'}} className="speech-bubble">
        {children}
    </div>
  )
}
