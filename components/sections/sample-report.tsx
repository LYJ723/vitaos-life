import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function SampleReport() {
    return (
        <Section id="report" className="bg-black/80 overflow-hidden border-y border-white/5">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                            당신만을 위한<br />
                            <span className="text-gold">라이프 전략 보고서</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            VITAOS 결과 리포트는 단순한 성격 설명서가 아닙니다.<br />
                            당신이 현재 겪고 있는 병목 현상이 무엇인지,<br />
                            앞으로 어떤 전략으로 돌파해야 하는지 구체적인 <strong>'Action Plan'</strong>을 제안합니다.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "4대 축별 상세 점수 및 균형 분석",
                                "현재 당신의 삶을 가로막는 병목 지점(Bottleneck) 진단",
                                "강점을 극대화하는 커리어/관계/성장 전략",
                                "당신에게 맞는 번아웃 방지 및 에너지 관리법"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual Preview */}
                    <div className="order-1 lg:order-2 relative perspective-1000">
                        {/* Abstract Cards Layering */}
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] max-w-md mx-auto">
                            <div className="absolute top-0 right-0 w-full h-full bg-[#1A1A1A] rounded-xl shadow-2xl border border-white/10 p-6 md:p-8 transform rotate-3 transition-transform duration-500 hover:rotate-0 flex flex-col z-20">
                                <div className="flex justify-between items-center mb-6 pt-2">
                                    <div className="text-sm font-bold text-gray-500 tracking-widest">VITAOS REPORT</div>
                                    <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-bold">PREMIUM</div>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-white mb-1">STRATEGY TYPE</h3>
                                <div className="text-4xl md:text-5xl font-bold text-gold mb-6">F-I-M-S</div>
                                <div className="space-y-3 mb-8">
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-500 w-[75%]" />
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gold w-[60%]" />
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-500 w-[85%]" />
                                    </div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <h4 className="font-bold text-sm mb-2 text-white">핵심 전략</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        당신은 미래의 가능성(F)을 위해 내면(I)을 탐구하는 전략가입니다.
                                        의미(M)가 없는 반복 작업에서 에너지를 잃기 쉬우므로...
                                    </p>
                                </div>
                            </div>

                            {/* Back card decoration */}
                            <div className="absolute top-4 -right-4 w-full h-full bg-black/50 border border-white/5 rounded-xl shadow-xl -z-10 transform -rotate-2 backdrop-blur-sm" />
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
