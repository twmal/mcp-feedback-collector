import { FeedbackForm } from '@/components/feedback-form'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          StyleMe AI 用户反馈
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ThemeToggle />
        </div>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold tracking-tight">帮助我们变得更好</h1>
      </div>

      <div className="mb-32 w-full max-w-2xl">
        <FeedbackForm />
      </div>
    </main>
  )
}
