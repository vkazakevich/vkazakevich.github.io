import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

import GithubIcon from '../images/svg/github.inline.svg'
import LinkedInIcon from '../images/svg/linkedin.inline.svg'
import TwitterIcon from '../images/svg/twitter.inline.svg'
import EmailIcon from '../images/svg/envelope.inline.svg'

const LINKS = [
  { url: 'https://github.com/vkazakevich', component: <GithubIcon className="h-6"/> },
  { url: 'https://www.linkedin.com/in/vitaliy-k', component: <LinkedInIcon className="h-6"/> },
  { url: 'https://twitter.com/vkazakevich_', component: <TwitterIcon className="h-6"/> },
  { url: 'mailto:vitaliy_dev@icloud.com', component: <EmailIcon className="h-6"/>, isEmail: true }
]

export default function IndexPage () {
  return (
    <Layout>
      <div className="flex justify-between text-xl">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Hi, I’m Vitaliy!
          </h1>
          <p className="mt-12 max-w-2xl">
            For the last 8 years, web development has been my main hobby and job.
            I'm interested in Ruby on Rails projects but
            can work with any technology with business benefits.
            Also, I have huge expertise in PHP and JavaScript.
          </p>
          <p className="mt-5">
            I look forward to seeing you on my <a href="https://twitter.com/vkazakevich_" className="text-white underline hover:no-underline" target="_blank" rel="noreferrer" >Twitter</a>.<br/>
            There's a lot of great stuff ahead.
          </p>

          <div className="mt-12">
            {LINKS.map(({ url, component, isEmail = false }) => (
              <a
                key={url}
                href={url}
                className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg text-white hover:text-indigo-200 mr-4"
                rel="noreferrer"
                target={isEmail ? '' : '_blank'}
              >
                {component}
              </a>
            ))}
          </div>
        </div>

        <StaticImage
          src="../images/me.png"
          alt="A dinosaur"
          placeholder="#ffffff"
          className="bg-indigo-600 rounded-full max-w-md"
        />
      </div>
    </Layout>
  )
}
