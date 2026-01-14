import { Container, Section } from "@/components/ui/section";
import { Sparkles } from "lucide-react";

export function FoundingUser() {
    return (
        <Section className="bg-charcoal text-white overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <Container className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-1.5 rounded-full text-gold text-sm font-bold mb-8 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span>EARLY ACCESS BENEFIT</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                    <span className="text-gold">파운딩 유저</span>를 위한<br />
                    특별한 약속
                </h2>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                    지금 VITAOS와 함께 시작하는 분들은 단순한 고객이 아니라,<br />
                    서비스의 진화를 함께 만드는 파운딩 유저입니다.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-gold mb-3">01. 업데이트 시 무료 재응시</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            향후 1년간 진단 로직이 업데이트되어도, 추가 비용 없이 언제든 나의 상태를 다시 점검할 수 있습니다.
                            삶의 변화에 따라 달라지는 전략을 지속적으로 확인하세요.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-gold mb-3">02. 신규 리포트 우선 체험권</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            관계 역학 분석, 팀 시너지 리포트 등 새로운 확장 기능이 출시될 때 가장 먼저 체험해 보실 수 있는 권한을 드립니다.
                        </p>
                    </div>
                </div>

                <p className="mt-12 text-sm text-gray-500">
                    * 본 혜택은 정식 런칭 후 예고 없이 종료될 수 있습니다. (단, 기존 구매자는 평생 유지)
                </p>
            </Container>
        </Section>
    );
}
