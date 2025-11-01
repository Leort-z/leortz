import { Badge } from '@/components'
import { Mail, Linkedin, Github, MapPin, Globe } from 'lucide-react'

export default function Home() {
  return (
    <main className='container mx-auto min-h-screen max-w-3xl p-4 md:p-8 space-y-6'>
      <header className='flex flex-col md:flex-row md:items-start md:justify-between'>
        <div className='flex flex-col space-y-1'>
          <h1 className='text-2xl font-bold'>Leonardo Teixeira</h1>
          <p className='font-mono text-sm text-gray-700'>Full Stack Software Engineer, Bachelor in Computer Science.</p>

          <div className='flex items-center space-x-1 text-gray-700'>
            <MapPin size={13} strokeWidth={1.25} className='opacity-80 relative top-[0.5px]' />
            <a
              href='https://www.google.com/maps/place/Cap%C3%A3o+da+Canoa'
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs font-mono hover:underline'
            >
              Capão da Canoa, Rio Grande do Sul, Brazil
            </a>
          </div>
        </div>

        <div className='flex gap-x-2 pt-2 md:pt-0 font-mono text-gray-900'>
          <a
            href='mailto:leonardorteixeira@hotmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-md border border-gray-400 bg-white hover:bg-gray-100 size-8 transition'
          >
            <Mail size={14} strokeWidth={1.5} />
          </a>
          <a
            href='https://www.linkedin.com/in/leortz/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-md border border-gray-400 bg-white hover:bg-gray-100 size-8 transition'
          >
            <Linkedin size={14} strokeWidth={1.5} />
          </a>
          <a
            href='https://github.com/Leort-z'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-md border border-gray-400 bg-white hover:bg-gray-100 size-8 transition'
          >
            <Github size={14} strokeWidth={1.5} />
          </a>
        </div>
      </header>

      <section className='flex flex-col space-y-1 text-justify'>
        <h2 className='text-xl font-bold'>About</h2>
        <p className='font-mono text-sm text-gray-700'>
          As a Software Engineer, I focus on understanding product and user needs to design intuitive, meaningful
          solutions that make a tangible impact. I approach development with critical thinking and purpose, balancing
          technical quality with user experience. My collaborative mindset and leadership skills have driven successful
          outcomes, supported by a continuous effort to stay modern and aligned with industry standards.
        </p>
      </section>

      <section className='flex flex-col space-y-1'>
        <h2 className='text-xl font-bold'>Experience</h2>
        <div className='flex items-center justify-between'>
          <h3>
            <a
              href='https://www.wswork.com.br/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-md font-bold hover:underline'
            >
              WS Work
            </a>
          </h3>
          <div className='text-sm tabular-nums text-gray-500'>2021 – Present</div>
        </div>
        <p className='font-mono font-semibold text-sm text-gray-700'>Senior Software Engineer</p>
        <p className='font-mono text-sm text-gray-700 text-justify'>
          At WS Work, I’ve progressed from Junior to Senior Software Engineer, contributing to projects across sectors
          such as compliance, construction, agriculture, and health. My main focus has been on Privacy Tools, Brazil’s
          leading data privacy and compliance platform, where I designed and developed several core modules that shaped
          the product’s growth and usability.
        </p>
        <p className='font-mono text-sm text-gray-700 text-justify'>
          As part of my work on the product, I structured and led a complete design refactor that redefined the
          product’s interface and user experience, alongside an architecture refactor focused on performance and
          modernization. These initiatives established new development standards and a unified component library,
          improving maintainability, scalability, and delivery speed. Build and pipeline times were reduced by over 75%,
          and bundle size by around 30%, leading to lasting improvements in product performance and team efficiency.
        </p>
      </section>

      <section className='flex flex-col space-y-1'>
        <h2 className='text-xl font-bold'>Education</h2>
        <div className='flex items-center justify-between'>
          <h3>
            <a
              href='https://www.unisinos.br/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-md font-bold hover:underline'
            >
              Universidade do Vale do Rio dos Sinos
            </a>
          </h3>
          <div className='text-sm tabular-nums text-gray-500'>2017 – 2022</div>
        </div>
        <p className='font-mono font-semibold text-sm text-gray-700'>Bachelor&apos;s Degree in Computer Science</p>
      </section>

      <section className='flex flex-col space-y-1'>
        <h2 className='text-xl font-bold'>Skills</h2>

        <div className='space-y-1'>
          <p className='text-sm font-semibold text-gray-800'>Languages & Frameworks</p>
          <div className='flex flex-wrap gap-1.5'>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Java</Badge>
            <Badge>Kotlin</Badge>
            <Badge>Spring Boot</Badge>
          </div>
        </div>

        <div className='space-y-1'>
          <p className='text-sm font-semibold text-gray-800'>Infrastructure, Databases & Tools</p>
          <div className='flex flex-wrap gap-1.5'>
            <Badge>PostgreSQL</Badge>
            <Badge>Redis</Badge>
            <Badge>Docker</Badge>
            <Badge>AWS</Badge>
            <Badge>Linux</Badge>
            <Badge>Git</Badge>
            <Badge>Jenkins</Badge>
          </div>
        </div>
      </section>
    </main>
  )
}
