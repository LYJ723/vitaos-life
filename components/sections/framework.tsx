import { Container, Section } from "@/components/ui/section";

const axes = [
    {
        code: "Axis 1",
        title: "시간 인식",
        types: "P (Present) vs F (Future)",
        desc: "당신의 시선이 머무는 곳",
        detail: "현재의 몰입을 중시하는가, 미래의 가능성을 설계하는가.",
    },
    {
        code: "Axis 2",
        title: "에너지 방향",
        types: "I (Internal) vs O (Outer)",
        desc: "에너지가 생성되는 원천",
        detail: "내면의 성찰에서 힘을 얻는가, 외부와의 교류에서 힘을 얻는가.",
    },
    {
        code: "Axis 3",
        title: "가치 중심",
        types: "M (Meaning) vs R (Reward)",
        desc: "무엇이 당신을 움직이는가",
        detail: "일의 의미와 명분을 좇는가, 확실한 보상과 성과를 좇는가.",
    },
    {
        code: "Axis 4",
        title: "삶의 전략",
        types: "S (Stability) vs E (Expand)",
        desc: "성장을 위한 선택 방식",
        detail: "안정적인 기반을 다지는가, 새로운 영역으로 확장하는가.",
    },
];

export function Framework() {
    return (
        <Section id="framework" className="bg-black/40 border-y border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-gold font-medium tracking-wider uppercase text-sm">VITAOS Analysis Framework</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-6 text-white">4대 축 정밀 분석</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {axes.map((axis, idx) => (
                        <div key={idx} className="bg-white/5 p-8 md:p-10 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded group-hover:text-gold transition-colors">
                                    {axis.code}
                                </span>
                                <span className="text-sm font-semibold text-gold">{axis.types}</span>
                            </div>
                            <h3 className="text-2xl font-bold font-serif mb-2 text-white">{axis.title}</h3>
                            <p className="text-gray-300 font-medium mb-2">{axis.desc}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{axis.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center max-w-4xl bg-black border border-gold/30 rounded-xl p-6 md:p-8 shadow-lg shadow-gold/5 mx-4">
                        <span className="text-4xl mr-6 hidden md:block">🗝️</span>
                        <div className="text-left">
                            <h4 className="text-lg font-bold font-serif mb-1 text-white">VITAOS의 약속</h4>
                            <p className="text-gray-400 text-sm md:text-base">
                                “이 검사는 당신이 어떤 사람(Personality)이냐를 단정 짓지 않습니다.<br />
                                지금 당신에게 가장 필요한 <strong>‘삶의 전략(Life Strategy)’</strong>이 무엇인지 보여줍니다.”
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
