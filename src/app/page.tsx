import { Badge } from '@/components'
import { PinIcon } from '../icons'

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
      <section className='flex flex-col space-y-2 text-justify'>
        <h2 className='text-xl font-bold'>About</h2>
        <p className='font-mono text-sm text-gray-700'>
          As a Software Engineer, I excel in transforming complex challenges into intuitive and useful solutions. My
          expertise primarily lies in React, JavaScript/TypeScript, and Java/Kotlin, with a special focus on Frontend
          technologies. I have contributed to multiple projects across a variety of business sectors, including
          compliance, construction, privacy, agriculture and health.
        </p>
        <p className='font-mono text-sm text-gray-700'>
          I approach product development with a keen sense of critical analysis, always aiming to achieve the best user
          experience and to deliver significant value to businesses. Committed to continuous learning, I stay up to date
          with the latest technological trends to ensure my work remains at the forefront of industry standards. My
          collaborative approach, combined with my ability to lead teams, has enabled successful project outcomes and
          made positive impacts across each sector.
        </p>
      </section>

      <section className='flex flex-col space-y-2'>
        <h2 className='text-xl font-bold'>Skills</h2>
        <div className='flex gap-2'>
          <Badge>HTML</Badge>
          <Badge>CSS</Badge>
          <Badge>JavaScript</Badge>
          <Badge>TypeScript</Badge>
          <Badge>React</Badge>
          <Badge>Next</Badge>
          <Badge>Java</Badge>
          <Badge>Kotlin</Badge>
          <Badge>Spring</Badge>
        </div>
      </section>

      <section className='flex flex-col space-y-2'>
        <h2 className='text-xl font-bold'>Experience</h2>
        <div className='flex items-center justify-between'>
          <h3>
            <a href='https://www.wswork.com.br/' target='_blank' className='text-md font-bold hover:underline'>
              WS Work
            </a>
          </h3>
          <div className='text-sm tabular-nums text-gray-500'>2021 - Present</div>
        </div>
        <p className='font-mono text-sm text-gray-700'>Mid Level Full Stack Developer</p>
      </section>

      <section className='flex flex-col space-y-2'>
        <h2 className='text-xl font-bold'>Education</h2>
        <div className='flex items-center justify-between'>
          <h3>
            <a href='https://www.unisinos.br/' target='_blank' className='text-md font-bold hover:underline'>
              Universidade do Vale do Rio dos Sinos
            </a>
          </h3>
          <div className='text-sm tabular-nums text-gray-500'>2017 - 2022</div>
        </div>
        <p className='font-mono text-sm text-gray-700'>Bachelor&apos;s Degree in Computer Science</p>
      </section>
    </main>
  )
}
