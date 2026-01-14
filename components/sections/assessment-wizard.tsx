"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { questionsLite, questionsPremium, Question } from "@/lib/data/questions";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Clock, CheckCircle2, Sparkles, ChevronRight } from "lucide-react";

const QUESTIONS_PER_PAGE = 6;

export default function AssessmentWizard() {
    const router = useRouter();

    // State
    const [mode, setMode] = useState<'IDLE' | 'LITE' | 'PREMIUM'>('IDLE');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    // Initialize from local storage or defaults
    useEffect(() => {
        const savedMode = localStorage.getItem("vitaos_mode");
        const savedAnswers = localStorage.getItem("vitaos_answers");

        let answersObj = {};
        if (savedAnswers) {
            try {
                answersObj = JSON.parse(savedAnswers);
                setAnswers(answersObj);
            } catch (e) { console.error(e); }
        }

        // Only restore mode if there are saved answers AND a saved mode.
        // Otherwise, let user choose again.
        if (savedMode && Object.keys(answersObj).length > 0) {
            if (savedMode === 'LITE') {
                setMode('LITE');
                setQuestions(questionsLite);
            } else if (savedMode === 'PREMIUM') {
                setMode('PREMIUM');
                setQuestions(questionsPremium);
            }
        } else {
            // Reset if no relevant progress
            localStorage.removeItem("vitaos_mode");
        }
    }, []);

    // ... (rest is same until Selection Screen)

    // 1. Selection Screen
    if (mode === 'IDLE') {
        return (
            <Section className="bg-gray-50 min-h-screen flex items-center">
                <Container className="max-w-5xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 break-keep leading-tight">
                            검사 유형을 선택해주세요
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-serif leading-relaxed px-4 break-keep">
                            당신의 상황에 맞는 최적의 검사를 시작해보세요.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Lite Card */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-gold/30 transition-all shadow-xl hover:shadow-2xl group cursor-pointer relative overflow-hidden"
                            onClick={() => handleStart('LITE')}>
                            <div className="absolute top-0 right-0 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                                LITE
                            </div>
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                                    <Clock className="w-8 h-8 text-gray-600 group-hover:text-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">간편 버전</h3>
                                <p className="text-gray-500 font-medium">약 3분 소요 (48문항)</p>
                            </div>

                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                    <span>핵심 문항만 엄선하여 빠르게 진단</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                    <span>직관적인 선택을 선호하시는 분</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                    <span>가볍게 자신의 성향을 파악하고 싶을 때</span>
                                </li>
                            </ul>

                            <Button className="w-full h-12 text-lg group-hover:bg-gold group-hover:text-white transition-colors" variant="outline">
                                간편 버전 시작하기 <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>

                        {/* Premium Card */}
                        <div className="bg-white rounded-2xl p-8 border-2 border-gold ring-4 ring-gold/10 transition-all shadow-xl hover:shadow-2xl group cursor-pointer relative overflow-hidden transform hover:-translate-y-1"
                            onClick={() => handleStart('PREMIUM')}>
                            <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                PREMIUM
                            </div>
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                                    <Sparkles className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">프리미엄 정밀 버전</h3>
                                <p className="text-gold font-medium">약 10분 소요 (144문항)</p>
                            </div>

                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 shrink-0 mt-0.5" />
                                    <span className="font-medium text-gray-900">VITAOS의 모든 정밀 분석 로직 적용</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 shrink-0 mt-0.5" />
                                    <span>삶의 4가지 축에 대한 심층적 진단</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-gold mr-2 shrink-0 mt-0.5" />
                                    <span>나의 무의식적 신념과 행동 패턴 파악</span>
                                </li>
                            </ul>

                            <Button className="w-full h-12 text-lg bg-gold text-white hover:bg-gold/90 border-transparent shadow-gold/20 shadow-lg">
                                정밀 버전 시작하기 <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        );
    }

    // 2. Assessment Screen
    return (
        <Section className="bg-gray-50 min-h-screen pt-24 pb-20">

            {/* Fixed Progress Header */}
            <div className="fixed top-[72px] left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-40 shadow-sm py-4">
                <Container>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500 font-serif">
                            {mode === 'LITE' ? '간편 진단' : '정밀 진단'} 진행 중
                        </span>
                        <span className="text-sm font-bold text-gold font-serif">
                            {progress}% ({Object.keys(answers).length} / {questions.length})
                        </span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gold transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </Container>
            </div>

            <Container className="max-w-3xl mt-8">
                <div className="space-y-12">
                    {currentQuestions.map((q, idx) => (
                        <QuestionCard
                            key={q.id}
                            question={q}
                            index={(currentPage * QUESTIONS_PER_PAGE) + idx + 1}
                            value={answers[q.id]}
                            onChange={(val) => handleAnswer(q.id, val)}
                        />
                    ))}
                </div>

                <div className="mt-12 flex justify-between items-center">
                    <Button
                        variant="ghost"
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        이전
                    </Button>

                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-colors",
                                    i === currentPage ? "bg-gold" : "bg-gray-200"
                                )}
                            />
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {currentPage === 0 && (
                            <Button variant="ghost" onClick={() => {
                                if (confirm("유형 선택 화면으로 돌아가시겠습니까?")) {
                                    localStorage.removeItem("vitaos_mode");
                                    setMode('IDLE');
                                }
                            }} className="text-xs text-gray-300">
                                유형 다시 선택
                            </Button>
                        )}

                        {currentPage === totalPages - 1 ? (
                            <Button
                                variant="primary"
                                className="w-32"
                                disabled={!isPageComplete}
                                onClick={handleFinish}
                            >
                                결과 보기
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                className="w-32"
                                disabled={!isPageComplete}
                                onClick={handleNext}
                            >
                                다음
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

// Subcomponent: Question Card
function QuestionCard({
    question,
    index,
    value,
    onChange
}: {
    question: Question;
    index: number;
    value?: number;
    onChange: (val: number) => void;
}) {
    return (
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md">
            <div className="flex items-start gap-4 mb-8">
                <span className="text-gold font-serif font-bold text-xl md:text-2xl mt-1">
                    Q{index}.
                </span>
                <h3 className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed font-serif break-keep">
                    {question.text}
                </h3>
            </div>

            <div className="relative pt-6 pb-2">
                {/* Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                {/* Options */}
                <div className="flex justify-between items-center px-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <button
                            key={num}
                            onClick={() => onChange(num)}
                            className={cn(
                                "relative group transition-all duration-200",
                                "w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center",
                                value === num
                                    ? "bg-gold text-white scale-110 shadow-lg ring-4 ring-gold/20"
                                    : "bg-white border-2 border-gray-200 text-gray-400 hover:border-gold hover:text-gold"
                            )}
                        >
                            <span className="text-sm md:text-lg font-bold">{num}</span>

                            {/* Label tooltip for extremes */}
                            {num === 1 && (
                                <span className={cn(
                                    "absolute -bottom-8 left-0 text-xs whitespace-nowrap transition-colors",
                                    value === num ? "text-gold font-bold" : "text-gray-400"
                                )}>
                                    전혀 아니다
                                </span>
                            )}
                            {num === 7 && (
                                <span className={cn(
                                    "absolute -bottom-8 right-0 text-xs whitespace-nowrap transition-colors",
                                    value === num ? "text-gold font-bold" : "text-gray-400"
                                )}>
                                    매우 그렇다
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Labels (Center) */}
                <div className="text-center mt-8 text-xs text-gray-300 font-medium md:hidden">
                    좌측: 부정 ----- 우측: 긍정
                </div>
            </div>
        </div>
    );
}
