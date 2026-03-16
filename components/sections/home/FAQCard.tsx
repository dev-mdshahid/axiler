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
                'cursor-pointer select-none transition-all duration-300 ease-in-out py-6 px-6 lg:py-8 lg:px-8 rounded-3xl border',
                isOpen ? 'bg-[#1C1C1E] border-neutral-800' : 'bg-[#121212] border-transparent hover:border-neutral-800'
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
                    <h3 className={cn('text-foreground font-medium text-lg lg:text-[22px] min-w-0 transition-all duration-300 leading-snug', isOpen ? 'whitespace-normal' : 'truncate')}>
                        {item.question}
                    </h3>

                    {/* Toggle Icon */}
                    <div
                        className={cn(
                            'shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300',
                            isOpen ? 'bg-[#2A2A2A]' : 'bg-white'
                        )}
                    >
                        {isOpen ? (
                            <Minus size={18} color="white" strokeWidth={2} />
                        ) : (
                            <Plus size={18} color="#111111" strokeWidth={2} />
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
                    <p className="leading-relaxed font-normal text-neutral-400 text-base md:text-lg">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}
