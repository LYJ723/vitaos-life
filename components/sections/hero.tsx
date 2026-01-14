import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Background Decor - Minimal Grid/Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-gold/20 rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] border border-charcoal/5 rounded-full -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <Container className="relative z-10 text-center">
                <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold-dark text-sm font-medium mb-4 animate-fade-in-up">
                        지금 가장 필요한 삶의 전략을 찾아서
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1] animate-fade-in-up delay-100">
                        당신이 누구인지가 아니라,<br className="hidden md:block" />
                        지금 <span className="text-gold italic">어떤 삶의 전략</span>이 필요한지.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        VITAOS는 삶의 4대 축을 통해 당신의 ‘삶의 작동 구조’를 정밀하게 분석합니다.
                        <br className="hidden md:block" /> 성격을 넘어, 현재 당신에게 최적화된 설계도를 확인하세요.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-300">
                        <Link href="/start">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14">
                                시작하기 <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="#how-it-works">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14">
                                어떻게 작동하나요
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up delay-500 opacity-80">
                        <span className="flex items-center">✨ 144문항 정밀 분석</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="flex items-center">📊 16가지 전략 유형</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="flex items-center">🎁 무료 결과 코드 제공</span>
                    </div>
                </div>
            </Container>

            {/* Scroll Hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
                <ChevronDown className="w-8 h-8" />
            </div>
        </Section>
    );
}
