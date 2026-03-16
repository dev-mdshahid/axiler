"use client";

import { useState } from 'react'
import { FAQCard, type FAQItem } from './FAQCard'
import { SectionWrapper } from "@/components/ui/SectionWrapper"

const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'What makes Axiler different from traditional AppSec platforms?',
        answer: 'Unlike traditional platforms that rely on theoretical risk, Axiler uses AI to actively exploit and validate vulnerabilities, proving real reachability and reducing noise.',
    },
    {
        question: 'What is agentic application security, and why does it matter?',
        answer: 'Agentic security leverages autonomous AI workflows to perform complex investigative and remediation tasks. This accelerates resolution times and shifts focus from triage to true risk mitigation.',
    },
    {
        question: 'How does Axiler detect real exploitability instead of theoretical risk?',
        answer: 'Our platform deploys AI-driven agents that dynamically investigate code paths and test endpoints to prove a vulnerability can be successfully exploited, overriding static risk assumptions.',
    },
    {
        question: 'Does Axiler integrate with our existing cloud and DevOps stack?',
        answer: 'Absolutely. We provide deep integrations into modern CI/CD pipelines, container registries, and existing cloud infrastructures, ensuring frictionless security operations.',
    },
    {
        question: 'Can Axiler scale across enterprise and multi-cloud environments?',
        answer: 'Yes, Axiler is designed to integrate seamlessly across complex enterprise workloads and multi-cloud environments, continuously monitoring and evaluating risk at scale.',
    },
    {
        question: 'How does Axiler reduce alert fatigue and manual triage?',
        answer: 'By proving only reachable, valid vulnerabilities and automatically suppressing false positives, Axiler ensures your security teams focus solely on critical fixes.',
    },
    {
        question: 'How does Axiler compare to conventional vulnerability scanners?',
        answer: 'Conventional scanners flag potential issues indiscriminately, leading to alert fatigue. Axiler contextualizes findings, verifying true risk and providing actionable remediation.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    // Split items into two independent columns based on the design screenshot
    const leftColumnIndexes = [0, 2, 4, 6]
    const rightColumnIndexes = [1, 3, 5]

    return (
        <SectionWrapper
            id="faq"
            aria-labelledby="faq-heading"
            className="relative w-full bg-[#03040C] overflow-hidden border-t border-white/5"
            disableXPadding
        >
            {/* Background Ambience */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="absolute top-[30%] right-[10%] h-[300px] w-[500px] rounded-full bg-orange-500/5 blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-6xl flex flex-col items-center relative z-10">
                {/* Header section */}
                <div className="mb-14 sm:mb-16 flex flex-col items-center text-center max-w-3xl mx-auto w-full">
                  <div className="mb-5 inline-flex uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-4 py-1.5 rounded-full">
                      Security FAQs
                    </div>
                    <h2
                        id="faq-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60 mb-5"
                    >
                      Frequently Asked Questions
                    </h2>
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-neutral-400">
                      Learn more about our autonomous AI integration, compliance modules, and how our platform proactively secures your infrastructure.
                    </p>
                  </div>

                  {/* FAQ Cards — Two independent columns */}
                <div className="w-full flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                    {/* Left column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 min-w-0">
                        {leftColumnIndexes.map((originalIndex) => {
                            const item = FAQ_ITEMS[originalIndex];
                            return (
                                <FAQCard
                                    key={item.question}
                                    item={item}
                                    isOpen={openIndex === originalIndex}
                                    onToggle={() => handleToggle(originalIndex)}
                                />
                            )
                        })}
                    </div>

                    {/* Right column */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 min-w-0">
                        {rightColumnIndexes.map((originalIndex) => {
                            const item = FAQ_ITEMS[originalIndex];
                            return (
                                <FAQCard
                                    key={item.question}
                                    item={item}
                                    isOpen={openIndex === originalIndex}
                                    onToggle={() => handleToggle(originalIndex)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
