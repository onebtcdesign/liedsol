'use client'

import Image from 'next/image'
import Header from '../components/layout/Header'
import Background from '../components/ui/Background'

export default function DefiPage() {
  const strategies = [
    {
      name: "Vault Strategy on Kamino",
      icon: "/images/icon01.png",
      address: "6GGY..zcm7",
      features: [
        { name: "Solayer rewards", value: true },
        { name: "Open source", value: true },
        { name: "Audited", value: true }
      ],
      action: "Supply LSOL"
    },
    {
      name: "Provide liquidity on Orca",
      icon: "/images/icon02.png",
      address: "6GGY..zcm7",
      features: [
        { name: "Solayer rewards", value: true },
        { name: "Open source", value: true },
        { name: "Audited", value: true }
      ],
      action: "Supply LSOL"
    },
    {
      name: "Liquid Staking on Sanctum",
      icon: "/images/icon03.png",
      address: "6GGY..zcm7",
      features: [
        { name: "Solayer rewards", value: true },
        { name: "Open source", value: true },
        { name: "Audited", value: true }
      ],
      action: "Supply LSOL"
    },
    {
      name: "Allstake",
      icon: "/images/icon04.png",
      address: "6GGY..zcm7",
      features: [
        { name: "Solayer rewards", value: true },
        { name: "Open source", value: true },
        { name: "Audited", value: true }
      ],
      action: "Leveraged LSOL Restaking"
    }
  ]

  return (
    <>
      <Background />
      <Header />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-8">4 Strategies</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src={strategy.icon} 
                  alt={strategy.name} 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold">{strategy.name}</h3>
                  <div className="text-sm text-gray-600 font-[500]">{strategy.address}</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {strategy.features.map((feature, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-gray-600 font-[500]">{feature.name}</span>
                    <span className="text-green-500">Yes</span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-between px-4 py-3 border rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2">
                  <Image src="/images/icon_lsol.svg" alt="LSOL" width={24} height={24} />
                  <span className="font-[500]">{strategy.action}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l5-5-5-5"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  )
} 