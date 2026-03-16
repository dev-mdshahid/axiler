import { cn } from '@/lib/utils'
import { Plus, Minus } from 'lucide-react'

export interface FAQItem {
    question: string
    answer: string
}

interface FAQCardProps {
    item: FAQItem
    isOpen: boolean
    onToggle: () => void
}

export function FAQCard({ item, isOpen, onToggle }: FAQCardProps) {
    return (
        <div
            className={cn(
                'group cursor-pointer select-none transition-all duration-300 ease-in-out py-6 px-6 lg:py-7 lg:px-8 rounded-3xl border',
                isOpen 
                  ? 'bg-white/[0.03] border-white/10 shadow-[0_0_30px_rgba(249,115,22,0.03)]' 
                  : 'bg-[#0A0B14] border-white/5 hover:bg-white/[0.02] hover:border-white/10'
            )}
            onClick={onToggle}
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onToggle()
                }
            }}
        >
            <div className="flex flex-col">
                {/* Question row */}
                <div className="flex items-center justify-between gap-4">
                    <h3 className={cn('text-white font-medium text-base lg:text-[18px] min-w-0 transition-all duration-300 leading-snug group-hover:text-orange-50', isOpen ? 'whitespace-normal' : 'truncate')}>
                        {item.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div
                        className={cn(
                            'shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300',
                            isOpen 
                              ? 'bg-orange-500/10 border-orange-500/30' 
                              : 'bg-white/5 border-white/10 group-hover:bg-white/10 group-hover:border-white/20'
                        )}
                    >
                        {isOpen ? (
                            <Minus size={16} className="text-orange-400" strokeWidth={2.5} />
                        ) : (
                            <Plus size={16} className="text-neutral-400 group-hover:text-white" strokeWidth={2.5} />
                        )}
                    </div>
                </div>

                {/* Answer - full width */}
                <div
                    className="overflow-hidden transition-all duration-300 ease-in-out w-full"
                    style={{
                        maxHeight: isOpen ? '400px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        marginTop: isOpen ? '16px' : '0px',
                    }}
                >
                    <p className="leading-relaxed font-normal text-neutral-400 text-sm md:text-[15px]">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}
