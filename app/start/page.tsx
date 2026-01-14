import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { Construction } from "lucide-react";
import AssessmentWizard from "@/components/sections/assessment-wizard";

export default function StartPage() {
    return <AssessmentWizard />;
}
