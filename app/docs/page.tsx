'use client'

import { useState, useEffect, useRef } from 'react'
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
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  
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
      items: ['Liquid Staking', 'Staking APY', 'Risks', 'Contact Us']
    }
  ]

  const content: Content = {
    'Introduction': {
      title: 'Introduction',
      content: [
        {
          icon: '',
          title: 'Join our mission to grow Solana!',
          text: 'At LiedSol, we believe that the Solana network will be most resilient when secured by validators who have a significant social stake in the Solana ecosystem. Currently, the top seven validators by stake are not Solana-focused entities; instead, they represent the broader cryptocurrency industry. This misalignment between financial and social stakes poses potential risks to the network\'s long-term stability and growth. LiedSol aims to bridge this gap by aligning financial stakes with the existing social stakes of Solana-centric communities, fostering stronger network security and sustainable ecosystem development.'
        },
        {
          icon: '',
          title: 'Delegating to Select, Allowlisted Validators',
          text: 'LiedSol maintains a carefully curated list of validators that are deeply integrated with Solana-centric communities. Our selection process goes beyond simple performance metrics, considering factors such as community engagement, ecosystem contributions, and long-term commitment to Solana\'s success. Within this allowlisted group, we implement a sophisticated scoring system that optimizes returns for LSOL token holders while ensuring network health and decentralization. This approach creates a virtuous cycle where both validators and token holders benefit from increased network participation and improved security.'
        },
        {
          icon: '',
          title: 'Focusing on "Best Impact" Validator Operators',
          text: 'LiedSol is committed to maximizing Solana\'s growth at the network level. To achieve this, we have two primary objectives:\n\nExpanding the Total Validator Set on Solana: Our focus is on new and smaller validators, providing stake to those who perform well and helping them grow.\n\nSupporting Community-Driven Validators: We prioritize validators with strong community ties, whether through decentralized applications (dApps), community participation, or other forms of value creation for the broader Solana ecosystem.'
        },
        {
          icon: '',
          title: 'The Human Touch through the DAO',
          text: 'Automated delegation strategies often fail to consider the human impact on the validator network. We believe a community-focused delegation approach will have the most immediate and positive effect on Solana. In essence, we target "best impact validators"—those whose influence is genuinely felt within the ecosystem.'
        }
      ]
    },
    'LSOL': {
      title: 'LSOL',
      content: [
        {
          icon: '',
          title: 'LSOL Token',
          text: 'LSOL is the liquid-staked SOL token issued by the Vault. Upon the initialization of the stake pool, the exchange rate between LSOL and SOL was set at 1:1. As the pool stakes SOL to validators, the exchange rate of LSOL:SOL will increase over time.\n\nFor example, if you hold 100 LSOL at launch, its value will be equivalent to 100 SOL. After one year, assuming a 7% annual percentage yield (APY), your 100 LSOL will be worth approximately 107 SOL, thanks to staking rewards.'
        }
      ]
    },
    'Fees': {
      title: 'Fees',
      content: [
        {
          icon: '',
          title: 'Fee Structure',
          text: 'LiedSol has two types of fees:\n\nInstant Unstake Fee: 0.1%, a standard fee commonly used by other stake pools.\n\nManagement Fee: 3% on staking rewards (applied only to rewards, not the principal).'
        }
      ]
    },
    'Delegation Strategy': {
      title: 'Delegation Strategy',
      content: [
        {
          icon: '',
          title: 'Our Strategy',
          text: 'LiedSol focuses on enhancing Solana\'s growth by meeting two key objectives:\n\nExpanding the Validator Set: We concentrate on the "tail end" of validators, particularly new or smaller ones, offering not just stake but also active support to help them grow and attract more delegators.\n\nSupporting Community-Driven Validators: We prioritize validators with strong community engagement, whether through dApps, active participation, or demonstrable value to the Solana ecosystem.'
        }
      ]
    },
    'Liquid Staking': {
      title: 'Liquid Staking',
      content: [
        {
          icon: '',
          title: 'Understanding Liquid Staking',
          text: 'Solana\'s proof-of-stake (PoS) consensus requires SOL to be staked at a validator to secure the network. While you can stake SOL directly, this comes with some disadvantages:\n\nLock-in Period: Staked SOL is locked for at least one epoch (up to 3 days), preventing it from being used for liquidity provision, yield generation, etc.\n\nCentralization Risk: Staking SOL at a single validator could undermine the network\'s decentralization.\n\nLiquid staking solves these issues by allowing you to stake SOL at a pool, such as LiedSol, and receive a liquid-staked token in return. This token can be used for liquidity provision, yield generation, or as collateral for borrowing, all while supporting a diverse set of validators that align with the pool\'s community goals.'
        }
      ]
    },
    'Staking APY': {
      title: 'Staking APY',
      content: [
        {
          icon: '',
          title: 'Network Security Rewards',
          text: 'The staking APY fluctuates between 7% and 9%, depending on the network\'s performance. LiedSol strives to maximize staking returns while also supporting community-driven validator initiatives. Please note that the APY does not include additional rewards, such as points or future incentive-based rewards.'
        },
        {
          icon: '',
          title: 'MEV',
          text: 'All allowlisted validators are required to capture Maximal Extractable Value (MEV) rewards. This means that LSOL holders benefit from additional MEV commissions, boosting the APY significantly.'
        },
        {
          icon: '',
          title: 'Reward Tokens',
          text: 'As part of the validator bootstrapping process, ecosystem communities will be encouraged to offer token rewards through the LSOL and Saber LSOL-SOL LP token quarries, further enhancing yield potential beyond regular staking rewards.'
        }
      ]
    },
    'Risks': {
      title: 'Risks',
      content: [
        {
          icon: '',
          title: 'Smart Contract Risk',
          text: 'LSOL utilizes several smart contracts, including:\n\nLSOL: the liquid staking contract.\nStake Pool: We use the official, audited Solana stake pool program.\nStaking: The staking mechanism is powered by Quarry, an open-source solution audited by Quantstamp. Quarry has handled billions of dollars in Total Value Locked (TVL) without issues.\nLiquidity Provision: Our main liquidity pools are hosted by Sanctum and Saber. Both have been independently audited and have successfully managed billions in TVL.'
        },
        {
          icon: '',
          title: 'DePeg Risk',
          text: 'The "real" price of LSOL is calculated by dividing the total amount of SOL managed by the stake pool by the total number of LSOL tokens in circulation. While this value only increases over time, withdrawals from LSOL require the use of a delayed unstake option, which can take up to 3 days to process. The market price of LSOL may differ from its intrinsic value due to liquidity fluctuations, creating temporary depeg risk. This risk can be mitigated by arbitrage opportunities, but it is essential to consider, especially in the context of leveraged positions.'
        },
        {
          icon: '',
          title: 'Slashing Risk',
          text: 'Slashing occurs when validators act maliciously. While LiedSol only delegates to trusted, allowlisted validators, Solana has not yet implemented slashing, so this risk is currently minimal.'
        }
      ]
    },
    'Contact Us': {
      title: 'Contact Us',
      content: [
        {
          icon: '',
          title: 'Get in Touch',
          text: `<div class="flex flex-col space-y-4">
            <div class="flex items-center gap-3">
              <img src="/images/icon_lsol.svg" alt="website" class="w-5 h-5" />
              <a href="https://LiedSOL/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600">Website: https://LiedSOL/</a>
            </div>
            <div class="flex items-center gap-3">
              <img src="/images/icon_discord.svg" alt="discord" class="w-5 h-5" />
              <a href="https://discord.gg/xxxx" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600">Discord: https://discord.gg/xxxx</a>
            </div>
            <div class="flex items-center gap-3">
              <img src="/images/icon_x.svg" alt="X" class="w-5 h-5" />
              <a href="https://twitter.com/LiedSOL" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600">X (formerly Twitter): https://twitter.com/LiedSOL</a>
            </div>
          </div>`
        }
      ]
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      
      for (const sectionId in contentRefs.current) {
        const element = contentRefs.current[sectionId]
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 200 && bottom >= 200) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = contentRefs.current[sectionId]
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setActiveSection(sectionId)
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
                          onClick={() => scrollToSection(item)}
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
              {Object.entries(content).map(([sectionId, section]) => (
                <div
                  key={sectionId}
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[sectionId] = el;
                  }}
                  className="mb-16"
                >
                  <h1 className="text-4xl font-bold mb-8">{section.title}</h1>
                  <div className="space-y-12">
                    {section.content.map((item, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-start gap-4">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                            <p className="text-gray-600 leading-relaxed font-[500]">
                              {item.text.startsWith('<div') ? (
                                <div dangerouslySetInnerHTML={{ __html: item.text }} />
                              ) : (
                                item.text
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  )
} 