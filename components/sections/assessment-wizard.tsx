"use client";

import { useEffect, useState } from "react";
import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { questions, Question } from "@/lib/data/questions";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const QUESTIONS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(questions.length / QUESTIONS_PER_PAGE);

export default function AssessmentWizard() {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Load from local storage if available
        const saved = localStorage.getItem("vitaos_answers");
        if (saved) {
            try {
                setAnswers(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load answers", e);
            }
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("vitaos_answers", JSON.stringify(answers));
        }
    }, [answers, isClient]);

    const handleAnswer = (questionId: number, value: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    const currentQuestions = questions.slice(
        currentPage * QUESTIONS_PER_PAGE,
        (currentPage + 1) * QUESTIONS_PER_PAGE
    );

    const isPageComplete = currentQuestions.every((q) => answers[q.id] !== undefined);
    const progress = (Object.keys(answers).length / questions.length) * 100;

    const handleNext = () => {
        if (currentPage < TOTAL_PAGES - 1) {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    if (!isClient) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Sticky Header with Progress */}
            <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50 h-16 flex items-center shadow-sm">
                <div className="w-full max-w-4xl mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="text-xl font-serif font-bold text-foreground">
                        VITAOS
                    </Link>
                    <div className="flex flex-col items-end gap-1 w-1/2 md:w-1/3">
                        <div className="flex justify-between w-full text-xs text-muted-foreground mb-1">
                            <span>Part {Math.floor(currentPage / (TOTAL_PAGES / 4)) + 1} / 4</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gold transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 pt-24 pb-20">
                <Container className="max-w-3xl">
                    {/* Question List */}
                    <div className="space-y-12">
                        {currentQuestions.map((q, idx) => (
                            <QuestionCard
                                key={q.id}
                                question={q}
                                value={answers[q.id]}
                                onChange={handleAnswer}
                                index={currentPage * QUESTIONS_PER_PAGE + idx + 1}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="mt-16 flex items-center justify-between pt-8 border-t border-border">
                        <Button
                            variant="outline"
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className="w-32"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> 이전
                        </Button>

                        {currentPage === TOTAL_PAGES - 1 ? (
                            <Button
                                variant="primary"
                                className="w-32"
                                disabled={!isPageComplete}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                    window.location.href = "/result";
                                }}
                            >
                                결과 보기
                            </Button>
                        ) : (
                            <Button
                                variant="primary"
                                onClick={handleNext}
                                disabled={!isPageComplete}
                                className="w-32"
                            >
                                다음 <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        )}
                    </div>
                </Container>
            </main>
        </div>
    );
}

function QuestionCard({
    question,
    value,
    onChange,
    index
}: {
    question: Question;
    value?: number;
    onChange: (id: number, val: number) => void;
    index: number;
}) {
    return (
        <div className={cn(
            "p-6 md:p-8 rounded-2xl bg-white border transition-all duration-200",
            value ? "border-gold/50 shadow-md shadow-gold/5" : "border-border shadow-sm"
        )}>
            <div className="flex gap-4 items-start mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm">
                    {index}
                </span>
                <h3 className="text-lg md:text-xl font-medium leading-relaxed text-foreground pt-0.5">
                    {question.text}
                </h3>
            </div>

            <div className="flex flex-col gap-3">
                {/* Scale Labels */}
                <div className="flex justify-between px-2 text-xs text-muted-foreground font-medium mb-1">
                    <span>전혀 아니다</span>
                    <span className="hidden md:inline">보통이다</span>
                    <span>매우 그렇다</span>
                </div>

                {/* Scale Buttons */}
                <div className="flex justify-between items-center gap-1 md:gap-2 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-gray-100 -z-10" />

                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <button
                            key={num}
                            onClick={() => onChange(question.id, num)}
                            className={cn(
                                "relative flex items-center justify-center rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                                // Size variation for emphasis on edges and center
                                num === 4 ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10 md:w-12 md:h-12",

                                // Selected State
                                value === num
                                    ? "bg-gold text-white scale-110 shadow-lg shadow-gold/20"
                                    : "bg-white border border-gray-200 text-gray-400 hover:border-gold hover:text-gold"
                            )}
                        >
                            <span className={cn("font-bold", value === num ? "text-base" : "text-sm")}>
                                {num}
                            </span>

                            {/* Selection Indicator Ring */}
                            {value === num && (
                                <span className="absolute inset-0 rounded-full ring-2 ring-gold ring-offset-2 animate-ping-once" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
