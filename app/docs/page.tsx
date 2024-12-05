'use client'

import { useState } from 'react'
import Header from '../components/layout/Header'
import Background from '../components/ui/Background'

type NavItem = {
  title: string
  items: string[]
}

type ContentItem = {
  icon: string
  title: string
  text: string
}

type ContentSection = {
  title: string
  content: ContentItem[]
}

type Content = {
  [key: string]: ContentSection
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('Introduction')
  const [searchQuery, setSearchQuery] = useState('')
  
  const navigation: NavItem[] = [
    {
      title: 'About',
      items: ['Introduction', 'LSOL', 'Fees']
    },
    {
      title: 'Validators',
      items: ['Delegation Strategy']
    },
    {
      title: 'Users',
      items: ['Liquid staking', 'Staking APY', 'Risks', 'Contace us']
    }
  ]

  const content: Content = {
    'Introduction': {
      title: 'Introduction',
      content: [
        {
          icon: '🌱',
          title: 'Join our mission to grow Solana!',
          text: 'At The YieldSol, we believe the Solana network will be the strongest if the network is secured by validators that have a large social stake in Solana. The top seven validators by stake amount are not Solana focused entities, but instead represent the crypto industry in general. YieldSol stake pool will strive to bring the financial stake in-line with the existing social stake of Solana-centric communities.'
        },
        {
          icon: '🎯',
          title: 'Delegating to only select, allowlisted, validators',
          text: 'YieldSol will maintain, and continue to curate, a list of validators that are associated with Solana-centric communities. Within the allowlisted groups, a scoring system will be used to optimize returns for LST holders.'
        },
        {
          icon: '💫',
          title: 'Focusing on "best impact" validator operators',
          text: 'YieldSol is on a mission to maximize Solana\'s growth on the network level. To execute this mission, we have 2 main targets: Growing the total validator set on Solana - We focus on the tail end of validators (the new and small ones), by providing stake to new and small validators that perform well. Supporting community anchored validator efforts - We focus on validators that, in some fashion, have a community attached to their operations, through a dApp, community participation, or have shown proof that they are providing value to the broader Solana community in various forms.'
        },
        {
          icon: '🤝',
          title: 'The Human Touch, through the DAO',
          text: 'Automated delegation strategies are not able to account for the human impact on the validator network. We believe that with a community-anchored delegation strategy, staked SOL will have the most immediate and positive effect on Solana as a whole. Or in other words, we focus on "best impact validators", those whose impact is notable within the ecosystem.'
        }
      ]
    }
  }

  return (
    <>
      <Background />
      <Header />
      <div className="pt-20">
        {/* Search Bar - 移除背景色，修改边框样式 */}
        <div className="border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-end">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="APY?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-[500]"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-8">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <button
                          className={`text-left w-full hover:text-gray-900 font-[500] ${
                            activeSection === item 
                              ? 'text-blue-600 font-medium' 
                              : 'text-gray-600'
                          }`}
                          onClick={() => setActiveSection(item)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="prose max-w-none">
              <h1 className="text-4xl font-bold mb-8">{content[activeSection]?.title}</h1>
              <div className="space-y-12">
                {content[activeSection]?.content.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                        <p className="text-gray-600 leading-relaxed font-[500]">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
} 