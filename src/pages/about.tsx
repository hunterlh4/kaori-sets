export function About() {
  return (
    <div className="flex flex-col gap-6 px-6 py-8 pt-24">
      <div>
        <h1 className="mb-2 text-3xl font-bold dark:text-white">About</h1>
        <p className="text-muted-foreground dark:text-gray-400">Learn more about Sakura Drip.</p>
      </div>

      <div className="space-y-4">
        <section>
          <h2 className="mb-2 font-semibold dark:text-white">What is Sakura Drip?</h2>
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Sakura Drip is a modern React project template built with TypeScript, Tailwind CSS,
            and Vite. It includes a component library with shadcn UI components.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold dark:text-white">Features</h2>
          <ul className="space-y-1 text-sm text-muted-foreground dark:text-gray-400">
            <li>• React 19 with TypeScript</li>
            <li>• Tailwind CSS for styling</li>
            <li>• React Router for navigation</li>
            <li>• Vite for fast development</li>
            <li>• shadcn UI components</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
