window.APP_DATA = window.APP_DATA || {};
window.APP_DATA.clf = {
  "id": "clf-c02",
  "name": "AWS Certified Cloud Practitioner",
  "code": "CLF-C02",
  "passScore": 700,
  "maxScore": 1000,
  "examMinutes": 90,
  "totalQuestions": 65,
  "scoredQuestions": 50,
  "domains": [
    {
      "id": "d1",
      "title": "클라우드 개념",
      "weight": 24,
      "tasks": [
        {
          "taskId": "1.1",
          "title": "AWS 클라우드의 이점 정의",
          "concept": {
            "summary": "AWS 클라우드로 전환하는 이유를 묻는 문제는 시험에서 가장 자주 등장하는 유형입니다. 단순히 '클라우드가 저렴하고 좋다'가 아니라, 온프레미스 환경과 비교했을 때 정확히 어떤 이점이 어떤 상황에 적용되는지 구분하는 능력이 필요합니다. AWS는 전통적으로 6가지 핵심 이점(고정비의 가변비 전환, 규모의 경제, 용량 추정 불필요, 속도와 민첩성, 데이터센터 운영 비용 절감, 몇 분 만에 전 세계로 확장)을 강조하며, 여기에 고가용성과 탄력성 같은 아키텍처적 특성이 더해집니다. 시나리오 문제에서는 '초기 투자 없이 시작하려는 스타트업', '트래픽을 예측하기 어려운 서비스'처럼 특정 상황을 제시하고 가장 알맞은 이점을 고르도록 요구하므로, 각 이점을 표면적으로 암기하기보다 서로 구분되는 키워드로 정리해두는 것이 중요합니다.",
            "keyPoints": [
              "6가지 핵심 이점: (1) 고정비용(CapEx)을 가변 비용(OpEx)으로 전환 (2) 규모의 경제로 인한 비용 절감 (3) 용량을 미리 추정할 필요 없음 (4) 속도와 민첩성 증가 (5) 데이터센터 운영/유지관리 비용 절감 (6) 몇 분 만에 전 세계로 배포",
              "탄력성(Elasticity)은 수요에 따라 리소스를 자동으로 늘리거나 줄이는 능력, 확장성(Scalability)은 필요할 때 용량을 늘릴 수 있는 능력으로 서로 뉘앙스가 다름",
              "고가용성(High Availability)은 여러 가용 영역(AZ)에 걸쳐 시스템을 설계해 장애 발생 시에도 서비스가 지속되도록 하는 것",
              "글로벌 인프라 구성 요소: 리전(Region, 물리적으로 분리된 지리적 영역), 가용 영역(Availability Zone, 리전 내 독립된 데이터센터 그룹), 엣지 로케이션(CloudFront 등 콘텐츠 전송용)",
              "민첩성(Agility)은 새로운 IT 리소스를 몇 번의 클릭으로 프로비저닝하고, 실패한 실험은 비용 부담 없이 빠르게 폐기할 수 있는 능력을 의미",
              "규모의 경제는 AWS가 수많은 고객의 수요를 통합해 대규모로 구매함으로써 얻는 원가 절감 효과를 고객에게 낮은 요금으로 전달하는 것",
              "'용량 추정 불필요'는 트래픽이 불확실한 신규 서비스에서 과다 프로비저닝(자원 낭비)이나 과소 프로비저닝(기회 손실) 문제를 모두 해결",
              "시험에서는 여러 이점이 동시에 보기로 제시될 때, 문제 시나리오의 핵심 키워드(초기 투자, 예측 불가능한 수요, 글로벌 사용자 등)와 가장 직접적으로 연결되는 이점을 선택해야 함"
            ],
            "example": "예를 들어 한 신생 게임 스튜디오가 신작 출시 전 트래픽을 정확히 예측할 수 없어 서버를 얼마나 준비해야 할지 고민한다면, 이는 '용량을 미리 추정할 필요가 없다'는 이점과 '탄력성'이 결합된 사례입니다. 반대로 이 회사가 서버 구매를 위한 초기 자본 지출 없이 서비스를 시작하고 싶다면, 이는 '고정비용을 가변 비용으로 전환'하는 이점에 해당합니다. 이렇게 같은 회사라도 상황에 따라 강조되는 이점이 다르므로, 문제의 핵심 조건을 정확히 읽어내는 연습이 필요합니다."
          }
        },
        {
          "taskId": "1.2",
          "title": "AWS 클라우드의 설계 원칙 파악",
          "concept": {
            "summary": "AWS Well-Architected Framework는 클라우드 아키텍처를 평가하고 개선하기 위한 질문 중심의 프레임워크로, 6개의 기둥(Pillar)으로 구성됩니다. Cloud Practitioner 시험에서는 각 기둥의 이름과 핵심 초점을 정확히 구분하는 문제가 자주 출제되며, 특히 신뢰성(Reliability)과 성능 효율성(Performance Efficiency), 비용 최적화(Cost Optimization)와 지속 가능성(Sustainability)을 혼동하지 않는 것이 관건입니다. 이 프레임워크는 특정 서비스가 아니라 '질문지'와 '설계 원칙' 모음이며, AWS Well-Architected Tool을 통해 워크로드를 무료로 검토할 수 있다는 점도 함께 기억해야 합니다. 각 기둥은 서로 트레이드오프 관계에 있을 수 있어(예: 보안 강화가 속도를 늦출 수 있음), 실제 설계에서는 균형을 찾는 것이 목표입니다.",
            "keyPoints": [
              "운영 우수성(Operational Excellence): 시스템을 실행하고 모니터링하여 비즈니스 가치를 제공하고, 절차와 프로세스를 지속적으로 개선하는 능력 (예: 변경을 코드로 관리, 작은 단위로 자주 배포)",
              "보안(Security): 데이터, 시스템, 자산을 보호하는 능력 (예: 최소 권한 원칙, 다단계 인증, 데이터 암호화, 위협 탐지)",
              "신뢰성(Reliability): 워크로드가 장애로부터 복구되고, 수요를 동적으로 충족하며, 일시적 네트워크 문제 등으로 인한 중단을 완화하는 능력",
              "성능 효율성(Performance Efficiency): 컴퓨팅 리소스를 효율적으로 사용하고 수요 변화나 기술 발전에 맞춰 효율성을 유지하는 능력 (예: 서버리스, 적합한 인스턴스 유형 선택)",
              "비용 최적화(Cost Optimization): 불필요한 비용을 피하고 시스템이 최저 비용으로 비즈니스 가치를 제공하도록 하는 능력 (예: 적정 규모 조정, 사용하지 않는 리소스 종료)",
              "지속 가능성(Sustainability): 클라우드 워크로드가 환경에 미치는 영향(에너지, 자원 사용)을 최소화하는 능력으로 2021년에 6번째 기둥으로 추가됨",
              "일반 설계 원칙: 용량을 추측하지 말 것, 실제 운영 규모로 테스트할 것, 아키텍처 실험과 발전을 자동화할 것, 아키텍처가 진화할 수 있도록 허용할 것, 데이터 기반으로 아키텍처를 개선할 것, 게임 데이(장애 시뮬레이션)로 개선할 것",
              "AWS Well-Architected Tool은 콘솔에서 무료로 제공되며, 워크로드를 6개 기둥 기준으로 검토하고 개선 권장사항을 제시",
              "Trusted Advisor와는 다른 개념: Trusted Advisor는 계정 전반의 자동화된 점검 도구이고, Well-Architected Framework/Tool은 워크로드 설계를 사람이 직접 검토하는 구조화된 방법론"
            ],
            "example": "한 회사가 신규 워크로드를 AWS로 이전하면서 '비용을 최소화하되 트래픽 급증에도 안정적으로 서비스가 유지되어야 한다'는 요구사항을 받았다고 가정합시다. 이는 비용 최적화 기둥(적정 규모의 인스턴스, 예약 인스턴스 활용)과 신뢰성 기둥(다중 가용 영역 배포, 자동 장애 조치)이 동시에 적용되는 사례입니다. 두 기둥은 서로 다른 질문(얼마나 저렴한가 vs 얼마나 복구력이 있는가)에 답하므로, 시험에서 이 둘을 혼동하지 않는 것이 중요합니다."
          }
        },
        {
          "taskId": "1.3",
          "title": "AWS 클라우드 마이그레이션의 이점과 전략 이해",
          "concept": {
            "summary": "기업이 클라우드로 이전하는 과정은 단순한 기술 이전이 아니라 조직 전체의 변화 관리 과정이며, AWS는 이를 체계화한 AWS Cloud Adoption Framework(AWS CAF)를 제공합니다. Cloud Practitioner 시험에서는 CAF가 가져다주는 4가지 비즈니스 성과(비즈니스 위험 감소, ESG 성과 개선, 수익 증대, 운영 효율성 향상)를 구분하는 문제와, 실제 워크로드를 이전할 때 사용하는 6R 마이그레이션 전략 및 관련 도구(AWS Snowball, AWS DMS 등)를 시나리오에 적용하는 문제가 함께 출제됩니다. 특히 '데이터 양이 매우 커서 네트워크 전송이 비현실적인 경우'와 '데이터베이스를 다운타임 없이 지속적으로 복제해야 하는 경우'를 구분해 알맞은 서비스를 고르는 유형이 자주 나옵니다. 6R 전략은 애플리케이션을 얼마나 변경할 것인가를 기준으로 구분되므로, 전략별로 '코드 변경 여부'와 '목표'를 짝지어 암기하는 것이 효과적입니다.",
            "keyPoints": [
              "AWS CAF의 4가지 비즈니스 성과: 비즈니스 위험 감소(규정 준수/보안 강화), ESG 성과 개선(환경·사회·거버넌스), 수익 증대(신규 디지털 상품/서비스), 운영 효율성 향상(자동화를 통한 생산성 향상)",
              "AWS CAF는 6개 관점(Perspective)으로도 구성됨: 비즈니스, 사람(People), 거버넌스, 플랫폼, 보안, 운영 — 시험에서는 4가지 비즈니스 성과가 더 자주 강조됨",
              "6R 마이그레이션 전략: Rehost(리프트 앤 시프트, 코드 변경 없이 그대로 이전), Replatform(약간의 최적화 후 이전), Repurchase(기존 라이선스를 버리고 SaaS 등 신규 제품 구매), Refactor/Re-architect(클라우드 네이티브로 재설계), Retain(당장은 온프레미스에 유지), Retire(더 이상 필요 없는 애플리케이션 폐기)",
              "AWS Snowball: 페타바이트급 대용량 데이터를 네트워크 대역폭 제약 없이 물리적 디바이스로 안전하게 전송할 때 사용",
              "AWS Database Migration Service(DMS): 소스 데이터베이스를 최소한의 다운타임으로 AWS로 마이그레이션하고, 필요 시 지속적인 복제(replication)도 지원",
              "AWS Application Discovery Service: 마이그레이션 계획 수립 전 온프레미스 서버 및 애플리케이션 종속성을 자동으로 파악",
              "AWS Application Migration Service(MGN): 물리 서버, 가상 서버, 클라우드 서버를 최소한의 변경으로 AWS로 리호스팅",
              "마이그레이션 전략 선택은 '얼마나 빨리 이전해야 하는가'와 '얼마나 많은 재설계 자원을 투입할 수 있는가'의 트레이드오프에 따라 달라짐"
            ],
            "example": "한 제조업체가 온프레미스 데이터센터에 10년간 쌓인 200TB 규모의 로그 데이터를 클라우드 스토리지로 옮기려 하는데, 사내 인터넷 회선으로는 전송에 수개월이 걸립니다. 이 경우 AWS Snowball을 이용해 물리적으로 데이터를 전송하는 것이 적합합니다. 반면 같은 회사가 운영 중인 온프레미스 관계형 데이터베이스를 서비스 중단 없이 Amazon RDS로 옮기고 싶다면, AWS DMS를 사용해 지속적인 복제를 통해 다운타임을 최소화하는 것이 알맞은 전략입니다."
          }
        },
        {
          "taskId": "1.4",
          "title": "클라우드 경제성의 개념 이해",
          "concept": {
            "summary": "클라우드 경제성은 AWS 이점을 '비용' 관점에서 재해석한 것으로, 온프레미스 환경에서 발생하는 숨은 비용(하드웨어 조달, 전력, 냉각, 물리 보안, 유휴 자원 등)을 클라우드가 어떻게 제거하거나 변동비화하는지를 이해하는 것이 핵심입니다. 시험에서는 자본 비용(CapEx)과 운영 비용(OpEx)의 차이, 적정 규모 조정(Right-sizing)을 통한 낭비 제거, 자동화를 통한 인건비 절감, 그리고 AWS 라이선싱 모델(License Included vs BYOL)의 차이를 실제 상황에 적용하는 문제가 출제됩니다. 특히 '이미 보유한 상용 소프트웨어 라이선스를 재사용하고 싶다'는 조건이 나오면 BYOL을, '별도 라이선스 계약 없이 사용한 만큼만 지불하고 싶다'는 조건이 나오면 License Included를 선택해야 합니다. 총소유비용(TCO)을 낮추는 요소들을 종합적으로 이해하면, 여러 비용 절감 요인이 동시에 제시되는 복수 선택 문제에도 대응할 수 있습니다.",
            "keyPoints": [
              "자본 비용(CapEx): 하드웨어, 데이터센터 건설 등 선불로 지출하는 대규모 고정 비용 — 온프레미스 환경의 특징",
              "운영 비용(OpEx): 실제 사용한 만큼 지불하는 가변 비용 — AWS 클라우드의 특징으로, 초기 투자 부담을 낮춤",
              "온프레미스 관련 숨은 비용: 서버/네트워크 장비 구매, 전력 및 냉각, 데이터센터 공간 임대, 물리 보안, 하드웨어 교체 주기(리프레시) 관리, 유휴 상태의 초과 용량",
              "적정 규모 조정(Right-sizing): 실제 사용률 데이터를 분석해 과다 프로비저닝된 리소스를 필요한 만큼으로 조정함으로써 비용 낭비 제거",
              "자동화의 이점: 수동 운영 작업(패치, 배포, 모니터링 등)을 자동화해 인건비를 줄이고 인적 오류를 감소",
              "규모의 경제(Economies of Scale): AWS가 대규모 고객 수요를 통합해 하드웨어/인프라를 대량으로 확보함으로써 단가를 낮추고, 이를 요금 인하 형태로 고객에게 전달",
              "라이선스 포함(License Included): 소프트웨어 라이선스 비용이 AWS 사용 요금에 포함되어 별도 계약 없이 사용 가능 (예: RDS의 일부 상용 DB 엔진 옵션)",
              "BYOL(Bring Your Own License): 기존에 보유하고 있던 상용 소프트웨어 라이선스를 그대로 클라우드 환경으로 가져와 사용하는 방식으로, 기업이 이미 구매한 라이선스를 활용해 추가 비용을 절감",
              "총소유비용(TCO, Total Cost of Ownership): 하드웨어 구매 비용뿐 아니라 운영, 유지보수, 인력까지 포함한 전체 비용 개념으로, 온프레미스와 클라우드 비교 시 자주 사용"
            ],
            "example": "한 기업이 온프레미스에서 상용 데이터베이스 라이선스를 이미 다년 계약으로 보유하고 있다면, 클라우드로 이전할 때 이 라이선스를 그대로 가져와 사용하는 BYOL 모델을 선택해 추가 라이선스 비용을 피할 수 있습니다. 반대로 라이선스를 별도로 관리하고 싶지 않은 신생 기업이라면, 사용 요금에 라이선스 비용이 포함된 License Included 옵션을 선택하는 것이 더 간편합니다. 두 경우 모두 온프레미스에서 발생했을 하드웨어 구매, 전력, 물리 보안 같은 고정비용은 클라우드 사용료라는 가변 비용으로 대체됩니다."
          }
        }
      ]
    },
    {
      "id": "d2",
      "title": "보안 및 규정 준수",
      "weight": 30,
      "tasks": [
        {
          "taskId": "2.1",
          "title": "AWS 공동 책임 모델 이해",
          "concept": {
            "summary": "AWS 공동 책임 모델은 클라우드 환경의 보안을 AWS와 고객이 나누어 담당한다는 원칙입니다. AWS는 '클라우드 자체의 보안(Security of the Cloud)'을 책임지며, 여기에는 데이터센터의 물리적 보안, 하드웨어, 네트워크 인프라, 가상화 계층 등이 포함됩니다. 고객은 '클라우드 내부의 보안(Security in the Cloud)'을 책임지며, 여기에는 운영체제 패치, 방화벽 구성, 데이터 암호화, IAM 자격 증명 관리 등이 포함됩니다. 서비스의 관리 수준이 높아질수록(IaaS에서 관리형 서비스, 서버리스로 갈수록) 고객이 직접 관리해야 하는 범위는 줄어들고 AWS가 담당하는 범위가 늘어납니다. 예를 들어 EC2(IaaS)에서는 고객이 게스트 OS까지 관리해야 하지만, RDS(관리형)에서는 AWS가 DB 엔진 패치를 담당하고, Lambda(서버리스)에서는 AWS가 런타임과 서버 관리까지 담당합니다. 이 모델을 이해하는 것은 시험에서 '이 사고는 누구의 책임인가'를 묻는 문제를 풀기 위한 핵심입니다.",
            "keyPoints": [
              "클라우드의 보안(Security OF the Cloud) = AWS 책임: 물리적 데이터센터, 하드웨어, 네트워크, 가상화 인프라",
              "클라우드 내 보안(Security IN the Cloud) = 고객 책임: 데이터 암호화, IAM 설정, 게스트 OS 패치(비관리형), 보안 그룹 구성",
              "책임 분담은 서비스 유형에 따라 달라짐: EC2(IaaS) > RDS(관리형) > Lambda(서버리스) 순으로 고객 책임 범위가 줄어듦",
              "고객은 서비스 유형과 무관하게 항상 데이터 분류, 액세스 관리(IAM), 데이터 암호화 여부 결정에 책임을 짐",
              "S3 같은 관리형 스토리지 서비스도 버킷 정책·ACL 설정은 고객 책임",
              "AWS는 규정 준수 인증(ISO, SOC 등)을 통해 자사 책임 영역의 보안을 검증받고 이를 AWS Artifact로 제공",
              "공동 책임 모델은 고객이 보안을 소홀히 해도 된다는 뜻이 아니라 역할을 명확히 나누는 것",
              "잘못된 보안 그룹 설정이나 과도한 IAM 권한 부여로 인한 사고는 고객 책임 영역"
            ],
            "example": "예를 들어 한 스타트업이 EC2에 자체 애플리케이션을 배포한 경우, 게스트 OS의 보안 패치와 애플리케이션 코드의 취약점 관리는 고객의 책임입니다. 반면 같은 회사가 RDS를 사용한다면 데이터베이스 엔진 패치와 백업 인프라는 AWS가 담당하고, 고객은 데이터베이스 접근 제어와 데이터 자체의 보안만 신경 쓰면 됩니다."
          }
        },
        {
          "taskId": "2.2",
          "title": "AWS 클라우드 보안, 거버넌스 및 규정 준수 개념 이해",
          "concept": {
            "summary": "AWS 클라우드 보안과 거버넌스는 데이터 보호, 규정 준수 증빙, 위협 탐지의 세 축으로 이해할 수 있습니다. 암호화는 저장 데이터(at rest)와 전송 중 데이터(in transit) 두 가지로 나뉘며, AWS KMS로 암호화 키를 관리하고 TLS/SSL로 전송 구간을 보호합니다. 규정 준수 측면에서는 AWS Artifact에서 감사 보고서와 규정 준수 문서를 온디맨드로 내려받을 수 있으며, 지역·산업별로 GDPR, HIPAA, PCI DSS 등 다양한 규정 프레임워크를 지원합니다. 리소스 보호를 위해 Amazon Inspector(취약점 스캔), Amazon GuardDuty(위협 탐지), AWS Security Hub(보안 상태 통합 관리), AWS Shield(DDoS 방어) 등의 서비스를 활용합니다. 거버넌스와 감사를 위해서는 AWS CloudTrail(API 호출 기록), Amazon CloudWatch(모니터링·로그), AWS Config(리소스 구성 변경 추적), AWS Audit Manager(감사 증빙 자동 수집)를 함께 사용합니다.",
            "keyPoints": [
              "AWS Artifact: 규정 준수 보고서(SOC, ISO 등)와 계약 문서를 언제든 무료로 다운로드하는 셀프서비스 포털",
              "저장 시 암호화(at rest): S3, EBS, RDS 등에서 AWS KMS 키로 데이터 암호화",
              "전송 중 암호화(in transit): TLS/SSL을 이용해 네트워크 구간의 데이터 보호",
              "AWS CloudTrail: 계정 내 모든 API 호출과 사용자 활동을 기록하여 감사·포렌식에 활용",
              "Amazon CloudWatch: 리소스 성능 지표와 로그를 수집하고 알람을 설정하는 운영 모니터링 서비스",
              "AWS Config: 리소스 구성 변경 이력을 추적하고 규정 준수 규칙 위반 여부를 평가",
              "AWS Audit Manager: 규정 준수 감사에 필요한 증거를 지속적으로 자동 수집",
              "Amazon GuardDuty: 머신러닝 기반으로 비정상 API 호출, 악성 IP 통신 등 위협을 탐지",
              "AWS Security Hub: 여러 보안 서비스의 결과(findings)를 통합해 계정 전체의 보안 상태를 한 화면에서 확인",
              "AWS Shield: DDoS 공격 방어 서비스(Standard는 무료 기본 제공, Advanced는 유료 고급 방어)"
            ],
            "example": "예를 들어 금융 서비스 회사가 PCI DSS 규정 준수를 증명해야 할 때는 AWS Artifact에서 관련 보고서를 다운로드하고, CloudTrail 로그와 Config 규칙을 통해 내부 통제가 실제로 적용되고 있음을 입증할 수 있습니다. 동시에 GuardDuty로 비정상적인 로그인 시도를 탐지하고 Security Hub에서 전체 계정의 보안 findings를 한 화면에서 관리할 수 있습니다."
          }
        },
        {
          "taskId": "2.3",
          "title": "AWS 액세스 관리 기능 식별",
          "concept": {
            "summary": "AWS Identity and Access Management(IAM)는 누가(Who) 어떤 리소스에(What) 어떤 작업을(Action) 할 수 있는지를 제어하는 전역 서비스입니다. 루트 사용자는 계정의 모든 권한을 가진 최상위 계정이므로 일상 업무에는 사용하지 않고 MFA를 설정해 보호하는 것이 원칙이며, 결제 방식 변경이나 계정 해지 등 극히 제한된 작업에만 사용해야 합니다. 최소 권한 원칙(Principle of Least Privilege)에 따라 사용자에게는 업무 수행에 꼭 필요한 권한만 IAM 그룹과 정책으로 부여합니다. 여러 AWS 계정이나 사내 디렉터리(Active Directory 등)를 사용하는 조직은 IAM Identity Center를 통해 SSO(Single Sign-On)와 페더레이션을 구성해 중앙에서 접근을 관리할 수 있습니다. 자격 증명(비밀번호, API 키 등)은 코드에 하드코딩하지 않고 AWS Secrets Manager나 Systems Manager Parameter Store 같은 서비스에 안전하게 저장해야 합니다.",
            "keyPoints": [
              "IAM = 인증(Authentication)과 인가(Authorization)를 관리하는 전역 서비스(리전 독립적)",
              "루트 사용자: 계정 생성 시 이메일로 만들어지는 최고 권한 계정, 일상 업무 사용 금지, MFA 필수 적용",
              "루트 사용자 전용 작업 예: 계정 종료, 지원 플랜 변경, 일부 결제 정보 변경",
              "최소 권한 원칙: 사용자·그룹·역할에는 업무에 필요한 최소한의 권한만 부여",
              "IAM 그룹에 정책을 연결하고 사용자를 그룹에 추가하는 방식이 개별 사용자마다 정책을 연결하는 것보다 관리 효율적",
              "IAM Identity Center(구 AWS SSO): 여러 AWS 계정과 애플리케이션에 대한 SSO 및 페더레이션 접근 제공",
              "MFA(다중 인증): 비밀번호 외 추가 인증 수단으로 계정 탈취 위험 감소",
              "크로스 계정 역할(Cross-account role): 다른 계정의 사용자가 임시 자격 증명으로 리소스에 접근하도록 허용",
              "AWS Secrets Manager: 데이터베이스 자격 증명 등 비밀 정보를 저장하고 자동 교체(rotation)까지 지원",
              "AWS Systems Manager Parameter Store: 구성 데이터와 비밀 값을 계층형으로 저장(Secrets Manager보다 단순하고 자동 교체 기능은 제한적)"
            ],
            "example": "예를 들어 한 회사에서 신입 개발자에게는 특정 S3 버킷 읽기 권한만 부여된 IAM 그룹에 추가하고, 데이터베이스 비밀번호는 애플리케이션 코드에 직접 넣지 않고 Secrets Manager에 저장해 자동으로 교체되도록 구성합니다. 동시에 루트 사용자 계정은 MFA로 보호한 뒤 극히 제한된 상황에서만 사용합니다."
          }
        },
        {
          "taskId": "2.4",
          "title": "보안을 위한 구성 요소 및 리소스 파악",
          "concept": {
            "summary": "AWS는 다양한 관리형 보안 서비스와 정보 자원을 제공해 고객이 모든 보안 솔루션을 직접 구축하지 않아도 되도록 지원합니다. AWS WAF는 웹 애플리케이션 계층(SQL 삽입, XSS 등)을 보호하는 웹 방화벽이고, AWS Firewall Manager는 여러 계정과 리소스에 걸쳐 WAF 규칙, Shield 보호, 보안 그룹 등을 중앙에서 일괄 관리합니다. AWS Shield는 DDoS 공격으로부터 네트워크와 애플리케이션을 보호하며, Amazon GuardDuty는 계정과 워크로드 전반의 이상 징후를 지속적으로 모니터링합니다. AWS Trusted Advisor는 보안, 비용, 성능, 내결함성 등의 관점에서 계정 구성을 점검하고 개선 권고를 제공합니다. 이 외에도 AWS Marketplace를 통해 서드파티 보안 소프트웨어를 도입할 수 있고, AWS Knowledge Center와 AWS Security Blog에서 최신 보안 모범 사례와 문제 해결 정보를 얻을 수 있습니다.",
            "keyPoints": [
              "AWS WAF: 웹 애플리케이션 계층 방화벽, SQL 인젝션·XSS 등 웹 공격 차단 규칙 설정",
              "AWS Firewall Manager: 여러 계정·리소스에 걸쳐 WAF, Shield Advanced, 보안 그룹 정책을 중앙에서 일괄 적용",
              "AWS Shield Standard: 모든 고객에게 무료로 기본 제공되는 DDoS 방어",
              "AWS Shield Advanced: 유료 옵션으로 더 정교한 DDoS 방어와 24/7 대응팀(DRT) 지원",
              "Amazon GuardDuty: VPC 흐름 로그, DNS 로그, CloudTrail 이벤트 등을 분석해 위협 탐지",
              "AWS Trusted Advisor: 보안·비용 최적화·성능·내결함성·서비스 한도 등 관점에서 계정을 점검하고 권장 사항 제공",
              "AWS Marketplace: 타사 보안 벤더(방화벽, 안티바이러스 등)의 소프트웨어를 검색·구매·배포",
              "AWS Knowledge Center: 자주 묻는 기술 질문에 대한 공식 답변 모음",
              "AWS Security Blog: 최신 보안 기능, 모범 사례, 위협 동향에 대한 공식 게시물"
            ],
            "example": "예를 들어 전자상거래 웹사이트가 대규모 DDoS 공격과 SQL 인젝션 시도를 동시에 받는다면, AWS Shield로 네트워크 계층 공격을 막고 AWS WAF 규칙으로 애플리케이션 계층 공격을 차단할 수 있습니다. 여러 개의 AWS 계정을 운영하는 조직이라면 Firewall Manager로 모든 계정에 동일한 WAF 규칙을 한 번에 적용해 관리 부담을 줄일 수 있습니다."
          }
        }
      ]
    },
    {
      "id": "d3",
      "title": "클라우드 기술 및 서비스",
      "weight": 34,
      "tasks": [
        {
          "taskId": "3.1",
          "title": "AWS 클라우드에서 배포 및 운영 방법 정의",
          "concept": {
            "summary": "AWS 리소스는 웹 브라우저 기반의 Management Console, 명령줄 도구인 AWS CLI, 프로그래밍 언어별 라이브러리인 AWS SDK, 그리고 인프라를 코드로 정의하는 IaC(Infrastructure as Code) 등 다양한 방식으로 배포하고 운영할 수 있다. Management Console은 시각적이라 학습과 일회성 작업에는 편리하지만 수작업이 많아 실수와 비일관성이 발생하기 쉽다. 반면 CLI, SDK, IaC(대표적으로 AWS CloudFormation)는 자동화와 반복 실행에 적합하여 여러 환경에 동일한 인프라를 일관되게, 버전 관리하며 배포할 수 있게 해준다. 또한 배포 모델은 AWS만 사용하는 퍼블릭 클라우드형, 온프레미스와 클라우드를 함께 쓰는 하이브리드형, 자체 데이터센터만 사용하는 온프레미스형으로 구분된다.",
            "keyPoints": [
              "Management Console: 웹 기반 그래픽 인터페이스, 학습 및 일회성/수동 작업에 적합",
              "AWS CLI: 명령줄 도구로 스크립트 작성이 가능해 반복 작업 자동화에 유리",
              "AWS SDK: 프로그래밍 언어(자바, 파이썬 등)에서 AWS 서비스를 호출하는 라이브러리",
              "IaC(Infrastructure as Code, 예: AWS CloudFormation): 인프라를 템플릿 코드로 정의하여 일관되고 재현 가능하게 배포",
              "반복 가능한 자동화된 프로세스는 수동 일회성 작업보다 오류가 적고 감사(추적)가 쉬움",
              "배포 모델 - 퍼블릭 클라우드: 모든 인프라를 AWS에서만 운영",
              "배포 모델 - 하이브리드: 온프레미스와 AWS 클라우드를 함께 연결하여 운영(예: Direct Connect, Storage Gateway 활용)",
              "배포 모델 - 온프레미스: 자체 데이터센터에서만 인프라 운영(전통적 방식)",
              "동일한 결과를 얻어야 하는 작업이 반복된다면 콘솔 수작업보다 코드 기반 자동화를 우선 고려"
            ],
            "example": "여러 개발/스테이징/운영 환경에 동일한 VPC, EC2, 보안 그룹 구성을 배포해야 하는 회사가 있다면, 매번 콘솔에서 수동으로 클릭하는 대신 CloudFormation 템플릿을 작성해 각 환경에 스택으로 배포하면 설정 누락이나 환경 간 불일치를 방지할 수 있다."
          }
        },
        {
          "taskId": "3.2",
          "title": "AWS 글로벌 인프라 정의",
          "concept": {
            "summary": "AWS 글로벌 인프라는 리전(Region), 가용 영역(Availability Zone, AZ), 엣지 로케이션(Edge Location)의 계층 구조로 이루어진다. 리전은 지리적으로 분리된 영역이며 각 리전은 물리적으로 독립된 전원·냉각·네트워크를 가진 하나 이상의 가용 영역으로 구성된다. 엣지 로케이션은 CloudFront 같은 콘텐츠 전송 서비스가 사용자와 가까운 곳에서 콘텐츠를 캐싱해 지연 시간을 줄이기 위해 사용하는 시설로, 리전보다 훨씬 많은 수가 전 세계에 분산되어 있다. 애플리케이션을 둘 이상의 가용 영역에 배포하면 하나의 AZ에 장애가 발생해도 서비스 지속성을 확보할 수 있으며, 여러 리전을 함께 사용하면 재해 복구, 비즈니스 연속성, 지연 시간 개선, 데이터 주권(현지 법규 준수) 같은 목적을 달성할 수 있다.",
            "keyPoints": [
              "리전(Region): 지리적으로 서로 분리된 위치, 하나 이상의 가용 영역으로 구성",
              "가용 영역(AZ): 리전 내에서 물리적으로 분리된 하나 이상의 데이터센터 그룹, 독립적인 전원/냉각/네트워크 보유",
              "가용 영역들은 서로 단일 장애 지점을 공유하지 않도록 설계되어 있음(저지연 전용 네트워크로 연결)",
              "엣지 로케이션: CloudFront, Route 53 등에서 사용자에게 가까운 곳에서 콘텐츠를 제공하기 위한 위치, 리전 수보다 훨씬 많음",
              "고가용성 확보: 애플리케이션과 데이터를 여러 AZ에 분산 배치(Multi-AZ)",
              "다중 리전 사용 사례 - 재해 복구(DR) 및 비즈니스 연속성: 한 리전 장애 시 다른 리전으로 페일오버",
              "다중 리전 사용 사례 - 지연 시간 개선: 최종 사용자와 지리적으로 가까운 리전 선택",
              "다중 리전 사용 사례 - 데이터 주권: 특정 국가/지역 법규에 따라 데이터를 해당 지역 내에 보관"
            ],
            "example": "글로벌 서비스를 운영하는 회사가 서울 리전에서 주 서비스를 운영하다가 자연재해로 서울 리전 전체가 영향을 받는 경우를 대비해 도쿄 리전에 재해 복구 환경을 구성해 두면 비즈니스 연속성을 유지할 수 있다."
          }
        },
        {
          "taskId": "3.3",
          "title": "AWS 컴퓨팅 서비스 식별",
          "concept": {
            "summary": "Amazon EC2는 다양한 워크로드에 맞춰 범용, 컴퓨팅 최적화, 메모리 최적화, 스토리지 최적화, 가속 컴퓨팅 등 여러 인스턴스 패밀리를 제공하는 가상 서버 서비스이다. 컨테이너 워크로드는 Amazon ECS(AWS 자체 오케스트레이션)나 Amazon EKS(관리형 Kubernetes)로 운영할 수 있고, 이 컨테이너들을 서버 관리 없이 실행하고 싶다면 AWS Fargate를 사용한다. 완전한 서버리스 컴퓨팅이 필요한 짧고 이벤트 기반의 작업에는 AWS Lambda가 적합하며, 실행된 시간만큼만 과금된다. Auto Scaling은 트래픽 변화에 따라 리소스 수를 자동으로 늘리거나 줄이는 탄력성(Elasticity)을 구현하며, Elastic Load Balancing(ELB)은 여러 인스턴스에 트래픽을 분산시켜 가용성과 내결함성을 높인다.",
            "keyPoints": [
              "EC2 인스턴스 패밀리: 범용(M), 컴퓨팅 최적화(C), 메모리 최적화(R/X), 스토리지 최적화(I/D), 가속 컴퓨팅(P/G) 등",
              "컨테이너: 애플리케이션과 종속성을 패키징하여 이식성과 환경 일관성을 확보",
              "Amazon ECS: AWS 자체 컨테이너 오케스트레이션 서비스",
              "Amazon EKS: 관리형 Kubernetes 서비스",
              "AWS Fargate: ECS/EKS용 서버리스 컴퓨팅 엔진, 서버(호스트) 관리 불필요",
              "AWS Lambda: 완전 서버리스 함수 실행 서비스, 이벤트 기반 트리거, 실행 시간 단위 과금",
              "Auto Scaling: 수요에 따라 인스턴스 수를 자동으로 증감시켜 탄력성(Elasticity) 구현",
              "Elastic Load Balancing(ELB): 여러 대상에 트래픽을 분산해 가용성과 내결함성 향상",
              "EC2 vs Lambda: EC2는 상시 운영 서버를 세밀하게 제어, Lambda는 관리 부담 없이 이벤트에 반응하는 단기 작업에 적합"
            ],
            "example": "트래픽이 시간대별로 크게 변하는 쇼핑몰 웹사이트는 Application Load Balancer 뒤에 Auto Scaling 그룹을 구성해 트래픽이 몰릴 때 인스턴스를 자동 증가시키고 한산할 때는 줄여 비용을 절감할 수 있다."
          }
        },
        {
          "taskId": "3.4",
          "title": "AWS 데이터베이스 서비스 식별",
          "concept": {
            "summary": "데이터베이스는 EC2 인스턴스에 직접 설치해 운영할 수도 있지만, 이 경우 패치, 백업, 복제, 장애 조치를 모두 사용자가 관리해야 한다. 반면 Amazon RDS 같은 관리형 데이터베이스 서비스는 이러한 운영 부담을 AWS가 대신 처리해준다. 관계형 데이터가 필요하면 RDS(MySQL, PostgreSQL, SQL Server 등) 또는 AWS가 자체 개발한 고성능 엔진인 Aurora를 사용하고, 유연한 스키마와 초대규모 확장성이 필요한 경우에는 완전관리형 NoSQL인 DynamoDB를 사용한다. 자주 조회되는 데이터를 메모리에 캐싱해 응답 속도를 높이려면 ElastiCache(Redis/Memcached)를 사용하며, 온프레미스 DB를 AWS로 이전할 때는 AWS DMS(데이터 이전)와 AWS SCT(이기종 스키마 변환)를 함께 활용한다.",
            "keyPoints": [
              "EC2에 직접 DB 설치: 완전한 제어권을 가지지만 패치/백업/고가용성을 직접 관리해야 함",
              "관리형 DB 서비스(RDS 등): AWS가 패치, 백업, 복제, 장애 조치 등을 관리해 운영 부담 감소",
              "Amazon RDS: 관계형 데이터베이스(MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora 등 지원)",
              "Amazon Aurora: AWS가 자체 개발한 MySQL/PostgreSQL 호환 고성능·고가용성 관계형 DB",
              "Amazon DynamoDB: 완전관리형 NoSQL(키-값/문서), 대규모 확장성과 낮은 지연 시간 제공",
              "Amazon ElastiCache: 인메모리 캐싱(Redis, Memcached)으로 DB 부하 감소 및 응답 속도 향상",
              "AWS DMS(Database Migration Service): 온프레미스/타 클라우드 DB를 최소 다운타임으로 AWS로 마이그레이션",
              "AWS SCT(Schema Conversion Tool): 이기종 DB 간(예: Oracle → Aurora PostgreSQL) 스키마 변환",
              "선택 기준: 정형 스키마와 트랜잭션 무결성이 중요하면 RDS/Aurora, 유연한 스키마와 초대규모 처리량이 중요하면 DynamoDB"
            ],
            "example": "온프레미스 Oracle 데이터베이스를 Aurora PostgreSQL로 전환하려는 회사는 먼저 SCT로 스키마 구조를 변환한 뒤 DMS를 이용해 실제 데이터를 최소한의 서비스 중단으로 마이그레이션할 수 있다."
          }
        },
        {
          "taskId": "3.5",
          "title": "AWS 네트워크 서비스 파악",
          "concept": {
            "summary": "Amazon VPC는 사용자가 정의하는 논리적으로 격리된 가상 네트워크로, 서브넷(퍼블릭/프라이빗)과 인터넷 게이트웨이, NAT 게이트웨이, 라우팅 테이블 같은 구성 요소로 이루어진다. 보안은 두 계층으로 구성되는데, 보안 그룹은 인스턴스(ENI) 수준에서 동작하는 상태 저장(stateful) 방화벽으로 허용 규칙만 설정할 수 있고, 네트워크 ACL(NACL)은 서브넷 수준에서 동작하는 상태 비저장(stateless) 방화벽으로 허용과 거부 규칙을 모두 설정할 수 있다. Amazon Route 53은 도메인 등록과 DNS 라우팅, 상태 확인(헬스체크)을 제공하는 관리형 DNS 서비스이다. 온프레미스와 AWS를 연결할 때는 인터넷을 통한 암호화 연결인 Site-to-Site VPN이나, 전용선을 통한 안정적이고 낮은 지연의 연결인 AWS Direct Connect를 사용한다.",
            "keyPoints": [
              "VPC: 사용자 계정 전용의 논리적으로 격리된 가상 네트워크",
              "서브넷: VPC를 더 작은 네트워크로 분할, 퍼블릭 서브넷과 프라이빗 서브넷으로 구분",
              "인터넷 게이트웨이(IGW): VPC와 인터넷 간의 통신을 가능하게 함",
              "NAT 게이트웨이: 프라이빗 서브넷 리소스가 아웃바운드로만 인터넷에 접근하도록 지원",
              "보안 그룹: 인스턴스 수준, 상태 저장(stateful), 허용 규칙만 존재",
              "네트워크 ACL(NACL): 서브넷 수준, 상태 비저장(stateless), 허용/거부 규칙 모두 존재",
              "Amazon Route 53: 관리형 DNS 서비스로 도메인 등록, 트래픽 라우팅 정책, 상태 확인 제공",
              "AWS Site-to-Site VPN: 인터넷을 통한 암호화된 연결로 빠르게 구축 가능",
              "AWS Direct Connect: 전용 물리 회선을 통한 연결로 안정적인 대역폭과 낮은 지연 시간 제공"
            ],
            "example": "본사와 AWS VPC 간에 즉시 안전한 연결이 필요하면 Site-to-Site VPN을 우선 구성하고, 이후 트래픽이 많아지고 지연 시간과 대역폭 안정성이 중요해지면 Direct Connect로 전환하는 방식이 흔히 사용된다."
          }
        },
        {
          "taskId": "3.6",
          "title": "AWS 스토리지 서비스 확인",
          "concept": {
            "summary": "Amazon S3는 사실상 무제한으로 확장 가능한 객체 스토리지로 백업, 정적 웹 호스팅, 데이터 레이크 등에 사용되며, 접근 빈도와 검색 속도 요구에 따라 Standard, Intelligent-Tiering, Standard-IA/One Zone-IA, Glacier 계열(즉시/유연/딥 아카이브 검색) 등 다양한 스토리지 클래스를 제공한다. Amazon EBS는 EC2에 네트워크로 연결하는 블록 스토리지로 인스턴스와 독립적으로 데이터를 유지하는 반면, 인스턴스 스토어는 호스트에 물리적으로 연결된 임시 스토리지라 인스턴스가 중지·종료되면 데이터가 사라진다. 파일 서비스로는 여러 Linux 인스턴스가 동시에 마운트할 수 있는 관리형 NFS인 Amazon EFS와, Windows/고성능 컴퓨팅에 특화된 Amazon FSx가 있다. AWS Storage Gateway는 온프레미스와 AWS 스토리지를 연결하는 하이브리드 서비스이고, S3 수명 주기 정책은 오래된 객체를 자동으로 저비용 클래스로 이동하거나 삭제하며, AWS Backup은 여러 AWS 서비스의 백업을 중앙에서 관리한다.",
            "keyPoints": [
              "Amazon S3(객체 스토리지): 버킷에 객체를 저장, 사실상 무제한 확장, 백업/정적 웹사이트/데이터 레이크 등에 활용",
              "S3 스토리지 클래스: Standard(자주 액세스), Intelligent-Tiering(자동 계층 이동), Standard-IA/One Zone-IA(저빈도 액세스, 저비용), Glacier 계열(장기 아카이브, 검색 시간 상이)",
              "Amazon EBS(블록 스토리지): 네트워크 기반 볼륨, EC2와 독립적으로 데이터 유지(영구 저장)",
              "인스턴스 스토어: EC2 호스트에 물리적으로 연결된 임시 블록 스토리지, 중지/종료 시 데이터 손실",
              "Amazon EFS: 관리형 NFS 파일 시스템, 여러 EC2 인스턴스가 동시에 마운트 가능(주로 Linux)",
              "Amazon FSx: Windows File Server용, Lustre(고성능 컴퓨팅)용 등 특정 워크로드에 특화된 관리형 파일 시스템",
              "AWS Storage Gateway: 온프레미스와 AWS 스토리지를 연결하는 하이브리드 서비스(파일/볼륨/테이프 게이트웨이 유형 포함)",
              "S3 수명 주기 정책: 일정 기간 경과 후 객체를 다른 스토리지 클래스로 자동 이동하거나 삭제",
              "AWS Backup: EBS, RDS, EFS 등 여러 AWS 서비스의 백업을 중앙에서 관리하는 완전관리형 서비스"
            ],
            "example": "자주 조회되지 않는 로그 파일을 S3 Standard에 30일 보관한 뒤 자동으로 Glacier로 이동시키는 수명 주기 규칙을 설정하면 저장 비용을 크게 절감할 수 있다."
          }
        },
        {
          "taskId": "3.7",
          "title": "AI/ML 서비스와 분석 서비스 파악",
          "concept": {
            "summary": "AWS는 머신러닝 모델을 직접 구축·학습·배포하는 Amazon SageMaker부터, 별도 ML 지식 없이 바로 사용할 수 있는 사전 학습된 AI 서비스까지 다양한 옵션을 제공한다. 이미지/영상 분석은 Rekognition, 문서에서 텍스트 추출은 Textract, 텍스트 분석(감정/엔티티)은 Comprehend, 음성-텍스트 상호 변환은 Transcribe와 Polly, 번역은 Translate, 대화형 챗봇은 Lex, 지능형 검색은 Kendra가 담당하며, Amazon Q는 생성형 AI 기반 어시스턴트이다. 분석 영역에서는 S3 데이터를 서버리스 SQL로 조회하는 Athena, 실시간 스트리밍 데이터를 수집하는 Kinesis, 서버리스 ETL과 데이터 카탈로그를 제공하는 Glue, BI 시각화 도구인 QuickSight, 빅데이터 프레임워크(Hadoop/Spark) 클러스터인 EMR, 대규모 데이터 웨어하우스인 Redshift, 로그 검색/분석에 쓰이는 OpenSearch Service가 각기 다른 역할을 수행한다.",
            "keyPoints": [
              "Amazon SageMaker: 머신러닝 모델 구축·학습·배포를 위한 완전관리형 플랫폼",
              "Amazon Rekognition: 이미지/동영상에서 객체, 장면, 얼굴을 인식하는 컴퓨터 비전 서비스",
              "Amazon Polly(TTS, 텍스트→음성)와 Amazon Transcribe(STT, 음성→텍스트)는 서로 반대 방향으로 동작",
              "Amazon Comprehend: 텍스트에서 감정, 키워드, 엔티티를 추출하는 자연어 처리(NLP) 서비스",
              "Amazon Textract: 문서 이미지/PDF에서 텍스트와 표·양식 데이터를 자동 추출",
              "Amazon Translate: 언어 간 번역 수행",
              "Amazon Lex(대화형 챗봇 구축)와 Amazon Kendra(지능형 엔터프라이즈 검색)는 서로 다른 용도",
              "Amazon Q: 생성형 AI 기반 어시스턴트로 업무 생산성 및 개발자 지원",
              "Amazon Athena(S3 데이터 서버리스 SQL 조회), Amazon Redshift(대규모 데이터 웨어하우스), Amazon EMR(Hadoop/Spark 빅데이터 클러스터)",
              "Amazon Kinesis(실시간 스트리밍 수집), AWS Glue(서버리스 ETL/카탈로그), Amazon QuickSight(BI 시각화), Amazon OpenSearch Service(로그 검색/분석)"
            ],
            "example": "콜센터 통화 녹음 파일을 Amazon Transcribe로 텍스트로 변환한 뒤 Amazon Comprehend로 감정 분석을 수행하면, 상담원 교육 및 고객 만족도 파악에 활용할 수 있는 데이터 파이프라인을 구축할 수 있다."
          }
        },
        {
          "taskId": "3.8",
          "title": "다른 AWS 서비스 범주의 서비스 파악",
          "concept": {
            "summary": "애플리케이션 통합 범주에서 Amazon SQS는 메시지를 대기열에 저장해 구성 요소 간 비동기 디커플링을 지원하고, Amazon SNS는 다수의 구독자에게 알림을 동시에 전달하는 pub/sub 서비스이며, Amazon EventBridge는 AWS 서비스와 SaaS 이벤트를 라우팅하는 서버리스 이벤트 버스, AWS Step Functions는 여러 서비스를 순서대로 조율하는 워크플로우 서비스이다. 비즈니스 애플리케이션으로는 컨택센터 서비스인 Amazon Connect와 이메일 서비스인 Amazon SES가 있고, AWS Support는 등급별 기술 지원을 제공한다. 개발자 도구에는 빌드를 수행하는 CodeBuild, CI/CD 파이프라인을 자동화하는 CodePipeline, 분산 애플리케이션을 추적하는 X-Ray가 있다. 최종 사용자 컴퓨팅에서는 앱을 스트리밍하는 AppStream 2.0과 전체 가상 데스크톱을 제공하는 WorkSpaces가 구분되며, 프런트엔드/모바일 개발에는 Amplify와 AppSync가, IoT 영역에는 IoT Core가 사용된다.",
            "keyPoints": [
              "Amazon SQS: 완전관리형 메시지 대기열, 비동기 디커플링(폴링 기반, point-to-point)",
              "Amazon SNS: pub/sub 알림 서비스, 여러 구독자에게 동시 전송(팬아웃)",
              "Amazon EventBridge: 서버리스 이벤트 버스, AWS 서비스 및 SaaS 이벤트 라우팅",
              "AWS Step Functions: 여러 AWS 서비스를 조율하는 서버리스 워크플로우(상태 머신)",
              "Amazon Connect(클라우드 컨택센터/콜센터)와 Amazon SES(이메일 발송/수신)는 비즈니스 애플리케이션 범주",
              "AWS Support: Basic/Developer/Business/Enterprise 등급별 기술 지원 플랜 제공",
              "개발자 도구: AWS CodeBuild(빌드/테스트), AWS CodePipeline(CI/CD 자동화), AWS X-Ray(분산 추적 및 디버깅)",
              "최종 사용자 컴퓨팅: Amazon AppStream 2.0(앱 단위 스트리밍) vs Amazon WorkSpaces(전체 가상 데스크톱, VDI)",
              "AWS Amplify(풀스택 웹/모바일 개발), AWS AppSync(관리형 GraphQL API), AWS IoT Core(IoT 디바이스 연결/메시징)"
            ],
            "example": "주문 처리 시스템에서 주문 이벤트를 SQS 큐에 넣어 재고 서비스와 결제 서비스가 각자의 처리 속도로 소비하게 하면 시스템 간 결합도를 낮출 수 있고, 반대로 신규 프로모션을 이메일·SMS·사내 시스템에 동시에 알려야 한다면 SNS의 팬아웃 방식이 더 적합하다."
          }
        }
      ]
    },
    {
      "id": "d4",
      "title": "결제, 요금 및 지원",
      "weight": 12,
      "tasks": [
        {
          "taskId": "4.1",
          "title": "AWS 가격 모델 비교",
          "concept": {
            "summary": "AWS는 워크로드의 특성(예측 가능성, 중단 허용 여부, 실행 기간)에 따라 여러 컴퓨팅 구매 옵션을 제공하여 비용을 최적화할 수 있게 합니다. On-Demand는 약정 없이 사용한 만큼 지불하는 기본 옵션이며, Reserved Instances와 Savings Plans는 1~3년 약정으로 큰 폭의 할인을 제공하고, Spot Instances는 유휴 용량을 매우 저렴하게 쓰되 언제든 회수될 수 있습니다. 전용 호스트/인스턴스와 용량 예약은 라이선스 규정 준수나 특정 시점의 용량 확보 같은 특수한 요구에 대응합니다. 스토리지 역시 접근 빈도에 따라 여러 티어로 나뉘어 비용을 절감할 수 있으며, 데이터 전송은 방향(수신/발신)과 경로(같은 AZ, 같은 리전 내 AZ 간, 리전 간)에 따라 과금 여부와 금액이 달라집니다.",
            "keyPoints": [
              "On-Demand: 약정 없이 초/시간 단위로 과금, 예측 불가능하거나 짧고 유연한 워크로드에 적합",
              "Reserved Instances(RI): 1년 또는 3년 약정으로 최대 약 72% 할인, Standard RI(더 높은 할인, 변경 제한)와 Convertible RI(할인은 낮지만 인스턴스 패밀리/OS 변경 가능)로 구분",
              "Spot Instances: AWS의 유휴 용량을 최대 90%까지 할인된 가격에 사용, 2분 전 중단 통지 후 회수될 수 있어 중단에 강한(fault-tolerant) 배치 작업, 렌더링 등에 적합",
              "Savings Plans: 1~3년간 시간당 사용 금액(달러)을 약정, Compute Savings Plans(인스턴스 패밀리·리전·OS·테넌시 무관, EC2/Fargate/Lambda에 적용 가능해 유연성 높음)와 EC2 Instance Savings Plans(특정 인스턴스 패밀리에 한정되지만 할인율 더 높음)로 구분",
              "전용 호스트(Dedicated Host): 물리 서버를 통째로 할당받아 소켓/코어/호스트 ID 단위까지 제어 가능, 기존 서버 바인딩 라이선스(BYOL)나 규정 준수 요구에 적합",
              "전용 인스턴스(Dedicated Instance): 하드웨어는 나만 사용하지만 호스트 배치는 AWS가 관리, Dedicated Host보다 세밀한 제어는 불가",
              "용량 예약(On-Demand Capacity Reservation): 특정 AZ에 원하는 기간만큼 용량을 확보, 장기 약정 없이 On-Demand 요금을 그대로 지불하며 RI/Savings Plans와 결합해 할인 적용 가능",
              "Organizations에서 구성원 계정이 구매한 RI/Savings Plans 혜택은 결제 공유 설정에 따라 조직 내 다른 계정과 공유되어 사용률을 높일 수 있음",
              "데이터 전송 비용: 인터넷에서 AWS로 들어오는(inbound) 데이터는 대부분 무료, AWS에서 인터넷으로 나가는(outbound) 데이터는 과금, 리전 간 전송은 항상 과금, 같은 리전 내에서도 AZ 간 전송은 소액 과금(같은 AZ 내 프라이빗 IP 통신은 대개 무료)",
              "스토리지도 접근 빈도에 따라 S3 Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier 계열 등으로 나뉘며 자주 접근하지 않는 데이터를 저렴한 티어로 옮기면 비용 절감 가능"
            ],
            "example": "예를 들어 3년 이상 안정적으로 운영될 데이터베이스 서버에는 Reserved Instance나 Savings Plans로 On-Demand 대비 큰 폭의 비용을 절감할 수 있지만, 언제 얼마나 필요할지 모르는 신규 서비스의 부하 테스트에는 On-Demand가, 중단되어도 다시 실행하면 되는 대규모 이미지 변환 배치 작업에는 Spot Instances가 더 경제적입니다."
          }
        },
        {
          "taskId": "4.2",
          "title": "결제, 예산 및 비용 관리를 위한 리소스 이해",
          "concept": {
            "summary": "AWS는 비용을 예측, 추적, 통제하기 위한 다양한 도구를 제공합니다. 배포 전 예상 비용을 추정할 때는 AWS Pricing Calculator를, 이미 발생한 사용량과 비용을 시각화하고 향후 추세를 분석할 때는 Cost Explorer를 사용합니다. 예산 한도를 설정하고 초과 시 알림을 받으려면 AWS Budgets이 적합하며, 여러 계정을 하나로 묶어 단일 청구서와 볼륨 할인을 받으려면 AWS Organizations의 통합 결제(Consolidated Billing) 기능을 사용합니다. 비용 할당 태그를 리소스에 부여하면 부서, 프로젝트, 환경별로 비용을 세분화할 수 있고, 이 태그 정보는 Cost and Usage Report(CUR)에 반영되어 상세한 비용 분석의 기초가 됩니다.",
            "keyPoints": [
              "AWS Pricing Calculator: 아키텍처를 배포하기 전에 서비스 조합에 대한 예상 비용 견적을 만들어보는 도구, 실제 사용 데이터는 반영하지 않음",
              "AWS Cost Explorer: 과거 및 현재 비용/사용량 데이터를 그래프로 시각화하고 최대 12개월까지 향후 비용을 예측하는 도구",
              "AWS Budgets: 사용자가 설정한 예산(비용, 사용량, 예약 사용률 등) 기준을 초과하거나 초과할 것으로 예상될 때 알림을 발송",
              "AWS Cost and Usage Report(CUR): AWS 사용량과 비용에 대해 가장 세부적이고 포괄적인 데이터를 제공하는 보고서, 비용 할당 태그별 세분화된 분석에 사용",
              "비용 할당 태그: AWS 생성 태그(aws: 접두사, 자동 적용)와 사용자 정의 태그(사용자가 직접 지정 후 결제 콘솔에서 활성화해야 리포트에 반영)로 구분",
              "AWS Organizations 통합 결제(Consolidated Billing): 여러 계정을 하나의 관리 계정 아래 묶어 단일 청구서를 받고, 사용량을 합산해 볼륨 할인 구간에 더 빨리 도달하며, RI/Savings Plans 혜택을 계정 간 공유 가능",
              "결제 관련 문의(청구 오류, 환불, 결제 수단 변경 등)는 AWS Support의 계정 및 결제 지원(Account and Billing Support)을 통해 모든 요금제(무료 Basic 포함)에서 이용 가능",
              "서비스별 요금 정보는 각 서비스의 공식 요금 페이지에서 리전별로 확인 가능하며 요금 체계는 서비스마다 상이(예: 시간당, 요청당, GB당)",
              "예산과 비용 탐색은 상호 보완적: Budgets은 사전 알림/통제, Cost Explorer는 사후 분석 및 예측에 초점"
            ],
            "example": "신규 프로젝트를 시작하기 전 Pricing Calculator로 월 예상 비용을 산출하고, 배포 후에는 프로젝트 이름으로 비용 할당 태그를 부여한 뒤 Cost Explorer로 실제 지출 추이를 확인하며, 월 예산을 초과할 것으로 예측되면 AWS Budgets이 담당자에게 이메일 알림을 보내도록 구성할 수 있습니다."
          }
        },
        {
          "taskId": "4.3",
          "title": "AWS 기술 리소스 및 AWS 지원 옵션 파악",
          "concept": {
            "summary": "AWS는 공식 웹사이트의 백서, 블로그, 아키텍처 모범 사례 가이드 같은 무료 기술 리소스와, AWS re:Post·Knowledge Center 같은 커뮤니티/지식 기반 리소스를 제공합니다. 유료 지원이 필요한 경우 Basic, Developer, Business, Enterprise On-Ramp, Enterprise 5가지 AWS Support 플랜 중에서 조직의 규모와 필요한 응답 속도에 맞는 플랜을 선택할 수 있습니다. Trusted Advisor는 비용, 보안, 성능, 내결함성, 서비스 한도 관점에서 계정을 자동 점검해 권장 사항을 제공하고, AWS Health Dashboard/API는 서비스 상태 및 계정에 영향을 주는 이벤트를 알려줍니다. 이 외에도 부정 사용이나 약관 위반을 다루는 Trust & Safety 팀, 그리고 파트너 네트워크(APN)를 통한 ISV·시스템 통합 사업자·Marketplace 솔루션, Professional Services와 Solutions Architect의 기술 자문 지원이 있습니다.",
            "keyPoints": [
              "Basic 지원: 모든 AWS 계정에 무료로 포함, 계정/결제 지원과 제한된 Trusted Advisor 핵심 점검, Personal Health Dashboard 접근은 가능하나 기술 지원 케이스는 불가",
              "Developer 지원: 유료, 업무 시간 중 이메일 기반 기술 문의, 일반 안내 응답 목표 24시간 이내, 개발/테스트 단계의 소규모 팀에 적합",
              "Business 지원: 24/7 전화/채팅/이메일 기술 지원, 프로덕션 시스템 다운 시 1시간 이내 응답, 전체 Trusted Advisor 점검, Health API 접근, 프로덕션 워크로드 운영 조직에 적합",
              "Enterprise On-Ramp: Business의 혜택에 더해 담당 TAM 풀(Technical Account Manager pool)과 컨시어지 지원팀 제공, 비즈니스 크리티컬 시스템 다운 시 30분 이내 응답",
              "Enterprise 지원: 전담 TAM(Technical Account Manager) 배정, 비즈니스 크리티컬 시스템 다운 시 15분 이내 응답, Well-Architected 검토 등 대규모 미션 크리티컬 조직을 위한 최상위 플랜",
              "AWS Trusted Advisor: 비용 최적화, 보안, 내결함성, 성능, 서비스 한도 5개 범주에서 계정을 점검해 개선 권장 사항 제시, 무료 계정은 핵심 점검 일부만, Business/Enterprise 이상은 전체 점검 제공",
              "AWS Health Dashboard/Health API: 서비스 전반의 상태(Service Health Dashboard)와 내 계정 리소스에 영향을 미치는 이벤트(Personal Health Dashboard)를 구분해 제공, Health API는 Business 이상 플랜에서 프로그래밍 방식 접근 가능",
              "Trust & Safety 팀: AWS 리소스의 부정 사용, 피싱, 저작권 침해 등 약관 위반 신고 및 조사를 담당(일반 기술 지원과는 별도 채널)",
              "AWS 파트너 네트워크(APN): AWS Marketplace(소프트웨어 구매/배포), ISV 파트너, 시스템 통합 사업자(SI) 등으로 구성되어 검증된 솔루션과 전문 구현 서비스를 제공",
              "Professional Services 및 Solutions Architect: 아키텍처 설계, 마이그레이션, 모범 사례 적용 등 전문적인 기술 자문을 제공하며 Support 플랜의 케이스 기반 대응과는 별개의 컨설팅 성격 지원"
            ],
            "example": "글로벌 이커머스 기업이 24/7 프로덕션 워크로드를 운영하며 장애 발생 시 15분 이내 응답과 전담 TAM의 아키텍처 조언을 원한다면 Enterprise 지원 플랜이 적합하고, 개인 개발자가 처음으로 유료 기술 지원을 받아보고 싶다면 Developer 플랜으로 충분합니다."
          }
        }
      ]
    }
  ],
  "services": [
    {
      "name": "Amazon Athena",
      "category": "분석",
      "oneLiner": "S3에 저장된 데이터를 서버 프로비저닝 없이 표준 SQL로 바로 조회할 수 있는 대화형 쿼리 서비스로, 실행한 쿼리에 대해서만 비용을 지불한다."
    },
    {
      "name": "Amazon EMR",
      "category": "분석",
      "oneLiner": "Hadoop, Spark 등 빅데이터 프레임워크를 클러스터 형태로 손쉽게 구축·운영할 수 있게 해주는 관리형 빅데이터 처리 서비스이다."
    },
    {
      "name": "AWS Glue",
      "category": "분석",
      "oneLiner": "여러 데이터 소스를 탐색·변환·이동시키는 서버리스 ETL(추출·변환·적재) 서비스로, 데이터 카탈로그를 통해 메타데이터를 자동으로 관리한다."
    },
    {
      "name": "Amazon Kinesis",
      "category": "분석",
      "oneLiner": "실시간으로 대량의 스트리밍 데이터(로그, 클릭스트림, IoT 데이터 등)를 수집, 처리, 분석할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon OpenSearch Service",
      "category": "분석",
      "oneLiner": "오픈소스 OpenSearch(Elasticsearch 기반)를 관리형으로 제공하는 서비스로, 로그 분석과 전문(full-text) 검색, 실시간 애플리케이션 모니터링에 주로 사용된다."
    },
    {
      "name": "Amazon QuickSight",
      "category": "분석",
      "oneLiner": "서버리스 클라우드 기반 비즈니스 인텔리전스(BI) 서비스로, 대화형 대시보드와 시각화를 만들어 데이터 기반 의사결정을 지원한다."
    },
    {
      "name": "Amazon Redshift",
      "category": "분석",
      "oneLiner": "페타바이트 규모의 데이터를 다룰 수 있는 완전관리형 클라우드 데이터 웨어하우스 서비스로, 대규모 데이터에 대한 복잡한 분석 쿼리에 최적화되어 있다."
    },
    {
      "name": "Amazon EventBridge",
      "category": "애플리케이션 통합",
      "oneLiner": "AWS 서비스, SaaS 애플리케이션, 자체 애플리케이션에서 발생하는 이벤트를 규칙에 따라 다른 대상으로 라우팅하는 서버리스 이벤트 버스 서비스이다."
    },
    {
      "name": "Amazon SNS",
      "category": "애플리케이션 통합",
      "oneLiner": "발행/구독(pub/sub) 모델의 완전관리형 메시징 서비스로, 하나의 메시지를 이메일, SMS, Lambda, SQS 등 다수의 구독자에게 동시에 전달(팬아웃)한다."
    },
    {
      "name": "Amazon SQS",
      "category": "애플리케이션 통합",
      "oneLiner": "완전관리형 메시지 대기열 서비스로, 애플리케이션 구성 요소 간 메시지를 안전하게 저장·전달하여 시스템 간 결합도를 낮추고 비동기 처리를 가능하게 한다."
    },
    {
      "name": "AWS Step Functions",
      "category": "애플리케이션 통합",
      "oneLiner": "여러 AWS 서비스와 Lambda 함수를 시각적 워크플로(상태 머신)로 오케스트레이션하는 서버리스 서비스로, 복잡한 애플리케이션 로직의 순서와 오류 처리를 관리한다."
    },
    {
      "name": "Amazon Connect",
      "category": "비즈니스 애플리케이션",
      "oneLiner": "클라우드 기반의 완전관리형 컨택 센터(고객센터) 서비스로, 별도 인프라 구축 없이 음성/채팅 상담 센터를 빠르게 구성할 수 있다."
    },
    {
      "name": "Amazon SES",
      "category": "비즈니스 애플리케이션",
      "oneLiner": "대량의 마케팅, 알림, 트랜잭션 이메일을 안정적이고 확장 가능하게 발송·수신할 수 있는 이메일 서비스이다."
    },
    {
      "name": "AWS Budgets",
      "category": "클라우드 재무 관리",
      "oneLiner": "예상 비용, 사용량, 예약 인스턴스 활용률 등에 대한 예산을 설정하고 임계값 초과 시 알림을 받을 수 있는 비용 관리 서비스이다."
    },
    {
      "name": "AWS Cost and Usage Reports",
      "category": "클라우드 재무 관리",
      "oneLiner": "AWS 사용량과 비용에 대한 가장 상세하고 포괄적인 데이터를 제공하는 보고서로, S3에 저장되어 Athena나 QuickSight 등으로 세밀하게 분석할 수 있다."
    },
    {
      "name": "AWS Cost Explorer",
      "category": "클라우드 재무 관리",
      "oneLiner": "AWS 비용과 사용량 패턴을 시각화하고 분석하며 향후 지출을 예측할 수 있는 도구이다."
    },
    {
      "name": "AWS Marketplace",
      "category": "클라우드 재무 관리",
      "oneLiner": "AWS에서 실행되도록 사전 구성된 타사 소프트웨어, 데이터, 서비스를 검색하고 구매·배포할 수 있는 디지털 카탈로그로, 청구는 AWS 계정으로 통합된다."
    },
    {
      "name": "AWS Batch",
      "category": "컴퓨팅",
      "oneLiner": "규모에 관계없이 배치 컴퓨팅 작업을 효율적으로 실행할 수 있도록 컴퓨팅 리소스(인스턴스 유형과 수량)를 자동으로 프로비저닝하고 관리해주는 서비스이다."
    },
    {
      "name": "Amazon EC2",
      "category": "컴퓨팅",
      "oneLiner": "필요에 따라 가상 서버(인스턴스)를 온디맨드로 생성·확장할 수 있는 컴퓨팅 서비스로, 다양한 인스턴스 유형과 온디맨드/예약/스팟 등 여러 과금 모델을 제공한다."
    },
    {
      "name": "AWS Elastic Beanstalk",
      "category": "컴퓨팅",
      "oneLiner": "코드를 업로드하기만 하면 EC2, 로드밸런서, 오토 스케일링 등 인프라 프로비저닝과 배포를 자동으로 처리해주는 PaaS 성격의 애플리케이션 배포·관리 서비스이다."
    },
    {
      "name": "Amazon Lightsail",
      "category": "컴퓨팅",
      "oneLiner": "가상 서버, 스토리지, 네트워킹, DNS를 월 정액 요금으로 간편하게 제공하는 서비스로, 단순한 웹사이트나 애플리케이션을 빠르게 시작하려는 사용자에게 적합하다."
    },
    {
      "name": "AWS Outposts",
      "category": "컴퓨팅",
      "oneLiner": "AWS의 인프라, 서비스, API, 도구를 온프레미스 데이터센터에 그대로 확장하여 하이브리드 클라우드 환경을 구현할 수 있게 해주는 완전관리형 서비스이다."
    },
    {
      "name": "Amazon ECR",
      "category": "컨테이너",
      "oneLiner": "Docker 컨테이너 이미지를 저장, 관리, 배포할 수 있는 완전관리형 컨테이너 레지스트리 서비스이다."
    },
    {
      "name": "Amazon ECS",
      "category": "컨테이너",
      "oneLiner": "AWS에서 자체 개발한 완전관리형 컨테이너 오케스트레이션 서비스로, Docker 컨테이너의 배포와 확장, 관리를 손쉽게 해준다."
    },
    {
      "name": "Amazon EKS",
      "category": "컨테이너",
      "oneLiner": "오픈소스 Kubernetes를 AWS에서 관리형으로 실행할 수 있게 해주는 서비스로, 컨트롤 플레인 운영 부담 없이 Kubernetes 워크로드를 배포할 수 있다."
    },
    {
      "name": "AWS Support",
      "category": "고객 지원",
      "oneLiner": "Basic, Developer, Business, Enterprise On-Ramp, Enterprise 등 다양한 등급의 요금제를 통해 기술 지원, 응답 시간 SLA, 전담 지원 등을 제공하는 서비스이다."
    },
    {
      "name": "Amazon Aurora",
      "category": "데이터베이스",
      "oneLiner": "MySQL 및 PostgreSQL과 호환되는 AWS의 클라우드 네이티브 관계형 데이터베이스로, 표준 데이터베이스 대비 높은 성능과 가용성을 제공한다."
    },
    {
      "name": "Amazon DocumentDB",
      "category": "데이터베이스",
      "oneLiner": "MongoDB와 호환되는 완전관리형 문서(document) 데이터베이스 서비스로, JSON 형태의 데이터를 저장·조회하는 워크로드에 적합하다."
    },
    {
      "name": "Amazon DynamoDB",
      "category": "데이터베이스",
      "oneLiner": "단일 자릿수 밀리초 지연 시간으로 어떤 규모에서도 일관된 성능을 제공하는 완전관리형 서버리스 NoSQL(키-값/문서) 데이터베이스이다."
    },
    {
      "name": "Amazon ElastiCache",
      "category": "데이터베이스",
      "oneLiner": "Redis 또는 Memcached와 호환되는 완전관리형 인메모리 캐싱 서비스로, 데이터베이스 앞단에 배치해 읽기 성능을 크게 향상시킨다."
    },
    {
      "name": "Amazon Neptune",
      "category": "데이터베이스",
      "oneLiner": "완전관리형 그래프 데이터베이스 서비스로, 소셜 네트워크나 추천 엔진처럼 개체 간 복잡한 관계를 다루는 워크로드에 최적화되어 있다."
    },
    {
      "name": "Amazon RDS",
      "category": "데이터베이스",
      "oneLiner": "MySQL, PostgreSQL, MariaDB, Oracle, SQL Server 등 여러 엔진을 지원하는 완전관리형 관계형 데이터베이스 서비스로, 프로비저닝·백업·패치 같은 운영 작업을 자동화해준다."
    },
    {
      "name": "AWS CLI",
      "category": "개발자 도구",
      "oneLiner": "명령줄 셸에서 명령을 입력해 AWS 서비스를 제어하고 스크립트를 통해 자동화할 수 있게 해주는 통합 도구이다."
    },
    {
      "name": "AWS CodeBuild",
      "category": "개발자 도구",
      "oneLiner": "소스 코드를 컴파일하고 테스트를 실행하며 배포 가능한 소프트웨어 패키지를 생성해주는 완전관리형 빌드 서비스로, 자체 빌드 서버를 프로비저닝할 필요가 없다."
    },
    {
      "name": "AWS CodePipeline",
      "category": "개발자 도구",
      "oneLiner": "소스, 빌드, 테스트, 배포 단계를 자동화하는 완전관리형 CI/CD(지속적 통합/배포) 파이프라인 서비스이다."
    },
    {
      "name": "AWS X-Ray",
      "category": "개발자 도구",
      "oneLiner": "분산 애플리케이션을 통과하는 요청을 추적하여 마이크로서비스 간 성능 병목이나 오류 원인을 분석할 수 있게 해주는 디버깅 및 분석 서비스이다."
    },
    {
      "name": "Amazon AppStream 2.0",
      "category": "최종 사용자 컴퓨팅",
      "oneLiner": "데스크톱 애플리케이션을 별도 설치 없이 웹 브라우저로 스트리밍하여 사용할 수 있게 해주는 완전관리형 애플리케이션 스트리밍 서비스이다."
    },
    {
      "name": "Amazon WorkSpaces",
      "category": "최종 사용자 컴퓨팅",
      "oneLiner": "클라우드 기반의 완전관리형 가상 데스크톱(DaaS)을 제공하여 다양한 기기에서 안전하게 데스크톱 환경에 접속할 수 있게 해준다."
    },
    {
      "name": "Amazon WorkSpaces Secure Browser",
      "category": "최종 사용자 컴퓨팅",
      "oneLiner": "로컬 브라우저에 별도 소프트웨어 설치 없이 사내 웹 애플리케이션이나 SaaS에 안전하게 접근할 수 있게 해주는 완전관리형 보안 브라우징 서비스이다."
    },
    {
      "name": "AWS Amplify",
      "category": "프런트엔드 웹 및 모바일",
      "oneLiner": "웹 및 모바일 애플리케이션을 빠르게 구축, 배포, 호스팅할 수 있게 해주는 개발 플랫폼으로, 인증·데이터·스토리지 등 백엔드 기능을 손쉽게 연결할 수 있다."
    },
    {
      "name": "AWS AppSync",
      "category": "프런트엔드 웹 및 모바일",
      "oneLiner": "GraphQL 또는 Pub/Sub API를 완전관리형으로 만들어 여러 데이터 소스를 손쉽게 통합하고 실시간 데이터 동기화를 지원하는 서비스이다."
    },
    {
      "name": "AWS IoT Core",
      "category": "사물 인터넷(IoT)",
      "oneLiner": "수많은 IoT 디바이스를 안전하게 AWS 클라우드 및 다른 디바이스에 연결하고 데이터를 주고받을 수 있게 해주는 관리형 클라우드 서비스이다."
    },
    {
      "name": "Amazon Comprehend",
      "category": "기계 학습",
      "oneLiner": "자연어 처리(NLP)를 이용해 텍스트에서 감정, 개체명, 핵심 구문, 언어 등을 추출하는 완전관리형 서비스이다."
    },
    {
      "name": "Amazon Kendra",
      "category": "기계 학습",
      "oneLiner": "머신러닝 기반의 지능형 엔터프라이즈 검색 서비스로, 자연어 질의를 이해해 사내 여러 데이터 소스에서 정확한 답을 찾아준다."
    },
    {
      "name": "Amazon Lex",
      "category": "기계 학습",
      "oneLiner": "음성 및 텍스트를 이용해 대화형 인터페이스(챗봇)를 구축할 수 있게 해주는 서비스로, Amazon Alexa와 동일한 자연어 이해(NLU) 기술을 사용한다."
    },
    {
      "name": "Amazon Polly",
      "category": "기계 학습",
      "oneLiner": "텍스트를 자연스러운 음성으로 변환(TTS, Text-to-Speech)해주는 딥러닝 기반 서비스이다."
    },
    {
      "name": "Amazon Q",
      "category": "기계 학습",
      "oneLiner": "업무 및 개발 환경에 특화된 AWS의 생성형 AI 비서로, 사내 데이터 기반 질의응답부터 코드 작성·전환 지원까지 다양한 용도로 활용된다."
    },
    {
      "name": "Amazon Rekognition",
      "category": "기계 학습",
      "oneLiner": "이미지와 동영상에서 객체, 얼굴, 텍스트, 부적절한 콘텐츠 등을 식별하는 딥러닝 기반 이미지/동영상 분석 서비스이다."
    },
    {
      "name": "Amazon SageMaker AI",
      "category": "기계 학습",
      "oneLiner": "머신러닝 모델을 빌드, 훈련, 배포하는 전체 과정을 지원하는 완전관리형 서비스로, 데이터 준비부터 모델 운영까지 하나의 플랫폼에서 처리할 수 있다."
    },
    {
      "name": "Amazon Textract",
      "category": "기계 학습",
      "oneLiner": "스캔한 문서나 이미지에서 텍스트, 표, 양식 데이터를 자동으로 추출하는 OCR 기반 머신러닝 서비스이다."
    },
    {
      "name": "Amazon Transcribe",
      "category": "기계 학습",
      "oneLiner": "음성을 텍스트로 자동 변환(STT, Speech-to-Text)해주는 자동 음성 인식(ASR) 서비스이다."
    },
    {
      "name": "Amazon Translate",
      "category": "기계 학습",
      "oneLiner": "신경망 기계 번역 기술을 이용해 텍스트를 여러 언어로 신속하고 자연스럽게 번역해주는 서비스이다."
    },
    {
      "name": "AWS Auto Scaling",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "EC2, ECS, DynamoDB, Aurora 등 여러 리소스에 걸쳐 애플리케이션을 모니터링하고 수요에 맞게 용량을 자동으로 조정해 안정적인 성능을 최저 비용으로 유지해주는 서비스이다."
    },
    {
      "name": "AWS CloudFormation",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "JSON/YAML 템플릿으로 AWS 리소스를 코드로 정의하고 스택 단위로 일관되게 프로비저닝·관리할 수 있게 해주는 인프라형코드(IaC) 서비스이다."
    },
    {
      "name": "AWS CloudTrail",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "AWS 계정 내에서 사용자, 역할, 서비스가 수행한 API 호출과 활동 내역을 이벤트로 기록하여 감사, 보안 모니터링, 운영 문제 해결을 지원하는 서비스이다."
    },
    {
      "name": "Amazon CloudWatch",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "AWS 리소스와 애플리케이션의 로그, 지표, 이벤트를 실시간으로 수집·모니터링하고 알람과 대시보드를 통해 운영 상태를 파악할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Compute Optimizer",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "머신러닝을 이용해 리소스 사용 이력을 분석하고 EC2, Lambda 등에 더 적합한(비용 효율적인) 구성을 추천해주는 서비스이다."
    },
    {
      "name": "AWS Config",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "AWS 리소스의 구성을 지속적으로 기록하고 평가하여 원하는 구성 규칙 준수 여부를 확인하고 변경 이력을 추적할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Control Tower",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "다중 계정 AWS 환경을 모범 사례에 따라 자동으로 설정하고 거버넌스를 지속적으로 관리해주는 서비스로, AWS Organizations를 기반으로 랜딩 존을 구축한다."
    },
    {
      "name": "AWS Health Dashboard",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "AWS 서비스의 전반적인 상태와 사용자 계정 리소스에 영향을 줄 수 있는 이벤트를 개인화된 알림으로 제공하는 대시보드이다."
    },
    {
      "name": "AWS License Manager",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "Microsoft, SAP, Oracle 등 소프트웨어 라이선스 사용을 중앙에서 추적·관리하여 라이선스 규정 위반 위험을 줄여주는 서비스이다."
    },
    {
      "name": "AWS Management Console",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "웹 브라우저를 통해 AWS 서비스와 리소스를 시각적으로 조회하고 관리할 수 있게 해주는 통합 웹 기반 인터페이스이다."
    },
    {
      "name": "AWS Organizations",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "여러 AWS 계정을 하나의 조직으로 묶어 중앙에서 관리하는 계정 관리 서비스로, 통합 결제와 서비스 제어 정책(SCP)을 통한 거버넌스를 제공한다."
    },
    {
      "name": "AWS Service Catalog",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "조직에서 승인된 IT 서비스(CloudFormation 템플릿 등)의 카탈로그를 만들어 사용자가 표준화된 리소스만 셀프서비스로 배포하도록 통제하는 서비스이다."
    },
    {
      "name": "Service Quotas",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "AWS 서비스별 할당량(제한)을 한 곳에서 조회하고 필요 시 상향 조정을 요청할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Systems Manager",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "온프레미스 서버와 AWS 리소스를 한곳에서 볼 수 있게 해주고, 패치 관리, 실행 명령(Run Command), 파라미터 저장 등 운영 작업을 자동화하는 통합 관리 서비스이다."
    },
    {
      "name": "AWS Trusted Advisor",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "비용 최적화, 성능, 보안, 내결함성, 서비스 한도 등 다섯 가지 범주에 걸쳐 AWS 환경을 실시간으로 점검하고 모범 사례에 따른 개선 권장 사항을 제공하는 서비스이다."
    },
    {
      "name": "AWS Well-Architected Tool",
      "category": "AWS 관리 및 거버넌스",
      "oneLiner": "AWS Well-Architected Framework의 6가지 기둥(운영 우수성, 보안, 안정성, 성능 효율성, 비용 최적화, 지속 가능성)을 기준으로 워크로드를 검토하고 개선 사항을 파악할 수 있게 해주는 무료 도구이다."
    },
    {
      "name": "AWS Application Discovery Service",
      "category": "마이그레이션 및 전송",
      "oneLiner": "온프레미스 데이터센터의 서버 사용량과 애플리케이션 간 의존성 정보를 수집하여 마이그레이션 계획 수립을 지원하는 서비스이다."
    },
    {
      "name": "AWS Application Migration Service",
      "category": "마이그레이션 및 전송",
      "oneLiner": "물리 서버, 가상 서버, 클라우드 서버를 최소한의 다운타임과 코드 변경 없이 AWS로 자동 변환·마이그레이션해주는 리프트 앤 시프트(lift-and-shift) 서비스이다."
    },
    {
      "name": "AWS Database Migration Service(AWS DMS)",
      "category": "마이그레이션 및 전송",
      "oneLiner": "온프레미스 또는 다른 클라우드의 데이터베이스를 AWS로 안전하고 빠르게 마이그레이션하며, 마이그레이션 중에도 소스 데이터베이스를 계속 운영할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Migration Evaluator",
      "category": "마이그레이션 및 전송",
      "oneLiner": "현재 온프레미스 인프라 사용 데이터를 분석해 AWS로 이전했을 때의 예상 비용과 비즈니스 사례(Business Case)를 산출해주는 무료 평가 도구이다."
    },
    {
      "name": "AWS Migration Hub",
      "category": "마이그레이션 및 전송",
      "oneLiner": "여러 AWS 및 파트너 마이그레이션 도구에서 발생하는 진행 상황을 한 곳에서 추적할 수 있게 해주는 중앙 관제 서비스이다."
    },
    {
      "name": "AWS Schema Conversion Tool(AWS SCT)",
      "category": "마이그레이션 및 전송",
      "oneLiner": "서로 다른 데이터베이스 엔진 간(예: Oracle에서 PostgreSQL로) 스키마와 코드를 자동으로 변환해주어 이기종 데이터베이스 마이그레이션을 지원하는 도구이다."
    },
    {
      "name": "AWS Snow Family",
      "category": "마이그레이션 및 전송",
      "oneLiner": "네트워크가 제한적이거나 대용량 데이터를 물리적 장치로 안전하게 AWS에 반입·반출하기 위한 휴대용 스토리지/컴퓨팅 디바이스 제품군(Snowcone, Snowball, Snowmobile 등)이다."
    },
    {
      "name": "Amazon API Gateway",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "REST, HTTP, WebSocket API를 어떤 규모에서도 손쉽게 생성, 게시, 유지관리, 모니터링, 보안 관리할 수 있게 해주는 완전관리형 서비스이다."
    },
    {
      "name": "Amazon CloudFront",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "전 세계 엣지 로케이션 네트워크를 이용해 콘텐츠를 사용자와 가까운 곳에서 캐싱·전송함으로써 지연 시간을 낮추는 콘텐츠 전송 네트워크(CDN) 서비스이다."
    },
    {
      "name": "AWS Direct Connect",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "온프레미스 데이터센터와 AWS 사이에 전용 사설 네트워크 연결을 구성하여 인터넷을 거치지 않고 더 안정적이고 빠른 대역폭을 제공하는 서비스이다."
    },
    {
      "name": "AWS Global Accelerator",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "AWS 글로벌 네트워크를 통해 사용자 트래픽을 가장 가까운 엣지 로케이션으로 유도하여 애플리케이션의 가용성과 성능을 향상시키는 네트워킹 서비스이다."
    },
    {
      "name": "AWS PrivateLink",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "인터넷을 경유하지 않고 VPC와 AWS 서비스 또는 다른 VPC 간에 프라이빗하게 통신할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon Route 53",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "고가용성과 확장성을 갖춘 DNS 웹 서비스로, 도메인 이름 등록과 헬스 체크 기반 트래픽 라우팅 기능을 함께 제공한다."
    },
    {
      "name": "AWS Transit Gateway",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "여러 VPC와 온프레미스 네트워크를 하나의 중앙 허브에 연결하여 네트워크 구성을 단순화하는 서비스이다."
    },
    {
      "name": "Amazon VPC",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "AWS 클라우드 내에 논리적으로 격리된 가상 네트워크를 직접 정의하여 IP 주소 범위, 서브넷, 라우팅 테이블, 게이트웨이 등을 자유롭게 구성할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS VPN",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "인터넷을 통해 온프레미스 네트워크나 원격 사용자를 AWS와 암호화된 연결로 안전하게 연결하는 VPN 서비스 제품군(Site-to-Site VPN, Client VPN 포함)을 총칭한다."
    },
    {
      "name": "AWS Site-to-Site VPN",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "온프레미스 네트워크와 Amazon VPC 사이에 IPsec 기반의 암호화된 VPN 연결을 생성해주는 서비스이다."
    },
    {
      "name": "AWS Client VPN",
      "category": "네트워킹 및 콘텐츠 전송",
      "oneLiner": "원격 사용자가 OpenVPN 기반 클라이언트를 이용해 AWS 및 온프레미스 네트워크 리소스에 안전하게 접속할 수 있게 해주는 완전관리형 클라이언트 VPN 서비스이다."
    },
    {
      "name": "AWS Artifact",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "AWS의 규정 준수 보고서(SOC, PCI 등)와 온라인 계약서를 무료로 다운로드할 수 있는 셀프서비스 포털이다."
    },
    {
      "name": "AWS Audit Manager",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "AWS 사용 현황에 대한 증거를 지속적으로 수집하여 규정 준수 감사를 간소화하고 자동화해주는 서비스이다."
    },
    {
      "name": "AWS Certificate Manager(ACM)",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "AWS 서비스 및 내부 연결 리소스에 사용할 SSL/TLS 인증서를 손쉽게 프로비저닝, 관리, 배포할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS CloudHSM",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "FIPS 140-2 검증된 전용 하드웨어 보안 모듈(HSM)을 클라우드에서 제공하여 암호화 키를 고객이 단독으로 제어·관리할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon Cognito",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "웹 및 모바일 애플리케이션에 사용자 회원가입, 로그인, 소셜/기업 자격 증명 연동 등 사용자 인증과 접근 제어 기능을 손쉽게 추가할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon Detective",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "여러 AWS 로그 데이터를 분석해 보안 문제의 근본 원인을 빠르게 조사하고 시각화할 수 있게 해주는 보안 조사 서비스이다."
    },
    {
      "name": "AWS Directory Service",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "AWS 클라우드에서 Microsoft Active Directory를 관리형으로 제공하거나 기존 온프레미스 AD와 연동할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Firewall Manager",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "여러 계정과 리소스에 걸쳐 AWS WAF 규칙, Shield 보호, 보안 그룹 등의 보안 정책을 중앙에서 일관되게 설정·관리할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon GuardDuty",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "CloudTrail, VPC 흐름 로그, DNS 로그 등을 머신러닝과 위협 인텔리전스로 지속적으로 분석하여 악의적이거나 비정상적인 활동을 탐지해주는 위협 탐지 서비스이다."
    },
    {
      "name": "AWS IAM",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "AWS 리소스에 대한 접근을 안전하게 제어하는 서비스로, 사용자·그룹·역할과 정책을 통해 누가 무엇을 할 수 있는지(인증과 권한 부여)를 관리한다."
    },
    {
      "name": "AWS IAM Identity Center",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "여러 AWS 계정과 비즈니스 애플리케이션에 대한 SSO(단일 로그인) 접근을 중앙에서 관리할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon Inspector",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "EC2 인스턴스, 컨테이너 이미지, Lambda 함수의 소프트웨어 취약점과 의도치 않은 네트워크 노출을 자동으로 지속적으로 스캔해주는 보안 평가 서비스이다."
    },
    {
      "name": "AWS KMS",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "데이터 암호화에 사용하는 암호화 키를 생성하고 중앙에서 제어할 수 있게 해주는 관리형 서비스로, 다른 AWS 서비스와 통합되어 저장 데이터 암호화를 손쉽게 적용할 수 있다."
    },
    {
      "name": "Amazon Macie",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "머신러닝과 패턴 매칭을 이용해 S3에 저장된 개인식별정보(PII) 등 민감한 데이터를 자동으로 검색하고 보호하는 데이터 보안 서비스이다."
    },
    {
      "name": "AWS Resource Access Manager(AWS RAM)",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "서브넷, Transit Gateway 등 AWS 리소스를 복제하지 않고도 여러 계정 간에 안전하게 공유할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Secrets Manager",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "데이터베이스 자격 증명, API 키 등 민감한 정보를 암호화하여 저장하고 자동으로 교체(rotation)할 수 있게 해주는 서비스이다."
    },
    {
      "name": "AWS Security Hub",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "GuardDuty, Inspector, Macie 등 여러 AWS 보안 서비스와 파트너 도구의 보안 조사 결과를 한곳에 모아 종합적인 보안 상태를 확인할 수 있게 해주는 클라우드 보안 상태 관리(CSPM) 서비스이다."
    },
    {
      "name": "AWS Shield",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "AWS 상에서 실행되는 애플리케이션을 분산 서비스 거부(DDoS) 공격으로부터 보호하는 관리형 서비스로, 모든 고객에게 기본(Standard) 보호가 무료로 제공되며 유료(Advanced) 등급도 있다."
    },
    {
      "name": "AWS WAF",
      "category": "보안, ID 및 규정 준수",
      "oneLiner": "SQL 인젝션이나 크로스 사이트 스크립팅 같은 일반적인 웹 공격으로부터 웹 애플리케이션과 API를 보호하는 웹 애플리케이션 방화벽 서비스이다."
    },
    {
      "name": "AWS Fargate",
      "category": "서버리스",
      "oneLiner": "ECS 또는 EKS에서 서버나 클러스터를 직접 프로비저닝·관리할 필요 없이 컨테이너를 실행할 수 있게 해주는 서버리스 컴퓨팅 엔진이다."
    },
    {
      "name": "AWS Lambda",
      "category": "서버리스",
      "oneLiner": "서버를 프로비저닝하거나 관리하지 않고 이벤트에 응답해 코드를 실행할 수 있는 서버리스 컴퓨팅 서비스로, 실행된 요청과 컴퓨팅 시간에 대해서만 비용을 지불한다."
    },
    {
      "name": "AWS Backup",
      "category": "스토리지",
      "oneLiner": "EBS, RDS, DynamoDB, EFS 등 여러 AWS 서비스에 걸친 백업 작업을 중앙에서 정책 기반으로 자동화하고 관리할 수 있게 해주는 완전관리형 백업 서비스이다."
    },
    {
      "name": "Amazon EBS",
      "category": "스토리지",
      "oneLiner": "EC2 인스턴스에 연결해 사용하는 영구적인 블록 스토리지 볼륨을 제공하는 서비스로, 스냅샷을 통한 백업과 복원을 지원한다."
    },
    {
      "name": "Amazon EFS",
      "category": "스토리지",
      "oneLiner": "여러 EC2 인스턴스나 컨테이너에서 동시에 마운트해 공유할 수 있는 완전관리형 서버리스 NFS 파일 스토리지 서비스로, 용량을 자동으로 확장·축소한다."
    },
    {
      "name": "AWS Elastic Disaster Recovery",
      "category": "스토리지",
      "oneLiner": "온프레미스 또는 클라우드 서버를 지속적으로 AWS에 복제하여 장애 발생 시 신속하고 비용 효율적으로 복구(DR)할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon FSx",
      "category": "스토리지",
      "oneLiner": "Windows File Server, Lustre, NetApp ONTAP, OpenZFS 등 업계 표준 파일 시스템을 완전관리형으로 제공하여 다양한 워크로드에 최적화된 공유 파일 스토리지를 손쉽게 구성할 수 있게 해주는 서비스이다."
    },
    {
      "name": "Amazon S3",
      "category": "스토리지",
      "oneLiner": "탁월한 확장성, 가용성, 내구성(99.999999999%)을 제공하는 객체 스토리지 서비스로, 정적 웹사이트 호스팅부터 데이터 레이크까지 다양한 용도로 사용된다."
    },
    {
      "name": "Amazon S3 Glacier",
      "category": "스토리지",
      "oneLiner": "S3의 저비용 장기 보관 및 아카이빙 스토리지 클래스로, 자주 접근하지 않는 데이터를 매우 낮은 비용으로 안전하게 보관할 수 있다."
    },
    {
      "name": "AWS Storage Gateway",
      "category": "스토리지",
      "oneLiner": "온프레미스 환경과 AWS 클라우드 스토리지를 연결해주는 하이브리드 스토리지 서비스로, 온프레미스 애플리케이션이 클라우드 스토리지를 로컬처럼 사용할 수 있게 해준다."
    }
  ],
  "questions": [
    {
      "id": "clf-d1-q001",
      "taskId": "1.1",
      "type": "single",
      "question": "한 스타트업이 서비스 초기 단계에서 서버 구매를 위한 대규모 초기 자본 투자 없이 사업을 시작하고, 실제 사용한 컴퓨팅 자원에 대해서만 매달 비용을 지불하고 싶어합니다. 이 요구사항과 가장 관련이 깊은 AWS 클라우드의 이점은 무엇입니까?",
      "choices": [
        "고정 비용을 가변 비용으로 전환할 수 있다는 이점",
        "몇 분 만에 전 세계로 배포할 수 있다는 이점",
        "규모의 경제로 인한 비용 절감 이점",
        "데이터센터 운영 및 유지관리에서 벗어날 수 있다는 이점"
      ],
      "answer": [
        0
      ],
      "explanation": "초기 자본 지출(CapEx) 없이 사용한 만큼만 지불하는 것은 '고정 비용을 가변 비용으로 전환'하는 이점의 핵심 사례입니다. 나머지 보기는 각각 글로벌 확장 속도, 대량 구매로 인한 단가 절감, 인프라 운영 부담 제거를 설명하는 것으로 이 시나리오의 핵심(초기 자본 투자 회피)과는 직접적으로 연결되지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q002",
      "taskId": "1.1",
      "type": "single",
      "question": "한 온라인 교육 플랫폼이 신규 강좌를 출시하는데, 얼마나 많은 사용자가 몰릴지 사전에 정확히 예측할 수 없어 서버 용량을 얼마나 준비해야 할지 고민하고 있습니다. 이 상황에서 AWS 클라우드가 제공하는 가장 핵심적인 이점은 무엇입니까?",
      "choices": [
        "용량을 미리 추정할 필요가 없다는 이점",
        "온프레미스 대비 물리 보안 강화 이점",
        "라이선스를 그대로 가져와 사용할 수 있는 이점",
        "운영 우수성 기둥에서 제공하는 자동화 이점"
      ],
      "answer": [
        0
      ],
      "explanation": "수요를 예측하기 어려운 상황에서는 미리 최대 용량을 추정해 구매할 필요 없이 필요에 따라 리소스를 확장·축소할 수 있다는 것이 핵심 이점입니다. 물리 보안, BYOL 라이선싱, 운영 우수성 자동화는 이 시나리오의 핵심 쟁점(용량 예측의 어려움)과 직접 관련이 없습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q003",
      "taskId": "1.1",
      "type": "single",
      "question": "AWS는 수많은 고객의 컴퓨팅 및 스토리지 수요를 하나로 통합하여 대규모로 하드웨어를 구매하고, 이를 통해 얻은 원가 절감분을 요금 인하 형태로 고객에게 지속적으로 전달합니다. 이 개념을 가장 정확히 설명하는 이점은 무엇입니까?",
      "choices": [
        "규모의 경제",
        "탄력성",
        "고가용성",
        "글로벌 인프라의 엣지 로케이션"
      ],
      "answer": [
        0
      ],
      "explanation": "다수 고객의 수요를 통합해 대량 구매로 원가를 낮추고 이를 요금 인하로 전달하는 것은 '규모의 경제(Economies of Scale)'의 정의입니다. 탄력성은 수요에 따른 자원 증감 능력, 고가용성은 장애에도 서비스가 지속되는 능력, 엣지 로케이션은 콘텐츠 전송 인프라를 가리키므로 이 설명과 맞지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q004",
      "taskId": "1.1",
      "type": "single",
      "question": "한 개발팀이 새로운 아이디어를 테스트하기 위해 몇 번의 클릭만으로 서버를 프로비저닝하고, 실험이 실패하면 큰 비용 부담 없이 즉시 리소스를 종료합니다. 이러한 업무 방식이 가능해진 것은 AWS 클라우드의 어떤 이점 덕분입니까?",
      "choices": [
        "속도와 민첩성 증가",
        "고정 비용의 가변 비용 전환",
        "데이터센터 유지관리 비용 절감",
        "전 세계 리전 확장 속도"
      ],
      "answer": [
        0
      ],
      "explanation": "리소스를 신속하게 프로비저닝하고 실패한 실험을 빠르게 폐기할 수 있는 능력은 '속도와 민첩성(Agility)' 이점을 의미합니다. 다른 보기들은 비용 구조 전환, 인프라 운영 부담 제거, 글로벌 배포 속도를 설명하는 것으로 이 시나리오의 핵심인 '실험 속도'와는 결이 다릅니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q005",
      "taskId": "1.1",
      "type": "single",
      "question": "한 기업이 자체 데이터센터를 운영하며 서버 유지보수, 전력 및 냉각 관리, 하드웨어 교체에 상당한 인력과 시간을 투입해왔습니다. AWS 클라우드로 전환하면 이 인력을 핵심 비즈니스 차별화 작업에 재배치할 수 있게 되는데, 이는 어떤 이점에 해당합니까?",
      "choices": [
        "데이터센터 운영 및 유지관리에서 벗어날 수 있다는 이점",
        "탄력적 확장성 이점",
        "고가용성 이점",
        "라이선스 비용 절감(BYOL) 이점"
      ],
      "answer": [
        0
      ],
      "explanation": "물리적 데이터센터 운영과 유지관리 부담(전력, 냉각, 하드웨어 교체 등)에서 벗어나 핵심 비즈니스에 집중할 수 있게 하는 것이 이 이점의 정의입니다. 탄력적 확장성과 고가용성은 아키텍처 특성이고, BYOL은 라이선싱 전략으로 이 시나리오와는 관련이 없습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q006",
      "taskId": "1.1",
      "type": "single",
      "question": "한 글로벌 이커머스 기업이 아시아, 유럽, 북미 사용자에게 낮은 지연 시간으로 서비스를 제공하기 위해 각 대륙의 AWS 리전에 애플리케이션을 몇 시간 만에 배포했습니다. 이는 AWS 클라우드의 어떤 이점을 보여주는 사례입니까?",
      "choices": [
        "몇 분 만에 전 세계로 배포할 수 있다는 이점",
        "온프레미스 대비 규정 준수 강화 이점",
        "적정 규모 조정을 통한 비용 절감 이점",
        "운영 우수성 기둥의 게임 데이 이점"
      ],
      "answer": [
        0
      ],
      "explanation": "전 세계에 분산된 AWS 리전을 활용해 짧은 시간 내에 여러 대륙에 인프라를 배포하고 사용자와 가까운 곳에서 서비스를 제공하는 것은 '몇 분 만에 전 세계로 배포' 이점의 대표 사례입니다. 나머지 보기는 규정 준수, 비용 최적화, 운영 우수성 실천법으로 이 시나리오의 핵심(글로벌 배포 속도)과 직접적인 관련이 없습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q007",
      "taskId": "1.1",
      "type": "multi",
      "question": "한 회사가 미션 크리티컬 애플리케이션을 서로 다른 여러 가용 영역(Availability Zone)에 걸쳐 배포하려고 합니다. 이러한 다중 가용 영역 아키텍처를 통해 얻을 수 있는 이점으로 옳은 것을 모두 고르십시오.",
      "choices": [
        "하나의 가용 영역에서 장애가 발생해도 다른 가용 영역의 서비스에 영향을 주지 않도록 장애를 격리할 수 있다",
        "여러 가용 영역에 리소스를 분산하여 고가용성 아키텍처를 구성할 수 있다",
        "모든 AWS 리전의 데이터가 자동으로 실시간 동기화된다",
        "다중 가용 영역을 사용하면 AWS 요금이 자동으로 할인된다",
        "가용 영역을 여러 개 사용하면 IAM 권한 관리가 필요 없어진다"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "여러 가용 영역에 걸친 배포는 물리적으로 분리된 위치에서 장애를 격리하고, 하나의 위치에 장애가 발생해도 서비스가 지속되는 고가용성을 확보하는 것이 핵심 이점입니다. 리전 간 자동 실시간 동기화, 자동 요금 할인, IAM 관리 불필요는 실제로 존재하지 않는 잘못된 설명입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q008",
      "taskId": "1.1",
      "type": "multi",
      "question": "AWS가 강조하는 클라우드 컴퓨팅의 핵심 이점에 대한 설명으로 옳은 것을 모두 고르십시오.",
      "choices": [
        "선불로 대규모 하드웨어를 구매하는 대신 사용한 만큼 지불하는 가변 비용 모델을 활용할 수 있다",
        "AWS의 대규모 구매력 덕분에 얻어지는 규모의 경제 효과를 요금 인하 형태로 누릴 수 있다",
        "AWS를 사용하려면 반드시 자체 물리 데이터센터를 별도로 구축하고 운영해야 한다",
        "특정 하드웨어 벤더의 장비를 직접 구매해 데이터센터에 설치해야만 서비스를 이용할 수 있다",
        "전 세계 여러 리전을 활용해 사용자에게 가까운 위치에서 서비스를 제공할 수 있다"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "AWS 클라우드의 핵심 이점은 가변 비용 모델, 규모의 경제, 글로벌 리전을 통한 근접 서비스 제공입니다. 반면 AWS를 사용하기 위해 자체 데이터센터를 구축하거나 특정 하드웨어를 직접 구매해야 한다는 설명은 클라우드 컴퓨팅의 정의와 정반대되는 잘못된 진술입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q009",
      "taskId": "1.2",
      "type": "single",
      "question": "한 회사가 인프라 변경 사항을 코드로 관리하고, 작은 단위로 자주 배포하며, 변경 이후에도 문제를 신속히 감지하고 대응할 수 있는 절차를 마련하려고 합니다. 이는 AWS Well-Architected Framework의 어느 기둥과 가장 관련이 깊습니까?",
      "choices": [
        "운영 우수성(Operational Excellence)",
        "성능 효율성(Performance Efficiency)",
        "비용 최적화(Cost Optimization)",
        "지속 가능성(Sustainability)"
      ],
      "answer": [
        0
      ],
      "explanation": "변경 관리를 코드화하고 소규모로 자주 배포하며 운영 절차를 지속적으로 개선하는 것은 운영 우수성 기둥의 핵심 주제입니다. 성능 효율성은 리소스 효율적 사용, 비용 최적화는 불필요한 지출 제거, 지속 가능성은 환경 영향 최소화에 초점을 두므로 이 시나리오와는 맞지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q010",
      "taskId": "1.2",
      "type": "single",
      "question": "한 금융 회사가 고객 데이터를 보호하기 위해 다단계 인증을 도입하고, 최소 권한 원칙에 따라 접근 권한을 부여하며, 저장 데이터와 전송 데이터를 모두 암호화하려고 합니다. 이 요구사항들은 Well-Architected Framework의 어느 기둥에 해당합니까?",
      "choices": [
        "보안(Security)",
        "신뢰성(Reliability)",
        "성능 효율성(Performance Efficiency)",
        "운영 우수성(Operational Excellence)"
      ],
      "answer": [
        0
      ],
      "explanation": "다단계 인증, 최소 권한 원칙, 데이터 암호화는 모두 정보와 시스템을 보호하는 것을 목표로 하는 보안 기둥의 대표적인 실천 사례입니다. 신뢰성은 장애 복구, 성능 효율성은 리소스 효율, 운영 우수성은 운영 절차 개선에 초점을 맞추므로 이 시나리오와는 거리가 있습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q011",
      "taskId": "1.2",
      "type": "single",
      "question": "한 회사가 장애 복구 절차를 정기적으로 테스트하고, 인프라를 여러 가용 영역에 분산 배치하며, 일시적인 네트워크 문제가 발생해도 자동으로 장애 조치(failover)가 이루어지도록 아키텍처를 설계하려고 합니다. 이는 Well-Architected Framework의 어느 기둥과 가장 관련이 깊습니까?",
      "choices": [
        "신뢰성(Reliability)",
        "성능 효율성(Performance Efficiency)",
        "비용 최적화(Cost Optimization)",
        "보안(Security)"
      ],
      "answer": [
        0
      ],
      "explanation": "장애로부터 복구되고 자동 장애 조치를 통해 중단을 완화하는 능력은 신뢰성 기둥의 핵심입니다. 성능 효율성은 리소스를 효율적으로 사용하는 것, 비용 최적화는 비용 절감, 보안은 자산 보호에 초점을 두므로 이 시나리오와는 맞지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q012",
      "taskId": "1.2",
      "type": "single",
      "question": "한 데이터 분석 회사가 워크로드 특성에 맞는 컴퓨팅 리소스 유형을 선택하고, 트래픽이 적은 시간에는 서버리스 아키텍처로 전환하여 기술 변화에 맞춰 계속 효율을 유지하려고 합니다. 이는 어느 기둥에 해당합니까?",
      "choices": [
        "성능 효율성(Performance Efficiency)",
        "비용 최적화(Cost Optimization)",
        "신뢰성(Reliability)",
        "운영 우수성(Operational Excellence)"
      ],
      "answer": [
        0
      ],
      "explanation": "워크로드 요구사항에 맞는 리소스 유형을 선택하고 기술 발전에 따라 효율성을 유지하는 것은 성능 효율성 기둥의 정의입니다. 비용 최적화는 비용 절감 자체에, 신뢰성은 복구력에, 운영 우수성은 운영 절차 개선에 초점을 두므로 이 시나리오의 핵심(효율적 리소스 사용)과는 구분됩니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q013",
      "taskId": "1.2",
      "type": "single",
      "question": "한 스타트업이 사용하지 않는 유휴 EC2 인스턴스를 종료하고, 실제 사용률에 맞춰 인스턴스 유형을 다운사이징하며, 장기 사용이 예상되는 워크로드에는 예약 인스턴스를 활용하기로 했습니다. 이는 어느 기둥의 실천 사례입니까?",
      "choices": [
        "비용 최적화(Cost Optimization)",
        "지속 가능성(Sustainability)",
        "성능 효율성(Performance Efficiency)",
        "보안(Security)"
      ],
      "answer": [
        0
      ],
      "explanation": "유휴 리소스 제거, 적정 규모 조정, 예약 인스턴스 활용은 불필요한 비용을 없애 최저 비용으로 가치를 제공하는 비용 최적화 기둥의 대표 사례입니다. 지속 가능성은 환경 영향, 성능 효율성은 리소스 효율적 사용, 보안은 자산 보호에 초점을 두므로 이 시나리오와는 다릅니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q014",
      "taskId": "1.2",
      "type": "single",
      "question": "한 회사가 워크로드가 소비하는 에너지와 자원의 양을 측정하고, 재생 에너지 사용 비중이 높은 AWS 리전을 선택하여 환경에 미치는 영향을 최소화하려고 합니다. 이는 Well-Architected Framework의 어느 기둥에 해당합니까?",
      "choices": [
        "지속 가능성(Sustainability)",
        "비용 최적화(Cost Optimization)",
        "운영 우수성(Operational Excellence)",
        "신뢰성(Reliability)"
      ],
      "answer": [
        0
      ],
      "explanation": "워크로드가 환경에 미치는 영향(에너지, 자원 사용)을 최소화하는 것은 2021년에 추가된 지속 가능성 기둥의 정의입니다. 비용 최적화는 재무적 비용 절감에 초점을 두는 것으로 목적이 다르며, 운영 우수성과 신뢰성 역시 이 시나리오의 핵심(환경 영향)과는 관련이 없습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q015",
      "taskId": "1.2",
      "type": "multi",
      "question": "AWS Well-Architected Framework의 일반 설계 원칙(General Design Principles)으로 옳은 것을 모두 고르십시오.",
      "choices": [
        "용량을 추측하지 말고 필요에 따라 자동으로 확장 및 축소되도록 설계한다",
        "실제 운영 규모와 유사한 환경에서 시스템을 테스트한다",
        "가능한 반복 작업은 자동화하여 아키텍처 실험 비용을 낮춘다",
        "한 번 설계한 아키텍처는 변경하지 않고 그대로 유지하는 것을 목표로 한다",
        "장애 대응 능력을 높이기 위해 수동 개입 절차를 최대한 늘린다"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Well-Architected Framework의 일반 설계 원칙은 용량 추측 지양, 실제 규모 테스트, 자동화를 통한 실험 비용 절감을 포함합니다. 아키텍처를 고정하고 변경하지 않는 것이나 수동 개입을 늘리는 것은 오히려 '아키텍처가 진화하도록 허용'하고 '자동화'하라는 원칙에 정면으로 배치되는 잘못된 설명입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q016",
      "taskId": "1.2",
      "type": "multi",
      "question": "다음 중 Well-Architected Framework의 기둥과 그 설명이 올바르게 짝지어진 것을 모두 고르십시오.",
      "choices": [
        "보안(Security) - 정보, 시스템, 자산을 보호하고 위협을 탐지하는 능력",
        "신뢰성(Reliability) - 워크로드가 장애로부터 복구되고 수요를 동적으로 충족하는 능력",
        "성능 효율성(Performance Efficiency) - 사용한 만큼만 비용을 지불하도록 요금 체계를 설계하는 능력",
        "지속 가능성(Sustainability) - IT 인력을 채용하고 조직 문화를 정착시키는 능력",
        "운영 우수성(Operational Excellence) - 컴퓨팅 리소스를 효율적으로 사용해 성능을 유지하는 능력"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "보안과 신뢰성에 대한 설명은 정확합니다. 세 번째 보기는 성능 효율성이 아닌 비용 최적화에 대한 설명이고, 네 번째는 지속 가능성이 아닌 조직 관리에 관한 내용이며, 다섯 번째는 운영 우수성이 아닌 성능 효율성에 대한 설명이므로 각각 기둥과 설명이 잘못 짝지어져 있습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q017",
      "taskId": "1.3",
      "type": "single",
      "question": "한 병원이 클라우드로 전환하면서 규정 준수 체계를 강화하고 데이터 유출 및 시스템 장애로 인한 잠재적 손실 가능성을 낮추는 것을 최우선 목표로 삼았습니다. 이는 AWS CAF가 제시하는 비즈니스 성과 중 무엇에 해당합니까?",
      "choices": [
        "비즈니스 위험 감소",
        "수익 증대",
        "운영 효율성 향상",
        "ESG 성과 개선"
      ],
      "answer": [
        0
      ],
      "explanation": "규정 준수 강화와 잠재적 손실 가능성 완화는 AWS CAF가 제시하는 '비즈니스 위험 감소' 성과에 해당합니다. 수익 증대는 신규 매출 창출, 운영 효율성 향상은 생산성 개선, ESG 성과 개선은 환경·사회·거버넌스 측면에 초점을 두므로 이 시나리오와는 맞지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q018",
      "taskId": "1.3",
      "type": "single",
      "question": "한 제조 기업이 클라우드 마이그레이션을 통해 자체 데이터센터의 전력 사용량을 줄이고, 탄소 배출량 감소 목표를 달성하며, 지속가능경영 보고서에 이러한 성과를 반영하려고 합니다. 이는 AWS CAF의 어떤 비즈니스 성과와 가장 관련이 깊습니까?",
      "choices": [
        "ESG 성과 개선",
        "비즈니스 위험 감소",
        "수익 증대",
        "운영 효율성 향상"
      ],
      "answer": [
        0
      ],
      "explanation": "탄소 배출 감소와 지속가능경영 성과 개선은 AWS CAF의 'ESG(환경·사회·거버넌스) 성과 개선' 항목에 해당합니다. 나머지 보기는 각각 위험 완화, 매출 증대, 생산성 향상을 의미하므로 환경적 목표를 다루는 이 시나리오와는 부합하지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q019",
      "taskId": "1.3",
      "type": "single",
      "question": "한 리테일 기업이 클라우드의 데이터 분석 및 머신러닝 서비스를 활용해 신규 맞춤형 구독 서비스를 출시하여 새로운 매출원을 창출하려고 합니다. 이는 AWS CAF의 어떤 비즈니스 성과에 해당합니까?",
      "choices": [
        "수익 증대",
        "비즈니스 위험 감소",
        "ESG 성과 개선",
        "운영 효율성 향상"
      ],
      "answer": [
        0
      ],
      "explanation": "클라우드 기반 신규 디지털 서비스를 통해 새로운 매출을 창출하는 것은 AWS CAF의 '수익 증대' 성과에 해당합니다. 위험 감소, ESG 개선, 운영 효율성은 각각 규정 준수, 환경/사회적 영향, 생산성 향상에 초점을 두므로 매출 창출이라는 이 시나리오의 핵심과는 다릅니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q020",
      "taskId": "1.3",
      "type": "single",
      "question": "한 물류 회사가 반복적인 재고 관리 프로세스를 자동화하여 직원들이 더 적은 시간으로 더 많은 업무를 처리할 수 있도록 운영팀의 생산성을 높이려고 합니다. 이는 AWS CAF가 제시하는 어떤 비즈니스 성과에 해당합니까?",
      "choices": [
        "운영 효율성 향상",
        "비즈니스 위험 감소",
        "수익 증대",
        "ESG 성과 개선"
      ],
      "answer": [
        0
      ],
      "explanation": "프로세스 자동화를 통한 생산성 향상은 AWS CAF의 '운영 효율성 향상' 성과에 해당합니다. 비즈니스 위험 감소는 규정 준수와 손실 완화, 수익 증대는 매출 창출, ESG 성과 개선은 환경·사회적 영향에 초점을 두므로 이 시나리오와는 구분됩니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q021",
      "taskId": "1.3",
      "type": "single",
      "question": "한 회사가 촉박한 마감 기한 때문에 온프레미스 애플리케이션의 코드를 거의 수정하지 않고 그대로 Amazon EC2 인스턴스로 이전하여 빠르게 마이그레이션을 완료하려고 합니다. 이는 6R 마이그레이션 전략 중 무엇에 해당합니까?",
      "choices": [
        "Rehost(리호스트)",
        "Refactor(리팩터)",
        "Repurchase(리퍼처스)",
        "Retain(리테인)"
      ],
      "answer": [
        0
      ],
      "explanation": "애플리케이션을 최소한의 변경으로 그대로 클라우드에 옮기는 것은 흔히 '리프트 앤 시프트'라고 불리는 Rehost 전략입니다. Refactor는 클라우드 네이티브로 재설계하는 것, Repurchase는 기존 제품을 버리고 SaaS 등 새 제품을 구매하는 것, Retain은 마이그레이션하지 않고 온프레미스에 유지하는 것을 의미하므로 이 시나리오와는 다릅니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q022",
      "taskId": "1.3",
      "type": "single",
      "question": "한 회사가 온프레미스에서 운영 중인 관계형 데이터베이스를 서비스 중단 없이 Amazon RDS로 이전하고, 이전 기간 동안 소스와 대상 데이터베이스 간 데이터를 지속적으로 복제하고 싶어합니다. 이러한 요구사항에 가장 적합한 AWS 서비스는 무엇입니까?",
      "choices": [
        "AWS Database Migration Service(DMS)",
        "AWS Snowball",
        "Amazon CloudFront",
        "AWS Application Discovery Service"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS DMS는 소스 데이터베이스를 최소한의 다운타임으로 마이그레이션하고 지속적인 복제까지 지원하는 서비스입니다. AWS Snowball은 대용량 데이터의 물리적 전송용, CloudFront는 콘텐츠 전송 네트워크, Application Discovery Service는 마이그레이션 계획을 위한 자산 파악용이므로 이 시나리오에는 맞지 않습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q023",
      "taskId": "1.3",
      "type": "multi",
      "question": "6R 마이그레이션 전략 중 'Retain(유지)'과 'Retire(폐기)'에 대한 설명으로 옳은 것을 모두 고르십시오.",
      "choices": [
        "Retain은 규정 준수나 기술적 제약 등의 이유로 특정 애플리케이션을 당장은 온프레미스에 그대로 남겨두는 전략이다",
        "Retire는 더 이상 필요하지 않다고 판단된 애플리케이션을 마이그레이션하지 않고 폐기하는 전략이다",
        "Retain은 반드시 모든 애플리케이션을 클라우드 네이티브로 재설계하는 것을 의미한다",
        "Retire는 데이터베이스를 지속적으로 복제하며 다운타임 없이 이전하는 전략이다",
        "Retain과 Retire 모두 마이그레이션 대상에서 해당 애플리케이션을 실제로 이전하지 않는다는 공통점이 있다"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "Retain은 특정 이유로 온프레미스에 남겨두는 것, Retire는 불필요한 애플리케이션을 폐기하는 것이며 둘 다 실제 클라우드로의 이전이 일어나지 않는다는 공통점이 있습니다. 클라우드 네이티브 재설계는 Refactor, 지속적 복제를 통한 다운타임 없는 이전은 DMS를 활용한 마이그레이션 방식에 대한 설명이므로 이 두 전략과는 무관합니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q024",
      "taskId": "1.3",
      "type": "multi",
      "question": "대규모 마이그레이션 프로젝트를 준비하는 단계에서 활용할 수 있는 AWS 서비스 및 도구로 옳은 것을 모두 고르십시오.",
      "choices": [
        "AWS Application Discovery Service를 사용해 온프레미스 서버와 애플리케이션 간 종속성을 파악한다",
        "AWS Snowball을 사용해 네트워크로 전송하기 어려운 대용량 데이터를 물리적으로 옮긴다",
        "AWS Database Migration Service를 사용해 데이터베이스를 최소 다운타임으로 이전한다",
        "Amazon Rekognition을 사용해 마이그레이션 대상 서버 목록을 자동으로 생성한다",
        "AWS Ground Station을 사용해 온프레미스 애플리케이션의 종속성을 분석한다"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Application Discovery Service, Snowball, DMS는 각각 마이그레이션 준비(자산 파악), 대용량 데이터 이전, 데이터베이스 이전에 실제로 사용되는 서비스입니다. Amazon Rekognition은 이미지/영상 분석 서비스, AWS Ground Station은 위성 통신 서비스로 마이그레이션 준비와는 무관하므로 잘못된 보기입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q025",
      "taskId": "1.4",
      "type": "single",
      "question": "한 회사가 매달 사용한 컴퓨팅 및 스토리지 자원에 대해서만 비용을 지불하고, 최대 예상 수요를 기준으로 하드웨어를 미리 구매하지 않기로 했습니다. 이는 클라우드 경제성의 어떤 개념을 보여주는 사례입니까?",
      "choices": [
        "가변 비용(Variable Cost) 모델",
        "규모의 경제",
        "적정 규모 조정(Right-sizing)",
        "BYOL(Bring Your Own License)"
      ],
      "answer": [
        0
      ],
      "explanation": "실제 사용한 만큼만 지불하고 미리 대규모 자본을 투입해 하드웨어를 구매하지 않는 것은 가변 비용 모델의 핵심 특징입니다. 규모의 경제는 대량 구매로 인한 단가 절감, 적정 규모 조정은 기존 리소스 사용률 최적화, BYOL은 라이선싱 전략으로 이 시나리오의 핵심과는 다릅니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q026",
      "taskId": "1.4",
      "type": "single",
      "question": "한 기업이 총소유비용(TCO)을 비교한 결과, 온프레미스 환경에서는 하드웨어 구매 외에도 전력, 냉각, 데이터센터 공간, 물리 보안 인력 등에 상당한 비용이 든다는 것을 확인했습니다. 클라우드로 전환하면 이러한 항목들이 어떻게 됩니까?",
      "choices": [
        "AWS의 사용 요금(가변 비용)으로 대체되어 기업이 직접 관리할 필요가 없어진다",
        "모든 항목이 그대로 유지되며 기업이 별도로 계속 관리해야 한다",
        "전력 및 냉각 비용만 사라지고 물리 보안 비용은 그대로 유지된다",
        "하드웨어 구매 비용만 사라지고 나머지 항목은 온프레미스와 동일하게 발생한다"
      ],
      "answer": [
        0
      ],
      "explanation": "클라우드로 전환하면 전력, 냉각, 물리 보안, 데이터센터 공간 등 온프레미스에서 발생하던 다양한 숨은 비용이 AWS의 사용 요금이라는 가변 비용으로 대체되어 기업이 직접 관리할 필요가 없어집니다. 일부 항목만 사라진다거나 모든 항목이 그대로 유지된다는 설명은 클라우드 경제성의 핵심 이점을 반영하지 못한 잘못된 설명입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q027",
      "taskId": "1.4",
      "type": "single",
      "question": "한 기업이 온프레미스에서 이미 다년 계약으로 구매해 둔 상용 데이터베이스 소프트웨어 라이선스를 보유하고 있으며, 클라우드로 이전할 때 이 라이선스를 그대로 활용해 추가 비용을 절감하고 싶어합니다. 이 요구사항에 가장 적합한 라이선싱 전략은 무엇입니까?",
      "choices": [
        "BYOL(Bring Your Own License)",
        "License Included",
        "온디맨드 요금제",
        "예약 인스턴스 요금제"
      ],
      "answer": [
        0
      ],
      "explanation": "이미 보유한 라이선스를 클라우드 환경으로 그대로 가져와 사용하는 방식이 BYOL의 정의입니다. License Included는 라이선스 비용이 사용 요금에 포함되어 별도 라이선스 없이 사용하는 방식이며, 온디맨드나 예약 인스턴스는 컴퓨팅 요금제 옵션으로 라이선싱 전략과는 별개의 개념입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q028",
      "taskId": "1.4",
      "type": "single",
      "question": "한 회사가 클라우드 사용 현황을 분석한 결과, 여러 EC2 인스턴스의 CPU 및 메모리 사용률이 지속적으로 낮게 나타나 실제 필요보다 과다하게 프로비저닝되어 있음을 발견했습니다. 이 회사가 비용을 줄이기 위해 취해야 할 조치로 가장 적절한 것은 무엇입니까?",
      "choices": [
        "사용률 데이터를 기반으로 인스턴스 유형을 더 작은 사양으로 적정 규모 조정(Right-sizing)한다",
        "모든 인스턴스를 온프레미스 데이터센터로 되돌린다",
        "인스턴스 유형과 관계없이 예약 인스턴스로만 전환하면 자동으로 사용률이 최적화된다",
        "BYOL 라이선스를 추가로 구매해 소프트웨어 비용을 낮춘다"
      ],
      "answer": [
        0
      ],
      "explanation": "실제 사용률 데이터를 근거로 과다 프로비저닝된 리소스를 필요한 만큼으로 조정하는 것이 적정 규모 조정의 정의이며 이 시나리오에 가장 적합한 해법입니다. 온프레미스로 되돌리는 것은 문제 해결과 무관하고, 예약 인스턴스 전환 자체가 사용률을 최적화하지는 않으며, BYOL은 라이선싱 문제이지 사용률 문제와는 관련이 없습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q029",
      "taskId": "1.4",
      "type": "single",
      "question": "AWS는 수백만 고객의 컴퓨팅 및 스토리지 수요를 통합해 대규모로 인프라를 구축하고 운영함으로써 단가를 낮추고, 이 절감분을 지속적인 요금 인하 형태로 고객에게 전달합니다. 이 개념을 가장 정확히 설명하는 용어는 무엇입니까?",
      "choices": [
        "규모의 경제(Economies of Scale)",
        "적정 규모 조정(Right-sizing)",
        "가변 비용(Variable Cost)",
        "BYOL(Bring Your Own License)"
      ],
      "answer": [
        0
      ],
      "explanation": "대규모 수요 통합을 통해 단가를 낮추고 이를 고객에게 전달하는 것은 규모의 경제의 정의입니다. 적정 규모 조정은 개별 리소스 사용률 최적화, 가변 비용은 사용한 만큼 지불하는 요금 구조, BYOL은 라이선싱 전략을 의미하므로 이 설명과는 다릅니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q030",
      "taskId": "1.4",
      "type": "multi",
      "question": "기업이 온프레미스에서 AWS 클라우드로 전환할 때 전체 비용 절감에 기여할 수 있는 요인으로 옳은 것을 모두 고르십시오.",
      "choices": [
        "반복적인 운영 작업을 자동화하여 관련 인건비와 인적 오류를 줄인다",
        "실제 사용률 데이터를 기반으로 리소스를 적정 규모로 조정한다",
        "AWS의 대규모 구매력에 기반한 규모의 경제 효과를 요금 인하 형태로 누린다",
        "모든 상용 소프트웨어 라이선스를 AWS가 항상 무료로 제공한다",
        "온프레미스 데이터센터 건설 비용을 AWS가 고객에게 별도로 청구한다"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "자동화를 통한 인건비 절감, 적정 규모 조정, 규모의 경제는 클라우드 전환 시 실제로 비용 절감에 기여하는 요인입니다. AWS가 모든 소프트웨어 라이선스를 항상 무료로 제공한다는 설명과 온프레미스 데이터센터 건설 비용을 AWS가 별도로 청구한다는 설명은 실제 클라우드 경제성 개념과 맞지 않는 잘못된 진술입니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d1-q031",
      "taskId": "1.4",
      "type": "multi",
      "question": "AWS의 소프트웨어 라이선싱 전략인 License Included와 BYOL(Bring Your Own License)에 대한 설명으로 옳은 것을 모두 고르십시오.",
      "choices": [
        "License Included는 소프트웨어 라이선스 비용이 AWS 사용 요금에 포함되어 있어 별도 라이선스 계약 없이 사용할 수 있다",
        "BYOL은 기업이 이미 보유하고 있는 소프트웨어 라이선스를 클라우드 환경으로 가져와 활용하는 방식이다",
        "BYOL을 사용하면 소프트웨어 벤더와의 라이선스 계약이나 준수 요건을 전혀 신경 쓸 필요가 없다",
        "License Included 옵션을 선택하면 해당 소프트웨어를 항상 무제한으로 무료 사용할 수 있다",
        "두 전략 모두 기업의 기존 라이선스 보유 현황에 따라 비용 효율성이 달라질 수 있다"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "License Included는 라이선스 비용이 요금에 포함된 방식이고, BYOL은 기존 보유 라이선스를 재사용하는 방식이며, 두 전략의 비용 효율성은 기업이 이미 보유한 라이선스 현황에 따라 달라집니다. BYOL을 사용해도 라이선스 계약 및 준수 요건은 여전히 기업의 책임이며, License Included 역시 사용 요금 자체는 계속 청구되므로 '무료 무제한 사용'이라는 설명은 잘못되었습니다.",
      "domainId": "d1"
    },
    {
      "id": "clf-d2-q001",
      "taskId": "2.1",
      "type": "single",
      "question": "AWS 공동 책임 모델에서 '클라우드의 보안(Security of the Cloud)'을 책임지는 주체는 누구인가?",
      "choices": [
        "AWS",
        "고객",
        "제3자 규정 준수 감사 기관",
        "AWS와 고객이 동등하게 분담"
      ],
      "answer": [
        0
      ],
      "explanation": "클라우드 자체의 보안, 즉 물리적 데이터센터, 하드웨어, 네트워크, 가상화 인프라의 보안은 AWS의 책임입니다. 고객은 '클라우드 내 보안(Security in the Cloud)'을 담당합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q002",
      "taskId": "2.1",
      "type": "single",
      "question": "한 기업이 Amazon EC2 인스턴스에 직접 웹 서버를 설치해 운영하고 있습니다. 다음 중 이 기업(고객)이 책임져야 할 항목은?",
      "choices": [
        "게스트 운영체제의 보안 패치 적용",
        "EC2가 실행되는 물리 서버의 유지보수",
        "AWS 리전 간 네트워크 백본 관리",
        "데이터센터의 물리적 출입 통제"
      ],
      "answer": [
        0
      ],
      "explanation": "EC2는 IaaS 서비스이므로 게스트 OS 패치, 방화벽 구성, 애플리케이션 보안은 고객의 책임입니다. 물리 서버, 네트워크 백본, 데이터센터 출입 통제는 AWS의 책임입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q003",
      "taskId": "2.1",
      "type": "single",
      "question": "Amazon RDS와 같은 관리형 데이터베이스 서비스를 사용할 때 AWS가 대신 책임지는 항목으로 가장 적절한 것은?",
      "choices": [
        "데이터베이스 엔진 소프트웨어 패치 적용",
        "데이터베이스에 저장된 데이터의 암호화 여부 결정",
        "데이터베이스 접근을 허용할 사용자 관리",
        "애플리케이션에서 사용하는 SQL 쿼리 작성"
      ],
      "answer": [
        0
      ],
      "explanation": "RDS는 관리형 서비스이므로 AWS가 DB 엔진 패치, 백업 인프라, 하드웨어 유지보수를 담당합니다. 반면 데이터 암호화 여부 결정, 접근 관리, 애플리케이션 로직은 여전히 고객의 책임입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q004",
      "taskId": "2.1",
      "type": "single",
      "question": "다음 중 서비스 관리 수준에 따른 공동 책임 모델 설명으로 가장 옳은 것은?",
      "choices": [
        "서버리스 서비스일수록 AWS가 담당하는 인프라 관리 범위가 넓어져 고객의 책임이 줄어든다",
        "모든 AWS 서비스는 서비스 종류와 관계없이 책임 분담 비율이 동일하다",
        "관리형 서비스를 사용하면 고객은 데이터 보안에 대한 책임에서 완전히 벗어난다",
        "IaaS 서비스는 서버리스 서비스보다 고객의 관리 부담이 적다"
      ],
      "answer": [
        0
      ],
      "explanation": "Lambda 같은 서버리스 서비스는 AWS가 서버, 런타임, OS까지 관리하므로 고객의 책임 범위가 EC2 같은 IaaS보다 좁아집니다. 다만 데이터 보안과 액세스 관리는 서비스 유형과 관계없이 항상 고객의 책임입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q005",
      "taskId": "2.1",
      "type": "single",
      "question": "한 회사가 S3 버킷 정책을 잘못 구성하여 버킷이 인터넷에 공개되었고, 결과적으로 데이터가 유출되었습니다. 공동 책임 모델에 따르면 이 사고의 책임은 누구에게 있는가?",
      "choices": [
        "버킷 정책 설정을 수행한 고객",
        "AWS",
        "AWS와 고객이 조사 후 소송을 통해서만 결정됨",
        "S3 서비스 자체의 결함이므로 책임 소재가 없음"
      ],
      "answer": [
        0
      ],
      "explanation": "S3 버킷 정책이나 액세스 제어 목록(ACL) 구성은 '클라우드 내 보안' 영역으로 고객의 책임입니다. AWS는 S3 인프라 자체의 가용성과 물리적 보안을 책임집니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q006",
      "taskId": "2.1",
      "type": "single",
      "question": "다음 중 서비스 종류와 관계없이 항상 고객이 책임지는 영역은 무엇인가?",
      "choices": [
        "IAM을 통한 사용자 자격 증명 및 액세스 관리",
        "AWS 데이터센터의 화재 감지 시스템 유지보수",
        "글로벌 네트워크 백본의 물리적 배선",
        "하이퍼바이저 소프트웨어의 보안 패치"
      ],
      "answer": [
        0
      ],
      "explanation": "어떤 AWS 서비스를 사용하든 데이터 분류, 암호화 결정, IAM을 통한 사용자·권한 관리는 항상 고객의 책임입니다. 나머지 항목은 AWS 인프라 영역으로 AWS의 책임입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q007",
      "taskId": "2.1",
      "type": "single",
      "question": "공동 책임 모델을 도입한 주된 목적으로 가장 적절한 것은?",
      "choices": [
        "AWS와 고객 각각의 보안 책임 범위를 명확히 하여 보안 공백을 줄이기 위해",
        "고객이 모든 보안 업무를 AWS에 위임할 수 있도록 하기 위해",
        "AWS가 규정 준수 인증을 받을 필요가 없도록 하기 위해",
        "고객이 물리적 데이터센터에 직접 접근할 수 있도록 하기 위해"
      ],
      "answer": [
        0
      ],
      "explanation": "공동 책임 모델의 핵심 목적은 AWS와 고객 각자의 보안 책임 범위를 명확히 구분해 보안 공백이나 책임 소재 혼란을 방지하는 것입니다. 고객이 보안 책임에서 완전히 벗어나는 것이 아닙니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q008",
      "taskId": "2.1",
      "type": "multi",
      "question": "다음 중 AWS가 공동 책임 모델에서 책임지는 항목을 모두 고르시오.",
      "choices": [
        "AWS 데이터센터의 물리적 보안",
        "글로벌 인프라(리전, 가용 영역, 엣지 로케이션)의 유지보수",
        "고객이 EC2에 설치한 애플리케이션의 취약점 관리",
        "고객 데이터의 암호화 키 사용 여부 결정",
        "S3 버킷의 액세스 정책 구성"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "데이터센터의 물리적 보안과 글로벌 인프라 유지보수는 AWS의 책임 영역입니다. 애플리케이션 취약점 관리, 암호화 여부 결정, 버킷 정책 구성은 모두 고객의 책임입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q009",
      "taskId": "2.1",
      "type": "multi",
      "question": "다음 중 고객이 책임져야 하는 항목을 모두 고르시오.",
      "choices": [
        "IAM 사용자 및 정책 관리",
        "EC2 게스트 OS의 보안 패치(비관리형 서비스의 경우)",
        "데이터 분류 및 전송·저장 시 암호화 여부 결정",
        "AWS 글로벌 네트워크 인프라 유지보수",
        "AWS 데이터센터의 물리적 접근 통제"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "IAM 관리, 게스트 OS 패치(비관리형 서비스), 데이터 분류·암호화 결정은 모두 고객의 책임입니다. 글로벌 네트워크 인프라와 데이터센터 물리적 접근 통제는 AWS의 책임입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q010",
      "taskId": "2.1",
      "type": "multi",
      "question": "다음 중 관리형 서비스에 해당하여 AWS가 기본 인프라(OS, 런타임 등) 관리 책임을 더 많이 지는 서비스를 모두 고르시오.",
      "choices": [
        "Amazon RDS",
        "AWS Lambda",
        "Amazon EC2",
        "Amazon DynamoDB",
        "AWS Outposts"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "RDS, Lambda, DynamoDB는 AWS가 OS나 런타임, 서버 관리를 대신 담당하는 관리형 서비스입니다. EC2는 고객이 게스트 OS를 직접 관리하는 IaaS이며, Outposts는 온프레미스에 설치되는 하드웨어로 고객의 책임 범위가 더 넓습니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q011",
      "taskId": "2.2",
      "type": "single",
      "question": "규정 준수 보고서(SOC, ISO 27001 등)와 AWS 계약 문서를 온디맨드로 다운로드할 수 있는 서비스는 무엇인가?",
      "choices": [
        "AWS Artifact",
        "AWS Config",
        "AWS CloudTrail",
        "AWS Trusted Advisor"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Artifact는 규정 준수 보고서와 계약 문서를 언제든 무료로 열람·다운로드할 수 있는 셀프서비스 포털입니다. CloudTrail, Config, Trusted Advisor는 각각 감사 로그, 구성 추적, 리소스 점검을 담당합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q012",
      "taskId": "2.2",
      "type": "single",
      "question": "저장 데이터(data at rest)를 암호화할 때 AWS에서 암호화 키를 생성하고 관리하는 데 사용하는 서비스는?",
      "choices": [
        "AWS Key Management Service(KMS)",
        "AWS CloudTrail",
        "Amazon Inspector",
        "AWS Config"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS KMS는 저장 데이터 암호화에 사용되는 암호화 키를 생성, 관리, 교체할 수 있는 서비스입니다. CloudTrail은 API 호출 기록, Inspector는 취약점 스캔, Config는 리소스 구성 추적을 담당합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q013",
      "taskId": "2.2",
      "type": "single",
      "question": "회사가 계정 내에서 발생한 모든 API 호출 이력(누가 언제 어떤 작업을 수행했는지)을 감사 목적으로 기록하고 싶습니다. 가장 적절한 서비스는?",
      "choices": [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Config",
        "AWS Trusted Advisor"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS CloudTrail은 계정 내 모든 API 호출과 사용자 활동을 기록하여 감사와 포렌식 분석에 활용됩니다. CloudWatch는 성능 모니터링, Config는 구성 변경 추적을 담당합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q014",
      "taskId": "2.2",
      "type": "single",
      "question": "리소스의 구성 변경 이력을 추적하고 특정 규정 준수 규칙(예: '모든 EBS 볼륨은 암호화되어야 한다')을 위반하는 리소스를 자동으로 평가하는 서비스는?",
      "choices": [
        "AWS Config",
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Audit Manager"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Config는 리소스 구성 변경 이력을 기록하고 사전 정의된 규칙에 따라 규정 준수 여부를 평가합니다. CloudTrail은 API 호출 기록, CloudWatch는 모니터링, Audit Manager는 감사 증거 수집에 특화되어 있습니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q015",
      "taskId": "2.2",
      "type": "single",
      "question": "Amazon GuardDuty에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "VPC 흐름 로그, DNS 로그, CloudTrail 이벤트 등을 분석해 악의적이거나 비정상적인 활동을 탐지하는 위협 탐지 서비스",
        "웹 애플리케이션 계층의 SQL 인젝션 공격을 차단하는 방화벽 서비스",
        "리소스 구성 변경 이력만을 기록하는 서비스",
        "가상 서버의 운영체제 취약점을 스캔하는 서비스"
      ],
      "answer": [
        0
      ],
      "explanation": "GuardDuty는 다양한 로그 소스를 머신러닝으로 분석해 이상 징후와 위협을 탐지하는 서비스입니다. SQL 인젝션 차단은 WAF, 구성 이력 추적은 Config, 취약점 스캔은 Inspector의 역할입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q016",
      "taskId": "2.2",
      "type": "single",
      "question": "다음 중 전송 중(in transit) 데이터를 보호하기 위해 일반적으로 사용하는 기술은?",
      "choices": [
        "TLS/SSL을 통한 암호화 통신",
        "S3 버킷 버전 관리",
        "IAM 액세스 키 교체",
        "EBS 스냅샷 생성"
      ],
      "answer": [
        0
      ],
      "explanation": "전송 중 데이터는 네트워크를 이동하는 동안의 데이터를 의미하며, TLS/SSL 같은 암호화 프로토콜로 보호합니다. 버전 관리, 액세스 키 교체, 스냅샷은 각각 다른 목적을 위한 기능입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q017",
      "taskId": "2.2",
      "type": "single",
      "question": "규정 준수 감사에 필요한 증거(evidence)를 지속적이고 자동으로 수집하여 감사 준비 부담을 줄여주는 서비스는?",
      "choices": [
        "AWS Audit Manager",
        "AWS Shield",
        "Amazon Inspector",
        "AWS Firewall Manager"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Audit Manager는 규정 준수 프레임워크에 맞춰 감사 증거를 자동으로 지속적으로 수집해 감사 준비를 간소화합니다. Shield는 DDoS 방어, Inspector는 취약점 스캔, Firewall Manager는 방화벽 정책 중앙 관리 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q018",
      "taskId": "2.2",
      "type": "multi",
      "question": "다음 중 계정의 보안 및 규정 준수 상태를 모니터링·감사하는 데 사용되는 서비스를 모두 고르시오.",
      "choices": [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Config",
        "Amazon EC2",
        "Amazon S3"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "CloudTrail, CloudWatch, Config는 각각 API 호출 기록, 모니터링/로그, 구성 변경 추적을 통해 거버넌스와 감사를 지원합니다. EC2와 S3는 컴퓨팅과 스토리지를 위한 서비스로 감사 도구가 아닙니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q019",
      "taskId": "2.2",
      "type": "multi",
      "question": "다음 중 AWS Shield에 대한 설명으로 옳은 것을 모두 고르시오.",
      "choices": [
        "Shield Standard는 모든 AWS 고객에게 별도 비용 없이 기본 제공된다",
        "Shield는 주로 DDoS(분산 서비스 거부) 공격으로부터 보호하기 위한 서비스이다",
        "Shield Advanced는 24/7 DDoS 대응팀(DRT)의 지원을 받을 수 있다",
        "Shield는 SQL 인젝션과 같은 애플리케이션 취약점을 스캔하는 서비스이다",
        "Shield는 IAM 사용자 자격 증명을 관리하는 서비스이다"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Shield Standard는 무료로 기본 제공되며, Shield의 핵심 목적은 DDoS 공격 방어입니다. Shield Advanced는 유료로 더 정교한 방어와 DRT 지원을 제공합니다. SQL 인젝션 스캔이나 IAM 관리는 Shield의 기능이 아닙니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q020",
      "taskId": "2.2",
      "type": "multi",
      "question": "다음 중 데이터 암호화와 관련하여 올바른 설명을 모두 고르시오.",
      "choices": [
        "저장 데이터 암호화는 AWS KMS를 이용해 암호화 키를 관리할 수 있다",
        "전송 중 데이터는 TLS와 같은 프로토콜로 보호할 수 있다",
        "암호화는 클라우드 보안의 이점 중 하나로 데이터 기밀성을 높인다",
        "암호화를 적용하면 IAM 정책 설정이 필요 없어진다",
        "AWS는 모든 서비스에서 암호화 옵션을 전혀 제공하지 않는다"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "KMS를 통한 저장 데이터 암호화와 TLS를 통한 전송 중 데이터 보호는 클라우드 보안의 대표적인 이점입니다. 암호화는 IAM을 통한 액세스 관리를 대체하지 않으며, AWS는 다양한 서비스에서 암호화 옵션을 제공합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q021",
      "taskId": "2.3",
      "type": "single",
      "question": "AWS 계정을 처음 생성했을 때 만들어지는, 계정에 대한 모든 권한을 가진 계정은 무엇인가?",
      "choices": [
        "루트 사용자",
        "IAM 사용자",
        "IAM 역할",
        "게스트 사용자"
      ],
      "answer": [
        0
      ],
      "explanation": "루트 사용자는 계정 생성 시 이메일 주소로 만들어지는 계정으로, 해당 계정의 모든 리소스와 설정에 대한 무제한 권한을 가집니다. 일상 업무에는 IAM 사용자나 역할을 사용하는 것이 권장됩니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q022",
      "taskId": "2.3",
      "type": "single",
      "question": "루트 사용자 보호를 위한 모범 사례로 가장 적절한 것은?",
      "choices": [
        "루트 사용자에 다중 인증(MFA)을 설정하고 일상 업무에는 사용하지 않는다",
        "루트 사용자 자격 증명을 팀원 전체와 공유하여 편의성을 높인다",
        "루트 사용자로 매일 로그인하여 모든 리소스를 관리한다",
        "루트 사용자의 액세스 키를 애플리케이션 코드에 하드코딩해 사용한다"
      ],
      "answer": [
        0
      ],
      "explanation": "루트 사용자는 MFA로 보호하고 계정 종료 등 극히 제한된 작업에만 사용해야 합니다. 자격 증명 공유, 일상 업무 사용, 코드에 하드코딩은 모두 심각한 보안 위험을 초래합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q023",
      "taskId": "2.3",
      "type": "single",
      "question": "최소 권한 원칙(Principle of Least Privilege)에 대한 설명으로 가장 옳은 것은?",
      "choices": [
        "사용자나 역할에게 업무 수행에 필요한 최소한의 권한만 부여하는 것",
        "모든 사용자에게 관리자 권한을 부여해 업무 효율을 높이는 것",
        "가능한 한 많은 권한을 미리 부여해 향후 요청을 줄이는 것",
        "루트 사용자 권한을 모든 IAM 사용자에게 동일하게 부여하는 것"
      ],
      "answer": [
        0
      ],
      "explanation": "최소 권한 원칙은 보안 위험을 줄이기 위해 각 사용자나 역할에게 업무에 꼭 필요한 권한만 부여하는 것입니다. 불필요하게 넓은 권한을 미리 부여하는 것은 오히려 보안 사고 위험을 높입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q024",
      "taskId": "2.3",
      "type": "single",
      "question": "여러 개의 AWS 계정과 사내 Active Directory를 사용하는 조직이 중앙에서 SSO(Single Sign-On) 방식으로 직원들의 접근을 관리하고 싶습니다. 가장 적절한 서비스는?",
      "choices": [
        "AWS IAM Identity Center",
        "AWS Secrets Manager",
        "AWS Shield",
        "Amazon GuardDuty"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS IAM Identity Center는 여러 AWS 계정과 애플리케이션에 대한 SSO 및 페더레이션 접근을 중앙에서 관리할 수 있게 해줍니다. Secrets Manager는 비밀 정보 저장, Shield는 DDoS 방어, GuardDuty는 위협 탐지 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q025",
      "taskId": "2.3",
      "type": "single",
      "question": "애플리케이션이 데이터베이스에 접속할 때 필요한 비밀번호를 코드에 직접 넣지 않고 안전하게 저장하며 자동 교체(rotation)까지 지원받고 싶습니다. 가장 적절한 서비스는?",
      "choices": [
        "AWS Secrets Manager",
        "AWS CloudTrail",
        "Amazon Inspector",
        "AWS WAF"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Secrets Manager는 데이터베이스 자격 증명 등 비밀 정보를 안전하게 저장하고 정기적인 자동 교체 기능까지 제공합니다. CloudTrail, Inspector, WAF는 각각 감사, 취약점 스캔, 웹 방화벽 용도의 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q026",
      "taskId": "2.3",
      "type": "single",
      "question": "다음 중 IAM 그룹을 활용한 권한 관리 방식으로 가장 바람직한 것은?",
      "choices": [
        "동일한 업무를 수행하는 사용자들을 그룹으로 묶고 그룹에 정책을 연결한다",
        "모든 사용자에게 개별적으로 동일한 정책을 반복해서 연결한다",
        "그룹을 사용하지 않고 각 사용자에게 루트 권한을 부여한다",
        "정책은 역할(Role)에만 연결할 수 있고 그룹에는 연결할 수 없다"
      ],
      "answer": [
        0
      ],
      "explanation": "업무가 비슷한 사용자들을 그룹으로 묶고 그룹 단위로 정책을 연결하면 권한 관리가 훨씬 효율적이고 일관성 있게 유지됩니다. 정책은 사용자, 그룹, 역할 모두에 연결할 수 있습니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q027",
      "taskId": "2.3",
      "type": "single",
      "question": "다음 중 루트 사용자만 수행할 수 있는 작업에 해당하는 것은?",
      "choices": [
        "AWS 계정 종료",
        "S3 버킷 생성",
        "EC2 인스턴스 시작",
        "IAM 사용자 비밀번호 재설정"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS 계정 종료와 같이 계정 전체에 영향을 미치는 극히 제한된 작업은 루트 사용자만 수행할 수 있습니다. 나머지 작업들은 적절한 권한을 가진 IAM 사용자나 역할로도 수행할 수 있습니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q028",
      "taskId": "2.3",
      "type": "multi",
      "question": "다음 중 사용자 인증을 강화하는 방법으로 옳은 것을 모두 고르시오.",
      "choices": [
        "다중 인증(MFA) 활성화",
        "IAM Identity Center를 통한 페더레이션 로그인 구성",
        "크로스 계정 역할을 이용한 임시 자격 증명 사용",
        "모든 사용자에게 동일한 비밀번호를 공유하여 사용",
        "루트 사용자 자격 증명으로 일상 업무 수행"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "MFA, 페더레이션 SSO, 크로스 계정 역할은 모두 인증을 강화하고 자격 증명 노출 위험을 줄이는 방법입니다. 비밀번호 공유와 루트 사용자의 일상적 사용은 심각한 보안 위험을 초래합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q029",
      "taskId": "2.3",
      "type": "multi",
      "question": "다음 중 자격 증명 및 비밀 정보를 안전하게 저장·관리하는 데 사용할 수 있는 AWS 서비스를 모두 고르시오.",
      "choices": [
        "AWS Secrets Manager",
        "AWS Systems Manager Parameter Store",
        "Amazon GuardDuty",
        "AWS Shield",
        "AWS Config"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "Secrets Manager와 Systems Manager Parameter Store는 비밀번호, API 키 등의 자격 증명을 안전하게 저장하고 관리하는 데 사용됩니다. GuardDuty, Shield, Config는 각각 위협 탐지, DDoS 방어, 구성 추적을 위한 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q030",
      "taskId": "2.3",
      "type": "multi",
      "question": "다음 중 페더레이션(Federation) 및 SSO와 관련된 설명으로 옳은 것을 모두 고르시오.",
      "choices": [
        "페더레이션을 사용하면 기존 사내 자격 증명(예: Active Directory)으로 AWS 리소스에 접근할 수 있다",
        "IAM Identity Center는 여러 AWS 계정에 대한 SSO 접근을 중앙에서 관리할 수 있다",
        "페더레이션 사용자는 반드시 IAM 사용자 계정을 별도로 생성해야만 AWS에 접근할 수 있다",
        "크로스 계정 역할은 다른 계정의 신뢰할 수 있는 사용자에게 임시 자격 증명을 제공하는 방법 중 하나이다",
        "페더레이션은 루트 사용자에게만 적용되는 기능이다"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "페더레이션은 기존 사내 디렉터리 자격 증명으로 임시 보안 자격 증명을 발급받아 AWS에 접근하는 방식이며, 별도의 IAM 사용자 계정 생성이 필요하지 않습니다. IAM Identity Center는 여러 계정에 대한 SSO를 지원하고, 크로스 계정 역할도 대표적인 페더레이션 방식입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q031",
      "taskId": "2.4",
      "type": "single",
      "question": "웹 애플리케이션에 대한 SQL 인젝션, 크로스 사이트 스크립팅(XSS) 등의 공격을 차단하기 위해 사용하는 서비스는?",
      "choices": [
        "AWS WAF",
        "AWS Shield",
        "Amazon GuardDuty",
        "AWS Config"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS WAF는 웹 애플리케이션 계층에서 발생하는 SQL 인젝션, XSS 등의 공격을 차단하는 규칙 기반 웹 방화벽입니다. Shield는 DDoS 방어, GuardDuty는 위협 탐지, Config는 구성 추적 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q032",
      "taskId": "2.4",
      "type": "single",
      "question": "여러 개의 AWS 계정을 운영하는 조직이 모든 계정에 동일한 WAF 규칙과 보안 그룹 정책을 중앙에서 한 번에 적용하고 관리하고 싶습니다. 가장 적절한 서비스는?",
      "choices": [
        "AWS Firewall Manager",
        "AWS Trusted Advisor",
        "Amazon Inspector",
        "AWS Artifact"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Firewall Manager는 여러 계정과 리소스에 걸쳐 WAF 규칙, Shield Advanced 보호, 보안 그룹 정책 등을 중앙에서 일괄 관리할 수 있게 해줍니다. Trusted Advisor는 계정 점검, Inspector는 취약점 스캔, Artifact는 규정 준수 문서 제공 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q033",
      "taskId": "2.4",
      "type": "single",
      "question": "계정의 보안, 비용 최적화, 성능, 내결함성, 서비스 한도 등을 점검하고 개선 권고 사항을 제공하는 서비스는?",
      "choices": [
        "AWS Trusted Advisor",
        "Amazon GuardDuty",
        "AWS Shield",
        "AWS WAF"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Trusted Advisor는 보안, 비용 최적화, 성능, 내결함성, 서비스 한도의 5가지 범주에서 계정을 점검하고 개선 권고를 제공합니다. GuardDuty, Shield, WAF는 각각 위협 탐지, DDoS 방어, 웹 방화벽에 특화된 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q034",
      "taskId": "2.4",
      "type": "single",
      "question": "타사(서드파티) 보안 소프트웨어(예: 방화벽, 안티바이러스 솔루션)를 검색하고 AWS 환경에 구매·배포할 수 있는 곳은?",
      "choices": [
        "AWS Marketplace",
        "AWS Artifact",
        "AWS Trusted Advisor",
        "AWS Config"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Marketplace는 다양한 서드파티 소프트웨어 제품을 검색, 구매, 배포할 수 있는 디지털 카탈로그입니다. Artifact는 규정 준수 문서, Trusted Advisor는 계정 점검, Config는 구성 추적을 위한 서비스입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q035",
      "taskId": "2.4",
      "type": "single",
      "question": "AWS 서비스 이용 중 발생하는 일반적인 기술 질문에 대한 공식 답변과 문제 해결 가이드를 모아둔 자료는?",
      "choices": [
        "AWS Knowledge Center",
        "AWS Security Blog",
        "AWS Artifact",
        "AWS Well-Architected Tool"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Knowledge Center는 고객들이 자주 묻는 기술적인 질문에 대한 공식 답변과 문제 해결 방법을 모아둔 자료입니다. Security Blog는 최신 보안 소식, Artifact는 규정 준수 문서, Well-Architected Tool은 아키텍처 검토 도구입니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q036",
      "taskId": "2.4",
      "type": "single",
      "question": "다음 중 대규모 DDoS(분산 서비스 거부) 공격으로부터 네트워크 및 애플리케이션 계층을 보호하기 위해 사용하는 서비스는?",
      "choices": [
        "AWS Shield",
        "AWS WAF",
        "Amazon Inspector",
        "AWS Config"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Shield는 DDoS 공격으로부터 네트워크와 애플리케이션을 보호하기 위해 설계된 서비스입니다. WAF는 애플리케이션 계층의 웹 공격 차단, Inspector는 취약점 스캔, Config는 구성 추적을 담당합니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q037",
      "taskId": "2.4",
      "type": "multi",
      "question": "다음 중 AWS가 제공하는 보안 관련 서비스를 모두 고르시오.",
      "choices": [
        "AWS WAF",
        "AWS Firewall Manager",
        "Amazon GuardDuty",
        "Amazon RDS",
        "Amazon EC2"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "WAF, Firewall Manager, GuardDuty는 모두 보안을 목적으로 제공되는 AWS 서비스입니다. RDS와 EC2는 각각 데이터베이스와 컴퓨팅을 위한 서비스로 보안 전용 서비스는 아닙니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q038",
      "taskId": "2.4",
      "type": "multi",
      "question": "다음 중 최신 보안 위협 동향이나 모범 사례에 대한 정보를 얻을 수 있는 공식 출처를 모두 고르시오.",
      "choices": [
        "AWS Security Blog",
        "AWS Knowledge Center",
        "AWS Marketplace 리뷰 게시판",
        "AWS 공식 문서(Documentation)",
        "경쟁 클라우드 업체의 블로그"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "AWS Security Blog, Knowledge Center, 공식 문서는 모두 AWS가 직접 제공하는 신뢰할 수 있는 보안 정보 출처입니다. Marketplace 리뷰 게시판이나 경쟁 업체의 블로그는 공식 보안 정보 출처로 적절하지 않습니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d2-q039",
      "taskId": "2.4",
      "type": "multi",
      "question": "다음 중 계정의 보안 취약점이나 개선이 필요한 사항을 점검하기 위해 사용할 수 있는 서비스를 모두 고르시오.",
      "choices": [
        "AWS Trusted Advisor",
        "Amazon Inspector",
        "Amazon GuardDuty",
        "AWS Direct Connect",
        "Amazon Route 53"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Trusted Advisor는 계정 전반의 모범 사례 준수 여부를, Inspector는 워크로드의 취약점을, GuardDuty는 위협과 이상 행위를 점검합니다. Direct Connect와 Route 53은 각각 전용 네트워크 연결과 DNS 서비스로 보안 점검 도구가 아닙니다.",
      "domainId": "d2"
    },
    {
      "id": "clf-d3-q001",
      "taskId": "3.1",
      "type": "single",
      "question": "여러 환경(개발/스테이징/운영)에 동일한 인프라 구성을 반복적으로, 일관되게 배포하려는 회사에 가장 적합한 방법은?",
      "choices": [
        "AWS Management Console에서 담당자가 매번 수동으로 리소스를 생성한다",
        "AWS CloudFormation 템플릿으로 인프라를 코드로 정의하여 배포한다",
        "각 담당자에게 설정값을 이메일로 공유해 개별적으로 구성하게 한다",
        "기존 인스턴스를 수동으로 복제한 뒤 담당자가 직접 설정을 변경한다"
      ],
      "answer": [
        1
      ],
      "explanation": "AWS CloudFormation과 같은 IaC(Infrastructure as Code) 도구는 인프라를 코드로 정의해 여러 환경에 동일하게, 반복 가능하게 배포할 수 있게 해준다. 수동 작업은 사람의 실수로 환경 간 불일치가 발생하기 쉬워 반복 배포에는 적합하지 않다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q002",
      "taskId": "3.1",
      "type": "single",
      "question": "다음 중 AWS 리소스에 프로그래밍 방식으로 액세스하는 수단이 아닌 것은?",
      "choices": [
        "AWS CLI(명령줄 인터페이스)",
        "AWS SDK",
        "AWS Management Console",
        "AWS API 직접 호출"
      ],
      "answer": [
        2
      ],
      "explanation": "Management Console은 웹 브라우저에서 마우스로 조작하는 그래픽 사용자 인터페이스(GUI)로, 프로그래밍 방식(코드/스크립트) 액세스에 해당하지 않는다. CLI, SDK, API 호출은 모두 코드나 명령어를 통해 AWS를 제어하는 프로그래밍 방식 액세스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q003",
      "taskId": "3.1",
      "type": "single",
      "question": "Infrastructure as Code(IaC)를 도입할 때 얻을 수 있는 주된 이점은?",
      "choices": [
        "인프라 구성을 코드로 버전 관리하고 일관되게 반복 배포할 수 있다",
        "콘솔 로그인 없이도 AWS 요금이 자동으로 면제된다",
        "물리적 서버 구매 비용이 완전히 사라진다",
        "배포한 리소스가 모든 리전에 자동으로 복제된다"
      ],
      "answer": [
        0
      ],
      "explanation": "IaC의 핵심 가치는 인프라 구성을 코드로 관리함으로써 버전 관리, 검토, 반복 가능한 배포가 가능해진다는 점이다. 다른 보기들은 IaC와 직접적인 관련이 없는 내용이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q004",
      "taskId": "3.1",
      "type": "single",
      "question": "온프레미스 데이터 센터와 AWS 클라우드를 함께 사용하여 인프라를 운영하는 배포 모델은?",
      "choices": [
        "퍼블릭 클라우드 전용 모델",
        "하이브리드 배포 모델",
        "온프레미스 전용 모델",
        "멀티 클라우드 전용 모델"
      ],
      "answer": [
        1
      ],
      "explanation": "하이브리드 배포 모델은 온프레미스 인프라와 AWS 클라우드를 함께 연결하여 사용하는 방식으로, Direct Connect나 Storage Gateway 같은 서비스로 두 환경을 연동한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q005",
      "taskId": "3.1",
      "type": "multi",
      "question": "다음 중 반복 가능하고 자동화된 배포 방식에 해당하는 것을 모두 고르시오.",
      "choices": [
        "AWS CloudFormation 템플릿을 실행하여 스택을 배포한다",
        "AWS Management Console에서 매번 수동으로 클릭하여 리소스를 생성한다",
        "AWS CLI 스크립트를 작성해 동일한 명령을 반복 실행한다",
        "AWS SDK를 이용해 애플리케이션 코드 내에서 리소스를 자동 프로비저닝한다",
        "필요한 설정값을 이메일로 전달해 수작업으로 구성하게 한다"
      ],
      "answer": [
        0,
        2,
        3
      ],
      "explanation": "CloudFormation, CLI 스크립트, SDK 기반 자동화는 모두 코드나 스크립트를 통해 반복 실행이 가능한 방식이다. 반면 콘솔 수동 클릭이나 이메일을 통한 수작업 전달은 사람이 매번 개입해야 하는 일회성 작업에 해당한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q006",
      "taskId": "3.2",
      "type": "single",
      "question": "AWS 리전(Region)에 대한 설명으로 가장 적절한 것은?",
      "choices": [
        "전 세계에 단 하나만 존재하는 데이터센터를 의미한다",
        "하나 이상의 가용 영역으로 구성된, 지리적으로 분리된 영역이다",
        "사용자에게 콘텐츠를 캐싱해 전달하는 위치이다",
        "하나의 물리적 서버 랙을 의미한다"
      ],
      "answer": [
        1
      ],
      "explanation": "리전은 지리적으로 서로 분리된 영역이며, 각 리전은 물리적으로 독립된 하나 이상의 가용 영역(AZ)으로 구성된다. 콘텐츠 캐싱은 엣지 로케이션의 역할이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q007",
      "taskId": "3.2",
      "type": "single",
      "question": "애플리케이션의 고가용성을 높이기 위해 일반적으로 권장되는 아키텍처 방식은?",
      "choices": [
        "하나의 가용 영역에만 모든 리소스를 집중 배치한다",
        "여러 가용 영역에 리소스를 분산하여 배포한다",
        "하나의 EC2 인스턴스에 모든 트래픽을 집중시킨다",
        "가용 영역을 사용하지 않고 온프레미스에서만 운영한다"
      ],
      "answer": [
        1
      ],
      "explanation": "가용 영역들은 물리적으로 분리되어 단일 장애 지점을 공유하지 않으므로, 리소스를 여러 AZ에 분산 배포하면 하나의 AZ에 장애가 발생해도 서비스 가용성을 유지할 수 있다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q008",
      "taskId": "3.2",
      "type": "single",
      "question": "사용자와 지리적으로 가까운 곳에서 콘텐츠를 캐싱하여 지연 시간을 줄이는 데 사용되는 AWS 글로벌 인프라 구성 요소는?",
      "choices": [
        "가용 영역(Availability Zone)",
        "리전(Region)",
        "엣지 로케이션(Edge Location)",
        "가상 프라이빗 클라우드(VPC)"
      ],
      "answer": [
        2
      ],
      "explanation": "엣지 로케이션은 Amazon CloudFront 같은 콘텐츠 전송 서비스가 사용자에게 가까운 위치에서 콘텐츠를 캐싱해 지연 시간을 줄이기 위해 사용하는 시설이며, 리전보다 훨씬 많은 수가 전 세계에 분산되어 있다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q009",
      "taskId": "3.2",
      "type": "single",
      "question": "특정 국가의 법률에 따라 데이터를 반드시 해당 국가 내의 AWS 리전에 저장해야 하는 요구사항과 가장 관련 있는 다중 리전 사용 사례는?",
      "choices": [
        "재해 복구(Disaster Recovery)",
        "지연 시간(Latency) 개선",
        "데이터 주권(Data Sovereignty) 준수",
        "컴퓨팅 비용 절감"
      ],
      "answer": [
        2
      ],
      "explanation": "데이터 주권은 특정 국가나 지역의 법규에 따라 데이터가 물리적으로 보관되어야 하는 위치에 대한 요구사항이며, 이를 준수하기 위해 해당 지역의 리전을 선택하는 것이 다중 리전 전략의 대표적 사용 사례 중 하나이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q010",
      "taskId": "3.2",
      "type": "multi",
      "question": "AWS 가용 영역(Availability Zone)에 대한 설명으로 옳은 것을 모두 고르시오.",
      "choices": [
        "하나의 리전은 여러 개의 가용 영역으로 구성된다",
        "가용 영역들은 서로 물리적으로 분리되어 있어 단일 장애 지점을 공유하지 않는다",
        "가용 영역은 전 세계에 단 하나만 존재한다",
        "가용 영역들 간에는 저지연 네트워크로 연결되어 있다",
        "가용 영역은 엣지 로케이션과 동일한 개념이다"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "리전은 여러 가용 영역으로 구성되며, 각 가용 영역은 독립된 전원/냉각/네트워크를 갖춰 단일 장애 지점을 공유하지 않지만 저지연 전용 네트워크로 서로 연결되어 있다. 가용 영역은 여러 개가 전 세계에 존재하며, 엣지 로케이션과는 다른 개념이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q011",
      "taskId": "3.3",
      "type": "single",
      "question": "서버를 직접 프로비저닝하지 않고 짧은 시간 동안 실행되는 이벤트 기반 코드를 실행하고 싶을 때 가장 적합한 서비스는?",
      "choices": [
        "Amazon EC2",
        "AWS Lambda",
        "Amazon EMR",
        "Amazon WorkSpaces"
      ],
      "answer": [
        1
      ],
      "explanation": "AWS Lambda는 서버 프로비저닝 없이 이벤트에 반응해 코드를 실행하는 완전 서버리스 컴퓨팅 서비스로, 실행된 시간에 대해서만 과금된다. EC2는 상시 실행되는 가상 서버를 직접 관리해야 한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q012",
      "taskId": "3.3",
      "type": "single",
      "question": "대량의 병렬 연산이 필요한 배치 작업에 적합하도록 CPU 성능에 초점을 맞춘 EC2 인스턴스 유형 계열은?",
      "choices": [
        "스토리지 최적화 인스턴스",
        "컴퓨팅 최적화 인스턴스",
        "메모리 최적화 인스턴스",
        "범용 인스턴스"
      ],
      "answer": [
        1
      ],
      "explanation": "컴퓨팅 최적화 인스턴스는 높은 성능의 프로세서를 제공해 배치 처리, 미디어 트랜스코딩, 과학적 모델링 등 CPU 집약적인 작업에 적합하다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q013",
      "taskId": "3.3",
      "type": "single",
      "question": "Kubernetes 기반 컨테이너 오케스트레이션을 관리형 서비스로 제공하는 AWS 서비스는?",
      "choices": [
        "Amazon ECS",
        "Amazon EKS",
        "AWS Fargate",
        "AWS Batch"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon EKS(Elastic Kubernetes Service)는 표준 Kubernetes를 관리형으로 실행할 수 있게 해주는 서비스이다. Amazon ECS는 AWS 자체 컨테이너 오케스트레이션 서비스로 Kubernetes를 사용하지 않는다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q014",
      "taskId": "3.3",
      "type": "single",
      "question": "여러 EC2 인스턴스로 들어오는 트래픽을 자동으로 분산시켜 가용성과 내결함성을 높이는 서비스는?",
      "choices": [
        "Amazon Route 53",
        "Elastic Load Balancing(ELB)",
        "AWS Auto Scaling",
        "Amazon CloudFront"
      ],
      "answer": [
        1
      ],
      "explanation": "Elastic Load Balancing은 여러 대상(EC2 인스턴스 등)에 트래픽을 자동으로 분산시켜 특정 인스턴스에 부하가 집중되지 않도록 하고 가용성을 높인다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q015",
      "taskId": "3.3",
      "type": "multi",
      "question": "클라우드 컴퓨팅의 탄력성(Elasticity)에 대한 설명으로 옳은 것을 모두 고르시오.",
      "choices": [
        "Auto Scaling을 이용하면 트래픽에 따라 인스턴스 수를 자동으로 늘리거나 줄일 수 있다",
        "탄력성은 리소스를 항상 최대 용량으로 고정해 두는 것을 의미한다",
        "수요가 감소하면 불필요한 리소스를 줄여 비용을 절감할 수 있다",
        "탄력성은 온프레미스 환경에서만 구현 가능한 개념이다",
        "탄력성은 클라우드 컴퓨팅이 제공하는 핵심 이점 중 하나이다"
      ],
      "answer": [
        0,
        2,
        4
      ],
      "explanation": "탄력성은 수요 변화에 따라 리소스를 자동으로 늘리거나 줄여 성능과 비용을 최적화하는 클라우드의 핵심 특성이다. 리소스를 항상 최대로 고정하는 것은 탄력성의 반대 개념이며, 이는 온프레미스보다 클라우드에서 훨씬 쉽게 구현된다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q016",
      "taskId": "3.3",
      "type": "multi",
      "question": "서버를 직접 프로비저닝하지 않고 실행할 수 있는 AWS의 서버리스 컴퓨팅 서비스를 모두 고르시오.",
      "choices": [
        "AWS Fargate",
        "Amazon EC2",
        "AWS Lambda",
        "Amazon EMR",
        "Amazon Redshift"
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "AWS Fargate는 컨테이너를, AWS Lambda는 함수 코드를 서버 프로비저닝 없이 실행하는 서버리스 컴퓨팅 서비스이다. EC2, EMR, Redshift는 사용자가 인스턴스나 클러스터 크기 등을 직접 프로비저닝하고 관리해야 한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q017",
      "taskId": "3.4",
      "type": "single",
      "question": "완전관리형 NoSQL 키-값/문서 데이터베이스로, 대규모 확장성과 한 자릿수 밀리초 수준의 낮은 지연 시간을 제공하는 서비스는?",
      "choices": [
        "Amazon RDS",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon ElastiCache"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon DynamoDB는 완전관리형 NoSQL 데이터베이스로 키-값 및 문서 데이터 모델을 지원하며, 대규모 트래픽에서도 일관되게 낮은 지연 시간을 제공하도록 설계되었다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q018",
      "taskId": "3.4",
      "type": "single",
      "question": "MySQL 및 PostgreSQL과 호환되며 AWS가 자체적으로 개발한 고성능·고가용성 관계형 데이터베이스 엔진은?",
      "choices": [
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon Neptune",
        "Amazon DocumentDB"
      ],
      "answer": [
        0
      ],
      "explanation": "Amazon Aurora는 MySQL 및 PostgreSQL과 호환되는 AWS 자체 개발 관계형 데이터베이스 엔진으로, 상용 데이터베이스에 준하는 성능과 오픈소스 수준의 비용 효율성을 제공한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q019",
      "taskId": "3.4",
      "type": "single",
      "question": "온프레미스 데이터베이스를 최소한의 다운타임으로 AWS로 마이그레이션할 때 사용하는 서비스는?",
      "choices": [
        "AWS Snowball",
        "AWS Database Migration Service(DMS)",
        "AWS Glue",
        "Amazon Athena"
      ],
      "answer": [
        1
      ],
      "explanation": "AWS DMS는 소스 데이터베이스가 계속 운영 중인 상태에서도 데이터를 대상 데이터베이스로 이전할 수 있게 해주어 마이그레이션 중 다운타임을 최소화한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q020",
      "taskId": "3.4",
      "type": "single",
      "question": "데이터베이스 조회 성능을 높이기 위해 자주 사용되는 데이터를 메모리에 캐싱하는 서비스는?",
      "choices": [
        "Amazon ElastiCache",
        "Amazon RDS",
        "AWS Backup",
        "Amazon FSx"
      ],
      "answer": [
        0
      ],
      "explanation": "Amazon ElastiCache는 Redis 또는 Memcached 호환 인메모리 캐싱 서비스로, 자주 조회되는 데이터를 메모리에 저장해 데이터베이스 부하를 줄이고 응답 속도를 높인다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q021",
      "taskId": "3.4",
      "type": "multi",
      "question": "EC2 인스턴스에 데이터베이스를 직접 설치해 운영하는 경우와 비교했을 때, Amazon RDS와 같은 관리형 데이터베이스 서비스가 제공하는 이점을 모두 고르시오.",
      "choices": [
        "AWS가 OS 및 데이터베이스 엔진 패치를 관리해준다",
        "자동 백업 및 스냅샷 기능을 기본적으로 제공한다",
        "사용자가 모든 하드웨어와 OS 설치를 직접 수행해야 한다",
        "Multi-AZ 배포를 통한 자동 장애 조치를 손쉽게 구성할 수 있다",
        "사용 가능한 데이터베이스 엔진 선택권이 완전히 사라진다"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "관리형 데이터베이스 서비스는 패치, 백업, 장애 조치 등 운영 부담을 AWS가 대신 처리해준다. 반면 EC2에 직접 DB를 설치하는 경우 하드웨어와 OS 관리를 사용자가 직접 수행해야 하며, RDS는 여전히 여러 데이터베이스 엔진 중에서 선택할 수 있다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q022",
      "taskId": "3.4",
      "type": "multi",
      "question": "이기종 데이터베이스 마이그레이션(예: 온프레미스 Oracle에서 Amazon Aurora PostgreSQL로 전환)을 수행할 때 함께 사용되는 AWS 도구를 모두 고르시오.",
      "choices": [
        "AWS Schema Conversion Tool(SCT)",
        "AWS Database Migration Service(DMS)",
        "Amazon Kinesis",
        "AWS Glue",
        "Amazon Comprehend"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "이기종 마이그레이션에서는 먼저 AWS SCT로 소스와 대상 데이터베이스 간 스키마 차이를 변환하고, 이후 AWS DMS로 실제 데이터를 이전하는 것이 일반적인 절차이다. Kinesis, Glue, Comprehend는 각각 스트리밍 처리, ETL, 자연어 처리를 위한 서비스로 데이터베이스 마이그레이션 도구가 아니다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q023",
      "taskId": "3.5",
      "type": "single",
      "question": "VPC 내에서 서브넷 수준으로 적용되며, 상태 비저장(stateless) 방식으로 인바운드와 아웃바운드 트래픽에 대해 허용 및 거부 규칙을 모두 설정할 수 있는 것은?",
      "choices": [
        "보안 그룹(Security Group)",
        "네트워크 ACL(NACL)",
        "라우팅 테이블",
        "인터넷 게이트웨이"
      ],
      "answer": [
        1
      ],
      "explanation": "네트워크 ACL은 서브넷 수준에서 동작하는 상태 비저장 방화벽으로, 인바운드와 아웃바운드 규칙을 별도로 설정해야 하며 허용(ALLOW)과 거부(DENY) 규칙을 모두 지정할 수 있다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q024",
      "taskId": "3.5",
      "type": "single",
      "question": "인스턴스(ENI) 수준에서 적용되며, 상태 저장(stateful) 방식으로 동작하여 허용 규칙만 설정할 수 있는 가상 방화벽은?",
      "choices": [
        "네트워크 ACL",
        "보안 그룹(Security Group)",
        "AWS WAF",
        "Amazon Route 53"
      ],
      "answer": [
        1
      ],
      "explanation": "보안 그룹은 인스턴스 수준에서 동작하는 상태 저장(stateful) 방화벽으로, 허용 규칙만 설정할 수 있으며 요청에 대한 응답 트래픽은 별도 규칙 없이 자동으로 허용된다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q025",
      "taskId": "3.5",
      "type": "single",
      "question": "도메인 이름을 IP 주소로 변환하고, 지연 시간 기반이나 지리 위치 기반 등 다양한 라우팅 정책을 제공하는 관리형 DNS 서비스는?",
      "choices": [
        "Amazon CloudFront",
        "Amazon Route 53",
        "AWS Direct Connect",
        "Amazon VPC"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon Route 53은 도메인 등록, DNS 확인, 다양한 라우팅 정책(지연 시간 기반, 지리 위치 기반, 가중치 기반 등)과 상태 확인(헬스체크)을 제공하는 AWS의 관리형 DNS 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q026",
      "taskId": "3.5",
      "type": "single",
      "question": "안정적인 대역폭과 낮은 지연 시간이 필요한 온프레미스-AWS 간 전용 연결을 구축할 때 가장 적합한 서비스는?",
      "choices": [
        "AWS Site-to-Site VPN",
        "AWS Direct Connect",
        "Amazon CloudFront",
        "AWS Certificate Manager"
      ],
      "answer": [
        1
      ],
      "explanation": "AWS Direct Connect는 전용 물리 회선을 통해 온프레미스와 AWS를 연결하여 인터넷 기반 VPN보다 더 안정적인 대역폭과 낮은 지연 시간을 제공한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q027",
      "taskId": "3.5",
      "type": "multi",
      "question": "Amazon VPC의 구성 요소에 해당하는 것을 모두 고르시오.",
      "choices": [
        "서브넷(Subnet)",
        "인터넷 게이트웨이(Internet Gateway)",
        "라우팅 테이블(Route Table)",
        "Amazon S3 버킷",
        "AWS Lambda 함수"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "서브넷, 인터넷 게이트웨이, 라우팅 테이블은 모두 VPC 네트워크를 구성하는 핵심 요소이다. S3 버킷과 Lambda 함수는 VPC의 구성 요소가 아니라 별도의 AWS 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q028",
      "taskId": "3.5",
      "type": "multi",
      "question": "온프레미스 네트워크와 AWS VPC를 연결하는 방법에 해당하는 것을 모두 고르시오.",
      "choices": [
        "AWS Site-to-Site VPN",
        "AWS Direct Connect",
        "Amazon SNS",
        "AWS Client VPN",
        "Amazon Kinesis"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "Site-to-Site VPN과 Direct Connect는 온프레미스 네트워크 전체를 AWS와 연결하는 방법이며, Client VPN은 개별 사용자가 안전하게 AWS 리소스나 온프레미스 네트워크에 접속할 수 있게 해주는 연결 방식이다. SNS와 Kinesis는 네트워크 연결 서비스가 아니다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q029",
      "taskId": "3.6",
      "type": "single",
      "question": "정적 웹사이트 파일, 백업 데이터, 로그 등을 저장하기 위한 사실상 무제한 확장 가능한 객체 스토리지 서비스는?",
      "choices": [
        "Amazon EBS",
        "Amazon S3",
        "Amazon EFS",
        "Amazon FSx"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon S3는 버킷에 객체를 저장하는 객체 스토리지 서비스로, 사실상 무제한의 확장성을 제공하며 백업, 정적 웹 호스팅, 데이터 레이크 등 다양한 용도로 사용된다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q030",
      "taskId": "3.6",
      "type": "single",
      "question": "자주 접근하지는 않지만 필요할 때 즉시 검색이 가능해야 하는 데이터를 저비용으로 저장하기에 적합한 S3 스토리지 클래스는?",
      "choices": [
        "S3 Standard",
        "S3 Standard-IA",
        "S3 Glacier Deep Archive",
        "Amazon EBS"
      ],
      "answer": [
        1
      ],
      "explanation": "S3 Standard-IA(Infrequent Access)는 접근 빈도는 낮지만 필요 시 즉시 검색이 가능해야 하는 데이터에 적합하며, S3 Standard보다 저장 비용이 저렴하다. Glacier Deep Archive는 검색에 최대 수십 시간이 걸릴 수 있어 즉시 검색 요구사항에는 맞지 않는다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q031",
      "taskId": "3.6",
      "type": "single",
      "question": "EC2 인스턴스가 중지되거나 종료되면 저장된 데이터가 함께 사라지는 임시 블록 스토리지는?",
      "choices": [
        "Amazon EBS",
        "인스턴스 스토어(Instance Store)",
        "Amazon S3",
        "Amazon EFS"
      ],
      "answer": [
        1
      ],
      "explanation": "인스턴스 스토어는 EC2 호스트에 물리적으로 연결된 임시 블록 스토리지로, 인스턴스가 중지되거나 종료되면 데이터가 손실된다. 반면 EBS는 네트워크 기반 볼륨으로 인스턴스와 독립적으로 데이터를 유지한다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q032",
      "taskId": "3.6",
      "type": "single",
      "question": "여러 EC2 인스턴스에서 동시에 마운트하여 공유 파일 저장소로 사용할 수 있는 완전관리형 NFS 파일 시스템은?",
      "choices": [
        "Amazon EBS",
        "Amazon EFS",
        "인스턴스 스토어",
        "Amazon S3 Glacier"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon EFS는 관리형 NFS 파일 시스템으로 여러 EC2 인스턴스에서 동시에 마운트하여 공유할 수 있다. EBS 볼륨은 기본적으로 한 번에 하나의 인스턴스에만 연결하는 블록 스토리지이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q033",
      "taskId": "3.6",
      "type": "multi",
      "question": "Amazon S3 수명 주기(Lifecycle) 정책을 사용해 수행할 수 있는 작업을 모두 고르시오.",
      "choices": [
        "일정 기간이 지난 객체를 더 저렴한 스토리지 클래스로 자동 전환한다",
        "일정 기간이 지난 객체를 자동으로 삭제한다",
        "EC2 인스턴스 유형을 자동으로 변경한다",
        "오래된 버전의 객체를 정리한다",
        "VPC의 라우팅 테이블을 자동으로 갱신한다"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "S3 수명 주기 정책은 객체를 접근 빈도에 따라 다른 스토리지 클래스로 전환하거나, 일정 기간 후 자동 삭제하거나, 이전 버전을 정리하는 규칙을 설정할 수 있다. EC2 인스턴스 유형 변경이나 VPC 라우팅 테이블 갱신과는 관련이 없다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q034",
      "taskId": "3.6",
      "type": "multi",
      "question": "다음 설명에 해당하는 AWS 스토리지 관련 서비스를 모두 고르시오. - '온프레미스 환경과 AWS 스토리지를 연결하는 하이브리드 서비스이다' 또는 '여러 AWS 서비스에 걸친 백업을 중앙에서 관리한다'",
      "choices": [
        "AWS Storage Gateway",
        "AWS Backup",
        "Amazon FSx",
        "Amazon Kinesis",
        "AWS Glue"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "AWS Storage Gateway는 온프레미스와 AWS 스토리지를 연결하는 하이브리드 스토리지 서비스이며, AWS Backup은 EBS, RDS, EFS 등 여러 서비스의 백업을 중앙에서 정책 기반으로 관리하는 서비스이다. FSx는 특정 워크로드용 파일 시스템이고, Kinesis와 Glue는 각각 스트리밍 처리와 ETL을 위한 서비스로 이 설명에 해당하지 않는다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q035",
      "taskId": "3.7",
      "type": "single",
      "question": "이미지와 동영상에서 객체, 장면, 얼굴 등을 인식하는 컴퓨터 비전 서비스는?",
      "choices": [
        "Amazon Rekognition",
        "Amazon Textract",
        "Amazon Polly",
        "Amazon Comprehend"
      ],
      "answer": [
        0
      ],
      "explanation": "Amazon Rekognition은 이미지와 동영상을 분석하여 객체, 장면, 얼굴 등을 인식하는 컴퓨터 비전 서비스이다. Textract는 문서에서 텍스트를 추출하고, Polly는 텍스트를 음성으로 변환하며, Comprehend는 텍스트를 분석하는 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q036",
      "taskId": "3.7",
      "type": "single",
      "question": "텍스트를 자연스러운 음성으로 변환(Text-to-Speech)하는 AWS 서비스는?",
      "choices": [
        "Amazon Transcribe",
        "Amazon Polly",
        "Amazon Translate",
        "Amazon Lex"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon Polly는 텍스트를 자연스러운 음성으로 변환하는 서비스이다. Transcribe는 반대로 음성을 텍스트로 변환하며, Translate는 언어 번역, Lex는 대화형 챗봇 구축에 사용된다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q037",
      "taskId": "3.7",
      "type": "multi",
      "question": "다음 중 AWS 서비스와 그 용도에 대한 설명으로 옳은 것을 모두 고르시오.",
      "choices": [
        "Amazon Athena는 S3에 저장된 데이터를 서버리스로 표준 SQL 쿼리할 수 있게 해준다",
        "AWS Glue는 서버리스 ETL 작업과 데이터 카탈로그 기능을 제공한다",
        "Amazon Kinesis는 실시간 스트리밍 데이터를 수집하고 처리한다",
        "Amazon SageMaker는 데이터 웨어하우스 구축에 특화된 서비스이다",
        "Amazon EMR은 관계형 데이터베이스 마이그레이션 전용 도구이다"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Athena, Glue, Kinesis에 대한 설명은 모두 정확하다. SageMaker는 데이터 웨어하우스가 아니라 머신러닝 모델 구축 플랫폼이며, EMR은 데이터베이스 마이그레이션 도구가 아니라 Hadoop/Spark 같은 빅데이터 프레임워크를 실행하는 관리형 클러스터 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q038",
      "taskId": "3.7",
      "type": "single",
      "question": "대규모 데이터 웨어하우스를 구축하여 복잡한 분석 쿼리를 수행하기 위한 관리형 AWS 서비스는?",
      "choices": [
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon ElastiCache",
        "Amazon Kinesis"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon Redshift는 페타바이트급 데이터를 대상으로 복잡한 분석 쿼리를 수행하도록 설계된 완전관리형 데이터 웨어하우스 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q039",
      "taskId": "3.7",
      "type": "multi",
      "question": "다음 중 자연어(텍스트/음성) 처리와 관련된 AWS AI 서비스를 모두 고르시오.",
      "choices": [
        "Amazon Comprehend(텍스트에서 감정/엔티티 추출)",
        "Amazon Transcribe(음성을 텍스트로 변환)",
        "Amazon Translate(언어 간 번역)",
        "Amazon Rekognition(이미지/동영상 분석)",
        "Amazon QuickSight(BI 시각화)"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Comprehend, Transcribe, Translate는 모두 텍스트나 음성 같은 자연어를 다루는 AI 서비스이다. Rekognition은 이미지/동영상을 다루는 컴퓨터 비전 서비스이고, QuickSight는 데이터 시각화를 위한 BI 도구로 자연어 처리와는 관련이 없다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q040",
      "taskId": "3.8",
      "type": "single",
      "question": "애플리케이션 구성 요소 간에 메시지를 대기열에 저장하여 비동기적으로 디커플링하기 위한 완전관리형 메시지 대기열 서비스는?",
      "choices": [
        "Amazon SNS",
        "Amazon SQS",
        "Amazon EventBridge",
        "AWS Step Functions"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon SQS는 메시지를 대기열에 저장하고 수신자가 자신의 처리 속도에 맞춰 가져가도록 하여 애플리케이션 구성 요소 간 비동기 디커플링을 지원하는 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q041",
      "taskId": "3.8",
      "type": "single",
      "question": "여러 AWS 서비스를 시각적 워크플로우(상태 머신) 형태로 조율하는 서버리스 서비스는?",
      "choices": [
        "AWS Step Functions",
        "Amazon SQS",
        "AWS CodePipeline",
        "Amazon EventBridge"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Step Functions는 여러 AWS 서비스 호출을 상태 머신 형태의 워크플로우로 정의하고 순서대로 조율할 수 있게 해주는 서버리스 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q042",
      "taskId": "3.8",
      "type": "single",
      "question": "클라우드 기반의 컨택센터(콜센터) 솔루션을 제공하는 AWS 서비스는?",
      "choices": [
        "Amazon SES",
        "Amazon Connect",
        "Amazon Chime",
        "AWS Support"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon Connect는 클라우드 기반의 컨택센터(콜센터) 서비스로, 고객 응대를 위한 통화 라우팅 및 관리 기능을 제공한다. SES는 이메일 발송 서비스이다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q043",
      "taskId": "3.8",
      "type": "single",
      "question": "사용자에게 전체 가상 데스크톱 환경을 제공하는 관리형 최종 사용자 컴퓨팅 서비스는?",
      "choices": [
        "Amazon AppStream 2.0",
        "Amazon WorkSpaces",
        "AWS Amplify",
        "AWS AppSync"
      ],
      "answer": [
        1
      ],
      "explanation": "Amazon WorkSpaces는 완전한 가상 데스크톱(VDI)을 사용자에게 제공하는 서비스이다. AppStream 2.0은 데스크톱 전체가 아니라 개별 애플리케이션을 스트리밍으로 제공한다는 점에서 차이가 있다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d3-q044",
      "taskId": "3.8",
      "type": "multi",
      "question": "소스 코드를 빌드·테스트하고 지속적 통합/배포(CI/CD) 파이프라인을 자동화하는 데 사용되는 AWS 개발자 도구를 모두 고르시오.",
      "choices": [
        "AWS CodeBuild",
        "AWS CodePipeline",
        "Amazon EventBridge",
        "AWS X-Ray",
        "Amazon SNS"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "AWS CodeBuild는 소스 코드를 컴파일하고 테스트하는 완전관리형 빌드 서비스이며, AWS CodePipeline은 이러한 빌드/테스트/배포 단계를 연결하여 CI/CD 파이프라인을 자동화한다. EventBridge, X-Ray, SNS는 각각 이벤트 라우팅, 분산 추적, 알림 서비스로 CI/CD 파이프라인 자동화 도구가 아니다.",
      "domainId": "d3"
    },
    {
      "id": "clf-d4-q001",
      "taskId": "4.1",
      "type": "single",
      "question": "한 스타트업이 이번 주에만 짧게 신규 기능의 부하 테스트를 진행하려고 합니다. 언제, 얼마나 많은 컴퓨팅 자원이 필요할지 미리 예측할 수 없는 상황에서 가장 적합한 EC2 구매 옵션은?",
      "choices": [
        "On-Demand Instances",
        "Standard Reserved Instances",
        "Dedicated Hosts",
        "3년 약정 Savings Plans"
      ],
      "answer": [
        0
      ],
      "explanation": "On-Demand는 약정이나 선불금 없이 사용한 만큼만 지불하는 방식으로, 사용 패턴을 예측하기 어렵거나 짧은 기간만 필요한 워크로드에 적합합니다. Reserved Instances와 Savings Plans는 장기간 안정적인 사용을 전제로 할인을 제공하므로 이런 시나리오에는 맞지 않습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q002",
      "taskId": "4.1",
      "type": "single",
      "question": "중단되어도 나중에 재실행하면 되는 대규모 동영상 트랜스코딩 배치 작업의 비용을 최대한 절감하고 싶습니다. 어떤 구매 옵션이 가장 적합한가요?",
      "choices": [
        "Spot Instances",
        "On-Demand Instances",
        "전용 호스트(Dedicated Host)",
        "Standard Reserved Instances"
      ],
      "answer": [
        0
      ],
      "explanation": "Spot Instances는 AWS의 유휴 컴퓨팅 용량을 On-Demand 대비 최대 90%까지 할인된 가격에 제공하지만, 용량이 필요해지면 2분 전 통지 후 회수될 수 있습니다. 따라서 중단에 강하고 재시작이 가능한 배치 작업에 이상적입니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q003",
      "taskId": "4.1",
      "type": "single",
      "question": "회사는 향후 3년간 EC2 사용을 지속할 계획이지만, 사업 방향에 따라 인스턴스 패밀리나 리전, 운영체제가 바뀔 가능성이 높습니다. 할인 혜택을 받으면서도 이런 유연성을 유지하려면 어떤 옵션이 가장 적합한가요?",
      "choices": [
        "Compute Savings Plans",
        "Standard Reserved Instances",
        "Dedicated Instances",
        "EC2 Instance Savings Plans"
      ],
      "answer": [
        0
      ],
      "explanation": "Compute Savings Plans는 특정 인스턴스 패밀리, 리전, 운영체제, 테넌시에 관계없이 EC2, Fargate, Lambda 사용량에 폭넓게 적용되어 가장 큰 유연성을 제공합니다. Standard RI나 EC2 Instance Savings Plans는 특정 인스턴스 패밀리나 리전에 묶여 유연성이 떨어집니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q004",
      "taskId": "4.1",
      "type": "single",
      "question": "기존에 소켓 및 물리 코어 수 기준으로 라이선스가 부여된 소프트웨어를 AWS로 이전(BYOL)하면서, 규정 준수를 위해 물리 서버 수준의 가시성이 필요합니다. 어떤 옵션을 사용해야 하나요?",
      "choices": [
        "전용 호스트(Dedicated Host)",
        "Spot Instances",
        "On-Demand Capacity Reservation",
        "전용 인스턴스(Dedicated Instance)"
      ],
      "answer": [
        0
      ],
      "explanation": "전용 호스트는 물리 서버 전체를 단독으로 할당받아 소켓, 코어, 호스트 ID 수준까지 확인할 수 있어 기존 서버 바인딩 라이선스를 이전(BYOL)하거나 엄격한 규정 준수 요구를 충족해야 할 때 적합합니다. 전용 인스턴스는 하드웨어를 단독 사용하지만 호스트 배치를 AWS가 관리해 이 정도의 가시성을 제공하지 않습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q005",
      "taskId": "4.1",
      "type": "multi",
      "question": "AWS On-Demand Capacity Reservation에 대한 설명으로 옳은 것을 모두 고르시오. (2개 선택)",
      "choices": [
        "특정 가용 영역(AZ)에서 원하는 기간만큼 용량을 예약할 수 있다",
        "1년 또는 3년의 장기 약정이 반드시 필요하다",
        "예약한 용량을 사용하지 않아도 On-Demand 요금이 청구된다",
        "Spot Instances와만 결합하여 사용할 수 있다",
        "AWS가 자동으로 할인율을 적용해 준다"
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "Capacity Reservation은 장기 약정 없이 특정 AZ에서 원하는 기간만큼 용량을 확보하며, 사용 여부와 관계없이 On-Demand 요금이 청구됩니다. 할인을 받으려면 Reserved Instances나 Savings Plans와 별도로 결합해야 하며, 자동 할인은 제공되지 않습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q006",
      "taskId": "4.1",
      "type": "multi",
      "question": "AWS의 데이터 전송 및 Organizations 내 예약 인스턴스(RI) 공유에 대한 설명으로 옳은 것을 모두 고르시오. (2개 선택)",
      "choices": [
        "인터넷에서 AWS로 들어오는(inbound) 데이터 전송은 일반적으로 무료이다",
        "같은 리전 내에서 이루어지는 모든 데이터 전송은 항상 무료이다",
        "AWS Organizations의 결제 공유 설정에 따라 한 계정이 구매한 RI 혜택을 다른 구성원 계정과 공유할 수 있다",
        "리전 간 데이터 전송은 발신 측에서만 과금되며 수신 측은 항상 무료이다",
        "RI는 구매 즉시 조직 내 모든 계정에서 무조건 공유가 강제된다"
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "AWS로 들어오는 데이터는 대체로 무료이며, Organizations의 통합 결제 하에서는 설정에 따라 한 계정의 RI 할인 혜택을 다른 계정의 일치하는 사용량에도 적용할 수 있습니다. 다만 같은 리전이라도 AZ 간 전송에는 소액 과금이 발생할 수 있고, RI 공유는 관리 계정에서 활성화해야 하는 선택 사항입니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q007",
      "taskId": "4.2",
      "type": "single",
      "question": "새로운 3계층 웹 애플리케이션 아키텍처를 아직 배포하지 않은 상태에서, 여러 서비스 조합에 따른 예상 월간 비용을 미리 견적 내고 싶습니다. 어떤 도구를 사용해야 하나요?",
      "choices": [
        "AWS Pricing Calculator",
        "AWS Cost Explorer",
        "AWS Budgets",
        "Cost and Usage Report"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Pricing Calculator는 실제로 리소스를 배포하기 전에 서비스 구성에 따른 예상 비용을 시뮬레이션해보는 도구입니다. Cost Explorer와 CUR은 이미 발생한 실제 사용량과 비용을 분석하는 데 사용되고, Budgets은 예산 초과를 감시하는 도구입니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q008",
      "taskId": "4.2",
      "type": "single",
      "question": "지난 6개월간 서비스별 실제 지출 추세를 그래프로 확인하고, 이를 바탕으로 향후 몇 개월간의 비용을 예측하려고 합니다. 가장 적합한 도구는?",
      "choices": [
        "AWS Cost Explorer",
        "AWS Pricing Calculator",
        "AWS Trusted Advisor",
        "AWS Marketplace"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Cost Explorer는 과거 및 현재의 비용/사용량 데이터를 시각화하고, 이 데이터를 기반으로 향후 비용을 예측하는 기능을 제공합니다. Pricing Calculator는 실제 사용 데이터가 아니라 배포 전 견적을 다룹니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q009",
      "taskId": "4.2",
      "type": "single",
      "question": "회사는 여러 부서(마케팅, 개발, 운영)가 공유하는 AWS 계정에서 각 부서별 리소스 사용 비용을 구분해서 보고서로 받고 싶습니다. 이를 위해 리소스에 부여해야 하는 것은?",
      "choices": [
        "비용 할당 태그(Cost Allocation Tag)",
        "IAM 정책",
        "보안 그룹 규칙",
        "서비스 할당량(Service Quota)"
      ],
      "answer": [
        0
      ],
      "explanation": "비용 할당 태그를 리소스에 부여하고 결제 콘솔에서 활성화하면, 태그(예: 부서명)를 기준으로 비용을 세분화하여 Cost Explorer나 Cost and Usage Report에서 분석할 수 있습니다. IAM 정책이나 보안 그룹은 접근 제어와 관련된 것으로 비용 추적과는 무관합니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q010",
      "taskId": "4.2",
      "type": "single",
      "question": "재무팀은 매월 클라우드 지출이 설정한 한도의 90%에 도달하면 자동으로 담당자에게 이메일 알림이 오기를 원합니다. 이를 구성하기에 가장 적합한 서비스는?",
      "choices": [
        "AWS Budgets",
        "AWS Cost Explorer",
        "AWS Pricing Calculator",
        "AWS Trusted Advisor"
      ],
      "answer": [
        0
      ],
      "explanation": "AWS Budgets는 사용자가 정의한 비용/사용량 임계값을 초과하거나 초과할 것으로 예상될 때 알림을 보내도록 설정할 수 있는 서비스입니다. Cost Explorer는 분석 및 예측에 초점이 맞춰져 있고 사전 알림 기능은 Budgets의 역할입니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q011",
      "taskId": "4.2",
      "type": "multi",
      "question": "AWS Organizations의 통합 결제(Consolidated Billing)가 제공하는 이점으로 옳은 것을 모두 고르시오. (2개 선택)",
      "choices": [
        "여러 계정의 사용량을 합산하여 볼륨 할인 구간에 더 빠르게 도달할 수 있다",
        "모든 구성원 계정에 대해 하나의 통합된 청구서를 받을 수 있다",
        "구성원 계정의 IAM 사용자 권한을 관리 계정이 자동으로 대신 관리해준다",
        "모든 구성원 계정의 보안 그룹 설정이 자동으로 동일하게 통일된다",
        "구성원 계정마다 반드시 별도의 결제 수단을 등록해야 한다"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "통합 결제는 조직 내 여러 계정의 사용량을 합산하여 볼륨 할인 혜택을 더 쉽게 받을 수 있게 하고, 관리 계정에서 모든 구성원 계정에 대한 단일 청구서를 받을 수 있게 합니다. IAM 권한 관리나 보안 그룹 통일은 통합 결제의 기능이 아니며, 결제는 관리 계정에서 일괄 처리되므로 구성원 계정마다 별도 결제 수단이 필요하지 않습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q012",
      "taskId": "4.2",
      "type": "multi",
      "question": "비용 할당 태그와 Cost and Usage Report(CUR)에 대한 설명으로 옳은 것을 모두 고르시오. (2개 선택)",
      "choices": [
        "AWS 생성 태그는 'aws:' 접두사가 붙으며 AWS가 자동으로 적용한다",
        "사용자 정의 태그는 결제 콘솔에서 비용 할당 태그로 활성화해야 리포트에 반영된다",
        "CUR은 요약된 월별 총액 한 줄만 제공하며 세부 항목은 포함하지 않는다",
        "비용 할당 태그는 IAM 정책 문서에서만 확인할 수 있고 CUR과는 관련이 없다",
        "사용자 정의 태그는 활성화 여부와 관계없이 항상 CUR에 자동 포함된다"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "AWS 생성 태그는 'aws:' 접두사가 붙어 자동으로 적용되고, 사용자 정의 태그는 사용자가 직접 지정한 뒤 결제 콘솔에서 비용 할당 태그로 활성화해야 리포트에 나타납니다. CUR은 오히려 가장 세부적이고 포괄적인 비용/사용량 데이터를 제공하는 보고서입니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q013",
      "taskId": "4.3",
      "type": "single",
      "question": "글로벌 금융 서비스 기업이 24/7 미션 크리티컬 시스템을 운영하며, 장애 발생 시 15분 이내 응답과 전담 Technical Account Manager(TAM)의 지속적인 아키텍처 자문을 원합니다. 어떤 AWS Support 플랜이 가장 적합한가요?",
      "choices": [
        "Enterprise",
        "Developer",
        "Basic",
        "Business"
      ],
      "answer": [
        0
      ],
      "explanation": "Enterprise 지원 플랜은 전담 TAM을 배정하고 비즈니스 크리티컬 시스템 다운 시 15분 이내 응답을 제공하는 최상위 플랜으로, 대규모 미션 크리티컬 운영 조직에 적합합니다. Business는 24/7 지원을 제공하지만 전담 TAM이나 15분 응답 SLA는 제공하지 않습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q014",
      "taskId": "4.3",
      "type": "single",
      "question": "1인 개발자가 처음으로 유료 기술 지원을 이용해보려 하며, 업무 시간 중 이메일로 개발 관련 질문에 대한 일반적인 안내를 받을 수 있으면 충분합니다. 비용을 최소화하고 싶을 때 적합한 Support 플랜은?",
      "choices": [
        "Developer",
        "Enterprise",
        "Business",
        "Enterprise On-Ramp"
      ],
      "answer": [
        0
      ],
      "explanation": "Developer 플랜은 업무 시간 중 이메일을 통한 기술 지원과 일반적인 안내를 저렴한 비용으로 제공하여 소규모 개발/테스트 단계의 개인이나 팀에 적합합니다. Business 이상 플랜은 24/7 지원과 더 빠른 응답 시간을 제공하지만 비용이 더 높습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q015",
      "taskId": "4.3",
      "type": "single",
      "question": "한 사용자가 자신의 AWS 계정 정보가 도용되어 다른 사람이 리소스를 부정하게 사용하고 있다고 의심되어 이를 신고하고 조사받고 싶습니다. 어떤 AWS 팀에 문의해야 하나요?",
      "choices": [
        "Trust & Safety 팀",
        "Professional Services",
        "AWS 파트너 네트워크(APN)",
        "Well-Architected 검토 팀"
      ],
      "answer": [
        0
      ],
      "explanation": "Trust & Safety 팀은 AWS 리소스의 부정 사용, 계정 도용, 약관 위반, 피싱 등의 신고를 접수하고 조사하는 전담 조직입니다. Professional Services는 아키텍처/마이그레이션 컨설팅을, APN은 파트너 생태계를 다루므로 이런 보안 사고 신고에는 적합하지 않습니다.",
      "domainId": "d4"
    },
    {
      "id": "clf-d4-q016",
      "taskId": "4.3",
      "type": "multi",
      "question": "AWS Trusted Advisor와 AWS Health Dashboard에 대한 설명으로 옳은 것을 모두 고르시오. (2개 선택)",
      "choices": [
        "Trusted Advisor는 비용 최적화, 보안, 성능, 내결함성, 서비스 한도 영역에서 계정을 점검하고 권장 사항을 제시한다",
        "AWS Health Dashboard의 Personal Health Dashboard는 내 계정 리소스에 영향을 미치는 이벤트를 알려준다",
        "Trusted Advisor의 전체 점검 항목은 Basic(무료) 플랜에서도 아무 제한 없이 모두 제공된다",
        "Health API는 모든 Support 플랜에서 동일한 수준으로 제공된다",
        "Trusted Advisor는 IAM 사용자의 비밀번호를 자동으로 변경해주는 도구이다"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "Trusted Advisor는 다섯 가지 범주에서 계정 상태를 점검해 개선을 권장하며, Personal Health Dashboard는 내 계정에 영향을 주는 개별 이벤트를 알려줍니다. Trusted Advisor의 전체 점검 항목은 Business/Enterprise 이상에서 제공되고, Basic 플랜은 제한된 핵심 점검만 제공하며, Health API는 Business 이상 플랜에서 프로그래밍 방식 접근이 가능합니다.",
      "domainId": "d4"
    }
  ]
};
