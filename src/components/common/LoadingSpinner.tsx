import { cn } from "@/lib/utils"

function LoadingSpinner({className}) {
  return (
    <div className={cn("border-paper h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600",className)} />
  )
}

export default LoadingSpinner