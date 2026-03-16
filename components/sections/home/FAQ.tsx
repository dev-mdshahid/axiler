"use client";

import { useState } from 'react'
import { FAQCard, type FAQItem } from './FAQCard'

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
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="w-full bg-black py-16 md:py-24 lg:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                {/* Top Pill Badge */}
                <div className="flex items-center gap-2 mb-6 py-1.5 px-4 rounded-full border border-neutral-800 bg-[#161616]">
                    <div
                        className="w-2 h-2 rounded-full shrink-0 bg-[#F97316]"
                        aria-hidden="true"
                    />
                    <span className="font-medium text-[13px] leading-snug text-neutral-200 uppercase tracking-wider">
                        FAQ
                    </span>
                </div>

                {/* Heading */}
                <h2
                    id="faq-heading"
                    className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16"
                >
                    Your Questions, Answered
                </h2>

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
        </section>
    )
}
