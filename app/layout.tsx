import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter — Route Customer Feedback to GitHub Issues',
  description: 'Analyze customer feedback and automatically match or create GitHub issues with intelligent labeling and team routing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="df9b0ecb-433f-4be5-b3d0-35e2d5c71e8b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
