"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  BarChart3,
  MonitorSmartphone,
  Users,
  Copy,
  Brain,
  Globe,
} from "lucide-react"

interface Card {
  id: number
  contentType: 1 | 2 | 3 | 4 | 5 | 6
}

const cardData: Record<number, { title: string; description: string; icon: React.ReactNode; color: string }> = {
  1: {
    title: "PropFirm Admin + Client",
    description: "Fully Whitelabeled Prop Trading Platform",
    icon: <BarChart3 size={48} />,
    color: "#2563eb",
  },
  2: {
    title: "Orrnn RTX5 Trading Terminal",
    description: "Next-Gen Trading Terminal — Manager + Mobile + Web",
    icon: <MonitorSmartphone size={48} />,
    color: "#7c3aed",
  },
  3: {
    title: "Forex CRM",
    description: "Admin + Client + Mobile — Supports cTrader, MT5, MT4, RTX5",
    icon: <Users size={48} />,
    color: "#059669",
  },
  4: {
    title: "Trade Copier",
    description: "All Platforms — MT5, MT4, cTrader, Trade Locker, RTX5",
    icon: <Copy size={48} />,
    color: "#d97706",
  },
  5: {
    title: "YoForex AI",
    description: "AI-Powered Trading — Mobile + Web App",
    icon: <Brain size={48} />,
    color: "#dc2626",
  },
  6: {
    title: "Whitelabel & Custom Websites",
    description: "Forex-Focused Web Development & Branding",
    icon: <Globe size={48} />,
    color: "#0891b2",
  },
}

const totalContentTypes = 6

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }: { contentType: number }) {
  const data = cardData[contentType]

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div
        className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl"
        style={{ background: `${data.color}08`, border: `1px solid ${data.color}20` }}
      >
        <div style={{ color: data.color }}>
          {data.icon}
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-slate-900">{data.title}</span>
          <span className="text-sm text-slate-500">{data.description}</span>
        </div>
        <button className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-slate-900 pl-4 pr-3 text-sm font-medium text-white hover:bg-slate-800">
          View
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-slate-200 bg-white p-1 shadow-xl will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    setIsAnimating(true)

    const nextContentType = ((cards[2].contentType % totalContentTypes) + 1) as Card["contentType"]

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-slate-200 py-4">
        <button
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-slate-200 bg-white px-3 font-medium text-slate-600 transition-all hover:bg-slate-50 active:scale-[0.98]"
        >
          Next Product
        </button>
      </div>
    </div>
  )
}
