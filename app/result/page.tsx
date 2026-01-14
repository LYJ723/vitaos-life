"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { results } from "@/lib/data/results";
import { questionsLite, questionsPremium } from "@/lib/data/questions";
import { calculateResult } from "@/lib/logic";
import { Loader2, Share2, RefreshCw } from "lucide-react";

export default function ResultPage() {
    const router = useRouter();
    const [resultCode, setResultCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedAnswers = localStorage.getItem("vitaos_answers");
        const savedMode = localStorage.getItem("vitaos_mode");

        if (!savedAnswers) {
            router.push("/start");
            return;
        }

        try {
            const answers = JSON.parse(savedAnswers);
            // Determine which questions set to use
            const questionsList = savedMode === 'LITE' ? questionsLite : questionsPremium;

            const code = calculateResult(answers, questionsList);
            setResultCode(code);

            // Simulate analysis delay for effect
            setTimeout(() => setLoading(false), 2000);

        } catch (e) {
            console.error(e);
            router.push("/start");
        }
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <Loader2 className="w-12 h-12 text-gold animate-spin mb-4" />
                <h2 className="text-xl font-serif text-gray-600">당신의 인생 설계를 분석 중입니다...</h2>
            </div>
        );
    }

    const result = resultCode && results[resultCode];

    if (!result) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>결과를 분석할 수 없습니다. 다시 시도해주세요.</p>
                <Button onClick={() => router.push("/start")}>다시 하기</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-[#1a1a1a] text-white py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <Container className="relative z-10 max-w-4xl">
                    <div className="inline-block px-3 py-1 border border-gold/50 rounded-full text-gold text-sm font-medium mb-6 tracking-widest uppercase">
                        Vitaos Life Design Report
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 mb-4">
                        {result.code}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gold mb-6">
                        {result.name} : {result.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-serif opacity-90 leading-relaxed">
                        "{result.catchphrase}"
                    </p>
                </Container>
            </div>

            <Section className="bg-white">
                <Container className="max-w-4xl">
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-8 space-y-12">
                            {/* Identity Section */}
                            <div className="prose prose-lg max-w-none">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-gold pl-4 mb-6">
                                    1. 당신은 누구인가 (Identity)
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {result.summary}
                                    <br /><br />
                                    {result.strategy.identity}
                                </p>
                            </div>

                            {/* Survival Strategy */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-gold pl-4 mb-6">
                                    2. AI 시대, 당신의 생존 전략
                                </h3>
                                <div className="grid gap-6">
                                    {result.strategy.survival.map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                            <p className="text-gray-800 font-medium leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Warning */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-red-400 pl-4 mb-6">
                                    3. 당신이 경계해야 할 함정
                                </h3>
                                <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-red-900/80">
                                    {result.strategy.warning}
                                </div>
                            </div>

                            {/* Action Plan */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-green-400 pl-4 mb-6">
                                    4. 실행 가이드
                                </h3>
                                <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-green-900/80">
                                    {result.strategy.action}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-4 space-y-6">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                                    <p className="text-sm text-gray-500 mb-2">당신의 유형 코드</p>
                                    <div className="text-4xl font-serif font-bold text-gray-900">{result.code}</div>
                                </div>

                                <Button className="w-full h-12 text-lg" onClick={() => window.print()}>
                                    <Share2 className="w-5 h-5 mr-2" /> 결과 저장 / 공유
                                </Button>

                                <Button variant="outline" className="w-full h-12 text-lg" onClick={() => {
                                    if (confirm("모든 기록을 삭제하고 다시 검사하시겠습니까?")) {
                                        localStorage.removeItem("vitaos_answers");
                                        router.push("/start");
                                    }
                                }}>
                                    <RefreshCw className="w-5 h-5 mr-2" /> 다시 검사하기
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
