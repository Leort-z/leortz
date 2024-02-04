import { PinIcon } from './icons'

export default function Home() {
  return (
    <main className='container mx-auto min-h-screen max-w-3xl p-16 space-y-8'>
      <section className='flex flex-col space-y-1.5'>
        <h1 className='text-2xl font-bold'>Leonardo Teixeira</h1>
        <p className='font-mono text-sm text-gray-700'>Full Stack Software Engineer, Bachelor in Computer Science.</p>
        <div className='flex items-center space-x-0.5'>
          <PinIcon />
          <a
            href='https://www.google.com/maps/place/Cap%C3%A3o+da+Canoa'
            target='_blank'
            className='text-xs hover:underline'
          >
            Capão da Canoa, Rio Grande do Sul, Brazil
          </a>
        </div>
      </section>
      <section className='flex flex-col space-y-2'>
        <h2 className='text-xl font-bold'>About</h2>
        <p className='font-mono text-sm text-gray-700'>
        As a Software Engineer, I excel in transforming complex challenges into intuitive and useful solutions. 
        My expertise primarily lies in JavaScript/TypeScript, React and Java/Kotlin, with a special focus on frontend technologies. 
        I have contributed to multiple projects across a variety of business sectors, including compliance, construction, privacy, agriculture, and health.
        </p>
        <p className='font-mono text-sm text-gray-700'>
        I approach product development with a keen sense of critical analysis, always aiming to achieve the best user experience and to deliver significant value to businesses.
        Committed to continuous learning, I stay up to date with the latest technological trends to ensure my work remains at the forefront of industry standards.
        My collaborative approach, combined with my ability to lead teams, has enabled successful project outcomes and made positive impacts across each sector.
        </p>
      </section>
    </main>
  )
}
