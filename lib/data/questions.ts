export type AxisType = 'TIME' | 'ENERGY' | 'VALUE' | 'STRATEGY';
export type QuestionType = 'Standard' | 'Reverse' | 'Situation';

export interface Question {
    id: number;
    text: string;
    axis: AxisType;
    type: QuestionType;
    subType?: string; // e.g., 'F', 'P', 'I', 'O', etc. for reference
}

export const questions: Question[] = [
    // ① TIME 축 — 현재(P) vs 미래(F)
    // A. Standard (미래 지향 · F)
    { id: 1, text: "당장의 육체적, 정신적 불편함이 따르더라도, 그것이 장기적인 목표 달성에 필수적이라면 기꺼이 감수한다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 2, text: "현재 즉각적으로 얻을 수 있는 만족감보다는, 5년 혹은 10년 뒤에 얻게 될 거대한 성과가 내 삶의 방향성을 결정한다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 3, text: "오늘 내리는 사소한 결정 하나가 나비효과처럼 훗날 나의 인생에 어떤 파장을 미칠지 습관적으로 시뮬레이션한다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 4, text: "지금 당장 눈에 보이는 성과나 보상이 없더라도, 내가 설정한 방향이 논리적으로 옳다고 판단되면 묵묵히 지속할 수 있다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 5, text: "미래의 이상적인 '나'의 모습을 구현하기 위해, 현재의 소비 습관이나 생활 패턴을 엄격하게 통제하고 조정한다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 6, text: "지금 당장 편안하고 안락한 길보다는, 나중에 뒤돌아봤을 때 후회를 남기지 않을 도전적인 길을 선택하는 편이다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 7, text: "단기간에 반짝하고 사라지는 성과보다는, 시간이 걸리더라도 복리로 쌓여가는 장기적인 성장의 힘을 더 신뢰한다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 8, text: "달성하고자 하는 미래의 비전이 선명할수록, 현재 겪는 고통이나 인내의 시간을 견디는 것이 수월해진다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 9, text: "오늘의 기분이나 감정 상태에 따라 행동하기보다, 내일 혹은 먼 미래에 가져올 이성적인 결과를 우선적으로 고려한다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 10, text: "지금 내가 치르는 희생과 노력은 결코 사라지지 않으며, 훗날 더 큰 자유와 선택권으로 돌아올 것이라는 확고한 믿음이 있다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 11, text: "구체적인 장기 로드맵이나 인생의 마일스톤이 설정되어 있지 않으면, 삶이 표류하는 것 같아 심리적으로 불안함을 느낀다.", axis: 'TIME', type: 'Standard', subType: 'F' },
    { id: 12, text: "미래의 성장 잠재력이 확실히 보장된다면, 현재 누리고 있는 안정적인 직장이나 환경을 과감히 포기할 수 있다.", axis: 'TIME', type: 'Standard', subType: 'F' },

    // B. Reverse (현재 지향 · P)
    { id: 13, text: "불확실한 미래를 대비한다는 명목으로 지금 누릴 수 있는 행복을 과도하게 억제하는 것은 어리석다고 생각한다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 14, text: "현재의 삶과 상황이 충분히 만족스럽다면, 굳이 리스크를 감수하면서까지 변화를 시도할 필요성을 느끼지 못한다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 15, text: "10년 뒤의 막연한 성공보다 오늘 하루 내가 느끼는 구체적인 기쁨과 안락함이 내 인생에서 더 중요하다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 16, text: "몇 년을 기다려야 하는 거창한 계획보다는, 즉각적인 피드백이나 결과가 나오는 일에 훨씬 더 큰 흥미를 느낀다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 17, text: "미래는 누구도 예측할 수 없으므로, 계획에 얽매이기보다 현재 흐름에 몸을 맡기고 즐기는 것이 현명하다고 본다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 18, text: "지금 이 순간 행복하지 않은 사람이 미래에 성공한다고 해서 진정으로 행복해질 것이라고 생각하지 않는다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 19, text: "아직 오지 않은 미래에 대해 미리 걱정하고 고민하는 것은 현재의 에너지를 낭비하고 삶을 피로하게 만든다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 20, text: "아무리 좋은 명분이 있어도 당장의 성과나 변화가 눈에 보이지 않으면, 그 선택은 잘못된 것이라는 의심이 든다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 21, text: "미래의 대박을 노리는 것보다, 현재 내 삶의 기반이 흔들리지 않도록 안정감을 유지하는 것이 최우선이다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 22, text: "더 나은 내일을 위해 오늘의 휴식이나 소소한 즐거움을 포기하라는 요구는 나에게 고통스럽게 다가온다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 23, text: "장기적인 목표는 상황에 따라 언제든 바뀔 수 있으므로, 너무 심각하게 설정하거나 집착할 필요가 없다고 본다.", axis: 'TIME', type: 'Reverse', subType: 'P' },
    { id: 24, text: "'고진감래'와 같이 현재의 고통을 미화하며 희생을 강요하는 사고방식은 내 성향과 맞지 않는다.", axis: 'TIME', type: 'Reverse', subType: 'P' },

    // C. Situation (상황 판단)
    { id: 25, text: "주말에 아무것도 하지 않고 쉬는 것보다, 미래의 커리어나 자기계발을 위해 강의를 듣거나 책을 읽는 것을 택한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 26, text: "지금 당장 100만 원을 받는 것보다, 1년 뒤에 확실하게 150만 원을 받을 수 있는 조건을 선택한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 27, text: "연봉이 높지만 발전이 없는 직장보다, 당장은 배고파도 폭발적인 성장 가능성이 있는 초기 스타트업을 선호한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 28, text: "오늘 밤을 새워서라도 내일 얻을 수 있는 성취나 결과물의 퀄리티를 높이는 쪽을 주저 없이 선택한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 29, text: "과정이 지루하고 재미없더라도, 이것이 장기적으로 내 자산이 된다고 판단하면 중도 포기하지 않고 끝까지 완수한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 30, text: "'지금 편하게 가는 길'과 '힘들지만 나중에 유리한 길'이 충돌할 때, 본능적으로 후자를 선택하는 나를 발견한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 31, text: "프로젝트의 결과가 당장 나오지 않더라도, 방향성이 맞다면 조바심 내지 않고 묵묵히 기다릴 줄 안다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 32, text: "예기치 않게 빈 시간이 생기면, 단순히 노는 것보다 미래를 위한 구상이나 계획을 점검하는 데 시간을 쓴다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 33, text: "내일로 미뤄도 전혀 문제없는 일이라도, 마음의 부채감을 없애기 위해 오늘 미리 처리해두는 편이다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 34, text: "여행이나 데이트를 할 때 즉흥적으로 움직이는 것보다, 동선과 시간을 미리 계획하고 움직이는 것을 선호한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 35, text: "당장의 소비로 얻는 만족감보다, 자산을 불려 나중에 얻게 될 경제적 자유(Time Rich)를 위해 저축/투자를 택한다.", axis: 'TIME', type: 'Situation', subType: 'F' },
    { id: 36, text: "현재 생활이 아무리 편안해도, 이대로 가면 미래의 내 입지가 좁아질 것이라는 생각이 들면 즉시 불안해진다.", axis: 'TIME', type: 'Situation', subType: 'F' },

    // ② ENERGY 축 — 내적(I) vs 외적(O)
    // A. Standard (내적 · I)
    { id: 37, text: "나는 타인과 함께 있을 때보다 혼자만의 공간에서 사색할 때 가장 강력한 에너지와 영감을 얻는다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 38, text: "얕고 넓게 여러 일을 처리하는 것보다, 하나의 주제에 깊이 파고들어 끝장을 보는 몰입의 시간이 반드시 필요하다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 39, text: "어떤 행동을 취하기 전에 내면의 논리와 감정이 완벽하게 정리되어야 비로소 움직일 수 있다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 40, text: "물리적으로 혼자 있는 시간이 확보되지 않으면, 생산성이 급격히 떨어지고 정신적으로 고갈됨을 느낀다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 41, text: "인생의 중요한 결정을 내릴 때, 타인의 조언보다는 나 스스로 깊이 숙고한 끝에 내린 결론을 따른다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 42, text: "복잡한 머릿속 생각이 글로 정리되거나 구조화될 때 비로소 에너지가 회복되고 안정감을 느낀다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 43, text: "나의 성과를 외부에 과시하는 것보다, 그 일의 본질을 내가 온전히 이해하고 장악했는지가 더 중요하다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 44, text: "외부의 규율이나 타인의 시선보다는, 나 스스로 정한 엄격한 기준과 원칙이 나를 움직이는 원동력이다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 45, text: "시끄럽고 활기찬 환경보다는, 고요하고 차분하여 온전히 집중할 수 있는 환경에서 능률이 오른다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 46, text: "아무리 좋은 사람들과의 만남이라도, 장시간 지속되면 기가 빨리는 느낌이 들어 혼자만의 충전 시간이 필요하다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 47, text: "세상의 평판이나 인정보다, 내 스스로 '이만하면 되었다'고 납득하는 것이 나에게는 더 중요하다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },
    { id: 48, text: "진정한 성장은 시끌벅적한 토론장이 아니라, 철저하게 고독한 시간 속에서 이루어진다고 믿는다.", axis: 'ENERGY', type: 'Standard', subType: 'I' },

    // B. Reverse (외적 · O)
    { id: 49, text: "혼자 고민할 때보다 사람들과 어울려 대화하고 부대낄 때 에너지가 샘솟고 살아있음을 느낀다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 50, text: "책상 앞에서의 고민보다 타인과의 대화나 브레인스토밍 과정에서 훨씬 더 좋은 아이디어가 떠오른다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 51, text: "혼자서 완벽하게 해내는 것보다, 팀원들과 협력하여 으쌰으쌰 할 때 더 좋은 성과를 낸다고 생각한다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 52, text: "생각만 하고 있기보다는, 일단 입 밖으로 말을 내뱉으면서 생각이 정리되고 구체화되는 편이다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 53, text: "내가 한 일에 대해 주변 사람들이 어떻게 반응하고 평가하는지가 나의 만족도에 지대한 영향을 미친다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 54, text: "집이나 사무실에 박혀 있기보다, 외부 미팅이나 행사 등 활동적인 일정이 많을수록 활력이 생긴다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 55, text: "혼자 있는 시간이 길어지면 고립감을 느끼거나 답답해서 견디기 힘들 때가 많다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 56, text: "개인의 실력보다 다양한 사람들과의 네트워크와 인맥이 성공의 핵심 열쇠라고 믿는다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 57, text: "나의 생각과 영향력을 최대한 많은 사람에게 전파하고 알리는 것이 중요하다고 생각한다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 58, text: "발표나 무대, 혹은 사람들이 주목하는 상황에 서면 긴장하기보다 오히려 힘이 나고 즐겁다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 59, text: "깊은 사색보다는 빠른 실행과 활발한 소통이 나에게 더 큰 에너지를 공급해 준다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },
    { id: 60, text: "\"백지장도 맞들면 낫다\"는 말처럼, 혼자 하는 것보다는 함께 할 때 시너지가 나고 결과도 좋다고 확신한다.", axis: 'ENERGY', type: 'Reverse', subType: 'O' },

    // C. Situation (상황 판단)
    { id: 61, text: "문제가 발생했을 때 누군가에게 상의하기보다, 일단 혼자서 원인을 분석하고 해결책을 정리하는 편이다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 62, text: "새로운 분야를 배울 때 스터디 모임에 나가기보다, 관련 서적이나 자료를 찾아 혼자 깊이 파고드는 방식을 택한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 63, text: "업무가 막혔을 때 회의를 소집하기보다, 조용한 곳으로 자리를 옮겨 혼자 생각할 시간을 갖는다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 64, text: "프로젝트를 진행할 때 초안이나 구조를 혼자 완벽하게 만든 뒤에 팀원들에게 공유하는 것을 선호한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 65, text: "휴가나 주말에는 친구들을 만나기보다, 집에서 쉬거나 혼자만의 취미 생활을 하며 에너지를 충전한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 66, text: "무언가를 결정해야 할 때, 즉석에서 답하기보다 \"생각해 보고 말씀드릴게요\"라며 시간을 버는 편이다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 67, text: "나의 실력이 완벽하게 갖춰지기 전에는 섣불리 자신을 드러내거나 홍보하지 않는다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 68, text: "스트레스를 받으면 사람을 만나 수다를 떨기보다, 혼자서 삭히거나 명상, 독서 등을 통해 해소한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 69, text: "외부 기회를 찾아다니기보다, 내 내공을 쌓고 있으면 기회가 자연스럽게 찾아올 것이라 행동한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 70, text: "미완성된 아이디어를 공유하여 피드백을 받기보다, 완성도를 최대한 높인 뒤에 세상에 내놓기를 원한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 71, text: "카페나 도서관에서도 개방된 자리보다는 구석지거나 벽을 등진, 방해받지 않는 자리를 찾아 앉는다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },
    { id: 72, text: "일을 시작하기 전에 자료 조사, 분석, 정리가 선행되지 않으면 쉽사리 착수하지 못한다.", axis: 'ENERGY', type: 'Situation', subType: 'I' },

    // ③ VALUE 축 — 의미(M) vs 보상(R)
    // A. Standard (의미 · M)
    { id: 73, text: "연봉이나 수익이 아무리 높아도, 그 일이 사회적으로나 개인적으로 의미가 없다고 느껴지면 선택하지 않는다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 74, text: "인생의 중요한 선택을 할 때 '이것이 얼마나 이익이 되는가'보다 '이것이 올바른가/가치 있는가'를 먼저 묻는다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 75, text: "남들이 알아주지 않아도, 내가 하는 일이 누군가의 인생에 긍정적인 영향을 준다면 그것으로 족하다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 76, text: "당장의 성과가 더디더라도, 내가 추구하는 철학과 방향성이 맞다면 불안해하지 않고 밀고 나간다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 77, text: "단순히 돈을 버는 것보다, 세상에 필요한 무언가를 기여하고 있다는 느낌이 들 때 깊은 만족감을 느낀다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 78, text: "돈은 나의 비전을 실현하기 위한 수단일 뿐, 돈 자체가 인생의 궁극적인 목표가 될 수는 없다고 믿는다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 79, text: "아무리 쉽고 편한 일이라도, '왜 해야 하는가'에 대한 명분이 납득되지 않으면 오래 지속하지 못한다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 80, text: "내가 죽은 뒤에 세상에 무엇을 남길 것인가(Legacy)에 대해 평소에 자주 생각하고 고민한다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 81, text: "내가 옳다고 믿는 가치를 지키기 위해서라면, 금전적인 손해나 불이익도 어느 정도 감수할 각오가 되어 있다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 82, text: "일이 힘들어도 그 안에 '의미'가 발견되면, 번아웃이 오지 않고 오히려 새로운 에너지를 얻는다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 83, text: "진정한 성공의 기준은 통장 잔고가 아니라, 내가 내 삶의 의미를 얼마나 충실히 실현했는가에 있다.", axis: 'VALUE', type: 'Standard', subType: 'M' },
    { id: 84, text: "단순히 물건을 파는 비즈니스보다, 사람들의 의식을 깨우거나 삶을 개선하는 휴머니즘적 사업에 더 끌린다.", axis: 'VALUE', type: 'Standard', subType: 'M' },

    // B. Reverse (보상 · R)
    { id: 85, text: "아무리 좋은 의도와 과정을 가졌더라도, 결과적인 수치나 성과가 없다면 그 일은 의미가 없다고 본다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 86, text: "자본주의 사회에서 돈이 되지 않는 일을 열정만으로 지속하는 것은 현실 감각이 없는 행동이다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 87, text: "자기 만족도 중요하지만, 타인에게 인정받고 사회적 지위나 보상이 따라와야 그 일의 가치가 완성된다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 88, text: "과정이 아름다운 것보다, 빠르고 효율적으로 목표를 달성하여 성과를 내는 것이 비즈니스의 본질이다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 89, text: "구체적이고 물질적인 보상(인센티브, 수익)이 주어질 때 삶의 만족도와 의욕이 가장 크게 상승한다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 90, text: "솔직히 말해서, 내 인생의 가장 큰 목표는 경제적 자유와 풍요로운 부를 축적하는 것이다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 91, text: "수익 모델이 불투명하거나 돈이 안 벌리는 일은 결국 지속할 수 없기에 빠르게 포기하는 게 낫다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 92, text: "일을 하고 나서 내 손에 쥐어지는 실질적인 이득이 없다면, 헛고생했다는 생각에 허무함을 느낀다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 93, text: "신념을 지키기 위해 손해를 감수하는 것은 소설 속 이야기이며, 현실에서는 실리를 챙기는 것이 똑똑한 것이다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 94, text: "칭찬이나 감사 인사보다는, 확실한 금전적 보상이 나를 춤추게 하고 더 열심히 일하게 만든다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 95, text: "성공의 척도는 감상적인 의미보다는 객관적인 숫자(매출, 연봉, 자산)로 증명되어야 한다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },
    { id: 96, text: "인류 발전도 좋지만, 우선은 나와 내 가족의 안위와 성공이 보장되는 것이 1순위다.", axis: 'VALUE', type: 'Reverse', subType: 'R' },

    // C. Situation (상황 판단)
    { id: 97, text: "연봉을 30% 삭감하더라도 평소 꿈꿔왔던 의미 있는 프로젝트를 맡을 기회가 온다면 이직을 선택한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 98, text: "직업이나 사업 아이템을 고를 때, '돈이 되는 트렌드'보다 '내 가치관과 맞는가'를 최우선 기준으로 삼는다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 99, text: "콘텐츠를 만들 때 조회수나 좋아요를 위한 자극적인 내용보다, 소수라도 깊게 공감할 진정성 있는 메시지를 담는다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 100, text: "당장의 수입 활동을 줄이더라도, 내적 성장이나 인문학적 소양을 쌓는 데 시간을 할애하는 편이다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 101, text: "누군가 \"그 일을 왜 하세요?\"라고 물으면 \"돈 벌려고요\"가 아닌, 나만의 철학적인 이유를 즉시 답할 수 있다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 102, text: "단순히 기능적인 서비스를 제공하는 것보다, 미션과 비전이 명확한 브랜드나 커리어를 구축하려고 한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 103, text: "사업 파트너를 구할 때 능력이 뛰어나도 가치관이 다르면 거절하고, 능력이 부족해도 결이 같은 사람을 택한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 104, text: "'부자가 되는 것'보다 '존경받는 사람' 혹은 '가치 있는 삶을 산 사람'으로 기억되기를 원한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 105, text: "비즈니스 협상에서 더 큰 이익을 볼 수 있는 기회라도, 내 원칙이나 도덕성에 위배되면 단호히 거절한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 106, text: "투자를 할 때도 단순히 수익률만 보지 않고, 해당 기업이 사회에 어떤 임팩트를 주는지 고려한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 107, text: "일이 너무 힘들어서 포기하고 싶을 때, 나를 다시 일으켜 세우는 것은 '보상'이 아니라 '초심(의미)'이다.", axis: 'VALUE', type: 'Situation', subType: 'M' },
    { id: 108, text: "효율성과 사람에 대한 배려가 충돌하는 상황이 오면, 조금 돌아가더라도 사람에게 도움이 되는 쪽을 택한다.", axis: 'VALUE', type: 'Situation', subType: 'M' },

    // ④ STRATEGY 축 — 안정(S) vs 확장(E)
    // A. Standard (안정 · S)
    { id: 109, text: "불규칙한 대박보다는 예측 가능한 범위 내에서 돌아가는 루틴과 시스템이 갖춰져야 마음이 편하다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 110, text: "한순간에 타오르고 꺼지는 성장보다는, 얇고 길더라도 오래 지속 가능한(Sustainable) 모델을 선호한다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 111, text: "아무리 큰 이익이 기대되어도, 내가 감당할 수 없는 리스크가 존재한다면 그 선택을 피하고 싶다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 112, text: "빠른 속도로 가다가 넘어지는 것보다, 느리더라도 돌다리를 두들기며 안전하게 가는 것이 맞다고 본다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 113, text: "판을 완전히 뒤엎는 혁신보다는, 기존의 것을 점진적으로 개선(Kaizen)하고 최적화하는 데 강점이 있다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 114, text: "실패했을 때 잃을 것이 너무 크다면, 차라리 도전을 멈추고 현재 상태를 유지하는 쪽을 택한다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 115, text: "환경이 급격하게 변하거나 예측 불가능한 상황이 닥치면 스트레스를 받고 적응하는 데 시간이 걸린다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 116, text: "공격적인 확장보다는 내부의 내실을 다지고 리스크를 관리하는 운영(Operation) 능력이 더 중요하다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 117, text: "내 능력과 자본이 통제할 수 있는 범위 안에서만 일을 벌이고 움직이는 것을 원칙으로 한다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 118, text: "빠른 성장은 필연적으로 부작용을 낳기 때문에, 탄탄한 기반 없이는 속도를 내면 안 된다고 생각한다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 119, text: "일과 삶의 균형(워라밸)이 깨질 정도로 무리하게 사업이나 일을 확장하는 것은 두렵다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },
    { id: 120, text: "즉흥적인 대응보다는 꼼꼼하게 짜여진 매뉴얼과 계획된 환경 속에서 일할 때 효율이 높다.", axis: 'STRATEGY', type: 'Standard', subType: 'S' },

    // B. Reverse (확장 · E)
    { id: 121, text: "현재의 안정감에 안주하는 것은 도태되는 지름길이며, 성장을 가로막는 가장 큰 적이라고 생각한다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 122, text: "비즈니스나 인생은 속도전이다. 기회가 왔을 때 빠르게 덩치를 키우고 시장을 선점해야(Scale-up) 한다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 123, text: "인생을 바꿀 수 있는 큰 기회라면, 가진 것을 잃을 수도 있는 위험(Risk)을 기꺼이 감수하고 베팅한다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 124, text: "10%의 개선보다는 10배(10x)의 폭발적인 성장을 목표로 삼는 문샷 싱킹(Moonshot Thinking)을 선호한다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 125, text: "감당하기 벅찬 큰 도전과 시련만이 내 그릇을 키우고 삶을 획기적으로 바꿀 수 있다고 믿는다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 126, text: "실패를 두려워해서 시도조차 하지 않는 것이야말로 인생에서 가장 큰 손해라고 생각한다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 127, text: "변화가 빠르고 역동적인 환경일수록 지루하지 않고 오히려 내 능력이 발휘된다고 느낀다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 128, text: "현상 유지보다는 끊임없이 영토를 확장하고 새로운 영역을 개척하는 것이 내 본능에 가깝다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 129, text: "내가 감당할 수 있는 범위를 넘어서는 일이라도 일단 저지르고, 수습하며 배우는 것이 진짜 성장이다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 130, text: "거북이처럼 느리게 성장하는 것을 지켜보는 것은 너무나 답답하고 지루한 일이다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 131, text: "워라밸이나 균형보다는, 한동안 삶을 갈아 넣어서라도 압도적인 성취를 이루는 것이 낫다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },
    { id: 132, text: "더 좋은 기회가 포착되면, 기존에 하던 일을 과감히 접고 즉시 태세를 전환(Pivot)할 수 있다.", axis: 'STRATEGY', type: 'Reverse', subType: 'E' },

    // C. Situation (상황 판단)
    { id: 133, text: "매달 꼬박꼬박 들어오는 월급 300만 원보다, 수입은 0원일 수 있어도 월 3,000만 원을 벌 가능성이 있는 사업을 택한다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 134, text: "작고 탄탄한 '알짜배기 가게' 사장님보다, 적자가 나더라도 전 세계로 뻗어가는 '유니콘 기업' 창업가를 꿈꾼다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 135, text: "혼자서 꼼꼼하게 일처리를 하기보다, 부족하더라도 빠르게 팀을 꾸려 일을 위임하고 규모를 키운다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 136, text: "전문 분야 하나를 깊게 파기보다, 다양한 분야를 넓게 섭렵하여 연결하고 확장하는 방식을 선호한다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 137, text: "완벽한 제품을 만들기 위해 1년을 준비하기보다, 60% 완성도라도 한 달 만에 출시하여 시장 반응을 본다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 138, text: "투자를 할 때 '원금 보장'형 상품보다, 원금 손실 위험이 있어도 '수익률 상한이 없는' 상품에 투자한다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 139, text: "새로운 프로젝트를 시작할 때 '어떻게 실패하지 않을까'보다 '성공하면 얼마나 대박일까'를 먼저 상상한다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 140, text: "실패했을 때의 비난이나 자책보다, 아무것도 하지 않았을 때의 후회를 더 견디기 힘들어한다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 141, text: "좋은 아이템이 보이면 분석하느라 시간을 쓰기보다, 일단 도메인을 사거나 샘플을 만드는 등 바로 실행에 옮긴다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 142, text: "올해 목표를 세울 때 달성 가능한 현실적인 목표보다, 남들이 비웃을 정도로 크고 대담한 목표를 세운다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 143, text: "여유 자금이 생기면 저축(안정)하기보다, 내 사업이나 자기계발에 전액 재투자(확장)하여 레버리지를 일으킨다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
    { id: 144, text: "아직 충분히 검증되지는 않았더라도, 내 직관이 확신을 주면 기존 계획을 과감히 전부 바꾼다.", axis: 'STRATEGY', type: 'Situation', subType: 'E' },
];
