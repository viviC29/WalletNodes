'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer } from 'recharts';

const priceData = [
  { value: 1.2 },
  { value: 1.3 },
  { value: 1.25 },
  { value: 1.4 },
  { value: 1.35 },
  { value: 1.43 },
];

const tpsData = [
  { value: 40 },
  { value: 42 },
  { value: 38 },
  { value: 43 },
  { value: 41 },
  { value: 43 },
];

export function StatisticsCard() {
  return (
    <section className="px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto bg-surface rounded-2xl p-8 border border-surface"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Price */}
          <div>
            <p className="text-text-secondary text-sm mb-2">Gram (prev. Toncoin) Price</p>
            <h3 className="text-3xl font-bold mb-4">$1.43</h3>
            <ResponsiveContainer width="100%" height={50}>
              <LineChart data={priceData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Market Cap */}
          <div>
            <p className="text-text-secondary text-sm mb-2">Market Cap</p>
            <h3 className="text-3xl font-bold">$3.64B</h3>
          </div>

          {/* TPS */}
          <div>
            <p className="text-text-secondary text-sm mb-2">Current TPS</p>
            <h3 className="text-3xl font-bold">43.43</h3>
          </div>

          {/* TPS Graph */}
          <div>
            <p className="text-text-secondary text-sm mb-2">Transactions/s</p>
            <ResponsiveContainer width="100%" height={60}>
              <BarChart data={tpsData}>
                <Bar dataKey="value" fill="#3B82F6" isAnimationActive />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
