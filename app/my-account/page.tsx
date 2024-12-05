'use client'

import Header from '../components/layout/Header'
import Background from '../components/ui/Background'

export default function MyAccountPage() {
  return (
    <>
      <Background />
      <Header />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        {/* Stats Display */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$0.00</div>
              <div className="text-sm text-gray-600 font-[500]">My TVL</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0.00</div>
              <div className="text-sm text-gray-600 font-[500]">My LSOL</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">471.9091</div>
              <div className="text-sm text-gray-600 font-[500]">Total SOL Staked</div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-4 font-[500]">Time</th>
                  <th className="pb-4 font-[500]">Actions</th>
                  <th className="pb-4 font-[500]">Amount</th>
                  <th className="pb-4 font-[500]">Status</th>
                  <th className="pb-4 font-[500]">Tx hash</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-8 text-center font-[500]" colSpan={5}>
                    You have no asset records yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
} 