import { Container, Section } from "@/components/ui/section";
import { ClipboardCheck, Cpu, Gift } from "lucide-react";

const steps = [
    {
        icon: ClipboardCheck,
        title: "1. 144문항 정밀 진단",
        desc: "기존의 간단한 성격 검사와 달리, 삶의 전반적인 의사결정 패턴을 144개의 문항으로 입체적으로 파악합니다.",
    },
    {
        icon: Cpu,
        title: "2. 4대 축 점수화 & 알고리즘 분석",
        desc: "시간, 에너지, 가치, 전략이라는 4가지 축에서 당신의 위치를 계산하고, 16가지 삶의 전략 유형 중 하나를 도출합니다.",
    },
    {
        icon: Gift,
        title: "3. 결과 코드 & 리포트 확인",
        desc: "당신의 고유 전략 코드(예: FIMS)를 무료로 즉시 확인하세요. 원한다면 상세한 전략 가이드도 받을 수 있습니다.",
    },
];

export function HowItWorks() {
    return (
        <Section id="how-it-works" className="bg-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">How It Works</h2>
                    <p className="text-gray-500">단 15분, 당신의 삶을 재설계하는 시간</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-white/10 -z-10" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 z-10 group-hover:border-gold/50 group-hover:text-gold transition-all">
                                <step.icon className="w-10 h-10 text-gray-300 group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-3 text-white">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
