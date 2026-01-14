import { Question } from "./data/questions";

export function calculateResult(answers: Record<number, number>, questionsList: Question[]): string {
    const scores = {
        TIME: { F: 0, P: 0, F_count: 0, P_count: 0 },
        ENERGY: { I: 0, O: 0, I_count: 0, O_count: 0 },
        VALUE: { M: 0, R: 0, M_count: 0, R_count: 0 },
        STRATEGY: { S: 0, E: 0, S_count: 0, E_count: 0 },
    };

    questionsList.forEach((q) => {
        const value = answers[q.id] || 4; // Default to neutral if unanswered (shouldn't happen)

        // Determine which pole this question measures
        let pole = '';

        if (q.axis === 'TIME') {
            if (q.type === 'Standard') pole = 'F';
            else if (q.type === 'Reverse') pole = 'P';
            else if (q.type === 'Situation') pole = q.subType || 'F'; // Default to F if missing
        } else if (q.axis === 'ENERGY') {
            if (q.type === 'Standard') pole = 'I';
            else if (q.type === 'Reverse') pole = 'O';
            else if (q.type === 'Situation') pole = q.subType || 'I';
        } else if (q.axis === 'VALUE') {
            if (q.type === 'Standard') pole = 'M';
            else if (q.type === 'Reverse') pole = 'R';
            else if (q.type === 'Situation') pole = q.subType || 'M';
        } else if (q.axis === 'STRATEGY') {
            if (q.type === 'Standard') pole = 'S';
            else if (q.type === 'Reverse') pole = 'E';
            else if (q.type === 'Situation') pole = q.subType || 'E';
        }

        // Add to score
        // @ts-ignore
        scores[q.axis][pole] += value;
        // @ts-ignore
        scores[q.axis][`${pole}_count`] += 1;
    });

    // Calculate averages and determine winner for each axis
    const time = (scores.TIME.F / scores.TIME.F_count) >= (scores.TIME.P / scores.TIME.P_count) ? 'F' : 'P';
    const energy = (scores.ENERGY.I / scores.ENERGY.I_count) >= (scores.ENERGY.O / scores.ENERGY.O_count) ? 'I' : 'O'; // Usually MBTI uses E for Extraversion, but we used O for Outer. Wait, result codes use O?
    // Let's check results.ts keys. FIRE, FORE. So 'O' is correct.
    // Wait, standard MBTI is I/E. Here we have I/O.
    // But Result codes are F I R E... Wait.
    // Axis 1: F/P
    // Axis 2: I/O -> Code uses I or O? 
    //   FIRE = F + I + R + E
    //   FORE = F + O + R + E
    //   So yes, O is used.

    // Axis 3: M/R
    //   FIRE = ... R ... => R is used.
    //   FIME = ... M ... => M is used.
    const value = (scores.VALUE.M / scores.VALUE.M_count) >= (scores.VALUE.R / scores.VALUE.R_count) ? 'M' : 'R';

    // Axis 4: S/E
    //   FIRE => E is used
    //   FIRS => S is used
    const strategy = (scores.STRATEGY.E / scores.STRATEGY.E_count) > (scores.STRATEGY.S / scores.STRATEGY.S_count) ? 'E' : 'S';
    // Note: Strategy Standard was S, Reverse was E.
    // If S average >= E average, then S.

    return `${time}${energy}${value}${strategy}`; // e.g. "FIRE"
}
