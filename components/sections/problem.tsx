import { Container, Section } from "@/components/ui/section";
import { HelpCircle, AlertTriangle, Lightbulb } from "lucide-react";

export function Problem() {
    return (
        <Section id="intro" className="bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        삶은 <span className="text-gold-dark">성격</span>만으로 설명되지 않습니다
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        우리는 종종 "나는 원래 이런 사람이야"라는 말 뒤에 숨습니다.
                        <br className="hidden md:block" />하지만 인생의 문제는 성격 탓이 아니라, 맞지 않는 '전략' 탓일 수 있습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: AlertTriangle,
                            title: "얕은 진단의 한계",
                            desc: "단순히 '내향/외향'을 나누는 것만으로는 복잡한 삶의 의사결정 패턴을 설명할 수 없습니다.",
                        },
                        {
                            icon: HelpCircle,
                            title: "일관성 없는 조언",
                            desc: "상황마다 달라지는 당신의 행동을 설명하지 못해, 매번 다른 자기계발서에 의존하게 됩니다.",
                        },
                        {
                            icon: Lightbulb,
                            title: "실행 없는 위로",
                            desc: "당신이 어떤 사람인지 '이해'하는 것에서 멈춥니다. '그래서 어떻게 살아야 하는가'를 말해주지 않습니다.",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-2xl border border-border bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:bg-gold/5 transition-colors">
                                <item.icon className="w-6 h-6 text-charcoal group-hover:text-gold-dark" />
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-6 rounded-2xl bg-charcoal text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <p className="text-lg md:text-xl font-medium relative z-10">
                            VITAOS는 <span className="text-gold">행동, 가치, 시간, 에너지</span>의 4가지 축으로 당신의 삶을 구조화합니다.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
