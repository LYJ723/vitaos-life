"use client";

import { useState } from "react";
import { Container, Section } from "@/components/ui/section";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "MBTI와 무엇이 다른가요?",
        a: "MBTI가 '선천적인 성격 경향성'을 본다면, VITAOS는 '후천적인 삶의 전략과 선택 패턴'을 봅니다. 당신이 어떤 사람인지보다, 현재 어떤 방식으로 삶의 문제를 해결하려 하는지에 집중합니다.",
    },
    {
        q: "검사 시간은 얼마나 걸리나요?",
        a: "총 144문항으로 구성되어 있으며, 깊이 있는 분석을 위해 약 15~20분의 시간이 소요됩니다. 중간에 저장되지 않으니 여유로운 시간에 진행하는 것을 추천합니다.",
    },
    {
        q: "결과는 고정적인가요?",
        a: "아닙니다. 삶의 전략은 환경과 가치관의 변화에 따라 바뀔 수 있습니다. VITAOS는 6개월~1년 단위의 재검사를 통해 당신의 전략이 어떻게 변화하고 있는지 트래킹하는 것을 권장합니다.",
    },
    {
        q: "무료로도 결과를 볼 수 있나요?",
        a: "네, 검사 완료 후 4대 축의 점수와 당신의 핵심 전략 유형(Code)은 무료로 즉시 제공됩니다. 다만, 구체적인 실행 전략과 상세 분석이 담긴 PDF 리포트는 유료로 구매하셔야 합니다.",
    },
    {
        q: "개인정보는 어떻게 처리되나요?",
        a: "모든 응답 데이터는 암호화되어 저장되며, 오직 리포트 생성을 위한 분석 목적으로만 활용됩니다. 마케팅 목적으로 제3자에게 절대 제공되지 않습니다.",
    },
    {
        q: "결과가 마음에 들지 않으면 환불되나요?",
        a: "디지털 콘텐츠 특성상 리포트 열람 후에는 환불이 어렵습니다. 다만, 시스템 오류로 인한 미열람 등 정당한 사유가 있는 경우 고객센터를 통해 100% 환불해 드립니다.",
    },
    {
        q: "앱으로도 출시되나요?",
        a: "현재는 웹 버전에 집중하고 있으며, 2026년 하반기에 모바일 앱 출시를 목표로 하고 있습니다. 파운딩 유저분들께는 앱 출시 시 특별 혜택을 드릴 예정입니다.",
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="faq" className="bg-gray-50">
            <Container className="max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">자주 묻는 질문</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border border-border overflow-hidden transition-all duration-200"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className={cn("font-medium text-lg", isOpen ? "text-gold-dark" : "text-foreground")}>
                                        {faq.q}
                                    </span>
                                    {isOpen ? (
                                        <Minus className="w-5 h-5 text-gold" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-muted-foreground" />
                                    )}
                                </button>
                                <div
                                    className={cn(
                                        "px-6 text-muted-foreground leading-relaxed overflow-hidden transition-all duration-300 ease-in-out",
                                        isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    {faq.a}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
