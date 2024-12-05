'use client'

import { useState } from 'react'
import Image from "next/image"
import Header from "./components/layout/Header"
import NewCubeAnimation from "./components/ui/NewCubeAnimation"
import { motion } from 'framer-motion'
import Footer from "./components/layout/Footer"
import styles from './components/ui/Partners.module.css'
import ApyIcon from "./components/ui/icons/ApyIcon"
import FeeIcon from "./components/ui/icons/FeeIcon"
import EcosystemIcon from "./components/ui/icons/EcosystemIcon"
import Link from 'next/link'

type Step = {
  number: string;
  title: string;
  description: string;
} & (
  | { icon: string; icons?: never }  // For steps with single icon
  | { icons: string[]; icon?: never }  // For steps with multiple icons
);

export default function Home() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Staking Solana",
      icon: "/images/icon_sol2.svg",
      description: "Deposit the amount of $Solana you wish to stake on YieldSolx."
    },
    {
      number: "02",
      title: "Receive $LSOL",
      icon: "/images/icon_lsol.svg",
      description: "Receive $LSOL as a staking reward, which appreciates in value relative to $Sol after each epoch."
    },
    {
      number: "03",
      title: "Engage In DeFi",
      icons: [
        "/images/icon01.png",
        "/images/icon02.png",
        "/images/icon03.png",
        "/images/icon04.png"
      ],
      description: "Utilize $LSOL across various DeFi protocols on the Solana network, or swap it back to $Sol at any time. Maximize your returns by exploring additional DeFi yields on top of your staking rewards."
    }
  ]

  // FAQ 数据
  const faqs = [
    {
      id: 1,
      question: "What is Staking?",
      answer: "Staking is a way to earn rewards for holding certain cryptocurrencies. When you stake your digital assets, you lock them up to help maintain the security and operations of a blockchain network. In return, you earn rewards, similar to earning interest in a traditional savings account."
    },
    {
      id: 2,
      question: "How Does Staking Work?",
      answer: "When you stake your assets, they are locked into the blockchain, which helps in maintaining network security. Based on the protocol's rules, you earn a reward periodically, often paid in the same cryptocurrency."
    },
    {
      id: 3,
      question: "What is the Minimum Amount Required to Stake?",
      answer: "The minimum amount required to stake varies depending on the blockchain network and protocol. For Solana staking through our platform, you can start with as little as 1 SOL."
    },
    {
      id: 4,
      question: "Can I Withdraw My Staked Assets Anytime?",
      answer: "Yes, you can withdraw your staked assets at any time. However, there might be a short unbonding period (typically a few days) before your assets become available for withdrawal."
    },
    {
      id: 5,
      question: "What Are the Risks of Staking?",
      answer: "While staking is generally considered lower risk compared to trading, there are still some risks to consider: market volatility, validator performance, technical risks, and potential slashing penalties for validator misbehavior."
    },
    {
      id: 6,
      question: "How are Staking Rewards Calculated?",
      answer: "Staking rewards are calculated based on several factors: the amount staked, staking duration, network inflation rate, and overall network participation. Our current APY is approximately 8.8%."
    },
    {
      id: 7,
      question: "What Are Validator Nodes?",
      answer: "Validator nodes are computers that participate in the blockchain network by validating and processing transactions. They play a crucial role in maintaining the network's security and decentralization."
    },
    {
      id: 8,
      question: "Is There a Fee for Staking?",
      answer: "Yes, we charge a competitive 3% fee on staking rewards. This fee helps maintain our platform and services while ensuring you receive optimal returns on your staked assets."
    }
  ];

  // 管理展开状态
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen grid-background">
          <div className="max-w-7xl mx-auto px-4 h-full pt-40 pb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="text-left w-full">
                {/* 移动端动画 - 只在移动端显示，位于文字上方 */}
                <div className="md:hidden w-full flex flex-col items-center mb-12">
                  <div className="w-full max-w-[300px] aspect-square flex items-center justify-center">
                    <NewCubeAnimation />
                  </div>
                </div>

                <h1 className="mb-6 tracking-tight leading-tight font-[500]">
                  <span className="block mb-2 text-[2rem] md:text-[2.75rem]">STAKE WITH</span>
                  <span className="block mb-2 text-[2rem] md:text-[2.75rem]">CONFIDENCE SECURELY</span>
                  <span className="block text-[3rem] md:text-[4.0rem] font-[800]">STAKE YOUR SOL</span>
                </h1>
                <p className="text-gray-500 mb-16 text-[1.2rem] md:text-[1.6rem] font-[500] leading-normal">
                  Pledging with confidence and enjoying ongoing benefits as you go
                </p>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
                  <div className="grid grid-cols-3 gap-8 w-full md:w-auto">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold mb-2">8.4%</div>
                      <div className="text-sm md:text-base text-gray-600">APY</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold mb-2">$3.5M</div>
                      <div className="text-sm md:text-base text-gray-600">TVL</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold mb-2">3%</div>
                      <div className="text-sm md:text-base text-gray-600">Fees</div>
                    </div>
                  </div>
                  <Link href="/stake" className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-base font-[500]">
                    <Image src="/images/icon_sol.svg" alt="" width={24} height={24} />
                    STAKE
                  </Link>
                </div>
              </div>
              
              {/* 桌面端动画 - 只在桌面端显示 */}
              <div className="hidden md:flex justify-center items-center h-[500px]">
                <NewCubeAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* 左侧标题 */}
              <div>
                <h2 className="text-[2.4rem] md:text-[3.2rem] font-[600] leading-tight">
                  The Simplest<br />
                  Way With LiedSol<br />
                  Stake SOL
                </h2>
              </div>

              {/* 右侧卡片容器 */}
              <div className="flex flex-col gap-8 relative">
                {/* 竖线 */}
                <div className="absolute left-8 top-14 bottom-0 w-[1px] bg-gray-200"></div>
                
                {steps.map((step, index) => (
                  <div key={step.number} className="flex gap-4 items-start">
                    {/* 左侧数字 */}
                    <div className="text-4xl font-medium text-gray-400 w-16 relative z-10 bg-white">
                      {step.number}
                    </div>
                    
                    {/* 卡片内容 */}
                    <motion.div
                      className={`flex-1 bg-gradient-to-b p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                        index === 0 ? 'from-[#F7F9FF] to-[#F7F9FF]' :
                        index === 1 ? 'from-[#F7FFFE] to-[#F7FFFE]' :
                        'from-[#FFF7F7] to-[#FFF7F7]'
                      }`}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Icons */}
                      <div className="mb-4">
                        {'icons' in step ? (
                          <div className="flex gap-2">
                            {step.icons?.map((icon, i) => (
                              <Image 
                                key={i} 
                                src={icon} 
                                alt="" 
                                width={32} 
                                height={32} 
                              />
                            ))}
                          </div>
                        ) : (
                          <Image 
                            src={step.icon} 
                            alt="" 
                            width={32} 
                            height={32} 
                          />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 transition-transform duration-300 group-hover:scale-105">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#000B4F] text-white py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* High APY Card */}
              <div className="flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-[#001070] hover:-translate-y-2 cursor-pointer">
                <div className="mb-8 flex justify-start">
                  <Image 
                    src="/images/icon_highapy.svg" 
                    alt="High APY Icon" 
                    width={80} 
                    height={80}
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium">HIGH APY</h3>
                  <div className="text-[4.5rem] font-[600] leading-none">8.4%</div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Achieve an impressive annual percentage yield (APY) of 8.8%, enabling rapid growth
                    of your investments within the DeFi ecosystem.
                  </p>
                </div>
              </div>

              {/* Low Fee Card */}
              <div className="flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-[#001070] hover:-translate-y-2 cursor-pointer">
                <div className="mb-8 flex justify-start">
                  <Image 
                    src="/images/icon_fee.svg" 
                    alt="Low Fee Icon" 
                    width={80} 
                    height={80}
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium">LOW FEE</h3>
                  <div className="text-[4.5rem] font-[600] leading-none">3.0%</div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Benefit from a competitive management fee of just 3%, maximizing your investment
                    returns while enjoying high yields.
                  </p>
                </div>
              </div>

              {/* DeFi Ecosystem Card */}
              <div className="flex flex-col p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-[#001070] hover:-translate-y-2 cursor-pointer">
                <div className="mb-8 flex justify-start">
                  <Image 
                    src="/images/icon_defi.svg" 
                    alt="DeFi Ecosystem Icon" 
                    width={80} 
                    height={80}
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-medium">DEFI ECOSYSTEM</h3>
                  <div className="text-[4.5rem] font-[600] leading-none">10+</div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Our robust DeFi ecosystem offers not only staking rewards but also seamless opportunities
                    for trading, re-staking, and lending, allowing you to optimize your returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-[#F7F9FF]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-[600] text-center mb-12 md:mb-16">
              FAQ
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="border-b border-gray-200 last:border-0"
                >
                  <button
                    className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition-colors font-[500]"
                    onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  >
                    <span className="text-xl font-[500]">{faq.question}</span>
                    <span className="text-2xl ml-4">
                      {openFaqId === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqId === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-[600] text-center mb-12 md:mb-16">
              VAULT PARTNERS
            </h2>
            <div className="relative py-12">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className={styles.scrollContainer}>
                <div className={styles.scrollContent}>
                  {[
                    { icon: "/images/icon01.png", name: "Kamino" },
                    { icon: "/images/icon02.png", name: "Orca" },
                    { icon: "/images/icon03.png", name: "Sanctum" },
                    { icon: "/images/icon04.png", name: "Allstake" },
                  ].map((partner, index) => (
                    <div key={index} className={styles.partner}>
                      <Image 
                        src={partner.icon} 
                        alt={partner.name} 
                        width={40} 
                        height={40} 
                        className="rounded-full"
                      />
                      <span className="text-xl">{partner.name}</span>
                    </div>
                  ))}
                  
                  {[
                    { icon: "/images/icon01.png", name: "Kamino" },
                    { icon: "/images/icon02.png", name: "Orca" },
                    { icon: "/images/icon03.png", name: "Sanctum" },
                    { icon: "/images/icon04.png", name: "Allstake" },
                  ].map((partner, index) => (
                    <div key={`duplicate-${index}`} className={styles.partner}>
                      <Image 
                        src={partner.icon} 
                        alt={partner.name} 
                        width={40} 
                        height={40} 
                        className="rounded-full"
                      />
                      <span className="text-xl">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
