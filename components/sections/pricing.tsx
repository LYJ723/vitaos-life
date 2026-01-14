import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <Section id="pricing" className="bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">가격 정책</h2>
                    <p className="text-muted-foreground">당신의 인생을 바꾸는 가장 확실한 투자</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <div className="p-8 rounded-2xl border border-border bg-white flex flex-col">
                        <div className="mb-4">
                            <span className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Basic</span>
                            <div className="text-4xl font-bold mt-2 text-charcoal">Free</div>
                            <p className="text-sm text-muted-foreground mt-2">가볍게 나의 유형을 확인하고 싶다면</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "144문항 정밀 진단 응시",
                                "4대 축 개인 점수표",
                                "16가지 전략 유형 결과 코드 (예: FIMS)",
                                "기본 유형 설명 제공"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <Check className="w-5 h-5 text-gray-400" />
                                    <span className="text-foreground">{feat}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full" disabled>
                            현재 무료 오픈 중
                        </Button>
                    </div>

                    {/* Paid Plan */}
                    <div className="p-8 rounded-2xl border border-gold bg-white relative overflow-hidden flex flex-col shadow-xl ring-1 ring-gold/20">
                        <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMMENDED
                        </div>
                        <div className="mb-4">
                            <span className="text-sm font-bold text-gold-dark tracking-widest uppercase">Premium Report</span>
                            <div className="text-4xl font-bold mt-2 text-charcoal">₩29,000</div>
                            <p className="text-sm text-muted-foreground mt-2">나를 완벽하게 파악하고 설계를 시작하려면</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Basic 포함 모든 기능",
                                "20p 분량의 상세 분석 리포트 PDF",
                                "축별 불균형 및 갈등 원인 분석",
                                "현재 삶의 병목 지점(Bottleneck) 진단",
                                "유형별 맞춤 성장/관계/커리어 전략 가이드",
                                "평생 소장 및 업데이트 제공"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <Check className="w-5 h-5 text-gold" />
                                    <span className="text-foreground">{feat}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="primary" className="w-full py-6 text-lg">
                            유료 리포트 보기 (준비중)
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-3">
                            * 정식 런칭 시 결제 가능합니다.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
