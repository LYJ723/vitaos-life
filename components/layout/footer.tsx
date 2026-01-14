import Link from "next/link";
import { Container } from "@/components/ui/section";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-border py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-serif font-bold text-foreground">VITAOS</span>
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            삶의 전략을 설계하는 당신만의 라이프 OS
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <Link href="/terms" className="hover:text-foreground transition-colors">이용약관</Link>
                        <Link href="/privacy" className="hover:text-foreground transition-colors">개인정보처리방침</Link>
                        <Link href="mailto:support@vitaos.com" className="hover:text-foreground transition-colors">문의하기</Link>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        &copy; {currentYear} VITAOS. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
}
