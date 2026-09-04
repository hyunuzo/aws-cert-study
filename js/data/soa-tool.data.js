// 자동 생성 파일 — scripts/parse_dump.py 가 SOA-C03_문제풀이_툴.html 을 변환합니다. 직접 편집하지 마세요.
window.SOA_TOOL = {
 "title": "SOA-C03 상황실",
 "subtitle": "CloudOps Engineer – Associate 덤프 320문항. 문제와 보기 순서를 매번 새로 섞어서, 답을 외우는 게 아니라 실제로 아는지 확인하세요.",
 "source": "SOA-C03_문제풀이_툴.html · [KOR_Q320] SOA-C03 Answers",
 "questions": [
  {
   "num": 1,
   "question": "CloudOps 엔지니어가 다음 AWS CloudFormation 템플릿을 검토하고 있습니다:\n\nAWSTemplateFormatVersion: ‘2025-09-09’\nDescription: ‘Creates an EC2 Instance’\nResources:\n     EC2Instance:\n        Type: AWS::EC2::Instance\n        Properties:\n             ImageId: ami-79fd7eee\n             InstanceType: m5n.large\n             SubnetId: Subnet-labc3d3fg\n             PrivateDnsName: ip-10-24-34-0.ec2.internal\n             Tags:\n              - Key: Name\n               Value: !Sub “${AWS::StackName} Instance”\n\n스택 생성이 실패하는 이유는 무엇입니까?",
   "options": {
    "A": "CloudFormation 템플릿의 Outputs 섹션이 누락되었습니다.",
    "B": "CloudFormation 템플릿의 Parameters 섹션이 누락되었습니다.",
    "C": "CloudFormation 템플릿에서는 PrivateDnsName 을 설정할 수 없습니다.",
    "D": "CloudFormation 템플릿에 VPC 가 지정되지 않았습니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "`AWS::EC2::Instance` 리소스의 속성(Properties) 중에서 `PrivateDnsName`은 사용자가 생성 시점에 직접 지정할 수 있는 속성이 아니다. 이는 인스턴스가 생성된 후 AWS 에 의해 자동으로 할당되는 읽기 전용 속성이므로, 템플릿 정의에 포함하면 유효성 검사에서 실패한다. Outputs 및 Parameters 섹션은 필수 구성 요소가 아니며, SubnetId 를 지정하면 해당하는 VPC 가 자동으로 연동되므로 A, B, D 는 오답이다."
  },
  {
   "num": 2,
   "question": "한 회사가 자사의 AWS 워크로드와 관련된 리소스에 사용자 정의 태그를 적용했습니다. 태그를 적용한 지 20 일이 지난 후, 회사는 AWS Cost Explorer 콘솔에서 해당 태그를 사용하여 보기를 필터링할 수 없다는 것을 발견했습니다. 이 문제가 발생한 원인은 무엇입니까?",
   "options": {
    "A": "Cost Explorer 에서 태그를 사용하여 보기를 필터링하려면 최소 30 일이 걸립니다.",
    "B": "회사가 비용 할당을 위한 사용자 정의 태그를 활성화하지 않았습니다.",
    "C": "회사가 AWS 비용 및 사용 보고서(AWS Cost and Usage Report)를 생성하지 않았습니다.",
    "D": "회사가 AWS Budgets 에서 사용량 예산을 생성하지 않았습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS 에서 사용자가 직접 정의한 태그를 Cost Explorer 의 필터나 그룹화 기준으로 활용하기 위해서는 AWS 결제 콘솔(Billing Console)의 '비용 할당 태그(Cost Allocation Tags)' 메뉴에서 해당 태그를 명시적으로 활성화(Activate)해야 한다. 활성화 처리를 하지 않으면 리소스에 태그가 적용되어 있더라도 결제 시스템 및 Cost Explorer 에서 이를 인식하지 못한다. 따라서 B 가 정답이다."
  },
  {
   "num": 3,
   "question": "환경이 100 개의 Amazon EC2 Windows 인스턴스로 구성되어 있습니다. 로그 파일을 수집하기 위해 모든 EC2 인스턴스에 기본 구성 파일과 함께 Amazon CloudWatch 에이전트가 배포되어 실행 중입니다. 이 중 50 개의 인스턴스에 존재하는 DHCP 로그 파일을 수집해야 하는 새로운 요구사항이 발생했습니다. 이 새로운 요구사항을 충족하기 위한 가장 운영 효율적인 방법은 무엇입니까?",
   "options": {
    "A": "DHCP 로그를 수집하기 위한 추가 CloudWatch 에이전트 구성 파일을 생성합니다. AWS Systems Manager Run Command 를 사용하여 각 EC2 인스턴스에서 append- config 옵션과 함께 CloudWatch 에이전트를 재시작하여 추가 구성 파일을 적용합니다.",
    "B": "관리자 권한으로 각 EC2 인스턴스에 로그인합니다. 필요한 기본 로그 파일과 DHCP 로그 파일을 CloudWatch 로 전송하는 PowerShell 스크립트를 생성합니다.",
    "C": "각 EC2 인스턴스에서 CloudWatch 에이전트 구성 파일 마법사를 실행합니다. 기본 로그 파일이 포함되어 있는지 확인하고 마법사 생성 프로세스 중에 DHCP 로그 파일을 추가합니다.",
    "D": "각 EC2 인스턴스에서 CloudWatch 에이전트 구성 파일 마법사를 실행하고 고급 세부 정보 수준(advanced detail level)을 선택합니다. 이렇게 하면 운영 체제 로그 파일이 수집됩니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "여러 EC2 인스턴스에 CloudWatch 에이전트 구성을 변경하거나 추가할 때, AWS Systems Manager(SSM) Run Command 를 활용하여 원격으로 일괄 적용하는 것이 가장 운영 효율적이다. `AmazonCloudWatch-ManageAgent` 명령과 `append-config` 옵션을 사용하면 기존의 기본 구성(baseline configuration)을 유지하면서 새로운 DHCP 로그 수집 설정을 병합(merge)할 수 있다. 인스턴스에 개별적으로 로그인하거나(B) 마법사를 수동으로 실행하는 방식(C, D)은 대규모 환경에서 운영 효율성이 떨어진다."
  },
  {
   "num": 4,
   "question": "한 회사가 Amazon S3 버킷에 백업을 저장하고 있습니다. 백업은 생성된 후 최소 3 개월 동안 삭제되어서는 안 됩니다. CloudOps 엔지니어가 이 요구사항을 충족하기 위해 수행해야 하는 작업은 무엇입니까?",
   "options": {
    "A": "모든 사용자에 대해 s3:DeleteObject 작업을 거부하는 IAM 정책을 구성합니다. 객체가 작성된 지 3 개월 후에 해당 정책을 제거합니다.",
    "B": "새 S3 버킷에서 규정 준수(compliance) 모드로 S3 Object Lock 을 활성화합니다. 보존 기간을 3 개월로 설정하여 모든 백업을 새 S3 버킷에 저장합니다.",
    "C": "기존 S3 버킷에서 S3 버전 관리(Versioning)를 활성화합니다. 백업을 보호하도록 S3 수명 주기(Lifecycle) 규칙을 구성합니다.",
    "D": "새 S3 버킷에서 거버넌스(governance) 모드로 S3 Object Lock 을 활성화합니다. 보존 기간을 3 개월로 설정하여 모든 백업을 새 S3 버킷에 저장합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "S3 에 저장된 객체의 임의 삭제를 방지하고 일정 기간 동안 보존을 보장하기 위해 S3 Object Lock 을 사용할 수 있다. 문제에서 백업이 반드시 삭제되지 않아야 함을 강제하고 있으므로, AWS 계정의 루트(root) 사용자를 포함한 그 어떤 사용자도 보존 기간 내에 객체를 삭제하거나 설정을 변경할 수 없는 규정 준수(compliance) 모드를 사용하는 것이 적합하다. 거버넌스(governance) 모드는 특별한 권한(s3:BypassGovernanceRetention)이 있는 사용자가 규정을 우회하여 삭제할 수 있으므로 완벽한 삭제 방지를 보장하지 못한다. 따라서 B 가 정답이다."
  },
  {
   "num": 5,
   "question": "한 회사의 CloudOps 엔지니어가 애플리케이션 구성 요소 간의 통신 문제를 해결하고 있습니다. 회사는 VPC 흐름 로그(VPC flow logs)가 Amazon CloudWatch Logs 에 게시되도록 구성했습니다. 하지만 CloudWatch Logs 에 로그가 전혀 나타나지 않습니다. VPC 흐름 로그가 CloudWatch Logs 에 게시되는 것을 차단할 수 있는 원인은 무엇입니까?",
   "options": {
    "A": "흐름 로그를 위한 IAM 역할(Role)에 연결된 IAM 정책에 logs:CreateLogGroup 권한이 누락되었습니다.",
    "B": "흐름 로그를 위한 IAM 역할(Role)에 연결된 IAM 정책에 logs:CreateExportTask 권한이 누락되었습니다.",
    "C": "VPC 가 IPv6 주소로 구성되어 있습니다.",
    "D": "VPC 가 해당 AWS 계정 내의 다른 VPC 와 피어링(Peering)되어 있습니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "VPC 흐름 로그를 Amazon CloudWatch Logs 로 전송하려면 흐름 로그 서비스가 작동할 수 있도록 적절한 권한을 가진 IAM 역할이 필요하다. 해당 IAM 역할의 정책에는 대상 로그 그룹을 생성하고 로그 스트림을 생성 및 이벤트를 게시할 수 있는 권한(`logs:CreateLogGroup`, `logs:CreateLogStream`, `logs:PutLogEvents`)이 명시되어야 한다. `logs:CreateLogGroup` 권한이 누락되면 CloudWatch Logs 에서 대상을 생성할 수 없어 로그 데이터가 나타나지 않으므로 A 가 정답이다. `logs:CreateExportTask`는 CloudWatch 데이터를 S3 로 보낼 때 사용하므로 B 는 오답이다. IPv6 환경(C)이나 VPC 피어링(D) 조건은 로그 게시를 원천 차단하지 않는다."
  },
  {
   "num": 6,
   "question": "한 회사가 레거시 애플리케이션을 AWS 로 마이그레이션하고 있습니다. 회사는 여러 가용 영역(Availability Zone)에 걸쳐 있는 Amazon EC2 인스턴스에 레거시 애플리케이션을 수동으로 설치하고 구성합니다. 또한 애플리케이션을 위한 Application Load Balancer(ALB)를 설정합니다. 회사는 대상 그룹(Target group)의 라우팅 알고리즘을 가중치 기반 무작위(Weighted random)로 설정합니다. 이 애플리케이션은 세션 선호도(Session affinity)가 필요합니다. 애플리케이션을 배포한 후, 사용자들은 레거시 버전의 애플리케이션에는 존재하지 않았던 무작위 애플리케이션 오류를 보고합니다. 대상 그룹의 상태 검사(Health check)에서는 아무런 실패도 나타나지 않습니다. 회사는 이 애플리케이션 오류를 해결해야 합니다. 이 요구사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "대상 그룹의 라우팅 알고리즘을 최저 미처리 요청(Least outstanding requests)으로 설정합니다.",
    "B": "대상 그룹에 대한 이상 탐지 완화(Anomaly mitigation)를 활성화합니다.",
    "C": "대상 그룹의 교차 가용 영역 로드 밸런싱(Cross-zone load balancing) 속성을 비활성화합니다.",
    "D": "대상 그룹의 등록 취소 지연(Deregistration delay) 속성을 늘립니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Application Load Balancer(ALB)에서 가중치 기반 무작위(Weighted random) 라우팅 알고리즘은 세션 선호도(Sticky sessions) 기능을 지원하지 않는다. 애플리케이션에 세션 선호도가 필요한 상황에서 이 알고리즘을 사용하면 클라이언트의 연속된 요청이 동일한 인스턴스로 고정되지 못하고 무작위로 분산되므로 세션 불일치로 인한 오류가 발생한다. 반면 최저 미처리 요청(Least outstanding requests) 및 라운드 로빈(Round robin) 알고리즘은 세션 선호도와 함께 사용할 수 있으므로 라우팅 알고리즘을 변경하여 문제를 해결할 수 있다. 따라서 A 가 정답이다."
  },
  {
   "num": 7,
   "question": "한 회사가 시점 복구(point-in-time recovery), 백트래킹(backtracking), 자동 백업이 활성화된 Amazon Aurora MySQL DB 클러스터를 사용하고 있습니다. CloudOps 엔지니어는 지난 72 시간 이내의 특정 복구 지점으로 DB 클러스터를 되돌려야 합니다. 복구 작업은 동일한 운영 DB 클러스터 내에서 완료되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Aurora 복제본(Replica)을 생성합니다. 기존 기본 DB 인스턴스를 대체하도록 복제본을 승격합니다.",
    "B": "기존 DB 클러스터로 자동 백업을 복원하는 AWS Lambda 함수를 생성합니다.",
    "C": "백트래킹을 사용하여 기존 DB 클러스터를 원하는 복구 지점으로 되돌립니다.",
    "D": "시점 복구를 사용하여 기존 DB 클러스터를 원하는 복구 지점으로 복원합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon Aurora MySQL 의 백트래킹(backtracking) 기능은 새 DB 클러스터를 생성하지 않고 기존 DB 클러스터를 지정한 과거 시점으로 인플레이스(in-place) 되돌리는 기능이다. 시점 복구(PITR, D)나 백업 복원(B)은 반드시 새로운 DB 클러스터를 생성하여 데이터를 복원하므로 \"동일한 운영 DB 클러스터 내에서 복구 완료\"라는 조건을 충족하지 못한다. Aurora 복제본 승격(A) 역시 특정 과거 시점으로 데이터를 되돌리는 솔루션이 아니다."
  },
  {
   "num": 8,
   "question": "CloudOps 엔지니어가 실패한 AWS CloudFormation 스택 생성 문제를 해결하고 있습니다. CloudOps 엔지니어가 문제를 파악하기 전에 스택과 리소스가 삭제되었습니다. 향후 배포를 위해 CloudOps 엔지니어는 CloudFormation 이 성공적으로 생성한 모든 리소스를 보존해야 합니다. 이 요구 사항을 충족하기 위해 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "스택 생성 중 DisableRollback 파라미터의 값을 False 로 설정합니다.",
    "B": "스택 생성 중 OnFailure 파라미터의 값을 DO_NOTHING 으로 설정합니다.",
    "C": "스택 생성 중 롤백 트리거가 DO_NOTHING 인 롤백 구성을 지정합니다.",
    "D": "스택 생성 중 OnFailure 파라미터의 값을 ROLLBACK 으로 설정합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "CloudFormation 스택 생성 실패 시 기본 동작은 롤백(ROLLBACK) 수행이며, 이 과정에서 성공적으로 생성되었던 리소스까지 모두 삭제된다. 문제 해결 및 원인 분석을 위해 이미 생성된 리소스를 유지하려면 스택 생성 시 `OnFailure` 파라미터를 `DO_NOTHING`으로 설정하거나 `DisableRollback`을 `True`로 설정해야 한다. `OnFailure`를 `ROLLBACK`(D)으로 설정하거나 `DisableRollback`을 `False`(A)로 설정하면 실패 시 리소스가 삭제된다."
  },
  {
   "num": 9,
   "question": "한 회사가 Elastic Load Balancing(ELB) 로드 밸런서 뒤의 Amazon EC2 인스턴스에서 공개 웹 애플리케이션을 실행할 계획입니다. 회사의 보안 팀은 AWS Certificate Manager(ACM) 인증서를 사용하여 웹사이트를 보호하고자 합니다. 로드 밸런서는 모든 HTTP 요청을 HTTPS 로 자동으로 리디렉션해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "포트 80 에 하나의 HTTPS 리스너가 있는 Application Load Balancer 를 생성합니다. 리스너 포트 80 에 SSL/TLS 인증서를 연결합니다. HTTP 에서 HTTPS 로 요청을 리디렉션하는 규칙을 생성합니다.",
    "B": "포트 80 에 하나의 HTTP 리스너와 포트 443 에 하나의 HTTPS 프로토콜 리스너가 있는 Application Load Balancer 를 생성합니다. 리스너 포트 443 에 SSL/TLS 인증서를 연결합니다. 포트 80 에서 포트 443 으로 요청을 리디렉션하는 규칙을 생성합니다.",
    "C": "포트 80 과 포트 443 에 두 개의 TCP 리스너가 있는 Application Load Balancer 를 생성합니다. 리스너 포트 443 에 SSL/TLS 인증서를 연결합니다. 포트 80 에서 포트 443 으로 요청을 리디렉션하는 규칙을 생성합니다.",
    "D": "포트 80 과 포트 443 에 두 개의 TCP 리스너가 있는 Network Load Balancer 를 생성합니다. 리스너 포트 443 에 SSL/TLS 인증서를 연결합니다. 포트 80 에서 포트 443 으로 요청을 리디렉션하는 규칙을 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "HTTP(포트 80) 요청을 HTTPS(포트 443)로 자동 리디렉션하는 기능은 7 계층(L7) 로드 밸런서인 Application Load Balancer(ALB)의 리스너 규칙을 통해 제공된다. ALB 는 포트 80 의 HTTP 리스너와 포트 443 의 HTTPS 리스너(ACM 인증서 연결)를 각각 구성한 뒤, 포트 80 리스너에서 443 포트로의 리디렉션 규칙을 설정해야 한다. 포트 80 은 HTTPS 리스너로 사용할 수 없으며(A), ALB 는 TCP 전용 리스너를 지원하지 않고(C), Network Load Balancer(NLB)는 L4 수준 동작으로 HTTP 계층 리디렉션 규칙을 자체 제공하지 않는다(D)."
  },
  {
   "num": 10,
   "question": "한 회사는 AWS Organizations 를 사용하여 여러 AWS 계정을 관리합니다. 회사는 조직 내에 조직 단위(OU)를 설정했습니다. application OU 는 다양한 응용 프로그램을 지원합니다. CloudOps 엔지니어는 사용자가 application OU 의 모든 계정에 CostCenter-Project 태그가 없는 Amazon EC2 인스턴스를 생성하지 못하도록 차단해야 합니다. 이 제한 사항은 application OU 의 계정에만 적용되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CostCenter-Project 태그가 있을 때 ec2:RunInstances 작업을 허용하는 정책이 있는 IAM 그룹을 생성합니다. application 계정에 대한 액세스가 필요한 모든 IAM 사용자를 IAM 그룹에 배치합니다.",
    "B": "CostCenter-Project 태그가 누락되었을 때 ec2:RunInstances 작업을 거부(Deny)하는 서비스 제어 정책(SCP)을 생성합니다. SCP 를 application OU 에 연결합니다.",
    "C": "CostCenter-Project 태그가 있을 때 ec2:RunInstances 작업을 허용하는 정책이 있는 IAM 역할을 생성합니다. application OU 계정에 있는 IAM 사용자에게 IAM 역할을 연결합니다.",
    "D": "CostCenter-Project 태그가 누락되었을 때 ec2:RunInstances 작업을 거부(Deny)하는 서비스 제어 정책(SCP)을 생성합니다. SCP 를 루트(root) OU 에 연결합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Organizations 환경에서 특정 OU 에 속한 모든 계정에 중앙 집중식 가드레일을 강제 적용하려면 서비스 제어 정책(SCP)을 사용한다. 태그 누락 시 인스턴스 생성을 금지하려면 태그 조건이 충족되지 않을 때 `ec2:RunInstances`를 명시적으로 거부(Deny)하는 SCP 를 생성하고 이를 대상이 되는 application OU 에 연결해야 한다. 루트 OU 에 연결하면(D) 조직 전체에 정책이 적용되어 해당 OU 에만 적용해야 한다는 조건을 위반한다. IAM 그룹(A)이나 IAM 역할(C)은 계정 단위로 관리해야 하므로 조직 차원의 중앙 통제 및 강제성이 부족하다."
  },
  {
   "num": 11,
   "question": "한 회사가 300 개 이상의 Linux 기반 인스턴스에서 비즈니스 애플리케이션을 실행하고 있습니다. 각 인스턴스에는 AWS Systems Manager Agent(SSM Agent)가 설치되어 있습니다. 회사는 향후 인스턴스 수가 증가할 것으로 예상합니다. 모든 비즈니스 애플리케이션 인스턴스에는 동일한 사용자 정의 태그가 지정되어 있습니다. CloudOps 엔지니어는 비공개 리포지토리에서 패키지를 다운로드하고 설치하기 위해 모든 비즈니스 애플리케이션 인스턴스에서 명령을 실행하고자 합니다. 리포지토리에 과도한 부하가 걸리는 것을 방지하기 위해 CloudOps 엔지니어는 한 번에 30 개 이하의 다운로드만 발생하도록 보장하고자 합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "보조 태그를 사용하여 각각 30 개 인스턴스로 구성된 10 개의 배치(batch)를 생성합니다. Systems Manager Run Command 문서를 사용하여 패키지를 다운로드하고 설치합니다. 보조 태그를 사용하여 Run Command 문서의 일부로 대상을 지정합니다. 각 배치를 한 번씩 실행합니다.",
    "B": "사용자 정의 태그가 있는 인스턴스 ID 목록을 읽는 Systems Manager Run Command 문서를 자동으로 실행하도록 AWS Lambda 함수를 사용합니다. Lambda 함수의 예약된 동시성을 30 으로 설정합니다.",
    "C": "Systems Manager Run Command 문서를 사용하여 패키지를 다운로드하고 설치합니다. 속도 제어(rate control)를 사용하여 동시성을 30 으로 설정합니다. Run Command 문서의 일부로 사용자 정의 태그를 사용하여 대상을 지정합니다.",
    "D": "AWS Step Functions 의 병렬 워크플로 상태를 사용하여 사용자 정의 태그가 있는 인스턴스 ID 목록을 읽는 Systems Manager Run Command 문서를 자동으로 실행합니다. 병렬 상태 수를 30 으로 설정합니다. Step Functions 워크플로를 10 번 실행합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Systems Manager Run Command 는 실행 대상 지정 시 태그 기반 타겟팅을 지원하며, 내장된 속도 제어(Rate Control / Concurrency) 기능을 통해 한 번에 명령을 실행할 인스턴스 수를 직접 제한할 수 있다. 동시성을 30 으로 설정하면 SSM 이 자동으로 30 개씩 차례대로 작업을 수행하므로 추가적인 스크립트 작성이나 태그 분할, 외부 서비스(Lambda, Step Functions) 연동 없이 운영 효율성을 극대화할 수 있다."
  },
  {
   "num": 12,
   "question": "한 회사가 회복탄력성을 제공하기 위해 여러 AWS 리전에서 지연 시간 기반 라우팅과 함께 Amazon Route 53 을 사용하고 있습니다. 회사는 지연 시간 기반 라우팅이 적용된 Route 53 을 사용하여 트래픽을 가장 가까운 리전으로 전달합니다. 각 리전 내에서는 가중치 기반 A 레코드가 여러 가용 영역(AZ)에 걸쳐 트래픽을 분산합니다. 최근 업데이트 중에 일부 가용 영역 엔드포인트가 비정상 상태가 되었습니다. Route 53 은 비정상 엔드포인트로 트래픽을 계속 라우팅했습니다. 회사는 향후 이러한 문제가 발생하지 않도록 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "최근 업데이트 중 트래픽을 받은 각 가중치 레코드에 대해 Route 53 헬스 체크(상태 검사)를 추가합니다.",
    "B": "업데이트 중 트래픽이 이동해야 하는 리전의 Route 53 레코드 가중치를 높입니다.",
    "C": "모든 리전에서 균일하게 지연 시간 기반 라우팅을 사용하도록 모든 레코드를 재구성합니다.",
    "D": "변경 사항을 더 빠르게 감지하도록 지연 시간 기반 라우팅의 TTL 값을 줄입니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon Route 53 레코드에 헬스 체크(Health Check)가 연결되어 있지 않으면 엔드포인트의 장애 여부를 감지할 수 없으므로 비정상 상태인 엔드포인트로도 트래픽을 계속 전달한다. 가중치 기반 레코드에 헬스 체크를 구성해야 모니터링 중인 엔드포인트가 비정상이 되었을 때 Route 53 이 해당 레코드를 DNS 응답에서 제외하고 정상 엔드포인트로 트래픽을 우회시킬 수 있다. 가중치 변경(B)이나 TTL 단축(D)은 엔드포인트의 자동 장애 감지 및 우회 라우팅을 수행하지 못한다."
  },
  {
   "num": 13,
   "question": "한 회사는 AWS 계정에서 시작되는 모든 Amazon EC2 Windows 인스턴스에 제 3 자(Third-party) 에이전트가 설치되어 있는지 확인해야 합니다. 회사는 AWS Systems Manager 를 사용하며, Windows 인스턴스에는 적절한 태그가 지정되어 있습니다. 회사는 제 3 자 에이전트의 업데이트가 제공될 때 주기적으로 업데이트를 배포해야 합니다. 가장 적은 운영 노력으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "제 3 자 에이전트에 대한 Systems Manager Distributor 패키지를 생성합니다.",
    "B": "Windows 용 태그 값을 포함하는 Systems Manager OpsItem 을 생성합니다. OpsItem 에 Systems Manager 인벤토리를 연결합니다.",
    "C": "AWS Lambda 함수를 생성합니다. Lambda 함수가 각 인스턴스에 로그인하여 필요에 따라 제 3 자 에이전트를 설치하거나 업데이트하도록 프로그래밍합니다.",
    "D": "AWS-RunRemoteScript 문서를 실행하기 위한 Systems Manager State Manager 연결(association)을 생성합니다. 제 3 자 에이전트 패키지의 세부 정보를 채웁니다.",
    "E": "AWS-ConfigureAWSPackage 문서를 실행하기 위한 Systems Manager State Manager 연결(association)을 생성합니다. 제 3 자 에이전트 패키지의 세부 정보를 채웁니다. Windows 에 적합한 태그 값을 기반으로 인스턴스 태그를 지정합니다."
   },
   "answer": [
    "A",
    "E"
   ],
   "explanation": "AWS Systems Manager Distributor 는 소프트웨어 패키지(에이전트 등)를 생성, 게시 및 관리하는 전용 기능이다(A). 이렇게 생성된 Distributor 패키지는 Systems Manager State Manager 에서 기본 제공하는 문서인 `AWS-ConfigureAWSPackage`를 활용하여 대상 태그가 지정된 인스턴스에 자동으로 설치하고 주기적으로 업데이트 상태를 유지할 수 있다(E). 이 방식을 사용하면 커스텀 스크립트 작성(C, D) 없이 최소한의 운영 노력으로 요구 사항을 달성한다."
  },
  {
   "num": 14,
   "question": "한 회사가 두 AWS 리전에서 사용자 지정 Amazon Machine Image(AMI)로부터 Amazon EC2 인스턴스를 배포했습니다. 회사는 모든 인스턴스를 AWS Systems Manager 에 등록했습니다. 회사는 일부 인스턴스의 운영체제에 심각한 제로데이 취약점이 있음을 발견했습니다. 그러나 회사는 영향을 받은 인스턴스가 몇 개인지 알지 못합니다. CloudOps 엔지니어는 영향을 받은 EC2 인스턴스에 운영체제 패치를 배포하기 위한 솔루션을 구현해야 합니다. 운영 오버헤드가 가장 적은 솔루션은 무엇입니까?",
   "options": {
    "A": "Systems Manager Patch Manager 에서 패치 베이스라인을 정의합니다. Patch Manager 검사(scan)를 사용하여 영향을 받은 인스턴스를 식별합니다. 각 리전의 Patch Now 옵션을 사용하여 영향을 받은 인스턴스를 업데이트합니다.",
    "B": "AWS Config 를 사용하여 영향을 받은 인스턴스를 식별합니다. Systems Manager Patch Manager 에서 패치 베이스라인을 정의합니다. Patch Manager 의 Patch Now 옵션을 사용하여 영향을 받은 인스턴스를 업데이트합니다.",
    "C": "Systems Manager 준수(Compliance) 이벤트에 반응하는 Amazon EventBridge 규칙을 생성합니다. 영향을 받은 인스턴스에서 패치 베이스라인을 실행하도록 EventBridge 규칙을 구성합니다.",
    "D": "AWS Config 를 사용하여 영향을 받은 인스턴스를 식별합니다. 원하는 패치로 기존 EC2 AMI 를 업데이트합니다. 새 AMI 에서 인스턴스를 수동으로 시작하여 두 리전의 영향을 받은 인스턴스를 교체합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager Patch Manager 는 관리형 인스턴스의 누락된 OS 패치 검사(Scan)와 패치 적용(Install)을 통합 제공한다. Patch Manager 내에서 패치 베이스라인을 설정하고 \"Patch Now\" 기능을 이용하면 별도의 인프라 검색 서비스(AWS Config)를 사용할 필요 없이 영향을 받은 인스턴스를 즉시 스캔하고 업데이트할 수 있어 운영 오버헤드가 가장 적다. AMI 를 수정하고 수동으로 인스턴스를 교체하는 방식(D)은 운영 부담이 매우 크다."
  },
  {
   "num": 15,
   "question": "한 회사가 Amazon EC2 인스턴스에서 FTP 서버를 호스팅합니다. 회사의 AWS 환경에서 인스턴스에 연결된 보안 그룹에서 FTP 포트가 퍼블릭으로 노출되었기 때문에 AWS Security Hub 가 EC2 인스턴스에 대한 발견 항목(finding)을 Amazon EventBridge 로 보냅니다. CloudOps 엔지니어는 이 Security Hub 발견 항목 및 유사한 노출 포트 발견 항목을 수정하기 위한 자동화된 솔루션을 원합니다. CloudOps 엔지니어는 이벤트 기반 방식을 사용하고자 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "노출된 포트가 있는 EC2 인스턴스를 중지하도록 기존 EventBridge 이벤트를 구성합니다.",
    "B": "AWS Lambda 함수를 호출하기 위해 FTP 서버에 대한 크론 작업(cron job)을 생성합니다. 식별된 EC2 인스턴스의 보안 그룹을 수정하고 퍼블릭 액세스를 허용하는 인스턴스를 제거하도록 Lambda 함수를 구성합니다.",
    "C": "AWS Lambda 함수를 호출하는 FTP 서버용 크론 작업(cron job)을 생성합니다. FTP 대신 SFTP 를 사용하도록 서버를 수정하도록 Lambda 함수를 구성합니다.",
    "D": "기존 EventBridge 이벤트가 AWS Lambda 함수를 호출하도록 구성합니다. 퍼블릭 액세스를 허용하는 보안 그룹 규칙을 제거하도록 함수를 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "보안 조치 자동화에서 이벤트 기반(Event-driven) 아키텍처는 AWS Security Hub 가 생성한 발견 항목 이벤트를 Amazon EventBridge 가 수신하고, 이에 대한 조치(Remediation)로 AWS Lambda 함수를 직접 트리거하는 방식이다. Lambda 함수가 퍼블릭 인바운드 허용 보안 그룹 규칙을 자동으로 삭제하도록 구성하는 것이 문제의 요구 사항에 부합한다. Cron 작업(B, C)은 주기적 폴링 방식으로 이벤트 기반이 아니며, 인스턴스 자체를 중지하는 것(A)은 보안 그룹의 결함을 수정하지 않는다."
  },
  {
   "num": 16,
   "question": "한 회사가 여러 고성능 컴퓨팅(HPC) 가상 머신(VM)을 AWS 의 Amazon EC2 인스턴스로 마이그레이션할 계획입니다. CloudOps 엔지니어는 이 배포를 위한 배치 그룹(placement group)을 식별해야 합니다. 전략은 네트워크 지연 시간을 최소화하고 HPC VM 간의 네트워크 처리량을 극대화해야 합니다. 이러한 요구 사항을 충족하기 위해 CloudOps 엔지니어는 어떤 전략을 선택해야 합니까?",
   "options": {
    "A": "단일 가용 영역의 클러스터 배치 그룹(cluster placement group)에 인스턴스를 배포합니다.",
    "B": "두 가용 영역의 분할 배치 그룹(partition placement group)에 인스턴스를 배포합니다.",
    "C": "단일 가용 영역의 분할 배치 그룹(partition placement group)에 인스턴스를 배포합니다.",
    "D": "두 가용 영역의 분산 배치 그룹(spread placement group)에 인스턴스를 배포합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "HPC(고성능 컴퓨팅) 워크로드에서 인스턴스 간 네트워크 지연 시간을 최소화하고 처리량을 극대화하려면 단일 가용 영역(AZ) 내에 클러스터 배치 그룹(cluster placement group)을 사용해야 한다. 클러스터 배치 그룹은 동일한 가용 영역 내의 단일 랙에 인스턴스들을 물리적으로 가깝게 배치하여 최저 지연 시간과 높은 네트워크 성능을 제공한다. 분할 배치 그룹(B, C)은 대규모 분산/복제 워크로드(HDFS, Cassandra 등)에 적합하며, 분산 배치 그룹(D)은 각 인스턴스를 서로 다른 하드웨어 랙에 배치하여 하드웨어 장애 위험을 격리하는 데 사용된다."
  },
  {
   "num": 17,
   "question": "한 회사는 AWS Organizations 를 사용하여 AWS 계정 집합을 관리합니다. 회사의 보안 팀은 AWS 네이티브 서비스를 사용하여 모든 AWS 계정을 Center for Internet Security(CIS) AWS Foundations Benchmark 표준에 맞춰 정기적으로 검사하고자 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 방법은 무엇입니까?",
   "options": {
    "A": "중앙 보안 계정을 AWS Security Hub 관리자 계정으로 지정합니다. Security Hub 관리자 계정에서 초대장을 보내고 멤버 계정에서 초대장을 수락하는 스크립트를 생성합니다. 새 계정이 생성될 때마다 스크립트를 실행합니다. CIS AWS Foundations Benchmark 검사를 실행하도록 Security Hub 를 구성합니다.",
    "B": "Amazon Inspector 를 사용하여 모든 계정에서 CIS AWS Foundations Benchmark 를 실행합니다.",
    "C": "중앙 보안 계정을 Amazon GuardDuty 관리자 계정으로 지정합니다. GuardDuty 관리자 계정에서 초대장을 보내고 멤버 계정에서 초대장을 수락하는 스크립트를 생성합니다. 새 계정이 생성될 때마다 스크립트를 실행합니다. CIS AWS Foundations Benchmark 검사를 실행하도록 GuardDuty 를 구성합니다.",
    "D": "AWS Security Hub 관리자 계정을 지정합니다. 조직의 새 계정이 자동으로 멤버 계정이 되도록 구성합니다. CIS AWS Foundations Benchmark 검사를 활성화합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Security Hub 는 CIS AWS Foundations Benchmark 등 다양한 보안 표준 준수 여부를 정기적으로 스캔하는 AWS 네이티브 서비스이다. AWS Organizations 와 통합된 Security Hub 관리자 계정을 지정하면 조직 내의 기존 및 신규 생성되는 멤버 계정을 자동으로 연동(Auto-enable)할 수 있으므로 별도의 수동 스크립트 작성이나 초대 수락 절차(A, C) 없이 가장 운영 효율적으로 통합 모니터링을 구현할 수 있다. Amazon Inspector(B)는 EC2 인스턴스, 컨테이너 등의 취약점 평가에 특화된 서비스이며, GuardDuty(C)는 위협 탐지 서비스로 보안 표준 규준 스캔을 제공하지 않는다."
  },
  {
   "num": 18,
   "question": "한 회사에는 필요 이상으로 높은 볼륨 성능 용량을 가진 Amazon EC2 인스턴스를 배포하는 사용자들이 있습니다. CloudOps 엔지니어는 인스턴스와 연결된 모든 Amazon Elastic Block Store(Amazon EBS) 볼륨을 검토하고 IOPS 및 처리량을 기반으로 비용 최적화 권장 사항을 생성해야 합니다. 가장 운영 효율적인 방식으로 이러한 요구 사항을 충족하려면 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "EC2 콘솔의 모니터링 그래프를 사용하여 EBS 볼륨의 메트릭을 확인합니다. 각 볼륨에 대해 프로비저닝된 공간 대비 사용된 공간을 검토합니다. 사용률이 낮은 볼륨을 식별합니다.",
    "B": "EC2 콘솔에서 EC2 인스턴스를 중지합니다. EC2 인스턴스 유형을 Amazon EBS 최적화(EBS-optimized)로 변경합니다. EC2 인스턴스를 시작합니다.",
    "C": "AWS Compute Optimizer 사용을 신청(Opt in)합니다. 메트릭이 수집될 때까지 충분한 시간을 기다립니다. EBS 볼륨에 대한 Compute Optimizer 권장 사항을 검토합니다.",
    "D": "EC2 인스턴스에 fio 도구를 설치하고 필요한 워크로드를 근사화하는 .cfg 파일을 생성합니다. 벤치마크 결과를 사용하여 프로비저닝된 EBS 볼륨이 가장 적절한 유형인지 측정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Compute Optimizer 는 기계 학습을 통해 EC2, EBS, Lambda 등의 사용량 메트릭을 분석하고 성능 요구 사항에 맞는 적절한 볼륨 유형, IOPS, 처리량 등에 대한 비용 최적화 권장 사항을 자동으로 제공하는 서비스이다. Compute Optimizer 에 Opt- in 하면 추가 도구 설치(D)나 콘솔에서의 수동 분석(A) 없이 최소한의 노력으로 가장 운영 효율적인 권장 사항을 얻을 수 있다. EBS 최적화 인스턴스 변경(B)은 인스턴스와 볼륨 간 전용 대역폭을 확보하는 설정일 뿐, 볼륨 크기/성능의 비용 최적화 권장 사항을 생성해 주지 않는다."
  },
  {
   "num": 19,
   "question": "CloudOps 엔지니어는 회사의 모든 현재 및 미래의 Amazon S3 버킷에 로깅이 활성화되어 있는지 확인해야 합니다. S3 버킷에 로깅이 활성화되어 있지 않은 경우, 자동화된 프로세스가 해당 S3 버킷에 대해 로깅을 활성화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Trusted Advisor 를 사용하여 로깅이 활성화되지 않은 S3 버킷을 검사합니다. 로깅이 활성화되지 않은 S3 버킷에 대해 로깅을 활성화하도록 검사를 구성합니다.",
    "B": "현재 및 미래의 모든 S3 버킷에 로깅을 활성화하도록 요구하는 S3 버킷 정책을 구성합니다.",
    "C": "s3-bucket-logging-enabled AWS Config 관리형 규칙을 사용합니다. AWS Lambda 함수를 사용하여 로깅을 활성화하는 수정 조치(remediation action)를 추가합니다.",
    "D": "s3-bucket-logging-enabled AWS Config 관리형 규칙을 사용합니다. AWS- ConfigureS3BucketLogging AWS Systems Manager Automation 런북을 사용하여 로깅을 활성화하는 수정 조치(remediation action)를 추가합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Config 의 관리형 규칙인 `s3-bucket-logging-enabled`를 사용하면 로깅이 비활성화된 S3 버킷을 지속적으로 감지할 수 있다. 규정 미준수(Non-compliant) 자원에 대해서는 AWS Config 의 자동 수정(Auto Remediation) 기능을 활용하여 AWS Systems Manager(SSM) Automation 런북인 `AWS-ConfigureS3BucketLogging`을 트리거함으로써, 추가적인 사용자 지정 커스텀 Lambda 코드 작성(C) 없이 기본 제공되는 런북으로 로깅을 자동 활성화할 수 있다. Trusted Advisor(A)는 리소스 구성을 직접 수정하는 자동 조치 기능을 제공하지 않으며, 버킷 정책(B)은 로깅 설정을 자동으로 강제/활성화하는 용도로 사용되지 않는다."
  },
  {
   "num": 20,
   "question": "한 회사에 수백만 명의 구독자가 있습니다. 회사의 마케팅 부서는 매주 토요일마다 구독자에게 알림을 보내는 프로세스를 자동화하고자 합니다. 회사에는 이미 Amazon Simple Notification Service(Amazon SNS)를 사용하여 구독자에게 알림을 보내는 메커니즘이 있습니다. 하지만 지금까지는 수동으로 구독자에게 알림을 보내왔습니다. CloudOps 엔지니어는 정해진 일정에 따라 알림을 자동으로 전송하는 솔루션이 필요합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "새 Amazon EC2 인스턴스를 시작합니다. 매주 토요일마다 AWS SDK 를 사용하여 구독자에게 SNS 알림을 전송하도록 크론 작업(cron job)을 구성합니다.",
    "B": "매주 토요일마다 트리거되는 Amazon EventBridge 규칙을 생성합니다. SNS 주제에 알림을 게시하도록 규칙을 구성합니다.",
    "C": "매주 토요일마다 구독자에게 알림을 보내는 메시지 팬아웃(message fanout)에 대한 SNS 구독을 생성합니다.",
    "D": "AWS Step Functions 일정 기능을 사용하여 매주 토요일마다 Step Functions 단계를 실행합니다. SNS 주제에 메시지를 게시하도록 단계를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon EventBridge 의 예약된 규칙(Scheduled Rule, Cron/Rate 표현식)을 사용하면 서버리스 방식으로 특정 시간/주기마다 이벤트를 실행할 수 있다. EventBridge 규칙의 타깃(Target)으로 기존 Amazon SNS 주제를 직접 지정할 수 있으므로, 인스턴스 관리(A)나 과도한 서버리스 워크플로 구성(D) 없이 가장 간단하고 운영 효율적으로 자동화 스케줄링을 구현할 수 있다. SNS 자체에는 스케줄링 발행 기능이 없다(C)."
  },
  {
   "num": 21,
   "question": "CloudOps 엔지니어가 회사의 재해 복구 절차를 담당하고 있습니다. 회사는 운영 계정에 소스 Amazon S3 버킷을 보유하고 있으며, 소스에서 비운영 계정의 대상 S3 버킷으로 객체를 복제하고자 합니다. CloudOps 엔지니어는 소스 S3 버킷을 대상 S3 버킷으로 복사하기 위해 S3 교차 리전 및 교차 계정 복제를 구성합니다. CloudOps 엔지니어가 대상 S3 버킷의 객체에 액세스하려고 하면 'Access Denied(액세스 거부)' 오류가 발생합니다. 이 문제를 해결할 솔루션은 무엇입니까?",
   "options": {
    "A": "객체 소유권을 대상 S3 버킷 소유자로 변경하도록 복제 구성을 수정합니다.",
    "B": "복제 규칙이 소스 S3 버킷의 모든 객체에 적용되고 단일 접두사(prefix)로 범위가 지정되지 않았는지 확인합니다.",
    "C": "S3 복제 시간 제어(S3 RTC) 시간이 경과한 후 요청을 다시 시도합니다.",
    "D": "복제된 객체의 스토리지 클래스가 소스 S3 버킷과 대상 S3 버킷 간에 변경되지 않았는지 확인합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "교차 계정(Cross-Account) S3 복제 시 기본적으로 복제된 객체의 소유권은 소스 계정에 남아 있다. 이로 인해 대상 계정의 소유자나 IAM 사용자가 복제된 객체에 접근하려 할 때 'Access Denied' 오류가 발생한다. 복제 구성에서 객체 소유권을 대상 버킷 소유자로 변경(Override object ownership)하도록 설정해야 대상 계정에 소유권이 이전되어 정상 접근이 가능해진다. S3 RTC(C)는 복제 소요 시간 관련 보장 기능이며, 접두사 범위(B)나 스토리지 클래스(D)는 권한 거부 문제와 직접적인 관련이 없다."
  },
  {
   "num": 22,
   "question": "Amazon EC2 인스턴스가 Amazon Simple Queue Service(Amazon SQS) 대기열을 사용하는 애플리케이션을 실행하고 있습니다. CloudOps 엔지니어는 애플리케이션이 SQS 대기열에서 메시지를 읽고, 쓰고, 삭제할 수 있도록 해야 합니다. 가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "적절한 대기열에 대한 sqs:SendMessage, sqs:ReceiveMessage, sqs:DeleteMessage 권한을 허용하는 IAM 정책을 포함한 IAM 사용자를 생성합니다. 애플리케이션 구성에 IAM 사용자의 자격 증명을 포함합니다.",
    "B": "적절한 대기열에 대한 sqs:SendMessage, sqs:ReceiveMessage, sqs:DeleteMessage 권한을 허용하는 IAM 정책을 포함한 IAM 사용자를 생성합니다. EC2 인스턴스에 IAM 사용자의 액세스 키와 보안 액세스 키를 환경 변수로 내보냅니다.",
    "C": "EC2 인스턴스가 AWS 서비스를 호출할 수 있도록 허용하는 IAM 역할을 생성하고 연결합니다. 적절한 대기열에 대해 sqs:* 권한을 허용하는 IAM 정책을 역할에 연결합니다.",
    "D": "EC2 인스턴스가 AWS 서비스를 호출할 수 있도록 허용하는 IAM 역할을 생성하고 연결합니다. 적절한 대기열에 대해 sqs:SendMessage, sqs:ReceiveMessage, sqs:DeleteMessage 권한을 허용하는 IAM 정책을 역할에 연결합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "EC2 인스턴스에서 실행되는 애플리케이션이 AWS 서비스에 안전하게 액세스하려면 IAM 사용자의 자격 증명(액세스 키)을 하드코딩하거나 환경 변수에 저장하는 대신 IAM 역할을 인스턴스에 연결하여 임시 자격 증명을 사용해야 한다(A, B 제외). 또한 최소 권한의 원칙(Least Privilege)에 따라 모든 권한(`sqs:*`, C)을 부여하는 대신 애플리케이션 동작에 필요한 최소한의 권한(`sqs:SendMessage`, `sqs:ReceiveMessage`, `sqs:DeleteMessage`)만 명시적으로 허용해야 한다."
  },
  {
   "num": 23,
   "question": "CloudOps 엔지니어가 Amazon RDS for PostgreSQL DB 인스턴스를 위한 솔루션을 설계하고 있습니다. 데이터베이스 자격 증명은 매월 저장되고 순환(rotate)되어야 합니다. DB 인스턴스에 연결되는 애플리케이션은 쓰기 집약적인 트래픽을 전송하며, 클라이언트 연결 수가 변동적이고 짧은 시간 내에 급격히 증가할 때가 있습니다. CloudOps 엔지니어가 이러한 요구 사항을 충족하기 위해 선택해야 하는 솔루션은 무엇입니까?",
   "options": {
    "A": "DB 인스턴스의 키를 자동으로 순환하도록 AWS Key Management Service(AWS KMS)를 구성합니다. 데이터베이스 연결 증가를 처리하기 위해 RDS Proxy 를 사용합니다.",
    "B": "DB 인스턴스의 키를 자동으로 순환하도록 AWS Key Management Service(AWS KMS)를 구성합니다. 데이터베이스 연결 증가를 처리하기 위해 RDS 읽기 전용 복제본(read replica)을 사용합니다.",
    "C": "DB 인스턴스의 자격 증명을 자동으로 순환하도록 AWS Secrets Manager 를 구성합니다. 데이터베이스 연결 증가를 처리하기 위해 RDS Proxy 를 사용합니다.",
    "D": "DB 인스턴스의 자격 증명을 자동으로 순환하도록 AWS Secrets Manager 를 구성합니다. 데이터베이스 연결 증가를 처리하기 위해 RDS 읽기 전용 복제본(read replica)을 사용합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "데이터베이스 사용자 이름 및 암호와 같은 자격 증명의 저장 및 자동 순환(Rotation)은 AWS Secrets Manager 를 통해 처리한다. AWS KMS(A, B)는 암호화 키를 관리 및 순환하는 서비스이며 DB 자격 증명을 순환하지 않는다. 또한, 짧은 시간 동안 가변적이고 폭발적으로 증가하는 데이터베이스 클라이언트 연결 풀을 효율적으로 관리하고 오버헤드를 줄이려면 RDS Proxy 를 사용하는 것이 적합하다. 읽기 전용 복제본(B, D)은 읽기 트래픽 분산에는 도움이 되나 쓰기 집약적(write-intensive) 트래픽의 연결 폭주 문제를 해결하지 못한다."
  },
  {
   "num": 24,
   "question": "한 회사가 VPC 와 온프레미스 데이터 센터에서 컴퓨팅 리소스를 운영합니다. 회사는 이미 VPC 와 온프레미스 데이터 센터 간에 AWS Direct Connect 연결을 확보하고 있습니다. CloudOps 엔지니어는 VPC 의 Amazon EC2 인스턴스가 온프레미스 데이터 센터에 있는 호스트의 DNS 이름을 확인(resolve)할 수 있도록 해야 합니다. 지속적인 유지 관리 부담이 가장 적은 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon Route 53 프라이빗 호스팅 영역을 생성합니다. 영역에 온프레미스 데이터 센터 호스트의 호스트 이름과 IP 주소를 등록합니다.",
    "B": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 전달해야 하는 도메인 이름에 대한 온프레미스 DNS 서버의 IP 주소를 추가합니다.",
    "C": "Amazon Route 53 Resolver 에서 역방향 DNS 쿼리를 위한 전달 규칙을 설정합니다. VPC 의 enableDnsHostnames 속성을 true 로 설정합니다.",
    "D": "각 EC2 인스턴스의 /etc/hosts 파일에 온프레미스 호스트의 호스트 이름과 IP 주소를 추가합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "VPC 내부의 EC2 인스턴스가 Direct Connect 를 통해 온프레미스 데이터 센터의 자체 DNS 서버로 도메인 이름 풀이(DNS resolution) 요청을 전달하려면 Amazon Route 53 Resolver 아웃바운드 엔드포인트(Outbound Endpoint) 및 전달 규칙(Forwarding Rule)을 구성해야 한다. 이를 통해 온프레미스 호스트 변경 시 온프레미스 DNS 만 관리하면 되므로 유지 관리 부담이 가장 적다. 프라이빗 호스팅 영역(A)이나 `/etc/hosts` 파일(D)을 수동으로 관리하는 방식은 호스트 변경 시 지속적인 수동 작업이 발생하며, 역방향 DNS(C)는 IP 를 이름으로 변환하는 기능이므로 적합하지 않다."
  },
  {
   "num": 25,
   "question": "한 회사가 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 웹 서버 로그는 Amazon CloudWatch Logs 에 게시됩니다. 로그 이벤트는 동일한 구조를 가지며 사용자 요청과 관련된 HTTP 응답 코드를 포함합니다. 회사는 웹 서버가 HTTP 404 응답을 반환하는 횟수를 모니터링해야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
   "options": {
    "A": "웹 서버가 HTTP 404 응답을 반환하는 횟수를 수집하는 CloudWatch Logs 지표 필터(metric filter)를 생성합니다.",
    "B": "웹 서버가 HTTP 404 응답을 반환하는 횟수를 수집하는 CloudWatch Logs 구독 필터(subscription filter)를 생성합니다.",
    "C": "지난 1 시간 동안의 로그 이벤트에서 404 코드 개수를 집계하는 CloudWatch Logs Insights 쿼리를 실행하는 AWS Lambda 함수를 생성합니다.",
    "D": "지난 1 시간 동안의 로그 이벤트에서 404 코드 개수를 집계하는 CloudWatch Logs Insights 쿼리를 실행하는 스크립트를 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "CloudWatch Logs 지표 필터(Metric Filter)를 사용하면 들어오는 로그 데이터에서 특정 패턴(예: HTTP 404 코드)을 실시간으로 검색하고 이를 CloudWatch Custom Metric 으로 자동 변환하여 카운트할 수 있다. 별도의 Lambda 함수(C)나 외부 스크립트(D)를 작성 및 예약 실행할 필요가 없어 가장 운영 효율적이다. 구독 필터(B)는 로그 이벤트를 Kinesis, Lambda, OpenSearch 등으로 스트리밍할 때 사용하는 기능으로 그 자체로 수량을 카운팅하여 지표화하지 않는다."
  },
  {
   "num": 26,
   "question": "한 회사가 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 내부 웹 애플리케이션을 실행하고 있습니다. 인스턴스는 단일 가용 영역의 Amazon EC2 Auto Scaling 그룹에서 실행됩니다. CloudOps 엔지니어는 애플리케이션을 고가용성(Highly Available)으로 만들어야 합니다. 이 요구 사항을 충족하기 위해 CloudOps 엔지니어는 어떤 조치를 취해야 합니까?",
   "options": {
    "A": "피크 시간대에 필요한 용량을 충족하도록 Auto Scaling 그룹의 최대 인스턴스 수를 늘립니다.",
    "B": "피크 시간대에 필요한 용량을 충족하도록 Auto Scaling 그룹의 최소 인스턴스 수를 늘립니다.",
    "C": "동일한 AWS 리전 내의 두 번째 가용 영역에서 새 인스턴스를 시작하도록 Auto Scaling 그룹을 업데이트합니다.",
    "D": "두 번째 AWS 리전의 가용 영역에서 새 인스턴스를 시작하도록 Auto Scaling 그룹을 업데이트합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "단일 가용 영역(AZ)에 구성된 아키텍처는 해당 가용 영역에 장애가 발생할 경우 서비스 전체가 중단되므로 고가용성을 제공하지 못한다. 고가용성(High Availability)을 달성하기 위한 기본 원칙은 동일한 AWS 리전 내에서 둘 이상의 가용 영역(Multi-AZ)에 인스턴스를 분산 배포하도록 Auto Scaling 그룹을 구성하는 것이다. 인스턴스 수만 늘리는 것(A, B)은 가용 영역 장애에 대비할 수 없으며, 단일 Auto Scaling 그룹은 여러 AWS 리전에 걸쳐 인스턴스를 직접 배포할 수 없다(D)."
  },
  {
   "num": 27,
   "question": "CloudOps 엔지니어가 Amazon EC2 에서 실행되는 간단한 퍼블릭 웹사이트를 생성하고 있습니다. CloudOps 엔지니어는 기존 퍼블릭 서브넷에 EC2 인스턴스를 생성하고 인스턴스에 탄력적 IP(Elastic IP) 주소를 할당했습니다. 그다음 0.0.0.0/0 으로부터의 인바운드 HTTP 트래픽을 허용하는 새 보안 그룹을 생성하여 인스턴스에 적용했습니다. 마지막으로 0.0.0.0/0 으로부터의 인바운드 HTTP 트래픽을 허용하는 새 네트워크 ACL 을 생성하여 서브넷에 적용했습니다. 하지만 인터넷에서 웹사이트에 접속할 수 없습니다. 이 문제의 원인은 무엇입니까?",
   "options": {
    "A": "CloudOps 엔지니어가 새 네트워크 ACL 에 임시 포트(ephemeral port) 반환 트래픽을 허용하는 아웃바운드 규칙을 생성하지 않았습니다.",
    "B": "CloudOps 엔지니어가 보안 그룹에 포트 80 의 HTTP 트래픽을 허용하는 아웃바운드 규칙을 생성하지 않았습니다.",
    "C": "EC2 인스턴스에 할당된 탄력적 IP 주소가 변경되었습니다.",
    "D": "포트 80 의 인바운드 HTTP 트래픽을 거부하는 규칙이 포함된 추가 네트워크 ACL 이 서브넷과 연결되어 있습니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "보안 그룹(Security Group)은 상태 저장(Stateful) 방식이므로 인바운드가 허용되면 아웃바운드 응답 트래픽이 자동으로 허용된다. 그러나 네트워크 ACL(NACL)은 상태 비저장(Stateless) 방식이므로 인바운드 규칙뿐만 아니라 클라이언트로 응답을 돌려주기 위한 아웃바운드 규칙도 명시적으로 설정해야 한다. 클라이언트가 웹 서버(포트 80)에 접속할 때 응답 트래픽은 임시 포트(Ephemeral Port, 1024~65535)를 통해 나가므로, 네트워크 ACL 의 아웃바운드 규칙에 임시 포트를 허용해야 정상 통신이 완료된다. 서브넷은 하나의 네트워크 ACL 만 연결될 수 있으므로(D) 틀린 설명이다."
  },
  {
   "num": 28,
   "question": "한 회사가 AWS Systems Manager 를 사용하여 대규모 Amazon EC2 인스턴스 플릿을 관리하고자 합니다. 회사는 인스턴스를 프라이빗 서브넷에서 호스팅합니다. 회사는 최소 권한의 원칙을 따라 액세스 권한을 할당합니다. 모든 프라이빗 서브넷은 NAT 게이트웨이를 통해 인터넷 연결을 지원합니다. CloudOps 엔지니어가 최신 버전의 Systems Manager Agent(SSM Agent)를 설치했습니다. 그러나 EC2 인스턴스가 Systems Manager Fleet Manager 에 나타나지 않습니다. CloudOps 엔지니어는 이 문제를 해결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "NAT 게이트웨이를 퍼블릭 서브넷에 배포된 NAT 인스턴스로 교체합니다. NAT 인스턴스를 사용하도록 프라이빗 서브넷의 라우팅 테이블을 업데이트합니다.",
    "B": "Systems Manager 용 VPC 엔드포인트를 생성합니다. 프라이빗 서브넷의 라우팅 테이블에서 NAT 게이트웨이를 통한 인터넷 라우팅을 제거합니다.",
    "C": "인스턴스와 연결된 EC2 인스턴스 프로파일에 AmazonSSMManagedInstanceCore AWS 관리형 정책을 연결합니다.",
    "D": "인스턴스와 연결된 EC2 인스턴스 프로파일에 ssm*에 대한 모든 작업을 허용하는 사용자 지정 정책을 연결합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "EC2 인스턴스가 Systems Manager(SSM)에 등록되고 Fleet Manager 에 표시되려면 ① SSM Agent 설치, ② SSM 엔드포인트 통신 가능(NAT 게이트웨이 또는 VPC 엔드포인트), ③ 권한이 부여된 IAM 인스턴스 프로파일 연결이라는 3 가지 기본 요건이 필요하다. 질문에서 이미 NAT 게이트웨이를 통한 인터넷 연결이 확보되어 있고 SSM Agent 도 설치되어 있으므로, 원인은 인스턴스 프로파일에 필요한 IAM 권한이 없기 때문이다. AWS 관리형 정책인 `AmazonSSMManagedInstanceCore`를 인스턴스 프로파일에 연결하면 SSM 통신에 필요한 최소 권한이 부여된다. 모든 권한(`ssm*`, D)을 부여하는 것은 최소 권한 원칙에 위배된다."
  },
  {
   "num": 29,
   "question": "한 회사에 수천 개의 경보 시스템으로부터 알림을 수집하는 애플리케이션이 있습니다. 알림에는 경보(alarm) 알림과 정보(information) 알림이 포함됩니다. 정보 알림에는 시스템 설정 프로세스, 해제 프로세스 및 센서 상태가 포함됩니다. 모든 알림은 Amazon Simple Queue Service(Amazon SQS) 대기열의 메시지로 유지됩니다. Auto Scaling 그룹에 있는 Amazon EC2 인스턴스가 메시지를 처리합니다. CloudOps 엔지니어는 정보 알림보다 경보 알림의 우선순위를 높이는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "대기열에 메시지가 많을 때 더 빠르게 스케일 아웃하도록 Auto Scaling 그룹을 조정합니다.",
    "B": "Amazon SQS 와 함께 Amazon Simple Notification Service(Amazon SNS) 팬아웃 기능을 사용하여 모든 EC2 인스턴스에 메시지를 병렬로 전송합니다.",
    "C": "메시지 처리를 가속화하기 위해 Amazon DynamoDB 스트림을 추가합니다.",
    "D": "경보 알림용 대기열과 정보 알림용 대기열을 각각 생성합니다. 경보 알림 대기열에서 메시지를 먼저 수집하도록 애플리케이션을 업데이트합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon SQS 는 단일 대기열 내에서 메시지의 우선순위 지정(Priority Queue) 기능을 기본적으로 지원하지 않는다. 메시지 처리의 우선순위를 지정하려면 메시지 유형별로 별도의 대기열(경보용 대기열과 일반 정보용 대기열)을 분리 생성한 후, 소비자(EC2 워커) 애플리케이션이 경보용 대기열을 먼저 폴링(poll)하도록 우선순위 로직을 구현하는 패턴을 사용해야 한다. Auto Scaling 조정(A)이나 SNS 팬아웃(B)은 메시지의 처리 순서 및 우선순위를 제어하지 못한다."
  },
  {
   "num": 30,
   "question": "한 회사가 AWS Trusted Advisor 를 사용하여 보안 및 규정 준수를 구현하고 있습니다. 회사의 CloudOps 팀은 액세스할 수 있는 Trusted Advisor 검사 항목 목록을 확인하고 있습니다. 사용 가능한 Trusted Advisor 검사 항목의 수에 영향을 미치는 요인은 무엇입니까?",
   "options": {
    "A": "실행(running) 상태인 Amazon EC2 인스턴스가 하나 이상 있는지 여부",
    "B": "AWS Support 플랜",
    "C": "AWS Organizations 서비스 제어 정책(SCP)",
    "D": "AWS 계정 루트 사용자에게 멀티 팩터 인증(MFA)이 활성화되어 있는지 여부"
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Trusted Advisor 에서 제공하는 검사 항목(Checks)의 수는 계정에 적용된 AWS Support 플랜 레벨에 따라 결정된다. 기본(Basic) 및 개발자(Developer) Support 플랜에서는 핵심 보안 및 성능에 관한 제한된 수의 검사 항목만 제공되는 반면, 비즈니스(Business), 엔터프라이즈 온디맨드(Enterprise On-Ramp), 엔터프라이즈(Enterprise) Support 플랜 이용 고객은 200 개 이상의 전체 Trusted Advisor 검사 항목 및 자동 알림, API 액세스 기능을 모두 이용할 수 있다."
  },
  {
   "num": 31,
   "question": "CloudOps 엔지니어가 AWS CloudFormation 템플릿을 사용하여 VPC 를 성공적으로 배포했습니다. CloudOps 엔지니어는 AWS Organizations 를 통해 관리되는 여러 계정에 동일한 템플릿을 배포하고자 합니다. 가장 적은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "관리 계정에서 OrganizationAccountAccessRole IAM 역할을 맡습니다(assume). 각 계정에 템플릿을 배포합니다.",
    "B": "각 계정의 역할을 맡는 AWS Lambda 함수를 생성합니다. AWS CloudFormation CreateStack API 호출을 사용하여 템플릿을 배포합니다.",
    "C": "계정 목록을 조회하는 AWS Lambda 함수를 생성합니다. AWS CloudFormation CreateStack API 호출을 사용하여 템플릿을 배포합니다.",
    "D": "관리 계정에서 AWS CloudFormation StackSets 를 사용하여 각 계정에 템플릿을 배포합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS CloudFormation StackSets 를 사용하면 단일 CloudFormation 템플릿을 기반으로 여러 AWS 계정 및 리전에 걸쳐 스택을 일괄 생성, 업데이트 또는 삭제할 수 있다. AWS Organizations 와 통합된 StackSets 를 관리 계정에서 실행하면 수동 로그인(A)이나 커스텀 Lambda 스크립트 작성(B, C) 없이 최소한의 운영 오버헤드로 조직 내 전체 또는 특정 계정에 템플릿을 자동 배포할 수 있다."
  },
  {
   "num": 32,
   "question": "한 회사의 애플리케이션이 인터넷 제공업체에 의해 app.example.com 에서 호스팅되고 있습니다. 회사는 자신이 소유하고 Amazon Route 53 으로 관리하는 [www.company.com](https://www.google.com/search?q=https%3A%2F%2Fwww.compa ny.com)을 통해 이 애플리케이션에 액세스하고자 합니다. 이를 해결하기 위해 생성해야 하는 Route 53 레코드는 무엇입니까?",
   "options": {
    "A": "A 레코드",
    "B": "별칭(Alias) 레코드",
    "C": "CNAME 레코드",
    "D": "포인터(PTR) 레코드"
   },
   "answer": [
    "C"
   ],
   "explanation": "하나의 도메인 이름([www.company.com](https://www.google.com/search?q=https%3A%2F%2Fwww.c ompany.com))을 다른 타사 외부 도메인 이름(app.example.com)으로 매핑(별칭 지정)할 때는 표준 DNS CNAME(Canonical Name) 레코드를 사용한다. A 레코드(A)는 도메인을 IPv4 주소에 직접 매핑할 때 사용하며, 별칭 레코드(B)는 AWS 고유 기능으로 CloudFront, ALB, S3 등 AWS 서비스 엔드포인트 주소나 존 아펙스(Zone Apex)에 매핑할 때 주로 사용된다. PTR 레코드(D)는 IP 주소를 도메인 이름으로 역방향 조회하는 데 사용된다."
  },
  {
   "num": 33,
   "question": "한 회사가 애플리케이션 데이터를 캐싱하기 위해 Amazon ElastiCache (Redis OSS)를 사용합니다. CloudOps 엔지니어는 캐시의 복원력을 높이기 위한 솔루션을 구현해야 합니다. 또한 이 솔루션은 복구 목표 시간(RTO)을 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "ElastiCache (Redis OSS)를 ElastiCache (Memcached)로 교체합니다.",
    "B": "1 시간마다 백업을 시작하는 Amazon EventBridge 규칙을 생성합니다. 필요할 때 백업을 복원합니다.",
    "C": "두 번째 가용 영역에 읽기 전용 복제본을 생성합니다. ElastiCache (Redis OSS) 복제 그룹에 대해 다중 AZ(Multi-AZ)를 활성화합니다.",
    "D": "자동 백업을 활성화합니다. 필요할 때 백업을 복원합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "ElastiCache (Redis OSS)에서 복원력을 높이고 장애 발생 시 RTO(복구 목표 시간)를 최소화하는 가장 효과적인 방법은 다중 AZ(Multi-AZ) 및 자동 장애 조치(Auto-failover)가 활성화된 읽기 전용 복제본을 두 번째 가용 영역에 생성하는 것이다. 기본 노드에 장애가 발생하면 보조 AZ 의 복제본으로 자동 승격되어 서비스 중단 시간을 수 초 내외로 극소화한다. 백업 및 복원 방식(B, D)은 새 클러스터를 생성하고 데이터를 다시 로드해야 하므로 RTO 가 길어진다. Memcached(A)는 다중 AZ 자동 장애 조치나 데이터 지속성을 지원하지 않는다."
  },
  {
   "num": 34,
   "question": "한 회사가 여러 AWS 계정을 보유하고 있습니다. CloudOps 엔지니어는 샌드박스 계정을 사용하여 운영 계정에서 사용할 IAM 정책을 생성하고 검증합니다. CloudOps 엔지니어는 테스트를 위해 AWS CloudFormation 을 사용하여 샌드박스 계정에 정책을 배포합니다. 테스트가 통과되면 CloudOps 엔지니어는 운영 환경에 정책을 배포합니다. CloudOps 엔지니어는 샌드박스 계정과 운영 계정 모두에 AWS CloudTrail 을 구성했습니다. CloudOps 엔지니어는 CloudFormation 에 의해 정책이 배포된 후 IAM 정책의 변경 사항을 감지하고자 합니다. CloudOps 엔지니어는 정책이 변경될 경우 알림을 받아야 합니다. 가장 적은 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CloudTrail 이 IAM 정책 변경을 감지했을 때 CloudOps 엔지니어에게 이메일 알림을 보내도록 CloudTrail 을 구성합니다.",
    "B": "AWS Lambda 함수를 호출하여 CloudFormation 스택의 드리프트(drift)를 확인하는 Amazon EventBridge 규칙을 생성합니다. 드리프트가 감지되면 Amazon Simple Notification Service(Amazon SNS)를 사용하여 CloudOps 엔지니어에게 알리도록 함수를 구성합니다.",
    "C": "운영 계정의 IAM 정책에 연결된 IAM 역할의 CloudTrail 활동을 기반으로 정책을 생성하도록 AWS Identity and Access Management Access Analyzer 를 사용합니다. 결과를 샌드박스 계정에 있는 IAM 정책과 비교합니다. 정책이 다른 경우 CloudOps 엔지니어에게 알림을 보냅니다.",
    "D": "IAM 정책을 JSON 문서로 Amazon S3 버킷에 저장합니다. AWS Lambda 함수를 사용하여 IAM 정책을 S3 버킷에 저장된 JSON 문서와 주기적으로 비교합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "CloudFormation 으로 배포된 리소스(IAM 정책 등)가 템플릿 정의와 다르게 수정되는 현상을 감지하는 서비스 표준 기능은 드리프트 감지(Drift Detection)이다. EventBridge 와 Lambda 를 조합하여 CloudFormation 스택 드리프트 감지를 주기적으로 트리거하고 SNS 알림을 발송하도록 구성하면 최소한의 노력으로 외부 변경 사항을 알아낼 수 있다. CloudTrail(A)은 이메일 직접 발송 기능이 없는 감사 로그 서비스이며, Access Analyzer(C) 및 S3 비교 스크립트(D)는 수동 관리 및 복잡성이 커 드리프트 감지 목적으로 적합하지 않다."
  },
  {
   "num": 35,
   "question": "한 금융 회사가 Amazon S3 버킷에 기밀 데이터를 저장합니다. 회사는 데이터를 분석하고 대시보드 보고서를 작성하기 위해 Amazon QuickSight 를 사용합니다. 회사는 QuickSight 에 대한 모든 데이터 액세스 및 연결이 회사의 VPC 네트워크 경계 내에 유지되도록 요구합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "QuickSight 용 인터페이스 VPC 엔드포인트를 생성합니다. AWS PrivateLink 를 사용하여 VPC 내에서 QuickSight 에 연결되도록 엔드포인트를 구성합니다. S3 데이터를 가리키는 매니페스트 파일을 생성합니다. S3 버킷에 액세스할 수 있는 권한을 QuickSight 에 부여합니다.",
    "B": "QuickSight 용 VPC 엔드포인트를 설정합니다. VPC 와 QuickSight 간의 직접 연결을 설정하기 위해 Amazon EC2 인스턴스를 프록시로 사용합니다. S3 데이터를 가리키는 매니페스트 파일을 생성합니다. EC2 인스턴스에 매니페스트를 저장합니다. EC2 인스턴스에 액세스할 수 있는 권한을 QuickSight 에 부여합니다.",
    "C": "Amazon S3 VPC 게이트웨이 엔드포인트를 구성합니다. 데이터를 전송하기 위해 QuickSight 의 모든 데이터를 엔드포인트를 통해 라우팅합니다. S3 버킷에 액세스할 수 있는 권한을 QuickSight 에 부여합니다.",
    "D": "회사의 VPC 에 NAT 게이트웨이를 구성합니다. 데이터를 전송하기 위해 QuickSight 의 모든 데이터를 NAT 게이트웨이를 통해 라우팅합니다. S3 버킷에 액세스할 수 있는 권한을 QuickSight 에 부여합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "QuickSight 로의 데이터 액세스 및 연결을 인터넷에 노출시키지 않고 VPC 프라이빗 경계 내부로 제한하려면 AWS PrivateLink 기반의 Interface VPC Endpoint(인터페이스 VPC 엔드포인트)를 생성해야 한다. 이를 통해 QuickSight 통신이 VPC 내부의 프라이빗 IP 주소 경로만 이용하게 되므로 네트워크 격리 보안 요건을 충족한다. EC2 프록시(B)는 불필요한 관리를 유발하고, S3 게이트웨이 엔드포인트(C)나 NAT 게이트웨이(D)는 QuickSight 서비스 자체 연결의 프라이빗 경계 격리 기능을 제공하지 못한다."
  },
  {
   "num": 36,
   "question": "한 회사가 운영 파일 서버를 AWS 로 마이그레이션하고 있습니다. 가용 영역(AZ)을 사용할 수 없게 되거나 시스템 유지 관리가 수행되는 경우에도 파일 서버에 저장된 모든 데이터에 계속 액세스할 수 있어야 합니다. 사용자는 SMB 프로토콜을 통해 파일 서버와 상호 작용할 수 있어야 합니다. 또한 사용자는 Windows ACL 을 사용하여 파일 권한을 관리할 수 있어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "단일 AWS Storage Gateway 파일 게이트웨이를 생성합니다.",
    "B": "Amazon FSx for Windows File Server Multi-AZ 파일 시스템을 생성합니다.",
    "C": "두 가용 영역에 걸쳐 두 개의 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 파일 게이트웨이 앞에 Application Load Balancer 를 구성합니다.",
    "D": "두 개의 Amazon FSx for Windows File Server Single-AZ 2 파일 시스템을 배포합니다. Microsoft 분산 파일 시스템 복제(DFSR)를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon FSx for Windows File Server 는 기본적으로 SMB 프로토콜과 Windows ACL 권한 관리를 완벽하게 지원한다. Multi-AZ 파일 시스템으로 생성하면 두 가용 영역에 걸쳐 기본 및 예비 파일 서버가 동기적으로 복제되어, 개별 AZ 장애나 정기 유지 관리 중에도 자동으로 장애 조치(Failover)되어 데이터 접근성이 유지된다. Storage Gateway(A, C)는 온프레미스 연동용이며 ALB 를 통한 SMB 로드밸런싱은 지원되지 않는다. Single-AZ 2 개 구성 후 DFSR(D)을 사용하는 것은 복잡도가 높고 수동 구성이 많이 필요하므로 완전 관리형 Multi-AZ 파일 시스템(B)이 올바른 솔루션이다."
  },
  {
   "num": 37,
   "question": "한 회사의 웹 애플리케이션이 매일 밤 여러 차례 성능 문제를 겪고 있습니다. 근본 원인 분석 결과 Amazon EC2 Linux 인스턴스에서 5 분 동안 지속되는 갑작스러운 CPU 사용률 증가가 밝혀졌습니다. CloudOps 엔지니어는 더 많은 CPU 를 소비하는 서비스 또는 프로세스의 프로세스 ID(PID)를 찾아야 합니다. 가장 적은 노력으로 프로세스 사용량 정보를 수집하려면 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "CPU 프로세스 지표를 수집하도록 Amazon CloudWatch 에이전트 procstat 플러그인을 구성합니다.",
    "B": "1 분마다 실행되어 PID 를 수집하고 알림을 보내도록 AWS Lambda 함수를 구성합니다.",
    "C": "매일 밤 .pem 키를 사용하여 EC2 인스턴스에 로그인합니다. 그런 다음 top 명령을 실행합니다.",
    "D": "기본 Amazon CloudWatch CPU 사용률 지표를 사용하여 CloudWatch 에서 PID 를 수집합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon CloudWatch 에이전트의 `procstat` 플러그인은 Linux 및 Windows 인스턴스에서 개별 프로세스의 CPU 및 메모리 사용량 지표(PID, 프로세스 이름 등)를 자동으로 수집하여 CloudWatch Metrics 로 전송하는 기본 기능을 제공한다. 수동 접속(C)이나 사용자 지정 Lambda 스크립트 작성(B) 없이 Agent 설정 변경만으로 수집이 가능하므로 가장 적은 노력이 든다. 기본 제공되는 CloudWatch CPUUtilization 지표(D)는 인스턴스 전체의 CPU 사용률만 표시할 뿐 개별 PID 정보를 제공하지 않는다."
  },
  {
   "num": 38,
   "question": "한 회사가 최종 사용자에 대한 웹사이트 가동 가능성(availability)을 모니터링해야 합니다. 회사는 웹사이트 가동 시간(uptime)이 99% 미만으로 감소할 경우 Amazon Simple Notification Service(Amazon SNS) 알림을 제공하는 솔루션이 필요합니다. 모니터링은 웹사이트의 사용자 경험에 대한 정확한 보기를 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CloudWatch Logs 로그 그룹에 게시되는 웹사이트 로그를 기반으로 하는 Amazon CloudWatch 경보를 생성합니다. HTTP 4xx 오류 및 5xx 오류 수가 지정된 임계값을 초과하는 경우 SNS 알림을 게시하도록 경보를 구성합니다.",
    "B": "CloudWatch 에 게시된 웹사이트 지표를 기반으로 하는 Amazon CloudWatch 경보를 생성합니다. 이상 탐지(anomaly detection)에 기반하여 SNS 알림을 게시하도록 경보를 구성합니다.",
    "C": "Amazon CloudWatch Synthetics 하트비트 모니터링 카나리(heartbeat monitoring canary)를 생성합니다. 카나리를 최종 사용자용 웹사이트 URL 에 연결합니다. 카나리에 대한 CloudWatch 경보를 생성합니다. SuccessPercent 지표의 값이 99% 미만인 경우 SNS 알림을 게시하도록 경보를 구성합니다.",
    "D": "Amazon CloudWatch Synthetics 깨진 링크 체커 모니터링 카나리(broken link checker monitoring canary)를 생성합니다. 카나리를 최종 사용자용 웹사이트 URL 에 연결합니다. 카나리에 대한 CloudWatch 경보를 생성합니다. SuccessPercent 지표의 값이 99% 미만인 경우 SNS 알림을 게시하도록 경보를 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "최종 사용자 입장에서의 실제 웹사이트 가동 시간(uptime) 및 가용성을 주기적으로 테스트하고 사용자 경험을 정확하게 측정하기 위해서는 Amazon CloudWatch Synthetics Canary 를 사용한다. 그중에서도 하트비트 모니터링(heartbeat monitoring) 카나리는 지정된 URL 에 지속적으로 HTTP 요청을 보내 엔드포인트 가용성을 확인하며, `SuccessPercent` 지표를 통해 성공률을 측정한다. 이 값이 99% 미만일 때 CloudWatch 경보를 통해 SNS 알림을 발송하는 구성이 정답이다. 깨진 링크 체커(D)는 웹페이지 내 하이퍼링크 유효성 검사용이며 가동 시간 모니터링 목적에 부합하지 않는다."
  },
  {
   "num": 39,
   "question": "한 회사가 여러 가용 영역에 걸쳐 Amazon EC2 Auto Scaling 을 사용합니다. 회사는 EC2 인스턴스가 프라이빗 서브넷에 프로비저닝되도록 해야 합니다. 회사는 최근 VPC 내 NAT 게이트웨이 수를 1 개로 줄여 클라우드 인프라를 최적화했습니다. 인프라 업데이트 후 일부 EC2 인스턴스의 인터넷 연결이 끊겼습니다. CloudOps 엔지니어는 이 연결 문제를 해결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "기존 NAT 게이트웨이를 동일한 서브넷의 NAT 인스턴스로 교체합니다.",
    "B": "인터넷 트래픽의 대상을 기존 NAT 게이트웨이로 지정하도록 VPC 라우팅 테이블을 업데이트합니다.",
    "C": "인터넷 트래픽의 대상을 인터넷 게이트웨이로 지정하도록 VPC 라우팅 테이블을 업데이트합니다.",
    "D": "기존 NAT 게이트웨이에 보조 IP 주소를 추가합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "VPC 내 여러 가용 영역의 프라이빗 서브넷들이 각각 별도의 NAT 게이트웨이를 바라보고 있다가 NAT 게이트웨이가 1 개로 축소(삭제)되면, 삭제된 NAT 게이트웨이를 타깃(`nat-xxx`)으로 삼고 있던 프라이빗 서브넷 라우팅 테이블의 아웃바운드 라우팅(`0.0.0.0/0`)이 유효하지 않게(Blackhole) 되어 인터넷 연결이 끊어지게 된다. 따라서 남아 있는 단일 NAT 게이트웨이의 ID 를 가리키도록 모든 프라이빗 서브넷의 라우팅 테이블을 업데이트해야 통신이 복구된다. 프라이빗 서브넷에서 인터넷 게이트웨이를 직접 라우팅 대상(C)으로 설정하면 외부 노출 위험이 발생하며, 프라이빗 서브넷 특성에 어긋난다."
  },
  {
   "num": 40,
   "question": "한 회사가 AWS 에서 Amazon EC2 인스턴스 스택을 관리하기 위해 AWS CloudFormation 을 사용합니다. CloudOps 엔지니어는 누군가 스택을 삭제하더라도 인스턴스와 모든 인스턴스 데이터를 유지해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CloudFormation 템플릿의 EC2 인스턴스 리소스에 대한 DeletionPolicy 속성을 Snapshot 으로 설정합니다.",
    "B": "Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 백업을 자동화합니다.",
    "C": "AWS Backup 에서 백업 계획을 생성합니다.",
    "D": "CloudFormation 템플릿의 EC2 인스턴스 리소스에 대한 DeletionPolicy 속성을 Retain 으로 설정합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS CloudFormation 에서 스택이 삭제될 때 특정 리소스를 삭제하지 않고 그대로 보존하려면 해당 리소스 정의에 `DeletionPolicy: Retain` 속성을 추가해야 한다. 이렇게 설정하면 스택 자체가 삭제되더라도 EC2 인스턴스 및 해당 인스턴스에 연결된 볼륨/데이터가 삭제되지 않고 AWS 계정에 그대로 유지된다. `Snapshot`(A)은 EBS 볼륨, RDS, ElastiCache 등에 적용 가능한 옵션이며 EC2 인스턴스 리소스 자원 자체에는 직접 지원되지 않거나 스냅샷만 남길 뿐 인스턴스 자체를 유지하지 못한다."
  },
  {
   "num": 41,
   "question": "한 회사에 Amazon EC2 인스턴스 세트에서 실행되는 마이크로서비스가 있습니다. EC2 인스턴스는 Application Load Balancer(ALB) 뒤에서 실행됩니다. CloudOps 엔지니어는 Amazon Route 53 을 사용하여 ALB URL 을 example.com 에 매핑하는 레코드를 생성해야 합니다. 어떤 유형의 레코드가 이 요구 사항을 충족합니까?",
   "options": {
    "A": "A 레코드",
    "B": "AAAA 레코드",
    "C": "별칭(Alias) 레코드",
    "D": "CNAME 레코드"
   },
   "answer": [
    "C"
   ],
   "explanation": "도메인의 루트(Zone Apex, 예: example.com)에는 표준 DNS RFC 규약상 CNAME 레코드를 직접 사용할 수 없다. Amazon Route 53 의 별칭(Alias) 레코드를 사용하면 도메인 루트 이름(example.com)을 Application Load Balancer(ALB)의 DNS 이름으로 직접 매핑할 수 있다. 표준 A/AAAA 레코드(A, B)는 고정 IP 주소가 필요하지만 ALB 는 IP 가 가변적이므로 적합하지 않다."
  },
  {
   "num": 42,
   "question": "AWS Lambda 함수가 하루에 여러 번 간헐적으로 실패하고 있습니다. CloudOps 엔지니어는 지난 7 일 동안 이 오류가 얼마나 자주 발생했는지 확인해야 합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 조치는 무엇입니까?",
   "options": {
    "A": "Amazon Athena 를 사용하여 Lambda 함수와 관련된 Amazon CloudWatch 로그를 쿼리합니다.",
    "B": "Amazon Athena 를 사용하여 Lambda 함수와 관련된 AWS CloudTrail 로그를 쿼리합니다.",
    "C": "Amazon CloudWatch Logs Insights 를 사용하여 연관된 Lambda 함수 로그를 쿼리합니다.",
    "D": "Amazon OpenSearch Service 를 사용하여 Lambda 함수의 Amazon CloudWatch 로그를 스트리밍합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon CloudWatch Logs Insights 는 CloudWatch Logs 에 수집된 로그 데이터를 대화형 쿼리 언어로 즉시 조회하고 분석할 수 있는 내장 기능이다. 추가적인 로그 내보내기나 파이프라인 구성 없이 지난 7 일간 발생한 특정 Lambda 에러 패턴의 발생 빈도를 가장 쉽고 빠르게 집계할 수 있어 운영 효율성이 가장 높다. Athena(A, B)나 OpenSearch(D) 방식은 데이터 내보내기, 파이프라인 연동, 클러스터 관리 등의 별도 설정이 필요하므로 불필요한 오버헤드가 발생한다."
  },
  {
   "num": 43,
   "question": "미디어 회사가 AWS 에서 퍼블릭 뉴스 및 비디오 포털을 호스팅합니다. 포털은 프로비저닝된 용량(provisioned capacity)이 설정된 Amazon DynamoDB 테이블을 사용하여 Amazon S3 버킷에 저장된 비디오 파일의 인덱스를 유지 관리합니다. 최근 이벤트 기간 동안 수백만 명의 방문자가 뉴스를 보기 위해 포털에 접속했습니다. 이 트래픽 증가로 인해 DynamoDB 테이블에서 읽기 요청에 대한 스로틀링(throttling)이 발생했습니다. 이로 인해 포털에 비디오를 표시할 수 없었습니다. 회사의 운영 팀은 수요를 충족하기 위해 임시로 프로비저닝된 용량을 수동으로 늘렸습니다. 회사는 향후 테이블에서 스로틀링이 발생하기 전에 운영 팀이 알림을 받기를 원합니다. 회사는 Amazon Simple Notification Service(Amazon SNS) 주제를 생성하고 운영 팀의 이메일 주소를 해당 SNS 주제에 구독시켰습니다. 이러한 요구 사항을 충족하기 위해 회사가 다음에 해야 할 일은 무엇입니까?",
   "options": {
    "A": "ConsumedReadCapacityUnits 지표를 사용하는 Amazon CloudWatch 경보를 생성합니다. 경보 임계값을 DynamoDB 테이블의 프로비저닝된 용량에 가까운 값으로 설정합니다. SNS 주제로 알림을 게시하도록 경보를 구성합니다.",
    "B": "DynamoDB 테이블에서 오토 스케일링을 켭니다. 스케일링 이벤트 중에 SNS 주제로 알림을 게시하도록 Amazon EventBridge 규칙을 구성합니다.",
    "C": "DynamoDB 테이블에 대한 Amazon CloudWatch Logs 를 켭니다. DynamoDB 의 THROTTLING_EXCEPTION 상태 코드와 패턴을 일치시키기 위한 Amazon CloudWatch 지표 필터를 생성합니다. 해당 지표에 대한 CloudWatch 경보를 생성합니다. 알림용 SNS 주제를 선택합니다.",
    "D": "Amazon CloudWatch Logs 에 로그를 저장하도록 애플리케이션을 구성합니다. DynamoDB 의 THROTTLING_EXCEPTION 상태 코드와 패턴을 일치시키기 위한 Amazon CloudWatch 지표 필터를 생성합니다. 해당 지표에 대한 CloudWatch 경보를 생성합니다. 알림용 SNS 주제를 선택합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "스로틀링이 발생하기 전(before)에 미리 경고 알림을 받으려면 실제 소비된 읽기 용량 단위(ConsumedReadCapacityUnits)를 모니터링하여, 사용량이 프로비저닝된 최대 용량 한계치 근처에 다다랐을 때 알림을 발생시키는 CloudWatch 경보를 구성해야 한다. THROTTLING_EXCEPTION(C, D) 발생을 감지하는 것은 이미 스로틀링 장애가 발생한 이후에 알림을 받는 것이므로 사전에 방지하려는 목적에 부합하지 않는다. Auto Scaling 이벤트 알림(B)은 용량 확장 동작을 알릴 뿐 용량 고갈 전 사전 알림을 제공하지 않는다."
  },
  {
   "num": 44,
   "question": "한 회사가 Amazon CloudFront 를 통해 전 세계에서 액세스할 수 있는 정적 웹사이트를 Amazon S3 버킷에 호스팅합니다. Cache-Control max-age 헤더는 1 시간으로 설정되어 있고, Maximum TTL 은 5 분으로 설정되어 있습니다. CloudOps 엔지니어는 CloudFront 가 예상되는 기간 동안 객체를 캐싱하지 않는다는 것을 관찰했습니다. 이 문제의 원인은 무엇입니까?",
   "options": {
    "A": "캐시된 자산이 엣지 로케이션에서 만료되지 않아서",
    "B": "CloudFront 구성에서 캐시 무효화(invalidation)가 누락되어서",
    "C": "Expires 헤더가 3 시간으로 설정되어서",
    "D": "캐시 유지 시간 설정 간에 충돌이 발생해서"
   },
   "answer": [
    "D"
   ],
   "explanation": "CloudFront 의 캐싱 동작 방식에서 오리진(S3)이 보낸 Cache-Control max-age 헤더 값(1 시간 = 3600 초)이 CloudFront 동작에 설정된 Maximum TTL 값(5 분 = 300 초)보다 큰 경우, CloudFront 는 더 짧은 Maximum TTL 값을 우선 적용하여 캐시 만료 시간을 5 분으로 제한한다. 따라서 오리진의 캐시 헤더와 CloudFront 의 TTL 설정 간 충돌(상한선 제한)로 인해 객체가 1 시간 동안 캐싱되지 않는 현상이 발생한다."
  },
  {
   "num": 45,
   "question": "한 회사가 Application Load Balancer(ALB) 뒤에 있는 여러 Amazon EC2 인스턴스에서 소매 웹사이트를 실행합니다. 회사는 HTTPS 연결을 통해 웹사이트로의 트래픽을 보호해야 합니다. SysOps 관리자가 이러한 요구 사항을 충족하기 위해 취해야 하는 조치 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "ALB 에 인증서를 연결합니다.",
    "B": "AWS Certificate Manager(ACM)에서 퍼블릭 인증서를 생성합니다.",
    "C": "인증서를 내보내고 웹사이트에 연결합니다.",
    "D": "AWS Certificate Manager(ACM)에서 프라이빗 인증서를 생성합니다.",
    "E": "각 EC2 인스턴스에 인증서를 연결합니다."
   },
   "answer": [
    "A",
    "B"
   ],
   "explanation": "인터넷 사용자에게 퍼블릭 HTTPS 서비스를 제공하려면 먼저 AWS Certificate Manager(ACM)에서 도메인에 대한 퍼블릭 신뢰 SSL/TLS 인증서를 요청 및 생성해야 한다(B). 생성된 ACM 퍼블릭 인증서를 트래픽 관문인 Application Load Balancer(ALB)의 HTTPS 리스너에 연결하면(A) ALB 에서 SSL/TLS 암호화 해제(Termination)가 수행된다. ACM 퍼블릭 인증서는 개별 인스턴스로 내보내거나 직접 장착할 수 없으므로(C, E) ALB 수준에서 중앙 처리하는 것이 정석이다. 프라이빗 인증서(D)는 공인 CA 가 아니므로 일반 웹 방문자 브라우저에서 경고가 발생한다."
  },
  {
   "num": 46,
   "question": "한 회사가 Application Load Balancer(ALB) 뒤의 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에 애플리케이션을 배포합니다. 회사는 SQL 삽입(SQL injection) 공격으로부터 애플리케이션을 보호하고자 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "ALB 앞에 AWS Shield Advanced 를 배포합니다. SQL 삽입 필터링을 활성화합니다.",
    "B": "ALB 앞에 AWS Shield Standard 를 배포합니다. SQL 삽입 필터링을 활성화합니다.",
    "C": "각 EC2 인스턴스에 취약점 스캐너를 배포합니다. 애플리케이션 코드를 지속적으로 스캔합니다.",
    "D": "ALB 앞에 AWS WAF 를 배포합니다. SQL 삽입 필터링을 위한 AWS 관리형 규칙(AWS Managed Rule)을 구독합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "SQL Injection(SQLi) 및 Cross-Site Scripting(XSS)과 같은 웹 애플리케이션 계층(L7) 공격을 차단하는 전용 서비스는 AWS WAF(Web Application Firewall)이다. AWS WAF 에는 SQLi 필터링을 포함한 AWS 관리형 규칙 세트가 기본 제공되므로 ALB 앞에 WAF 를 연결하여 해당 규칙을 적용하는 것이 올바른 솔루션이다. AWS Shield(A, B)는 DDoS 공격 방어 전용 서비스이며, 코드 취약점 스캐너(C)는 실시간 트래픽 공격 차단을 수행하지 못한다."
  },
  {
   "num": 47,
   "question": "한 회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 회사는 EC2 인스턴스의 SSH 포트가 절대로 열려 있지 않도록 보장하고자 합니다. 회사는 AWS Config 를 활성화하고 restricted-ssh AWS 관리형 규칙을 설정했습니다. CloudOps 엔지니어는 비규격(noncompliant) 보안 그룹에 대해 SSH 포트 액세스를 수정(remediate)하는 솔루션을 구현해야 합니다. 가장 운영 효율적으로 이 요구 사항을 충족하려면 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "비규격 보안 그룹을 식별하도록 AWS Config 규칙을 구성합니다. 비규격 리소스에 대한 알림을 보내기 위해 AWS-PublishSNSNotification AWS Systems Manager Automation 런북을 사용하도록 규칙을 구성합니다.",
    "B": "비규격 보안 그룹을 식별하도록 AWS Config 규칙을 구성합니다. 비규격 리소스를 수정(remediate)하기 위해 AWS-DisableIncomingSSHOnPort22 AWS Systems Manager Automation 런북을 사용하도록 규칙을 구성합니다.",
    "C": "비규격 보안 그룹을 검색하기 위해 AWS Config API 호출을 수행합니다. Deny 규칙을 사용하여 비규격 보안 그룹의 SSH 액세스를 비활성화합니다.",
    "D": "비규격 보안 그룹을 식별하도록 AWS Config 규칙을 구성합니다. 각 비규격 보안 그룹을 수동으로 업데이트하여 Allow 규칙을 제거합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Config 의 자동 수정(Auto Remediation) 기능을 활용하면 규정을 위반한 리소스가 감지되었을 때 AWS Systems Manager Automation 런북을 즉시 트리거하여 자동 조치를 취할 수 있다. SSH(포트 22) 인바운드 허용 규칙을 자동으로 제거해 주는 사전 빌드된 SSM 런북인 `AWS-DisableIncomingSSHOnPort22`를 Config 규칙의 수정 작업으로 설정하는 것이 가장 운영 효율적이다. 알림만 전송하는 것(A)은 자동 수정을 수행하지 못하며, 수동 수정(D)은 운영 부담이 크고, 보안 그룹은 명시적 Deny 규칙(C)을 지원하지 않는다."
  },
  {
   "num": 48,
   "question": "한 회사는 웹 애플리케이션을 위해 Amazon Simple Queue Service(Amazon SQS) 대기열과 대상 추적(target tracking)이 설정된 Auto Scaling 그룹의 Amazon EC2 인스턴스를 사용합니다. 회사는 ASGAverageNetworkIn 지표를 수집하지만 트래픽 피크 시간 동안 인스턴스가 충분히 빠르게 스케일링되지 않는 것을 발견했습니다. 대기열에 많은 수의 SQS 메시지가 누적되고 있습니다. CloudOps 엔지니어는 피크 시간 동안 SQS 메시지 수를 줄여야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "대상 추적 정책에서 SQS ApproximateNumberOfMessagesDelayed 지표를 기반으로 하는 새로운 사용자 지정 Amazon CloudWatch 지표를 정의하고 사용합니다.",
    "B": "대상 추적 정책에서 각 인스턴스당 SQS 대기열 백로그를 계산하기 위해 Amazon CloudWatch 지표 수식을 정의하고 사용합니다.",
    "C": "EC2 인스턴스에 대한 ChangeInCapacity 값을 지정하여 단계별 스케일링(step scaling)을 정의하고 사용합니다.",
    "D": "EC2 인스턴스에 대한 ChangeInCapacity 값을 지정하여 단순 스케일링(simple scaling)을 정의하고 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "SQS 대기열 기반의 EC2 Auto Scaling 시 적절한 지표는 단순 네트워크 입력(NetworkIn)이 아닌 인스턴스당 대기열 백로그(Backlog per instance)이다. CloudWatch 지표 수식(Metric Math)을 통해 `ApproximateNumberOfMessagesVisible` 값을 현재 실행 중인 인스턴스 수로 나누어 인스턴스당 백로그 지표를 계산하고, 이를 Target Tracking 스케일링 정책의 지표로 설정해야 메시지 누적에 맞춰 인스턴스를 민첩하게 스케일링할 수 있다."
  },
  {
   "num": 49,
   "question": "AWS CloudFormation 템플릿이 Amazon RDS 인스턴스를 생성합니다. 이 템플릿은 필요에 따라 개발 환경을 구축한 다음 환경이 더 이상 필요하지 않을 때 스택을 삭제하는 데 사용됩니다. CloudFormation 스택이 삭제된 후에도 향후 사용을 위해 RDS 지속성 데이터를 보존해야 합니다. 신뢰할 수 있고 효율적인 방법으로 이를 달성하는 방법은 무엇입니까?",
   "options": {
    "A": "5 분마다 RDS 인스턴스를 백업 계속하도록 스크립트를 작성합니다.",
    "B": "RDS 인스턴스의 스냅샷을 찍는 AWS Lambda 함수를 생성하고 스택을 삭제하기 전에 함수를 수동으로 호출합니다.",
    "C": "RDS 인스턴스의 CloudFormation 템플릿 정의에서 Snapshot Deletion Policy 를 사용합니다.",
    "D": "RDS 인스턴스의 백업을 수행하는 새 CloudFormation 템플릿을 생성하고 스택을 삭제하기 전에 이 템플릿을 실행합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS CloudFormation 으로 관리되는 Amazon RDS 리소스의 경우, 템플릿 내 해당 리소스의 `DeletionPolicy` 속성을 `Snapshot`으로 지정하면 스택이 삭제될 때 CloudFormation 이 자동으로 RDS DB 스냅샷을 생성한 후 인스턴스를 삭제한다. 이 방식을 사용하면 외부 스크립트(A)나 수동 Lambda 실행(B), 별도 템플릿(D) 없이 템플릿 설정만으로 가장 신뢰할 수 있고 효율적으로 데이터를 보존할 수 있다."
  },
  {
   "num": 50,
   "question": "한 회사가 AWS Organizations 를 사용하여 여러 AWS 계정을 관리합니다. CloudOps 엔지니어는 조직의 계정에 걸쳐 0.0.0.0/0 에 열려 있는 모든 IPv4 포트를 식별해야 합니다. 가장 적은 운영 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "검토를 위해 모든 보안 그룹 규칙을 출력하도록 AWS CLI 를 사용합니다.",
    "B": "Security Groups - Specific Ports Unrestricted 검사 항목에 대해 조직 뷰(organizational view)에서 AWS Trusted Advisor 결과를 검토합니다.",
    "C": "모든 계정에서 보안 그룹 규칙을 수집하는 AWS Lambda 함수를 생성합니다. 결과를 Amazon S3 버킷에 집계합니다.",
    "D": "각 계정에서 Amazon Inspector 를 활성화합니다. 자동화된 워크로드 탐색 작업을 실행합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Trusted Advisor 는 `Security Groups - Specific Ports Unrestricted` 및 `Security Groups - Unrestricted Access`라는 기본 보안 검사 항목을 제공한다. AWS Organizations 의 통합 관리 계정에서는 Trusted Advisor 의 \"조직 뷰(Organizational view)\" 기능을 통해 조직 내 모든 멤버 계정의 해당 검사 결과를 단일 대시보드에서 일괄 확인할 수 있다. CLI 스크립트 작성(A)이나 Lambda 커스텀 코드(C) 구축 없이 기존 관리형 대시보드를 그대로 활용할 수 있어 운영 노력이 가장 적다."
  },
  {
   "num": 51,
   "question": "SysOps 관리자가 Amazon RDS for MySQL DB 인스턴스의 자격 증명을 보호하는 솔루션을 구현해야 합니다. 솔루션은 일주일에 한 번 자동으로 자격 증명을 순환(rotate)해야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "자격 증명을 저장하도록 RDS 프록시를 구성합니다.",
    "B": "AWS Secrets Manager 에 자격 증명을 추가합니다.",
    "C": "AWS Systems Manager Parameter Store 에 자격 증명을 추가합니다.",
    "D": "자격 증명을 순환하기 위한 AWS Lambda 함수를 생성합니다.",
    "E": "자격 증명을 순환하기 위한 AWS Systems Manager Automation 런북을 생성합니다."
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "Amazon RDS 데이터베이스 자격 증명의 안전한 저장 및 자동 순환 기능은 AWS Secrets Manager 에서 제공한다. Secrets Manager 는 자격 증명을 안전하게 암호화하여 저장하며(B), 자격 증명을 주기적으로 교체(Rotation)할 때 내부적으로 AWS Lambda 함수를 트리거하여 데이터베이스 사용자의 암호를 수정하고 보안 암호를 업데이트한다(D). Parameter Store(C)는 자체적인 자격 증명 자동 순환 엔진을 제공하지 않으며, RDS Proxy(A)는 연결 풀링 및 자격 증명 참조 기능일 뿐 자격 증명 생성/순환을 직접 담당하지 않는다."
  },
  {
   "num": 52,
   "question": "CloudOps 엔지니어가 Amazon EC2 인스턴스 플릿에 대한 권장 사항을 생성하기 위해 AWS Compute Optimizer 를 사용하고 있습니다. 일부 인스턴스는 새로 출시된 인스턴스 유형을 사용하는 반면, 다른 인스턴스는 이전 인스턴스 유형을 사용합니다. 분석이 완료된 후 CloudOps 엔지니어는 일부 EC2 인스턴스가 Compute Optimizer 대시보드에서 누락된 것을 발견했습니다. 이 문제의 가능한 원인은 무엇입니까?",
   "options": {
    "A": "누락된 인스턴스에 분석을 위한 과거 Amazon CloudWatch 지표 데이터가 부족합니다.",
    "B": "Compute Optimizer 가 누락된 인스턴스의 인스턴스 유형을 지원하지 않습니다.",
    "C": "Compute Optimizer 가 이미 누락된 인스턴스를 최적화된 상태로 간주합니다.",
    "D": "누락된 인스턴스가 Windows 운영체제를 실행 중입니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Compute Optimizer 가 EC2 인스턴스에 대한 분석 및 최적화 권장 사항을 생성하려면 최소 30 시간 이상의 연속적인 Amazon CloudWatch 지표(CPU 사용률, 메모리, 네트워크, EBS 등) 데이터가 수집되어야 한다. 최근에 생성되었거나 실행 시간이 짧아 과거 지표 데이터가 부족한(insufficient) 인스턴스는 권장 사항 분석 대상에서 제외되거나 분석 결과 대시보드에 나타나지 않는다."
  },
  {
   "num": 53,
   "question": "CloudOps 엔지니어가 웹 애플리케이션을 위한 알림 및 자동 수정(remediation)을 설정해야 합니다. 애플리케이션은 AWS Systems Manager Agent(SSM Agent)가 설치된 Amazon EC2 인스턴스로 구성됩니다. 각 EC2 인스턴스는 사용자 지정 웹 서버를 실행합니다. EC2 인스턴스는 로드 밸런서 뒤에서 실행되며 로그를 로컬에 기록합니다. CloudOps 엔지니어는 로그에서 특정 웹 오류가 감지될 경우 웹 서버 소프트웨어를 자동으로 다시 시작하는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3 개 선택)",
   "options": {
    "A": "EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다.",
    "B": "웹 로그에 대한 AWS CloudTrail 지표 필터를 생성합니다. 특정 오류에 대한 경보를 구성합니다.",
    "C": "웹 로그에 대한 Amazon CloudWatch 지표 필터를 생성합니다. 특정 오류에 대한 경보를 구성합니다.",
    "D": "알림 결과를 Amazon Simple Email Service(Amazon SES)에 게시합니다. 웹 서버 소프트웨어를 다시 시작하기 위해 AWS Lambda 함수를 호출합니다.",
    "E": "경보에 대응하는 Amazon EventBridge 규칙을 생성합니다. 웹 서버 소프트웨어를 다시 시작하기 위해 AWS Systems Manager Automation 런북을 호출하도록 규칙을 구성합니다.",
    "F": "경보에 대응하는 Amazon Simple Notification Service(Amazon SNS) 알림을 생성합니다. 웹 서버 소프트웨어를 다시 시작하기 위해 AWS Systems Manager Automation 런북을 호출하도록 알림을 구성합니다."
   },
   "answer": [
    "A",
    "C",
    "E"
   ],
   "explanation": "EC2 인스턴스 내부의 로컬 로그 파일 수집을 위해서는 먼저 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치하여 CloudWatch Logs 로 전송해야 한다(A). 전송된 로그 그룹에서 특정 웹 에러 패턴을 검색하는 CloudWatch 지표 필터(Metric Filter)를 생성하고 이를 바탕으로 CloudWatch 경보(Alarm)를 구성한다(C). 경보 상태가 변경되면 이 이벤트에 반응하는 Amazon EventBridge 규칙을 생성하고, 타깃으로 Systems Manager Automation 런북을 호출하도록 지정하여 자동 수정을 완성한다(E). CloudTrail(B)은 인프라 API 감사용 서비스로 애플리케이션 로그 분석에 사용되지 않는다."
  },
  {
   "num": 54,
   "question": "CloudOps 엔지니어가 퍼블릭 서브넷과 프라이빗 서브넷이 포함된 VPC 를 생성했습니다. 프라이빗 서브넷에서 시작된 Amazon EC2 인스턴스가 인터넷에 액세스할 수 없습니다. 기본 네트워크 ACL 은 VPC 의 모든 서브넷에서 활성화되어 있으며, 모든 보안 그룹은 아웃바운드 트래픽을 허용합니다. 프라이빗 서브넷의 EC2 인스턴스에 인터넷 액세스를 제공하는 솔루션은 무엇입니까?",
   "options": {
    "A": "퍼블릭 서브넷에 NAT 게이트웨이를 생성합니다. 프라이빗 서브넷에서 NAT 게이트웨이로 가는 라우팅을 생성합니다.",
    "B": "퍼블릭 서브넷에 NAT 게이트웨이를 생성합니다. 퍼블릭 서브넷에서 NAT 게이트웨이로 가는 라우팅을 생성합니다.",
    "C": "프라이빗 서브넷에 NAT 게이트웨이를 생성합니다. 퍼블릭 서브넷에서 NAT 게이트웨이로 가는 라우팅을 생성합니다.",
    "D": "프라이빗 서브넷에 NAT 게이트웨이를 생성합니다. 프라이빗 서브넷에서 NAT 게이트웨이로 가는 라우팅을 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "프라이빗 서브넷의 인스턴스가 인터넷과 통신하기 위해서는 외부 인터넷 통신이 가능한 퍼블릭 서브넷(인터넷 게이트웨이 경로가 존재하는 서브넷)에 NAT 게이트웨이를 생성해야 한다. 그리고 프라이빗 서브넷의 라우팅 테이블에 `0.0.0.0/0` 트래픽을 해당 퍼블릭 서브넷의 NAT 게이트웨이로 전달하도록 라우팅 엔트리를 추가해야 한다. NAT 게이트웨이를 프라이빗 서브넷에 배치(C, D)하면 NAT 게이트웨이 자체가 인터넷과 통신할 수 없다."
  },
  {
   "num": 55,
   "question": "한 회사가 Amazon Aurora 단일 노드 DB 클러스터에서 운영 MySQL 데이터베이스를 호스팅합니다. 데이터베이스는 보고 목적으로 자주 쿼리됩니다. DB 클러스터는 높은 CPU 사용률과 최대 연결 수 오류로 인해 일시적인 성능 저하를 겪고 있습니다. CloudOps 엔지니어는 데이터베이스의 안정성을 향상시켜야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Aurora 복제본(Replica) 노드를 생성합니다. CPU 사용률에 따라 복제본을 확장하는 Auto Scaling 정책을 생성합니다. 모든 보고 요청이 읽기 전용 연결 문자열(reader endpoint)을 사용하도록 합니다.",
    "B": "두 번째 가용 영역에 두 번째 Aurora MySQL 단일 노드 DB 클러스터를 생성합니다. 모든 보고 요청이 이 추가 노드의 연결 문자열을 사용하도록 합니다.",
    "C": "보고 요청을 캐싱하는 AWS Lambda 함수를 생성합니다. 모든 보고 요청이 Lambda 함수를 호출하도록 합니다.",
    "D": "다중 노드 Amazon ElastiCache 클러스터를 생성합니다. 모든 보고 요청이 ElastiCache 클러스터를 사용하도록 합니다. 데이터가 캐시에 없는 경우 데이터베이스를 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon Aurora 는 쓰기 전용 기본(Writer) 노드 외에 읽기 전용(Reader) 복제본 노드를 추가할 수 있으며, Aurora Auto Scaling 정책을 사용하여 CPU 사용률 수준에 따라 복제본 수를 동적으로 확장할 수 있다. 보고(Reporting) 목적의 읽기 트래픽을 읽기 전용 연결 문자열(Reader Endpoint)로 전환하면 메인 쓰기 노드의 CPU 부담과 연결 수 고갈 문제를 분산 및 해결할 수 있다. 별도의 독립 클러스터 생성(B)은 동기식 데이터 복제 및 자동 장애 조치 구조를 제공하지 못하며 관리가 복잡해진다."
  },
  {
   "num": 56,
   "question": "CloudOps 엔지니어가 SSL/TLS 인증서를 사용하도록 Amazon CloudFront 배포를 구성하고 있습니다. CloudOps 엔지니어는 인증서의 자동 갱신을 보장해야 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "AWS Certificate Manager(ACM)에서 발급한 인증서를 사용합니다.",
    "B": "제 3 자 인증 기관(CA)에서 발급한 인증서를 사용합니다.",
    "C": "인증서가 만료될 때 인증서를 자동으로 갱신하도록 CloudFront 를 구성합니다.",
    "D": "인증서에 대한 이메일 검증(validation)을 구성합니다.",
    "E": "인증서에 대한 DNS 검증(validation)을 구성합니다."
   },
   "answer": [
    "A",
    "E"
   ],
   "explanation": "AWS Certificate Manager(ACM)에서 발급된 퍼블릭 인증서는 DNS 검증(DNS validation) 방식으로 생성되고 관련 CNAME 레코드가 유지되는 경우, 만료 전 자동으로 갱신된다. 이메일 검증(D)은 매년 수동 이메일 승인이 필요하여 자동 갱신되지 않으며, 외부 CA 인증서(B) 역시 수동으로 재발급 및 재업로드해야 한다. CloudFront 자체에는 인증서 갱신 기능(C)이 없으며 ACM 이 인증서 수명 주기를 관리한다."
  },
  {
   "num": 57,
   "question": "한 회사가 퍼블릭 서브넷과 프라이빗 서브넷을 포함하는 VPC 를 보유하고 있습니다. 회사는 Amazon Linux Amazon Machine Image(AMI)를 사용하고 프라이빗 서브넷에 AWS Systems Manager Agent(SSM Agent)가 설치된 Amazon EC2 인스턴스를 배포합니다. EC2 인스턴스는 아웃바운드 트래픽만 허용하는 보안 그룹에 속해 있습니다. CloudOps 엔지니어는 인스턴스를 인터넷에 노출시키지 않고 특권 관리자 그룹이 SSH 를 통해 인스턴스에 연결할 수 있는 기능을 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "프라이빗 서브넷에 EC2 Instance Connect 엔드포인트를 생성합니다. 인바운드 SSH 트래픽을 허용하도록 보안 그룹을 업데이트합니다. 특권 관리자를 위한 IAM 그룹을 생성합니다. IAM 그룹에 PowerUserAccess 관리형 정책을 할당합니다.",
    "B": "프라이빗 서브넷에 Systems Manager 엔드포인트를 생성합니다. Systems Manager 엔드포인트가 연결된 프라이빗 네트워크로부터의 SSH 트래픽을 허용하도록 보안 그룹을 업데이트합니다. 특권 관리자를 위한 IAM 그룹을 생성합니다. IAM 그룹에 PowerUserAccess 관리형 정책을 할당합니다.",
    "C": "퍼블릭 서브넷에 EC2 Instance Connect 엔드포인트를 생성합니다. 프라이빗 네트워크로부터의 SSH 트래픽을 허용하도록 보안 그룹을 업데이트합니다. 특권 관리자를 위한 IAM 그룹을 생성합니다. IAM 그룹에 PowerUserAccess 관리형 정책을 할당합니다.",
    "D": "퍼블릭 서브넷에 Systems Manager 엔드포인트를 생성합니다. EC2 인스턴스에 대한 AmazonSSMManagedInstanceCore 권한을 갖는 IAM 역할을 생성합니다. 특권 관리자를 위한 IAM 그룹을 생성합니다. IAM 그룹에 AmazonEC2ReadOnlyAccess IAM 정책을 할당합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "EC2 Instance Connect 엔드포인트(EICE)를 사용하면 퍼블릭 IP, 인터넷 게이트웨이 또는 NAT 게이트웨이 없이도 프라이빗 서브넷에 위치한 EC2 인스턴스에 SSH 로 안전하게 접속할 수 있다. EICE 는 인스턴스가 위치한 VPC 의 프라이빗 서브넷에 생성되어야 하며, 대상 EC2 인스턴스의 보안 그룹에서 EICE 보안 그룹으로부터 들어오는 인바운드 SSH(포트 22) 트래픽을 허용해야 한다."
  },
  {
   "num": 58,
   "question": "한 회사의 웹사이트가 Amazon EC2 Linux 인스턴스에서 실행됩니다. 웹사이트는 Amazon S3 버킷에서 PDF 파일을 제공해야 합니다. S3 버킷에 대한 모든 퍼블릭 액세스는 계정 수준에서 차단되어 있습니다. 회사는 웹사이트 사용자가 PDF 파일을 다운로드할 수 있도록 허용해야 합니다. 가장 적은 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "s3:list* 및 s3:get* 권한을 허용하는 정책이 있는 IAM 역할을 생성합니다. 인스턴스에 역할을 할당합니다. 회사 직원을 지정하여 요청된 PDF 파일을 EC2 인스턴스로 다운로드하고 웹사이트 사용자에게 전달하도록 합니다. 로컬 파일을 주기적으로 삭제하는 AWS Lambda 함수를 생성합니다.",
    "B": "S3 버킷을 가리키는 오리진 액세스 제어(OAC)를 사용하는 Amazon CloudFront 배포를 생성합니다. CloudFront 배포의 연결을 허용하도록 버킷에 버킷 정책을 적용합니다. 사용자가 PDF 파일을 요청할 때 배포 URL 과 객체 경로가 포함된 다운로드 URL 을 사용자에게 제공하도록 회사 직원을 지정합니다.",
    "C": "소스 S3 버킷에서 퍼블릭 액세스를 허용하도록 S3 버킷 권한을 변경합니다. 사용자가 PDF 파일을 요청할 때 사용자에게 PDF 파일 URL 을 제공하도록 회사 직원을 지정합니다.",
    "D": "퍼블릭 서브넷에 IAM 인스턴스 프로파일이 있는 EC2 인스턴스를 배포합니다. EC2 인스턴스에서 서명된 URL(presigned URL)을 사용하여 웹사이트 사용자에게 S3 버킷에 대한 임시 액세스 권한을 제공합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "S3 버킷 퍼블릭 액세스 차단(Block Public Access) 설정을 유지하면서 비공개 S3 객체에 대한 일시적 다운로드 권한을 안전하게 부여하는 표준 방식은 서명된 URL(Presigned URL)을 생성하여 전달하는 것이다. EC2 인스턴스 애플리케이션에서 AWS SDK 를 활용해 서명된 URL 을 자동 생성하면 수동 작업(A, B, C 의 직원 직접 개입) 없이 가장 적은 관리 노력으로 요구 사항을 달성할 수 있다."
  },
  {
   "num": 59,
   "question": "한 회사가 새로운 VOD(Video-On-Demand) 애플리케이션을 생성했습니다. 애플리케이션은 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스 플릿에서 실행됩니다. 회사는 Amazon CloudFront 배포를 구성하고 ALB 를 오리진으로 설정했습니다. 애플리케이션 수요가 증가함에 따라 회사는 모든 비디오 파일을 중앙 Amazon S3 버킷으로 이동하고자 합니다. SysOps 관리자는 회사가 파일을 Amazon S3 로 마이그레이션한 후 엣지 로케이션에서 비디오 파일을 캐싱할 수 있도록 보장해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "X-Forwarded-For 헤더를 오리진으로 전송하고 비디오 요청을 ALB 대신 Amazon S3 로 리디렉션하도록 CloudFront 를 구성합니다.",
    "B": "URL 경로 패턴 일치에 따라 새 오리진인 Amazon S3 로 라우팅하도록 새 CloudFront 캐시 동작(cache behavior)을 구성합니다.",
    "C": "사용자 지정 정책을 사용하여 CloudFront 배포에서 URL 서명을 구성합니다. 서명된 URL 을 통해서만 비디오 파일에 액세스할 수 있도록 합니다.",
    "D": "CloudFront 오리진 그룹을 구성합니다. 보조 오리진으로 연결 시도를 유도하기 위해 필요한 HTTP 상태 코드를 지정합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "CloudFront 배포 내에서 기존 ALB 오리진 외에 Amazon S3 버킷을 새로운 오리진(Origin)으로 추가한 후, 특정 URL 경로 패턴(예: `/videos/*` 또는 `*.mp4`)에 매핑되는 새로운 캐시 동작(Cache Behavior)을 작성하면 비디오 요청만 S3 버킷으로 자동 라우팅하여 엣지 로케이션에 캐싱할 수 있다."
  },
  {
   "num": 60,
   "question": "한 회사에 저장된 모든 Amazon Elastic Block Store(Amazon EBS) 볼륨을 암호화해야 하는 새 보안 정책이 있습니다. 회사는 암호화 키에 대한 액세스를 관리하기 위해 사용자 지정 키 정책을 사용해야 합니다. 회사는 1 년에 한 번 키를 순환(rotate)해야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS KMS 대칭 고객 관리형 키(customer managed key)를 생성합니다. 자동 키 순환을 활성화합니다.",
    "B": "회사의 AWS 환경 전반에서 AWS 소유 AWS KMS 키를 사용합니다.",
    "C": "AWS KMS 비대칭 고객 관리형 키(customer managed key)를 생성합니다. 자동 키 순환을 활성화합니다.",
    "D": "가져온 키 자재(imported key material)를 사용하여 AWS KMS 대칭 고객 관리형 키(customer managed key)를 생성합니다. 연간 단위로 키를 순환합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "사용자 지정 키 정책(Custom Key Policy)을 사용하여 키 액세스를 관리하려면 고객 관리형 키(Customer Managed Key)를 사용해야 한다. AWS KMS 에서 대칭 고객 관리형 키는 자동 키 순환(Automatic Key Rotation) 옵션을 지원하며, 활성화 시 1 년(365 일)마다 백킹 키 자재를 자동으로 순환하므로 운영 오버헤드가 가장 적다. 비대칭 키(C) 및 가져온 키 자재를 사용한 키(D)는 KMS 의 자동 키 순환 기능을 지원하지 않으며, AWS 소유 키(B)는 사용자 지정 키 정책을 편집할 수 없다."
  },
  {
   "num": 61,
   "question": "한 회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 많은 인스턴스에 패치가 적용되어 있지 않습니다. 회사에는 태깅 정책이 있습니다. 모든 인스턴스에는 소유자, 애플리케이션 및 환경에 대한 세부 정보가 태그로 지정되어 있습니다. AWS Systems Manager Agent(SSM Agent)가 모든 인스턴스에 설치되어 있습니다. SysOps 관리자는 환경 태그에 \"Prod\"가 포함된 모든 기존 및 향후 인스턴스를 자동으로 패치하는 솔루션을 구현해야 합니다. SysOps 관리자는 Systems Manager Patch Manager 에서 패치 정책을 생성할 계획입니다. 최소한의 운영 오버헤드로 패치 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "회사의 태깅 전략과 일치하는 노드 태그를 지정하여 패치 정책의 대상을 정의합니다.",
    "B": "새 인스턴스를 검색하고 패치 정책의 대상에 인스턴스를 추가하도록 AWS Lambda 함수를 구성합니다.",
    "C": "리소스 그룹을 생성합니다. 기존 인스턴스를 리소스 그룹에 추가합니다. 정기적으로 새 인스턴스를 검색하여 리소스 그룹에 인스턴스를 추가하도록 AWS Lambda 함수를 구성합니다. 리소스 그룹을 패치 정책에 연결합니다.",
    "D": "리소스 그룹을 생성합니다. 기존 인스턴스를 리소스 그룹에 추가합니다. 적절하게 정의된 필터를 사용하는 Amazon EventBridge 규칙을 생성하여 새 인스턴스를 리소스 그룹에 추가합니다. 리소스 그룹을 패치 정책에 연결합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Systems Manager Patch Manager 의 패치 정책(Patch Policy)은 노드 태그(Node Tags)를 타깃으로 직접 지정하는 기능을 제공한다. 태그 기반 타깃팅을 사용하면 현재 존재하는 인스턴스뿐만 아니라 향후 동일한 태그(\"Environment=Prod\")로 생성될 인스턴스까지 자동으로 감지하여 패치를 적용한다. 따라서 별도의 Lambda 스크립트 작성(B, C)이나 리소스 그룹 수동 관리(C, D) 없이 최소한의 운영 오버헤드로 요구 사항을 충족한다."
  },
  {
   "num": 62,
   "question": "CPU 사용률이 높은 한 회사의 Amazon EC2 인스턴스는 테스트 웹 앱을 실행 중인 t3.large 인스턴스입니다. 회사는 해당 앱이 컴퓨팅 최적화(compute-optimized) large 인스턴스에서 더 잘 작동할 것으로 판단했습니다. CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "AWS VM Import/Export 를 사용하여 EC2 인스턴스를 컴퓨팅 최적화 인스턴스로 마이그레이션합니다.",
    "B": "EC2 인스턴스에서 최면(hibernation) 기능을 활성화합니다. 인스턴스 유형을 컴퓨팅 최적화 인스턴스로 변경합니다. EC2 인스턴스에서 최면 기능을 비활성화합니다.",
    "C": "EC2 인스턴스를 중지(Stop)합니다. 인스턴스 유형을 컴퓨팅 최적화 인스턴스로 변경합니다. EC2 인스턴스를 시작(Start)합니다.",
    "D": "EC2 인스턴스가 실행 중인 동안 인스턴스 유형을 컴퓨팅 최적화 인스턴스로 변경합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "EBS 기반 Amazon EC2 인스턴스의 인스턴스 유형(Instance Type)을 변경하려면 인스턴스를 먼저 중지(Stop)한 후 인스턴스 유형을 원하는 컴퓨팅 최적화 유형(예: c6i.large 등)으로 변경하고 다시 시작(Start)해야 한다. 인스턴스가 실행 중인 상태에서는 유형을 직접 변경할 수 없으며(D), VM Import/Export(A)나 최면(B) 기능 설정은 인스턴스 유형 변경에 불필요한 작업이다."
  },
  {
   "num": 63,
   "question": "한 금융 서비스 회사가 us-east-1 리전의 Amazon S3 버킷에 고객 이미지를 저장합니다. 규정을 준수하기 위해 회사는 모든 기존 객체가 두 번째 AWS 리전의 S3 버킷으로 복제되도록 해야 합니다. 객체 복제에 실패하는 경우 회사는 해당 객체에 대한 복제를 재시도할 수 있어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon S3 교차 리전 복제(CRR)를 구성합니다. 기존 객체를 복제하기 위해 Amazon S3 라이브 복제를 사용합니다.",
    "B": "Amazon S3 교차 리전 복제(CRR)를 구성합니다. 기존 객체를 복제하기 위해 S3 배치 복제(S3 Batch Replication)를 사용합니다.",
    "C": "Amazon S3 교차 리전 복제(CRR)를 구성합니다. 기존 객체를 복제하기 위해 S3 복제 시간 제어(S3 RTC)를 사용합니다.",
    "D": "S3 수명 주기 규칙을 사용하여 객체를 두 번째 리전의 대상 버킷으로 이동합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon S3 교차 리전 복제(CRR)를 활성화하면 설정 시점 이후에 새로 업로드되는 객체만 라이브 복제된다. 복제 설정 이전에 이미 존재하는 기존 객체(existing objects)를 다른 리전으로 일괄 복제하고, 복제 실패 시 재시도 모니터링 및 보고 기능을 활용하려면 S3 배치 복제(S3 Batch Replication) 작업을 실행해야 한다. S3 RTC(C)는 15 분 내 복제 완료 보장을 위한 설정이며, 수명 주기 규칙(D)은 데이터 이동/삭제용으로 적합하지 않다."
  },
  {
   "num": 64,
   "question": "SysOps 관리자가 기존 AWS Lambda 함수에 기존 Amazon S3 버킷에 대한 액세스 권한을 부여해야 합니다. Lambda 함수와 S3 버킷 간의 트래픽은 퍼블릭 IP 주소를 사용해서는 안 됩니다. Lambda 함수는 VPC 내에서 실행되도록 구성되어 있습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Lambda VPC 와 S3 버킷 간에 VPC 공유를 구성합니다.",
    "B": "Lambda 함수가 S3 버킷에 연결할 수 있도록 Lambda VPC 에 전송 게이트웨이(Transit Gateway)를 연결합니다.",
    "C": "NAT 게이트웨이를 생성합니다. Lambda 함수가 실행되도록 구성된 서브넷에 NAT 게이트웨이를 연결합니다.",
    "D": "S3 인터페이스 엔드포인트를 생성합니다. 새 S3 DNS 이름을 사용하도록 Lambda 함수를 변경합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "VPC 내부에서 실행되는 Lambda 함수가 퍼블릭 IP 주소를 경유하지 않고 사설 네트워크 망 내에서 Amazon S3 와 통신하려면 S3 인터페이스 엔드포인트(AWS PrivateLink) 또는 게이트웨이 엔드포인트를 사용해야 한다. S3 인터페이스 엔드포인트를 생성하고 엔드포인트 전용 DNS 이름을 사용하여 S3 에 접근하면 프라이빗 IP 경로를 통해 데이터가 전송된다. NAT 게이트웨이(C)를 사용하는 방식은 퍼블릭 IP 주소를 경유하므로 조건에 위배된다."
  },
  {
   "num": 65,
   "question": "한 글로벌 회사가 us-east-1 리전에서 중요한 주 워크로드를 실행합니다. 회사는 워크로드에 장애가 발생할 경우 최소한의 중단 시간으로 비즈니스 연속성을 보장하고자 합니다. 회사는 두 번째 AWS 리전으로 워크로드를 복제하고자 합니다. CloudOps 엔지니어는 서비스 수준 계약을 충족하기 위해 10 분 미만의 복구 목표 시간(RTO)과 0 의 복구 시점 목표(RPO)를 달성하는 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "두 번째 리전에서 실시간 데이터 복제를 제공하는 파일럿 라이트(pilot light) 아키텍처를 구현합니다. Amazon Route 53 상태 검사 및 자동 DNS 장애 조치를 구성합니다.",
    "B": "두 번째 리전에서 정기적인 데이터 복제를 제공하는 웜 스탠바이(warm standby) 아키텍처를 구현합니다. Amazon Route 53 상태 검사 및 자동 DNS 장애 조치를 구성합니다.",
    "C": "두 리전에 걸쳐 실시간 데이터 복제를 제공하는 액티브-액티브(active-active) 아키텍처를 구현합니다. Amazon Route 53 상태 검사 및 가중치 기반 라우팅 정책을 사용합니다.",
    "D": "데이터의 정기적인 백업을 생성하고 두 번째 리전에 있는 S3 버킷에 저장하는 사용자 지정 스크립트를 구현합니다. 워크로드 장애 발생 시 백업을 사용하여 두 번째 리전에서 애플리케이션을 시작합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "복구 시점 목표(RPO)가 0(데이터 손실 절대 없음)이라는 제약 조건을 충족하려면 두 리전 모두에서 데이터를 실시간으로 동기화하고 트래픽을 교차 처리하는 액티브- 액티브(Active-Active) 아키텍처를 구축해야 한다. 파일럿 라이트(A)나 웜 스탠바이(B) 방식은 비동기 복제 지연이나 인프라 확장 시간에 의해 데이터 손실(RPO > 0) 및 RTO 지연이 발생할 수 있으므로 RPO 0 을 보장할 수 없다."
  },
  {
   "num": 66,
   "question": "한 회사의 AWS 계정들이 AWS Organizations 의 조직에 속해 있습니다. 조직에는 모든 기능이 활성화되어 있습니다. 계정은 애플리케이션을 호스팅하기 위해 Amazon EC2 인스턴스를 사용합니다. 회사는 AWS 관리 콘솔을 사용하여 EC2 인스턴스를 수동으로 관리합니다. 회사는 각 EC2 인스턴스에 대한 SSH 연결을 사용하여 EC2 인스턴스에 업데이트를 적용합니다. 회사는 AWS Systems Manager 를 사용하여 조직의 모든 현재 및 향후 EC2 인스턴스를 관리하는 솔루션이 필요합니다. 최신 버전의 Systems Manager Agent(SSM Agent)가 EC2 인스턴스에서 실행 중입니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "조직의 관리 계정에서 Systems Manager Quick Setup 의 홈 AWS 리전을 구성합니다. 관리 계정에서 Systems Manager 기본 호스트 관리 구성(Default Host Management Configuration, DHMC) Quick Setup 을 배포합니다.",
    "B": "조직의 관리 계정에서 Systems Manager Quick Setup 의 홈 AWS 리전을 구성합니다. EC2 인스턴스가 사용하는 모든 IAM 역할에 AmazonSSMServiceRolePolicy IAM 정책을 연결하는 Systems Manager Run Command 를 생성합니다. 조직의 모든 계정에서 해당 명령을 호출합니다.",
    "C": "기본 호스트 관리 구성 역할을 정의하기 위한 Systems Manager 파라미터가 포함된 AWS CloudFormation 스택 세트를 생성합니다. 조직의 관리 계정을 사용하여 조직의 모든 계정에 스택 세트를 배포합니다.",
    "D": "AmazonSSMManagedEC2InstanceDefaultPolicy IAM 정책이 연결된 EC2 인스턴스 프로파일이 포함된 AWS CloudFormation 스택 세트를 생성합니다. 조직의 관리 계정을 사용하여 조직의 모든 계정에 스택 세트를 배포합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager 의 기본 호스트 관리 구성(Default Host Management Configuration, DHMC)은 개별 EC2 인스턴스마다 IAM 인스턴스 프로파일을 수동으로 연결하지 않고도 SSM Agent 가 설치된 모든 인스턴스를 Systems Manager 에 자동으로 등록하고 관리할 수 있도록 해주는 기능이다. AWS Organizations 환경에서 관리 계정을 통해 DHMC Quick Setup 을 조직 전체에 배포하면 현재 존재하는 인스턴스뿐만 아니라 향후 생성되는 모든 인스턴스에 대해 별도의 추가 작업 없이 자동으로 SSM 관리 기능이 활성화된다."
  },
  {
   "num": 67,
   "question": "SysOps 관리자가 기존 AWS KMS 고객 관리형 키를 사용하여 기존 Amazon Elastic File System(Amazon EFS) 파일 시스템을 암호화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon EFS 복제(replication)를 사용하여 새 파일 시스템을 생성합니다. 기존 파일 시스템의 데이터와 메타데이터를 새 파일 시스템으로 복사합니다. 복제 구성에서 KMS 고객 관리형 키를 지정합니다. 복제 프로세스가 완료되면 암호화된 새 파일 시스템으로 장애 조치(failover)합니다.",
    "B": "암호화를 사용하도록 파일 시스템을 직접 수정합니다. KMS 고객 관리형 키를 지정합니다.",
    "C": "Amazon EFS 복제(replication)를 사용하여 새 파일 시스템을 생성합니다. 기존 파일 시스템의 데이터와 메타데이터를 새 파일 시스템으로 복사합니다. 새 TLS 인증서를 생성합니다. 복제 구성에서 TLS 인증서를 지정합니다. 복제 프로세스가 완료되면 암호화된 새 파일 시스템으로 장애 조치(failover)합니다.",
    "D": "KMS 고객 관리형 키로 암호화된 새 EFS 파일 시스템을 생성합니다. 파일을 복사하기 위해 Amazon EC2 인스턴스를 생성합니다. 인스턴스에 암호화된 파일 시스템과 암호화되지 않은 파일 시스템을 마운트합니다. 암호화되지 않은 파일 시스템의 모든 데이터를 암호화된 파일 시스템으로 복사합니다. 암호화되지 않은 파일 시스템을 마운트 해제하고 임시 인스턴스를 제거합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "기존에 생성되어 운영 중인 암호화되지 않은 Amazon EFS 파일 시스템은 인플레이스로 직접 암호화 설정을 변경할 수 없다(B). 암호화되지 않은 EFS 를 KMS 암호화 키가 적용된 EFS 로 마이그레이션할 때 가장 효율적인 방식은 EFS 의 자체 기본 복제(Replication) 기능을 활용하는 것이다. 대상 파일 시스템을 생성할 때 KMS 고객 관리형 키를 지정하여 복제를 설정하면, 데이터를 안전하게 암호화 동기화한 뒤 신규 EFS 로 전환할 수 있어 임시 EC2 를 이용한 수동 데이터 복사(D)보다 운영 오버헤드가 훨씬 적다."
  },
  {
   "num": 68,
   "question": "SysOps 관리자가 eu-west-2 리전에서 사용자 지정 Amazon Machine Image(AMI)를 생성하고 이 AMI 를 사용하여 Amazon EC2 인스턴스를 시작합니다. SysOps 관리자는 동일한 AMI 를 사용하여 us-east-1 및 us-east-2 의 다른 두 리전에서도 EC2 인스턴스를 시작해야 합니다. 추가 리전에서 사용자 지정 AMI 를 사용하려면 SysOps 관리자가 무엇을 해야 합니까?",
   "options": {
    "A": "AMI 를 추가 리전으로 복사(Copy)합니다.",
    "B": "AWS 관리 콘솔의 커뮤니티 AMI 섹션에서 AMI 를 퍼블릭으로 설정합니다.",
    "C": "AMI 를 추가 리전에 공유(Share)합니다. 필요한 액세스 권한을 할당합니다.",
    "D": "AMI 를 새 Amazon S3 버킷으로 복사합니다. 추가 리전에 대한 AMI 액세스 권한을 할당합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon Machine Image(AMI)는 특정 AWS 리전에 종속된(Region-scoped) 리소스이다. 따라서 특정 리전(eu-west-2)에서 만든 사용자 지정 AMI 를 다른 리전(us-east-1, us-east- 2)에서 사용하여 EC2 인스턴스를 시작하려면 해당 대상 리전으로 AMI 를 복사(Copy)해야 한다. AMI 공유(C)는 계정 간 공유에 사용되는 개념이며, 동일 계정 내 다른 리전으로의 이동은 복사 작업이 필요하다."
  },
  {
   "num": 69,
   "question": "한 회사가 Amazon EC2 인스턴스 클러스터에서 사용자 지정 통계 분석 소프트웨어를 실행합니다. 네트워크 처리량은 제한 사항이 아니지만, 이 소프트웨어는 노드 간 네트워크 지연 시간(latency)에 매우 민감합니다. 네트워크 지연 시간을 최소화하는 솔루션은 무엇입니까?",
   "options": {
    "A": "모든 EC2 인스턴스를 클러스터 배치 그룹(cluster placement group)에 배치합니다.",
    "B": "각 EC2 인스턴스에 대해 두 개의 탄력적 IP 주소를 구성하고 할당합니다.",
    "C": "클러스터의 모든 EC2 인스턴스에서 점보 프레임(jumbo frames)을 구성합니다.",
    "D": "동일한 AWS 리전 내의 분산 배치 그룹(spread placement group)에 모든 EC2 인스턴스를 배치합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "클러스터 배치 그룹(Cluster placement group)은 단일 가용 영역(AZ) 내에서 인스턴스들을 물리적으로 가깝게 배치하여 노드 간 최저 수준의 네트워크 지연 시간(Low latency)과 높은 네트워크 처리량을 제공하도록 설계된 기능이다. 따라서 통계 분석 및 HPC 와 같이 노드 간 지연 시간에 민감한 워크로드에는 클러스터 배치 그룹이 적합하다. 분산 배치 그룹(D)은 하드웨어 장애 격리를 위해 인스턴스들을 서로 다른 랙에 분산하므로 지연 시간 단축 목적에 부합하지 않는다."
  },
  {
   "num": 70,
   "question": "한 회사가 사용자 데이터를 Amazon CloudWatch Logs 로그 그룹에 기록하는 애플리케이션을 실행합니다. 회사는 애플리케이션이 기록한 개인정보가 CloudWatch 로그에 일반 텍스트로 노출되어 있음을 발견했습니다. 회사는 기본적으로 로그의 개인정보를 가리도록(redact) 하는 솔루션이 필요합니다. 가려지지 않은 원래 정보는 회사의 보안 팀만 사용할 수 있어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon S3 버킷을 생성합니다. CloudWatch 의 적절한 로그 그룹에서 내보내기 작업을 생성합니다. 로그를 S3 버킷으로 내보냅니다. S3 버킷의 개인 데이터를 검색하도록 Amazon Macie 스캔을 구성합니다. 식별된 개인 데이터를 두 번째 S3 버킷으로 이동하기 위해 AWS Lambda 함수를 호출합니다. 보안 팀만 두 버킷에 액세스할 수 있도록 S3 버킷 정책을 업데이트합니다.",
    "B": "고객 관리형 AWS KMS 키를 생성합니다. 보안 팀만 복호화 작업을 수행할 수 있도록 KMS 키 정책을 구성합니다. KMS 키를 애플리케이션 로그 그룹에 연결합니다.",
    "C": "애플리케이션 로그 그룹에 대한 Amazon CloudWatch 데이터 보호 정책(data protection policy)을 생성합니다. 애플리케이션이 기록하는 개인정보 유형에 대한 데이터 식별자를 구성합니다. 보안 팀에 애플리케이션 로그 그룹에 대해 unmask API 작업을 호출할 수 있는 권한이 있는지 확인합니다.",
    "D": "OpenSearch 도메인을 생성합니다. Detect PII 변환 작업을 실행하고 출력을 OpenSearch 도메인으로 스트리밍하는 AWS Glue 워크플로를 생성합니다. 로그를 AWS Glue 로 스트리밍하도록 CloudWatch 로그 그룹을 구성합니다. 보안 팀만 도메인에 액세스할 수 있도록 OpenSearch 도메인 액세스 정책을 수정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon CloudWatch Logs 데이터 보호 정책(Data Protection Policy)은 로그 수집 시점에 주민등록번호, 신용카드 번호 등 지정된 데이터 식별자(PII)를 자동으로 감지하고 마스킹(Redact) 처리하는 관리형 기능이다. 마스킹된 로그는 기본적으로 가려져 보이지만, `logs:Unmask` IAM 권한이 부여된 보안 팀 권한을 사용하면 원본 데이터를 해제하여 확인할 수 있다. S3 내보내기 및 Macie 연동(A)이나 OpenSearch/Glue 구성(D)은 실시간 수집 마스킹 및 unmask API 표준 접근 방식을 대체할 수 없으며 운영 복잡성이 매우 크다."
  },
  {
   "num": 71,
   "question": "SysOps 관리자가 데이터 전송 및 지연 시간 성능을 평가하기 위해 새 Amazon CloudFront 배포에 대한 부하 테스트를 수행해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "단일 지리적 리전에서 클라이언트 요청을 보냅니다. 각 클라이언트가 동일한 DNS 요청을 하도록 부하 테스트를 구성합니다. DNS 가 반환하는 IP 주소에 클라이언트 요청을 집중합니다.",
    "B": "단일 지리적 리전에서 클라이언트 요청을 보냅니다. 각 클라이언트가 독립적인 DNS 요청을 하도록 부하 테스트를 구성합니다. DNS 가 반환하는 IP 주소 세트에 클라이언트 요청을 분산합니다.",
    "C": "여러 지리적 리전에서 클라이언트 요청을 보냅니다. 각 클라이언트가 동일한 DNS 요청을 하도록 부하 테스트를 구성합니다. DNS 가 반환하는 IP 주소에 클라이언트 요청을 집중합니다.",
    "D": "여러 지리적 리전에서 클라이언트 요청을 보냅니다. 각 클라이언트가 독립적인 DNS 요청을 하도록 부하 테스트를 구성합니다. DNS 가 반환하는 IP 주소 세트에 클라이언트 요청을 분산합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon CloudFront 는 전 세계 엣지 로케이션을 활용하여 사용자와 가까운 위치에서 콘텐츠를 제공한다. 따라서 CloudFront 배포의 실제 데이터 전송 및 지연 시간 성능을 올바르게 부하 테스트하려면 여러 지리적 리전(Multiple geographic regions)에서 요청을 전송해야 한다. 또한, 각 클라이언트가 독립적인 DNS 질의를 수행하고 응답받은 IP 주소 세트에 트래픽을 고르게 분산하여 특정 엣지 서버나 단일 IP 에 트래픽이 쏠리지 않도록 부하 테스트를 구성해야 한다."
  },
  {
   "num": 72,
   "question": "한 글로벌 게임 회사가 AWS 에서 새 게임을 출시할 준비를 하고 있습니다. 게임은 여러 AWS 리전의 Amazon EC2 인스턴스 플릿에서 실행됩니다. 인스턴스는 각 리전의 Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹에 있습니다. 회사는 DNS 서비스로 Amazon Route 53 을 사용할 계획입니다. DNS 구성은 사용자를 가장 가까운 리전으로 전달해야 하며 자동 장애 조치를 제공해야 합니다. CloudOps 엔지니어가 이러한 요구 사항을 충족하도록 Route 53 을 구성하기 위해 취해야 하는 단계 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "각 리전의 ALB 상태를 모니터링하는 Amazon CloudWatch 경보를 생성합니다. 해당 경보를 모니터링하는 헬스 체크를 사용하여 Route 53 DNS 장애 조치를 구성합니다.",
    "B": "각 리전의 EC2 인스턴스 상태를 모니터링하는 Amazon CloudWatch 경보를 생성합니다. 해당 경보를 모니터링하는 헬스 체크를 사용하여 Route 53 DNS 장애 조치를 구성합니다.",
    "C": "각 리전의 EC2 인스턴스의 프라이빗 IP 주소를 모니터링하는 헬스 체크를 사용하여 Route 53 DNS 장애 조치를 구성합니다.",
    "D": "Route 53 지리적 근접성(geoproximity) 라우팅을 구성합니다. 인프라에 사용되는 리전을 지정합니다.",
    "E": "Route 53 단순(simple) 라우팅을 구성합니다. 인프라에 사용되는 대륙, 국가 및 주/도를 지정합니다."
   },
   "answer": [
    "A",
    "D"
   ],
   "explanation": "사용자에게 지리적으로 가장 가까운 리전으로 트래픽을 라우팅하려면 Route 53 의 지리적 근접성(Geoproximity) 라우팅 정책을 구성하고 리전 위치를 지정해야 한다(D). 또한, 각 리전의 엔드포인트에 장애가 발생할 때 자동 장애 조치(Failover)를 수행하려면 각 리전 ALB 의 상태를 나타내는 CloudWatch 경보를 생성하고, Route 53 헬스 체크가 이 CloudWatch 경보 상태를 모니터링하도록 연동해야 한다(A). 프라이빗 IP(C)는 인터넷을 통한 Route 53 헬스 체크 대상이 될 수 없으며, 개별 EC2 모니터링(B)보다 ALB 전체 상태 모니터링이 적합하다."
  },
  {
   "num": 73,
   "question": "애플리케이션 A 는 Network Load Balancer(NLB) 뒤의 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 Auto Scaling 그룹에 속해 있으며 NLB 와 연결된 동일한 서브넷에 있습니다. 온프레미스 환경의 다른 애플리케이션이 포트 8080 에서 애플리케이션 A 와 통신할 수 없습니다. 문제를 해결하기 위해 CloudOps 엔지니어가 플로우 로그(Flow Logs)를 분석합니다. 플로우 로그에는 다음 레코드가 포함되어 있습니다. * ACCEPT from 192.168.0.13:59003 # 172.31.16.139:8080 * REJECT from 172.31.16.139:8080 # 192.168.0.13:59003 거부된 트래픽의 원인은 무엇입니까?",
   "options": {
    "A": "EC2 인스턴스의 보안 그룹에 NLB 로부터의 트래픽을 허용하는 Allow 규칙이 없습니다.",
    "B": "NLB 의 보안 그룹에 온프레미스 환경으로부터의 트래픽을 허용하는 Allow 규칙이 없습니다.",
    "C": "온프레미스 환경의 ACL 이 AWS 환경으로의 트래픽을 허용하지 않습니다.",
    "D": "서브넷과 연결된 네트워크 ACL 이 임시 포트(ephemeral port) 범위에 대한 아웃바운드 트래픽을 허용하지 않습니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "플로우 로그 분석 결과, 인바운드 요청(192.168.0.13:59003 -> 172.31.16.139:8080)은 ACCEPT 되었으나, 이에 대한 아웃바운드 응답(172.31.16.139:8080 -> 192.168.0.13:59003)은 REJECT 처리되었다. 보안 그룹(Security Group)은 상태 저장(Stateful) 방식이므로 인바운드가 승인되면 아웃바운드 응답도 자동 승인된다. 반면 네트워크 ACL(NACL)은 상태 비저장(Stateless) 방식이므로 인바운드와 아웃바운드를 각각 검사한다. 따라서 응답 트래픽의 목적지인 클라이언트의 임시 포트(Ephemeral Port, 59003)로 나가는 아웃바운드 트래픽이 네트워크 ACL 에 의해 차단된 것이다."
  },
  {
   "num": 74,
   "question": "AWS Organizations 를 사용하는 한 회사가 최근 AWS Control Tower 를 구현했습니다. 이제 회사는 자격 증명 관리를 중앙화해야 합니다. CloudOps 엔지니어는 모든 AWS 계정 및 클라우드 애플리케이션에 대한 액세스를 중앙에서 관리하기 위해 외부 SAML 2.0 자격 증명 제공자(IdP)와 AWS IAM Identity Center 를 연동(federate)해야 합니다. CloudOps 엔지니어가 외부 IdP 에 연결하기 위해 준비해야 하는 필수 전제 조건은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "IAM Identity Center SAML 메타데이터 사본",
    "B": "퍼블릭 X.509 인증서를 포함한 IdP 메타데이터",
    "C": "IdP 의 IP 주소",
    "D": "관리 계정에 대한 루트 액세스 권한",
    "E": "조직의 멤버 계정에 대한 관리자 권한"
   },
   "answer": [
    "A",
    "B"
   ],
   "explanation": "AWS IAM Identity Center 와 외부 SAML 2.0 자격 증명 제공자(IdP)를 연동하려면 두 시스템 간에 SAML 메타데이터 교환이 필수적이다. AWS IAM Identity Center 의 SAML 메타데이터(A)를 외부 IdP 에 등록해야 하며, 반대로 퍼블릭 X.509 인증서가 포함된 외부 IdP 메타데이터(B)를 받아 IAM Identity Center 에 등록해야 정상적인 SAML 페더레이션 신뢰 관계가 구축된다."
  },
  {
   "num": 75,
   "question": "회사의 보안 정책에 따라 SSH 및 RDP 를 통한 Amazon EC2 인스턴스 접속이 금지되어 있습니다. 대신 직원들은 AWS Systems Manager Session Manager 를 사용해야 합니다. 사용자들은 다른 인스턴스에는 접속할 수 있지만, 하나의 Ubuntu 인스턴스에는 접속할 수 없다고 보고합니다. CloudOps 엔지니어가 이 문제를 해결하기 위해 해야 할 일은 무엇입니까?",
   "options": {
    "A": "Ubuntu 인스턴스와 연결된 보안 그룹에 포트 22 에 대한 인바운드 규칙을 추가합니다.",
    "B": "Ubuntu 인스턴스의 EC2 인스턴스 프로파일에 AmazonSSMManagedInstanceCore 관리형 정책을 할당합니다.",
    "C": "\"ubuntu\" 사용자 이름으로 로그인하도록 SSM Agent 를 구성합니다.",
    "D": "새 키 쌍을 생성하고, 이 새 키 쌍을 사용하도록 Session Manager 를 구성한 후 사용자에게 프라이빗 키를 제공합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Systems Manager Session Manager 를 통해 EC2 인스턴스에 접속하려면 해당 인스턴스에 연결된 IAM 인스턴스 프로파일(Role)에 `AmazonSSMManagedInstanceCore` 관리형 정책 권한이 할당되어 있어야 한다. 보안 그룹의 포트 22 오픈(A)은 SSH 접속용이므로 필요하지 않으며, Session Manager 는 443 포트 기반 Outbound 통신과 IAM 권한을 이용하므로 해당 IAM 정책 부여가 올바른 해결책이다."
  },
  {
   "num": 76,
   "question": "CloudOps 엔지니어가 기본 설정으로 구성된 단순 스케일링(simple scaling) Auto Scaling 그룹 내 Application Load Balancer(ALB) 뒤에서 실행되도록 애플리케이션을 구성합니다. Auto Scaling 그룹은 스케일링을 위해 RequestCountPerTarget 지표를 사용하도록 구성되어 있습니다. CloudOps 엔지니어는 RequestCountPerTarget 지표가 180 초 동안 지정된 한도를 두 번 초과한 것을 발견했습니다. 이 시나리오에서 이 Auto Scaling 그룹의 EC2 인스턴스 수는 어떻게 변경됩니까?",
   "options": {
    "A": "Auto Scaling 그룹은 RequestCountPerTarget 지표가 미리 정의된 한도를 초과할 때마다 추가 EC2 인스턴스를 시작합니다.",
    "B": "Auto Scaling 그룹은 하나의 EC2 인스턴스를 시작하고 다른 인스턴스를 시작하기 전에 기본 쿨다운(cooldown) 기간 동안 대기합니다.",
    "C": "Auto Scaling 그룹은 ALB 에 경고를 보내 트래픽의 균형을 다시 맞추고 부하가 정상화될 때까지 새 EC2 인스턴스를 추가하지 않습니다.",
    "D": "Auto Scaling 그룹은 다른 인스턴스를 시작하기 전에 모든 EC2 인스턴스 간에 트래픽을 분산하려고 시도합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon EC2 Auto Scaling 의 단순 스케일링(Simple Scaling) 정책은 스케일링 작업이 트리거된 후 지정된 쿨다운(Cooldown) 기간이 경과할 때까지 추가적인 단순 스케일링 평가나 인스턴스 추가 시작을 유예한다. Auto Scaling 그룹의 기본 쿨다운 시간은 300 초이다. 따라서 180 초 내에 경보 지표가 두 번 초과하더라도 첫 번째 경보에 의해 하나의 EC2 인스턴스만 시작되며, 쿨다운 기간(300 초)이 끝날 때까지 대기 상태를 유지한다."
  },
  {
   "num": 77,
   "question": "한 회사가 Amazon CloudFront 배포 뒤의 Amazon S3 에 정적 웹사이트를 호스팅합니다. 새로운 버전이 배포될 때 사용자가 업데이트된 콘텐츠를 즉시 확인하지 못하는 경우가 있습니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 버킷의 콘텐츠 요청에 사용자 지정 Cache-Control 헤더를 추가하도록 CloudFront 배포를 구성합니다.",
    "B": "프로토콜을 HTTPS 전용으로 지정하도록 배포 설정을 수정합니다.",
    "C": "CachingOptimized 관리형 캐시 정책을 배포에 연결합니다.",
    "D": "CloudFront 무효화(invalidation)를 생성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "S3 오리진에 새 버전의 정적 파일이 업로드되었을 때 CloudFront 엣지 로케이션에 이미 캐시되어 있는 이전 버전의 파일들을 즉시 삭제하고 새 파일로 업데이트하려면 CloudFront 캐시 무효화(Invalidation)를 실행해야 한다. 무효화를 수행하면 TTL 만료 전이라도 캐시를 즉시 제거하여 사용자가 새로 배포된 콘텐츠를 즉시 확인할 수 있다."
  },
  {
   "num": 78,
   "question": "한 회사에 Amazon CloudWatch Logs 로 로그 데이터를 전송하는 워크로드가 있습니다. 필드 중 하나에는 애플리케이션 지연 시간(latency)의 측정값이 포함되어 있습니다. CloudOps 엔지니어는 시간에 따른 이 필드의 p90 통계를 모니터링해야 합니다. 이 요구 사항을 충족하기 위해 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "로그 데이터에 대해 Amazon CloudWatch Contributor Insights 규칙을 생성합니다.",
    "B": "로그 데이터에 대해 지표 필터(metric filter)를 생성합니다.",
    "C": "로그 데이터에 대해 구독 필터(subscription filter)를 생성합니다.",
    "D": "워크로드에 대해 Amazon CloudWatch Application Insights 규칙을 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "CloudWatch Logs 의 로그 데이터에서 특정 지연 시간 숫자를 추출하여 CloudWatch 지표(Metric)로 전환하려면 로그 그룹에 지표 필터(Metric Filter)를 생성해야 한다. 지표 필터로 추출되어 수집된 CloudWatch 지표는 p90, p99 등 백분위수(Percentile) 통계 기능을 기본 지원하므로, 시간에 따른 지연 시간 분포 모니터링이 가능해진다."
  },
  {
   "num": 79,
   "question": "한 다국적 회사가 AWS Organizations 의 조직을 사용하여 여러 AWS 리전에 걸쳐 200 개 이상의 멤버 계정을 관리합니다. 회사는 모든 AWS 리소스가 특정 보안 요구 사항을 충족하도록 해야 합니다. 회사는 ap-southeast-2 리전에 어떠한 EC2 인스턴스도 배포해서는 안 됩니다. 회사는 모든 멤버 계정에서 루트 사용자 작업을 완전히 차단해야 합니다. 회사는 관리자를 포함한 어떤 사용자도 AWS CloudTrail 로그를 삭제하지 못하도록 방지해야 합니다. 회사는 기존 및 향후의 모든 계정에 자동으로 적용할 수 있는 중앙 관리형 솔루션을 필요로 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "각 계정에 수정 조치가 포함된 AWS Config 규칙을 생성하여 정책 위반을 감지합니다. 계정 루트 사용자에 대해 IAM 권한 경계를 구현합니다.",
    "B": "조직 전반에서 AWS Security Hub 를 활성화합니다. 보안 요구 사항을 강제하기 위한 사용자 지정 보안 표준을 생성합니다. AWS CloudFormation StackSets 를 사용하여 조직의 모든 계정에 표준을 배포합니다. Security Hub 자동 수정 작업을 설정합니다.",
    "C": "계정 거버넌스를 위해 AWS Control Tower 를 사용합니다. 리전 거부(Region deny) 제어 항목을 구성합니다. 서비스 제어 정책(SCP)을 사용하여 루트 사용자 액세스를 제한합니다.",
    "D": "보안 요구 사항을 충족하기 위해 보안 정책이 포함된 AWS Firewall Manager 를 구성합니다. 보안 정책 위반을 감지하기 위해 조직 범위의 적합성 팩과 함께 AWS Config 수집기를 사용합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Control Tower 와 AWS Organizations 의 서비스 제어 정책(SCP)을 활용하면 조직 내 전체 계정(기존 및 향후 계정 포함)에 중앙 집중식 보안 가드레일을 자동 적용할 수 있다. Control Tower 의 리전 거부(Region Deny) 제어 기능을 통해 특정 리전(ap- southeast-2)에서의 리소스 생성을 금지할 수 있으며, SCP 를 적용하여 멤버 계정의 루트(root) 사용자 활동을 차단하고 CloudTrail 로그 삭제 행위를 관리자를 포함하여 원천적으로 차단할 수 있다."
  },
  {
   "num": 80,
   "question": "CloudOps 엔지니어가 AWS 리전 간 데이터 전송 비용을 추적해야 합니다. CloudOps 엔지니어는 전송 비용이 특정 임계값의 75%에 도달할 때 이메일 배포 목록으로 알림을 보내는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하기 위해 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "AWS Cost and Usage Report 를 생성합니다. Amazon Athena 에서 결과를 분석합니다. 비용이 임계값의 75%에 도달할 때 Amazon Simple Notification Service(Amazon SNS) 주제로 메시지를 게시하도록 경보를 구성합니다. 이메일 배포 목록을 주제에 구독시킵니다.",
    "B": "비용이 임계값의 75%에 도달할 때를 감지하도록 Amazon CloudWatch 결제 경보를 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제로 메시지를 게시하도록 경보를 구성합니다. 이메일 배포 목록을 주제에 구독시킵니다.",
    "C": "AWS Budgets 를 사용하여 데이터 전송 비용에 대한 비용 예산(cost budget)을 생성합니다. 예산 금액의 75%에서 알림을 설정합니다. 비용이 임계값의 75%에 도달할 때 이메일 배포 목록으로 알림을 보내도록 예산을 구성합니다.",
    "D": "VPC 흐름 로그를 설정합니다. 데이터 전송을 분석하기 위해 AWS Lambda 함수로의 구독 필터를 설정합니다. 비용이 임계값의 75%에 도달할 때 이메일 배포 목록으로 알림을 보내도록 Lambda 함수를 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "특정 서비스나 사용 유형(데이터 전송 등)별 비용 한도를 추적하고, 설정한 예산 한도 대비 특정 비율(75%)에 도달했을 때 이메일 수신자에게 직접 알림을 보내는 데 가장 적합하고 간단한 서비스는 AWS Budgets 이다. CloudWatch 결제 경보(B)는 전체 추정 청구 금액 기준 모니터링에 주로 쓰이며, 서비스 세부 지표 예산 설정 및 이메일 직접 통지 기능은 AWS Budgets 가 훨씬 효율적이다."
  },
  {
   "num": 81,
   "question": "한 회사의 개발자가 서비스의 새 버전을 배포하기 위해 Amazon EC2 인스턴스에 소프트웨어 모듈을 수동으로 설치합니다. 보안 감사 결과 인스턴스에 일관성이 없고 승인되지 않은 모듈이 포함되어 있음이 밝혀졌습니다. CloudOps 엔지니어는 승인된 소프트웨어만 포함하는 새 인스턴스 이미지를 생성해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon Detective 를 사용하여 인스턴스에서 승인되지 않은 모듈을 지속적으로 찾아 제거합니다.",
    "B": "Amazon GuardDuty 를 사용하여 승인된 모듈만 포함하는 Amazon Machine Image(AMI)를 생성하고 배포합니다.",
    "C": "AWS Systems Manager Run Command 를 사용하여 인플레이스 업데이트 중에 실행 중인 모든 인스턴스에 승인된 모듈을 설치합니다.",
    "D": "EC2 Image Builder 를 사용하여 승인된 모듈만 포함하는 Amazon Machine Image(AMI)를 생성하고 테스트합니다. 새 AMI 를 사용하도록 배포 워크플로를 업데이트합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "보안 규정을 준수하고 승인된 소프트웨어만 포함된 커스텀 EC2 이미지(AMI)의 생성, 테스트 및 관리 프로세스를 자동화하는 전용 서비스는 EC2 Image Builder 이다. EC2 Image Builder 를 통해 표준화된 AMI 를 자동으로 빌드하고 이를 배포 파이프라인에 연결하면 불일치 및 미승인 모듈 설치 문제를 해결할 수 있다. Amazon Detective(A)는 보안 사고 조사 서비스이고, Amazon GuardDuty(B)는 위협 탐지 서비스이며, Run Command(C)는 새 인스턴스 이미지를 생성하지 않는다."
  },
  {
   "num": 82,
   "question": "한 회사가 Auto Scaling 그룹 내 Elastic Load Balancer(ELB) 뒤의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션은 성능이 느려지는 매일 2 시간 동안의 트래픽 피크 기간을 제외하고는 잘 작동합니다. CloudOps 엔지니어는 최소한의 운영 노력으로 이 문제를 해결해야 합니다. 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "2 시간 동안 증가된 수요를 충족하는 데 필요한 크기로 Auto Scaling 그룹의 최소 용량을 조정합니다.",
    "B": "사용자 트래픽 증가에 더 민감하게 반응하도록 Auto Scaling 그룹과 연결된 시작 템플릿을 조정합니다.",
    "C": "사용자 트래픽이 증가하기 직전에 EC2 인스턴스 수를 스케일 아웃하는 예약된 스케일링 조치(scheduled scaling action)를 생성합니다.",
    "D": "사용자 트래픽 증가를 지원하기 위해 Auto Scaling 그룹에 몇 개의 EC2 인스턴스를 수동으로 추가합니다. Auto Scaling 그룹에서 인스턴스 축소 보호(scale-in protection)를 활성화합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "매일 특정 2 시간 동안 트래픽이 급증하는 것과 같이 예측 가능한 주기를 가진 워크로드의 경우, EC2 Auto Scaling 의 예약된 스케일링(Scheduled Scaling) 조치를 사용하는 것이 가장 효율적이다. 트래픽 피크 시작 직전에 인스턴스 수를 미리 늘려놓도록 예약하면, 동적 스케일링 지연으로 인한 성능 저하를 방지하고 최소한의 운영 노력으로 문제를 해결할 수 있다. 최소 용량을 항상 높게 유지하는 것(A)은 불필요한 비용을 발생시키며, 수동 관리(D)는 운영 오버헤드가 크다."
  },
  {
   "num": 83,
   "question": "애플리케이션이 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스에서 실행됩니다. CloudOps 엔지니어는 애플리케이션이 디스크에 기록하는 오류 로그를 중앙에 저장하는 장소를 제공하는 솔루션을 구현해야 합니다. 또한 이 솔루션은 애플리케이션이 오류를 기록할 때 알림을 제공해야 합니다. CloudOps 엔지니어는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
   "options": {
    "A": "EC2 인스턴스에 Amazon CloudWatch 에이전트를 배포 및 구성하여 CloudWatch 로그 그룹에 로그를 기록합니다. 대상 CloudWatch 로그 그룹에 지표 필터를 생성합니다. 이메일 구독이 설정된 Amazon Simple Notification Service(Amazon SNS) 주제로 게시되는 CloudWatch 경보를 생성합니다.",
    "B": "EC2 인스턴스에 크론 작업(cron job)을 생성하여 오류를 식별하고 Amazon CloudWatch 지표 필터로 오류를 전송합니다. SMS 구독이 설정된 Amazon Simple Notification Service(Amazon SNS) 주제로 게시되도록 필터를 구성합니다.",
    "C": "Amazon CloudWatch Logs 에 직접 오류를 전송하는 AWS Lambda 함수를 배포합니다. 디스크의 로그 파일이 업데이트될 때마다 실행되도록 Lambda 함수를 구성합니다.",
    "D": "오류를 식별하는 EC2 기반 스크립트를 호출하는 Auto Scaling 수명 주기 후크(lifecycle hook)를 생성합니다. EC2 인스턴스가 스케일 인될 때 Amazon CloudWatch 로그 그룹으로 오류 메시지를 전송하도록 스크립트를 구성합니다. 오류 메시지 수가 임계값을 초과할 때 이메일 구독이 설정된 Amazon Simple Notification Service(Amazon SNS) 주제로 게시되는 CloudWatch 경보를 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "EC2 인스턴스의 로컬 디스크에 수집되는 로그 파일을 중앙으로 수집하려면 Amazon CloudWatch 에이전트를 설치하여 CloudWatch Logs 로그 그룹으로 전송해야 한다. 그 후 CloudWatch Logs 의 지표 필터(Metric Filter)를 설정하여 로그 내부의 에러 키워드를 수집하고, 이에 대한 CloudWatch 경보(Alarm)를 생성하여 SNS(이메일 구독)로 알림을 발송하도록 구성하는 것이 표준 아키텍처이다."
  },
  {
   "num": 84,
   "question": "한 회사가 EC2 인스턴스에서 FTP 서버를 호스팅합니다. 연결된 보안 그룹에서 FTP 포트가 퍼블릭으로 노출되면 AWS Security Hub 가 Amazon EventBridge 로 발견 항목을 보냅니다. CloudOps 엔지니어는 보안 그룹에서 퍼블릭 액세스를 제거하기 위한 자동화된 이벤트 기반 수정(remediation) 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Lambda 함수를 호출하는 FTP 서버용 크론 작업(cron job)을 생성합니다. FTP 대신 SFTP 를 사용하도록 서버를 수정하도록 Lambda 함수를 구성합니다.",
    "B": "AWS Lambda 함수를 호출하기 위해 FTP 서버에 대한 크론 작업(cron job)을 생성합니다. 식별된 EC2 인스턴스의 보안 그룹을 수정하고 퍼블릭 액세스를 허용하는 인스턴스를 제거하도록 Lambda 함수를 구성합니다.",
    "C": "기존 EventBridge 이벤트가 AWS Lambda 함수를 호출하도록 구성합니다. 퍼블릭 액세스를 허용하는 보안 그룹 규칙을 제거하도록 함수를 구성합니다.",
    "D": "노출된 포트가 있는 EC2 인스턴스를 중지하도록 기존 EventBridge 이벤트를 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "이벤트 기반(Event-driven) 자동 수정 아키텍처는 AWS Security Hub 가 감지하여 Amazon EventBridge 로 전달한 발견 항목 이벤트를 트리거로 삼는다. EventBridge 규칙의 대상(Target)으로 AWS Lambda 함수를 지정하고, 해당 Lambda 함수가 보안 그룹 규칙을 조회하여 퍼블릭 인바운드 허용 규칙을 즉시 삭제하도록 구현하는 것이 정답이다. Cron 작업(A, B)은 이벤트 기반 방식이 아니며, 인스턴스를 중지하는 것(D)은 보안 그룹의 결함 규칙을 제거하지 못한다."
  },
  {
   "num": 85,
   "question": "한 의료 연구 회사가 의사들에게 연구 프로토콜에 대한 빠른 액세스를 제공하기 위해 에이전트 및 기술 자료(knowledge bases)가 포함된 Amazon Bedrock 기반 AI 어시스턴트를 사용합니다. 회사는 사용자 자격 증명, Bedrock 에이전트 사용 데이터, 기술 자료 액세스 데이터 및 상호 작용 파라미터가 포함된 감사 보고서를 생성해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS CloudTrail 을 사용하여 생성형 AI 워크로드에서 API 이벤트를 로깅합니다. 이벤트를 CloudTrail Lake 에 저장합니다. SQL 유사 쿼리를 사용하여 보고서를 생성합니다.",
    "B": "Amazon CloudWatch 를 사용하여 생성형 AI 애플리케이션 로그를 캡처합니다. 로그를 Amazon OpenSearch Service 로 스트리밍합니다. OpenSearch 대시보드 시각화를 사용하여 보고서를 생성합니다.",
    "C": "Amazon CloudWatch 를 사용하여 생성형 AI 워크로드에서 API 이벤트를 로깅합니다. 이벤트를 Amazon S3 버킷으로 보냅니다. Amazon Athena 쿼리를 사용하여 보고서를 생성합니다.",
    "D": "AWS CloudTrail 을 사용하여 생성형 AI 애플리케이션 로그를 캡처합니다. 로그를 Amazon Managed Service for Apache Flink 로 스트리밍합니다. SQL 쿼리를 사용하여 보고서를 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon Bedrock, Bedrock Agents 및 Knowledge Bases 의 호출 및 액세스 기록(사용자 자격 증명, 호출 API 이벤트, 파라미터 등)은 AWS CloudTrail 에 의해 감사 데이터로 자동 기록된다. 관리형 감사 데이터 레이크인 CloudTrail Lake 를 사용하면 CloudTrail 이벤트를 별도의 복잡한 데이터 파이프라인(S3, OpenSearch, Flink 등) 구축 없이 손쉽게 저장하고 내장된 SQL 쿼리를 통해 감사 보고서를 효율적으로 생성할 수 있다."
  },
  {
   "num": 86,
   "question": "CloudOps 엔지니어가 여러 AWS 리전에 배포할 수 있는 애플리케이션 스택을 정의하기 위해 AWS CloudFormation 템플릿을 생성합니다. 또한 CloudOps 엔지니어는 AWS 관리 콘솔을 사용하여 Amazon CloudWatch 대시보드를 생성합니다. 애플리케이션을 배포할 때마다 자체 CloudWatch 대시보드가 필요합니다. CloudOps 엔지니어가 애플리케이션을 배포할 때마다 CloudWatch 대시보드 생성을 자동화하려면 어떻게 해야 합니까?",
   "options": {
    "A": "AWS CLI 를 사용하여 대시보드 이름과 함께 aws cloudformation put-dashboard 명령을 실행하는 스크립트를 생성합니다. 새 CloudFormation 스택이 생성될 때마다 명령을 실행합니다.",
    "B": "기존 CloudWatch 대시보드를 JSON 으로 내보냅니다. AWS::CloudWatch::Dashboard 리소스를 정의하도록 CloudFormation 템플릿을 업데이트합니다. 리소스의 DashboardBody 속성에 내보낸 JSON 을 포함합니다.",
    "C": "AWS::CloudWatch::Dashboard 리소스를 정의하도록 CloudFormation 템플릿을 업데이트합니다. 기존 CloudWatch 대시보드의 ID 를 참조하기 위해 내장 Ref 함수를 사용합니다.",
    "D": "AWS::CloudWatch::Dashboard 리소스를 정의하도록 CloudFormation 템플릿을 업데이트합니다. DashboardName 속성에 기존 대시보드의 이름을 지정합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS CloudFormation 템플릿 내에 `AWS::CloudWatch::Dashboard` 리소스를 정의하여 대시보드 생성을 자동화할 수 있다. 콘솔에서 기존에 생성해 둔 대시보드의 레이아웃 구조를 JSON 형식으로 내보낸 후, 템플릿 리소스의 `DashboardBody` 속성에 해당 JSON 문자열을 포함시키면 스택이 배포될 때마다 전용 CloudWatch 대시보드가 자동으로 함께 생성된다."
  },
  {
   "num": 87,
   "question": "한 회사가 eu-west-1 리전에서 EC2 인스턴스를 관리하기 위해 AWS Systems Manager Session Manager 를 사용합니다. 회사는 VPC 엔드포인트를 사용한 프라이빗 연결을 원합니다. 이러한 요구 사항을 충족하는 데 필요한 VPC 엔드포인트는 무엇입니까? (3 개 선택)",
   "options": {
    "A": "com.amazonaws.eu-west-1.ssm",
    "B": "com.amazonaws.eu-west-1.ec2messages",
    "C": "com.amazonaws.eu-west-1.ec2",
    "D": "com.amazonaws.eu-west-1.ssmmessages",
    "E": "com.amazonaws.eu-west-1.s3",
    "F": "com.amazonaws.eu-west-1.states"
   },
   "answer": [
    "A",
    "B",
    "D"
   ],
   "explanation": "인터넷 연결이 없는 프라이빗 VPC 환경에서 AWS Systems Manager Session Manager 를 작동시키려면 다음 3 가지 인터페이스 VPC 엔드포인트(Interface VPC Endpoint)가 반드시 필요하다. 1. `ssm`: Systems Manager 서비스 통신용 엔드포인트(A) 2. `ec2messages`: SSM Agent 와 Systems Manager 서비스 간 통신용 엔드포인트(B) 3. `ssmmessages`: Session Manager 의 대화형 세션 채널을 제어하기 위한 엔드포인트(D)"
  },
  {
   "num": 88,
   "question": "한 회사가 AWS::EC2::Instance 리소스와 사용자 지정 리소스(Lambda 함수)를 포함하는 AWS CloudFormation 템플릿을 보유하고 있습니다. Lambda 함수가 EC2 인스턴스가 시작되기 전에 실행되기 때문에 실패합니다. 이 문제를 해결할 솔루션은 무엇입니까?",
   "options": {
    "A": "사용자 지정 리소스에 DependsOn 속성을 추가합니다. DependsOn 속성에 EC2 인스턴스를 지정합니다.",
    "B": "유효한 Lambda 함수를 가리키도록 사용자 지정 리소스의 서비스 토큰을 업데이트합니다.",
    "C": "사용자 지정 리소스에 응답을 보내기 위해 cfn-response 모듈을 사용하도록 Lambda 함수를 업데이트합니다.",
    "D": "사용자 지정 리소스가 실행되기 전에 EC2 인스턴스를 확인하기 위해 Fn::If 내장 함수를 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS CloudFormation 은 명시적인 의존성이 없는 리소스를 기본적으로 병렬로 생성하려고 시도한다. 사용자 지정 리소스(Custom Resource)가 EC2 인스턴스의 생성을 전제로 작동해야 하는 경우, 해당 사용자 지정 리소스 정의에 `DependsOn` 속성을 추가하고 대상 EC2 인스턴스의 논리적 ID 를 지정함으로써 EC2 인스턴스가 완전히 생성된 후에만 Lambda 함수가 호출되도록 제어할 수 있다."
  },
  {
   "num": 89,
   "question": "한 회사가 온프레미스에서 애플리케이션을 실행하고 있으며 데이터 백업을 위해 AWS 를 사용하고자 합니다. 모든 데이터는 로컬에서 사용할 수 있어야 합니다. 백업 애플리케이션은 POSIX(Portable Operating System Interface)와 호환되는 블록 기반 스토리지에만 쓸 수 있습니다. 이러한 요구 사항을 충족하는 백업 솔루션은 무엇입니까?",
   "options": {
    "A": "데이터 백업 대상으로 Amazon S3 를 사용하도록 백업 소프트웨어를 구성합니다.",
    "B": "데이터 백업 대상으로 Amazon S3 Glacier Flexible Retrieval 을 사용하도록 백업 소프트웨어를 구성합니다.",
    "C": "AWS Storage Gateway 를 사용하고, 게이트웨이 캐시 볼륨(gateway-cached volumes)을 사용하도록 구성합니다.",
    "D": "AWS Storage Gateway 를 사용하고, 게이트웨이 저장 볼륨(gateway-stored volumes)을 사용하도록 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Storage Gateway 의 볼륨 게이트웨이(Volume Gateway)는 온프레미스 서버에 iSCSI 기반의 블록 스토리지를 제공하므로 POSIX 호환 블록 저장소 요구 사항을 충족한다. 그중 게이트웨이 저장 볼륨(Gateway-stored volumes / Stored Mode)은 전체 원본 데이터를 온프레미스 로컬에 보관하고, 이를 비동기적으로 AWS S3 에 EBS 스냅샷 형태로 백업하므로 \"모든 데이터의 로컬 사용 가능\" 조건을 만족한다. 게이트웨이 캐시 볼륨(C)은 자주 사용하는 일부 데이터만 로컬에 캐싱하므로 모든 데이터를 로컬에 유지하지 않는다."
  },
  {
   "num": 90,
   "question": "CloudOps 엔지니어가 AWS 계정의 보안을 관리해야 합니다. 최근 한 IAM 사용자의 액세스 키가 실수로 퍼블릭 코드 리포지토리에 업로드되었습니다. 엔지니어는 유출된 키를 사용하여 변경된 모든 작업을 식별해야 합니다. CloudOps 엔지니어는 이러한 요구 사항을 어떻게 충족해야 합니까?",
   "options": {
    "A": "분석을 위해 모든 IAM 이벤트를 AWS Lambda 함수로 보내는 Amazon EventBridge 규칙을 생성합니다.",
    "B": "의심되는 시간대 내에 유출된 액세스 키로 시작된 모든 이벤트에 대해 Amazon CloudWatch Logs Insights 를 사용하여 Amazon EC2 로그를 쿼리합니다.",
    "C": "의심되는 시간대 내에 유출된 액세스 키로 시작된 모든 이벤트에 대해 AWS CloudTrail 이벤트 기록을 검색합니다.",
    "D": "의심되는 시간대 내에 유출된 액세스 키로 시작된 모든 이벤트에 대해 VPC 흐름 로그(VPC Flow Logs)를 검색합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS CloudTrail 은 계정 내에서 수행된 모든 API 호출 및 관리 작업의 감사 로그를 저장한다. 유출된 IAM 액세스 키(Access Key ID)를 기반으로 CloudTrail 이벤트 기록(Event History)을 검색 및 필터링하면, 해당 자격 증명으로 수행된 모든 API 요청 및 계정 변경 내역을 명확히 추적할 수 있다."
  },
  {
   "num": 91,
   "question": "한 회사가 Amazon EC2 에서 Amazon Aurora PostgreSQL 데이터베이스에 연결되는 애플리케이션을 실행합니다. 개발자가 실수로 데이터베이스에서 테이블을 삭제하여 애플리케이션 오류가 발생했습니다. 2 시간 후, CloudOps 엔지니어는 데이터를 복구하고 애플리케이션이 다시 정상 작동하도록 해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Aurora 백트래킹(Backtrack) 기능을 사용하여 데이터베이스를 과거 2 시간 전의 지정된 시간으로 되돌립니다.",
    "B": "기존 데이터베이스에서 시점 복구(point-in-time recovery)를 수행하여 데이터베이스를 과거 2 시간 전의 지정된 시점으로 복원합니다.",
    "C": "시점 복구(point-in-time recovery)를 수행하여 데이터베이스를 과거 2 시간 전의 지정된 시점으로 복원하는 새 데이터베이스를 생성합니다. 새 데이터베이스 엔드포인트를 사용하도록 애플리케이션을 재구성합니다.",
    "D": "새 Aurora 클러스터를 생성합니다. S3 버킷에서 데이터 복원 옵션을 선택합니다. 과거 2 시간 전의 장애 시간까지의 로그 파일을 선택합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon Aurora/RDS 에서 시점 복구(PITR)를 수행하면 기존 DB 클러스터를 직접 덮어쓰지 않고 항상 새로운 DB 클러스터가 생성된다. 따라서 복원된 새 DB 클러스터를 가리키도록 애플리케이션 엔드포인트를 재구성해야 한다. 백트래킹(Backtrack, A)은 Aurora MySQL 에서만 지원되며 Aurora PostgreSQL 에서는 지원되지 않는다."
  },
  {
   "num": 92,
   "question": "CloudOps 엔지니어가 프라이빗 서브넷, 모든 아웃바운드 트래픽을 허용하는 보안 그룹, 프라이빗 서브넷 내 EC2 Instance Connect 엔드포인트를 포함하는 VPC 를 생성했습니다. EC2 인스턴스는 동일한 서브넷과 보안 그룹을 사용하여 SSH 키 쌍 없이 시작되었습니다. 그러나 엔지니어는 EC2 Instance Connect 엔드포인트를 통해 연결할 수 없습니다. CloudOps 엔지니어는 인스턴스에 어떻게 연결할 수 있습니까?",
   "options": {
    "A": "프라이빗 서브넷으로부터의 포트 443 HTTPS 트래픽을 허용하도록 보안 그룹에 인바운드 규칙을 생성합니다.",
    "B": "프라이빗 서브넷으로부터의 포트 22 SSH 트래픽을 허용하도록 보안 그룹에 인바운드 규칙을 생성합니다.",
    "C": "AWS Systems Manager Session Manager 가 EC2 인스턴스에 액세스할 수 있도록 허용하는 IAM 인스턴스 프로파일을 생성합니다. 인스턴스 프로파일을 인스턴스에 연결합니다.",
    "D": "EC2 인스턴스를 다시 생성합니다. SSH 키 쌍을 인스턴스에 연결합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "EC2 Instance Connect 엔드포인트(EICE)를 사용하여 프라이빗 서브넷의 인스턴스에 접속하려면, 대상 EC2 인스턴스에 연결된 보안 그룹의 인바운드 규칙에서 EICE(또는 프라이빗 서브넷)로부터 들어오는 포트 22(SSH) 트래픽을 허용해야 한다. 아웃바운드 규칙만 존재하고 인바운드 포트 22 허용 규칙이 없기 때문에 접속이 차단된 것이다."
  },
  {
   "num": 93,
   "question": "한 회사는 운영 워크로드에 대한 관리자 자격 증명을 정기적으로 순환(rotate)하도록 요구합니다. CloudOps 엔지니어는 Amazon RDS DB 인스턴스의 마스터 사용자 암호에 대해 이 정책을 구현해야 합니다. 가장 적은 운영 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "RDS 마스터 사용자 암호를 변경하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하는 Amazon EventBridge 예약 규칙을 생성합니다.",
    "B": "AWS Systems Manager Parameter Store 에 새 SecureString 파라미터를 생성합니다. AWS Key Management Service(AWS KMS) 키로 파라미터를 암호화합니다. 자동 순환을 구성합니다.",
    "C": "AWS Systems Manager Parameter Store 에 새 String 파라미터를 생성합니다. 자동 순환을 구성합니다.",
    "D": "AWS Secrets Manager 에 새 RDS 데이터베이스 보안 암호(secret)를 생성합니다. RDS DB 인스턴스에 보안 암호를 적용합니다. 자동 순환을 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Secrets Manager 는 Amazon RDS 데이터베이스 자격 증명의 생성, 관리 및 자동 순환(Automatic Rotation) 기능을 기본으로 통합 제공한다. Secrets Manager 에서 RDS 암호를 생성하고 내장된 자동 순환 기능을 활성화하면 별도의 커스텀 Lambda 스크립트 작성(A) 없이 가장 적은 운영 노력으로 자격 증명을 정기적으로 교체할 수 있다. Parameter Store(B, C)는 관리형 자동 자격 증명 순환 엔진을 직접 제공하지 않는다."
  },
  {
   "num": 94,
   "question": "CloudOps 엔지니어가 AWS Service Catalog 포트폴리오를 생성하고, 다른 CloudOps 엔지니어가 관리하는 회사의 두 번째 AWS 계정과 공유했습니다. 두 번째 계정의 CloudOps 엔지니어가 수행할 수 있는 작업은 무엇입니까?",
   "options": {
    "A": "가져온 포트폴리오의 제품을 로컬 포트폴리오에 추가합니다.",
    "B": "가져온 포트폴리오에 새 제품을 추가합니다.",
    "C": "가져온 포트폴리오에 포함된 제품의 실행 역할(launch role)을 변경합니다.",
    "D": "가져온 포트폴리오의 제품을 사용자 지정합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Service Catalog 에서 다른 계정으로부터 공유받은 포트폴리오(Imported Portfolio)는 수신한 계정에서 직접 원본 제품을 수정하거나 새 제품을 추가할 수 없다. 그러나 수신 계정의 엔지니어는 공유받은 포트폴리오의 제품을 자신의 계정에 생성한 로컬 포트폴리오(Local Portfolio)로 추가하여 로컬 사용자에게 배포 제어 권한을 할당할 수 있다."
  },
  {
   "num": 95,
   "question": "한 회사의 아키텍처 팀은 회사의 메인 AWS 운영 계정에서 새 Amazon EC2 인스턴스가 시작될 때마다 즉시 이메일 알림을 받아야 합니다. CloudOps 엔지니어는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?",
   "options": {
    "A": "스마트 호스트 커넥터를 통해 이메일 메시지를 보내는 사용자 데이터(user data) 스크립트를 생성합니다. 사용자 데이터 스크립트에 수신자로 아키텍처 팀의 이메일 주소를 포함합니다. 표준화된 빌드 프로세스의 일부로 모든 새 EC2 인스턴스에 사용자 데이터 스크립트가 포함되도록 합니다.",
    "B": "Amazon Simple Notification Service(Amazon SNS) 주제와 이메일 프로토콜을 사용하는 구독을 생성합니다. 아키텍처 팀의 이메일 주소를 구독자로 입력합니다. EC2 인스턴스가 시작될 때 반응하는 Amazon EventBridge 규칙을 생성합니다. SNS 주제를 규칙의 대상으로 지정합니다.",
    "C": "Amazon Simple Queue Service(Amazon SQS) 대기열과 이메일 프로토콜을 사용하는 구독을 생성합니다. 아키텍처 팀의 이메일 주소를 구독자로 입력합니다. EC2 인스턴스가 시작될 때 반응하는 Amazon EventBridge 규칙을 생성합니다. SQS 대기열을 규칙의 대상으로 지정합니다.",
    "D": "Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다. SNS 주제로 EC2 이벤트를 게시하도록 AWS Systems Manager 를 구성합니다. SNS 주제를 폴링하는 AWS Lambda 함수를 생성합니다. 아키텍처 팀의 이메일 주소로 메시지를 보내도록 Lambda 함수를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon EventBridge 를 사용하면 EC2 인스턴스 시작 상태 변경 이벤트(`EC2 Instance State-change Notification` - `running`)를 즉시 감지할 수 있다. 이 이벤트 규칙의 타깃으로 이메일 구독(Email Subscription)이 구성된 Amazon SNS 주제를 지정하면, 추가 인프라나 코드 개발 없이 실시간 이메일 알림을 가장 간단히 발송할 수 있다. SQS(C)는 이메일 직접 발급 프로토콜을 지원하지 않는다."
  },
  {
   "num": 96,
   "question": "회사 보안 정책에 따라 인바운드 SSH 트래픽은 정의된 주소 집합으로 제한되어야 합니다. 회사는 AWS Config 규칙을 사용하여 보안 그룹이 제한되지 않은 인바운드 SSH 트래픽을 허용하는지 검사하고 있습니다. CloudOps 엔지니어가 비규격(noncompliant) 리소스를 발견하고 보안 그룹을 수동으로 수정했습니다. CloudOps 엔지니어는 다른 비규격 리소스에 대한 수정 작업을 자동화하고자 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Config 규칙에 대한 CloudWatch 경보를 생성하고 Lambda 함수를 호출하여 수정합니다.",
    "B": "AWS-DisableIncomingSSHOnPort22 를 사용하여 AWS Config 규칙에 자동 수정 작업을 구성합니다.",
    "C": "AWS Config 이벤트에 대한 EventBridge 규칙을 생성하고 Lambda 함수를 호출합니다.",
    "D": "예약된 Lambda 함수를 실행하여 보안 그룹을 검사하고 수정합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Config 는 SSM Automation 런북(`AWS-DisableIncomingSSHOnPort22`)을 이용한 자동 수정(Auto Remediation) 기능을 기본적으로 지원한다. 이를 사용하면 커스텀 코드(Lambda) 작성 없이 AWS Config 규칙 내에서 직접 비규격 보안 그룹의 인바운드 22 번 포트를 즉시 차단할 수 있으므로 가장 운영 효율적이다."
  },
  {
   "num": 97,
   "question": "CloudOps 엔지니어가 AWS Systems Manager Session Manager 를 사용하여 Amazon EC2 인스턴스 그룹에 대한 액세스를 제어해야 합니다. EC2 인스턴스에는 특정 태그가 이미 추가되어 있습니다. 액세스를 제어하기 위해 CloudOps 엔지니어가 취해야 하는 추가 조치는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "EC2 인스턴스에 대한 액세스가 필요한 사용자 또는 그룹에 IAM 정책을 연결합니다.",
    "B": "EC2 인스턴스에 대한 액세스를 제어하기 위해 IAM 역할을 연결합니다.",
    "C": "EC2 인스턴스에 대한 배치 그룹을 생성하고 특정 태그를 추가합니다.",
    "D": "서비스 계정을 생성하고 제어가 필요한 EC2 인스턴스에 연결합니다.",
    "E": "Condition 요소에 지정된 태그가 있는 모든 EC2 인스턴스에 대한 액세스 권한을 부여하는 IAM 정책을 생성합니다."
   },
   "answer": [
    "A",
    "E"
   ],
   "explanation": "Systems Manager Session Manager 에서 태그 기반 액세스 제어(ABAC)를 구현하려면, IAM 정책의 `Condition` 요소에 인스턴스 태그(`ssm:resourceTag/tag-key`) 조건을 지정하여 특정 태그가 있는 인스턴스에만 접속을 허용하는 정책을 생성해야 한다(E). 그리고 작성된 IAM 정책을 접속 권한이 필요한 IAM 사용자 또는 사용자 그룹에 연결한다(A)."
  },
  {
   "num": 98,
   "question": "CloudOps 엔지니어가 여러 IAM 사용자에게 IAM 정책을 연결하여 AWS 서비스에 대한 액세스 권한을 제공하고자 합니다. 또한 CloudOps 엔지니어는 정책을 변경하고 새 버전을 생성할 수 있기를 원합니다. 이러한 요구 사항을 충족하는 조치 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "사용자를 IAM 서비스 연계 역할(service-linked role)에 추가합니다. 역할에 정책을 연결합니다.",
    "B": "사용자를 IAM 사용자 그룹(user group)에 추가합니다. 그룹에 정책을 연결합니다.",
    "C": "AWS 관리형 정책을 생성합니다.",
    "D": "고객 관리형 정책(customer managed policy)을 생성합니다.",
    "E": "인라인 정책(inline policy)을 생성합니다."
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "고객 관리형 정책(Customer Managed Policy)은 사용자가 직접 정책 내용을 수정하고 버전 관리(최대 5 개 버전)를 수행할 수 있는 독립형 IAM 정책이다(D). 여러 IAM 사용자에게 동일한 권한을 효율적으로 적용하려면 IAM 사용자 그룹(User Group)을 생성하고 해당 그룹에 정책을 연결해야 한다(B). AWS 관리형 정책(C)은 사용자가 직접 수정하거나 새 버전을 생성할 수 없으며, 인라인 정책(E)은 버전을 지원하지 않고 여러 사용자에게 재사용할 수 없다."
  },
  {
   "num": 99,
   "question": "SysOps 관리자가 AWS 환경의 리소스 가용성을 모니터링하고 유지 관리합니다. SysOps 관리자는 웹 서버 소프트웨어를 실행하는 Amazon EC2 인스턴스의 CPU 사용률이 매일 특정 시간대에 80% 이상으로 증가하는 것을 확인했습니다. CPU 스파이크는 일일 피크 부하와 일치합니다. 높은 CPU 부하로 인해 고객에게 성능 문제가 발생했습니다. SysOps 관리자는 서비스 중단 없이 시스템 성능 문제를 해결해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CPU 사용률이 80%를 초과할 때 AWS Systems Manager Automation 런북을 호출하여 EC2 인스턴스를 수직 확장(vertical scaling)하는 Amazon CloudWatch 경보를 구성합니다.",
    "B": "CPU 사용률이 80%를 초과할 때 애플리케이션을 자동으로 다시 시작하는 스크립트를 실행하도록 AWS Systems Manager Automation 런북을 구성합니다.",
    "C": "AWS Systems Manager Automation 문서를 호출하는 Amazon EventBridge 규칙을 구성합니다. CPU 사용률이 80%를 초과할 때 EC2 인스턴스 크기를 늘리도록 문서를 구성합니다.",
    "D": "CPU 사용률이 80%를 초과할 때 추가 EC2 인스턴스를 시작하는 스케일링 정책을 트리거하는 Amazon CloudWatch 경보와 함께 Auto Scaling 그룹을 설정합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "인스턴스 유형/크기를 변경하는 수직 확장(A, C)은 인스턴스를 중지(Stop)해야 하므로 서비스 중단(Downtime)이 발생한다. 서비스 중단 없이 성능 문제를 해결하려면 Auto Scaling 그룹을 활용하여 CPU 사용률 증가에 따라 인스턴스를 수평 확장(Horizontal scaling, 추가 인스턴스 시작)하는 아키텍처를 구성해야 한다."
  },
  {
   "num": 100,
   "question": "한 회사가 운영 파일 서버를 AWS 로 마이그레이션하고 있습니다. 가용 영역(AZ)을 사용할 수 없게 되거나 시스템 유지 관리가 수행되는 동안에도 파일 서버에 저장된 모든 데이터에 계속 액세스할 수 있어야 합니다. 사용자는 SMB 프로토콜을 통해 파일 서버에 액세스하고 Windows ACL 을 사용하여 권한을 관리해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "단일 AWS Storage Gateway 파일 게이트웨이를 생성합니다.",
    "B": "Amazon FSx for Windows File Server Multi-AZ 파일 시스템을 생성합니다.",
    "C": "Application Load Balancer 뒤의 두 가용 영역에 두 개의 AWS Storage Gateway 파일 게이트웨이를 배포합니다.",
    "D": "두 개의 Amazon FSx for Windows File Server Single-AZ 파일 시스템을 배포하고 DFS 복제를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon FSx for Windows File Server Multi-AZ 는 SMB 프로토콜과 Windows ACL 을 기본 지원하며, 두 가용 영역 간의 동기식 복제 및 자동 장애 조치(Failover)를 통해 가용 영역 장애나 유지 관리 중에도 데이터 연속성을 완벽하게 보장한다. Storage Gateway(A, C)는 온프레미스 스토리지 연동용이며, Single-AZ 2 개 구성 후 DFS 복제(D)는 관리 복잡성이 높고 자동 장애 조치를 완전 관리형으로 제공하지 못한다."
  },
  {
   "num": 101,
   "question": "CloudOps 엔지니어는 커스텀 애플리케이션 전용 이벤트를 위한 이벤트 인프라를 구축해야 합니다. 해당 이벤트는 처리를 위해 AWS Lambda 함수로 전송되어야 합니다. 또한 CloudOps 엔지니어는 나중에 이벤트 유형이나 이벤트 시간별로 이벤트를 재실행(replay)할 수 있도록 이벤트를 기록해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon EventBridge 커스텀 이벤트 버스를 생성하고, 아카이브를 생성하며, 이벤트를 Lambda 로 전송하는 규칙을 생성합니다.",
    "B": "기본(default) 이벤트 버스에 아카이브를 생성하고 패턴 매칭을 사용합니다.",
    "C": "EventBridge 파이프(pipe)를 생성하고 아카이브에 이벤트를 저장합니다.",
    "D": "Amazon CloudWatch Logs 로그 그룹을 생성하고 이벤트를 라우팅합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "커스텀 애플리케이션 이벤트를 수신하고 추후 시간이나 유형별로 이벤트를 재실행(replay)하기 위해서는 Amazon EventBridge 의 커스텀 이벤트 버스와 아카이빙(Archive) 기능이 필요하다. 커스텀 이벤트 버스에 아카이브를 활성화하면 이벤트를 영구 기록하여 지정된 조건으로 재생할 수 있으며, 이벤트 규칙(Rule)을 생성하여 타깃인 AWS Lambda 함수로 이벤트를 라우팅할 수 있다. 기본 이벤트 버스(B)는 표준 AWS 서비스 이벤트용이므로 커스텀 애플리케이션 분리 관리에 적합하지 않으며, EventBridge Pipes(C)는 점대점(Point-to-Point) 연동 서비스로 아카이브 및 재실행 솔루션이 아니다. CloudWatch Logs(D)는 로그 저장소일 뿐 이벤트 재실행 기능을 제공하지 않는다."
  },
  {
   "num": 102,
   "question": "한 회사가 Amazon Simple Notification Service(Amazon SNS) 주제 및 Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지를 게시하는 모든 주체(principal)를 기록하고 감사해야 합니다. 또한 회사는 이러한 서비스와의 모든 통신이 VPC 엔드포인트를 사용하는지 확인하고자 합니다. 이러한 요구 사항을 충족하는 솔루션 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "Amazon CloudWatch Logs 를 사용하여 Amazon SNS 및 Amazon SQS 의 메시지 콘텐츠를 수집합니다. 쿼리를 위해 로그를 Amazon S3 버킷으로 전달합니다.",
    "B": "AWS CloudTrail 을 설정합니다. Amazon SNS 및 Amazon SQS 에 대한 데이터 이벤트(data events) 추적을 활성화합니다. 쿼리를 위해 로그를 Amazon S3 버킷으로 전달합니다.",
    "C": "Amazon EventBridge 규칙을 생성하여 Amazon SNS 및 Amazon SQS 이벤트를 수집합니다. 이벤트를 Amazon S3 버킷에 저장합니다.",
    "D": "Amazon SNS 및 Amazon SQS 용 VPC 엔드포인트를 구성합니다. AWS CloudTrail 로그에서 vpcEndpointId 필드를 검사합니다.",
    "E": "Amazon SNS 및 Amazon SQS 용 VPC 엔드포인트를 구성합니다. Amazon CloudWatch 로그에서 vpcEndpoint 필드를 검사합니다."
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "SNS 및 SQS 에 메시지를 게시하는 호출 주체(principal)의 API 동작을 기록 및 감사하기 위해서는 AWS CloudTrail 의 데이터 이벤트(Data Events) 추적이 필요하다. 데이터 이벤트를 활성화하여 S3 버킷에 저장하면 쿼리를 통한 감사가 가능해진다(B). 또한 API 요청이 VPC 엔드포인트를 거쳐 전달되었는지 검증하기 위해서는 CloudTrail 로그 내의 `vpcEndpointId` 필드를 확인해야 한다(D). CloudTrail 은 VPC 엔드포인트를 통한 API 호출 기록 시 해당 엔드포인트 ID 를 로그 항목으로 명시한다. CloudWatch Logs(A, E)나 EventBridge(C)는 API 호출 주체의 감사 및 VPC 엔드포인트 식별을 위한 표준 서비스가 아니다."
  },
  {
   "num": 103,
   "question": "한 회사가 여러 가용 영역(AZ)에 걸쳐 분산된 Amazon EC2 인스턴스에 애플리케이션을 호스팅할 계획입니다. 애플리케이션은 초당 수백만 건의 요청으로 확장 가능해야 하며 갑작스럽고 변동성이 큰 트래픽 패턴을 처리할 수 있어야 합니다. 해당 솔루션은 가용 영역당 단일 고정 IP 주소(static IP address)를 사용해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon Simple Queue Service (Amazon SQS)",
    "B": "Application Load Balancer",
    "C": "AWS Global Accelerator",
    "D": "Network Load Balancer"
   },
   "answer": [
    "D"
   ],
   "explanation": "초당 수백만 건의 요청을 처리하고, 급격하고 변동성이 큰 트래픽을 예열(Pre-warming) 없이 즉시 처리하며, 각 가용 영역(AZ)당 단일 고정 IP(Elastic IP)를 제공하는 로드 밸런서는 Network Load Balancer(NLB)이다. NLB 는 OSI 4 계층에서 작동하여 극도로 낮은 지연 시간과 높은 성능을 보장한다. Application Load Balancer(B)는 L7 로드 밸런서로 고정 IP 를 직접 제공하지 않으며 IP 주소가 가변적이다. AWS Global Accelerator(C)는 고정 IP 2 개를 제공하지만 가용 영역별 고정 IP 가 아닌 글로벌 진입점 IP 를 제공하며 L4 로드 밸런싱 인프라 자체를 대체하지 않는다. SQS(A)는 디커플링용 메시지 대기열 서비스이다."
  },
  {
   "num": 104,
   "question": "한 회사가 매일 몇 기가바이트(GB) 크기의 파일을 Amazon S3 에 업로드해야 하며, 더 높은 처리량과 더 빠른 업로드 속도가 필요합니다. CloudOps 엔지니어는 어떤 조치를 취해야 합니까?",
   "options": {
    "A": "GET HTTP 메서드가 허용되고 S3 버킷을 오리진으로 사용하는 Amazon CloudFront 배포를 생성합니다.",
    "B": "Amazon ElastiCache 클러스터를 생성하고 S3 버킷에 대한 캐싱을 활성화합니다.",
    "C": "AWS Global Accelerator 를 설정하고 S3 버킷으로 구성합니다.",
    "D": "S3 Transfer Acceleration 을 활성화하고 파일 업로드 시 가속 엔드포인트(acceleration endpoint)를 사용합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon S3 로 대용량 파일을 장거리 전송할 때 업로드 속도와 처리량을 극대화하는 표준 솔루션은 S3 Transfer Acceleration 이다. 이 기능은 AWS CloudFront 의 전 세계 엣지 로케이션(Edge Location) 네트워크를 활용하여, 클라이언트와 가까운 엣지 로케이션으로 데이터를 업로드한 후 AWS 최적화 백본 네트워크를 통해 S3 버킷으로 고속 전송한다. CloudFront(A)의 GET 허용 설정은 다운로드 전용 구성이며, ElastiCache(B)는 데이터베이스 메모리 캐싱 서비스이다. Global Accelerator(C)도 네트워크 경로를 최적화하지만 S3 전용 가속 엔드포인트를 제공하는 S3 Transfer Acceleration 이 가장 직관적이고 효율적인 방법이다."
  },
  {
   "num": 105,
   "question": "한 회사가 AWS 에서 여러 워크로드를 실행하고 있습니다. 회사는 특정 AWS 리전에서 모니터링할 5 개의 AWS Trusted Advisor 서비스 할당량(service quota) 지표를 선정했습니다. 회사는 리소스 사용량이 서비스 할당량 중 하나의 60%를 초과할 때마다 이메일 알림을 받고 싶어 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "5 개의 Trusted Advisor 서비스 할당량 지표 각각에 대해 하나씩, 총 5 개의 Amazon CloudWatch 경보를 생성합니다. 사용량이 서비스 할당량 중 하나의 60%를 초과할 때마다 이메일 알림을 전송하도록 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다.",
    "B": "5 개의 Trusted Advisor 서비스 할당량 지표 각각에 대해 하나씩, 총 5 개의 Amazon CloudWatch 경보를 생성합니다. 이메일 알림을 위해 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다.",
    "C": "AWS Health Dashboard 를 사용하여 각 Trusted Advisor 서비스 할당량 지표를 모니터링합니다. 이메일 알림을 위해 Amazon SQS 대기열을 구성합니다.",
    "D": "AWS Health Dashboard 를 사용하여 각 Trusted Advisor 서비스 할당량 지표를 모니터링합니다. 이메일 알림을 위해 Amazon SNS 주제를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Trusted Advisor 의 서비스 할당량 지표는 Amazon CloudWatch 지표(`AWS/TrustedAdvisor` 네임스페이스)로 자동 연동된다. 임계값(60%) 초과를 감지하고 알림을 발생시키기 위해서는 지표별로 CloudWatch 경보(Alarm)를 생성해야 하며, 사용자에게 이메일을 전송하기 위해서는 경보의 작업(Action) 대상으로 Amazon SNS 주제를 연결해야 한다. SQS(B, C)는 메시지 수신 대기열이므로 사용자 대상 이메일 직접 발송 기능이 없다. AWS Health Dashboard(C, D)는 AWS 인프라의 전반적인 상태 및 장애 이벤트를 알리는 용도이며 사용자 정의 지표 임계값 모니터링 및 알림 설정의 기본 주체가 아니다."
  },
  {
   "num": 106,
   "question": "한 회사의 CloudOps 엔지니어가 조직 내 여러 AWS 계정을 모니터링하며 각 계정의 AWS Health Dashboard 를 확인합니다. 10 개의 새 계정을 추가한 후, 엔지니어는 모든 계정의 헬스 알림(health alerts)을 통합하고자 합니다. 가장 적은 운영 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Health 에서 조직 뷰(organizational view)를 활성화합니다.",
    "B": "각 계정의 Health Dashboard 를 구성하여 이벤트를 중앙 AWS CloudTrail 로그로 전달합니다.",
    "C": "AWS Health API 를 쿼리하고 모든 이벤트를 Amazon DynamoDB 테이블에 기록하는 AWS Lambda 함수를 생성합니다.",
    "D": "AWS Health API 를 사용하여 이벤트를 Amazon DynamoDB 테이블에 기록합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Health 조직 뷰(Organizational View) 기능을 활성화하면 AWS Organizations 내의 모든 계정에 대한 AWS Health 이벤트 및 알림을 단일 중앙 콘솔에서 통합하여 조회할 수 있다. 이는 별도의 개발 작업이나 복잡한 파이프라인 구성 없이 클릭 몇 번만으로 모든 계정의 상태를 한눈에 모니터링할 수 있어 운영 노력을 최소화한다. CloudTrail 전달(B)이나 Lambda/API 를 이용해 DynamoDB 에 수집하는 방식(C, D)은 불필요한 개발 및 유지 관리 커스텀 작업이 수반되어 운영 오버헤드가 크다."
  },
  {
   "num": 107,
   "question": "한 회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행하고 있습니다. 애플리케이션은 MySQL 데이터베이스를 사용하며, EC2 인스턴스에는 범용 SSD(gp3) Amazon EBS 볼륨이 연결되어 있습니다. 회사는 프로덕션 인스턴스의 EBS 스냅샷으로 생성한 새 MySQL 데이터베이스를 사용하여 부하 테스트를 수행하고자 합니다. 새 데이터베이스는 프로덕션과 가능한 한 유사하게 작동해야 합니다. 가장 짧은 시간에 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon EBS 빠른 스냅샷 복원(FSR)을 사용하여 프로덕션 스냅샷에서 새 범용 SSD 볼륨을 생성합니다.",
    "B": "Amazon EBS 빠른 스냅샷 복원(FSR)을 사용하여 프로덕션 스냅샷에서 새 프로비저닝된 IOPS SSD 볼륨을 생성합니다.",
    "C": "Amazon EBS 표준 스냅샷 복원을 사용하여 프로덕션 스냅샷에서 새 범용 SSD 볼륨을 생성합니다.",
    "D": "Amazon EBS 표준 스냅샷 복원을 사용하여 프로덕션 스냅샷에서 새 프로비저닝된 IOPS SSD 볼륨을 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "프로덕션 환경과 동일한 성능을 제공하려면 기본 프로덕션과 동일한 볼륨 유형인 범용 SSD(gp3)를 사용해야 한다. 또한 표준 스냅샷 복원(C, D)을 수행하면 S3 에서 EBS 로 지연 로딩(lazy loading)이 발생하여 초기 I/O 지연 시간이 나타나므로 부하 테스트 시 즉각적인 프로덕션급 성능을 얻을 수 없다. Amazon EBS 빠른 스냅샷 복원(FSR, Fast Snapshot Restore)을 사용하면 볼륨 생성 즉시 최대 성능을 보장하여 지연 로딩 단계를 제거하므로 가장 짧은 시간에 요구 사항을 충족한다. 프로비저닝된 IOPS SSD(B, D)는 기존 gp3 프로덕션 볼륨 특성과 달라지므로 적합하지 않다."
  },
  {
   "num": 108,
   "question": "한 회사가 SysOps 관리자에게 추가적인 4 개 AWS 리전에 애플리케이션용 환경을 추가로 프로비저닝하도록 요청했습니다. 애플리케이션은 us-east-1 리전에서 완전히 구성된 Amazon Machine Image(AMI)를 사용하여 100 개 이상의 Amazon EC2 인스턴스에서 실행 중입니다. 회사는 us-east-1 에 리소스를 배포하기 위한 AWS CloudFormation 템플릿을 보유하고 있습니다. SysOps 관리자가 가장 운영 효율적인 방식으로 애플리케이션을 프로비저닝하려면 어떻게 해야 합니까?",
   "options": {
    "A": "aws ec2 copy-image 명령을 사용하여 AMI 를 각 리전으로 복사합니다. 복사된 AMI 에 대한 매핑(mappings)을 포함하도록 CloudFormation 템플릿을 업데이트합니다.",
    "B": "실행 중인 인스턴스의 스냅샷을 생성합니다. 스냅샷을 다른 리전으로 복사합니다. 스냅샷에서 AMI 를 생성합니다. 새 AMI 를 사용하도록 각 리전의 CloudFormation 템플릿을 업데이트합니다.",
    "C": "현재 us-east-1 에서 사용 중인 템플릿의 성공 결과를 바탕으로 추가된 각 리전에서 기존 CloudFormation 템플릿을 실행합니다.",
    "D": "Auto Scaling 그룹에 추가 리전을 포함하도록 CloudFormation 템플릿을 업데이트합니다. us-east-1 의 기존 스택을 업데이트합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AMI 는 특정 리전에 종속적인(Region-specific) 리소스이다. 따라서 다른 리전에 동일한 인스턴스를 배포하려면 `aws ec2 copy-image` CLI 명령을 사용하여 AMI 를 타깃 리전으로 복사해야 한다. 그 후 CloudFormation 템플릿 내의 `Mappings` 섹션에 리전별 AMI ID 를 정의하면, 단일 템플릿으로 여러 리전에서 해당 리전에 복사된 AMI 를 참조하여 자동 배포할 수 있어 운영 효율성이 가장 높다. 스냅샷 복사 후 AMI 재생성(B)은 불필요한 수동 작업 단계가 추가되며, AMI 복사 없이 실행(C)하면 리전 AMI ID 불일치로 CloudFormation 배포가 실패한다. Auto Scaling 그룹은 여러 리전에 걸쳐 직접 확장될 수 없으므로(D) 올바르지 않다."
  },
  {
   "num": 109,
   "question": "한 회사가 AWS 환경을 관리하기 위해 AWS Organizations 를 사용합니다. 회사는 보안 조치로서 미리 빌드된 Amazon Machine Image(AMI)를 사용하여 인스턴스를 시작하는 프로세스를 구현합니다. 모든 AMI 에는 ApprovedAMI 라는 키 이름의 태그가 자동으로 지정됩니다. 회사는 직원들이 승인된 사전 빌드 AMI 만 사용하여 새 인스턴스를 시작할 수 있도록 보장하고자 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "사용자가 새 EC2 인스턴스를 시작할 때 ApprovedAMI 태그를 설정하도록 요구하는 태그 정책(tag policy)을 조직에 구현합니다.",
    "B": "aws:ResourceTag/ApprovedAMI 조건을 포함하는 IAM 정책을 구현합니다.",
    "C": "사용자가 승인되지 않은 AMI 를 시작하지 못하도록 방지하는 AWS Config required- tags 규칙을 설정합니다.",
    "D": "Amazon GuardDuty 를 사용하여 DefenseEvasion:EC2/UnusualDoHActivity 결과를 지속적으로 모니터링합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "IAM 정책에서 `aws:ResourceTag/ApprovedAMI` 조건을 활용하면 인스턴스를 시작할 때 사용하려는 리소스(여기서는 AMI)에 특정 태그(`ApprovedAMI`)가 존재하는지 검증할 수 있다. 해당 조건문이 포함된 IAM 정책을 배포하면 승인된 태그가 부착된 AMI 에 대해서만 `ec2:RunInstances` 작업이 허용되므로 가장 확실하게 실행 권한을 제어할 수 있다. AWS Organizations 태그 정책(A)은 생성되는 리소스 태그의 표준 규격을 강제할 뿐 실행 권한을 차단하지 않는다. AWS Config(C)는 사후 평가 및 탐지 도구일 뿐 IAM API 호출을 사전에 차단(prevent)할 수 없으며, GuardDuty(D)는 위협 탐지 서비스로 권한 통제와 무관하다."
  },
  {
   "num": 110,
   "question": "한 회사가 AWS 계정의 Amazon DynamoDB 테이블에 대한 태깅 요구 사항을 강제해야 합니다. CloudOps 엔지니어는 적절한 태그가 없는 모든 DynamoDB 테이블을 식별하고 수정(remediate)하는 솔루션을 구현해야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "모든 DynamoDB 테이블을 평가하고 수정하는 커스텀 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하는 Amazon EventBridge 예약 규칙을 생성합니다.",
    "B": "모든 DynamoDB 테이블을 평가하고 수정하는 커스텀 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하는 AWS Config 커스텀 규칙을 생성합니다.",
    "C": "required-tags AWS Config 관리형 규칙을 사용하여 모든 DynamoDB 테이블의 적절한 태그 유무를 평가합니다. AWS Systems Manager Automation 커스텀 런북을 사용하는 자동 교정(remediation) 작업을 구성합니다.",
    "D": "Amazon EventBridge 관리형 규칙을 생성하여 모든 DynamoDB 테이블의 적절한 태그 유무를 평가합니다. 교정을 위해 AWS Systems Manager Automation 커스텀 런북을 실행하도록 EventBridge 규칙을 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Config 관리형 규칙인 `required-tags`를 사용하면 별도의 평가 코드 작성 없이 DynamoDB 테이블에 필요한 태그가 존재하는지 모니터링 및 식별할 수 있다. 또한 Config 규칙의 교정(Remediation) 작업으로 AWS Systems Manager Automation 런북을 연결하면 비준수 상태가 감지되었을 때 즉시 자동으로 태그를 부여하여 수정할 수 있어 운영 오버헤드가 가장 적다. 커스텀 Lambda 코드를 작성하는 방식(A, B)은 로직 개발 및 관리에 따른 운영 부담이 크다. EventBridge 에는 태그 준수 여부를 모니터링하는 관리형 규칙(D)이 존재하지 않으며, 이 역할은 AWS Config 가 담당한다."
  },
  {
   "num": 111,
   "question": "CloudOps 엔지니어가 퍼블릭 서브넷과 프라이빗 서브넷이 포함된 새 VPC 를 생성합니다. CloudOps 엔지니어는 프라이빗 서브넷에 11 개의 Amazon EC2 인스턴스를 성공적으로 시작했습니다. CloudOps 엔지니어가 동일한 서브넷에 EC2 인스턴스 1 개를 추가로 시작하려고 시도했지만 사용할 수 있는 여유 IP 주소가 부족하다는 오류 메시지를 받았습니다. 더 많은 EC2 인스턴스를 배포하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "프라이빗 서브넷을 편집하여 CIDR 블록을 /27 로 변경합니다.",
    "B": "프라이빗 서브넷을 편집하여 두 번째 가용 영역까지 확장합니다.",
    "C": "프라이빗 서브넷에 추가 탄력적 IP(Elastic IP) 주소를 할당합니다.",
    "D": "필요한 EC2 인스턴스를 수용할 새 프라이빗 서브넷을 생성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "VPC 서브넷은 일단 생성되면 CIDR 블록 크기를 직접 수정할 수 없으며, 단일 서브넷이 여러 가용 영역(AZ)에 걸쳐 확장될 수도 없다(A, B). 또한 탄력적 IP(C)는 퍼블릭 IP 주소이므로 프라이빗 서브넷 내의 사설 IP 주소 부족 문제를 해결하지 못한다. AWS 는 각 서브넷에서 네트워크 관리 목적으로 5 개의 IP 주소를 예약하므로, 예를 들어 /28 서브넷(총 16 개 IP)의 경우 할당 가능한 IP 는 11 개뿐이다. 따라서 IP 가 고갈된 경우 동일 VPC 내에 더 큰 CIDR 블록을 가진 새 프라이빗 서브넷을 생성하여 인스턴스를 배포해야 한다."
  },
  {
   "num": 112,
   "question": "한 회사가 프로덕션 및 비프로덕션 워크로드를 실행하기 위해 수백 개의 Amazon EC2 온디맨드 인스턴스 및 스팟 인스턴스를 사용합니다. 회사는 EC2 인스턴스에 AWS Systems Manager 에이전트(SSM Agent)를 설치하고 구성합니다. 최근 인스턴스 패치 작업 중에 일부 인스턴스가 바쁘거나 중지 상태여서 패치되지 않았습니다. 회사는 모든 인스턴스의 현재 패치 버전을 나열하는 보고서를 생성해야 합니다. 가장 운영 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Systems Manager Inventory 를 사용하여 패치 버전을 수집합니다. 모든 인스턴스의 보고서를 생성합니다.",
    "B": "Systems Manager Run Command 를 사용하여 패치 버전 정보를 원격으로 수집합니다. 모든 인스턴스의 보고서를 생성합니다.",
    "C": "SSM 에이전트의 출력을 사용하여 EC2 인스턴스 구성 변경 사항을 추적하도록 AWS Config 를 사용합니다. 패치 버전을 확인하는 커스텀 규칙을 생성합니다. 패치되지 않은 모든 인스턴스의 보고서를 생성합니다.",
    "D": "SSM 에이전트의 출력을 사용하여 EC2 인스턴스의 패치 상태를 모니터링하도록 AWS Config 를 사용합니다. 패치가 설치되었는지 확인하는 구성 준수 규칙을 생성합니다. 모든 인스턴스의 보고서를 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager Inventory 는 관리형 인스턴스로부터 OS, 애플리케이션, 설치된 패치 버전 등의 메타데이터를 수집하여 중앙에 저장한다. 인스턴스가 중지되거나 오프라인 상태이더라도 가장 최근에 수집되어 저장된 메타데이터를 바탕으로 전체 인스턴스의 패치 버전 보고서를 즉시 추출할 수 있어 가장 운영 효율적이다. Run Command(B)는 명령 실행 시점에 인스턴스가 켜져 있어야만 작동하므로 중지된 인스턴스의 정보를 가져올 수 없다. AWS Config(C, D)를 이용한 방식은 커스텀 규칙 구성 등의 불필요한 운영 오버헤드가 발생한다."
  },
  {
   "num": 113,
   "question": "한 회사의 전자 상거래 애플리케이션이 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 실행 중입니다. 인스턴스는 Auto Scaling 그룹에 속해 있습니다. 고객들은 웹사이트가 간헐적으로 중단된다고 보고합니다. 웹사이트가 중단되면 고객 브라우저에 HTTP 500(서버 오류) 상태 코드가 반환됩니다. Auto Scaling 그룹의 헬스 체크는 EC2 상태 검사로 구성되어 있으며 인스턴스는 정상으로 표시됩니다. 이 문제를 해결할 솔루션은 무엇입니까?",
   "options": {
    "A": "ALB 를 Network Load Balancer 로 교체합니다.",
    "B": "Auto Scaling 그룹에 Elastic Load Balancing(ELB) 헬스 체크를 추가합니다.",
    "C": "ALB 의 타겟 그룹 구성을 업데이트합니다. 세션 고정성(sticky sessions)을 활성화합니다.",
    "D": "모든 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 인스턴스를 재부팅하도록 에이전트를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "기본 EC2 상태 검사(EC2 Status Check)는 하드웨어 및 OS 수준의 정상 작동 여부만 모니터링하므로, 웹 애플리케이션 서비스 프로세스 장애로 인해 HTTP 500 오류가 반환되어도 인스턴스를 정상 상태로 판단한다. Auto Scaling 그룹에 ELB 헬스 체크를 추가하면 ALB 가 수행하는 HTTP/HTTPS 타깃 헬스 체크 결과를 Auto Scaling 그룹이 반영하게 된다. 이를 통해 애플리케이션 계층에서 오류를 일으키는 인스턴스를 비정상(Unhealthy)으로 판정하고 자동으로 종료 및 교체할 수 있다. NLB 변경(A)이나 세션 고정(C)은 애플리케이션 레벨 장애 감지 및 자동 교체를 수행하지 못한다."
  },
  {
   "num": 114,
   "question": "한 회사가 Amazon EC2 인스턴스에서 웹사이트를 운영합니다. 사용자는 Amazon S3 버킷에 이미지를 업로드하고 웹사이트에 이미지를 게시할 수 있습니다. 회사는 업로드된 이미지의 크기를 조정하기 위해 AWS Lambda 함수를 사용하는 서버리스 이미지 처리 애플리케이션을 배포하고자 합니다. 회사의 개발팀이 Lambda 함수를 생성했습니다. CloudOps 엔지니어는 사용자가 S3 버킷에 새 이미지를 업로드할 때 Lambda 함수를 호출하는 솔루션을 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "사용자가 S3 버킷에 새 이미지를 업로드할 때 Lambda 함수를 호출하도록 Amazon Simple Notification Service(Amazon SNS) 주제를 구성합니다.",
    "B": "사용자가 S3 버킷에 새 이미지를 업로드할 때 Lambda 함수를 호출하도록 Amazon CloudWatch 경보를 구성합니다.",
    "C": "사용자가 S3 버킷에 새 이미지를 업로드할 때 Lambda 함수를 호출하도록 S3 이벤트 알림(S3 Event Notifications)을 구성합니다.",
    "D": "사용자가 S3 버킷에 새 이미지를 업로드할 때 Lambda 함수를 호출하도록 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon S3 버킷에 새 객체가 업로드될 때(`s3:ObjectCreated:*`) AWS Lambda 함수를 직접 호출하도록 'S3 이벤트 알림(S3 Event Notifications)'을 구성하는 것이 가장 간결하고 표준적인 서버리스 트리거 구조이다. 별도의 중간 메시징 서비스인 SNS(A)나 SQS(D)를 추가 구성할 필요가 없으며, CloudWatch 경보(B)는 특정 리소스 지표 수치 모니터링용이므로 데이터 생성 이벤트 실시간 처리에 적합하지 않다."
  },
  {
   "num": 115,
   "question": "한 회사가 Application Load Balancer(ALB) 뒤에 있는 3 개의 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 회사는 무작위적인 트래픽 증가 기간 동안 애플리케이션의 성능이 저하되는 것을 확인했습니다. CloudOps 엔지니어는 증가하는 트래픽에 맞춰 애플리케이션을 확장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "애플리케이션 지연 시간을 모니터링하는 Amazon CloudWatch 경보를 생성하고 원하는 임계값에 도달하면 각 EC2 인스턴스의 크기를 늘립니다.",
    "B": "애플리케이션 지연 시간을 모니터링하는 Amazon EventBridge 규칙을 생성하고 원하는 임계값에 도달하면 ALB 에 EC2 인스턴스를 추가합니다.",
    "C": "대상 추적 확장 정책(target tracking scaling policy)을 적용하여 EC2 인스턴스의 Auto Scaling 그룹에 애플리케이션을 배포합니다. ALB 를 Auto Scaling 그룹에 연결합니다.",
    "D": "예약된 확장 정책(scheduled scaling policy)을 적용하여 EC2 인스턴스의 Auto Scaling 그룹에 애플리케이션을 배포합니다. ALB 를 Auto Scaling 그룹에 연결합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "무작위로 발생하는 예측 불가능한 트래픽 변동에 자동으로 대응하기 위해서는 특정 목표 지표(예: ALB 목표당 요청 수, 평균 CPU 사용률)를 설정하고 이를 유지하도록 인스턴스 수를 동적으로 조절하는 '대상 추적 확장 정책(Target Tracking Scaling Policy)'을 Auto Scaling 그룹에 적용해야 한다. 예약된 확장 정책(D)은 정해진 시간대의 예측 가능한 트래픽 패턴에만 유효하며, 인스턴스 스케일 업(A) 방식은 가용성 보장을 위한 동적 확장 모델로 적합하지 않다."
  },
  {
   "num": 116,
   "question": "SysOps 관리자가 애플리케이션용 Amazon EC2 인스턴스의 Auto Scaling 그룹을 구성하고 있습니다. 애플리케이션 로드가 변경될 때 Auto Scaling 그룹 내 인스턴스의 평균 CPU 사용률을 약 40%로 유지해야 합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "예약된 확장 작업(scheduled scaling action)을 생성합니다. 애플리케이션의 트래픽이 일반적으로 증가하는 시간에 실행되도록 작업을 구성합니다.",
    "B": "단순 확장 정책(simple scaling policy)을 구성합니다. CPU 사용률이 40%를 초과할 때 경보 상태가 되는 Amazon CloudWatch 경보를 생성합니다. 경보를 확장 정책에 연결합니다.",
    "C": "단계별 확장 정책(step scaling policy)을 구성합니다. CPU 사용률이 40%를 초과할 때 경보 상태가 되는 Amazon CloudWatch 경보를 생성합니다. 경보를 확장 정책에 연결합니다.",
    "D": "대상 추적 확장 정책(target tracking scaling policy)을 구성합니다. 평균 CPU 사용률의 목표값을 40 으로 지정합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "특정 지표(예: 평균 CPU 사용률 40%)를 일정 수준으로 유지하고자 할 때 가장 운영 효율적인 방법은 대상 추적 확장 정책(Target Tracking Scaling Policy)을 사용하는 것이다. 이 정책은 지표 목표값에 맞춰 인스턴스 수를 자동으로 늘리거나 줄이며, 필요한 CloudWatch 경보도 자동 관리하므로 손수 경보나 정책을 작성할 필요가 없다. 단순 확장(B)이나 단계별 확장(C)은 CloudWatch 경보와 스케일링 단계를 직접 정의해야 하므로 운영 오버헤드가 더 크며, 예약된 확장(A)은 무작위 트래픽 변화에 유연하게 대응할 수 없다."
  },
  {
   "num": 117,
   "question": "한 회사가 인터넷 게이트웨이가 있는 VPC 에 AWS 인프라를 배포합니다. VPC 에는 퍼블릭 서브넷과 프라이빗 서브넷이 있습니다. Amazon RDS for MySQL DB 인스턴스는 프라이빗 서브넷에 배포되어 있습니다. AWS Lambda 함수는 동일한 프라이빗 서브넷을 사용하여 데이터 쿼리를 위해 DB 인스턴스에 연결합니다. 개발자가 Lambda 함수가 Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지를 게시하도록 수정했습니다. 이 변경 후 Lambda 함수가 SQS 대기열에 메시지를 게시하려고 시도할 때 시간 초과(timeout)가 발생합니다. 이 문제를 해결할 솔루션은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "Lambda 함수가 VPC 에 연결되지 않도록 재구성합니다.",
    "B": "RDS 프록시를 배포합니다. 프록시를 통해 DB 인스턴스에 연결하도록 Lambda 함수를 구성합니다.",
    "C": "NAT 게이트웨이를 배포합니다. 모든 트래픽을 NAT 게이트웨이로 라우팅하도록 프라이빗 서브넷의 라우팅 테이블을 업데이트합니다.",
    "D": "VPC 내에 Amazon SQS 용 인터페이스 VPC 엔드포인트를 생성합니다.",
    "E": "VPC 내에 Amazon SQS 용 게이트웨이 엔드포인트를 생성합니다."
   },
   "answer": [
    "C",
    "D"
   ],
   "explanation": "VPC 내부의 프라이빗 서브넷에 연결된 Lambda 함수는 인터넷으로 나가는 경로가 없으면 기본적으로 퍼블릭 엔드포인트인 SQS 서비스와 통신할 수 없어 시간 초과가 발생한다. 이를 해결하는 첫 번째 방법은 NAT 게이트웨이를 퍼블릭 서브넷에 배포하고 프라이빗 서브넷의 라우팅 테이블에서 인터넷 트래픽을 NAT 게이트웨이로 라우팅하는 것이다(C). 두 번째 방법은 VPC 내부에서 퍼블릭 인터넷을 거치지 않고 SQS 와 사설로 통신할 수 있도록 SQS 용 인터페이스 VPC 엔드포인트(AWS PrivateLink)를 생성하는 것이다(D). Lambda 가 동일 프라이빗 서브넷의 RDS 와도 통신해야 하므로 VPC 연결을 제거(A)해서는 안 되며, SQS 는 게이트웨이 엔드포인트(E, S3 및 DynamoDB 전용)가 아닌 인터페이스 엔드포인트를 사용한다."
  },
  {
   "num": 118,
   "question": "한 회사가 Auto Scaling 그룹 내의 Amazon EC2 인스턴스에서 호스팅되는 상태 유지형(stateful) 웹 애플리케이션을 보유하고 있습니다. 인스턴스는 단일 타겟 그룹을 가진 Application Load Balancer(ALB) 뒤에서 실행됩니다. ALB 는 Amazon CloudFront 배포의 오리진으로 구성되어 있습니다. 사용자들은 웹 애플리케이션에서 무작위로 로그아웃된다고 보고합니다. 이 문제를 해결하기 위해 CloudOps 엔지니어가 취해야 할 조치 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "ALB 타겟 그룹에서 최소 미처리 요청(least outstanding requests) 알고리즘으로 변경합니다.",
    "B": "CloudFront 배포 캐시 동작(cache behavior)에서 쿠키 전달(cookie forwarding)을 구성합니다.",
    "C": "CloudFront 배포 캐시 동작에서 헤더 전달(header forwarding)을 구성합니다.",
    "D": "ALB 리스너 규칙에서 그룹 수준 고정성(group-level stickiness)을 활성화합니다.",
    "E": "ALB 타겟 그룹에서 세션 고정성(sticky sessions)을 활성화합니다."
   },
   "answer": [
    "B",
    "E"
   ],
   "explanation": "상태 유지형(Stateful) 애플리케이션에서 무작위 로그아웃이 발생하는 주요 원인은 클라이언트의 세션 정보(쿠키)가 오리진까지 전달되지 않거나, 후속 요청이 다른 EC2 인스턴스로 전달되기 때문이다. 이를 해결하기 위해 CloudFront 캐시 동작에서 오리진으로 세션 쿠키를 전달하도록 쿠키 전달(Cookie Forwarding)을 구성해야 한다(B). 또한 ALB 타겟 그룹에서 세션 고정성(Sticky Sessions)을 활성화하여 클라이언트의 요청이 세션 기간 동안 동일한 백엔드 EC2 인스턴스로 계속 라우팅되도록 보장해야 한다(E)."
  },
  {
   "num": 119,
   "question": "한 회사가 단일 가용 영역에 있는 2 개의 Amazon EC2 인스턴스에서 중요한 레거시 애플리케이션을 호스팅합니다. 인스턴스는 Application Load Balancer(ALB) 뒤에서 실행됩니다. 회사는 ALB 헬스 체크가 비정상 인스턴스를 탐지할 때 Amazon Simple Notification Service(Amazon SNS) 알림을 보내도록 Amazon CloudWatch 경보를 사용합니다. 알림을 받은 후 회사의 엔지니어들은 비정상 인스턴스를 수동으로 재시작합니다. CloudOps 엔지니어는 애플리케이션을 고가용성으로 구성하고 장애에 더 잘 견디도록 만들어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "정상 인스턴스에서 Amazon Machine Image(AMI)를 생성합니다. 동일한 가용 영역의 AMI 에서 추가 인스턴스를 시작합니다. 새 인스턴스를 ALB 타겟 그룹에 추가합니다.",
    "B": "각 인스턴스의 크기를 늘립니다. Amazon EventBridge 규칙을 생성합니다. 인스턴스가 실패 상태가 되면 인스턴스를 재시작하도록 EventBridge 규칙을 구성합니다.",
    "C": "정상 인스턴스에서 Amazon Machine Image(AMI)를 생성합니다. 동일한 가용 영역의 AMI 에서 추가 인스턴스를 시작합니다. 새 인스턴스를 ALB 타겟 그룹에 추가합니다. 인스턴스가 비정상일 때 실행되는 AWS Lambda 함수를 생성합니다. 비정상 인스턴스를 중지하고 재시작하도록 Lambda 함수를 구성합니다.",
    "D": "정상 인스턴스에서 Amazon Machine Image(AMI)를 생성합니다. 해당 AMI 를 사용하는 시작 템플릿(launch template)을 생성합니다. 여러 가용 영역에 걸쳐 배포되는 Amazon EC2 Auto Scaling 그룹을 생성합니다. ALB 타겟 그룹에 인스턴스를 추가하도록 Auto Scaling 그룹을 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "고가용성(High Availability) 및 장애 복구 능력(Resilience)을 확보하기 위한 AWS 아키텍처 모범 사례는 복수 가용 영역(Multi-AZ)에 인스턴스를 분산 배치하고 Auto Scaling 그룹을 활용하는 것이다. 기존 인스턴스로부터 AMI 와 시작 템플릿(Launch Template)을 생성한 뒤, 다중 가용 영역에 걸쳐 Auto Scaling 그룹을 구성하면 단일 가용 영역 장애에 대비할 수 있고, 장애가 발생한 인스턴스를 엔지니어의 수동 개입이나 커스텀 스크립트(Lambda) 없이 자동으로 교체할 수 있다(D). 동일 가용 영역에만 배포하는 옵션(A, C)은 가용 영역 전체 장애를 방지하지 못한다."
  },
  {
   "num": 120,
   "question": "잘못된 프로세스가 전체 프로세서를 사용하여 CPU 를 100%로 실행하고 있는 것으로 확인되었습니다. CloudOps 엔지니어는 이 문제가 2 분 이상 지속될 때 Amazon EC2 인스턴스를 자동으로 재시작하고자 합니다. 이를 어떻게 달성할 수 있습니까?",
   "options": {
    "A": "기본 모니터링(basic monitoring)이 적용된 EC2 인스턴스에 대한 Amazon CloudWatch 경보를 생성합니다. 인스턴스를 재시작하는 작업을 추가합니다.",
    "B": "세부 모니터링(detailed monitoring)이 적용된 EC2 인스턴스에 대한 Amazon CloudWatch 경보를 생성합니다. 인스턴스를 재시작하는 작업을 추가합니다.",
    "C": "EC2 인스턴스를 재시작하는 AWS Lambda 함수를 생성하고, 2 분마다 주기적으로 실행되도록 호출합니다.",
    "D": "EC2 상태 검사에 의해 호출되어 EC2 인스턴스를 재시작하는 AWS Lambda 함수를 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "EC2 기본 모니터링(Basic Monitoring)은 지표 데이터를 5 분 간격으로 수집하므로 2 분 지속 여부를 모니터링하고 대응하기에 지표 수집 주기가 길다. 반면 세부 모니터링(Detailed Monitoring)을 활성화하면 CPU 사용률 지표가 1 분 간격으로 수집되어 2 분 연속 100% 도달 조건을 정밀하게 감지할 수 있다. CloudWatch 경보에는 인스턴스 재시작(EC2 Restart Action) 작업이 기본 내장되어 있으므로 세부 모니터링 기반의 CloudWatch 경보를 사용하는 것(B)이 가장 적절하다. Lambda 를 주기적으로 실행하는 방식(C, D)은 CPU 상태를 감지하지 않고 무조건 재시작하거나 불필요한 복잡성을 유발한다."
  },
  {
   "num": 121,
   "question": "CloudOps 엔지니어가 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에 애플리케이션을 배포할 준비를 하고 있습니다. 해당 애플리케이션은 종속성(dependencies) 설치가 필요하며, 애플리케이션 업데이트는 매주 발행됩니다. CloudOps 엔지니어는 정기적으로 애플리케이션 업데이트를 반영하는 솔루션을 구현해야 합니다. 또한 해당 솔루션은 Amazon Machine Image(AMI)를 생성하는 동안 취약점 스캔을 수행해야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
   "options": {
    "A": "Packer 를 사용하는 스크립트를 작성하고 크론(cron) 작업을 예약합니다.",
    "B": "EC2 인스턴스에 애플리케이션과 종속성을 설치하고 AMI 를 생성합니다.",
    "C": "커스텀 레시피가 포함된 EC2 Image Builder 를 사용하여 애플리케이션과 종속성을 설치합니다.",
    "D": "EventBridge 예약 규칙을 사용하여 EC2 CreateImage API 작업을 호출합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "EC2 Image Builder 는 AMI 생성 및 빌드 파이프라인을 자동화하는 완전관리형 서비스이다. 커스텀 레시피(recipe)를 통해 애플리케이션 및 종속성 설치 단계를 정의할 수 있으며, 이미지 생성 과정에서 AWS Inspector 기반의 취약점 스캔을 기본 통합하여 자동으로 실행할 수 있으므로 가장 운영 효율적이다. Packer(A)나 수동 작업(B), 단순 API 호출(D) 방식은 취약점 스캔 및 자동화 빌드 파이프라인 관리를 위해 별도의 커스텀 스크립트 작성과 운영 부담이 수반된다."
  },
  {
   "num": 122,
   "question": "한 회사가 프로덕션 애플리케이션을 호스팅하는 Amazon EC2 Auto Scaling 그룹에 구성 변경을 수행했습니다. 이 변경으로 인해 사용 가능한 EC2 인스턴스 수에 영향을 주어 애플리케이션 응답 속도가 느려졌습니다. 회사는 Auto Scaling 그룹에 관리 변경(management change)이 발생할 때 이메일 알림을 제공하는 솔루션이 필요합니다. 회사는 이미 관리형 쓰기 변경 사항을 기록하도록 AWS CloudTrail 에 추적(trail)을 설정했습니다. CloudOps 엔지니어가 적절한 구독자가 있는 Amazon SNS 주제를 생성했습니다. 이 요구 사항을 충족하기 위해 CloudOps 엔지니어가 다음에 해야 할 조치는 무엇입니까?",
   "options": {
    "A": "AWS Config 를 사용하여 Auto Scaling 그룹의 변경 사항에 대해 추적을 모니터링합니다. 변경이 감지되면 SNS 주제로 메시지를 게시하도록 AWS Config 를 구성합니다.",
    "B": "AWS Security Hub 를 사용하여 Auto Scaling 그룹의 변경 사항에 대해 추적을 모니터링합니다. 변경이 감지되면 SNS 주제로 메시지를 게시하도록 Security Hub 를 구성합니다.",
    "C": "Auto Scaling 그룹과 관련된 CloudTrail 관리형 쓰기 이벤트에 반응하여 실행되는 Amazon EventBridge 규칙을 생성합니다. 변경이 감지되면 SNS 주제로 메시지를 게시하도록 EventBridge 규칙을 구성합니다.",
    "D": "모든 CloudTrail 관리 이벤트를 Amazon S3 버킷에 저장합니다. Auto Scaling 그룹에 대한 변경이 감지되면 S3 이벤트 알림을 사용하여 SNS 주제로 메시지를 게시합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudTrail 에서 기록되는 API 호출 중 Auto Scaling 그룹과 관련된 관리형 쓰기 이벤트를 실시간으로 모니터링하고 알림을 전달하는 가장 직관적이고 효율적인 방법은 Amazon EventBridge 규칙을 활용하는 것이다. EventBridge 는 CloudTrail 이벤트 패턴을 직접 감지하여 지정된 SNS 주제로 즉시 메시지를 전달할 수 있다. AWS Config(A) 및 Security Hub(B)는 상태 준수 및 보안 모니터링 서비스로 실시간 API 이벤트 수신에 불필요한 레이턴시나 오버헤드가 발생하며, S3 이벤트 알림(D)은 S3 객체 저장 이벤트용이므로 API 발생 직후 즉시 알림용으로 적합하지 않다."
  },
  {
   "num": 123,
   "question": "CloudOps 엔지니어는 여러 AWS 계정에 걸친 AWS 리소스에 태그가 일관되게 지정되도록 해야 합니다. 회사는 계정을 중앙에서 관리하기 위해 AWS Organizations 의 조직을 사용합니다. 회사는 각 사업부(business unit)에 할당된 비용을 정확하게 추적하기 위해 비용 할당 태그(cost allocation tags)를 구현하고자 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Organizations 태그 정책(tag policies)을 사용하여 모든 리소스에 필수 태깅을 강제합니다. AWS Billing and Cost Management 콘솔에서 비용 할당 태그를 활성화합니다.",
    "B": "AWS CloudTrail 이벤트를 구성하여 AWS Lambda 함수를 호출함으로써 태그가 지정되지 않은 리소스를 탐지하고 사전 정의된 규칙에 따라 태그를 자동으로 할당합니다.",
    "C": "AWS Config 를 사용하여 태깅 준수 여부를 평가합니다. 비용 할당을 위해 태그를 적용하도록 AWS Budgets 를 사용합니다.",
    "D": "AWS Service Catalog 를 사용하여 사전 태그가 지정된 리소스만 프로비저닝합니다. 조직 전체에서 태깅을 강제하도록 AWS Trusted Advisor 를 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Organizations 의 태그 정책(Tag Policies)을 사용하면 조직 내 모든 계정에서 생성되는 리소스에 대해 특정 태그 키와 값 표준을 중앙에서 강제할 수 있다. 이렇게 적용된 태그를 AWS Billing and Cost Management 콘솔에서 비용 할당 태그로 활성화하면 추가 개발이나 수동 개입 없이 각 사업부별 비용을 정확히 추적 및 분배할 수 있어 운영 오버헤드가 가장 적다. Lambda(B)를 이용한 이벤트 감지 및 태그 부여 코드는 유지 관리 오버헤드가 크며, AWS Budgets(C)는 비용 경보 도구로 리소스 태그를 자동 적용하는 서비스가 아니다."
  },
  {
   "num": 124,
   "question": "한 회사가 데모 환경을 위해 Amazon Aurora MySQL DB 클러스터에 데이터베이스를 배포할 계획입니다. 데이터베이스는 데모 환경용 데이터를 저장하며, 데이터는 매일 초기화(reset)되어야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
   "options": {
    "A": "데이터가 입력된 후 DB 클러스터의 수동 스냅샷을 생성합니다. 매일 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 생성합니다. 스냅샷을 복원한 다음 이전 DB 클러스터를 삭제하도록 함수를 구성합니다.",
    "B": "DB 클러스터를 생성하는 동안 백트랙(Backtrack) 기능을 활성화합니다. 목표 백트랙 창(window)을 48 시간으로 지정합니다. 매일 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 생성합니다. 백트랙 작업을 수행하도록 함수를 구성합니다.",
    "C": "데이터가 입력된 후 DB 클러스터의 수동 스냅샷을 Amazon S3 버킷으로 내옵니다. 매일 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 생성합니다. Amazon S3 에서 스냅샷을 복원하도록 함수를 구성합니다.",
    "D": "DB 클러스터 백업 보존 기간을 2 일로 설정합니다. 매일 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 생성합니다. DB 클러스터를 특정 시점으로 복원한 다음 이전 DB 클러스터를 삭제하도록 함수를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon Aurora MySQL 의 백트랙(Backtrack) 기능은 DB 클러스터를 삭제하거나 스냅샷에서 새로 복원할 필요 없이, 기존 클러스터를 그대로 유지한 채 지정한 과거 시점으로 데이터를 즉시 되돌릴 수 있는 독자적 기능이다. 백트랙 창을 48 시간으로 구성하고 EventBridge 와 Lambda 를 통해 매일 백트랙 API 를 실행하면 엔드포인트 변경이나 클러스터 교체 및 삭제 작업 없이 매일 데이터를 초기 상태로 손쉽게 되돌릴 수 있어 운영 효율성이 가장 높다. 스냅샷 기반 복원 방식들(A, C, D)은 복원 시마다 새로운 클러스터가 생성되므로 엔드포인트 수정 및 이전 클러스터 삭제 등 불필요한 운영 작업이 수반된다."
  },
  {
   "num": 125,
   "question": "한 회사가 Amazon SQS FIFO 대기열을 사용하여 이벤트를 순차적으로 처리하는 애플리케이션을 보유하고 있습니다. 회사는 새 객체가 Amazon S3 버킷에 업로드될 때 SQS 대기열로 알림을 자동으로 전송하는 솔루션이 필요합니다. 해당 솔루션은 메시지 순서를 유지해야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "ListObjectsV2 명령을 사용하여 객체를 폴링하고 새 객체가 추가될 때 이를 감지하는 AWS Lambda 함수를 생성합니다. 새 객체가 감지되면 SQS 대기열에 메시지를 추가하도록 Lambda 함수를 구성합니다.",
    "B": "S3 버킷에 이벤트 알림을 생성합니다. FIFO 전달 옵션을 사용합니다. 기존 SQS 대기열로 알림을 라우팅합니다.",
    "C": "Amazon SNS FIFO 주제를 생성합니다. S3 버킷에 이벤트 알림을 생성합니다. SNS 주제로 메시지를 전송하도록 이벤트를 구성합니다. 기존 SQS 대기열을 SNS 주제에 구독시킵니다.",
    "D": "Amazon S3 Access Points 에 액세스 포인트를 생성합니다. 기존 SQS 대기열로 새 항목을 전송하도록 액세스 포인트를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon S3 이벤트 알림(S3 Event Notifications) 기능에서 FIFO 전달 옵션을 활성화하여 기존 SQS FIFO 대기열로 이벤트를 라우팅하면 커스텀 코드나 추가적인 중간 인프라(SNS, Lambda 등) 구성 없이 S3 객체 생성 순서에 맞춰 메시지를 전달할 수 있어 운영 오버헤드가 가장 적다. 주기적으로 S3 를 폴링하는 Lambda(A)는 리소스 낭비와 폴링 지연이 발생하며, SNS FIFO(C)를 중간 매개체로 두는 방식은 불필요한 아키텍처 복잡성과 비용 오버헤드를 유발한다."
  },
  {
   "num": 126,
   "question": "한 회사가 AWS Lambda 함수가 회사 계정의 VPC 내 리소스에 액세스할 수 있도록 보장해야 합니다. 해당 Lambda 함수는 인터넷을 통해서만 액세스할 수 있는 서드파티 API 에 대한 액세스 권한도 필요합니다. SysOps 관리자가 이러한 요구 사항을 충족하기 위해 취해야 할 조치는 무엇입니까?",
   "options": {
    "A": "Lambda 함수에 탄력적 IP(Elastic IP) 주소를 연결하고 VPC 의 인터넷 게이트웨이로 향하는 라우팅을 구성합니다.",
    "B": "VPC 의 가상 사설 게이트웨이(virtual private gateway)로 향하는 라우팅이 있는 프라이빗 서브넷에 Lambda 함수를 연결합니다.",
    "C": "VPC 의 인터넷 게이트웨이로 향하는 라우팅이 있는 퍼블릭 서브넷에 Lambda 함수를 연결합니다.",
    "D": "VPC 의 퍼블릭 서브넷에 배포된 NAT 게이트웨이로 향하는 라우팅이 있는 프라이빗 서브넷에 Lambda 함수를 연결합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "VPC 에 연결된 Lambda 함수는 탄력적 네트워크 인터페이스(ENI)를 통해 사설 IP 만 할당받으며, 퍼블릭 서브넷에 배치하더라도 공용 IP 를 직접 부여받지 못해 인터넷 게이트웨이(IGW)로 직접 통신할 수 없다(C). 따라서 Lambda 함수가 VPC 내부 리소스와 인터넷(서드파티 API)을 동시에 액세스하려면 프라이빗 서브넷에 배포하고, 해당 프라이빗 서브넷의 라우팅 테이블이 퍼블릭 서브넷의 NAT 게이트웨이를 거쳐 인터넷으로 나가도록 구성해야 한다. Lambda 에는 탄력적 IP 를 직접 연결할 수 없다(A)."
  },
  {
   "num": 127,
   "question": "한 회사가 애플리케이션을 지원하기 위해 AWS 에 MySQL 데이터베이스를 배포해야 합니다. 데이터베이스는 고가용성(HA) 및 복구 가능성을 갖춰야 합니다. 데이터베이스는 15 분의 복구 시간 목표(RTO)와 5 분의 복구 지점 목표(RPO)를 충족해야 합니다. 가장 운영 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon RDS 를 사용하여 단일 가용 영역에 MySQL 데이터베이스를 배포합니다. 자동 백업을 활성화합니다.",
    "B": "Multi-AZ 배포가 적용된 Amazon RDS 를 사용하여 2 개의 가용 영역에 걸쳐 MySQL 데이터베이스를 배포합니다. 시점 복원(point-in-time restore)을 활성화합니다.",
    "C": "Amazon EC2 인스턴스를 사용하여 2 개의 가용 영역에 걸쳐 MySQL 데이터베이스를 배포합니다. 데이터베이스 복제 및 Amazon EBS 볼륨 스냅샷을 구성합니다.",
    "D": "Amazon RDS 를 사용하여 2 개의 가용 영역에 걸쳐 MySQL 데이터베이스를 배포합니다. 자동 백업 및 데이터베이스 복제를 활성화합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon RDS Multi-AZ 배포는 다른 가용 영역(AZ)에 동기식 대기(standby) 복제본을 유지하여 주 데이터베이스 장애 발생 시 자동 장애 조치(Failover)를 수행하므로 RTO(15 분 이내) 요구 사항을 충족한다. 또한 자동 백업 기반의 시점 복원(Point-in-Time Restore)을 활성화하면 트랜잭션 로그(Transaction Logs)가 지속적으로 기록되어 데이터 손실을 최소화하므로 RPO(5 분 이내) 요구 사항을 충족한다. 단일 AZ 배포(A)는 고가용성을 제공하지 못하며, EC2 에 수동 데이터베이스 구축(C)은 운영 오버헤드가 매우 크다."
  },
  {
   "num": 128,
   "question": "한 회사가 Amazon S3 에서 정적 웹사이트를 호스팅합니다. Amazon CloudFront 배포는 이 사이트를 전 세계 사용자에게 제공합니다. 회사는 Managed-CachingDisabled CloudFront 캐시 정책을 사용합니다. 회사의 개발자들은 Amazon S3 의 파일을 새로운 정보로 자주 업데이트한다고 확인했습니다. 사용자들은 웹사이트가 파일을 처음 로드할 때는 올바른 정보를 보여주지만, 새로고침을 한 후에는 웹 브라우저가 업데이트된 파일을 가져오지 않는다고 보고합니다. SysOps 관리자가 이 문제를 해결하기 위해 권장해야 하는 조치는 무엇입니까?",
   "options": {
    "A": "S3 객체에 max-age=0 이 설정된 Cache-Control 헤더 필드를 추가합니다.",
    "B": "CloudFront 캐시 정책을 Managed-CachingOptimized 로 변경합니다.",
    "C": "S3 버킷 구성에서 버킷 버전 관리를 비활성화합니다.",
    "D": "CloudFront 구성에서 콘텐츠 압축을 활성화합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "CloudFront 캐시 정책이 Managed-CachingDisabled 로 설정되어 있어 CloudFront 엣지 로케이션에서는 파일을 캐싱하지 않고 S3 오리진으로 직접 요청을 보낸다. 그러나 오리진 응답에 적절한 캐시 제어 헤더가 없으면 웹 브라우저 자체가 자체 로컬 캐시에 응답을 저장하여 새로고침 시에도 오리진 재요청 없이 기존 브라우저 캐시 파일을 로드한다. S3 객체 메타데이터에 `Cache-Control: max-age=0` 헤더를 추가하면 브라우저가 매 요청마다 오리진에 최신 파일 여부를 재검증하도록 강제하므로 새로고침 시 업데이트된 최신 객체를 가져오게 된다."
  },
  {
   "num": 129,
   "question": "한 회사가 Amazon EC2 인스턴스에서 실행되는 HTTP 애플리케이션으로부터 500 상태 코드 응답이 급증하는 현상을 관찰했습니다. EC2 인스턴스는 Auto Scaling 그룹에 속해 있으며 복원력을 위해 EC2 헬스 체크를 사용합니다. 회사는 Amazon CloudWatch 를 사용하여 EC2 인스턴스 로그와 HTTP 서버 로그를 수집합니다. CloudOps 엔지니어가 상태 코드의 원인을 조사한 결과, 오류가 Auto Scaling 그룹이 EC2 인스턴스를 교체하거나 축소(scale-in) 작업을 수행하는 시점과 일치함을 확인했습니다. CloudOps 엔지니어는 애플리케이션 아키텍처의 복원력을 향상시켜야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "기본 쿨다운(cooldown) 구성을 늘리도록 Auto Scaling 그룹을 재구성합니다.",
    "B": "Elastic Load Balancing(ELB) 헬스 체크를 사용하도록 EC2 인스턴스 헬스 체크를 재구성합니다.",
    "C": "최소 용량(minimum capacity) 구성을 늘리도록 Auto Scaling 그룹을 재구성합니다.",
    "D": "헬스 체크 유예 기간(health check grace period)을 늘리도록 EC2 인스턴스 헬스 체크를 재구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Auto Scaling 그룹이 새로운 인스턴스를 시작할 때, 애플리케이션 및 관련 프로세스가 완전히 부팅되어 요청을 처리할 준비가 되기도 전에 헬스 체크가 시작되면 인스턴스가 비정상(Unhealthy) 상태로 판단되어 즉시 교체 작업이 연속적으로 발생하거나 HTTP 500 오류를 반환하게 된다. 헬스 체크 유예 기간(Health Check Grace Period)을 늘려주면 인스턴스가 생성된 후 애플리케이션이 정상적으로 시작되고 트래픽을 처리할 수 있을 때까지 헬스 체크 판정을 유예하므로 인스턴스 교체 시 발생하는 500 오류를 방지할 수 있다."
  },
  {
   "num": 130,
   "question": "한 회사가 단일 AZ(Single-AZ) Amazon RDS for MySQL DB 인스턴스에 데이터를 저장하는 EC2 기반 애플리케이션을 실행하고 있습니다. 애플리케이션은 읽기 및 쓰기 작업이 모두 필요하며, 회사는 최소한의 다운타임으로 장애 조치(failover) 기능을 확보해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "DB 인스턴스를 Multi-AZ DB 인스턴스 배포로 수정합니다.",
    "B": "DB 인스턴스가 배포된 동일한 가용 영역에 읽기 전용 복제본(read replica)을 추가합니다.",
    "C": "최소 용량이 2 이고 희망 용량이 2 인 Auto Scaling 그룹에 DB 인스턴스를 추가합니다.",
    "D": "RDS Proxy 를 사용하여 DB 인스턴스 앞에 프록시를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon RDS 에서 읽기 및 쓰기 작업을 모두 지원하면서 최소한의 다운타임으로 자동 장애 조치(Failover) 기능을 제공하는 표준 방법은 DB 인스턴스를 Multi-AZ 배포로 수정하는 것이다. Multi-AZ 를 구성하면 다른 가용 영역에 동기식 대기(standby) 인스턴스가 프로비저닝되어, 기본 인스턴스 장애 시 엔드포인트 변경 없이 자동으로 장애 조치가 이루어진다. 읽기 전용 복제본(B)은 주로 읽기 트래픽 분산용이며 기본 쓰기 엔드포인트 자동 장애 조치를 제공하지 못한다. RDS 인스턴스는 Auto Scaling 그룹(C)에 직접 포함될 수 없으며, RDS Proxy(D)는 커넥션 풀링 관리 도구이다."
  },
  {
   "num": 131,
   "question": "한 회사가 Amazon VPC 에서 워크로드를 실행하고 있습니다. 회사는 해당 워크로드에 대한 Amazon CloudWatch Logs 를 구성합니다. 회사는 회사 AWS 계정에서 비정상적인 API 활동 및 보안 이벤트를 자동으로 탐지하는 솔루션이 필요합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon Inspector 를 사용하여 VPC 흐름 로그(flow logs)를 스캔합니다.",
    "B": "Amazon GuardDuty 를 사용하여 CloudWatch 로그를 모니터링합니다.",
    "C": "AWS CloudTrail Insights 를 구현합니다.",
    "D": "AWS Config 자동 이상 탐지(anomaly detection)를 사용합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS 계정 내에서 발생하는 비정상적인 API 호출 패턴이나 과도한 API 요청 등의 이상 동작을 자동으로 탐지하도록 설계된 전용 기능은 AWS CloudTrail Insights 이다. CloudTrail Insights 는 기존 관리 이벤트 수집 데이터를 지속적으로 분석하여 일반적인 베이스라인을 설정하고, 이를 벗어나는 이상 API 활동(Unusual API activity)이 감지되면 이벤트를 자동으로 생성한다. Inspector(A)는 취약점 평가 서비스이며, GuardDuty(B)는 위협 탐지 서비스이다. AWS Config(D)는 리소스 구성 상태 추적 도구이다."
  },
  {
   "num": 132,
   "question": "한 회사가 Amazon EC2 Auto Scaling 그룹에 속한 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 부팅 스크립트 실행 시간이 길어 스케일 아웃(scale-out) 동작이 완료되기까지 오랜 시간이 걸립니다. CloudOps 엔지니어는 Auto Scaling 그룹을 과도하게 프로비저닝하지 않으면서 스케일 아웃 동작에 필요한 시간을 줄이는 솔루션을 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "더 큰 인스턴스 크기를 사용하도록 시작 구성을 변경합니다.",
    "B": "Auto Scaling 그룹의 최소 인스턴스 수를 늘립니다.",
    "C": "Auto Scaling 그룹에 예측 확장 정책(predictive scaling policy)을 추가합니다.",
    "D": "Auto Scaling 그룹에 웜 풀(warm pool)을 추가합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "인스턴스 부팅 및 초기화 시간이 길어 스케일 아웃 지연이 발생할 때, 항시 실행 중인 인스턴스를 과도하게 늘리지 않고 빠르게 대응할 수 있는 최선의 솔루션은 Auto Scaling 그룹 웜 풀(Warm Pool)이다. 웜 풀은 인스턴스를 미리 초기화된 정지(Stopped) 상태 등으로 보관해 두었다가, 스케일 아웃 발생 시 즉시 트래픽 처리 상태로 전환하므로 부팅 시간을 획기적으로 단축한다. 최소 인스턴스 수 증대(B)는 실행 비용 오버헤드를 유발하며, 인스턴스 크기 확장(A)이나 예측 기반 확장(C)은 초기화 시간 자체를 줄이지 못한다."
  },
  {
   "num": 133,
   "question": "CloudOps 엔지니어가 Amazon CloudWatch Synthetics 구현 관련 문제를 해결하고 있습니다. CloudWatch Synthetics 결과는 Amazon S3 버킷으로 전송되어야 합니다. CloudOps 엔지니어는 인터넷 게이트웨이가 연결된 VPC 에서 실행되는 기존 카나리(canary)의 구성을 복사했습니다. 그러나 엔지니어는 인터넷 액세스가 없는 프라이빗 VPC 에서 카나리를 성공적으로 시작할 수 없습니다. 프라이빗 VPC 에서 카나리를 성공적으로 실행하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "VPC 에서 DNS 확인(resolution) 옵션과 DNS 호스트 이름(hostnames) 옵션이 켜져 있는지 확인합니다. VPC 에 synthetics:GetCanaryRuns 권한을 추가합니다. S3 버킷에서 CloudWatch Synthetics 역할에 IgnorePublicAcls 권한을 추가합니다.",
    "B": "VPC 에서 DNS 확인 옵션과 DNS 호스트 이름 옵션이 꺼져 있는지 확인합니다. Amazon S3 용 게이트웨이 VPC 엔드포인트를 생성합니다. CloudWatch Synthetics 가 S3 엔드포인트를 사용하도록 허용하는 권한을 추가합니다.",
    "C": "VPC 에서 DNS 확인 옵션과 DNS 호스트 이름 옵션이 꺼져 있는지 확인합니다. DNS 포트에서 아웃바운드 트래픽을 허용하도록 카나리에 보안 그룹을 추가합니다. CloudWatch Synthetics 가 S3 버킷에 쓸 수 있도록 허용하는 권한을 추가합니다.",
    "D": "VPC 에서 DNS 확인 옵션과 DNS 호스트 이름 옵션이 켜져 있는지 확인합니다. CloudWatch 용 인터페이스 VPC 엔드포인트를 생성합니다. Amazon S3 용 게이트웨이 VPC 엔드포인트를 생성합니다. CloudWatch Synthetics 가 두 엔드포인트를 모두 사용하도록 허용하는 권한을 추가합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "인터넷 연결이 없는 프라이빗 VPC 에서 CloudWatch Synthetics 카나리를 실행하고 결과를 S3 에 저장하기 위해서는 해당 서비스들과 사설 통신이 가능하도록 VPC 엔드포인트를 구축해야 한다. 프라이빗 엔드포인트 도메인 이름 해소를 위해 VPC 의 DNS 확인 및 DNS 호스트 이름 옵션이 활성화되어 있어야 한다. 또한 CloudWatch 서비스 연결을 위한 인터페이스 VPC 엔드포인트와 S3 저장을 위한 게이트웨이 VPC 엔드포인트를 각각 생성하고 적절한 IAM 권한을 부여해야 한다."
  },
  {
   "num": 134,
   "question": "CloudOps 엔지니어는 특정 AWS 서비스에 대한 액세스가 필요한 개발자를 위한 IAM 정책을 생성해야 합니다. 요구 사항에 따라 CloudOps 엔지니어는 다음 정책을 생성했습니다. 이 정책이 허용하는 작업은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "AWS Storage Gateway 생성",
    "B": "AWS Lambda 함수용 IAM 역할 생성",
    "C": "Amazon SQS 대기열 삭제",
    "D": "AWS 로드 밸런서 설명/조회(Describe)",
    "E": "AWS Lambda 함수 호출(Invoke)"
   },
   "answer": [
    "D",
    "E"
   ],
   "explanation": "해당 IAM 정책(`elasticloadbalancing:Describe*` 및 `lambda:InvokeFunction` 권한이 정의된 정책)에서 허용하는 작업은 AWS 로드 밸런서 정보를 조회하는 `Describe` 관련 작업(D)과 AWS Lambda 함수를 실행하는 `Invoke` 작업(E)이다. Storage Gateway 생성(A), IAM 역할 생성(B), SQS 대기열 삭제(C) 등은 해당 정책의 Statement 항목에 명시되어 있지 않으므로 허용되지 않는다."
  },
  {
   "num": 135,
   "question": "웹 애플리케이션이 Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행됩니다. 롤링 업데이트 중에 애플리케이션 초기화 및 콜드 스타트로 인해 30 초의 지연 시간 급증이 발생합니다. CloudOps 엔지니어는 용량을 미리 초기화하여 지연 시간을 일정하게 유지해야 합니다. CloudOps 엔지니어는 유지 관리 기간을 연장하지 않고 여러 웨이브(wave)에 걸쳐 인스턴스를 재사용해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "사용자 데이터(user data)를 통해 미리 초기화된 정지된 인스턴스로 Auto Scaling 그룹 웜 풀(warm pool)을 구성합니다. 인스턴스 재사용(instance reuse)을 활성화합니다. 인스턴스 웜업값이 포함된 대상 추적 정책을 설정합니다. 교체 인스턴스가 웜 풀에서 제공되도록 배치(batch) 단위로 인스턴스 새로 고침(instance refresh)을 실행합니다.",
    "B": "헬스 체크 유예 기간을 두 배로 늘립니다. 연결 드레이닝(connection draining)을 비활성화합니다. 각 웨이브 동안 급증을 흡수하기 위해 단계별 확장을 사용합니다. 더 작고 많은 수의 인스턴스로 이동합니다.",
    "C": "버스트 연결을 흡수하기 위해 ALB 앞에 Network Load Balancer 를 배치합니다. Auto Scaling 그룹 최대값을 변경하지 않고 유지합니다. 서지 없는(zero-surge) 롤링 교체를 구성합니다. 인스턴스 재사용을 비활성화합니다.",
    "D": "Auto Scaling 그룹에서 7 일 예측이 포함된 예측 확장을 활성화합니다. 300 초의 인스턴스 웜업이 포함된 CPU 대상 추적 정책을 오버레이합니다. 롤아웃 창에 대한 예약된 작업을 추가합니다. 표준 ALB 헬스 체크로 서지 없는 인스턴스 새로 고침을 유지합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "콜드 스타트로 인한 지연 시간 급증을 방지하고 롤링 업데이트(인스턴스 새로 고침) 과정에서 인스턴스를 효율적으로 재사용하기 위한 솔루션은 Auto Scaling 그룹 웜 풀(Warm Pool) 구성이다. 미리 초기화된 정지 상태 인스턴스를 웜 풀에 유지하고 인스턴스 재사용 정책을 활성화하면, 인스턴스 새로 고침 실행 시 부팅 지연 없이 웜 풀의 준비된 인스턴스를 즉시 투입할 수 있어 지연 시간을 안정적으로 유지할 수 있다."
  },
  {
   "num": 136,
   "question": "한 회사가 전적으로 AWS 에서 실행되는 자사 시스템에 대해 외부 감사를 받고 있습니다. CloudOps 엔지니어는 AWS 가 관리하는 인프라에 대한 PCI DSS(Payment Card Industry Data Security Standard) 준수 설명서를 제출해야 합니다. CloudOps 엔지니어가 이 요구 사항을 충족하기 위해 취해야 할 조치는 무엇입니까?",
   "options": {
    "A": "AWS Artifact 포털에서 해당 보고서를 다운로드하여 감사인에게 제공합니다.",
    "B": "AWS CloudTrail 로그 파일의 전체 사본을 다운로드하여 감사인에게 제공합니다.",
    "C": "Amazon CloudWatch 로그의 전체 사본을 다운로드하여 감사인에게 제공합니다.",
    "D": "감사인이 준수 여부를 판단할 수 있도록 프로덕션 AWS 계정에 대한 관리자 액세스 권한을 감사인에게 제공합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Artifact 는 PCI DSS, SOC, ISO 인증서 등 AWS 가 관리하는 인프라의 글로벌 보안 및 규정 준수 보고서에 주문형으로 액세스할 수 있는 중앙 포털 서비스이다. 외부 감사용 온프레미스/클라우드 책임 분담 모델 준수 증빙 보고서는 AWS Artifact 콘솔에서 다운로드하여 전달하는 것이 표준 절차이다. CloudTrail(B) 및 CloudWatch(C) 로그는 사용자 계정 내의 이벤트 기록일 뿐 인프라 규정 준수 보고서가 아니며, 감사인에게 관리자 권한을 부여하는 것(D)은 최소 권한 원칙에 위배되는 심각한 보안 위험이다."
  },
  {
   "num": 137,
   "question": "CloudOps 엔지니어가 여러 Amazon EC2 인스턴스를 생성하는 AWS CloudFormation 템플릿의 문제를 해결하고 있습니다. 해당 템플릿은 us-east-1 에서는 정상적으로 작동하지만, us-west-2 에서는 \"AMI [ami-12345678] does not exist\" 오류 코드와 함께 실패합니다. CloudOps 엔지니어는 AWS CloudFormation 템플릿이 모든 리전에서 작동하도록 하려면 어떻게 해야 합니까?",
   "options": {
    "A": "소스 리전의 Amazon Machine Image(AMI)를 대상 리전으로 복사하고 동일한 ID 를 할당합니다.",
    "B": "정교한 AMI ID 의 일부로 리전 코드를 지정하도록 AWS CloudFormation 템플릿을 편집합니다.",
    "C": "AWS::EC2::AMI::ImageId 컨트롤을 사용하여 사용자에게 모든 AMI 의 드롭다운 목록을 제공하도록 AWS CloudFormation 템플릿을 편집합니다.",
    "D": "Mappings 섹션에 AMI ID 를 포함하도록 AWS CloudFormation 템플릿을 수정합니다. 적절한 AMI ID 를 위해 템플릿 내에서 적절한 매핑을 참조합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AMI ID 는 각 AWS 리전별로 고유하게 생성되는 리전 종속적(Region-specific) 값이다. 리전이 변경되어도 동일한 AMI ID 를 사용할 수 없으며, 사용자가 타깃 리전에 동일한 ID 를 수동 할당하는 것도 불가능하다(A). 교차 리전 배포를 지원하는 CloudFormation 템플릿을 작성할 때에는 `Mappings` 섹션에 리전별 대상 AMI ID 를 정의하고, `Fn::FindInMap` 매핑 참조 함수를 사용하여 인스턴스 생성 시 현재 실행 중인 리전에 알맞은 AMI ID 를 동적으로 조회하도록 구성해야 한다."
  },
  {
   "num": 138,
   "question": "한 회사는 VPC 내에서 맞춤형 리소스 이름 해소(resolution)를 허용하기 위해 기존 Amazon Route 53 프라이빗 호스팅 영역을 새 VPC 에 적용하고자 합니다. CloudOps 엔지니어가 VPC 를 생성하고 프라이빗 호스팅 영역에 적절한 리소스 레코드 세트를 추가했습니다. 설정을 완료하기 위해 CloudOps 엔지니어가 취해야 할 조치는 무엇입니까?",
   "options": {
    "A": "Route 53 프라이빗 호스팅 영역을 해당 VPC 와 연결(Associate)합니다.",
    "B": "Route 53 Resolver 로 향하는 트래픽을 허용하도록 VPC 의 기본 보안 그룹에 규칙을 생성합니다.",
    "C": "VPC 네트워크 ACL 이 Route 53 Resolver 로 향하는 트래픽을 허용하는지 확인합니다.",
    "D": "각 VPC 라우팅 테이블에 Route 53 Resolver 로 향하는 라우팅이 있는지 확인합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon Route 53 프라이빗 호스팅 영역(Private Hosted Zone)의 DNS 레코드를 특정 VPC 내부의 EC2 인스턴스 등이 조회 및 해소할 수 있도록 만들려면, 해당 프라이빗 호스팅 영역을 대상 VPC 와 명시적으로 연결(Association)해야 한다. VPC 연결이 완료되면 AWS 내부 DNS 서버가 해당 VPC 로부터 들어오는 조회 요청에 대해 호스팅 영역의 사설 DNS 레코드를 응답하게 된다. 보안 그룹(B), 네트워크 ACL(C), 라우팅 테이블(D) 추가 수정은 프라이빗 호스팅 영역 연결을 대체하는 필수 요구 단계가 아니다."
  },
  {
   "num": 139,
   "question": "CloudOps 엔지니어는 Amazon EC2 인스턴스의 프로덕션 환경에서 실행되는 애플리케이션의 문제를 신속하게 해결해야 합니다. 해당 애플리케이션은 Amazon RDS 데이터베이스를 사용합니다. 문제를 해결하기 위해 CloudOps 엔지니어는 EC2 인스턴스와 RDS 데이터베이스 모두에 대한 로그를 수집하고 쿼리할 수 있는 중앙 집중식 솔루션이 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치 및 구성하여 ERROR 로그 이벤트를 Amazon CloudWatch Logs 로 전달합니다. RDS 데이터베이스가 로그 이벤트를 CloudWatch Logs 로 내보내도록 구성합니다. CloudWatch Logs Insights 를 사용하여 로그를 쿼리합니다.",
    "B": "EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치 및 구성하여 INFO 로그 이벤트를 Amazon S3 버킷으로 전달합니다. RDS 데이터베이스에 CloudWatch 에이전트를 설치합니다. ERROR 로그 이벤트를 S3 버킷으로 전달합니다. 로그를 분석하기 위해 AWS Lambda 함수를 호출하도록 S3 이벤트 알림을 구성합니다.",
    "C": "EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치 및 구성하여 ERROR 로그 이벤트를 Amazon CloudWatch Logs 로 전달합니다. Logs & events 메뉴를 사용하여 RDS 데이터베이스의 로그 이벤트를 검사합니다. CloudWatch Logs Insights 를 사용하여 EC2 인스턴스에 대한 로그만 쿼리합니다.",
    "D": "EC2 인스턴스에 AWS X-Ray 에이전트를 설치 및 구성하여 INFO, DEBUG 및 지연 시간 로그 이벤트를 Amazon CloudWatch Logs 로 전달합니다. RDS 데이터베이스가 로그 이벤트를 Amazon CloudWatch Logs 로 내보내도록 구성합니다. CloudWatch Logs Insights 를 사용하여 로그를 쿼리합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "EC2 인스턴스의 로그는 CloudWatch 에이전트를 통해 CloudWatch Logs 로 전송하고, Amazon RDS 의 엔진 로그(에러 로그, 느린 쿼리 로그 등)는 RDS 설정의 로그 내보내기(Log Exports) 기능을 활성화하여 CloudWatch Logs 로 중앙 수집할 수 있다. 수집된 모든 로그 데이터는 단일 인터페이스인 CloudWatch Logs Insights 를 활용하여 교차 쿼리 및 통합 분석을 신속하게 진행할 수 있다. RDS 관리형 서비스 자체에는 OS 수준 에이전트를 직접 설치할 수 없으므로(B) 올바르지 않으며, X-Ray(D)는 분산 추적 서비스로 일반 텍스트 로그 중앙 수집용이 아니다."
  },
  {
   "num": 140,
   "question": "한 회사가 Amazon EFS 파일 시스템을 사용하는 애플리케이션을 운영하고 있습니다. 최근 애플리케이션 로직 오류가 포함된 사고로 인해 여러 파일이 손상되었습니다. 회사는 EFS 파일 시스템을 백업하고 복구하는 기능을 향상시키고자 합니다. 회사는 개별 파일을 신속하게 복구할 수 있어야 합니다. 가장 비용 효율적으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "데이터를 Amazon S3 Glacier 보관소(vault)로 아카이브하도록 Amazon Data Lifecycle Manager(Amazon DLM)를 구성합니다. 개별 파일을 검색하려면 S3 Glacier 검색 요청을 사용합니다.",
    "B": "다른 AWS 리전에 두 번째 EFS 파일 시스템을 생성합니다. 데이터를 백업 파일 시스템으로 복사하도록 AWS DataSync 를 구성합니다. 백업 EFS 파일 시스템에서 복사하여 파일을 복구합니다.",
    "C": "Amazon EFS 에서 AWS Backup 을 활성화하여 파일 시스템을 Amazon S3 Glacier 보관소로 백업합니다. 개별 파일을 검색하려면 S3 Glacier 검색 요청을 사용합니다.",
    "D": "Amazon EFS 에서 AWS Backup 을 활성화하여 파일 시스템을 백업 보관소(backup vault)로 백업합니다. 개별 파일을 검색하려면 부분 복원(partial restore) 작업을 사용합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Backup 은 Amazon EFS 에 대한 기본 통합 백업 및 복원 솔루션을 제공한다. AWS Backup 의 EFS 복원 기능에는 '항목 수준 복원(Item-level restore / Partial restore)' 기능이 포함되어 있어, 전체 파일 시스템을 복원할 필요 없이 백업 보관소로부터 손상되거나 삭제된 특정 파일 또는 폴더만 지정하여 신속하고 비용 효율적으로 복구할 수 있다. DLM(A)은 EBS 및 EBS 스냅샷 관리용 서비스이며, DataSync 기반 실시간 복제(B)는 오염된 데이터까지 즉시 복제하므로 과거 특정 파일 복원에 적합하지 않다. Glacier 복원 방식(C)은 파일 단위 검색 및 복원 속도 측면에서 신속성을 만족하기 어렵다."
  },
  {
   "num": 141,
   "question": "CloudOps 엔지니어가 AWS CloudFormation 을 사용하여 프로덕션 VPC 에 서버리스 애플리케이션을 배포했습니다. 이 애플리케이션은 AWS Lambda 함수, Amazon DynamoDB 테이블 및 Amazon API Gateway API 로 구성되어 있습니다. CloudOps 엔지니어는 DynamoDB 테이블을 삭제하지 않고 AWS CloudFormation 스택을 삭제해야 합니다. CloudOps 엔지니어가 AWS CloudFormation 스택을 삭제하기 전에 취해야 할 조치는 무엇입니까?",
   "options": {
    "A": "AWS CloudFormation 스택의 DynamoDB 리소스에 Retain 삭제 정책(DeletionPolicy)을 추가합니다.",
    "B": "AWS CloudFormation 스택의 DynamoDB 리소스에 Snapshot 삭제 정책(DeletionPolicy)을 추가합니다.",
    "C": "AWS CloudFormation 스택에 스택 삭제 방지(termination protection)를 활성화합니다.",
    "D": "dynamodb:DeleteTable 작업에 대해 Deny 문을 포함하도록 애플리케이션의 IAM 정책을 업데이트합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS CloudFormation 에서 스택을 삭제할 때 특정 리소스를 유지하고 삭제 대상에서 제외하려면 해당 리소스 정의에 `DeletionPolicy: Retain` 속성을 지정해야 한다. 이를 통해 스택이 삭제되더라도 DynamoDB 테이블과 저장된 데이터는 인프라에 그대로 보존된다. `Snapshot` 삭제 정책(B)은 EBS 볼륨, RDS, ElastiCache 등 스냅샷을 지원하는 일부 리소스에만 적용되며, 스택 삭제 방지(C)는 스택 삭제 시도 자체를 전체적으로 거부한다. IAM 정책(D)을 수정하는 것은 스택 해제 과정에서 생성된 리소스를 안전하게 보존하는 제어 메커니즘이 아니다."
  },
  {
   "num": 142,
   "question": "한 회사가 AWS 에서 전자 상거래 애플리케이션을 실행하고 있습니다. 애플리케이션은 Amazon Aurora DB 클러스터에 열려 있지만 유휴 상태(idle)인 많은 연결을 유지합니다. 최고 사용량 동안 데이터베이스에 \"Too many connections\" 오류 메시지가 발생하고 데이터베이스 클라이언트에서도 오류가 발생합니다. 이 오류를 해결할 솔루션은 무엇입니까?",
   "options": {
    "A": "데이터베이스의 읽기 용량 단위(RCU) 및 쓰기 용량 단위(WCU)를 늘립니다.",
    "B": "RDS Proxy 를 구성합니다. RDS Proxy 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다.",
    "C": "DB 인스턴스에 대한 향상된 네트워킹(enhanced networking)을 활성화합니다.",
    "D": "버스터블(burstable) 인스턴스 유형을 사용하도록 DB 클러스터를 수정합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "\"Too many connections\" 오류는 데이터베이스에 동시 연결된 커넥션 수 가 자원 한계에 도달했을 때 발생한다. RDS Proxy 는 애플리케이션과 RDS/Aurora 데이터베이스 사이에서 커넥션 풀링(Connection Pooling)을 관리하여 기존의 열려 있는 유휴 연결을 효율적으로 재사용하고 데이터베이스 연결을 다중화한다. 이를 통해 데이터베이스의 커넥션 고갈을 방지할 수 있다. RCU/WCU(A)는 Amazon DynamoDB 전용 속성이고, 향상된 네트워킹(C)이나 인스턴스 유형 변경(D)은 데이터베이스 애플리케이션 커넥션 풀 관리 한계를 직접적으로 해결하지 못한다."
  },
  {
   "num": 143,
   "question": "한 금융 회사가 주기적으로 교체(rotate)되는 Amazon RDS 자격 증명을 저장하기 위해 AWS Secrets Manager 를 사용합니다. 데이터베이스 팀은 보안 정책 규정을 준수하기 위해 자격 증명이 교체될 때 알림을 받아야 합니다. 데이터베이스 팀은 알림을 위한 Amazon Simple Notification Service(Amazon SNS) 주제를 생성했습니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "RotationSucceeded 결과를 가진 RotateSecret API 호출에 대한 AWS CloudTrail 이벤트를 매칭하도록 Amazon EventBridge 규칙을 생성합니다. 매칭되는 이벤트를 SNS 주제로 라우팅하도록 규칙을 구성합니다.",
    "B": "AWS Secrets Manager 에서 비밀 교체에 대한 알림을 활성화합니다. 비밀이 교체될 때 SNS 주제로 알림을 게시하도록 Secrets Manager 를 구성합니다.",
    "C": "RotationSucceeded 이벤트에 대해 Amazon CloudWatch 로그를 필터링하도록 Amazon EventBridge 를 사용합니다. 모든 매칭에 대한 알림을 SNS 주제로 라우팅합니다.",
    "D": "RotationSucceeded 이벤트를 필터링하도록 Amazon CloudWatch Logs 를 사용합니다. 모든 매칭에 대한 알림을 SNS 주제로 라우팅합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Secrets Manager 에서 자격 증명이 성공적으로 교체되면 `RotateSecret` API 호출과 함께 `RotationSucceeded` 결과가 AWS CloudTrail 에 이벤트로 기록된다. Amazon EventBridge 규칙을 작성하여 CloudTrail 에서 전달되는 이벤트 패턴 중 해당 조건을 매칭하고, 이벤트를 기존 SNS 주제로 라우팅하도록 지정하면 교체 성공 시 실시간 이메일/문자 알림을 손쉽게 받을 수 있다. Secrets Manager 자체에는 별도의 direct SNS 알림 설정 탭이 내장되어 있지 않다(B)."
  },
  {
   "num": 144,
   "question": "CloudOps 엔지니어가 모든 회사 Amazon S3 버킷에 대한 퍼블릭 액세스를 차단했습니다. CloudOps 엔지니어는 향후 S3 버킷이 퍼블릭 읽기 가능 상태가 될 때 알림을 받고 싶어 합니다. 이 요구 사항을 충족하는 가장 운영 효율적인 방법은 무엇입니까?",
   "options": {
    "A": "각 S3 버킷의 퍼블릭 액세스 설정을 주기적으로 확인하는 AWS Lambda 함수를 생성합니다. 알림을 보내도록 Amazon SNS 를 설정합니다.",
    "B": "각 S3 버킷의 퍼블릭 액세스 설정을 확인하기 위해 S3 API 를 사용하는 크론(cron) 스크립트를 생성합니다. 알림을 보내도록 Amazon SNS 를 설정합니다.",
    "C": "각 S3 버킷에 대해 S3 이벤트 알림을 활성화합니다. S3 이벤트 알림을 Amazon SNS 주제에 구독시킵니다.",
    "D": "AWS Config 에서 s3-bucket-public-read-prohibited 관리형 규칙을 활성화합니다. AWS Config 규칙을 Amazon SNS 주제에 구독시킵니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Config 관리형 규칙인 `s3-bucket-public-read-prohibited`를 사용하면 S3 버킷에 퍼블릭 읽기 권한이 부여되는지 실시간으로 자동 감지 및 평가할 수 있다. 이 Config 규칙의 비준수(Non-compliant) 상태 이벤트를 Amazon SNS 주제로 라우팅하도록 구성하면 커스텀 코드 작성이나 인프라 유지 보수 없이 가장 운영 효율적으로 알림 시스템을 구축할 수 있다. 커스텀 스크립트나 Lambda(A, B)는 별도의 개발 오버헤드가 발생하며, S3 이벤트 알림(C)은 버킷 정책/ACL 수준 변경이 아닌 객체 레벨(생성, 삭제 등) 이벤트 처리 전용이다."
  },
  {
   "num": 145,
   "question": "한 회사가 다음과 같은 다중 계정 AWS 환경을 보유하고 있습니다: * 모든 IAM 사용자 및 그룹이 포함된 중앙 자격 증명(identity) 계정 * IAM 역할이 포함된 여러 멤버 계정 SysOps 관리자는 특정 IAM 그룹이 멤버 계정 중 하나에 있는 역할을 맡을(assume) 수 있도록 권한을 부여해야 합니다. SysOps 관리자는 이 작업을 어떻게 완료해야 합니까?",
   "options": {
    "A": "멤버 계정에서 역할의 정책에 sts:AssumeRole 권한을 추가합니다. 자격 증명 계정에서 멤버 계정의 계정 번호를 지정하는 신뢰 정책(trust policy)을 그룹에 추가합니다.",
    "B": "멤버 계정에서 역할의 신뢰 정책(trust policy)에 그룹 Amazon 리소스 이름(ARN)을 추가합니다. 자격 증명 계정에서 sts:AssumeRole 권한이 포함된 인라인 정책을 그룹에 추가합니다.",
    "C": "멤버 계정에서 역할의 신뢰 정책(trust policy)에 그룹 Amazon 리소스 이름(ARN)을 추가합니다. 자격 증명 계정에서 sts:PassRole 권한이 포함된 인라인 정책을 그룹에 추가합니다.",
    "D": "멤버 계정에서 역할의 인라인 정책에 그룹 Amazon 리소스 이름(ARN)을 추가합니다. 자격 증명 계정에서 sts:AssumeRole 권한이 포함된 신뢰 정책을 그룹에 추가합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "계정 간(Cross-account) IAM 역할을 전환하여 위임받으려면 타깃(멤버) 계정과 원천(자격 증명) 계정 양쪽에 적절한 IAM 설정이 필요하다. 타깃 계정의 IAM 역할에는 수임 주체(Principal)로 자격 증명 계정의 IAM 그룹 ARN 을 허용하는 신뢰 정책(Trust Policy)을 등록해야 하고, 원천 계정의 IAM 그룹에는 해당 역할을 위임받을 수 있도록 `sts:AssumeRole` 작업 및 해당 역할 ARN 을 허용하는 IAM 정책(인라인 또는 관리형 정책)을 연결해야 한다. IAM 그룹에는 신뢰 정책(A, D)을 첨부할 수 없으며, `sts:PassRole`(C)은 AWS 서비스에 역할을 전달할 때 사용되는 권한이다."
  },
  {
   "num": 146,
   "question": "CloudOps 엔지니어가 프로덕션 데이터베이스의 사본을 마이그레이션 계정과 공유하고자 합니다. 프로덕션 데이터베이스는 Amazon RDS DB 인스턴스에서 호스팅되며, production-rds-key 라는 별칭(alias)을 가진 AWS Key Management Service(AWS KMS) 키로 저장 시 암호화(encryption at rest)되어 있습니다. CloudOps 엔지니어가 가장 적은 관리 오버헤드로 이러한 요구 사항을 충족하려면 무엇을 해야 합니까?",
   "options": {
    "A": "프로덕션 계정에서 RDS DB 인스턴스의 스냅샷을 생성합니다. production-rds-key KMS 키의 키 정책(key policy)을 수정하여 마이그레이션 계정의 루트 사용자에게 액세스 권한을 부여합니다. 마이그레이션 계정과 스냅샷을 공유합니다.",
    "B": "마이그레이션 계정에 RDS 읽기 전용 복제본(read replica)을 생성합니다. production- rds-key KMS 키를 마이그레이션 계정으로 복제하도록 KMS 키 정책을 구성합니다.",
    "C": "프로덕션 계정에서 RDS DB 인스턴스의 스냅샷을 생성합니다. 마이그레이션 계정과 스냅샷을 공유합니다. 마이그레이션 계정에서 동일한 별칭을 가진 새 KMS 키를 생성합니다.",
    "D": "네이티브 데이터베이스 툴셋을 사용하여 RDS DB 인스턴스를 Amazon S3 로 내옵니다. 프로덕션 계정과 마이그레이션 계정 간 교차 계정 액세스를 위한 S3 버킷 및 S3 버킷 정책을 생성합니다. 네이티브 데이터베이스 툴셋을 사용하여 Amazon S3 에서 새 RDS DB 인스턴스로 데이터베이스를 가져옵니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "KMS 고객 관리형 키(CMK)로 암호화된 Amazon RDS 스냅샷을 타 계정과 공유하려면, 해당 KMS 키의 키 정책(Key Policy)을 수정하여 대상 계정(마이그레이션 계정)에 복호화 및 액세스 권한을 허용하도록 설정한 후 스냅샷을 공유해야 한다. 타 계정에서 이 공유된 스냅샷을 복사하거나 데이터베이스로 복원할 수 있으므로 A 가 가장 적은 관리 오버헤드로 요구 사항을 충족한다. 서로 다른 계정 간에 읽기 전용 복제본을 직접 생성하거나 KMS 키를 직접 '복제'하는 기능은 존재하지 않으며(B), 별칭(Alias)이 동일하다고 해서 스냅샷이 복호화되는 것은 아니다(C). 네이티브 툴셋을 통한 S3 내보내기/가져오기(D)는 불필요한 관리 오버헤드를 크게 유발한다."
  },
  {
   "num": 147,
   "question": "한 회사가 ap-southeast-2 리전에 암호화된 Amazon S3 버킷을 호스팅하고 있습니다. eu-west-2 리전의 사용자는 인터넷을 통해 이 S3 버킷에 액세스합니다. eu-west-2 의 사용자는 대용량 파일에 대해 S3 버킷과의 업로드 및 다운로드 전송 속도가 더 빨라져야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "ap-southeast-2 로부터의 S3 복제(replication) 대상으로 사용할 S3 액세스 포인트를 eu-west-2 에 생성합니다. 모든 사용자가 새 S3 액세스 포인트로 전환하도록 합니다.",
    "B": "지리 위치 라우팅 정책(geolocation routing policy)을 사용하여 Amazon Route 53 호스팅 영역을 생성합니다. S3 웹사이트 엔드포인트로의 별칭(Alias) 옵션을 선택합니다. ap-southeast-2 에 있는 S3 버킷을 소스 버킷으로 지정합니다.",
    "C": "eu-west-2 에 새 S3 버킷을 생성합니다. ap-southeast-2 의 모든 콘텐츠를 eu-west- 2 의 새 버킷으로 복사합니다. S3 액세스 포인트를 생성하고 두 버킷에 모두 연결합니다. 사용자가 새 S3 액세스 포인트를 사용하도록 합니다.",
    "D": "S3 버킷에서 S3 Transfer Acceleration 을 구성하고 활성화합니다. 액세스를 위해 새 S3 가속 엔드포인트(acceleration endpoint)의 도메인 이름을 사용합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "서로 다른 대륙/리전 간(eu-west-2 사용자 ↔ ap-southeast-2 S3 버킷) 대용량 파일 전송 시 네트워크 지연을 줄이고 속도를 대폭 향상시키는 표준 기능은 S3 Transfer Acceleration 이다. 이 기능은 전 세계 AWS CloudFront 엣지 로케이션 네트워크를 활용하여, 최단 거리의 엣지 로케이션을 거쳐 AWS 최적화 백본 네트워크로 데이터를 고속 전송한다. S3 액세스 포인트(A, C)나 Route 53 지리 위치 라우팅(B)은 장거리 데이터 전송 처리량 자체를 가속화하는 솔루션이 아니다."
  },
  {
   "num": 148,
   "question": "한 회사가 AWS 계정 전반에서 작업을 자동화하기 위해 AWS Systems Manager 를 사용합니다. 회사는 문제를 탐지하기 위해 모니터링 도구를 사용합니다. 회사는 문제를 해결하는 AWS Lambda 함수를 실행하는 Systems Manager Automation 런북(runbook)을 생성합니다. 초기에는 회사가 런북을 수동으로 실행했습니다. 이제 회사는 모니터링 도구가 문제를 탐지할 때마다 런북 실행을 자동화하고자 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "모니터링 도구가 탐지 결과(findings)를 Amazon EventBridge 에 게시하도록 구성합니다. 모니터링 도구의 이벤트에 대응하여 런북을 호출하는 EventBridge 규칙을 생성합니다.",
    "B": "모니터링 도구가 탐지 결과를 Amazon SNS 주제로 전송하도록 구성합니다. SNS 주제에 런북을 구독시킵니다. 메시지가 수신되면 런북을 호출합니다.",
    "C": "모니터링 도구가 탐지 결과를 Amazon CloudWatch Logs 에 기록하도록 구성합니다. 새 로그 항목이 탐지될 때 런북을 호출하는 CloudWatch Logs 서브스크립션 필터를 생성합니다.",
    "D": "AWS Config 가 리소스를 평가하고 구성 변경 사항을 Amazon EventBridge 에 게시하도록 구성합니다. 구성 변경 이벤트에 대응하여 런북을 호출하는 규칙을 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "외부 또는 내부 모니터링 도구의 탐지 이벤트를 기반으로 Systems Manager Automation 런북을 자동 트리거하는 가장 효과적인 방법은 Amazon EventBridge 를 사용하는 것이다. 모니터링 도구에서 탐지한 결과를 EventBridge 이벤트 버스로 전달하고, 해당 이벤트 패턴을 감지하여 Systems Manager Automation 런북을 대상(Target)으로 실행하는 EventBridge 규칙을 구성하면 완벽한 자동화 파이프라인이 구현된다. SNS 주제에는 SSM 런북을 직접 구독 대상(B)으로 연결할 수 없으며, CloudWatch Logs 서브스크립션 필터(C) 역시 SSM 런북을 직접 호출하는 타깃을 지원하지 않는다."
  },
  {
   "num": 149,
   "question": "한 회사가 Amazon EC2 인스턴스에서 실행되는 비프로덕션 애플리케이션을 보유하고 있습니다. EC2 인스턴스에는 Amazon CloudWatch 에이전트가 설치되어 있습니다. 애플리케이션에는 무작위로 임시 디스크 공간을 과도하게 사용하여 디스크 용량을 100% 채우는 프로세스가 포함되어 있습니다. CloudOps 엔지니어는 디스크 용량이 100%에 도달한 후 EC2 인스턴스를 자동으로 재시작해야 합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "EC2 인스턴스에 대한 CloudWatch 경보(alarm)를 생성합니다. CloudWatch 경보에 반응하여 EC2 인스턴스를 재시작하는 Amazon EventBridge 이벤트 규칙을 생성합니다.",
    "B": "EC2 인스턴스에 대한 CloudWatch 경보를 생성합니다. CloudWatch 경보에 반응하여 EC2 인스턴스를 재시작하는 Amazon SES 알림을 생성합니다.",
    "C": "EC2 인스턴스를 재시작하는 AWS Lambda 함수를 생성합니다. Amazon EventBridge 를 사용하여 Lambda 함수를 호출하는 CloudWatch 경보를 생성합니다.",
    "D": "EC2 인스턴스를 재시작하는 AWS Lambda 함수를 생성합니다. EC2 상태 검사를 사용하여 Lambda 함수를 호출합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "CloudWatch 에이전트를 통해 수집되는 디스크 사용률 지표를 기반으로 디스크 용량 100% 도달 시 알람을 발생하는 CloudWatch 경보를 생성하고, 이 경보 상태 변경 이벤트를 감지하여 EC2 재시작(Reboot) 동작을 실행하는 EventBridge 규칙을 연결하는 것이 가장 운영 효율적이다. 별도의 Lambda 코드 작성 없이 AWS 서비스 간 기본 이벤트 연동만으로 구현 가능하다. 재시작 코드 작성을 위해 Lambda 함수를 도입하는 방식(C, D)은 불필요한 개발 및 운영 오버헤드를 발생시키며, SES(B)는 이메일 발송 전용 서비스이다."
  },
  {
   "num": 150,
   "question": "이전에는 15 분 만에 실행되던 한 회사의 보고서 작성 작업이 현재는 실행에 1 시간이 걸리고 있습니다. 애플리케이션이 보고서를 생성하며, 해당 애플리케이션은 Amazon EC2 인스턴스에서 실행되고 Amazon RDS for MySQL 데이터베이스에서 데이터를 추출합니다. CloudOps 엔지니어가 RDS 인스턴스의 Amazon CloudWatch 대시보드를 확인한 결과, 보고서가 실행되지 않을 때도 읽기 IOPS(Read IOPS) 지표가 높음을 발견했습니다. CloudOps 엔지니어는 RDS 인스턴스의 성능과 가용성을 향상시켜야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "RDS 인스턴스 앞에 Amazon ElastiCache 클러스터를 구성합니다. ElastiCache 클러스터를 쿼리하도록 보고서 작업을 업데이트합니다.",
    "B": "RDS 읽기 전용 복제본(read replica)을 배포합니다. 리더 엔드포인트(reader endpoint)를 쿼리하도록 보고서 작업을 업데이트합니다.",
    "C": "Amazon CloudFront 배포를 생성합니다. RDS 인스턴스를 오리진으로 설정합니다. CloudFront 배포를 쿼리하도록 보고서 작업을 업데이트합니다.",
    "D": "RDS 인스턴스의 크기를 늘립니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "데이터베이스의 읽기 I/O 부하가 과중하여 성능 및 가용성이 저하되는 문제를 해결하는 모범 사례 솔루션은 Amazon RDS 읽기 전용 복제본(Read Replica)을 배포하는 것이다. 대규모 쿼리를 수행하는 보고서(Reporting) 작업의 트래픽을 주 데이터베이스 대신 읽기 전용 복제본의 리더 엔드포인트(Reader Endpoint)로 분산시킴으로써 주 데이터베이스의 읽기 부하를 줄이고 전체 시스템의 성능과 가용성을 동시에 높일 수 있다. ElastiCache(A)는 인메모리 Caching 도구로 복잡한 SQL 집계 리포팅 쿼리에 직접 대응하기 어렵고 애플리케이션 코드 수정 범위가 크며, CloudFront(C)는 웹 콘텐츠 전송 네트워크(CDN)로 DB 쿼리 오리진에 적합하지 않다. 인스턴스 스케일 업(D)은 단일 장애점(SPOF) 문제를 완화하거나 가용성을 끌어올리지 못한다."
  },
  {
   "num": 151,
   "question": "회사가 EC2 Image Builder 파이프라인의 일부로 커스텀 Amazon Machine Image(AMI)를 사용합니다. CloudOps 엔지니어는 커스텀 AMI 의 지원 수명이 몇 달 후 만료된다는 것을 확인했습니다. CloudOps 엔지니어는 최신 AMI ID 를 사용하도록 EC2 Image Builder 파이프라인을 업데이트해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "기존 EC2 Image Builder 레시피의 새 버전을 생성합니다. AMI ID 세부 정보를 업데이트합니다. 새 레시피 버전을 사용하도록 파이프라인을 업데이트합니다.",
    "B": "기존 AMI 의 수명 주기 규칙에서 AMI 를 비활성화합니다. 최신 AMI ID 세부 정보로 기존 EC2 Image Builder 레시피를 업데이트합니다. 파이프라인을 재실행합니다.",
    "C": "최신 AMI ID 세부 정보를 사용하도록 빌드 구성 요소를 업데이트합니다.",
    "D": "파이프라인의 시작 템플릿에서 AMI ID 를 교체합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "EC2 Image Builder 레시피(Recipe)는 생성 후 수정이 불가능한 불변(Immutable) 객체이므로, 레시피에 정의된 부모 AMI(Base AMI) 정보를 직접 수정할 수 없다. 따라서 최신 AMI ID 를 적용하려면 기존 레시피의 새 버전(Version)을 생성하여 부모 AMI ID 를 업데이트한 후, Image Builder 파이프라인이 이 새로 생성된 레시피 버전을 참조하도록 구성해야 한다. 수명 주기 규칙(B)은 레시피 구조를 직접 변경하지 못하며, 빌드 구성 요소(C)는 오직 소프트웨어 설치 및 검증 스크립트 실행용이다. 시작 템플릿(D)은 빌드 프로세스용 인프라 설정 항목으로 베이스 AMI 정의 영역이 아니다."
  },
  {
   "num": 152,
   "question": "한 소매 회사가 웹 애플리케이션을 실행합니다. 애플리케이션은 Application Load Balancer(ALB)를 사용하여 2 개의 가용 영역에 있는 여러 Amazon EC2 인스턴스로 트래픽을 분산합니다. 플래시 세일 기간 동안 애플리케이션에 높은 트래픽이 발생합니다. 회사는 모든 정상(healthy) 인스턴스에 걸쳐 요청이 고르게 분산되도록 해야 합니다. 또한 회사는 장바구니 기능을 위해 세션 유지 관리(session persistence)가 필요합니다. 가장 적은 관리 노력으로 이러한 요구 사항을 충족하는 구성은 무엇입니까?",
   "options": {
    "A": "라운드 로빈 알고리즘을 사용하도록 ALB 타겟 그룹을 구성합니다. 고정성(stickiness) 및 교차 가용 영역 로드 밸런싱(cross-zone load balancing)을 활성화합니다.",
    "B": "ALB 를 Network Load Balancer 로 전환합니다. 최소 미처리 요청 알고리즘을 사용하도록 타겟 그룹을 수정합니다. 고정성을 활성화합니다. 교차 가용 영역 로드 밸런싱을 비활성화합니다.",
    "C": "가중치 기반 라운드 로빈 알고리즘을 사용하도록 ALB 타겟 그룹을 구성합니다. 세션 데이터를 Amazon DynamoDB 에 저장하는 AWS Lambda 함수를 사용하여 세션 유지를 구현합니다.",
    "D": "장바구니 요청을 고정 세션이 있는 전용 타겟 그룹으로 전달하도록 경로 기반 라우팅이 포함된 ALB 리스너를 구성합니다. 두 번째 타겟 그룹에는 고정성 없이 라운드 로빈 알고리즘을 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "ALB 에서 모든 가용 영역의 정상 인스턴스에 요청을 균등하게 분산하려면 교차 가용 영역 로드 밸런싱(Cross-zone load balancing)을 활성화해야 하며, 기본 라운드 로빈(Round robin) 알고리즘을 사용하는 것이 적합하다. 또한 장바구니 기능 유지를 위한 세션 연속성은 ALB 타겟 그룹 레벨에서 세션 고정성(Stickiness)을 활성화하는 것만으로 가장 적은 관리 노력으로 구현할 수 있다. NLB 변경(B)이나 Lambda/DynamoDB 기반 세션 외부화 코드 구현(C), 복잡한 경로 기반 분리(D)는 모두 불필요한 관리 오버헤드를 유발한다."
  },
  {
   "num": 153,
   "question": "한 회사가 다중 계정 AWS 환경을 관리하기 위해 AWS Organizations 의 조직을 사용합니다. 회사는 Amazon EBS 기반의 새 Amazon Machine Image(AMI)를 생성합니다. 회사는 조직 전체에서 이 AMI 를 공유합니다. 직원들은 전체 조직에서 새 Linux 기반 Amazon EC2 인스턴스를 시작할 때 이 AMI 를 사용해야 합니다. 회사의 애플리케이션 계정 중 하나에서 한 직원이 새 AMI 를 사용하여 새 워크로드를 시작합니다. EC2 인스턴스가 시작되었으나 즉시 종료(terminated immediately)되었습니다. 인스턴스가 완전히 부팅되지 않은 가장 유력한 원인은 무엇입니까?",
   "options": {
    "A": "인스턴스를 시작한 사용자에게 애플리케이션 계정 내의 ec2:RunInstances 권한이 없습니다.",
    "B": "회사가 EC2 인스턴스를 시작한 사용자가 액세스할 수 없는 AWS KMS 키를 사용하여 AMI 를 암호화했습니다.",
    "C": "EC2 인스턴스를 시작한 사용자가 애플리케이션 계정에서 인스턴스를 시작하는 것을 거부하는 서비스 제어 정책(SCP)이 존재합니다.",
    "D": "사용자가 인터넷에 액세스할 수 없는 서브넷에 EC2 인스턴스를 시작했습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "EC2 인스턴스가 생성 단계로 진입했다가 즉시 종료(terminated immediately)되는 대표적인 원인은 EBS 볼륨 또는 AMI 복호화에 필요한 AWS KMS 키에 대한 권한 부족이다. AMI 가 KMS 키로 암호화되어 있을 때 인스턴스를 시작하는 사용자/역할 또는 EC2 서비스가 해당 KMS 키 사용 권한(`kms:Decrypt`, `kms:CreateGrant` 등)을 가지고 있지 않으면 EBS 볼륨을 복호화하여 연결할 수 없으므로 인스턴스가 즉시 종료된다. IAM 권한 부족(A)이나 SCP 차단(C)의 경우 API 호출 자체가 즉시 거부(`UnauthorizedOperation`)되어 인스턴스 시작 단계조차 진입하지 못한다. 인터넷 연결 미비(D)는 부팅 실패 원인이 아니다."
  },
  {
   "num": 154,
   "question": "한 회사가 여러 AWS 리전에 애플리케이션 인스턴스 및 관련 인프라를 배포해야 합니다. 회사는 이 목표를 달성하기 위해 단일 AWS CloudFormation 템플릿을 사용하고자 합니다. 회사는 AWS Organizations 를 사용하며 중앙 관리 계정에서 이 템플릿을 관리하고 실행하고자 합니다. 이러한 요구 사항을 충족하기 위해 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "Amazon S3 에 저장되는 CloudFormation 템플릿을 생성합니다. S3 버킷에 교차 리전 복제(CRR)를 구성합니다. 입력 템플릿 파라미터에서 필요한 계정 및 원격 리전을 참조합니다.",
    "B": "중앙 관리 계정에서 대상 리전의 Amazon S3 버킷으로부터 CloudFormation 중첩 스택(nested stacks)을 로드하는 CloudFormation 기본 템플릿을 생성합니다.",
    "C": "중앙 관리 계정의 기본 템플릿을 사용하여 CloudFormation 중첩 스택을 생성합니다. 중첩 스택 배포를 위해 필요한 계정 및 리전을 구성합니다.",
    "D": "서비스 관리형 권한(service-managed permissions)이 포함된 CloudFormation 스택 세트(StackSet)를 생성합니다. 중앙 관리 계정에서 필요한 계정 및 리전으로 스택 세트를 배포합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "단일 CloudFormation 템플릿을 사용하여 다중 계정 및 다중 리전에 인프라를 일괄 배포 및 관리하는 전용 기능은 AWS CloudFormation StackSets 이다. AWS Organizations 환경에서는 서비스 관리형 권한(service-managed permissions) 모델을 적용한 스택 세트를 구성함으로써, 중앙 관리 계정에서 조직 내의 지정된 타깃 계정들과 리전들로 스택을 자동으로 신속하게 배포하고 수명 주기를 중앙 통제할 수 있다. 중첩 스택(B, C)은 단일 계정/단일 리전 내의 리소스 모듈화용이며 다중 계정/다중 리전 배포 오케스트레이션을 직접 제공하지 못한다."
  },
  {
   "num": 155,
   "question": "한 회사가 Amazon RDS for MySQL DB 인스턴스에서 데이터베이스를 실행합니다. 회사는 모든 DB 인스턴스에 대해 12 시간마다 데이터베이스 백업을 생성해야 합니다. 회사는 백업을 5 년 동안 보존해야 합니다. CloudOps 엔지니어는 데이터베이스 백업을 생성하고 보존하는 자동화된 솔루션을 개발해야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "RDS 자동 백업을 활성화합니다. 백업 빈도를 12 시간으로 설정합니다. 보존 기간을 5 년으로 설정합니다.",
    "B": "RDS CreateDBSnapshot API 작업을 호출하도록 Amazon EventBridge 규칙을 구성합니다. 백업 빈도를 12 시간으로 설정합니다. 보존 기간을 5 년으로 설정합니다.",
    "C": "12 시간마다 RDS CreateDBSnapshot API 작업을 호출하도록 AWS Lambda 함수를 구성합니다. 스냅샷을 Amazon S3 로 복사합니다. 5 년 동안 스냅샷을 보존하도록 S3 수명 주기 정책을 설정합니다.",
    "D": "AWS Backup 을 사용하여 Amazon RDS 에서 자동 백업 작업을 생성합니다. 백업 빈도를 12 시간으로 설정합니다. 보존 기간을 5 년으로 설정합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon RDS 의 기본 자동 백업(Automated Backups)은 최대 보존 기간이 35 일로 제한되어 있어 5 년 보존 요구 사항을 만족할 수 없다(A). AWS Backup 은 중앙 제어형 서비스로 백업 계획(Backup Plan)을 통해 12 시간 주기 백업 실행 스케줄 및 5 년 장기 보존 기간 설정을 코드 작성 없이 선언적으로 구성할 수 있으므로 운영 오버헤드가 가장 적다. EventBridge 나 Lambda 를 이용한 커스텀 API 스냅샷 수동 호출 방식(B, C)은 스냅샷 생명주기 관리 및 삭제 모니터링 코드를 직접 개발/유지보수해야 하므로 운영 부담이 크다."
  },
  {
   "num": 156,
   "question": "한 회사가 퍼블릭 SSL/TLS 인증서를 관리하기 위해 AWS Certificate Manager(ACM)를 사용하고 있습니다. CloudOps 엔지니어는 인증서 만료까지 14 일 미만으로 남았을 때 이메일 알림을 보내야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "모든 ACM 인증서의 인증서 만료를 모니터링하는 Amazon CloudWatch 커스텀 지표를 생성합니다. 이벤트 소스가 aws.cloudwatch 인 Amazon EventBridge 규칙을 생성합니다. DaysToExpiry 지표가 14 미만인 경우 대상 Amazon SNS 주제로 이벤트를 전송하도록 규칙을 구성합니다. 적절한 이메일 주소를 SNS 주제에 구독시킵니다.",
    "B": "이벤트 소스가 aws.acm 인 Amazon EventBridge 규칙을 생성합니다. 모든 ACM 인증서에 대해 DaysToExpiry 지표를 평가하도록 규칙을 구성합니다. DaysToExpiry 가 14 미만인 경우 대상 Amazon SNS 주제로 이벤트를 전송하도록 규칙을 구성합니다. 적절한 이메일 주소를 SNS 주제에 구독시킵니다.",
    "C": "모든 ACM 인증서의 DaysToExpiry 지표를 표시하는 Amazon CloudWatch 대시보드를 생성합니다. DaysToExpiry 가 14 미만인 경우 적절한 이메일 주소로 이메일 메시지를 보냅니다. Amazon SNS 주제로 게시하기 위해 사전 정의된 CLI 명령을 실행하여 이메일 메시지를 보냅니다.",
    "D": "이벤트 소스가 aws.acm 인 Amazon EventBridge 규칙을 생성합니다. 모든 ACM 인증서에 대해 DaysToExpiry 지표를 평가하도록 규칙을 구성합니다. 사전 정의된 이메일 템플릿을 사용하는 대상 SMS 자격 증명을 구성합니다. DaysToExpiry 가 14 미만인 경우 대상 SMS 자격 증명으로 이벤트를 전송하도록 규칙을 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "ACM 은 인증서 만료 예정 이벤트를 Amazon EventBridge 로 기본 자동 전송한다. 이벤트 소스를 `aws.acm`으로 지정하고 세부 이벤트 항목 내의 `DaysToExpiry` 수치가 14 일 미만 조건인 EventBridge 규칙을 생성한 후 Amazon SNS 주제를 타깃으로 연결하는 것이 별도의 개발이나 커스텀 지표 작성 없이 가장 적은 운영 오버헤드로 알림을 구현하는 방법이다. CloudWatch 커스텀 지표를 별도로 생성하는 방식(A)은 불필요한 개발 및 운영 오버헤드를 발생시키며, 대시보드 및 CLI 수동 실행(C)은 자동화된 모니터링 솔루션이 아니다."
  },
  {
   "num": 157,
   "question": "한 회사가 여러 AWS Lambda 함수를 사용하는 중요한 서버리스 애플리케이션을 보유하고 있습니다. 각 Lambda 함수는 자체 Amazon CloudWatch Logs 로그 그룹에 매일 1GB 의 로그 데이터를 생성합니다. 회사의 보안팀이 모든 로그 그룹에 걸쳐 유형별로 그룹화된 애플리케이션 오류 건수를 요청합니다. CloudOps 엔지니어가 이 요구 사항을 충족하기 위해 해야 할 조치는 무엇입니까?",
   "options": {
    "A": "stats 명령과 count 함수를 사용하는 CloudWatch Logs Insights 쿼리를 수행합니다.",
    "B": "groupby 키워드와 count 함수를 사용하는 CloudWatch Logs 검색을 수행합니다.",
    "C": "SELECT 및 GROUP BY 키워드를 사용하는 Amazon Athena 쿼리를 수행합니다.",
    "D": "SELECT 및 GROUP BY 키워드를 사용하는 Amazon RDS 쿼리를 수행합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "CloudWatch Logs Insights 는 여러 로그 그룹에 걸쳐 로그 데이터를 대화형으로 빠르게 검색하고 분석할 수 있는 대시보드 쿼리 엔진이다. `stats count(*) by [error_type]` 형태의 쿼리 구문을 사용하면 지정된 모든 Lambda 로그 그룹에서 발생한 오류 수량을 유형별로 단시간에 그룹화하여 통계를 산출할 수 있다. 기본 Logs 검색(B)에는 `groupby` 키워드가 존재하지 않으며, Athena(C)나 RDS(D)를 활용하는 것은 S3 내보내기나 데이터베이스 로딩 과정이 수반되어 불필요한 운영 복잡성을 유발한다."
  },
  {
   "num": 158,
   "question": "한 회사가 규정 준수 이유로 90 일 동안 모든 Amazon S3 객체를 보존해야 합니다. 또한 회사는 객체에 대한 모든 변경 사항을 90 일 동안 보존해야 합니다. 이에 따라 회사는 버킷에 S3 버전 관리(S3 Versioning)를 활성화합니다. 회사는 보존 기간이 끝난 후에도 S3 객체를 삭제하지 않습니다. 회사는 S3 비용이 증가하고 있음을 확인했습니다. 회사는 스토리지 비용을 절감하고자 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 객체 버전의 보유 기간을 확인하는 AWS Lambda 함수를 작성합니다. 90 일이 지난 객체에 대해 삭제 마커(delete marker)를 생성합니다.",
    "B": "90 일이 지난 S3 객체 버전을 자동으로 삭제하도록 S3 수명 주기 규칙(S3 Lifecycle rule)을 설정합니다.",
    "C": "90 일 후에 S3 버킷 외부로 객체를 마이그레이션하기 위해 AWS Backup 을 사용합니다.",
    "D": "S3 객체 생성 이벤트를 모니터링하기 위해 Amazon EventBridge 를 사용합니다. 90 일 후에 객체를 삭제하도록 AWS Lambda 함수를 실행하도록 스케줄링합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "S3 버전 관리가 활성화된 버킷에서 객체가 변경되면 이전 버전(Noncurrent versions)이 스토리지에 계속 누적되어 비용이 증가하게 된다. S3 수명 주기 규칙(S3 Lifecycle Rule)에서 '이전 버전 만료(NoncurrentVersionExpiration)' 설정을 90 일로 지정하면, 최신 버전 객체는 유지하면서 90 일이 지난 과거 변경 버전들만 별도의 코드 작성이나 운영 오버헤드 없이 자동으로 완전 삭제하여 스토리지 비용을 최소화할 수 있다. Lambda 함수(A, D) 방식은 불필요한 개발 및 실행 비용을 유발한다."
  },
  {
   "num": 159,
   "question": "한 회사가 전송 게이트웨이(Transit Gateway)로 연결된 2 개의 AWS 계정을 보유하고 있습니다. 각 계정에는 동일한 AWS 리전에 하나의 VPC 가 있습니다. 회사는 IP CIDR 블록 대신 보안 그룹 ID 를 참조하여 보안 그룹의 인바운드 및 아웃바운드 규칙을 단순화하고자 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "VPC 피어링 연결을 생성하고 전송 게이트웨이를 제거합니다.",
    "B": "전송 게이트웨이에서 보안 그룹 참조 지원(security group referencing support)을 활성화합니다.",
    "C": "각 전송 게이트웨이 연결(attachment)에서 보안 그룹 참조 지원을 활성화합니다.",
    "D": "각 VPC 에 프라이빗 NAT 게이트웨이를 배포합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Transit Gateway 는 동일 리전 내 연결된 VPC 간에 보안 그룹 참조(Security Group Referencing) 기능을 지원한다. 전송 게이트웨이(Transit Gateway) 자체의 설정에서 보안 그룹 참조 지원 옵션을 활성화(`SecurityGroupReferencingSupport=enable`)하면, 서로 다른 VPC 및 계정에 위치한 보안 그룹 ID 를 인바운드/아웃바운드 규칙의 소스 및 대상으로 직접 참조할 수 있어 IP CIDR 관리의 번거로움을 해결할 수 있다. 이는 개별 연결(Attachment) 단위 설정(C)이 아닌 전송 게이트웨이 속성 수준에서 관리된다."
  },
  {
   "num": 160,
   "question": "한 회사가 Amazon S3 버킷을 생성하는 AWS CloudFormation 템플릿을 보유하고 있습니다. 사용자가 Active Directory 자격 증명으로 회사 AWS 계정에 인증하고 CloudFormation 템플릿 배포를 시도합니다. 그러나 스택 생성에 실패합니다. 이러한 실패를 유발할 수 있는 요인은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "사용자의 IAM 정책이 cloudformation:CreateStack 작업을 허용하지 않습니다.",
    "B": "사용자의 IAM 정책이 cloudformation:CreateStackSet 작업을 허용하지 않습니다.",
    "C": "사용자의 IAM 정책이 s3:CreateBucket 작업을 허용하지 않습니다.",
    "D": "사용자의 IAM 정책이 s3:ListBucket 작업을 명시적으로 거부(deny)합니다.",
    "E": "사용자의 IAM 정책이 s3:PutObject 작업을 명시적으로 거부(deny)합니다."
   },
   "answer": [
    "A",
    "C"
   ],
   "explanation": "CloudFormation 스택을 배포할 때 별도의 서비스 역할(Service Role)을 지정하지 않은 경우, CloudFormation 은 스택을 배포하는 주체(사용자)의 IAM 권한을 그대로 사용하여 API 를 호출한다. 따라서 스택 자체를 생성하기 위한 `cloudformation:CreateStack` 권한(A)과 템플릿에 정의된 S3 버킷 리소스를 실제로 생성하기 위한 `s3:CreateBucket` 권한(C) 중 하나라도 결여되어 있으면 스택 생성이 실패한다. `CreateStackSet`(B)은 다중 계정/리전용 기능이며, `s3:ListBucket`(D)이나 `s3:PutObject`(E) 권한 거부는 버킷 생성 자체의 권한과 직접적인 관련이 없다."
  },
  {
   "num": 161,
   "question": "개발자가 Amazon S3 버킷에 버전 관리를 활성화합니다. 개발자가 버킷에서 쓰기 작업을 수행하려고 시도할 때 HTTP 404 NoSuchKey 오류가 발생합니다. CloudOps 엔지니어는 이 문제를 해결해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 버킷의 버전 관리를 비활성화하고 쓰기 작업을 다시 시도합니다.",
    "B": "버전 관리된 객체에 대한 쓰기 작업을 허용하도록 버킷 정책을 수정합니다.",
    "C": "버전 관리를 활성화한 후 최소 15 분을 기다린 다음 쓰기 작업을 수행합니다.",
    "D": "버킷에서 S3 Transfer Acceleration 을 활성화합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon S3 버킷에 버전 관리를 활성화한 후에는 해당 설정이 내부 모든 노드 및 상태에 전파되어 완전히 적용되기까지 최대 15 분 정도 소요될 수 있다. 전파가 완료되기 전에 즉시 객체 쓰기 또는 수정 작업을 수행하면 최종 일관성 전파 지연으로 인해 HTTP 404 NoSuchKey 오류가 발생할 수 있다. 따라서 버전 관리 설정 적용 후 약 15 분 정도 대기한 뒤 작업을 재시도하는 것이 올바른 해결책이다. 버킷 정책 수정(B)은 권한 오류(403 Access Denied) 시 관련이 있고, Transfer Acceleration(D)은 전송 속도 가속 기능일 뿐이다."
  },
  {
   "num": 162,
   "question": "CloudOps 엔지니어가 비용을 최적화하기 위해 Amazon RDS 인스턴스의 자동 백업을 비활성화해야 합니다. CloudOps 엔지니어가 백업을 비활성화하려고 시도할 때 보존 기간이 1 에서 35 사이여야 한다는 오류 메시지를 받습니다. 이 문제의 유력한 원인은 무엇입니까?",
   "options": {
    "A": "RDS 인스턴스에 백업 보존 기간을 변경할 권한이 부족합니다.",
    "B": "RDS 인스턴스에 읽기 전용 복제본(Read Replica)이 구성되어 있습니다.",
    "C": "RDS 인스턴스가 기본 백업 창을 사용하고 있습니다.",
    "D": "RDS 인스턴스가 Multi-AZ 배포의 일부입니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon RDS 인스턴스에 읽기 전용 복제본(Read Replica)이 구성되어 있는 경우, 복제 엔진이 바이너리 로그(Binary logs) 기반 복제를 유지하기 위해 원본 DB 인스턴스의 자동 백업 활성화가 필수적이다. 이로 인해 백업 보존 기간을 `0`(자동 백업 비활성화)으로 설정하려고 시도하면 \"보존 기간은 1 에서 35 사이여야 한다\"는 오류 메시지와 함께 변경이 거부된다. 자동 백업을 비활성화하려면 먼저 연결된 모든 읽기 전용 복제본을 삭제해야 한다."
  },
  {
   "num": 163,
   "question": "한 회사는 AWS 리소스 전반에서 공통적인 운영 작업을 자동화하기 위해 AWS Systems Manager 를 사용합니다. 회사는 매일 모든 Amazon EC2 인스턴스의 소프트웨어 인벤토리를 자동으로 수집하고자 합니다. 해당 솔루션은 감사 목적으로 데이터를 Amazon S3 버킷에 저장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS-GatherSoftwareInventory 문서를 사용하여 Systems Manager 연결(association)을 생성합니다. 모든 EC2 인스턴스에서 매일 실행되도록 연결을 스케줄링합니다.",
    "B": "인벤토리 수집 소프트웨어를 패키지화하도록 Systems Manager Distributor 를 구성합니다. 매일 인벤토리를 스캔하도록 Systems Manager 하이브리드 활성화를 사용합니다.",
    "C": "인벤토리 수집 에이전트를 배포하도록 Systems Manager Patch Manager 를 구성합니다. 인벤토리 데이터를 검증하도록 Systems Manager Compliance 를 구성합니다.",
    "D": "EC2 인스턴스에 연결하도록 Systems Manager Session Manager 를 설정합니다. 전체 환경에서 인벤토리 결과를 집계하도록 Systems Manager Fleet Manager 를 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager Inventory 는 관리형 EC2 인스턴스로부터 소프트웨어 및 OS 인벤토리 정보를 정기적으로 수집한다. `AWS-GatherSoftwareInventory` SSM 문서를 활용하여 State Manager 연결(Association)을 생성하고 매일 실행되도록 일정(Cron/Rate)을 지정하면, 모든 인스턴스의 소프트웨어 인벤토리를 자동으로 수집하여 S3 버킷으로 동기화 및 저장할 수 있다. Distributor(B), Patch Manager(C), Session Manager(D)는 소프트웨어 인벤토리 수집 자동화의 기본 주체 서비스가 아니다."
  },
  {
   "num": 164,
   "question": "한 회사는 내부 부서를 위해 많은 수의 Amazon EC2 인스턴스를 실행합니다. 회사는 부서별로 기존 AWS 리소스의 비용을 추적해야 합니다. SysOps 관리자가 이 요구 사항을 충족하기 위해 해야 할 조치는 무엇입니까?",
   "options": {
    "A": "계정에 대해 AWS 생성 비용 할당 태그를 모두 활성화합니다.",
    "B": "태그 에디터(Tag Editor)를 통해 인스턴스에 사용자 정의 태그를 적용합니다. 비용 할당을 위해 이러한 태그를 활성화합니다.",
    "C": "정기적인 일정에 따라 EC2 사용량에 대해 AWS Pricing Calculator 를 실행하는 AWS Lambda 함수를 스케줄링합니다.",
    "D": "EC2 비용 보고서를 내보내기 위해 AWS Trusted Advisor 대시보드를 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS 기본 제공 태그(AWS-generated tags)는 리소스 생성자(`aws:createdBy`) 등의 정보만 제공하므로 '부서(Department)'와 같은 비즈니스 맞춤형 분류 지표를 직접 식별할 수 없다. 부서별 비용을 추적하려면 Tag Editor 등을 활용하여 인스턴스에 사용자 정의 태그(예: `Department: Finance`)를 부착한 후, AWS Billing and Cost Management 콘솔에서 해당 사용자 정의 태그를 '비용 할당 태그(Cost Allocation Tag)'로 활성화해야 한다."
  },
  {
   "num": 165,
   "question": "한 회사가 Amazon DynamoDB 를 사용하여 중요한 애플리케이션을 실행합니다. 최근 배포 중에 애플리케이션이 실수로 DynamoDB 테이블에 잘못된 데이터를 기록했습니다. 해당 테이블에는 연속 백업이 포함된 시점 복구(PITR)가 활성화되어 있으며, DynamoDB Streams 도 활성화되어 있습니다. 회사의 복구 지점 목표(RPO)는 2 분입니다. CloudOps 엔지니어는 데이터 오염이 발생하기 2 분 전 상태로 테이블을 복구해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "잘못된 데이터가 기록되기 2 분 전으로 테이블을 복구하려면 PITR 을 사용합니다. 기존 테이블을 제자리에서(in place) 업데이트합니다.",
    "B": "손상이 발생하기 2 분 전 상태로부터 테이블을 복구하기 위해 PITR 을 사용하여 새 테이블을 생성합니다. 새 테이블을 참조하도록 애플리케이션을 업데이트합니다.",
    "C": "가장 최근의 온디맨드 스냅샷을 복원합니다. 스냅샷이 생성된 이후의 모든 트랜잭션을 재실행하려면 DynamoDB Streams 를 사용합니다.",
    "D": "잘못된 데이터 작성을 취소하기 위해 역순으로 테이블의 변경 이벤트를 재실행하도록 DynamoDB Streams 를 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon DynamoDB 의 시점 복구(PITR, Point-In-Time Recovery)는 기존 테이블을 직접 덮어씌워 복원(In-place restore)할 수 없으며, 항상 과거 지정 시점의 데이터를 가진 새로운 테이블로 복원해야 한다. 따라서 PITR 을 사용하여 손상 2 분 전 시점으로 새 테이블을 생성하여 복원한 뒤, 애플리케이션이 새 테이블 엔드포인트를 바라보도록 구성을 변경하는 것이 올바른 방법이다. DynamoDB Streams(C, D)는 트랜잭션 롤백용 엔진이 아니다."
  },
  {
   "num": 166,
   "question": "개발자가 Amazon Linux Amazon Machine Image(AMI)를 사용하여 서드파티 애플리케이션을 호스팅하는 EC2 인스턴스를 시작합니다. 애플리케이션이 가끔 불안정해집니다. CloudOps 엔지니어는 사용률이 15 분 동안 90%를 초과할 때마다 EC2 인스턴스를 자동으로 재시작하고 재시작에 대해 개발자에게 알림을 전송하는 솔루션이 필요합니다. 가장 적은 관리 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "인스턴스의 CPU 사용률을 평가하는 Amazon CloudWatch 경보를 구성합니다. CloudWatch 경보가 활성화될 때 AWS Lambda 함수를 호출하여 Amazon Simple Notification Service(Amazon SNS) 주제로 메시지를 게시하도록 경보를 구성합니다. EC2 인스턴스를 재시작하도록 Lambda 함수를 구성합니다. 개발자를 SNS 주제에 구독시킵니다.",
    "B": "인스턴스의 CPU 사용률을 평가하는 Amazon CloudWatch 경보를 생성합니다. Amazon Simple Notification Service(Amazon SNS) 주제로 알림을 게시하고 인스턴스를 재시작하는 EC2 작업을 수행하도록 경보를 구성합니다. 개발자를 SNS 주제에 구독시킵니다.",
    "C": "인스턴스의 CPU 사용률을 평가하는 Amazon CloudWatch 경보를 생성합니다. 개발자에게 알리고 재시작을 요청하는 인시던트를 생성하도록 AWS Systems Manager 작업을 호출하도록 경보를 구성합니다.",
    "D": "Amazon Simple Notification Service(Amazon SNS) 주제로 메시지를 게시하고 EC2 인스턴스를 재시작하는 AWS Systems Manager 런북 스크립트를 생성합니다. 개발자를 SNS 주제에 구독시킵니다. 인스턴스의 CPU 사용률이 15 분 동안 90%를 초과하여 유지될 때 Systems Manager 런북을 실행하도록 Amazon CloudWatch 경보를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon CloudWatch 경보는 지표 평가 결과에 따라 알림 발송 및 리소스 제어 작업을 직접 수행할 수 있는 기본 작업(Action) 기능을 탑재하고 있다. CloudWatch 경보 설정 내에서 Amazon SNS 주제 알림 작업과 EC2 인스턴스 재시작(EC2 Reboot Action) 작업을 함께 등록하면, Lambda 함수(A)나 Systems Manager 런북(D)과 같은 추가적인 코드 작성 및 인프라 구성 없이 가장 적은 관리 노력으로 요구 사항을 구현할 수 있다. C 는 재시작 작업이 자동화되지 않고 수동 조치 요청으로 처리되므로 적합하지 않다."
  },
  {
   "num": 167,
   "question": "한 회사가 사용자가 Amazon S3 버킷에 업로드한 파일을 처리하기 위해 AWS Lambda 함수를 사용합니다. Lambda 함수는 Amazon S3 PutObject 이벤트에 반응하여 실행됩니다. SysOps 관리자는 Lambda 함수에 대한 모니터링을 설정해야 합니다. SysOps 관리자는 함수가 이벤트를 처리하는 데 10 초 이상 걸리는 경우 Amazon Simple Notification Service(Amazon SNS) 주제를 통해 알림을 받고 싶어 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Lambda 함수에 대한 Amazon CloudWatch 로그를 수집합니다. 로그에서 PostRuntimeExtensionsDuration 지표를 추출하기 위해 지표 필터(metric filter)를 생성합니다. 함수 실행 시간이 10 초를 초과할 때 SNS 주제로 알림을 게시하는 CloudWatch 경보를 생성합니다.",
    "B": "Lambda 함수의 실행 시간을 추출하기 위해 Amazon CloudWatch 지표를 수집합니다. 실행 시간이 10 초를 초과할 때 SNS 주제로 알림을 게시하는 CloudWatch 경보를 생성합니다.",
    "C": "Lambda 함수의 실행 시간을 캡처하기 위해 Amazon CloudWatch 지표 필터를 구성합니다. 함수의 제한 시간(timeout) 설정을 10 초로 설정합니다. 함수 시간이 초과되면 SysOps 관리자에게 알림을 보내도록 SNS 구독을 생성합니다.",
    "D": "함수 실행 시간에 대해 Lambda 로그를 쿼리하도록 Amazon CloudWatch Logs Insights 를 사용합니다. 쿼리 결과를 바탕으로 CloudWatch 경보를 설정합니다. 함수 실행 시간이 10 초를 초과할 때 알림을 보내도록 Amazon SNS 를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Lambda 는 실행 시간 지표인 `Duration`을 Amazon CloudWatch 지표(`AWS/Lambda` 네임스페이스)로 기본 제공한다. 따라서 로그 지표 필터(A)나 Logs Insights 쿼리(D)를 별도로 구성할 필요 없이, 지표 수집을 통해 기본 제공되는 `Duration` 지표가 10 초(10,000ms)를 초과할 때 알림을 전달하는 CloudWatch 경보를 생성하는 것이 표준 모니터링 방법이다. 함수 타임아웃을 10 초로 설정(C)하면 처리 중인 작업이 강제 종료되므로 지연 시간 알림 모니터링 목적으로 적절하지 않다."
  },
  {
   "num": 168,
   "question": "CloudOps 엔지니어는 AWS Organizations 구조 내 여러 AWS 멤버 계정의 정책을 관리합니다. 다른 팀의 관리자들은 멤버 계정의 계정 루트 사용자 자격 증명(root user credentials)에 액세스할 수 있습니다. CloudOps 엔지니어는 관리자를 포함한 모든 팀이 Amazon DynamoDB 를 사용하는 것을 방지해야 합니다. 이 솔루션은 팀이 다른 AWS 서비스에 액세스하는 기능에 영향을 주지 않아야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "모든 멤버 계정에서 루트 사용자를 포함한 모든 사용자에 대해 모든 DynamoDB 리소스에 대한 액세스를 거부하는 IAM 정책을 구성합니다.",
    "B": "모든 DynamoDB 작업을 거부하는 서비스 제어 정책(SCP)을 관리 계정에 생성합니다. 조직의 루트(root)에 SCP 를 적용합니다.",
    "C": "모든 멤버 계정에서 루트 사용자를 포함한 모든 사용자에 대해 AmazonDynamoDBFullAccess 를 거부하는 IAM 정책을 구성합니다.",
    "D": "관리 계정의 기본 서비스 제어 정책(SCP)을 제거합니다. 모든 DynamoDB 작업을 거부하는 단일 문이 포함된 대체 SCP 를 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Organizations 의 서비스 제어 정책(SCP)은 계정 내의 IAM 사용자, IAM 역할은 물론 계정 루트 사용자(Root User)에게 할당되는 최대 권한 범위를 제한하는 강력한 거버넌스 도구이다. IAM 정책(A, C)은 계정 루트 사용자의 제약을 받지 않으므로 루트 사용자의 권한을 차단할 수 없다. 관리 계정에서 DynamoDB 작업(`dynamodb:*`)을 거부하는 SCP 를 생성하여 조직 루트(Root OU)에 적용하면, 멤버 계정의 루트 사용자를 포함한 모든 주체의 DynamoDB 사용이 완전히 차단된다. 기본 SCP(`FullAWSAccess`)를 제거하면(D) 다른 모든 서비스에 대한 허용권까지 사라지므로 다른 서비스 이용이 불가해진다."
  },
  {
   "num": 169,
   "question": "한 회사가 Amazon RDS for PostgreSQL 데이터베이스에 중요한 정보를 저장합니다. 회사는 최고 쇼핑 시간 동안 성능 저하, 높은 CPU 사용률, 쿼리 지연 시간 증가 및 연결 시간 초과 현상을 관찰했습니다. 회사는 또한 최고 시간 동안 사용자 연결의 급증을 확인했습니다. 연결 급증은 데이터베이스의 읽기 성능에 영향을 미칩니다. 회사는 데이터베이스 성능 문제를 해결하고자 합니다. 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "데이터베이스 성능에 가장 큰 영향을 미치는 SQL 쿼리를 분석하기 위해 Amazon RDS Performance Insights 를 사용합니다. 분석 결과를 바탕으로 SQL 쿼리를 업데이트합니다.",
    "B": "데이터베이스 쿼리를 분석하고 성능 병목 현상을 식별하기 위해 Amazon CloudWatch Logs Insights 를 사용합니다. 분석 결과를 바탕으로 쿼리를 업데이트합니다.",
    "C": "단일 가용 영역을 갖춘 Amazon RDS for PostgreSQL 을 사용합니다.",
    "D": "최고 시간 동안에도 모든 사용자 연결이 동일하게 처리되도록 커넥션 풀링(connection pooling)을 완전히 비활성화합니다.",
    "E": "커넥션 풀링이 포함된 RDS Proxy 를 구현합니다."
   },
   "answer": [
    "A",
    "E"
   ],
   "explanation": "데이터베이스 애플리케이션의 성능 병목 현상 및 트래픽 폭주 문제를 해결하기 위해서는 두 가지 조치가 필요하다. 첫째, Amazon RDS Performance Insights 를 사용하면 데이터베이스 부하를 일으키는 병목 SQL 쿼리를 시각적으로 분석하고 이를 최적화할 수 있다(A). 둘째, 트래픽 폭주 시 발생하는 동시 사용자 커넥션 급증으로 인한 데이터베이스 메모리 및 CPU 자원 고갈을 방지하기 위해 RDS Proxy 를 구현하여 커넥션 풀링(Connection Pooling)을 적용해야 한다(E). 커넥션 풀링 비활성화(D)는 문제를 악화시키며, 단일 AZ 변경(C)은 가용성 저하를 초래한다."
  },
  {
   "num": 170,
   "question": "한 회사가 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 퍼블릭 웹사이트를 호스팅하고 있습니다. 회사는 웹사이트가 HTTPS 연결을 지원하도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "ALB 를 Network Load Balancer 로 교체합니다.",
    "B": "AWS Certificate Manager(ACM)를 사용하여 퍼블릭 SSL/TLS 인증서를 발급합니다. 인증서를 사용하도록 ALB 를 구성합니다.",
    "C": "퍼블릭 SSL/TLS 인증서를 AWS KMS 로 가져옵니다. AWS KMS 에서 인증서를 검색하도록 ALB 를 구성합니다.",
    "D": "ALB 와 연결된 타겟 그룹에 퍼블릭 SSL/TLS 인증서를 연결합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Application Load Balancer(ALB)에서 HTTPS 보안 통신을 제공하기 위한 모범 사례는 AWS Certificate Manager(ACM)를 사용해 퍼블릭 SSL/TLS 인증서를 프로비저닝하고, 이를 ALB 의 HTTPS 리스너(Listener)에 연결하는 것이다. 이를 통해 SSL/TLS 암호화 및 복호화 처리가 ALB 단에서 수행(SSL Offloading)된다. AWS KMS(C)는 데이터 암호화 키를 관리하는 서비스이지 SSL 인증서 저장 및 바인딩 서비스가 아니다. 또한 인증서는 타겟 그룹(D)이 아닌 ALB 리스너 레벨에 연결해야 한다."
  },
  {
   "num": 171,
   "question": "한 회사가 Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. CloudOps 엔지니어는 서비스 중단 없이 배포를 구현해야 합니다. 회사는 애플리케이션 버전 간 트래픽을 전환할 수 있는 기능이 필요하며, 문제가 발생할 경우 트래픽을 재라우팅하여 이전 버전으로 신속하게 되돌릴 수 있어야 합니다. 이러한 요구 사항을 충족하는 배포 방식은 무엇입니까?",
   "options": {
    "A": "2 개의 ALB 타겟 그룹과 함께 AWS CodeDeploy 블루/그린 배포(blue/green deployment)를 사용합니다. 별도의 플릿(fleet)에 새 버전을 배포합니다. 트래픽을 새 타겟 그룹으로 점진적으로 전환합니다. 필요한 경우 즉시 롤백할 수 있도록 기존 플릿을 유지합니다.",
    "B": "기존 타겟 그룹에서 Auto Scaling 인스턴스 새로 고침(instance refresh)을 사용하여 인플레이스(in-place) 롤링 업데이트를 구현합니다. 각 인스턴스에 대한 연결 드레이닝(connection draining)을 구성합니다. 시작 템플릿을 업데이트합니다. 교체 프로세스 동안 헬스 체크에 의존합니다.",
    "C": "업데이트된 애플리케이션을 사용하여 새 AMI 를 생성합니다. Auto Scaling 시작 템플릿을 수정합니다. 새 인스턴스를 추가하기 위해 희망 용량을 임시로 늘립니다. 그런 다음 전환을 관리하기 위해 ALB 연결 드레이닝을 사용하는 동안 이전 인스턴스를 종료합니다.",
    "D": "병렬 Auto Scaling 그룹을 생성하고 모니터링 구성을 업데이트하는 AWS Step Functions 워크플로를 설계합니다. ALB 의 인스턴스 등록을 변경하고 검증 기간 후 이전 플릿을 자동으로 종료하도록 워크플로를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "서비스 중단 없는 배포와 문제 발생 시 트래픽 재라우팅을 통한 즉각적인 롤백(Rollback) 기능을 충족하는 모범 사례는 AWS CodeDeploy 의 블루/그린(Blue/Green) 배포 방식이다. 두 개의 ALB 타겟 그룹을 구성하여 새 버전 플릿에 인프라를 마련한 후 트래픽을 가중치에 따라 점진적으로 전환하고, 이상 감지 시 트래픽을 기존 그린/블루 환경으로 즉각 되돌릴 수 있어 리스크를 최소화한다. 인플레이스 롤링 업데이트(B)나 수동 수명 주기 관리 방식(C, D)은 실시간 트래픽 전환을 통한 신속한 롤백을 직접 지원하지 못한다."
  },
  {
   "num": 172,
   "question": "한 회사가 IAM 사용자에게 다음 정책을 연결했습니다:\n\n{\n    \"Version\": \"2012-10-17\",\n    \"Statement\": [\n     {\n         \"Effect\": \"Allow\",\n         \"Action\": \"rds:Describe*\",\n         \"Resource\": \"*\"\n     },\n     {\n         \"Effect\": \"Allow\",\n         \"Action\": \"ec2:*\",\n         \"Resource\": \"*\",\n            \"Condition\": {\n                \"StringEquals\": {\n                    \"ec2:Region\": \"us-east-1\"\n                }\n            }\n        },\n        {\n            \"Effect\": \"Deny\",\n            \"NotAction\": [\n                \"ec2:*\",\n                \"s3:GetObject\"\n            ],\n            \"Resource\": \"*\"\n        }\n    ]\n}\n\n다음 중 IAM 사용자에게 허용되는 작업은 무엇입니까?",
   "options": {
    "A": "us-east-1 리전에서의 Amazon RDS DescribeDBInstances 작업",
    "B": "testbucket 이라는 버킷에서의 Amazon S3 PutObject 작업",
    "C": "us-east-1 리전에서의 Amazon EC2 DescribeInstances 작업",
    "D": "eu-west-1 리전에서의 Amazon EC2 AttachNetworkInterface 작업"
   },
   "answer": [
    "C"
   ],
   "explanation": "IAM 정책의 명시적 거부(`Deny`) 문에 위치한 `NotAction` 구문은 명시된 작업(`ec2:*` 및 `s3:GetObject`)을 제외한 다른 모든 작업에 대해 명시적 거부를 적용한다는 의미이다. 따라서 `rds:DescribeDBInstances`(A) 및 `s3:PutObject`(B) 작업은 `NotAction` 목록에 없으므로 `Deny` 문에 의해 거부된다. 또한 `ec2:*` 작업은 `NotAction` 거부 대상에서 제외되지만, 두 번째 Statement 의 조건식(`Condition`)에 따라 `ec2:Region`이 `us-east- 1`인 경우에만 `Allow`된다. 따라서 `eu-west-1` 리전에서의 EC2 작업(D)은 허용문 조건을 만족하지 못하며, `us-east-1` 리전에서의 `ec2:DescribeInstances` 작업(C)만 최종 허용된다."
  },
  {
   "num": 173,
   "question": "한 회사가 사용자가 Amazon S3 버킷에 업로드하는 파일을 처리하기 위해 AWS Lambda 를 사용합니다. 사용자가 S3 버킷에 파일을 업로드하면 S3 이벤트 알림이 파일 처리를 위해 Lambda 함수를 호출합니다. 회사는 사용자가 S3 버킷에 업로드하는 파일 중 확장자가 .txt 인 파일에 대해서만 Lambda 함수가 자동으로 호출되도록 하려 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 버킷 내 .txt 파일에 대한 S3 PUT 요청에 의해 호출되도록 Lambda 함수를 구성합니다.",
    "B": "S3 버킷 내 .txt 파일에 대한 S3 GET 요청에 의해 호출되도록 Lambda 함수를 구성합니다.",
    "C": "모든 객체 생성 이벤트를 Amazon SNS 주제로 전송하도록 S3 버킷 알림을 구성합니다. Lambda 함수를 SNS 주제에 구독시킵니다. .txt 파일 확장자에 대해 SNS 주제에 필터 정책을 적용합니다.",
    "D": ".txt 파일 업로드에 대한 이벤트를 Amazon CloudWatch Logs 로 전송하여 기존 Lambda 함수를 호출하도록 기존 S3 이벤트 알림 구성을 수정합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon S3 이벤트 알림(S3 Event Notifications)은 객체 생성 이벤트(`s3:ObjectCreated:Put` 등) 발생 시 접두사(Prefix) 및 접미사(Suffix) 필터링 조건을 직접 지원한다. S3 버킷 이벤트 설정에서 파일 업로드 요청인 `PUT` 이벤트와 `.txt` 접미사 필터를 지정하여 Lambda 함수를 직접 트리거하도록 구성하면 추가 아키텍처나 코드 없이 요구 사항을 깔끔하게 충족한다. `GET` 요청(B)은 파일 다운로드 이벤트이며, SNS 필터 정책(C)이나 CloudWatch Logs(D)를 경유하는 방식은 불필요한 중간 서비스 구성 오버헤드를 유발한다."
  },
  {
   "num": 174,
   "question": "한 회사가 지연 시간을 개선하기 위해 쿼리 응답을 캐싱하고자 Amazon ElastiCache for Memcached 를 사용하는 애플리케이션을 운영 중입니다. 그러나 애플리케이션 사용자들이 응답 시간이 느려졌다고 보고하고 있습니다. SysOps 관리자는 Memcached 축출(evictions)에 대한 Amazon CloudWatch 지표가 높음을 확인했습니다. SysOps 관리자가 이 문제를 해결하기 위해 취해야 할 조치는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "ElastiCache for Memcached 의 콘텐츠를 비웁니다(Flush).",
    "B": "ConnectionOverhead 파라미터 값을 늘립니다.",
    "C": "클러스터의 노드 수를 늘립니다.",
    "D": "클러스터의 노드 크기를 늘립니다.",
    "E": "클러스터의 노드 수를 줄입니다."
   },
   "answer": [
    "C",
    "D"
   ],
   "explanation": "Memcached 에서 축출(Eviction) 지표가 높게 나타나는 것은 할당된 메모리 용량이 부족하여 새로운 캐시 항목을 저장하기 위해 기존 캐시 항목을 메모리에서 강제로 제거하고 있음을 의미한다. 축출이 자주 발생하면 캐시 미스(Cache Miss)가 늘어나 데이터베이스 직접 조회가 증가하므로 응답 지연이 발생한다. 이를 해결하려면 Memcached 클러스터의 전체 메모리 용량을 늘려야 하며, 이는 노드 개수를 추가하여 샤딩 메모리를 확장하는 수평 스케일링(C)이나 개별 노드의 인스턴스 사양을 키우는 수직 스케일링(D)을 통해 달성할 수 있다. 캐시 플러시(A)는 캐시 미스를 유발해 지연 시간을 악화시킨다."
  },
  {
   "num": 175,
   "question": "AWS 계정 111122223333 에 있는 한 회사의 애플리케이션 서버들은 보안 그룹 sg- 1234abcd 를 사용합니다. 이 서버들은 계정 444455556666 에서 호스팅되는 데이터베이스에 액세스해야 합니다. 두 VPC 는 VPC 피어링 연결(pcx-b04deed9)을 사용하여 연결되어 있습니다. CloudOps 엔지니어는 애플리케이션 서버로부터의 새로운 연결만 허용하도록 데이터베이스의 보안 그룹을 구성해야 합니다. 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "데이터베이스 보안 그룹에 인바운드 규칙을 추가합니다. 소스로 111122223333/sg- 1234abcd 를 참조합니다.",
    "B": "데이터베이스 보안 그룹에 인바운드 규칙을 추가합니다. 소스로 pcx-b04deed9/sg- 1234abcd 를 참조합니다.",
    "C": "데이터베이스 보안 그룹에 인바운드 규칙을 추가합니다. 소스로 sg-1234abcd 를 참조합니다.",
    "D": "데이터베이스 보안 그룹에 인바운드 규칙을 추가합니다. 소스로 444455556666/sg- 1234abcd 를 참조합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "VPC 피어링 연결로 이어진 서로 다른 AWS 계정 간에 교차 계정 보안 그룹 참조(Cross- Account Security Group Referencing)를 구성할 때, 타깃 보안 그룹 규칙의 소스(Source) 필드 형식은 `<상대방_AWS_계정_ID>/<상대방_보안_그룹_ID>` 형태를 따라야 한다. 애플리케이션 서버가 위치한 소스 계정 ID 가 `111122223333`이고 보안 그룹 ID 가 `sg- 1234abcd`이므로, 데이터베이스 계정(`444455556666`)의 보안 그룹 인바운드 규칙 소스에는 `111122223333/sg-1234abcd`를 지정해야 한다."
  },
  {
   "num": 176,
   "question": "한 회사가 Amazon EC2 인스턴스에서 웹 애플리케이션을 호스팅합니다. 사용자들은 웹 애플리케이션이 가끔 응답하지 않는다고 보고합니다. Amazon CloudWatch 지표에 따르면 이 시간 동안 CPU 사용률이 100%입니다. SysOps 관리자는 이 문제를 모니터링하는 솔루션을 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "EC2 인스턴스에 대한 AWS CloudTrail 이벤트를 모니터링하는 CloudWatch 경보를 생성합니다.",
    "B": "EC2 인스턴스 CPU 사용률에 대한 CloudWatch 지표를 모니터링하는 CloudWatch 경보를 생성합니다.",
    "C": "EC2 인스턴스 CPU 사용률에 대한 CloudWatch 지표를 모니터링하기 위해 Amazon Simple Notification Service(Amazon SNS) 주제를 생성합니다.",
    "D": "CPU 사용률 편차를 탐지하기 위해 Amazon Inspector 를 사용하여 EC2 인스턴스에서 주기적인 평가 검사를 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "EC2 인스턴스의 CPU 사용률 과다 문제를 지속적으로 모니터링하기 위해서는 `AWS/EC2` 네임스페이스의 `CPUUtilization` CloudWatch 지표를 모니터링하고 설정한 임계값 초과 시 경보 상태로 전환되는 CloudWatch 경보(Alarm)를 생성해야 한다. CloudTrail(A)은 API 호출 이벤트 기록용이고 지표 모니터링 도구가 아니며, SNS 주제(C)는 경보 상태 변경 메시지 수신/전달 매개체일 뿐 모니터링 주체가 아니다. Amazon Inspector(D)는 보안 취약점 스캔 도구이다."
  },
  {
   "num": 177,
   "question": "CloudOps 엔지니어는 Application Load Balancer(ALB)의 각 타겟 그룹 멤버로 전송되거나 수신된 바이트 수를 보여주는 보고서를 생성해야 합니다. CloudOps 엔지니어가 이러한 요구 사항을 충족하기 위해 취해야 할 조치 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "ALB 에 대한 액세스 로깅(access logging)을 활성화합니다. 로그를 Amazon S3 버킷에 저장합니다.",
    "B": "타겟 그룹의 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다.",
    "C": "ALB 로그를 쿼리하기 위해 Amazon Athena 를 사용합니다. 테이블을 쿼리합니다. target 및 port 필드로 그룹화된 전체 바이트 수를 계산하기 위해 received_bytes 및 sent_bytes 필드를 사용합니다.",
    "D": "ALB 로그를 쿼리하기 위해 Amazon Athena 를 사용합니다. 테이블을 쿼리합니다. client port 필드로 그룹화된 전체 바이트 수를 계산하기 위해 received_bytes 및 sent_bytes 필드를 사용합니다.",
    "E": "ALB 에 대한 ProcessedBytes 지표의 Sum 통계를 보여주는 Amazon CloudWatch 대시보드를 생성합니다."
   },
   "answer": [
    "A",
    "C"
   ],
   "explanation": "ALB 의 개별 타겟 그룹 멤버(인스턴스 IP 및 포트)별 트래픽 수신 및 전송 바이트 수를 개별 집계 및 보고서화하려면, 먼저 ALB 액세스 로그(Access Logs)를 활성화하여 S3 버킷에 저장해야 한다(A). 그 후 Amazon Athena 를 사용하여 S3 에 저장된 로그 테이블을 쿼리하고, `target` 및 `port` 필드로 그룹화(`GROUP BY`)하여 `received_bytes` 및 `sent_bytes` 수치를 합산 및 계산해야 한다(C). CloudWatch agent(B)나 CloudWatch 지표(E)는 개별 ALB 타겟 멤버별 요청/응답 바이트 세부 내역 데이터를 쿼리 가능한 형태로 제공하지 않는다."
  },
  {
   "num": 178,
   "question": "한 회사의 개발자들이 여러 AWS 계정에 애플리케이션을 배포합니다. 개발자들은 AWS 계정 내에서 어떠한 AWS 리소스든 생성할 수 있습니다. 보안팀은 회사의 AWS 계정에서 개발자가 생성한 리소스를 감사하고자 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "보안팀을 위한 AWS 계정을 생성합니다. 보안팀 계정에 AWS Audit Manager 를 구성합니다. Audit Manager 평가를 생성합니다. 평가 범위에 회사의 AWS 계정을 포함합니다. 보안팀을 위한 평가 보고서를 생성합니다.",
    "B": "각 AWS 계정에 AWS Config 리코더(recorder)를 구성합니다. 보안팀의 AWS 계정에 AWS Config 어그리게이터(aggregator)를 생성합니다. 모든 AWS 계정에서 어그리게이터를 승인합니다. 보안팀을 위한 보고서를 생성하기 위해 Amazon Quick Suite 및 Amazon Athena 를 사용합니다.",
    "C": "모든 AWS 계정에 AWS CloudTrail 추적을 생성합니다. 보안팀 계정에 Amazon RDS DB 인스턴스를 생성합니다. DB 인스턴스에 로그를 기록하도록 모든 계정의 CloudTrail 을 구성합니다. DB 인스턴스를 쿼리하고 보안팀을 위한 보고서를 생성하기 위해 Amazon Quick Suite 를 사용합니다.",
    "D": "모든 AWS 계정에서 AWS Trusted Advisor 를 활성화합니다. Trusted Advisor 검사를 주기적으로 새로 고치도록 예약된 Amazon EventBridge 규칙을 생성합니다. 보안팀을 위한 보고서를 생성하기 위해 Trusted Advisor 콘솔을 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "다중 계정 환경에서 생성된 전체 리소스 인벤토리 및 상태 구성을 중앙 감사하기 위해서는 각 계정에 AWS Config 리코더를 활성화하고, 보안팀 중앙 계정에 AWS Config 어그리게이터(Aggregator)를 구성하는 것이 모범 사례이다. 이를 통해 모든 계정과 리전의 리소스 구성 데이터를 중앙에 집계한 후 Athena / QuickSight(Quick Suite)로 분석 보고서를 생성할 수 있다. Audit Manager(A)는 규정 준수 프레임워크 증빙용 도구이며, CloudTrail(C)은 API 호출 이력 저장용으로 현재 생성되어 존재하는 리소스 인벤토리 목록 감사에 적합하지 않다."
  },
  {
   "num": 179,
   "question": "웹 애플리케이션이 us-east-1 리전과 us-west-2 리전의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 각 리전의 Application Load Balancer(ALB) 뒤에서 실행됩니다. Amazon Route 53 호스팅 영역이 DNS 레코드를 제어합니다. us-east-1 의 인스턴스는 프로덕션 리소스입니다. us-west-2 의 인스턴스는 재해 복구(DR)용입니다. EC2 Auto Scaling 그룹은 두 리전 모두에서 ALBRequestCountPerTarget 지표를 기반으로 구성됩니다. SysOps 관리자는 us-east-1 에서 us-west-2 로의 장애 조치(failover)를 제공하는 솔루션을 구현해야 합니다. us-west-2 의 인스턴스는 장애 조치용으로만 사용되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "호스팅 영역에 대해 Route 53 헬스 체크 및 장애 조치 라우팅 정책(failover routing policy)을 구현합니다. us-west-2 의 리소스로 트래픽을 자동으로 재라우팅하도록 장애 조치 라우팅 정책을 구성합니다.",
    "B": "호스팅 영역에 대해 Route 53 헬스 체크 및 지연 시간 라우팅 정책(latency routing policy)을 구현합니다. us-west-2 의 리소스로 트래픽을 자동으로 재라우팅하도록 지연 시간 라우팅 정책을 구성합니다.",
    "C": "us-east-1 에서 EC2 인스턴스가 종료될 때 ALARM 상태가 되는 Amazon CloudWatch 경보를 생성합니다. us-west-2 에서 트래픽을 us-west-2 로 보내도록 Route 53 호스팅 영역 레코드를 수정하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하도록 CloudWatch 경보를 구성합니다.",
    "D": "us-west-2 에서 us-east-1 의 리소스를 해소할 수 없을 때 ALARM 상태가 되는 Amazon CloudWatch 경보를 생성합니다. us-west-2 에서 트래픽을 us-west-2 로 보내도록 Route 53 호스팅 영역 레코드를 수정하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하도록 CloudWatch 경보를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "주 리전(us-east-1)을 기본(Primary)으로 사용하고, 보조 리전(us-west-2)을 순수 대기 목적의 DR 전용(Secondary)으로 운용하는 액티브-패시브(Active-Passive) 주/보조 장애 조치 구조를 구현하는 표준 방법은 Route 53 장애 조치 라우팅 정책(Failover Routing Policy)과 Route 53 헬스 체크를 결합하는 것이다. 지연 시간 라우팅(B)은 액티브-액티브 분산용이며, CloudWatch 와 Lambda 기반의 커스텀 라우팅 수정 방식(C, D)은 복잡성을 높이고 신뢰성을 저하시킨다."
  },
  {
   "num": 180,
   "question": "한 회사는 AWS Organizations 의 조직 내에 많은 계정을 보유하고 있습니다. 회사는 조직의 관리 계정(management account)에서 멤버 계정으로 리소스 프로비저닝을 자동화해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS CloudFormation 변경 세트(change set)를 생성합니다. 모든 멤버 계정에 변경 세트를 배포합니다.",
    "B": "AWS CloudFormation 중첩 스택(nested stack)을 생성합니다. 모든 멤버 계정에 중첩 스택을 배포합니다.",
    "C": "AWS CloudFormation 스택 세트(stack set)를 생성합니다. 모든 멤버 계정에 스택 세트를 배포합니다.",
    "D": "AWS SAM 템플릿을 생성합니다. 모든 멤버 계정에 템플릿을 배포합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Organizations 조직의 중앙 관리 계정에서 여러 멤버 계정 및 리전으로 CloudFormation 템플릿 배포 및 리소스 프로비저닝을 자동화하는 관리형 서비스 기능은 AWS CloudFormation StackSets(스택 세트)이다. 스택 세트를 사용하면 중앙에서 단일 작업으로 수십~수백 개의 멤버 계정에 일괄 리소스 배포 및 업데이트를 오케스트레이션할 수 있다. 변경 세트(A)는 단일 스택 변경 예측용이고, 중첩 스택(B)은 단일 계정 내 모듈화용이며, SAM 템플릿(D)은 서버리스 애플리케이션 정의용이다."
  },
  {
   "num": 181,
   "question": "CloudOps 엔지니어가 CPU 집약적인 레거시 애플리케이션을 담당하고 있습니다. 해당 애플리케이션은 수직 확장(vertical scaling)만 가능합니다. 현재 애플리케이션은 단일 t3.large Amazon EC2 인스턴스에 배포되어 있습니다. 시스템은 몇 분 후 CPU 사용률 90%와 심각한 성능 지연을 보이고 있습니다. 성능 문제를 완화하기 위해 어떤 변경을 해야 합니까?",
   "options": {
    "A": "Amazon EBS 볼륨을 프로비저닝된 IOPS 로 변경합니다.",
    "B": "컴퓨팅 최적화 인스턴스로 업그레이드합니다.",
    "C": "애플리케이션에 t3.large 인스턴스를 추가로 생성합니다.",
    "D": "예약 인스턴스(Reserved Instances)를 구매합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "T 인스턴스 패밀리(t3.large 등)는 버스터블(Burstable) 인스턴스로, CPU 크레딧 기반으로 작동하여 CPU 사용률이 지속적으로 높은 워크로드에는 적합하지 않다. 또한 문제 조건에서 수평 확장이 불가능하고 수직 확장만 가능하다고 명시하였으므로, 인스턴스 수량을 늘리는 수평 확장 방식(C)은 적용할 수 없다. 따라서 지속적인 높은 CPU 성능이 필요한 CPU 집약적 워크로드의 수직 확장을 위해서는 C 패밀리(c6i, c7g 등)와 같은 컴퓨팅 최적화(Compute-optimized) 인스턴스로 사양을 업그레이드해야 한다. EBS IOPS 변경(A)은 I/O 병목 해소용이며, 예약 인스턴스(D)는 결제 할인 옵션일 뿐 성능을 개선하지 못한다."
  },
  {
   "num": 182,
   "question": "한 학교에서 학생 출석을 추적하기 위해 웹 애플리케이션을 사용합니다. 애플리케이션은 Amazon API Gateway REST API 와 백엔드 AWS Lambda 함수를 사용합니다. 애플리케이션은 온디맨드 용량 모드인 Amazon DynamoDB 테이블에 데이터를 저장합니다. 교사들은 매주 평일 동일한 시간에 애플리케이션 성능이 저하된다고 보고합니다. CloudOps 엔지니어는 애플리케이션 수요가 갑자기 증가할 때만 성능 문제가 발생한다는 것을 확인했습니다. 애플리케이션 부하가 점진적으로 증가하면 최고 부하를 처리할 수 있습니다. CloudOps 엔지니어는 성능 문제를 해결하기 위해 애플리케이션을 수정해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Lambda 함수에 대해 예약된 자동 확장(scheduled auto scaling)이 포함된 프로비저닝된 동시성(provisioned concurrency)을 구성합니다.",
    "B": "Lambda 함수에 대해 예약된 자동 확장이 포함된 예약된 동시성(reserved concurrency)을 구성합니다.",
    "C": "DynamoDB 테이블을 온디맨드 용량 모드에서 자동 확장이 적용된 프로비저닝된 용량 모드로 변경합니다.",
    "D": "DynamoDB 테이블을 온디맨드 용량 모드에서 프로비저닝된 용량 모드로 변경합니다. 프로비저닝된 용량을 최고 사용량에 맞게 설정합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "매주 평일 특정 정해진 시각에 트래픽이 급증할 때 발생할 수 있는 지연 현상은 백엔드 AWS Lambda 함수 실행 환경의 콜드 스타트(Cold Start) 지연이 주원인이다. 이를 해결하기 위해 미리 실행 환경을 예열해 두는 '프로비저닝된 동시성(Provisioned Concurrency)'을 설정하고, 예측 가능한 매일의 피크 시간대에 맞춰 '예약된 자동 확장(Scheduled Auto Scaling)' 스케줄을 적용하는 것이 가장 적합하다. DynamoDB 온디맨드 모드는 갑작스러운 트래픽 급증을 지연 없이 즉시 수용할 수 있으므로 테이블 문제(C, D)가 아니며, 예약된 동시성(B)은 인스턴스 예열이 아닌 개별 함수의 최대 동시 실행 수 제한(제어) 기능이다."
  },
  {
   "num": 183,
   "question": "한 회사가 개발 환경 내 단일 가용 영역의 Amazon EC2 인스턴스에서 고성능 컴퓨팅(HPC) 데이터 처리 애플리케이션을 실행합니다. 애플리케이션은 EC2 인스턴스와 동일한 AWS 리전의 Amazon S3 범용 버킷에 저장된 데이터 세트를 사용합니다. SysOps 관리자는 Amazon S3 에서 객체를 검색할 때 애플리케이션의 성능을 향상시켜야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 버킷에 대한 S3 Transfer Acceleration 을 활성화합니다. 버킷에 대한 S3 액세스 포인트를 생성합니다. 액세스 포인트를 사용하도록 애플리케이션을 업데이트합니다.",
    "B": "모든 객체를 S3 Express One Zone 스토리지 클래스로 이동하도록 S3 버킷에 대한 S3 수명 주기 구성을 생성합니다. S3 리전 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다.",
    "C": "동일한 리전에 두 번째 범용 S3 버킷을 생성합니다. 기존 버킷의 객체를 새 버킷으로 복사합니다. 새 버킷에 객체를 저장하려면 S3 Express One Zone 스토리지 클래스를 사용합니다. S3 리전 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다.",
    "D": "동일한 가용 영역에 S3 디렉터리 버킷(directory bucket)을 생성합니다. 기존 버킷의 객체를 새 버킷으로 가져옵니다. 새 버킷에 객체를 저장하려면 S3 Express One Zone 스토리지 클래스를 사용합니다. S3 영역 엔드포인트(Zonal endpoint)를 사용하도록 애플리케이션을 업데이트합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "단일 가용 영역 내에서 고성능 컴퓨팅(HPC) 워크로드의 S3 데이터 검색 성능을 한 자릿수 밀리초(single-digit millisecond) 지연 시간 수준으로 극대화하려면 S3 Express One Zone 스토리지 클래스를 사용해야 한다. S3 Express One Zone 은 범용 버킷이 아닌 전용 'S3 디렉터리 버킷(Directory Bucket)'에서만 지원되며, 컴퓨팅 리소스와 동일한 가용 영역(AZ)에 생성하고 S3 영역 엔드포인트(Zonal Endpoint)를 통해 통신해야 한다. 범용 버킷에 수명 주기 규칙을 적용하거나(B, C) Transfer Acceleration(A)을 적용하는 방식으로는 S3 Express One Zone 을 구성할 수 없다."
  },
  {
   "num": 184,
   "question": "한 회사가 애플리케이션을 지원하기 위해 여러 Amazon RDS 데이터베이스를 사용합니다. 애플리케이션은 주중에 모든 트래픽을 받고 주말 동안에는 유휴 상태(idle)입니다. 회사는 비용을 최적화하기 위해 유휴 기간 동안 RDS DB 인스턴스를 자동으로 관리하는 솔루션을 원합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "주말 동안 RDS DB 인스턴스 유형을 자동으로 축소(scale down)하기 위해 크론(cron) 작업을 사용합니다.",
    "B": "매 주말 시작 시 RDS DB 인스턴스를 중지하고 매 주말 끝에 인스턴스를 시작하도록 AWS Instance Scheduler 를 구성합니다.",
    "C": "RDS DB 인스턴스에 대한 예약 인스턴스를 구매합니다.",
    "D": "CPU 사용률에 따라 DB 인스턴스 유형을 자동으로 조정하기 위해 Amazon RDS 의 자동 확장 기능을 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "주말 동안 트래픽이 전혀 없는 유휴 상태일 때 비용을 절감하는 가장 효율적인 솔루션은 AWS Instance Scheduler(또는 SSM 기반 스케줄러)를 이용하여 주말 시작 시 RDS DB 인스턴스를 자동으로 중지(Stop)하고, 주말이 끝날 때 다시 시작(Start)하는 것이다. 인스턴스가 중지되면 컴퓨팅 요금이 발생하지 않으므로 비용을 최적화할 수 있다. 인스턴스 유형 축소(A, D)는 인스턴스가 켜져 있는 상태이므로 컴퓨팅 비용이 계속 발생하며, 예약 인스턴스(C)는 24/7 실행되는 지속적인 워크로드의 결제 할인을 위한 옵션이다."
  },
  {
   "num": 185,
   "question": "한 회사가 AWS 호스팅 DNS 서비스를 사용해야 하는 온프레미스 워크로드를 운영합니다. 회사는 주요 애플리케이션의 지속적인 DNS 해소를 보장하기 위해 DNS 쿼리에 대한 고가용성을 요구합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "여러 가용 영역에 Amazon Route 53 Resolver 인바운드 엔드포인트를 배포합니다. 장애 조치 구성으로 엔드포인트 IP 주소를 사용하도록 온프레미스 DNS 리졸버를 구성합니다.",
    "B": "온프레미스 시스템의 DNS 쿼리가 가장 가까운 리졸버 엔드포인트로 전송되도록 Amazon Route 53 지연 시간 기반 라우팅을 사용합니다.",
    "C": "Amazon Route 53 프라이빗 호스팅 영역을 구성합니다. 프라이빗 호스팅 영역을 온프레미스 네트워크와 연결합니다.",
    "D": "여러 가용 영역에 Amazon Route 53 Resolver 아웃바운드 엔드포인트를 배포합니다. 엔드포인트를 온프레미스 DNS 리졸버와 연결합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "온프레미스 네트워크의 서버/클라이언트가 AWS Route 53 프라이빗 호스팅 영역 또는 VPC 내부 DNS 이름을 질의(Query)할 수 있도록 하려면 Route 53 Resolver '인바운드 엔드포인트(Inbound Endpoint)'가 필요하다. 또한 고가용성을 확보하기 위해 최소 2 개 이상의 가용 영역(AZ)에 인바운드 엔드포인트를 각각 배포하고, 온프레미스 DNS 리졸버가 이 IP 주소들로 쿼리를 전달 및 장애 조치(Failover)하도록 구성해야 한다. 아웃바운드 엔드포인트(D)는 반대로 VPC 내부에서 온프레미스 DNS 서버로 쿼리를 보낼 때 사용된다."
  },
  {
   "num": 186,
   "question": "CloudOps 엔지니어가 노드 간 파일 시스템을 공유해야 하는 많은 Windows Amazon EC2 인스턴스를 보유하고 있습니다. CloudOps 엔지니어는 Amazon EFS 파일 공유를 생성했습니다. 파일 공유를 생성한 후 CloudOps 엔지니어는 EC2 인스턴스에 파일 공유를 마운트하는 데 어려움을 겪고 있습니다. EC2 인스턴스가 파일을 공유할 수 있도록 CloudOps 엔지니어가 취해야 할 조치는 무엇입니까?",
   "options": {
    "A": "EFS 파일 공유를 삭제합니다. EC2 인스턴스를 위한 Amazon FSx for Windows File Server 파일 공유를 생성합니다.",
    "B": "EFS 파일 공유를 마운트하기 위해 올바른 IAM 자격 증명을 사용합니다.",
    "C": "EC2 인스턴스에서 실행 중인 Windows 운영 체제에서 NFSv4 지원을 구성합니다.",
    "D": "보안 그룹 및 네트워크 ACL 을 통해 NFS 에 대한 올바른 포트를 허용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon EFS 는 Linux 기반 워크로드에 최적화된 NFS 기반 파일 시스템으로, Windows 운영 체제에서는 마운트 및 기능 지원에 제한이 있다. Windows EC2 인스턴스 간에 SMB 프로토콜 기반으로 고성능 파일 공유를 제공하는 AWS 표준 서비스는 Amazon FSx for Windows File Server 이다. 따라서 기존 EFS 를 삭제하고 FSx for Windows File Server 를 생성하여 연결하는 것이 올바른 조치이다."
  },
  {
   "num": 187,
   "question": "한 회사가 AWS CloudTrail 을 사용 중이며 SysOps 관리자가 로그 파일이 삭제되거나 변경되지 않았음을 쉽게 검증할 수 있기를 원합니다. 이러한 요구 사항을 충족하기 위해 SysOps 관리자가 취해야 할 조치는 무엇입니까?",
   "options": {
    "A": "로그 파일을 암호화하는 데 사용되는 AWS Key Management Service(AWS KMS) 키에 대한 액세스 권한을 관리자에게 부여합니다.",
    "B": "추적(trail)을 생성하거나 업데이트할 때 CloudTrail 로그 파일 무결성 검증(log file integrity validation)을 활성화합니다.",
    "C": "로그 파일을 저장하는 버킷에 대해 Amazon S3 서버 액세스 로깅을 켭니다.",
    "D": "로그 파일을 다른 버킷으로 복제하도록 S3 버킷을 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS CloudTrail 의 로그 파일 무결성 검증(Log File Integrity Validation) 기능을 활성화하면 CloudTrail 이 로그 파일 전달 시 암호화 해시(SHA-256) 및 디지털 서명(RSA)을 함께 생성한다. 이를 통해 SysOps 관리자는 로그 파일이 S3 버킷에 전달된 이후 수정, 위변조 또는 삭제되었는지 여부를 용이하게 검증할 수 있다."
  },
  {
   "num": 188,
   "question": "한 회사의 애플리케이션이 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 회사는 HTTPCode_Target_5XX_Count 지표를 모니터링하도록 Amazon CloudWatch 경보를 구성했습니다. 애플리케이션이 업무 시간 동안 며칠마다 다운됩니다. 다운 현상은 CloudWatch 경보를 트리거하고 서비스 중단을 초래합니다. 다운의 원인은 애플리케이션의 메모리 누수(memory leak)입니다. 개발자가 문제를 해결하는 동안 CloudOps 엔지니어는 임시 솔루션을 구현해야 합니다. 해당 솔루션은 매일 EC2 인스턴스를 자동으로 재시작해야 하며 업무 시간 동안 애플리케이션 중단을 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "업무 시간 외에 실행되도록 예약된 Amazon EventBridge 규칙을 생성합니다. EC2 인스턴스에서 StartInstances 작업을 호출하도록 규칙을 구성합니다.",
    "B": "업무 시간 외에 매일 실행되는 유지 관리 창(maintenance window)을 생성하기 위해 AWS Systems Manager 를 사용합니다. EC2 인스턴스를 타깃으로 등록합니다. 유지 관리 창에 AWS-RestartEC2Instance 런북을 할당합니다.",
    "C": "EC2 인스턴스에 대한 StatusCheckFailed_System 지표를 모니터링하도록 추가 CloudWatch 경보를 구성합니다. 인스턴스를 재시작하도록 추가 경보에 EC2 작업을 구성합니다.",
    "D": "애플리케이션이 다운될 때마다 트리거되는 추가 CloudWatch 경보를 구성합니다. EC2 인스턴스에서 애플리케이션을 재시작하도록 추가 경보에 EC2 작업을 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "메모리 누수로 인한 장애를 예방하기 위해 업무 시간 외에 매일 정기적으로 EC2 인스턴스를 재시작하는 작업은 AWS Systems Manager Maintenance Windows(유지 관리 창)를 통해 구현하는 것이 모범 사례이다. 유지 관리 창에 EC2 인스턴스를 타깃으로 등록하고 `AWS-RestartEC2Instance` 자동화 런북을 연결하면 업무 영향 없이 매일 자동으로 인스턴스를 재시작할 수 있다. StartInstances(A)는 중지된 인스턴스를 시작하는 명령이며, 경보 기반 재시작(C, D)은 이미 장애가 발생한 후에 반응하므로 업무 시간 중단을 사전에 예방하지 못한다."
  },
  {
   "num": 189,
   "question": "한 회사는 보안을 개선하기 위해 퍼블릭 서브넷에서 프라이빗 서브넷으로 워크로드를 이동합니다. 테스트 중에 회사는 프라이빗 서브넷의 서버가 외부 API 에 도달할 수 없음을 확인했습니다. VPC 의 CIDR 블록은 10.0.0.0/16 입니다. VPC 에는 2 개의 퍼블릭 서브넷과 2 개의 프라이빗 서브넷이 포함되어 있습니다. VPC 에는 1 개의 인터넷 게이트웨이가 있으며 각 프라이빗 서브넷에 NAT 게이트웨이가 있습니다. 회사는 프라이빗 서브넷에서 실행되는 워크로드가 외부 API 에 도달할 수 있도록 해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "프라이빗 서브넷에서 인터넷으로의 트래픽을 허용하도록 아웃바운드 전용 인터넷 게이트웨이를 배포합니다. 아웃바운드 전용 인터넷 게이트웨이를 통해 아웃바운드 트래픽을 전달하도록 라우팅 테이블을 편집합니다.",
    "B": "외부 API 에 대한 프록시로 Amazon API Gateway HTTP API 를 생성하고 구성합니다. HTTP API 로 아웃바운드 트래픽을 전달하도록 라우팅 테이블을 편집합니다.",
    "C": "각 퍼블릭 서브넷에 탄력적 IP 주소를 갖춘 새 NAT 게이트웨이를 배포합니다. NAT 게이트웨이를 통해 아웃바운드 트래픽을 전달하도록 라우팅 테이블을 편집합니다.",
    "D": "VPC 인터페이스 엔드포인트를 생성합니다. 엔드포인트를 통해 아웃바운드 트래픽을 전달하도록 라우팅 테이블을 편집합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "NAT 게이트웨이는 프라이빗 서브넷이 아닌 인터넷으로 직접 트래픽이 오갈 수 있는 퍼블릭 서브넷에 배포되어야 하며 탄력적 IP(Elastic IP)가 할당되어야 정상 작동한다. 프라이빗 서브넷에 잘못 배포된 기존 NAT 게이트웨이를 제거하고, 퍼블릭 서브넷에 EIP 가 할당된 새 NAT 게이트웨이를 생성한 후 프라이빗 서브넷 라우팅 테이블의 아웃바운드 인터넷 트래픽(`0.0.0.0/0`)을 이 NAT 게이트웨이로 라우팅해야 한다."
  },
  {
   "num": 190,
   "question": "한 회사가 중요한 데이터를 Amazon S3 버킷에 저장합니다. CloudOps 엔지니어는 모든 S3 API 활동을 기록하는 솔루션을 구축해야 합니다. 어떤 조치가 이 요구 사항을 충족합니까?",
   "options": {
    "A": "객체 액세스 로그를 기록하도록 S3 버킷 지표를 구성합니다.",
    "B": "모든 S3 객체에 대한 데이터 이벤트를 기록하도록 AWS CloudTrail 추적(trail)을 생성합니다.",
    "C": "각 S3 버킷에 대해 S3 서버 액세스 로깅을 활성화합니다.",
    "D": "객체 액세스 로그를 저장하기 위해 Amazon S3 용 AWS IAM Access Analyzer 를 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon S3 버킷에 대한 모든 API 호출 활동(GetObject, PutObject, DeleteObject 등)을 식별 정보, 요청 시간, 호출 주체 등과 함께 상세히 기록하고 감사하는 표준 솔루션은 AWS CloudTrail 의 데이터 이벤트(Data Events) 추적 기능이다. S3 서버 액세스 로깅(C)은 단순 HTTP 웹 요청 로그만 제공하므로 API 수준의 통합 관리에 최적화된 로그 형태가 아니다."
  },
  {
   "num": 191,
   "question": "한 글로벌 회사가 여러 AWS 계정을 관리하기 위해 AWS Organizations 의 조직을 사용합니다. 규정을 준수하기 위해 회사는 5 개 AWS 리전에 워크로드 환경을 배포합니다. 회사는 각 리전별로 별도의 AWS 계정을 보유하고 있습니다. 회사는 모든 환경의 VPC 를 디렉터리 역할을 하는 중앙 공유 VPC 및 공유 모니터링 VPC 에 연결해야 합니다. 공유 계정은 각각 별도의 AWS AWS 계정에 있습니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "중앙 공유 AWS 계정에 전송 게이트웨이(Transit Gateway)를 생성합니다. 회사의 AWS 계정과 전송 게이트웨이를 공유합니다. 모든 VPC 를 중앙 전송 게이트웨이에 연결합니다.",
    "B": "회사가 리소스를 배포한 모든 리전에 별도의 전송 게이트웨이를 생성합니다. 회사의 AWS 계정과 전송 게이트웨이를 공유합니다. 각 리전의 VPC 를 동일한 리전에 있는 전송 게이트웨이에 연결합니다. 전송 게이트웨이 간 피어링(peering)을 수행합니다. 모든 라우팅 테이블에 적절한 라우팅을 생성합니다.",
    "C": "공유 VPC 에 대한 가상 사설 게이트웨이(Virtual Private Gateway)를 생성합니다. 워크로드 VPC 에 대한 고객 게이트웨이(Customer Gateway)를 생성합니다. 디렉터리 VPC, 모니터링 VPC 및 모든 워크로드 VPC 간에 AWS Site-to-Site VPN 연결을 구성합니다.",
    "D": "중앙 공유 VPC, 공유 모니터링 VPC 및 모든 워크로드 VPC 간에 VPC 피어링 연결을 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Transit Gateway(전송 게이트웨이)는 리전 종속적(Region-specific) 리소스이므로, 서로 다른 리전에 위치한 VPC 를 단일 전송 게이트웨이에 직접 연결할 수 없다. 따라서 리소스가 배포된 각 리전마다 전송 게이트웨이를 각각 생성하고, AWS Resource Access Manager(RAM)를 통해 계정 간 전송 게이트웨이를 공유한 뒤, 동일 리전 내 VPC 들을 해당 전송 게이트웨이에 연결해야 한다. 그 후 각 리전의 전송 게이트웨이 간에 교차 리전 피어링(Inter-Region Peering)을 구성하고 라우팅을 설정하는 것이 다중 리전 및 다중 계정 VPC 교차 연결의 모범 사례 솔루션이다."
  },
  {
   "num": 192,
   "question": "한 회사가 인터넷 게이트웨이가 연결된 VPC 의 프라이빗 서브넷에 비프로덕션 Amazon EC2 인스턴스를 배포합니다. VPC 에는 단일 퍼블릭 서브넷과 단일 프라이빗 서브넷이 있습니다. 프라이빗 서브넷의 EC2 인스턴스는 인터넷으로 아웃바운드 통신을 할 수 없습니다. 프라이빗 서브넷의 EC2 인스턴스에 인터넷으로의 아웃바운드 통신 기능을 부여하는 조치는 무엇입니까?",
   "options": {
    "A": "프라이빗 서브넷에 NAT 게이트웨이를 생성합니다. NAT 게이트웨이에서 인터넷 게이트웨이로 트래픽을 라우팅합니다.",
    "B": "퍼블릭 서브넷에 NAT 게이트웨이를 생성합니다. 프라이빗 서브넷과 연결된 라우팅 테이블에 항목을 생성합니다. 대상을 0.0.0.0/0 으로 지정하고 타깃을 NAT 게이트웨이로 지정합니다.",
    "C": "프라이빗 서브넷과 연결된 라우팅 테이블에 항목을 생성합니다. 대상을 0.0.0.0/0 으로 지정하고 타깃을 인터넷 게이트웨이로 지정합니다.",
    "D": "두 번째 인터넷 게이트웨이를 생성합니다. 두 번째 인터넷 게이트웨이를 프라이빗 서브넷과 연결합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "프라이빗 서브넷에 있는 EC2 인스턴스가 인터넷으로 아웃바운드 통신을 수행하려면, 인터넷 게이트웨이로 직접 통신할 수 있는 퍼블릭 서브넷(Public Subnet) 내에 NAT 게이트웨이를 생성해야 한다. 그런 다음 프라이빗 서브넷의 라우팅 테이블에 아웃바운드 트래픽(`0.0.0.0/0`)의 타깃으로 해당 NAT 게이트웨이를 지정해야 한다. NAT 게이트웨이를 프라이빗 서브넷에 생성하거나(A), 인터넷 게이트웨이로 직접 라우팅하면(C) 프라이빗 서브넷의 정체성을 잃게 되거나 통신이 불가능해진다. VPC 당 인터넷 게이트웨이는 1 개만 연결할 수 있다(D)."
  },
  {
   "num": 193,
   "question": "한 회사가 AWS 클라우드에서 비용을 관리하고자 합니다. CloudOps 엔지니어는 청구서 보고서에 리소스에 할당된 회사 정의 커스텀 태그가 표시되도록 해야 합니다. CloudOps 엔지니어가 이 요구 사항을 충족하려면 무엇을 해야 합니까?",
   "options": {
    "A": "태그를 AWS 생성 비용 할당 태그로 활성화합니다.",
    "B": "태그를 사용자 정의 비용 할당 태그(user-defined cost allocation tags)로 활성화합니다.",
    "C": "새 비용 범주(cost category)를 생성합니다. 계정 청구 차원을 선택합니다.",
    "D": "새 AWS 비용 및 사용 보고서(AWS Cost and Usage Report)를 생성합니다. 리소스 ID 를 포함합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "사용자가 직접 리소스에 부여한 커스텀 태그(회사 정의 태그)가 AWS 청구서 및 비용 관리 보고서에 나타나도록 하려면, AWS Billing and Cost Management 콘솔의 비용 할당 태그 페이지에서 해당 태그를 '사용자 정의 비용 할당 태그(User-defined cost allocation tags)'로 활성화해야 한다. 활성화 후 수 시간이 지나면 비용 탐색기 및 청구 보고서에 태그별 비용 항목이 집계된다. AWS 생성 태그(A)는 `aws:` 접두사로 시작하는 시스템 생성 태그용이다."
  },
  {
   "num": 194,
   "question": "한 회사가 3 개의 Amazon EC2 인스턴스에서 워커 프로세스(worker process)를 실행합니다. 인스턴스는 단순 확장 정책을 사용하도록 구성된 Auto Scaling 그룹에 속해 있습니다. 인스턴스는 Amazon SQS 대기열의 메시지를 처리합니다. 무작위적인 메시지 증가 기간으로 인해 워커 프로세스의 성능이 저하되고 있습니다. CloudOps 엔지니어는 증가된 메시지 수를 수용하기 위해 인스턴스를 확장해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CloudWatch 를 사용하여 SQS 대기열에서 가장 오래된 메시지의 대략적인 연령을 계산하는 지표 수식(metric math expression)을 생성합니다. 지표 수식에 대한 대상 추적 확장 정책을 생성하여 Auto Scaling 그룹을 수정합니다.",
    "B": "CloudWatch 를 사용하여 인스턴스당 SQS 대기열에 표시되는 대략적인 메시지 수를 계산하는 지표 수식을 생성합니다. 지표 수식에 대한 대상 추적 확장 정책(target tracking scaling policy)을 생성하여 Auto Scaling 그룹을 수정합니다.",
    "C": "Application Load Balancer(ALB)를 생성합니다. ALB 를 Auto Scaling 그룹에 연결합니다. ALBRequestCountPerTarget 지표에 대한 대상 추적 확장 정책을 생성하여 Auto Scaling 그룹을 수정합니다.",
    "D": "Application Load Balancer(ALB)를 생성합니다. ALB 를 Auto Scaling 그룹에 연결합니다. Auto Scaling 그룹에 대한 예약된 확장 정책을 생성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon SQS 대기열 기반의 EC2 Auto Scaling 모범 사례는 각 워커 인스턴스당 백로그(처리 대기 중인 메시지 수) 비율을 수치화하는 것이다. CloudWatch 지표 수식(Metric Math)을 이용해 '대기열의 표시 가능한 대략적인 메시지 수(`ApproximateNumberOfMessagesVisible`) / Auto Scaling 인스턴스 수'인 인스턴스당 메시지 백로그 지표를 정의하고, 이를 기반으로 대상 추적 확장 정책(Target Tracking Scaling Policy)을 구성하는 것이 트래픽 변동에 맞춘 가장 정밀하고 효율적인 확장 솔루션이다. SQS 워커 노드에는 ALB(C, D)가 불필요하다."
  },
  {
   "num": 195,
   "question": "CloudOps 엔지니어가 사용자에게 로드되지 않는 웹사이트의 문제를 해결하고 있습니다. 웹사이트는 Amazon S3 버킷을 오리진으로 사용하는 Amazon CloudFront 배포에 의해 호스팅됩니다. CloudFront 배포 이름은 d111111abcdef8.cloudfront.net 입니다. S3 버킷의 Amazon 리소스 이름(ARN)은 arn:aws:s3:::example-com-website-files 입니다. S3 버킷에는 S3 퍼블릭 액세스 차단이 활성화되어 있습니다. CloudOps 엔지니어가 웹사이트의 DNS CNAME 레코드를 검사해보니 레코드 값이 [s3.amazonaws.com/example-com-website- files/](https://www.google.com/search?q=https%3A%2F%2Fs3.amazonaws.com%2Fex ample-com-website-files%2F) 로 설정되어 있음을 확인했습니다. 웹사이트가 CloudFront 와 함께 사용되도록 구성하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "S3 버킷에서 S3 퍼블릭 액세스 차단을 비활성화합니다.",
    "B": "S3 버킷이 있는 동일한 AWS 리전에 S3 액세스 포인트를 생성합니다. CloudFront 가 S3 버킷에서 읽을 수 있도록 허용하는 액세스 포인트 정책을 구성합니다. CNAME 레코드가 S3 액세스 포인트 이름을 가리키도록 설정합니다.",
    "C": "DNS CNAME 레코드 값을 S3 URL 대신 arn:aws:s3:::example-com-website-files 로 수정합니다.",
    "D": "DNS CNAME 레코드 값을 S3 URL 대신 d111111abcdef8.cloudfront.net 으로 수정합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "CloudFront 배포를 통해 웹사이트 콘텐츠를 제공하려면 사용자 정의 도메인의 DNS CNAME 레코드가 S3 URL 이 아닌 CloudFront 배포 도메인 이름(`d111111abcdef8.cloudfront.net`)을 타깃으로 지정해야 한다. CNAME 레코드가 S3 버킷 엔드포인트를 직접 가리키고 있으면 CloudFront 엣지 로케이션을 거치지 않고 S3 로 직접 요청이 전달되며, S3 버킷의 퍼블릭 액세스가 차단되어 있으므로 웹사이트가 로드되지 않는다. 따라서 DNS CNAME 레코드를 CloudFront 배포 도메인으로 수정하는 것이 올바른 구성이다."
  },
  {
   "num": 196,
   "question": "한 회사가 수많은 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. CloudOps 엔지니어는 EC2 인스턴스 상태가 변경될 때마다 운영팀에 알림을 보내는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
   "options": {
    "A": "인스턴스 상태 변경을 캡처하여 Amazon SNS 주제로 알림을 게시하는 스크립트를 생성합니다. 모든 EC2 인스턴스에서 스크립트를 실행하기 위해 AWS Systems Manager Run Command 를 사용합니다.",
    "B": "EC2 인스턴스 상태 변경을 캡처하는 Amazon EventBridge 이벤트 규칙을 생성합니다. Amazon SNS 주제를 대상으로 설정합니다.",
    "C": "EC2 인스턴스 상태 변경을 캡처하는 Amazon EventBridge 이벤트 규칙을 생성합니다. Amazon SNS 주제로 알림을 게시하는 AWS Lambda 함수를 대상으로 설정합니다.",
    "D": "자동 교정을 통해 인스턴스 상태 변경을 평가하는 AWS Config 커스텀 규칙을 생성합니다. Amazon SNS 주제로 알림을 게시하는 AWS Lambda 함수를 호출하도록 해당 규칙을 사용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "EC2 인스턴스의 상태 변경 이벤트(EC2 Instance State-change Notification)는 Amazon EventBridge 로 자동 발행된다. 별도의 커스텀 코드나 Lambda 함수(C)를 도입할 필요 없이 EventBridge 이벤트 규칙의 타깃(Target)으로 Amazon SNS 주제를 직접 연결하는 것(B)이 가장 간결하고 운영 효율적인 솔루션이다. EC2 내 스크립트 실행 방식(A)이나 AWS Config 커스텀 규칙 및 Lambda 연동 방식(D)은 불필요한 개발 및 운영 오버헤드를 유발한다."
  },
  {
   "num": 197,
   "question": "한 회사가 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 회사는 애플리케이션이 HTTP 500 상태 코드를 반환할 때 애플리케이션 서버에서 사용자 정의 복구 절차를 수행하기 위해 AWS Lambda 함수가 필요합니다. CloudOps 엔지니어는 HTTP 500 상태 코드를 탐지하고 오류가 감지될 때 Lambda 함수를 안정적으로 실행하는 솔루션을 설계해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "HTTPCode_Target_5XX_Count ALB 타겟 그룹 지표에 대해 Amazon CloudWatch 경보를 구성합니다. Lambda 함수를 실행하도록 경보 작업을 설정합니다.",
    "B": "HTTP 500 상태 코드를 탐지하기 위해 Amazon S3 에 있는 ALB 액세스 로그를 지속적으로 스캔한 다음 기존 Lambda 함수를 호출하는 새 Lambda 함수를 배포합니다.",
    "C": "애플리케이션 인스턴스에서 AWS CloudTrail 을 활성화합니다. HTTP 500 상태 코드를 탐지하고 Lambda 함수를 실행하도록 Amazon CloudWatch Logs 지표 필터를 구성합니다.",
    "D": "Lambda 함수를 호출하는 모든 ALB 요청 이벤트에 대해 Amazon EventBridge 규칙을 생성합니다. 내부적으로 HTTP 500 상태 코드를 필터링하도록 Lambda 함수를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "ALB 타겟 인스턴스에서 반환되는 HTTP 500 계열 오류는 Amazon CloudWatch 의 `HTTPCode_Target_5XX_Count` 지표로 수집된다. 이 지표를 모니터링하는 CloudWatch 경보(Alarm)를 생성하고, 경보 상태 변경 시 복구 작업을 수행하는 AWS Lambda 함수를 트리거하도록 연결하는 것이 가장 안정적이고 효율적이다. S3 액세스 로그를 지속적으로 스캔하는 방식(B)은 실시간성이 떨어지고 운영 비용이 증가하며, 모든 ALB 요청마다 EventBridge 및 Lambda 를 호출하는 방식(D)은 극심한 비용과 리소스 낭비를 초래한다."
  },
  {
   "num": 198,
   "question": "한 회사가 Amazon EC2 인스턴스에서 커스텀 데이터베이스를 실행하고 있습니다. 데이터베이스는 Amazon Elastic Block Store(Amazon EBS) 볼륨에 데이터를 저장합니다. SysOps 관리자는 EBS 볼륨에 대한 백업 전략을 설정해야 합니다. SysOps 관리자가 이 요구 사항을 충족하려면 무엇을 해야 합니까?",
   "options": {
    "A": "VolumeIdleTime 지표에 대해 Amazon CloudWatch 경보를 생성하고 EBS 볼륨의 스냅샷을 찍는 작업을 추가합니다.",
    "B": "정기적인 일정에 따라 EBS 볼륨의 스냅샷을 찍도록 AWS Data Pipeline 에서 파이프라인을 생성합니다.",
    "C": "정기적인 일정에 따라 EBS 볼륨의 스냅샷을 찍도록 Amazon Data Lifecycle Manager(Amazon DLM) 정책을 생성합니다.",
    "D": "정기적인 일정에 따라 EBS 볼륨의 스냅샷을 찍도록 AWS DataSync 작업을 생성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon EBS 볼륨의 스냅샷 생성, 보존 및 삭제 수명 주기를 정기적인 스케줄에 따라 자동화하는 전용 관리형 서비스는 Amazon Data Lifecycle Manager(Amazon DLM)이다. 태그 기반으로 대상 볼륨을 지정하고 수명 주기 정책을 정의함으로써 추가 관리 오버헤드 없이 주기적인 백업 전략을 구현할 수 있다. Data Pipeline(B)이나 DataSync(D)는 데이터 이동 및 이관용 서비스이지 EBS 스냅샷 자동 관리 전용 도구가 아니다."
  },
  {
   "num": 199,
   "question": "CloudOps 엔지니어가 트랜잭션 처리 애플리케이션을 실행하는 Amazon ECS 서비스를 담당하고 있습니다. CloudOps 엔지니어는 ECS 서비스에 새로운 기능을 배포해야 합니다. 배포 중 다운타임이 발생해서는 안 되며, 성능 저하 버그가 탐지되는 경우 원클릭으로 즉시 롤백할 수 있는 기능도 갖춰야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "10 분 동안 10% 증분되는 AWS CodeDeploy 선형 트래픽 전환을 사용하여 카나리 배포를 구성합니다.",
    "B": "AWS CodeDeploy 를 사용하여 블루/그린 배포를 구현합니다.",
    "C": "최소 정상 비율(minimum healthy percentage)을 100%로 설정하여 ECS 서비스를 구성합니다. 기본 롤링 업데이트 배포 유형을 사용합니다.",
    "D": "ECS 서비스의 희망 수량을 현재 크기의 두 배로 설정합니다. 새 태스크가 등록된 후 이전 태스크를 수동으로 종료합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon ECS 환경에서 무중단 배포를 달성하고, 배포 후 트래픽 전환 과정에서 성능 저하 및 오류 감지 시 즉시 기존 버전 환경으로 원스텝 롤백(Immediate one-step rollback)을 수행할 수 있는 모범 사례 솔루션은 AWS CodeDeploy 기반의 블루/그린(Blue/Green) 배포 방식이다. 기본 롤링 업데이트(C)나 수동 수량 변경(D) 방식은 문제 발생 시 신속한 완전 트래픽 복원 및 원스텝 롤백을 직접 보장하지 못한다."
  },
  {
   "num": 200,
   "question": "한 회사가 Nitro 기반 Amazon EC2 Linux 인스턴스 플릿에서 전자 상거래 웹사이트를 호스팅합니다. 최근 할인 이벤트 기간 동안 일부 고객이 HTTP 타임아웃 오류를 보고했습니다. 오류의 근본 원인을 파악하는 데 도움을 얻기 위해 CloudOps 엔지니어는 ENA(Elastic Network Adapter) 드라이버로부터 더 자세한 네트워크 지표를 확보해야 합니다. CloudOps 엔지니어는 conntrack_allowance_available 지표와 conntrack_allowance_exceeded 지표를 얻어야 합니다. 가장 운영 효율적으로 이 지표들을 제공하는 솔루션은 무엇입니까?",
   "options": {
    "A": "인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. conntrack_allowance_available 지표와 conntrack_allowance_exceeded 지표로 필터링합니다.",
    "B": "EC2 인스턴스에 collectd 데몬과 Amazon CloudWatch 에이전트를 설치합니다. conntrack_allowance_available 지표와 conntrack_allowance_exceeded 지표로 필터링합니다.",
    "C": "VPC Flow Logs 를 활성화합니다. conntrack_allowance_available 지표와 conntrack_allowance_exceeded 지표로 필터링합니다.",
    "D": "인스턴스에 대한 Performance Insights 를 활성화합니다. conntrack_allowance_available 지표와 conntrack_allowance_exceeded 지표를 보려면 Amazon CloudWatch 를 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Nitro 기반 EC2 인스턴스의 ENA 드라이버에서 제공하는 네트워크 성능 및 연결 추적 한계 관련 지표(`conntrack_allowance_available`, `conntrack_allowance_exceeded` 등)는 Amazon CloudWatch 에이전트를 인스턴스에 설치하고 구성함으로써 CloudWatch 로 직접 수집 및 모니터링할 수 있다. collectd 데몬(B)을 추가 설치할 필요가 없으며, VPC Flow Logs(C)는 패킷 플로우 단위 정보만 기록할 뿐 ENA 드라이버 한계 지표를 제공하지 않는다. Performance Insights(D)는 RDS 데이터베이스 전용 모니터링 기능이다."
  },
  {
   "num": 201,
   "question": "회사는 계정을 관리하기 위해 AWS Organizations 를 사용합니다. 프로덕션 계정의 경우, SysOps 관리자는 현재 및 향후 모든 Amazon EC2 인스턴스와 Amazon Elastic File System(Amazon EFS) 파일 시스템에 대해 모든 데이터가 매일 백업되도록 보장해야 합니다. 백업은 30 일 동안 보관되어야 합니다. 가장 적은 구현 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Backup 에서 백업 플랜을 생성합니다. 계정에서 실행 중인 기존 모든 EC2 및 EFS 리소스를 선택하여 리소스 ID 별로 리소스를 할당합니다. 새로운 리소스를 포함하도록 매일 백업 플랜을 수정합니다. 30 일 후 백업을 만료하는 수명 주기 정책을 사용하여 백업 플랜이 매일 실행되도록 예약합니다.",
    "B": "AWS Backup 에서 백업 플랜을 생성합니다. 태그별로 리소스를 할당합니다. 기존 모든 EC2 및 EFS 리소스에 태그가 올바르게 지정되었는지 확인합니다. 올바른 태그가 적용되지 않으면 인스턴스 및 파일 시스템 생성을 방지하는 서비스 제어 정책(SCP)을 프로덕션 계정 OU 에 적용합니다. 30 일 후 백업을 만료하는 수명 주기 정책을 사용하여 백업 플랜이 매일 실행되도록 예약합니다.",
    "C": "Amazon Data Lifecycle Manager(Amazon DLM)에서 수명 주기 정책을 생성합니다. 계정에서 실행 중인 기존 모든 EC2 및 EFS 리소스를 선택하여 리소스 ID 별로 모든 리소스를 할당합니다. 새로운 리소스를 포함하도록 매일 수명 주기 정책을 수정합니다. 보존 기간을 30 일로 설정하여 매일 스냅샷을 생성하도록 수명 주기 정책을 예약합니다.",
    "D": "Amazon Data Lifecycle Manager(Amazon DLM)에서 수명 주기 정책을 생성합니다. 태그별로 모든 리소스를 할당합니다. 기존 모든 EC2 및 EFS 리소스에 태그가 올바르게 지정되었는지 확인합니다. 올바른 태그가 적용되지 않으면 리소스 생성을 방지하는 서비스 제어 정책(SCP)을 적용합니다. 보존 기간을 30 일로 설정하여 매일 스냅샷을 생성하도록 수명 주기 정책을 예약합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Backup 을 사용하면 태그 기반으로 리소스를 백업 대상에 자동 할당할 수 있다. 필수 백업 태그 지정을 강제하는 SCP(서비스 제어 정책)를 AWS Organizations 의 프로덕션 OU 에 적용하면, 향후 생성되는 모든 EC2 및 EFS 리소스에 태그가 적용되어 관리자가 수동으로 대상을 수정할 필요 없이 자동 백업된다. 리소스 ID 를 매일 수동 업데이트하는 방식(A, C)은 많은 운영 공수가 발생한다. Amazon DLM(C, D)보다 AWS Backup 이 EC2 와 EFS 를 아우르는 중앙 집중식 통합 백업 관리에 최적화되어 있다."
  },
  {
   "num": 202,
   "question": "회사는 Amazon Aurora 데이터베이스를 한 AWS 계정에서 다른 AWS 리전을 사용하는 두 번째 계정으로 복사해야 합니다. CloudOps 엔지니어는 이 프로세스가 매일 수행되도록 자동화해야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Backup 에서 백업 플랜을 생성합니다. 두 번째 계정과 두 번째 리전을 대상(destination)으로 지정합니다.",
    "B": "일정에 따라 실행되는 Amazon EventBridge 규칙을 생성합니다. 데이터베이스를 두 번째 계정과 두 번째 리전으로 복사하는 자동화 스크립트를 실행하는 AWS Lambda 함수를 생성합니다. EventBridge 규칙을 사용하여 Lambda 함수를 호출합니다.",
    "C": "반복 규칙을 사용하여 Amazon EventBridge Scheduler 를 구성합니다. RDS StartExportTask API 작업을 타깃으로 추가합니다. 데이터베이스 및 내보낸 데이터를 저장할 Amazon S3 버킷에 대한 관련 세부 정보를 지정합니다. 데이터를 두 번째 계정과 두 번째 리전으로 복제하도록 S3 버킷에 대한 복제 규칙을 생성합니다.",
    "D": "Aurora 데이터베이스를 복제하도록 AWS Application Migration Service 를 구성합니다. 두 번째 계정과 두 번째 리전을 대상으로 지정합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Backup 은 백업 플랜 구성 내에서 교차 계정 및 교차 리전 복사(Cross-Account & Cross-Region Copy) 기능을 기본 제공한다. 커스텀 스크립트 작성(B)이나 complex S3 내보내기/복제 파이프라인(C)을 구축할 필요 없이 최소한의 클릭만으로 매일 데이터베이스 백업을 타 계정/리전으로 자동 복사할 수 있다. Application Migration Service(D)는 Server 단위 Lift-and-Shift 이관 전용 서비스이므로 정기 DB 백업 복사에 적절하지 않다."
  },
  {
   "num": 203,
   "question": "회사는 정기적으로 애플리케이션 배포를 수행하고 있습니다. 사용자들은 애플리케이션이 때때로 정상적으로 작동하지 않는다고 보고합니다. 회사는 일부 사용자의 브라우저가 JavaScript 파일의 이전 버전을 가져오고 있음을 발견했습니다. 애플리케이션은 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 실행됩니다. ALB 는 Amazon CloudFront 디스트리뷰션의 오리진입니다. SysOps 관리자는 CloudFront 가 최신 버전의 JavaScript 파일을 제공하도록 솔루션을 구현해야 합니다. 이 솔루션은 애플리케이션 서버 성능에 영향을 미치지 않아야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CloudFront 디스트리뷰션 오리진 동작의 최대 TTL 및 기본 TTL 을 0 으로 줄입니다.",
    "B": "CloudFront 디스트리뷰션의 모든 파일을 무효화(invalidate)하는 최종 단계를 배포 프로세스에 추가합니다.",
    "C": "CloudFront 디스트리뷰션에서 변경된 JavaScript 파일만 무효화(invalidate)하는 최종 단계를 배포 프로세스에 추가합니다.",
    "D": "JavaScript 파일을 제공하는 경로에서 CloudFront 를 제거합니다. ALB 를 통해 직접 JavaScript 파일을 제공합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudFront 무효화(Invalidation)는 엣지 로케이션에 캐시된 이전 버전 파일을 삭제하여 오리진으로부터 최신 파일이 즉시 제공되도록 보장하는 기능이다. 배포 과정에서 '변경된 JavaScript 파일'만 지정하여 무효화하면, 불필요한 전체 캐시 삭제를 방지하고 오리진 서버(ALB 및 EC2)에 급격한 부하를 주지 않으면서 요구 사항을 충족할 수 있다. TTL 을 0 으로 변경하거나(A) CloudFront 를 제거하는 것(D)은 캐시 기능을 무력화하여 모든 사용자 요청이 EC2 로 몰려 성능을 저하시킨다. 모든 파일을 무효화하는 것(B)은 무상태 정적 리소스까지 다시 가져오게 만들어 오리진 부하를 가중시킨다."
  },
  {
   "num": 204,
   "question": "회사는 여러 AWS 리전에 분산된 여러 Amazon EC2 인스턴스를 실행합니다. 회사는 AWS Systems Manager 도구를 사용하여 EC2 인스턴스를 관리합니다. 회사는 사용자 로그인 및 사용자가 수행하는 모든 작업을 기록하기 위해 모든 인스턴스에 감사 소프트웨어 패키지를 배포해야 합니다. CloudOps 엔지니어는 기존의 모든 EC2 인스턴스에 감사 소프트웨어를 자동으로 설치하는 솔루션을 구현해야 합니다. 또한 이 솔루션은 새로운 EC2 인스턴스가 시작될 때 해당 인스턴스에도 감사 소프트웨어를 자동으로 설치해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "감사 소프트웨어가 포함된 Systems Manager Distributor 패키지를 생성합니다. 패키지를 Amazon S3 버킷에 저장합니다. 회사의 AWS 계정에 있는 모든 관리형 인스턴스에 소프트웨어 패키지를 설치하도록 각 리전에 Systems Manager State Manager 연결(association)을 생성합니다.",
    "B": "감사 소프트웨어용 설치 프로그램을 Amazon S3 버킷에 로드합니다. Systems Manager Fleet Manager 원격 데스크톱을 사용하여 모든 인스턴스에 연결합니다. AWS CLI 를 사용하여 설치 프로그램을 다운로드합니다. 수동으로 설치 프로그램을 실행합니다.",
    "C": "소프트웨어 설치 프로그램을 호출하는 AWS Lambda 함수를 생성합니다. Lambda 레이어를 사용하여 감사 소프트웨어를 Lambda 함수에 병합합니다. 예약된 Amazon EventBridge 규칙을 사용하여 각 인스턴스에서 Lambda 함수를 실행합니다.",
    "D": "Amazon EC2 RunInstances 이벤트에 반응하는 Amazon EventBridge 규칙을 생성합니다. 소프트웨어 설치 프로그램을 실행하는 단계를 포함하도록 이벤트를 수정하도록 규칙을 구성합니다. 모든 인스턴스를 재부팅합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager Distributor 는 소프트웨어 패키지를 패키징하여 관리형 인스턴스에 안전하게 배포하는 기능을 수행한다. 여기에 Systems Manager State Manager 연결(Association)을 사용하면 정책을 정의하여 기존에 작동 중인 모든 관리형 EC2 는 물론, 추후 새로 시작되는 인스턴스에도 대상 태그/조건에 맞춰 감사 소프트웨어 패키지가 자동으로 설치되도록 지속적으로 보장할 수 있다. Fleet Manager 를 이용한 수동 접속(B)은 자동화가 아니며, Lambda 레이어로 인스턴스 내부 프로그램을 실행하려는 구성(C)이나 EC2 시작 이벤트를 직접 변경하는 구성(D)은 정상적인 아키텍처 패턴이 아니다."
  },
  {
   "num": 205,
   "question": "회사는 보안을 개선하기 위해 워크로드를 퍼블릭 서브넷에서 프라이빗 서브넷으로 이동합니다. 테스트 중에 프라이빗 서브넷의 서버가 외부 API 에 도달할 수 없습니다. VPC 에는 CIDR 블록 10.0.0.0/16, 퍼블릭 서브넷 2 개, 프라이빗 서브넷 2 개, 인터넷 게이트웨이 1 개, 그리고 각 프라이빗 서브넷에 NAT 게이트웨이 1 개가 있습니다. 회사는 프라이빗 서브넷의 워크로드가 외부 API 에 도달할 수 있도록 보장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "아웃바운드 전용 인터넷 게이트웨이(Outbound-only internet gateway)를 배포하고 라우팅 테이블을 업데이트합니다.",
    "B": "프록시로 Amazon API Gateway HTTP API 를 생성합니다.",
    "C": "각 퍼블릭 서브넷에 NAT 게이트웨이를 배포하고 프라이빗 서브넷 라우팅 테이블을 업데이트합니다.",
    "D": "VPC 인터페이스 엔드포인트를 생성하고 라우팅 테이블을 업데이트합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "NAT 게이트웨이는 프라이빗 서브넷의 인스턴스가 아웃바운드 인터넷 통신을 할 수 있도록 해주는 서비스이며, 정상 동작을 위해 반드시 '퍼블릭 서브넷'에 생성되어 인터넷 게이트웨이(IGW)로 가는 라우팅 경로를 가져야 한다. 문제 상황은 NAT 게이트웨이가 프라이빗 서브넷 내부 잘못 구성되어 외부 라우팅이 불가능한 상태이다. 따라서 NAT 게이트웨이를 퍼블릭 서브넷에 배치하고, 프라이빗 서브넷의 라우팅 테이블에서 `0.0.0.0/0` 대상 타깃을 해당 퍼블릭 NAT 게이트웨이로 지정해야 한다. 아웃바운드 전용 인터넷 게이트웨이(A)는 IPv6 전용이며, VPC 인터페이스 엔드포인트(D)는 AWS 내부 서비스 또는 PrivateLink 연동을 위한 전용 라우팅 수단이므로 일반 임의 외부 API 연결에는 사용할 수 없다."
  },
  {
   "num": 206,
   "question": "회사는 AWS Organizations 에서 여러 AWS 계정을 관리하고 있습니다. 회사는 AWS 환경의 내부 보안을 검토 중입니다. 보안 관리자는 자체 AWS 계정을 가지고 있으며 개발자 AWS 계정의 VPC 구성을 검토하려고 합니다. 가장 안전한 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "VPC 리소스와 관련된 읽기 전용 액세스 권한이 있는 IAM 정책을 각 개발자 계정에 생성합니다. 이 정책을 IAM 사용자에게 할당합니다. 사용자 자격 증명을 보안 관리자와 공유합니다.",
    "B": "VPC 작업을 포함하여 모든 Amazon EC2 작업에 대한 관리자 액세스 권한이 있는 IAM 정책을 각 개발자 계정에 생성합니다. 이 정책을 IAM 사용자에게 할당합니다. 사용자 자격 증명을 보안 관리자와 공유합니다.",
    "C": "VPC 리소스와 관련된 관리자 액세스 권한이 있는 IAM 정책을 각 개발자 계정에 생성합니다. 이 정책을 크로스 계정 IAM 역할(Role)에 할당합니다. 보안 관리자에게 자신의 계정에서 해당 역할을 전환(Assume)하도록 요청합니다.",
    "D": "VPC 리소스와 관련된 읽기 전용 액세스 권한이 있는 IAM 정책을 각 개발자 계정에 생성합니다. 이 정책을 크로스 계정 IAM 역할(Role)에 할당합니다. 보안 관리자에게 자신의 계정에서 해당 역할을 전환(Assume)하도록 요청합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "보안의 기본 원칙은 최소 권한 원칙(Principle of Least Privilege) 준수 및 자격 증명 공유 금지이다. 보안 관리자는 VPC 구성 검토(읽기 전용) 목적만 가지므로 읽기 전용 권한 정책을 부여해야 한다. 또한 IAM 사용자 자격 증명을 직접 공유하는 방식(A, B)은 보안상 금지되는 행위이므로, AWS STS 기반의 크로스 계정 IAM 역할(Role)을 전환(AssumeRole)하여 사용하는 D 가 가장 안전한 솔루션이다."
  },
  {
   "num": 207,
   "question": "회사는 AWS KMS 키를 사용한 서버 측 암호화(SSE-KMS)가 활성화된 Amazon S3 버킷을 보유하고 있습니다. 여러 애플리케이션이 일일 보고를 위해 이 S3 버킷에서 데이터를 읽습니다. 회사는 데이터를 데이터 웨어하우스로 이동할 때 주 단위로 S3 버킷의 데이터를 지웁니다. 더 많은 애플리케이션이 S3 버킷에서 데이터를 읽음으로 인해 KMS 관련 트랜잭션 비용이 증가하고 있습니다. CloudOps 엔지니어는 S3 암호화를 제거하지 않고 기존 객체에 대한 액세스 권한을 잃지 않으면서 KMS 비용을 줄여야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 버킷에서 S3 Bucket Key(버킷 키)를 활성화합니다. 기존 KMS 키를 지정합니다.",
    "B": "S3 버킷의 암호화 유형을 고객 제공 키를 사용한 서버 측 암호화(SSE-C)로 변경합니다.",
    "C": "Amazon CloudFront 를 사용하여 S3 버킷의 객체를 캐싱하고 애플리케이션에 객체를 제공합니다.",
    "D": "애플리케이션이 S3 액세스 포인트를 통해 S3 버킷에 연결하도록 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "S3 Bucket Keys(버킷 키)를 활성화하면 Amazon S3 내에 버킷 수준의 단기 데이터 키가 생성 및 캐싱되어 AWS KMS 로 발송되는 KMS API 호출 횟수를 최대 99%까지 대폭 줄일 수 있다. 이로 인해 암호화 옵션이나 기존 객체 접근 권한을 변경하지 않고 최소한의 운영 오버헤드로 KMS 트랜잭션 비용을 감축시킨다. SSE-C 로의 변경(B)은 키 관리 부담을 애플리케이션 측으로 전가하며, CloudFront(C)나 S3 Access Point(D)는 KMS 트랜잭션 비용 감축을 위한 직접적이고 최선의 대책이 아니다."
  },
  {
   "num": 208,
   "question": "회사는 Amazon Linux 2 Amazon Machine Image(AMI) 기반의 Amazon EC2 인스턴스 수천 대를 실행하고 있습니다. SysOps 관리자는 EC2 인스턴스 중 하나에서 대화형 세션이 필요한 모든 사용자의 명령 및 출력을 기록하는 솔루션을 구현해야 합니다. 솔루션은 내구성 있는 저장 위치에 데이터를 로깅해야 합니다. 또한 로그 데이터를 기반으로 자동화된 알림 및 경보를 제공해야 합니다. 가장 뛰어난 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "각 EC2 인스턴스에서 명령 세션 로깅을 구성합니다. 통합 Amazon CloudWatch 에이전트를 구성하여 세션 로그를 Amazon CloudWatch Logs 로 전송합니다. Amazon Athena 를 사용하여 쿼리 필터 및 알림을 설정합니다.",
    "B": "모든 사용자가 EC2 인스턴스에 대한 명령줄 액세스가 필요할 때 중앙 배스천 호스트(bastion host)를 사용하도록 요구합니다. 배스천 호스트에 통합 Amazon CloudWatch 에이전트를 구성하여 세션 로그를 Amazon CloudWatch Logs 로 전송합니다. CloudWatch Logs 에서 관련 보안 탐지 항목에 대한 지표 필터 및 지표 경보를 설정합니다.",
    "C": "모든 사용자가 EC2 인스턴스에 대한 명령줄 액세스가 필요할 때 AWS Systems Manager Session Manager 를 사용하도록 요구합니다. 세션 로그를 Amazon CloudWatch Logs 로 스트리밍하도록 Session Manager 를 구성합니다. CloudWatch Logs 에서 관련 보안 탐지 항목에 대한 지표 필터 및 지표 경보를 설정합니다.",
    "D": "각 EC2 인스턴스에서 명령 세션 로깅을 구성합니다. 모든 사용자가 EC2 인스턴스에 대한 명령줄 액세스가 필요할 때 AWS Systems Manager Run Command 문서를 사용하도록 요구합니다. 통합 Amazon CloudWatch 에이전트를 구성하여 세션 로그를 Amazon CloudWatch Logs 로 전송합니다. Amazon Athena 쿼리 결과를 기반으로 CloudWatch 경보를 설정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Systems Manager Session Manager 는 인스턴스에 SSH 키 배포나 인바운드 포트 개방 없이 안전한 대화형 세션을 제공하며, 모든 세션 명령과 응답 결과를 Amazon CloudWatch Logs 나 S3 로 자동 스트리밍하는 기능을 지원한다. 수천 대의 인스턴스를 관리할 때 배스천 호스트(B)나 개별 Agent 관리(A, D)보다 운영 효율성이 가장 뛰어나다. 또한 CloudWatch Logs 의 지표 필터(Metric Filter)와 지표 경보(Metric Alarm)를 조합하여 실시간 자동 알림 체계를 완성할 수 있다."
  },
  {
   "num": 209,
   "question": "회사는 새 웹 애플리케이션으로의 트래픽을 증가시킬 마케팅 캠페인을 준비하고 있습니다. 애플리케이션은 애플리케이션 로직을 위해 Amazon API Gateway 및 AWS Lambda 를 사용합니다. 애플리케이션은 관련 사용자 데이터를 하나의 Aurora 복제본(Replica)을 포함하는 Amazon Aurora MySQL DB 클러스터에 저장합니다. 애플리케이션의 데이터베이스 쿼리는 쓰기 5%, 읽기 95%입니다. 트래픽이 증가할 때 데이터베이스를 확장하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "Aurora 복제본의 평균 CPU 사용률을 기준으로 클러스터에서 Aurora 복제본을 추가하거나 제거하도록 Aurora Auto Scaling 을 구성합니다.",
    "B": "Aurora 복제본의 평균 CPU 사용률을 기준으로 Aurora 복제본의 크기(인스턴스 유형)를 인상하거나 감소시키도록 Aurora Auto Scaling 을 구성합니다.",
    "C": "Aurora 클러스터를 모니터링하도록 AWS Auto Scaling 을 구성합니다. 기본(Primary) 인스턴스의 평균 CPU 사용률을 기준으로 클러스터에서 Aurora 복제본을 추가하거나 제거하도록 AWS Auto Scaling 을 구성합니다.",
    "D": "Aurora 클러스터를 모니터링하도록 AWS Auto Scaling 을 구성합니다. 기존 Aurora 복제본의 평균 CPU 사용률을 기준으로 클러스터에서 Aurora 복제본을 추가하거나 제거하도록 AWS Auto Scaling 을 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "해당 워크로드는 읽기 비중이 95%로 매우 높으므로 읽기 전용 복제본(Aurora Replicas)을 수평 확장(Scale-out)하는 것이 올바른 접근이다. Aurora Auto Scaling 은 Aurora 복제본들의 평균 CPU 사용률 또는 연결 수 지표에 따라 복제본 개수를 자동으로 조절(Scale-in/out)한다. Aurora Auto Scaling 은 인스턴스 사양 자체를 키우는 수직 확장(B)을 지원하지 않으며, 기본(Primary) 인스턴스의 지표만 감시하는 구성(C)은 읽기 복제본 노드의 실제 부하 상황을 정확히 반영하지 못한다."
  },
  {
   "num": 210,
   "question": "회사는 다중 AZ(Multi-AZ) 배포 환경의 Amazon EC2 Windows 인스턴스 플릿에서 애플리케이션을 실행합니다. 회사는 인스턴스가 공유 파일에 액세스할 수 있는 솔루션이 필요합니다. 솔루션은 고가용성을 제공해야 하고, 네이티브 Windows 스토리지 기능을 사용해야 하며, 모든 파일 요청에 대한 일관성을 최대로 확보해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Multi-AZ Amazon FSx for Windows File Server 파일 시스템을 생성합니다. 파일 시스템의 DNS 이름을 사용하여 인스턴스에 파일 공유를 매핑합니다.",
    "B": "인스턴스에 공유 Amazon S3 버킷에 대한 액세스 권한을 부여합니다. Windows 작업 스케줄러를 사용하여 S3 버킷의 콘텐츠를 각 인스턴스에 로컬로 주기적으로 동기화합니다.",
    "C": "EFS Standard 스토리지 클래스를 사용하는 Amazon EFS 파일 시스템을 생성합니다. 파일 시스템의 DNS 이름과 EFS 마운트 도우미를 사용하여 파일 시스템을 인스턴스에 마운트합니다.",
    "D": "새로운 Amazon EBS Multi-Attach 볼륨을 생성합니다. EBS 볼륨을 각 인스턴스에 추가 드라이브로 연결합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon FSx for Windows File Server 는 네이티브 Windows SMB 프로토콜 및 NTFS 권한을 지원하며, Multi-AZ 배포 모델을 통해 동기식 파일 복제 및 자동 장애 조치(Failover)로 높은 가용성과 일관성을 제공한다. Amazon EFS(C)는 Linux 전용 POSIX/NFS 기반 서비스로 Windows 스토리지 기능 요구조건에 부합하지 않으며, Amazon EBS Multi-Attach(D)는 단일 AZ 내에서만 볼륨 공유가 가능하여 Multi-AZ 요구사항을 만족할 수 없다."
  },
  {
   "num": 211,
   "question": "개발 팀은 Amazon EC2 머신의 상태(state)가 \"terminated\"가 아닌 Amazon EventBridge 이벤트를 매칭하려고 합니다. 관련 이벤트를 찾기 위해 개발 팀이 사용해야 하는 이벤트 패턴은 무엇입니까?",
   "options": {
    "A": "{\"detail\": {\"state\": [\"not equals-ignore-case\": \"terminated\"]}}",
    "B": "{\"detail\": {\"state\": [\"! equals-ignore-case\": \"terminated\"]}}",
    "C": "{\"detail\": {\"state\": [\"equals-ignore-case\": \"terminated\"]}}",
    "D": "{\"detail\": {\"state\": [{\"anything-but\": {\"equals-ignore-case\": \"terminated\"}}]}}"
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon EventBridge 에서 특정 문자열 값을 제외하는 조건을 작성할 때는 `anything- but` 콘텐츠 기반 필터링 연산자를 사용한다. 대소문자를 구분하지 않고 특정 단어(\"terminated\")를 제외하려면 `anything-but` 필터 내에 `equals-ignore-case` 구문을 결합하여 지정해야 한다. A 및 B 옵션은 EventBridge 이벤트 패턴에서 지원하지 않는 잘못된 문법이며, C 옵션은 \"terminated\" 상태와 일치하는 이벤트만을 선택하는 패턴이다."
  },
  {
   "num": 212,
   "question": "회사는 객체 스토리지로 Amazon S3 를 사용합니다. CloudOps 엔지니어는 지난 1 년 동안 회사의 모든 S3 버킷에 걸쳐 Amazon S3 사용량이 매달 두 배로 증가한 것을 확인했습니다. 회사는 데이터가 생성된 동일한 AWS 리전에서 데이터를 저장하고 소비합니다. 회사는 30 일이 지난 데이터에는 절대로 액세스하지 않습니다. CloudOps 엔지니어는 회사의 Amazon S3 비용을 최적화해야 합니다. 가장 적은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "30 일이 지난 데이터를 삭제하는 AWS Lambda 함수를 생성합니다. Amazon EventBridge cron 표현식을 사용하여 매달 이 함수를 호출합니다.",
    "B": "S3 Storage Lens 를 사용하여 모든 S3 버킷에서 30 일이 지난 객체를 식별합니다.",
    "C": "30 일 이전에 생성된 객체를 확인하고 삭제하도록 객체 생성 수명 주기를 수정합니다.",
    "D": "30 일 이전에 생성된 모든 객체를 만료(expire)시키는 S3 수명 주기 정책(S3 Lifecycle policy)을 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "S3 수명 주기 정책(S3 Lifecycle Policy)을 통해 만료(Expiration) 작업을 설정하면 생성된 지 30 일이 지난 객체를 자동으로 완전 삭제할 수 있다. 이 방식은 S3 자체 내장 규칙으로 작동하므로 별도의 커스텀 코드 작성이나 일정 예약 관리(A) 없이 가장 적은 운영 오버헤드로 비용을 자동 절감할 수 있다. S3 Storage Lens(B)는 분석 및 모니터링 도구로 직접 삭제 기능을 수행하지 않는다."
  },
  {
   "num": 213,
   "question": "CloudOps 엔지니어가 퍼블릭 서브넷에 Amazon EC2 Linux 인스턴스를 시작합니다. 인스턴스가 실행 중일 때 CloudOps 엔지니어는 퍼블릭 IP 주소를 가져와 인스턴스에 원격으로 접속을 시도하지만, 항상 타임아웃(timeout) 오류가 발생합니다. CloudOps 엔지니어가 인스턴스에 원격으로 접속할 수 있도록 허용하는 조치는 무엇입니까?",
   "options": {
    "A": "CloudOps 엔지니어의 IP 주소에 대한 퍼블릭 서브넷의 라우팅 테이블 항목을 추가합니다.",
    "B": "CloudOps 엔지니어의 IP 주소에 대한 TCP 포트 22 를 허용하는 아웃바운드 네트워크 ACL 규칙을 추가합니다.",
    "C": "CloudOps 엔지니어의 IP 주소로부터의 인바운드 SSH 트래픽을 허용하도록 인스턴스 보안 그룹을 수정합니다.",
    "D": "CloudOps 엔지니어의 IP 주소로 향하는 아웃바운드 SSH 트래픽을 허용하도록 인스턴스 보안 그룹을 수정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "EC2 인스턴스 접속 시 타임아웃(Timeout) 현상은 연결 요청 패킷이 목적지에 도달하지 못하고 응답 없이 삭제(Drop)될 때 발생하며, 가장 흔한 원인은 보안 그룹(Security Group)에서 해당 인바운드 포트를 차단하고 있는 경우이다. SSH 접속을 위해서는 인스턴스 보안 그룹의 인바운드 규칙에 SSH(TCP 22 번 포트) 트래픽과 접속자의 IP 주소를 허용해야 한다. 보안 그룹은 상태 저장(Stateful) 특성을 가지므로 인바운드가 허용되면 아웃바운드 응답은 자동으로 처리된다."
  },
  {
   "num": 214,
   "question": "회사는 Amazon EC2 인스턴스에서 중요한 애플리케이션을 실행합니다. 애플리케이션은 트래픽에 따라 확장하기 위해 Auto Scaling 그룹을 사용합니다. 규정을 준수하기 위해 회사는 가동 중단 시간(downtime) 없이 매일 모든 EC2 인스턴스에 최신 보안 패치를 적용해야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Systems Manager Automation 을 사용하여 패치가 적용된 Amazon Machine Image(AMI)를 생성합니다. Auto Scaling 그룹 시작 템플릿을 업데이트합니다. 인스턴스 새로 고침(instance refresh)을 시작합니다.",
    "B": "AWS CloudFormation 을 사용하여 새 EC2 인스턴스를 프로비저닝하고 패치를 적용합니다. 새 인스턴스의 AMI 를 생성합니다. 새 AMI 를 사용하도록 Auto Scaling 그룹 시작 템플릿을 업데이트합니다. AWS Config 를 사용하여 기존 인스턴스를 교체합니다.",
    "C": "AWS Lambda 함수를 사용하여 새 EC2 인스턴스를 시작하고 패치를 적용합니다. 새 인스턴스의 AMI 를 생성합니다. 새 AMI 를 사용하도록 Auto Scaling 그룹 시작 템플릿을 업데이트합니다. 롤링 업데이트를 수동으로 시작합니다.",
    "D": "AWS Systems Manager Automation 을 사용하여 패치가 적용된 AMI 를 생성합니다. 새 AMI 를 사용하도록 Auto Scaling 그룹 시작 템플릿을 업데이트합니다. AWS Config 를 사용하여 기존 인스턴스를 교체합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager Automation 을 활용하면 패치가 적용된 최신 AMI 생성을 자동화할 수 있다. 그 후 Auto Scaling 그룹의 시작 템플릿(Launch Template)을 해당 AMI 로 업데이트하고 '인스턴스 새로 고침(Instance Refresh)' 기능을 실행하면, 지정된 롤링 업데이트 비율에 따라 애플리케이션 가동 중단(Downtime) 없이 인스턴스들을 순차적으로 새 패치 이미지 인스턴스로 자동 교체해 준다. AWS Config(B, D)는 준수 여부를 평가하는 서비스일 뿐 EC2 인스턴스의 롤링 교체를 직접 수행하지 못한다."
  },
  {
   "num": 215,
   "question": "CloudOps 엔지니어는 회사 AWS 계정의 보안 및 컴플라이언스를 유지 관리합니다. 회사의 Amazon EC2 인스턴스가 회사 정책을 따르고 있는지 확인하기 위해 CloudOps 엔지니어는 department 태그가 포함되어 있지 않은 모든 EC2 인스턴스를 종료하려고 합니다. 비준수 리소스는 거의 실시간으로 종료되어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "required-tags 관리형 규칙을 사용하여 AWS Config 규칙을 생성하여 비준수 리소스를 식별합니다. 비준수 리소스를 종료하기 위해 AWS-TerminateEC2Instance 자동화 런북을 실행하도록 자동 수정(automatic remediation)을 구성합니다.",
    "B": "새 EC2 인스턴스가 생성될 때 이를 모니터링하기 위해 새 Amazon EventBridge 규칙을 생성합니다. 자동 수정을 위해 이벤트를 Amazon SNS 주제로 전송합니다.",
    "C": "EC2 인스턴스를 생성할 수 있는 모든 사용자가 ec2:CreateTags 및 ec2:DescribeTags 작업을 사용할 수 있는 권한도 가지고 있는지 확인합니다. 인스턴스의 종료 동작(shutdown behavior)을 종료(terminate)로 변경합니다.",
    "D": "AWS Systems Manager Compliance 가 EC2 인스턴스를 관리하도록 구성되어 있는지 확인합니다. 비준수 리소스를 중지하기 위해 AWS-StopEC2Instances 자동화 런북을 호출합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Config 의 `required-tags` 관리형 규칙을 사용하면 특정 태그가 결여된 EC2 인스턴스를 실시간에 가깝게 비준수(Noncompliant) 상태로 탐지할 수 있다. 탐지 즉시 자동 수정(Automatic Remediation) 기능으로 Systems Manager Automation 런북인 `AWS-TerminateEC2Instance`를 호출하도록 연동하면 태그가 누락된 인스턴스를 즉시 자동 종료시킬 수 있다. Amazon SNS(B)는 단순히 알림을 전달할 뿐 자동 수정 조치를 실행하지 못하며, 인스턴스를 단순히 중지(D)하는 것은 종료 요구사항에 부합하지 않는다."
  },
  {
   "num": 216,
   "question": "회사는 AWS 계정 중 하나에 비즈니스 임계적 리소스를 보유하고 있습니다. 회사는 해당 계정에서 AWS Management Console 루트 사용자 로그인 이벤트가 발생할 때마다 이메일 알림을 받기를 원합니다. 가장 뛰어난 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS Management Console 루트 사용자 로그인 이벤트를 감지하는 Amazon CloudWatch 경보를 생성합니다. AWS Trusted Advisor 를 통해 이메일 알림을 직접 전송하도록 경보를 구성합니다.",
    "B": "Amazon EC2 인스턴스를 시작합니다. 1 시간마다 실행되어 AWS CloudTrail 이벤트를 분석하는 스크립트를 예약합니다. AWS Management Console 루트 사용자 로그인 이벤트가 발생할 때 Amazon SNS 주제로 이메일 알림을 보내도록 스크립트를 구성합니다.",
    "C": "AWS Management Console 루트 사용자 로그인 이벤트에 반응하는 Amazon EventBridge 규칙을 생성합니다. Amazon SQS 대기열로 이메일 알림을 보내도록 규칙을 구성합니다.",
    "D": "AWS Management Console 루트 사용자 로그인 이벤트에 반응하는 Amazon EventBridge 규칙을 생성합니다. Amazon SNS 주제로 이메일 알림을 보내도록 규칙을 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon EventBridge 는 CloudTrail 을 통해 수집된 AWS Management Console 로그인 이벤트(특히 루트 사용자 로그인)를 실시간으로 감지할 수 있다. EventBridge 규칙의 타깃으로 이메일 구독이 설정된 Amazon SNS 주제(Topic)를 지정하면 서버리스 기반으로 별도의 코드 작성이나 서버 관리 없이 가장 높은 운영 효율성으로 실시간 알림 시스템을 구현할 수 있다. Trusted Advisor(A)는 경보 발송 도구가 아니며, EC2 스크립트(B)는 불필요한 운영 공수와 비용을 발생시키고, SQS(C)는 이메일 발송 기능을 직접 제공하지 않는다."
  },
  {
   "num": 217,
   "question": "CloudOps 엔지니어가 두 개의 AWS CloudFormation 템플릿을 생성하고 있습니다. 첫 번째 템플릿은 서브넷, 라우팅 테이블, 인터넷 게이트웨이와 같은 관련 리소스가 포함된 VPC 를 생성합니다. 두 번째 템플릿은 첫 번째 템플릿에 의해 생성된 VPC 내에 애플리케이션 리소스를 배포합니다. 두 번째 템플릿은 첫 번째 템플릿에서 생성된 리소스를 참조해야 합니다. 가장 적은 관리 노력으로 이를 달성할 수 있는 방법은 무엇입니까?",
   "options": {
    "A": "첫 번째 템플릿의 outputs 섹션에 export 필드를 추가하고, 두 번째 템플릿에서 해당 값을 가져옵니다(import).",
    "B": "첫 번째 템플릿에 의해 생성된 스택을 쿼리하여 필요한 값을 가져오는 사용자 지정 리소스(custom resource)를 생성합니다.",
    "C": "두 번째 템플릿에서 참조할 수 있도록 첫 번째 템플릿에 매핑(mapping)을 생성합니다.",
    "D": "첫 번째 템플릿에 리소스 이름을 입력하고 두 번째 템플릿에서 해당 이름을 파라미터로 참조합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS CloudFormation 에서는 교차 스택 참조(Cross-Stack Reference)를 지원한다. 첫 번째 템플릿의 `Outputs` 구문에 `Export` 키워드를 선언하여 값을 내보내고, 두 번째 템플릿에서 `Fn::ImportValue` 내장 함수를 사용하면 스택 간에 리소스 ID 나 속성을 가장 쉽고 효율적으로 공유할 수 있다. 커스텀 리소스(B)는 불필요하게 복잡하며, 수동 파라미터 입력(D)은 관리 공수가 많이 든다."
  },
  {
   "num": 218,
   "question": "회사는 AWS Organizations 를 사용하여 많은 AWS 계정을 생성하고 관리합니다. 회사는 각 계정에 새로운 IAM 역할을 배포하려고 합니다. SysOps 관리자가 조직의 각 계정에 새 역할을 배포하기 위해 취해야 하는 조치는 무엇입니까?",
   "options": {
    "A": "각 계정에 새 IAM 역할을 추가하도록 조직에 서비스 제어 정책(SCP)을 생성합니다.",
    "B": "새 IAM 역할을 생성하기 위한 템플릿을 사용하여 조직에 AWS CloudFormation 변경 세트(change set)를 배포합니다.",
    "C": "AWS CloudFormation StackSets 를 사용하여 새 IAM 역할을 생성하는 템플릿을 각 계정에 배포합니다.",
    "D": "AWS Config 를 사용하여 각 계정에 새 IAM 역할을 추가하는 조직 규칙을 생성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS CloudFormation StackSets 는 단일 CloudFormation 템플릿을 사용하여 AWS Organizations 내의 여러 계정과 리전에 걸쳐 스택을 안전하게 배포하고 관리하는 전용 기능이다. SCP(A)는 권한 가드레일을 설정할 뿐 리소스를 생성하지 못하며, 변경 세트(B)는 단일 스택의 변경 사항을 미리 보는 기능이고, AWS Config(D)는 규정 준수 평가 서비스이다."
  },
  {
   "num": 219,
   "question": "회사는 온프레미스 DNS 솔루션을 보유하고 있으며 example.com 에 대한 Amazon Route 53 프라이빗 호스팅 영역의 DNS 레코드를 확인하려고 합니다. 회사는 온프레미스 네트워크와 VPC 간의 네트워크 연결을 위해 AWS Direct Connect 연결을 설정했습니다. CloudOps 엔지니어는 온프레미스 서버가 example.com 도메인의 레코드를 쿼리할 수 있도록 해야 합니다. CloudOps 엔지니어가 이러한 요구 사항을 충족하려면 어떻게 해야 합니까?",
   "options": {
    "A": "Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버로부터의 TCP/UDP 53 번 포트 인바운드 트래픽을 허용하도록 엔드포인트에 보안 그룹을 연결합니다.",
    "B": "Route 53 Resolver 인바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버로 향하는 TCP/UDP 53 번 포트 아웃바운드 트래픽을 허용하도록 엔드포인트에 보안 그룹을 연결합니다.",
    "C": "Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버로부터의 TCP/UDP 53 번 포트 인바운드 트래픽을 허용하도록 엔드포인트에 보안 그룹을 연결합니다.",
    "D": "Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. 온프레미스 DNS 서버로 향하는 TCP/UDP 53 번 포트 아웃바운드 트래픽을 허용하도록 엔드포인트에 보안 그룹을 연결합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "온프레미스 DNS 서버가 VPC 내의 Route 53 프라이빗 호스팅 영역 레코드를 질의(Inbound Query)하기 위해서는 Route 53 Resolver '인바운드 엔드포인트(Inbound Endpoint)'가 필요하다. 또한 외부 온프레미스 DNS 서버로부터 요청을 수신해야 하므로 해당 엔드포인트의 보안 그룹에 TCP 및 UDP 53 번 포트에 대한 인바운드 허용 규칙을 설정해야 한다. 아웃바운드 엔드포인트(C, D)는 VPC 내부에서 온프레미스 DNS 서버로 질의를 보낼 때 사용된다."
  },
  {
   "num": 220,
   "question": "회사는 Network Load Balancer(NLB) 뒤에서 메모리 최적화 Amazon EC2 인스턴스를 사용하여 애플리케이션을 실행합니다. 회사는 AWS 에서 제공하는 Red Hat Enterprise Linux(RHEL) AMI 에서 EC2 인스턴스를 시작했습니다. CloudOps 엔지니어는 5 분 간격으로 RAM 사용률을 모니터링해야 합니다. CloudOps 엔지니어는 들어오는 로드에 따라 EC2 인스턴스가 적절하게 확장 및 축소되는지 확인해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "EC2 인스턴스에 대한 세부 모니터링(detailed monitoring)을 구성합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 구성합니다. mem_active 지표를 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다.",
    "B": "EC2 인스턴스에 대한 세부 모니터링을 구성합니다. 세부 모니터링 기능이 제공하는 mem_used_percent 지표를 사용합니다. CloudWatch 에이전트가 데이터를 업로드할 수 있도록 허용하는 IAM 역할을 생성합니다. mem_used_percent 지표를 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다.",
    "C": "EC2 인스턴스에 대한 기본 모니터링(basic monitoring)을 구성합니다. EC2 인스턴스에 Amazon CloudWatch 에이전트를 구성합니다. CloudWatch 에이전트가 데이터를 업로드할 수 있도록 허용하는 IAM 역할을 생성합니다. mem_used_percent 지표를 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다.",
    "D": "EC2 인스턴스에 대한 기본 모니터링을 구성합니다. 모니터링을 위해 표준 mem_used_percent 지표를 사용합니다. mem_used_percent 지표를 기반으로 하는 EC2 Auto Scaling 그룹 및 Auto Scaling 정책을 생성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "메모리(RAM) 사용률은 OS 내부 지표이므로 하이퍼바이저 수준에서 수집하는 EC2 기본/세부 모니터링 기본 지표에 포함되지 않는다. 따라서 인스턴스 내부에 CloudWatch 에이전트를 설치하고 지표 게시 권한이 포함된 IAM 역할을 부여해야만 `mem_used_percent` 커스텀 지표를 수집할 수 있다. CloudWatch 에이전트를 통해 전송되는 커스텀 지표는 자체 주기(기본 60 초 또는 설정 가능)로 전송되므로, 5 분 간격 모니터링 요구사항에는 추가 비용이 발생하는 세부 모니터링 대신 무료 기본 모니터링(Basic Monitoring)으로 충분하다."
  },
  {
   "num": 221,
   "question": "물류 회사가 Application Load Balancer 뒤의 Amazon ECS 에서 컨테이너화된 애플리케이션을 실행하려고 합니다. 회사는 단계적 릴리스 방식을 사용하여 새 애플리케이션 버전을 테스트하고 트래픽 전환을 점진적으로 늘리고자 합니다. 회사는 트래픽이 완전히 전환될 때까지 3 분마다 10%씩 증가하며, 새 버전으로의 트래픽을 10%로 시작하려고 합니다. 이러한 요구 사항을 충족하는 배포 전략은 무엇입니까?",
   "options": {
    "A": "롤링(Rolling) 배포 전략.",
    "B": "카나리(Canary) 배포 전략.",
    "C": "블루/그린(Blue/green) 배포 전략.",
    "D": "선형(Linear) 배포 전략."
   },
   "answer": [
    "D"
   ],
   "explanation": "일정 간격으로 동일한 비율의 트래픽을 점진적으로 전환하는 방식은 선형(Linear) 배포 전략이다 (예: AWS CodeDeploy 의 `ECSLinear10PercentEvery3Minutes` 옵션). 카나리(Canary) 배포 전략(B)은 첫 번째 단계에서 일부 트래픽을 전환하고 일정 대기 시간 후 남은 모든 트래픽을 한 번에 전환하는 방식이다. 롤링 배포(A)나 일반적인 블루/그린 배포(C)는 문제에서 명시한 '3 분마다 10%씩 균등 증가'라는 세부 제어 트래픽 전환 옵션을 직접 제공하지 않는다."
  },
  {
   "num": 222,
   "question": "헬스케어 회사는 Amazon S3 버킷에 저장된 데이터를 사용하는 머신러닝(ML) 모델을 구축하기 위해 VPC 내에서 Amazon SageMaker 를 사용합니다. 회사는 SageMaker 가 퍼블릭 IP 주소를 사용하지 않고 안전하게 데이터에 액세스하도록 보장하고자 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
   "options": {
    "A": "Amazon S3 게이트웨이 엔드포인트를 생성합니다. AWS PrivateLink 를 사용하여 S3 버킷에 액세스하도록 SageMaker 를 구성합니다.",
    "B": "회사가 SageMaker 를 실행하는 동일한 VPC 내에 NAT 게이트웨이를 프로비저닝합니다. NAT 게이트웨이를 사용하여 S3 버킷에 액세스하도록 SageMaker 를 구성합니다.",
    "C": "SageMaker 를 S3 버킷에 연결하기 위해 AWS Site-to-Site VPN 연결을 구성합니다.",
    "D": "SageMaker 에서 S3 버킷으로 트래픽을 라우팅하도록 AWS Transit Gateway 를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "VPC 내의 SageMaker 가 인터넷 및 퍼블릭 IP 주소를 거치지 않고 Amazon S3 에 안전하게 비공개로 접근하려면 S3 전용 VPC 엔드포인트(게이트웨이 엔드포인트 또는 PrivateLink 인터페이스 엔드포인트)를 사용해야 한다. NAT 게이트웨이(B)를 통한 통신은 인터넷 게이트웨이를 지나 퍼블릭 IP 기반으로 S3 퍼블릭 엔드포인트에 접근하므로 요구사항에 위배된다. Site-to-Site VPN(C)과 Transit Gateway(D)는 온프레미스 및 VPC 간 네트워크 연결 서비스로 VPC 내에서 S3 로의 사설 통신을 직접 제공하지 않는다."
  },
  {
   "num": 223,
   "question": "회사는 Amazon EC2 인스턴스에서 여러 프로덕션 워크로드를 실행합니다. SysOps 관리자는 프로덕션 EC2 인스턴스가 시스템 상태 검사(system health check)에 실패한 것을 발견했습니다. SysOps 관리자는 인스턴스를 수동으로 복구했습니다. SysOps 관리자는 EC2 인스턴스의 복구 작업을 자동화하고 시스템 상태 검사가 실패할 때마다 알림을 받고 싶어 합니다. 회사의 모든 프로덕션 EC2 인스턴스에 대해 세부 모니터링이 활성화되어 있습니다. 이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?",
   "options": {
    "A": "각 프로덕션 EC2 인스턴스에 대해 \"Status Check Failed: System\"에 대한 Amazon CloudWatch 경보를 생성합니다. 경보 작업을 EC2 인스턴스 복구(recover)로 설정합니다. 경보 알림이 Amazon Simple Notification Service(Amazon SNS) 주제로 게시되도록 구성합니다.",
    "B": "각 프로덕션 EC2 인스턴스에 중앙 모니터링 서버로 매분 하트비트 알림을 보내 시스템 상태를 모니터링하는 스크립트를 생성합니다. EC2 인스턴스가 하트비트를 보내지 못하면 모니터링 서버에서 스크립트를 실행하여 EC2 인스턴스를 중지 및 시작하고 Amazon Simple Notification Service(Amazon SNS) 주제로 알림을 게시합니다.",
    "C": "각 프로덕션 EC2 인스턴스에 크론 작업(cron job)을 통해 고가용성 엔드포인트로 네트워크 핑을 보내는 스크립트를 생성합니다. 스크립트가 네트워크 응답 타임아웃을 감지하면 EC2 인스턴스를 재부팅하는 명령을 호출합니다.",
    "D": "각 프로덕션 EC2 인스턴스에 로그를 수집하여 Amazon CloudWatch Logs 의 로그 그룹으로 전송하도록 Amazon CloudWatch 에이전트를 구성합니다. 오류를 추적하는 지표 필터를 기반으로 CloudWatch 경보를 생성합니다. EC2 인스턴스를 재부팅하고 알림 이메일을 전송하는 AWS Lambda 함수를 호출하도록 경보를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "CloudWatch 경보는 EC2 인스턴스의 `StatusCheckFailed_System` 지표에 대해 인스턴스를 자동 복구(Recover)하는 내장 조치를 지원한다. 동일한 CloudWatch 경보에 Amazon SNS 알림 발송 조치를 함께 구성하면 복구 작업과 알림 발송을 복잡한 커스텀 스크립트(B, C)나 Lambda 함수(D) 작성 없이 기본 기능만으로 구현하여 운영 효율성을 극대화할 수 있다."
  },
  {
   "num": 224,
   "question": "회사는 us-east-1 리전의 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에서 웹 기반 애플리케이션을 실행합니다. 전 세계 사용자가 애플리케이션에 액세스합니다. 북미 이외 지역의 사용자들은 높은 지연 시간과 불일치한 애플리케이션 성능을 보고합니다. 회사는 모든 글로벌 사용자의 지연 시간과 애플리케이션 성능을 개선해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
   "options": {
    "A": "ALB 앞에 AWS Global Accelerator 를 사용합니다.",
    "B": "ALB 앞에 Network Load Balancer(NLB)를 배포합니다.",
    "C": "ALB 를 Network Load Balancer(NLB)로 교체합니다.",
    "D": "지연 시간 임계값을 기준으로 AWS 리전 간 장애 조치(failover)를 수행하도록 Amazon Route 53 헬스 체크를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Global Accelerator 는 글로벌 사용자의 트래픽을 가장 가까운 AWS 엣지 로케이션으로 유입시킨 후, AWS 의 혼잡이 적은 전용 글로벌 백본 네트워크를 통해 us- east-1 리전의 ALB 로 트래픽을 전달한다. 이를 통해 지연 시간을 대폭 단축하고 전 세계 사용자의 애플리케이션 성능을 크게 향상시킬 수 있다. ALB 앞에 NLB 를 두거나(B, C) 단순 Route 53 장애 조치(D)는 전 세계 라우팅 네트워크 경로 자체를 최적화하지 못한다."
  },
  {
   "num": 225,
   "question": "회사는 Amazon RDS Multi-AZ DB 인스턴스에서 데이터베이스를 호스팅합니다. 데이터베이스는 암호화되어 있지 않습니다. 회사의 새로운 보안 정책에 따라 모든 AWS 리소스는 유휴 상태(at rest) 및 전송 중(in transit)에 암호화되어야 합니다. 데이터베이스를 암호화하기 위해 CloudOps 엔지니어는 무엇을 해야 합니까?",
   "options": {
    "A": "기존 DB 인스턴스에 암호화를 구성합니다.",
    "B": "DB 인스턴스의 스냅샷을 생성합니다. 스냅샷을 암호화합니다. 스냅샷을 동일한 DB 인스턴스에 복원합니다.",
    "C": "보조 가용 영역의 대기 복제본(standby replica)을 암호화합니다. 대기 복제본을 기본 DB 인스턴스로 승격합니다.",
    "D": "DB 인스턴스의 스냅샷을 생성합니다. 스냅샷을 복사하고 암호화합니다. 암호화된 복사본을 복원하여 새 DB 인스턴스를 생성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "기존에 생성된 암호화되지 않은 Amazon RDS DB 인스턴스는 직접 암호화를 활성화할 수 없다. 이를 암호화하려면 1) 기존 DB 인스턴스의 스냅샷을 생성하고, 2) 해당 스냅샷을 복사하면서 KMS 키로 암호화를 적용한 후, 3) 암호화된 스냅샷 복사본을 통해 새로운 DB 인스턴스로 복원해야 한다. 기존 인스턴스를 직접 변경하거나(A, B) 대기 복제본만 개별 암호화(C)하는 기능은 지원되지 않는다."
  },
  {
   "num": 226,
   "question": "CloudOps 엔지니어가 us-west-2 리전에 있는 회사의 기존 인프라에 대한 AWS CloudFormation 템플릿을 가지고 있습니다. CloudOps 엔지니어는 이 템플릿을 사용하여 eu-west-1 리전에 새 스택을 생성하려고 시도하지만, 스택이 일부만 배포된 후 오류 메시지를 받고 롤백됩니다. 이 템플릿의 배포가 실패한 이유는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "템플릿이 eu-west-1 에서 사용할 수 없는 IAM 사용자를 참조했습니다.",
    "B": "템플릿이 eu-west-1 에서 사용할 수 없는 Amazon Machine Image(AMI)를 참조했습니다.",
    "C": "템플릿에 리소스를 배포하는 데 필요한 적절한 수준의 권한이 없었습니다.",
    "D": "템플릿이 eu-west-1 에 존재하지 않는 서비스를 요청했습니다.",
    "E": "CloudFormation 템플릿은 기존 서비스를 업데이트하는 데만 사용할 수 있습니다."
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "Amazon Machine Image(AMI) ID 는 리전별로 고유하므로 us-west-2 의 AMI ID 를 eu- west-1 에서 그대로 참조하면 해당 리소스 생성 단계에서 오류가 발생하여 스택이 롤백된다(B). 또한 AWS 서비스나 특정 인스턴스 유형/기능이 모든 리전에 제공되는 것은 아니므로, us-west-2 에서 사용하던 서비스가 eu-west-1 에 제공되지 않는 경우 배포에 실패한다(D). IAM 사용자는 전역(Global) 리소스이므로 리전 제약을 받지 않으며(A), CloudFormation 은 신규 스택 생성에도 사용된다(E)."
  },
  {
   "num": 227,
   "question": "회사는 SaaS(Software as a Service) 애플리케이션을 운영하고 있습니다. 회사는 AWS SDK 와 IAM 사용자의 액세스 키 ID 및 보안 액세스 키를 사용하여 애플리케이션을 AWS 서비스와 통합했습니다. 회사는 IAM 사용자에 대해 최소 권한 원칙을 구현해야 합니다. 회사는 영구 자격 증명의 사용을 피해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS STS AssumeRoleWithSAML API 작업을 사용하도록 애플리케이션을 마이그레이션합니다.",
    "B": "AWS STS AssumeRole API 작업을 사용하도록 애플리케이션을 마이그레이션합니다. IAM 사용자가 AWS STS 만 호출할 수 있도록 허용합니다.",
    "C": "애플리케이션에 필요한 권한으로만 권한 범위를 제한하는 정책을 기존 IAM 사용자에게 추가합니다.",
    "D": "애플리케이션에 필요한 권한으로만 권한 범위를 제한하는 IAM 그룹을 추가합니다. IAM 사용자를 IAM 그룹에 추가합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "IAM 사용자의 장기/영구 자격 증명(Access Key/Secret Key) 대신 임시 자격 증명을 사용하려면 AWS STS(Security Token Service)의 `AssumeRole` API 를 사용하여 동적으로 임시 자격 증명을 획득해야 한다. IAM 사용자 자체에는 STS 호출 권한만 부여하고, 실제 AWS 리소스 접근 권한은 대상 IAM 역할(Role)에 최소 권한 정책으로 할당함으로써 영구 자격 증명 사용을 제거하고 최소 권한 원칙을 충족할 수 있다. AssumeRoleWithSAML(A)은 SAML 2.0 기반 연동 인증용이다. C 와 D 는 여전히 영구 자격 증명을 사용하는 방식이다."
  },
  {
   "num": 228,
   "question": "회사는 최근 다른 기업과 해당 기업의 모든 AWS 계정을 인수했습니다. 재무 분석가는 이러한 계정의 비용 데이터가 필요합니다. CloudOps 엔지니어는 Cost Explorer 를 사용하여 비용 및 사용량 보고서를 생성합니다. CloudOps 엔지니어는 \"No Tagkey\"가 월별 비용의 20%를 차지하는 것을 확인했습니다. \"No Tagkey\" 리소스에 태그를 지정하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "계정을 AWS Organizations 에 추가합니다. 서비스 제어 정책(SCP)을 사용하여 태그가 지정되지 않은 모든 리소스에 태그를 지정합니다.",
    "B": "AWS Config 규칙을 사용하여 태그가 지정되지 않은 리소스를 찾습니다. 리소스를 종료하도록 자동 수정 조치를 설정합니다.",
    "C": "Cost Explorer 를 사용하여 태그가 지정되지 않은 모든 리소스를 찾아 태그를 지정합니다.",
    "D": "태그 편집기(Tag Editor)를 사용하여 태그가 지정되지 않은 모든 리소스를 찾아 태그를 지정합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS Resource Groups Tag Editor(태그 편집기)는 여러 리전 및 계정 내의 다양한 리소스를 검색하고 일괄적으로 태그를 추가, 수정 또는 삭제할 수 있는 전용 도구이다. Cost Explorer(C)는 비용 분석 도구로 직접 리소스 태그를 편집할 수 없으며, SCP(A)는 리소스 생성 시 태그 지정을 강제하거나 제한하는 정책 도구일 뿐 기존 미태그 리소스에 태그를 직접 부착하지 못한다."
  },
  {
   "num": 229,
   "question": "회사는 AWS Organizations 의 조직 전체에서 사용할 수 있는 승인된 Amazon Machine Image(AMI) 75 개의 목록을 유지 관리합니다. 회사의 개발 팀이 승인되지 않은 AMI 에서 Amazon EC2 인스턴스를 시작하고 있습니다. SysOps 관리자는 사용자가 승인되지 않은 AMI 에서 EC2 인스턴스를 시작하지 못하도록 차단해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "승인된 AMI 에 태그를 추가합니다. 사용자가 태그가 지정된 AMI 에서만 EC2 인스턴스를 시작할 수 있도록 허용하는 태그 조건이 포함된 IAM 정책을 생성합니다.",
    "B": "서비스 연계 역할(service-linked role)을 생성합니다. 승인되지 않은 AMI 목록에서 EC2 인스턴스를 시작하는 기능을 거부하는 정책을 첨부합니다. 이 역할을 사용자에게 할당합니다.",
    "C": "AWS Lambda 함수와 함께 AWS Config 를 사용하여 승인되지 않은 AMI 에서 시작된 EC2 인스턴스를 확인합니다. 해당 EC2 인스턴스를 종료하도록 SysOps 관리자에게 Amazon Simple Notification Service(Amazon SNS) 메시지를 전송하는 Lambda 함수를 프로그래밍합니다.",
    "D": "AWS Trusted Advisor 를 사용하여 승인되지 않은 AMI 에서 시작된 EC2 인스턴스를 확인합니다. 해당 EC2 인스턴스를 종료하기 위해 AWS Lambda 함수를 호출하도록 Trusted Advisor 를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "인스턴스 생성 시 승인되지 않은 AMI 사용을 '사전에 방지(prevent)'하려면 IAM 정책의 조건(Condition) 절을 활용하는 것이 가장 효과적이다. 승인된 AMI 에 특정 태그를 부여하고, IAM 정책에서 `ec2:ResourceTag` 또는 `aws:ResourceTag` 조건 키를 사용하여 해당 태그가 포함된 AMI 에 대해서만 `ec2:RunInstances` 작업을 허용하면 승인되지 않은 AMI 를 사용한 인스턴스 생성을 사전 차단할 수 있다. AWS Config(C) 및 Trusted Advisor(D) 연동은 사후 감지 및 대응 솔루션이므로 생성 자체를 차단(prevent)하지 못한다."
  },
  {
   "num": 230,
   "question": "CloudOps 엔지니어가 동일한 가용 영역 내에 테스트 목적으로 두 개의 Amazon EC2 인스턴스를 시작하고 단일 퍼블릭 서브넷을 생성합니다. CloudOps 엔지니어는 인스턴스의 테스트 웹페이지가 작동 중인 경우에만 Amazon Route 53 이 퍼블릭 IP 주소로 응답하도록 하려고 합니다. 그러나 테스트 웹페이지를 사용할 수 없는 경우에도 Route 53 은 여전히 두 인스턴스의 퍼블릭 IP 주소로 응답합니다. CloudOps 엔지니어는 이 문제를 어떻게 해결할 수 있습니까?",
   "options": {
    "A": "Route 53 다중값 응답(multivalue answer) 라우팅 레코드를 생성합니다. 헬스 체크(health check)를 레코드와 연결합니다.",
    "B": "Route 53 에서 헬스 체크와 함께 지연 시간 기반 라우팅을 구성합니다.",
    "C": "Route 53 에서 가중치 기반 라우팅을 구성합니다.",
    "D": "인스턴스 중 하나를 위해 동일한 가용 영역에 다른 퍼블릭 서브넷을 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Route 53 다중값 응답(Multivalue Answer) 라우팅은 여러 개의 IP 주소를 반환하면서 각 레코드에 헬스 체크(Health Check)를 연결할 수 있는 기능을 제공한다. 헬스 체크를 연결하면 웹페이지 상태를 모니터링하여 비정상(Unhealthy) 상태인 인스턴스의 IP 주소는 DNS 응답에서 자동으로 제외시키고 정상 인스턴스의 IP 주소만 반환하게 된다. 단순 다중 IP 레코드는 헬스 체크를 지원하지 않기 때문에 웹페이지가 작동하지 않더라도 모든 IP 를 응답하는 문제가 발생한다."
  },
  {
   "num": 231,
   "question": "회사는 Amazon S3 버킷에 호스팅하는 정적 웹사이트를 제공하기 위해 Amazon CloudFront 디스트리뷰션을 사용합니다. S3 버킷은 CloudFront 디스트리뷰션의 오리진입니다. 웹사이트에는 전 세계에 사용자가 있습니다. 회사는 웹사이트의 일부 콘텐츠를 업데이트합니다. 업데이트 후 사용자들은 이전 버전의 콘텐츠가 표시된다고 보고합니다. 회사는 웹사이트 사용자가 가장 최신의 콘텐츠만 받도록 보장해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon S3 ACL 을 사용하여 새 콘텐츠를 퍼블릭으로 설정합니다.",
    "B": "새 콘텐츠를 다시 업로드합니다. 오리진 S3 버킷에 버전 관리를 설정합니다.",
    "C": "CloudFront 디스트리뷰션이 위치한 동일한 가용 영역에 새 콘텐츠를 업로드합니다.",
    "D": "새 콘텐츠가 업로드될 때 CloudFront 무효화(invalidation)를 사용합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "CloudFront 는 엣지 로케이션에 오리진 객체를 캐싱하여 빠르게 제공하므로, S3 오리진의 파일이 동일한 이름으로 업데이트되면 기존 캐시의 TTL 이 만료되기 전까지 사용자에게 이전 버전이 계속 제공될 수 있다. 새로운 콘텐츠가 업로드될 때 CloudFront 무효화(Invalidation) 요청을 생성하면, 각 엣지 로케이션에 캐시된 이전 버전 파일이 즉시 삭제되어 사용자가 오리진의 최신 파일에 접근할 수 있게 된다. S3 ACL(A)이나 버전 관리(B)는 엣지 캐시 업데이트 문제와 직접적인 관련이 없다."
  },
  {
   "num": 232,
   "question": "회사는 인프라를 관리하기 위해 AWS CloudFormation 스택을 사용합니다. 회사의 개발자들은 인프라 변경 사항을 회사의 Git 리포지토리에 커밋합니다. 회사는 개발자가 변경 사항을 커밋할 때 CloudFormation 스택에 대한 업데이트를 자동화하려고 합니다. 회사는 배포 전 변경 세트(change set) 생성 및 승인을 위한 대기 중인 변경 사항 알림을 요구합니다. 또한 이 솔루션은 인프라 유지 관리 오버헤드를 최소화해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "GitHub 를 소스 제공자로 사용하여 AWS CodePipeline 에 파이프라인을 생성합니다. 변경 세트를 생성하도록 CloudFormation 배포 작업을 구성합니다. Amazon SNS 를 사용하여 승인 알림을 전송합니다.",
    "B": "개발자가 리포지토리에 커밋을 푸시할 때 변경 사항을 자동으로 배포하도록 CloudFormation Git 동기화(Git sync)를 사용합니다. 각 배포가 완료된 후 Amazon SNS 알림을 트리거하도록 Amazon EventBridge 를 구성합니다.",
    "C": "CloudFormation 변경 세트를 생성하고, 변경 세트를 실행하며, 승인을 기다리는 AWS Lambda 함수를 생성합니다. 개발자가 Git 리포지토리에 코드를 커밋할 때 Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 설정합니다.",
    "D": "AWS Systems Manager Automation 을 사용하여 Git 리포지토리의 변경 사항을 스캔합니다. 변경 세트를 생성하고 CloudFormation 스택을 배포합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS CodePipeline 은 소스 코드 커밋 시 자동으로 파이프라인을 트리거하고, CloudFormation 배포 스테이지를 통해 변경 세트(Change Set)를 자동 생성하는 통합 워크플로를 제공한다. 배포 실행 전 Amazon SNS 및 수동 승인(Manual Approval) 단계를 추가하면 변경 사항을 검토 및 승인한 후 배포되도록 가장 적은 관리 오버헤드로 구성할 수 있다. CloudFormation Git 동기화(B)는 사전 승인 단계 없이 변경 사항을 즉시 배포하므로 조건에 맞지 않으며, Lambda 기반 커스텀 구축(C)은 유지 관리 오버헤드가 크게 증가한다."
  },
  {
   "num": 233,
   "question": "회사는 여러 AWS 계정을 관리하기 위해 AWS Organizations 의 조직을 사용합니다. 회사는 조직의 모든 계정에서 수신자 계정으로 특정 이벤트를 전송해야 하며, 수신자 계정의 AWS Lambda 함수가 이 이벤트를 처리할 예정입니다. CloudOps 엔지니어는 수신자 계정의 us-west-2 리전에 있는 대상 이벤트 버스로 이벤트를 라우팅하도록 Amazon EventBridge 를 구성합니다. CloudOps 엔지니어는 지정된 이벤트와 일치하는 규칙을 송신자 계정과 수신자 계정 모두에 생성합니다. 규칙의 이벤트 패턴에는 계정 파라미터가 지정되어 있지 않습니다. 송신자 계정에는 대상 이벤트 버스에 대한 PutEvents 작업을 허용하는 IAM 역할이 생성되어 있습니다. 그러나 us-east-1 리전에서 전송된 첫 번째 테스트 이벤트가 수신자 계정의 Lambda 함수에 의해 처리되지 않습니다. 이벤트가 처리되지 않는 유력한 이유는 무엇입니까?",
   "options": {
    "A": "송신자 계정과 수신자 계정에 EventBridge 용 인터페이스 VPC 엔드포인트가 필요합니다.",
    "B": "대상 Lambda 함수가 다른 AWS 리전에 있으며, 이는 EventBridge 에서 지원되지 않습니다.",
    "C": "송신자 계정으로부터의 PutEvents API 호출을 허용하도록 대상 이벤트 버스의 리소스 기반 정책을 수정해야 합니다.",
    "D": "수신자 계정의 규칙은 이벤트 패턴에 {\"account\": [\"sender-account-id\"]}를 지정해야 하며 수신자 계정 ID 를 포함해야 합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "교차 계정(Cross-Account) EventBridge 이벤트 라우팅을 구현할 때는 송신자 계정의 IAM 권한 외에도, 수신자 계정의 대상 이벤트 버스(Target Event Bus)에 외부 타사 계정 또는 조직 전체 계정으로부터의 `events:PutEvents` 권한을 허용하는 리소스 기반 정책(Event Bus Policy)이 반드시 설정되어 있어야 한다. 리소스 기반 정책이 교차 계정 접근을 명시적으로 허용하지 않으면 송신자 계정의 권한이 있더라도 이벤트가 거부된다."
  },
  {
   "num": 234,
   "question": "회사는 서명된 URL(signed URL)을 통해 파일을 공유하기 위해 Amazon CloudFront 디스트리뷰션을 사용합니다. 회사는 소스 파일을 Amazon S3 버킷에 저장하고 매일 파일을 업데이트합니다. 사용자들은 파일의 새 버전을 확인하기까지 며칠의 지연이 발생한다고 보고합니다. 때때로 사용자들은 특정 날짜의 파일을 볼 수 없다고 보고합니다. CloudOps 엔지니어는 이 문제를 해결해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 버킷에 적용된 모든 수명 주기 규칙을 제거합니다.",
    "B": "파일 이름과 일치하도록 CloudFront 디스트리뷰션의 동작 경로 패턴을 업데이트합니다.",
    "C": "CloudFront 디스트리뷰션 캐시 정책의 모든 TTL 설정을 0 으로 설정합니다.",
    "D": "AWS CLI 를 사용하여 CloudFront 서명된 URL 을 다시 생성합니다. date-less-than 파라미터를 미래의 날짜로 업데이트합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudFront 는 기본적으로 오리진의 응답 객체를 엣지 로케이션에 지정된 기간(기본 24 시간 등) 동안 캐싱한다. 오리진 S3 의 파일이 매일 업데이트되더라도 캐시 TTL 이 지속되면 사용자는 며칠 동안 이전 버전의 파일을 조회하는 지연 현상을 겪게 된다. 캐시 정책에서 최소/기본/최대 TTL 설정을 모두 0 으로 지정하면 CloudFront 가 캐싱하지 않고 요청마다 항상 S3 오리진을 재검증(Revalidate)하여 사용자가 최신 버전의 파일을 즉시 확인할 수 있도록 보장한다."
  },
  {
   "num": 235,
   "question": "CloudOps 엔지니어가 VPC 내에서 Amazon CloudFront 웹 디스트리뷰션, Application Load Balancer(ALB), Amazon RDS 및 Amazon EC2 를 사용하는 웹 애플리케이션을 유지 관리하고 있습니다. 모든 서비스에서 로깅이 활성화되어 있습니다. CloudOps 엔지니어는 웹 애플리케이션의 HTTP 계층 7(Layer 7) 상태 코드를 조사해야 합니다. 상태 코드가 포함된 로그 소스는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "VPC Flow Logs",
    "B": "AWS CloudTrail 로그",
    "C": "ALB 액세스 로그",
    "D": "CloudFront 액세스 로그",
    "E": "RDS 로그"
   },
   "answer": [
    "C",
    "D"
   ],
   "explanation": "HTTP 계층 7(Application Layer) 상태 코드(예: 200, 404, 500 등)는 웹 트래픽을 직접 처리하는 애플리케이션 계층 서비스의 로그에 기록된다. Application Load Balancer(ALB) 액세스 로그(C)와 CloudFront 액세스 로그(D)는 클라이언트의 HTTP 요청 및 이에 대응하는 HTTP 상태 코드를 포함한다. VPC Flow Logs(A)는 계층 3/4(IP, 포트, 프로토콜) 네트워크 트래픽 정보만 수집하며, CloudTrail(B)은 AWS API 호출 내역을 기록하고, RDS 로그(E)는 데이터베이스 질의 및 오류 이력을 기록하므로 HTTP 상태 코드를 포함하지 않는다."
  },
  {
   "num": 236,
   "question": "CloudOps 엔지니어가 하나의 Amazon EBS 볼륨이 연결된 단일 Amazon EC2 인스턴스에서 스냅샷을 캡처하도록 AWS Backup 을 구성했습니다. 첫 번째 스냅샷에서 EBS 볼륨에는 10 GiB 의 데이터가 있습니다. 두 번째 스냅샷에서 EBS 볼륨에는 여전히 10 GiB 의 데이터가 포함되어 있지만 4 GiB 가 변경되었습니다. 세 번째 스냅샷에서는 볼륨에 2 GiB 의 데이터가 추가되어 총 12 GiB 가 되었습니다. 이러한 스냅샷을 저장하는 데 필요한 총 스토리지 용량은 얼마입니까?",
   "options": {
    "A": "12 GiB",
    "B": "16 GiB",
    "C": "26 GiB",
    "D": "32 GiB"
   },
   "answer": [
    "B"
   ],
   "explanation": "EBS 스냅샷은 첫 번째 저장 시에만 전체 데이터를 저장하고, 이후 스냅샷부터는 변경되거나 추가된 블록만 저장하는 증분(Incremental) 방식으로 작동한다. * 첫 번째 스냅샷: 10 GiB (전체 저장) * 두 번째 스냅샷: 4 GiB (변경된 4 GiB 블록만 저장) * 세 번째 스냅샷: 2 GiB (새로 추가된 2 GiB 블록만 저장) 따라서 총 필요한 스토리지 용량은 $10\\text{ GiB} + 4\\text{ GiB} + 2\\text{ GiB} = 16\\text{ GiB}$이다."
  },
  {
   "num": 237,
   "question": "회사는 AWS Organizations 를 사용하여 AWS 계정을 관리합니다. CloudOps 엔지니어는 회사의 모든 AWS 계정에 있는 모든 Amazon EC2 인스턴스에 대한 백업 전략을 수립해야 합니다. 가장 운영 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "각 계정에서 정기적으로 EC2 인스턴스 스냅샷을 실행하도록 서비스 제어 정책(SCP)을 사용합니다.",
    "B": "모든 EC2 인스턴스에 AutoBackup=True 태그를 추가하도록 관리 계정(management account)에 AWS CloudFormation 스택세트(StackSets)를 생성합니다.",
    "C": "관리 계정의 AWS Backup 을 사용하여 모든 계정 및 리소스에 대한 정책을 배포합니다.",
    "D": "정기적으로 EC2 인스턴스 스냅샷을 실행하도록 각 계정에 AWS Lambda 함수를 배포합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Organizations 와 AWS Backup 의 통합 기능을 활용하면 관리 계정(Management Account)에서 조직 전체에 적용되는 중앙 백업 정책(Backup Policies)을 생성하고 일괄 배포할 수 있다. 개별 계정마다 개별 스크립트나 Lambda(D)를 배포할 필요가 없어 가장 높은 운영 효율성을 제공한다. SCP(A)는 API 작업 권한을 제한하는 가드레일 서비스로 백업을 직접 실행하지 못한다."
  },
  {
   "num": 238,
   "question": "규정을 준수하기 위해 CloudOps 엔지니어는 Amazon EC2 Amazon Machine Image(AMI)를 Amazon S3 버킷에 백업해야 합니다. 향후 CloudOps 엔지니어가 버킷에서 AMI 를 복원할 때, 복원된 AMI 는 원본 AMI 와 동일한 AMI 이미지 ID 를 사용해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AMI 복사본을 생성합니다. 대상 S3 버킷을 지정합니다. 시작 권한을 묵시적(implicit)으로 설정합니다.",
    "B": "AMI 와 관련된 스냅샷을 아카이브합니다. 아카이브 대상으로 S3 버킷을 지정합니다.",
    "C": "이미지 저장 작업(store image task)을 생성합니다. 이미지 ID 와 대상 S3 버킷을 지정합니다.",
    "D": "AWS CLI copy-image 명령을 사용합니다. 이미지 ID 와 대상 S3 버킷을 지정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS EC2 의 AMI S3 저장 및 복원(Store/Restore AMI) 기능을 사용하면 `CreateStoreImageTask` API(또는 CLI `aws ec2 create-store-image-task`)를 통해 AMI 를 S3 버킷에 저장할 수 있다. 이 기능을 통해 S3 에서 AMI 를 다시 복원(`CreateRestoreImageTask`)할 경우 원본 AMI 의 특성 및 동일한 AMI ID 를 유지하여 복원하는 것을 지원한다. 일반적인 AMI 복사(A, D)나 스냅샷 아카이브(B) 방식은 S3 버킷으로의 직접 내보내기 및 동일 AMI ID 보존 조건을 충족하지 못한다."
  },
  {
   "num": 239,
   "question": "CloudOps 엔지니어가 사용자 지정 네트워크 ACL(NACL)을 활용하는 퍼블릭 및 프라이빗 서브넷이 있는 VPC 의 문제를 해결하고 있습니다. 프라이빗 서브넷의 인스턴스가 인터넷에 액세스할 수 없습니다. 퍼블릭 서브넷에는 인터넷 게이트웨이가 연결되어 있습니다. 프라이빗 서브넷에는 퍼블릭 서브넷에 연결된 NAT 게이트웨이로 향하는 라우팅이 있습니다. Amazon EC2 인스턴스는 VPC 의 기본 보안 그룹과 연결되어 있습니다. 이 시나리오에서 문제를 일으키는 원인은 무엇입니까?",
   "options": {
    "A": "프라이빗 서브넷에 모든 아웃바운드 트래픽을 거부하도록 설정된 네트워크 ACL 이 있습니다.",
    "B": "VPC 의 프라이빗 서브넷에 NAT 게이트웨이가 배포되지 않았습니다.",
    "C": "VPC 의 기본 보안 그룹이 EC2 인스턴스로 향하는 모든 인바운드 트래픽을 차단합니다.",
    "D": "VPC 의 기본 보안 그룹이 EC2 인스턴스에서 나가는 모든 아웃바운드 트래픽을 차단합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "프라이빗 서브넷의 라우팅 테이블이 퍼블릭 서브넷의 NAT 게이트웨이를 정상적으로 가리키고 있음에도 인터넷 연결이 되지 않는다면, 서브넷 레벨의 방화벽인 사용자 지정 네트워크 ACL(NACL)에서 아웃바운드 트래픽을 차단(Deny)하고 있기 때문이다. NAT 게이트웨이는 프라이빗 서브넷이 아닌 퍼블릭 서브넷에 배치되는 것이 정상이므로 B 는 올바른 조치가 아니다. 또한 기본 보안 그룹(C, D)은 기본적으로 모든 아웃바운드 트래픽을 허용한다."
  },
  {
   "num": 240,
   "question": "회사의 CloudOps 엔지니어가 표준 Amazon Linux Amazon Machine Image(AMI)를 사용하여 4 대의 새로운 Amazon EC2 인스턴스를 배포합니다. 회사는 AWS Systems Manager 를 사용하여 인스턴스를 관리할 수 있어야 합니다. CloudOps 엔지니어는 인스턴스가 Systems Manager 콘솔에 나타나지 않는 것을 확인했습니다. 이 문제를 해결하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "SSH 를 사용하여 각 인스턴스에 연결합니다. 각 인스턴스에 Systems Manager 에이전트를 설치합니다. 인스턴스가 시작될 때 Systems Manager 에이전트가 자동으로 시작되도록 구성합니다.",
    "B": "AWS Certificate Manager(ACM)를 사용하여 TLS 인증서를 생성합니다. 각 인스턴스에 인증서를 가져옵니다. 보안 통신을 위해 TLS 인증서를 사용하도록 Systems Manager 에이전트를 구성합니다.",
    "C": "SSH 를 사용하여 각 인스턴스에 연결합니다. ssm-user 계정을 생성합니다. ssm-user 계정을 /etc/sudoers.d 디렉터리에 추가합니다.",
    "D": "인스턴스에 IAM 인스턴스 프로파일을 연결합니다. 인스턴스 프로파일에 AmazonSSMManagedInstanceCore 정책이 포함되어 있는지 확인합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon Linux AMI 에는 Systems Manager 에이전트(SSM Agent)가 기본으로 사전 설치되어 있다. 그럼에도 인스턴스가 Systems Manager 관리형 인스턴스 목록에 나타나지 않는 이유는 인스턴스에 SSM 서비스와 통신할 수 있는 IAM 권한이 없기 때문이다. 따라서 `AmazonSSMManagedInstanceCore` 관리형 정책이 포함된 IAM 인스턴스 프로파일(역할)을 해당 EC2 인스턴스들에 연결해야 한다."
  },
  {
   "num": 241,
   "question": "CloudOps 엔지니어가 회사의 비용 절감 작업을 수행하고 있습니다. CloudOps 엔지니어는 사용되지 않는 여러 Elastic IP 주소를 발견했습니다. 이 주소들은 AWS Organizations 의 조직 내 여러 계정과 AWS 리전에 분산되어 있습니다. CloudOps 엔지니어는 보안 도메인을 기반으로 주소를 관리하고 추적해야 합니다. CloudOps 엔지니어는 할당된 주소의 이력을 볼 수 있어야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "IP 주소 추적 규칙이 있는 AWS Config 를 활성화합니다.",
    "B": "계정 및 리전별로 주소를 보려면 사용자 지정 IP 지표가 포함된 Amazon CloudWatch 를 사용합니다.",
    "C": "Organizations 연동을 위해 Amazon VPC IP Address Manager(IPAM)를 활성화합니다.",
    "D": "AWS Systems Manager Inventory 에서 IP 추적을 위해 Amazon S3 로의 리소스 데이터 동기화(resource data sync)를 활성화합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon VPC IP Address Manager(IPAM)는 AWS 조직 전체의 IP 주소(Elastic IP 포함)를 기획, 추적, 관리할 수 있는 전용 기능이다. AWS Organizations 와 연동하면 여러 계정 및 리전에 걸친 IP 주소의 할당 내역과 이력을 중앙에서 모니터링하고 보안 도메인(Scope)별로 관리할 수 있다. AWS Config(A)나 CloudWatch(B)는 IPAM 처럼 전문적인 IP 주소 이력 관리 및 관리 도메인 구성을 직접 지원하지 않는다."
  },
  {
   "num": 242,
   "question": "회사는 Ubuntu 운영 체제(OS)를 실행하는 여러 Amazon EC2 인스턴스를 보유하고 있습니다. 회사는 정기적으로 OS 에 패치를 적용해야 합니다. CloudOps 엔지니어는 매주 수동으로 패치를 설치합니다. 회사는 Ubuntu 를 실행하는 새로운 EC2 인스턴스를 지속적으로 추가합니다. CloudOps 엔지니어는 패치 프로세스를 자동화해야 합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "SSH 를 사용하여 EC2 인스턴스에 연결하고 패치를 설치하는 AWS Lambda 함수를 생성합니다. 매주 실행되도록 Lambda 함수를 구성합니다.",
    "B": "EC2 인스턴스에 AWS Systems Manager Agent(SSM 에이전트)를 설치합니다. 인스턴스에 매주 패치를 설치하도록 Systems Manager Patch Manager 를 구성합니다.",
    "C": "패치가 적용되지 않은 EC2 인스턴스를 식별하고 OS 패치를 설치하려면 AWS Systems Manager Inventory 를 사용합니다.",
    "D": "매주 패치를 설치하도록 cron 표현식이 포함된 Amazon EventBridge 규칙을 생성합니다. 대상 EC2 인스턴스를 지정하도록 EventBridge 규칙을 구성합니다. 대상 인스턴스에서 OS 업데이트를 실행하는 조치를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Systems Manager Patch Manager 는 관리형 인스턴스의 OS 보안 및 기타 패치 설치 프로세스를 자동화하는 전용 서비스이다. 인스턴스에 SSM 에이전트를 설치하고 Patch Manager 의 패치 기준(Baseline) 및 유지 관리 기간(Maintenance Window)을 설정하면 신규 및 기존 Ubuntu 인스턴스에 정기적인 패치 적용을 완전 자동화할 수 있다. SSM Inventory(C)는 소프트웨어 인벤토리 수집용이며 직접 패치를 설치하지 못한다."
  },
  {
   "num": 243,
   "question": "회사는 AWS 의 고성능 컴퓨팅(HPC) 클러스터에서 워크로드를 실행합니다. 워크로드는 Linux 기반이며 3 개의 Amazon EC2 인스턴스를 사용합니다. 각 EC2 인스턴스에는 10 TiB 의 처리량 최적화 HDD(st1) Amazon EBS 볼륨이 있습니다. CloudOps 엔지니어는 현재 스토리지 요구 사항이 워크로드의 성능 요구 사항을 충족하지 못한다고 판단했습니다. 워크로드에는 100,000 IOPS 의 처리량을 가진 내구성 있는 파일 스토어가 필요합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon ElastiCache (Redis OSS) 인스턴스를 생성합니다. AOF(append-only file) 기능을 비활성화 상태로 유지합니다.",
    "B": "HPC 클러스터가 배포된 동일한 AWS 리전에 Amazon S3 버킷을 생성합니다. 모든 객체에 동일한 S3 버킷 접두사(prefix)를 사용합니다.",
    "C": "Amazon FSx for Lustre 파일 시스템을 생성합니다. 적절한 수의 IOPS 를 구성합니다.",
    "D": "HPC 클러스터가 배포된 동일한 AWS 리전에 Amazon S3 버킷을 생성합니다. S3 Transfer Acceleration 을 활성화합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Linux 기반 고성능 컴퓨팅(HPC) 워크로드에서 초고속 처리량 및 100,000 IOPS 수준의 고성능 파일 스토리지가 필요할 때는 Amazon FSx for Lustre 가 최적의 솔루션이다. FSx for Lustre 는 POSIX 준수 파일 시스템으로 HPC, 머신러닝, 미디어 처리 등 빠른 입출력이 요구되는 컴퓨팅 클러스터에 완벽하게 적합하다. ElastiCache(A)나 S3(B, D)는 POSIX 파일 공유 시스템이 아니거나 HPC 디스크 성능을 직접 대체하기 어렵다."
  },
  {
   "num": 244,
   "question": "AWS 에서 여러 워크로드를 실행하는 회사는 DNS 기반 위협 보호를 구현하여 보안 태세를 강화하고자 합니다. 회사는 DNS 기반 공격을 차단해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
   "options": {
    "A": "악성 DNS 쿼리를 필터링하고 차단하기 위해 AWS Shield Advanced 를 배포합니다. 도메인 필터링 정책을 설정합니다.",
    "B": "악성 도메인에 대한 DNS 트래픽을 검사하기 위해 AWS WAF 를 사용합니다. 알려진 위협을 차단하는 사용자 지정 규칙을 생성합니다.",
    "C": "위협을 탐지하고 필터링하도록 DNS 쿼리를 Route 53 Resolver DNS Firewall Advanced 로 전달하도록 Amazon Route 53 Resolver 를 구성합니다.",
    "D": "DNS 쿼리 및 DNS 트래픽 패턴을 모니터링하도록 AWS Config 를 구성합니다. 악성 도메인에 대한 액세스를 방지하기 위해 AWS Lambda 함수를 사용합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Route 53 Resolver DNS Firewall(및 DNS Firewall Advanced)은 Outbound DNS 쿼리를 모니터링하고 알려진 악성 도메인으로의 DNS 질의를 필터링하여 DNS 기반 공격 및 데이터 유출을 차단하는 전용 보안 서비스이다. AWS WAF(B)는 웹 애플리케이션 계층(HTTP/HTTPS) 전용 방화벽이며, AWS Shield Advanced(A)는 DDoS 공격 방어용으로 DNS 레벨 도메인 필터링 기능을 제공하지 않는다."
  },
  {
   "num": 245,
   "question": "전자 상거래 회사가 Amazon ECS 에서 마이크로서비스 애플리케이션을 실행합니다. 고객들은 애플리케이션을 통해 구매를 완료하려고 할 때 때때로 높은 지연 시간을 경험합니다. CloudOps 엔지니어는 지연 시간이 발생하는 위치를 식별하기 위해 여러 서비스에 걸쳐 개별 트랜잭션을 추적하는 솔루션이 필요합니다. 솔루션은 최소한의 코드 변경만 필요로 해야 하며 서비스 의존성에 대한 시각적 표현을 제공해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "AWS X-Ray 데몬을 사이드카 컨테이너로 설정합니다. X-Ray SDK 를 사용하여 애플리케이션 코드를 계측(instrument)합니다. 지연 시간을 식별하기 위해 요청 흐름을 시각화하는 서비스 맵(service map)을 사용합니다.",
    "B": "ECS 컨테이너에 Amazon CloudWatch 에이전트를 사이드카 컨테이너로 구성합니다. 각 서비스에 대한 사용자 지정 지표를 생성합니다. 응답 시간을 모니터링하도록 CloudWatch 대시보드를 설정합니다.",
    "C": "ECS 컨테이너에서 실행되는 마이크로서비스에 대한 로그를 수집하기 위해 Amazon VPC Flow Logs 를 사용합니다. 네트워크 트래픽을 모니터링하고 서비스 맵을 사용하여 마이크로서비스 간의 지연 시간을 식별합니다.",
    "D": "컨테이너 지표를 수집하기 위해 Amazon CloudWatch Container Insights 를 사이드카 컨테이너로 사용합니다. 응답 시간을 모니터링하고 요청 흐름을 시각화하여 지연 시간을 식별합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "분산 마이크로서비스 환경에서 각 서비스 간 개별 트랜잭션을 엔드투엔드로 추적(Tracing)하고 병목 지점을 시각적 서비스 맵(Service Map)으로 확인하기 위해 개발된 전용 서비스는 AWS X-Ray 이다. Amazon ECS 에서는 X-Ray 데몬(Daemon)을 사이드카 컨테이너 패턴으로 배포하여 최소한의 코드 계측만으로 분산 트랜잭션 수집 및 시각화를 달성할 수 있다. VPC Flow Logs(C)나 CloudWatch 에이전트/Container Insights(B, D)는 분산 트랜잭션 분석 및 애플리케이션 계층 서비스 맵 시각화 기능을 제공하지 않는다."
  },
  {
   "num": 246,
   "question": "회사는 로그 파일을 생성하는 애플리케이션을 실행합니다. 회사는 로그 파일을 Amazon S3 에 저장합니다. CloudOps 엔지니어는 S3 버킷에 새 파일이 업로드될 때마다 로그 파일을 자동으로 처리해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
   "options": {
    "A": "S3 PUT 이벤트 시 트리거되어 AWS Lambda 함수를 호출하도록 Amazon CloudWatch 이벤트 규칙을 구성합니다.",
    "B": "새 파일이 있는지 S3 버킷을 모니터링하고 AWS Lambda 함수를 호출하는 소스 단계를 사용하여 AWS CodePipeline 에 파이프라인을 생성합니다.",
    "C": "새 로그 파일을 처리하도록 AWS Lambda 함수를 호출하는 S3 이벤트 알림(S3 event notification)을 구성합니다.",
    "D": "새 파일이 있는지 S3 버킷을 모니터링하고 AWS Lambda 함수를 호출하는 대기 상태가 포함된 AWS Step Functions 상태 머신을 생성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "S3 버킷에 객체가 생성될 때(`s3:ObjectCreated:*`) 이를 이벤트로 감지하여 AWS Lambda 함수를 즉시 자동 호출하는 가장 단순하고 효율적인 내장 방법은 S3 이벤트 알림(S3 Event Notification)을 설정하는 것이다. 별도의 외부 모니터링 파이프라인(B)이나 폴링 방식의 Step Functions(D)을 구축하는 것보다 관리 오버헤드가 가장 적다."
  },
  {
   "num": 247,
   "question": "회사는 계정 A 에 AWS Lambda 함수를 가지고 있습니다. 이 Lambda 함수는 계정 B 의 Amazon S3 버킷에 있는 객체를 읽어야 합니다. CloudOps 엔지니어는 두 계정 모두에 해당 IAM 역할을 생성해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "계정 A 에서는 계정 B 의 역할을 전환(assume)하기 위한 Lambda 실행 역할을 생성합니다. 계정 B 에서는 S3 버킷에 대한 액세스 권한을 얻기 위해 함수가 전환할 수 있는 역할을 생성합니다.",
    "B": "계정 A 에서는 S3 버킷에 대한 액세스 권한을 제공하는 Lambda 실행 역할을 생성합니다. 계정 B 에서는 함수가 전환할 수 있는 역할을 생성합니다.",
    "C": "계정 A 에서는 함수가 전환할 수 있는 역할을 생성합니다. 계정 B 에서는 S3 버킷에 대한 액세스 권한을 제공하는 Lambda 실행 역할을 생성합니다.",
    "D": "계정 A 에서는 S3 버킷에 대한 액세스 권한을 얻기 위해 함수가 전환할 수 있는 역할을 생성합니다. 계정 B 에서는 계정 A 의 역할을 전환하기 위한 Lambda 실행 역할을 생성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Lambda 함수가 타 계정(계정 B)의 리소스(S3)에 접근하려면 교차 계정 IAM 역할 전환(AssumeRole) 아키텍처를 구성해야 한다. 1) Lambda 가 위치한 계정 A 에는 계정 B 의 IAM 역할을 `sts:AssumeRole`할 수 있는 권한을 가진 Lambda 실행 역할(Execution Role)을 생성한다. 2) S3 버킷이 위치한 계정 B 에는 계정 A 의 Lambda 실행 역할을 신뢰 관계(Trust Relationship)로 지정하고 S3 읽기 권한 정책이 연결된 타깃 IAM 역할을 생성한다."
  },
  {
   "num": 248,
   "question": "회사의 운영 장애가 증가했습니다. CloudOps 엔지니어는 개발자에게 AWS Management Console 에서 Amazon EC2 인스턴스로의 안전한 액세스를 제공해야 합니다. 개발자는 실시간 문제 해결을 위해 EC2 Instance Connect 를 사용하여 성공적으로 연결할 수 있어야 합니다. EC2 인스턴스는 최신 Amazon Linux 2023 AMI 를 기반으로 합니다. EC2 인스턴스는 퍼블릭으로 액세스할 수 있습니다. EC2 인스턴스에는 인바운드 SSH 트래픽을 허용하는 보안 그룹이 올바르게 구성되어 있습니다. 개발자는 콘솔에서 인스턴스에 액세스하기 위해 기본 ec2-user 계정을 사용합니다. 개발자가 EC2 Instance Connect 를 사용하여 성공적으로 연결할 수 있도록 CloudOps 엔지니어가 다음에 수행해야 하는 단계는 무엇입니까?",
   "options": {
    "A": "EC2 액세스 권한이 있는 IAM 역할을 생성합니다. 이 역할을 EC2 인스턴스에 연결합니다.",
    "B": "프로덕션 인스턴스에 EC2 Instance Connect 에이전트를 다운로드하여 설치합니다.",
    "C": "개발자에게 EC2 Instance Connect 를 사용하고 EC2 인스턴스를 설명(describe)할 수 있는 IAM 권한을 부여합니다.",
    "D": "AWS CloudTrail 로깅을 활성화합니다. EC2 Instance Connect 용 VPC 엔드포인트를 생성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon Linux 2023 AMI 에는 EC2 Instance Connect 에이전트가 기본적으로 사전 설치되어 제공된다. 네트워크 및 OS 레벨 구성이 이미 올바르게 설정되어 있으므로, 개발자가 콘솔에서 EC2 Instance Connect 를 사용하여 접속하기 위해 추가로 필요한 것은 개발자의 IAM 사용자/역할에 `ec2-instance-connect:SendSSHPublicKey` 및 `ec2:DescribeInstances` IAM 권한을 부여하는 것이다."
  },
  {
   "num": 249,
   "question": "회사는 AWS 에서 3 계층 웹 애플리케이션을 실행합니다. 애플리케이션에는 웹 서버, 애플리케이션 서버, 데이터베이스 서버가 포함됩니다. 애플리케이션 서버는 웹 서버의 요청을 처리합니다. 회사는 애플리케이션의 고가용성을 보장하고자 합니다. 따라서 회사는 애플리케이션 서버의 상태를 모니터링하고 정상적인 인스턴스로만 트래픽을 라우팅해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "애플리케이션 서버 앞에 애플리케이션 서버용 헬스 체크가 설정된 Application Load Balancer(ALB)를 생성합니다.",
    "B": "애플리케이션 서버에 대한 Amazon Route 53 헬스 체크를 생성합니다. 애플리케이션 서버 앞에 Network Load Balancer(NLB)를 연결합니다.",
    "C": "애플리케이션 서버를 재시작하는 AWS Lambda 함수를 생성합니다. 애플리케이션 서버의 상태를 모니터링하도록 Amazon CloudWatch 경보를 구성합니다. 애플리케이션이 비정상일 때 함수를 실행합니다.",
    "D": "애플리케이션 서버의 상태를 모니터링하는 Amazon CloudWatch 지표를 생성합니다. Network Load Balancer(NLB)를 사용하여 트래픽을 라우팅합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "웹 서버와 애플리케이션 서버 사이에 Application Load Balancer(ALB)를 배치하면 Target Group 헬스 체크(Health Check)를 통해 애플리케이션 서버의 상태를 지속적으로 모니터링할 수 있다. ALB 는 응답이 없는 비정상(Unhealthy) 인스턴스를 타깃에서 자동으로 제외하고 정상 인스턴스로만 트래픽을 전달하여 고가용성을 보장한다."
  },
  {
   "num": 250,
   "question": "회사는 상태 비저장(stateless) 애플리케이션을 실행하고 있습니다. 애플리케이션은 단일 Amazon EC2 인스턴스에서 실행되는 웹 서버와 PostgreSQL 데이터베이스로 구성되어 있습니다. 애플리케이션 트래픽이 많은 동안 EC2 인스턴스가 과부하되어 응답 시간이 느려집니다. CloudOps 엔지니어는 애플리케이션의 성능 문제를 해결하기 위한 솔루션을 구현해야 합니다. 이 솔루션은 사용자 수가 지속적으로 증가함에 따라 증가하는 애플리케이션 트래픽을 수용해야 합니다. 또한 솔루션은 애플리케이션의 고가용성을 확보해야 합니다. 어떤 단계 조합이 이러한 요구 사항을 충족합니까? (2 개 선택)",
   "options": {
    "A": "Amazon CloudFront 디스트리뷰션을 생성합니다. EC2 인스턴스를 오리진으로 지정합니다.",
    "B": "Application Load Balancer 뒤에 웹 서버의 EC2 Auto Scaling 그룹을 구성합니다.",
    "C": "기존 EC2 인스턴스를 더 많은 CPU 및 메모리 리소스를 갖춘 더 큰 인스턴스 유형으로 업그레이드합니다.",
    "D": "데이터베이스에 Amazon RDS for PostgreSQL Multi-AZ 배포를 사용합니다. 애플리케이션이 새 엔드포인트를 가리키도록 설정합니다.",
    "E": "EC2 인스턴스의 PostgreSQL 데이터베이스를 더 최신 버전으로 업그레이드합니다."
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "단일 EC2 인스턴스 내에서 동시 실행되던 웹 서버와 데이터베이스를 분리하고 각 계층별 확장성과 고가용성을 부여해야 한다. 1. 웹 서버 계층은 상태 비저장(Stateless) 구조이므로 Application Load Balancer(ALB)와 EC2 Auto Scaling 그룹을 조합하여 트래픽 변동에 맞춰 자동으로 인스턴스를 수평 확장(Scale-out)하고 고가용성을 확보한다(B). 2. 데이터베이스 계층은 Amazon RDS for PostgreSQL Multi-AZ 배포 모델로 이관하여 자동 장애 조치(Failover) 및 데이터베이스 고가용성을 구축하고 애플리케이션 연결을 RDS 엔드포인트로 지정한다(D). 단일 EC2 의 인스턴스 스펙만 올리는 수직 확장(C)은 장애 단일점(SPOF)을 해소하지 못하므로 고가용성 요건을 충족하지 못한다."
  },
  {
   "num": 251,
   "question": "회사의 과학자들이 Amazon S3 버킷에 대용량 데이터 객체를 업로드합니다. 과학자들은 객체를 멀티파트 업로드(multipart uploads)로 업로드합니다. 멀티파트 업로드는 열악한 최종 클라이언트 연결 상태로 인해 자주 실패합니다. 회사는 데이터와 관련된 스토리지 비용을 최적화하고자 합니다. CloudOps 엔지니어는 미완료된 업로드에 대한 지표를 제공하는 솔루션을 구현해야 합니다. 또한 솔루션은 7 일 후에 미완료된 업로드를 자동으로 삭제해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "S3 Storage Lens 대시보드에서 Incomplete Multipart Upload Bytes 지표를 검토합니다. 7 일 후에 미완료된 멀티파트 업로드를 자동으로 삭제하도록 S3 수명 주기 정책(S3 Lifecycle policy)을 생성합니다.",
    "B": "7 일 후 데이터를 저비용 스토리지 클래스로 이동하도록 S3 Intelligent-Tiering 을 구현합니다. 7 일 후 미완료된 멀티파트 업로드를 자동으로 삭제하도록 S3 Storage Lens 정책을 생성합니다.",
    "C": "S3 콘솔에 액세스합니다. 지표(Metrics) 탭을 검토하여 미완료된 멀티파트 업로드가 소비하는 스토리지를 확인합니다. 7 일 후 미완료된 멀티파트 업로드를 삭제하는 AWS Lambda 함수를 생성합니다.",
    "D": "S3 분석 스토리지 클래스 분석 도구를 사용하여 미완료된 멀티파트 업로드를 식별하고 측정합니다. 7 일 후 미완료된 멀티파트 업로드를 삭제하도록 멀티파트 업로드에 대한 제한을 적용하는 S3 버킷 정책을 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "S3 Storage Lens 대시보드는 미완료된 멀티파트 업로드가 차지하는 용량을 추적할 수 있는 `Incomplete Multipart Upload Bytes` 지표를 기본 제공한다. 또한 S3 수명 주기 정책(S3 Lifecycle Policy)에 `AbortIncompleteMultipartUpload` 동작을 설정하면 지정된 기간(7 일)이 지난 미완료 업로드 조각들을 자동으로 삭제하여 스토리지 비용을 최적화할 수 있다. S3 Storage Lens 자체에는 삭제 실행 기능이 없으며(B), 버킷 정책(D)이나 커스텀 Lambda 코드(C) 구축보다 수명 주기 정책을 사용하는 것이 가장 간단하고 효율적이다."
  },
  {
   "num": 252,
   "question": "회사는 금융 트랜잭션을 처리하기 위해 대규모 Amazon EC2 인스턴스 플릿에서 애플리케이션을 실행합니다. EC2 인스턴스는 Amazon Elastic File System(Amazon EFS) 파일 시스템을 사용하여 데이터를 공유합니다. 회사는 애플리케이션을 새로운 가용 영역에 배포하고자 하며, 새 가용 영역에 새 서브넷과 마운트 타깃을 생성했습니다. SysOps 관리자가 새 서브넷에서 새 EC2 인스턴스를 시작할 때, EC2 인스턴스가 파일 시스템을 마운트할 수 없습니다. 이 문제의 원인은 무엇입니까?",
   "options": {
    "A": "EFS 마운트 타깃이 프라이빗 서브넷에 생성되었습니다.",
    "B": "EC2 인스턴스와 관련된 IAM 역할이 efs:MountFileSystem 작업을 허용하지 않습니다.",
    "C": "새 가용 영역의 Amazon EFS 용 VPC 엔드포인트로 트래픽을 라우팅하도록 라우팅 테이블이 구성되지 않았습니다.",
    "D": "마운트 타깃의 보안 그룹이 EC2 인스턴스에서 사용하는 보안 그룹으로부터의 인바운드 NFS 연결을 허용하지 않습니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon EFS 파일 시스템 마운트는 NFS(TCP 포트 2049) 프로토콜을 사용한다. 새 가용 영역에 EFS 마운트 타깃을 정상 생성했더라도, 해당 마운트 타깃에 연결된 보안 그룹의 인바운드 규칙에서 EC2 인스턴스의 보안 그룹으로부터 들어오는 TCP 2049(NFS) 포트 트래픽을 허용하지 않으면 연결 타임아웃이 발생하여 마운트에 실패한다. EFS 마운트 타깃은 프라이빗 서브넷에 배치되는 것이 정상적인 구성이므로 A 는 원인이 아니다."
  },
  {
   "num": 253,
   "question": "전자 상거래 회사가 제품 쿼리를 캐싱하기 위해 Amazon ElastiCache (Redis OSS)를 사용합니다. CloudOps 엔지니어는 Amazon CloudWatch 지표에서 다량의 캐시 축출(evictions)을 관찰하고 있으며, 인기 있는 데이터를 캐시에 유지하면서 축출을 줄여야 합니다. 가장 적은 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "ElastiCache 클러스터에 다른 노드를 추가합니다.",
    "B": "ElastiCache TTL 값을 높입니다.",
    "C": "ElastiCache TTL 값을 낮춥니다.",
    "D": "더 큰 노드를 갖춘 새 ElastiCache 클러스터로 마이그레이션합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "ElastiCache(Redis OSS)에서 축출(Evictions) 지표가 지속적으로 높게 나타나는 것은 할당된 메모리 용량이 부족하여 새로운 데이터 입력을 위해 기존 데이터가 강제로 삭제되고 있음을 의미한다. 축출을 줄이고 캐시 보존율을 높이기 위해 가장 직접적이고 운영 오버헤드가 적은 해결책은 클러스터를 더 큰 메모리 용량을 가진 노드 유형으로 업그레이드(Scale-up)하는 것이다. 단순 읽기 전용 복제본 노드 추가(A)는 쓰기/캐시 용량 자체를 늘려주지 못하며, TTL 조절(B, C)은 메모리 부족에 따른 축출 문제를 근본적으로 해결하지 못한다."
  },
  {
   "num": 254,
   "question": "CloudOps 엔지니어는 애플리케이션의 인스턴스 지표를 1 분마다 수집하는 모니터링 시스템을 구현해야 합니다. 애플리케이션은 고가용성 쌍으로 구성된 Amazon EC2 인스턴스에서 실행됩니다. 모니터링 시스템은 지표가 사전 정의된 임계값을 초과할 때 이메일 알람을 보내야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "인스턴스 지표를 추출하기 위해 AWS Health Dashboard 를 사용합니다. 지표의 변화를 감지 및 반응하고 이메일 알람을 보내도록 Amazon EventBridge 를 구성합니다.",
    "B": "인스턴스를 모니터링하기 위해 AWS CloudTrail 을 사용합니다. 로그를 Amazon S3 버킷에 복사합니다. S3 버킷의 로그를 기반으로 이메일 알람을 보내도록 AWS Lambda 함수를 구성합니다.",
    "C": "인스턴스 지표에 대해 Amazon CloudWatch 의 기본 모니터링(basic monitoring)을 사용합니다. 이메일 알람을 보내기 위해 Amazon SNS 를 사용하는 CloudWatch 경보를 구성합니다.",
    "D": "인스턴스 지표에 대해 Amazon CloudWatch 의 세부 모니터링(detailed monitoring)을 사용합니다. 이메일 알람을 보내기 위해 Amazon SNS 를 사용하는 CloudWatch 경보를 구성합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon EC2 의 기본 모니터링(Basic Monitoring)은 5 분 간격으로 지표를 수집하므로 '1 분 주기 지표 수집' 조건에 맞지 않는다. 1 분 주기로 지표를 수집하려면 CloudWatch 세부 모니터링(Detailed Monitoring)을 활성화해야 한다. 지표가 임계값을 초과할 때 이메일 알람을 수신하기 위해서는 CloudWatch 경보(Alarm)를 생성하고 이를 Amazon SNS 주제(Topic)에 연결하여 이메일 구독자에게 통보하도록 설정해야 한다."
  },
  {
   "num": 255,
   "question": "회사는 온프레미스와 AWS 에서 워크로드를 실행하고 있습니다. CloudOps 엔지니어는 AWS 서비스를 사용하여 온프레미스의 모든 서버에서 작업을 자동화해야 합니다. CloudOps 엔지니어는 온프레미스 서버에 장기 자격 증명을 설치해서는 안 됩니다. 이러한 요구 사항을 충족하려면 CloudOps 엔지니어가 무엇을 해야 합니까?",
   "options": {
    "A": "AWS Systems Manager 권한이 포함된 IAM 역할 및 인스턴스 프로파일을 생성합니다. 온프레미스 서버에 이 역할을 연결합니다.",
    "B": "AWS Systems Manager 에서 관리형 인스턴스 활성화(managed-instance activation)를 생성합니다. 온프레미스 서버에 Systems Manager 에이전트를 설치합니다. 관리형 인스턴스 활성화에서 제공된 활성화 코드 및 ID 로 서버를 등록합니다.",
    "C": "적절한 AWS Systems Manager 권한이 포함된 AWS 관리형 IAM 정책을 생성합니다. 온프레미스 서버에 IAM 정책을 다운로드합니다.",
    "D": "IAM 사용자 및 액세스 키를 생성합니다. 온프레미스 서버에 로그인하여 AWS CLI 를 설치합니다. AWS CLI 가 성공적으로 설치된 후 AWS 자격 증명 파일에 액세스 키를 구성합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "온프레미스 서버(비-AWS 환경)를 AWS Systems Manager 의 관리형 인스턴스로 등록하려면 '하이브리드 활성화(Managed-instance activation)' 기능을 이용해야 한다. 온프레미스 서버에 SSM 에이전트를 설치한 후 발급된 활성화 코드(Activation Code)와 활성화 ID 를 통해 등록하면, IAM 사용자 액세스 키와 같은 장기 자격 증명(D)을 서버에 저장하지 않고도 단기 보안 자격 증명을 통해 SSM 기능을 사용할 수 있다. IAM 역할 및 인스턴스 프로파일(A)은 EC2 인스턴스 전용 기능으로 온프레미스 물리/가상 서버에 직접 연결할 수 없다."
  },
  {
   "num": 256,
   "question": "애플리케이션이 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션이 시작된 후 로컬 캐시를 채우는 데 최대 2 분이 걸립니다. 애플리케이션은 시작된 후 수 초 이내에 타깃 그룹 헬스 체크에서 정상(healthy)으로 보고됩니다. CloudOps 엔지니어는 일부 인스턴스가 재부팅된 후, 각 인스턴스가 정상으로 보고된 직후 트래픽의 동일한 지분을 즉시 수신하는 것을 관찰합니다. 애플리케이션 캐시가 채워지는 동안 애플리케이션이 점진적으로 증가하는 트래픽 지분을 수신해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "타깃 그룹 속성인 `slow_start.duration_seconds`를 120 초로 변경합니다. 인스턴스를 재부팅하기 전에 타깃 그룹에서 인스턴스 등록을 해제합니다. 인스턴스를 재부팅한 후 타깃 그룹에 인스턴스를 등록합니다.",
    "B": "타깃 그룹의 `HealthCheckTimeoutSeconds` 파라미터를 120 초로 변경합니다. 인스턴스를 재부팅하기 전에 타깃 그룹에서 인스턴스 등록을 해제합니다. 인스턴스를 재부팅한 후 타깃 그룹에 인스턴스를 등록합니다.",
    "C": "헬스 체크 상태를 모니터링하도록 Amazon CloudWatch 경보를 구성합니다. 헬스 체크가 실패하면 EC2 인스턴스를 재시작하도록 경보 조치를 구성합니다. 타깃 그룹 속성인 `loadbalancing.algorithm.type`을 `weighted_random`으로 변경합니다.",
    "D": "Amazon EC2 Auto Scaling 그룹을 생성합니다. 기존 EC2 인스턴스를 Auto Scaling 그룹에 연결합니다. 시작되는 인스턴스를 Pending:Wait 상태로 이동하도록 EC2 Auto Scaling 수명 주기 후크(lifecycle hook)를 구성합니다. 로컬 캐시가 채워지면 수명 주기 후크를 완료하도록 애플리케이션을 업데이트합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Application Load Balancer(ALB)의 Slow Start 모드(`slow_start.duration_seconds`)를 설정하면 타깃 그룹에 새로 등록된 인스턴스가 지정된 시간 동안 트래픽을 한 번에 다 받지 않고 0%부터 100%까지 점진적으로 부여받도록 제어할 수 있다. 인스턴스를 재부팅 전 등록 해제(Deregister)하고 재부팅 후 다시 등록(Register)하면 Slow Start 모드가 트리거되어, 캐시가 채워지는 120 초 동안 인스턴스가 트래픽을 점진적으로 안전하게 전달받게 된다."
  },
  {
   "num": 257,
   "question": "CloudOps 엔지니어가 Amazon Elastic Kubernetes Service(Amazon EKS)에서 실행되는 퍼블릭 웹사이트에 대한 특정 지표의 관찰 가능성(observability)을 구성하려고 합니다. CloudOps 엔지니어는 지연 시간, 트래픽, 오류 및 포화도 지표를 관찰하기를 원합니다. CloudOps 엔지니어는 서비스 수준 목표(SLO)를 정의하고 서비스 수준 지표(SLI)를 모니터링하고자 합니다. 또한 CloudOps 엔지니어는 빠른 문제 해결을 지원하기 위해 지표, 로그 및 추적(trace)을 연관시키기를 원합니다. 가장 적은 운영 노력으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon CloudWatch Application Signals 를 사용하여 EKS 워크로드에 대해 지정된 지표를 자동으로 수집하고 모니터링합니다.",
    "B": "웹사이트가 지표를 생성하도록 AWS Distro for OpenTelemetry 를 구성합니다. 지정된 지표를 수집하려면 Amazon Managed Service for Prometheus 를 사용합니다. 지표를 시각화하려면 Amazon Managed Grafana 를 사용합니다.",
    "C": "EKS 워크로드에 대해 지정된 지표를 자동으로 수집하고 모니터링하도록 Amazon CloudWatch RUM 및 CloudWatch Synthetics 카나리를 구성합니다.",
    "D": "일반적인 애플리케이션 성능 문제 및 이상 징후를 탐지하고 EKS 워크로드에 대한 지정된 지표를 모니터링하도록 Amazon CloudWatch Application Insights 를 구성합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon CloudWatch Application Signals 는 애플리케이션의 Golden Signals(지연 시간, 트래픽, 오류, 포화도)를 자동 수집하고, 서비스 수준 지표(SLI) 및 서비스 수준 목표(SLO)를 정의/추적하며, 지표·로그·추적(Traces)을 상호 연관시켜 분석할 수 있는 에이전트리스 기반의 완전관리형 관찰 가능성(Observability) 서비스이다. EKS 환경에 Application Signals 를 사용하면 Prometheus/Grafana 오픈소스 파이프라인(B) 구축보다 최소한의 운영 노력으로 요구 사항을 즉시 달성할 수 있다."
  },
  {
   "num": 258,
   "question": "회사에는 요구 사항보다 많은 Amazon EBS 성능 용량으로 Amazon EC2 인스턴스를 배포하는 사용자가 있습니다. CloudOps 엔지니어는 모든 EBS 볼륨을 검토하고 IOPS 및 처리량을 기반으로 비용 최적화 권장 사항을 생성해야 합니다. CloudOps 엔지니어가 가장 운영 효율적인 방식으로 수행해야 하는 작업은 무엇입니까?",
   "options": {
    "A": "EC2 콘솔 모니터링 그래프를 수동으로 검토합니다.",
    "B": "인스턴스 유형을 EBS 최적화 인스턴스로 변경합니다.",
    "C": "AWS Compute Optimizer 에 참여(Opt in)하고 EBS 볼륨 권장 사항을 검토합니다.",
    "D": "각 인스턴스에서 fio 벤치마크를 실행합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Compute Optimizer 는 기계 학습을 활용하여 EC2, EBS, Lambda 등의 과거 사용량 데이터를 분석하고, 과도하게 프로비저닝된 EBS 볼륨의 IOPS 및 처리량을 정확히 감지하여 최적의 볼륨 유형 및 용량을 자동 추천해 준다. Compute Optimizer 를 활성화(Opt in)하면 수동 모니터링(A)이나 벤치마크 스크립트 실행(D) 없이 가장 높고 효율적인 운영 자동화로 최적화 권장 사항을 얻을 수 있다."
  },
  {
   "num": 259,
   "question": "회사는 비즈니스 운영을 위해 많은 수의 Linux 기반 Amazon EC2 인스턴스를 사용합니다. 회사는 EC2 인스턴스를 관리하기 위해 AWS Systems Manager 를 사용합니다. 회사는 Systems Manager 에이전트(SSM 에이전트)가 항상 최신 버전으로 유지되도록 하려고 합니다. 가장 운영 효율적인 방식으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Systems Manager Fleet Manager 에서 SSM 에이전트 자동 업데이트(Auto update SSM Agent) 설정을 활성화합니다.",
    "B": "SSM 에이전트 GitHub 알림을 구독하고 Lambda 를 사용하여 에이전트를 업데이트합니다.",
    "C": "Systems Manager Patch Manager 에서 SSM 에이전트 자동 업데이트 설정을 활성화합니다.",
    "D": "GitHub 알림 및 Systems Manager Automation 문서를 사용합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS Systems Manager Fleet Manager(또는 Quick Setup) 콘솔의 설정에서 \"Auto update SSM Agent\" 옵션을 활성화하면, AWS 가 새 버전의 SSM 에이전트를 출시할 때마다 관리형 인스턴스의 에이전트가 별도의 스크립트 작성이나 외부 알림 연동(B, D) 없이 자동으로 최신 버전으로 업데이트된다."
  },
  {
   "num": 260,
   "question": "회사는 기본 설정을 사용하여 AWS Lambda 함수를 생성합니다. 이 함수는 VPC 의 프라이빗 서브넷에 있는 Amazon RDS 데이터베이스에 액세스해야 합니다. 함수에는 데이터베이스에 액세스할 수 있는 올바른 IAM 권한이 있습니다. 프라이빗 서브넷에는 적절한 라우팅 구성이 있으며 VPC 내에서 액세스할 수 있습니다. 그러나 Lambda 함수가 RDS 인스턴스에 연결할 수 없습니다. Lambda 함수가 RDS 인스턴스에 연결할 수 없는 유력한 이유는 무엇입니까?",
   "options": {
    "A": "회사가 함수 구성에서 RDS 인스턴스를 Lambda 함수의 대상으로 설정하지 않았습니다.",
    "B": "Lambda 함수 구성에서 RDS 인스턴스가 포함된 동일한 VPC 에 함수를 배포하지 않았습니다.",
    "C": "Lambda 함수가 배포된 VPC 가 RDS 인스턴스가 배포된 VPC 와 피어링되지 않았습니다.",
    "D": "Lambda 함수의 보안 그룹이 RDS 인스턴스로의 아웃바운드 액세스를 허용하지 않습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "기본(Default) 설정으로 생성된 AWS Lambda 함수는 VPC 외부의 AWS 관리형 VPC 네트워크 상에서 실행된다. Lambda 함수가 동일한 VPC 의 프라이빗 서브넷 내부에서 실행 중인 RDS 데이터베이스에 접근하려면, Lambda 함수 구성에서 해당 VPC, 프라이빗 서브넷 및 보안 그룹을 명시적으로 연결(VPC 연동)하여 ENI(Elastic Network Interface)가 프라이빗 서브넷 내에 생성되도록 지정해야 한다. 기본 설정 상태에서는 프라이빗 서브넷 내부 전용 RDS 로 연결 패킷이 전달될 수 없다."
  },
  {
   "num": 261,
   "question": "CloudOps 엔지니어가 Amazon RDS for PostgreSQL DB 인스턴스를 위한 솔루션을 설계하고 있습니다. 데이터베이스 자격 증명은 매월 저장되고 순환(rotate)되어야 합니다. 애플리케이션은 클라이언트 연결 수가 가변적이고 갑작스럽게 증가하는 쓰기 집약적 트래픽을 생성합니다. CloudOps 엔지니어가 이러한 요구 사항을 충족하기 위해 선택해야 하는 솔루션은 무엇입니까?",
   "options": {
    "A": "키를 자동으로 순환하도록 AWS Key Management Service(AWS KMS)를 구성합니다. RDS Proxy 를 사용합니다.",
    "B": "키를 순환하도록 AWS KMS 를 구성합니다. RDS 읽기 전용 복제본(read replica)을 사용합니다.",
    "C": "자격 증명을 순환하도록 AWS Secrets Manager 를 구성합니다. RDS Proxy 를 사용합니다.",
    "D": "자격 증명을 순환하도록 AWS Secrets Manager 를 구성합니다. RDS 읽기 전용 복제본(read replica)을 사용합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Secrets Manager 는 데이터베이스 사용자 이름 및 암호와 같은 자격 증명을 암호화하여 저장하고, 매월 자동으로 순환(Rotation)할 수 있는 전용 서비스이다(KMS 는 암호화 키 관리 전용 서비스임). 또한 RDS Proxy 는 애플리케이션 연결 풀(Connection Pooling)을 관리하여 클라이언트 연결 수가 갑작스럽게 급증할 때 데이터베이스 메모리 및 CPU 리소스 고갈을 방지한다. 따라서 자격 증명 순환에는 Secrets Manager, 연결 급증 대응에는 RDS Proxy 의 조합이 올바르다."
  },
  {
   "num": 262,
   "question": "회사의 CloudOps 엔지니어는 고가용성 환경을 유지 관리합니다. 이 환경에는 Amazon EC2 인스턴스와 Amazon RDS Multi-AZ 데이터베이스가 포함됩니다. EC2 인스턴스는 Application Load Balancer 뒤의 Auto Scaling 그룹에 있습니다. 최근 회사는 장애 조치(failover) 테스트를 진행했습니다. CloudOps 엔지니어는 RDS 데이터베이스의 장애 조치 시간을 최소 10% 이상 단축해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
   "options": {
    "A": "다른 AWS 리전에 읽기 전용 복제본을 생성합니다. 장애 발생 시 읽기 전용 복제본을 승격합니다.",
    "B": "RDS 인스턴스 크기를 증설합니다.",
    "C": "RDS Proxy 를 생성합니다. 애플리케이션이 프록시 엔드포인트를 가리키도록 설정합니다.",
    "D": "단일 가용 영역에서 실행되도록 RDS 클러스터를 수정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon RDS Proxy 를 적용하면 데이터베이스 장애 조치(Failover) 시 DNS 전파(Propagation) 대기 시간을 우회하고 기존 애플리케이션 연결을 효율적으로 보존하므로 Multi-AZ RDS DB 의 장애 조치 시간을 최대 66%까지 대폭 단축할 수 있다. 다른 리전 복제본 승격(A)은 수동 개입과 시간이 더 소요되며, 단일 AZ 구성(D)은 고가용성 자체를 무력화한다."
  },
  {
   "num": 263,
   "question": "CloudOps 엔지니어에게 Amazon S3 버킷과 새로운 AWS Lambda 함수가 있습니다. CloudOps 엔지니어가 Lambda 콘솔을 사용하여 S3 버킷에서 Lambda 함수로 향하는 새 이벤트 알림을 구성하려고 시도합니다. 그러나 구성이 실패하고 다음 오류를 반환합니다: \"Unable to validate the following destination configurations.\" 엔지니어는 새 Lambda 함수와 함수의 IAM 역할이 올바르게 구성되었음을 확인했습니다. 이 오류의 원인은 무엇입니까?",
   "options": {
    "A": "S3 버킷에 대해 허용되는 S3 이벤트 알림 대상의 최대 개수를 초과했습니다.",
    "B": "새 Lambda 함수의 리소스 기반 정책에 Amazon S3 에 대한 lambda:InvokeFunction 권한이 누락되었습니다.",
    "C": "S3 버킷 소유자가 리소스 정책을 사용하여 Lambda 함수에 명시적 교차 계정 권한을 부여해야 합니다.",
    "D": "S3 버킷에 삭제되었거나 권한이 부족한 리소스를 가리키는 기존의 오래된 이벤트 알림이 있습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "S3 이벤트 알림을 구성할 때 S3 서비스는 지정된 타깃(Lambda 함수)을 정상적으로 호출할 수 있는지 사전 검증(Validation)을 수행한다. Lambda 함수의 리소스 기반 정책(Resource-based Policy)에 `s3.amazonaws.com` 서비스 주체가 `lambda:InvokeFunction` 작업을 실행할 수 있도록 허용하는 권한이 등록되어 있지 않으면 \"Unable to validate the following destination configurations\" 오류가 발생한다. Lambda 실행 역할(Execution Role)이 정상이라도 함수 자체의 리소스 정책에 S3 호출 허용이 누락되면 해당 오류가 발생한다."
  },
  {
   "num": 264,
   "question": "전자 상거래 회사가 전자 상거래 회사의 AWS 계정을 감사하기 위해 사이버 보안 회사를 고용합니다. 사이버 보안 회사는 계정에 대한 읽기 전용 액세스 권한을 요청합니다. 전자 상거래 회사는 IAM 역할을 생성하고, 사이버 보안 회사의 AWS 계정과의 신뢰 관계를 추가하며, 전자 상거래 회사 계정에 읽기 전용 권한을 추가합니다. 사이버 보안 회사의 직원이 전자 상거래 회사가 생성한 읽기 전용 역할을 전환(Assume)하려고 시도하지만 실패합니다. 전자 상거래 회사의 CloudOps 엔지니어는 이 액세스 문제를 해결해야 합니다. 어떤 솔루션이 이 요구 사항을 충족합니까?",
   "options": {
    "A": "다중 요소 인증(MFA)을 구성합니다.",
    "B": "sts:SetSourceIdentity 작업을 허용하는 정책을 생성합니다. 사이버 보안 회사 직원의 역할에 이 정책을 추가합니다. 정책의 리소스가 전자 상거래 회사의 계정에 있는지 확인합니다.",
    "C": "sts:AssumeRole 작업을 허용하는 정책을 생성합니다. 사이버 보안 회사 직원의 역할(또는 사용자)에 이 정책을 추가합니다. 정책의 리소스가 직원이 전환해야 하는 역할의 ARN 인지 확인합니다.",
    "D": "OpenID Connect(OIDC)를 사용하여 자격 증명 공급자를 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "교차 계정(Cross-Account) IAM 역할 전환(AssumeRole)이 성공하려면 두 가지 권한 설정이 모두 완료되어야 한다: 1. 대상 계정(전자 상거래 회사): 역할의 신뢰 정책(Trust Policy)에서 외부 계정의 주체(Principal)를 허용해야 함 (이미 완료됨). 2. 원본 계정(사이버 보안 회사): 해당 사용자/역할의 IAM 정책에서 대상 역할 ARN 에 대해 `sts:AssumeRole`을 실행할 수 있도록 허용해야 함. 사이버 보안 회사 직원의 IAM 정책에 대상 역할 ARN 에 대한 `sts:AssumeRole` 허용 정책이 누락되어 접속 실패가 발생한 것이므로 C 가 올바른 해결책이다."
  },
  {
   "num": 265,
   "question": "애플리케이션이 하나의 Aurora 복제본(Replica)을 포함하는 Amazon Aurora MySQL DB 클러스터를 사용합니다. 사용자 연결 수가 200 개를 초과하면 애플리케이션의 읽기 성능이 저하됩니다. 사용자 연결 수는 지속적으로 약 180 개 수준입니다. 때때로 사용자 연결 수가 200 개 이상으로 급격히 증가합니다. CloudOps 엔지니어는 사용자 수요가 증가하거나 감소함에 따라 애플리케이션을 자동으로 확장하는 솔루션을 구현해야 합니다. 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Aurora 복제본 인스턴스 크기를 늘려 DB 클러스터를 수정합니다.",
    "B": "다중 작성자(Multiple Writer) 인스턴스가 있는 새 Aurora DB 클러스터로 마이그레이션합니다. 애플리케이션의 데이터베이스 연결 문자열을 수정합니다.",
    "C": "DatabaseConnections 지표에 대해 목표값을 195 로 설정하는 Auto Scaling 정책을 생성합니다.",
    "D": "사용자 연결 수가 200 개를 초과할 때마다 서버리스 모드로 변경되도록 DB 클러스터를 수정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon Aurora 는 읽기 전용 복제본(Aurora Replicas)에 대한 Auto Scaling(Target Tracking Scaling Policy)을 지원한다. `DatabaseConnections` 지표의 임계값(예: 195)을 목표치로 설정하면, 트래픽 급증으로 개별 복제본의 연결 수가 195 개를 초과할 때 자동으로 읽기 복제본 노드가 수평 확장(Scale-out)되고 연결 수가 감소하면 다시 축소(Scale-in)되어 성능 저하를 방지한다. 인스턴스 크기를 수동으로 키우거나(A) 다중 작성자 클러스터로 마이그레이션하는 것(B)은 자동 수평 확장에 부합하지 않는다."
  },
  {
   "num": 266,
   "question": "CloudOps 엔지니어는 Amazon CloudFront 를 통해 전달되는 웹 애플리케이션의 성능 문제를 해결해야 합니다. 지표를 확인한 결과 캐시 적중률(cache hit ratio)이 지속적으로 낮아 많은 요청이 오리진으로 전달되고 있습니다. 캐시 적중률을 높이는 구성은 무엇입니까?",
   "options": {
    "A": "오리진의 Cache-Control 헤더를 max-age=0 으로 수정합니다.",
    "B": "캐시된 객체의 TTL 을 줄입니다.",
    "C": "캐시 키(cache key)에 포함되는 요청 헤더, 쿼리 스트링, 쿠키의 수를 줄입니다.",
    "D": "콘텐츠에 대한 액세스를 제한하도록 서명된 URL 또는 서명된 쿠키를 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudFront 는 캐시 키(Cache Key)를 기반으로 고유 객체를 식별하므로, 캐시 키에 포함되는 요청 헤더, 쿼리 스트링, 쿠키의 가짓수가 적을수록 동일한 캐시 객체를 재사용할 확률이 높아져 캐시 적중률(Cache Hit Ratio)이 상승한다. max-age=0 으로 변경(A)하거나 TTL 을 줄이는 것(B)은 캐시 유지 기간을 줄여 캐시 적중률을 떨어뜨린다. 서명된 URL(D)은 접근 제어 보안 기능이다."
  },
  {
   "num": 267,
   "question": "CloudOps 엔지니어는 Amazon RDS for PostgreSQL 데이터베이스를 사용하는 읽기 집약적 애플리케이션을 위한 캐싱 계층을 구성해야 합니다. 애플리케이션은 3 개의 AWS 리전에 존재합니다. 읽기 및 쓰기 작업은 기본(Primary) 리전에서 발생합니다. 보조(Secondary) 2 개 리전에서는 RDS for PostgreSQL 교차 리전 읽기 전용 복제본에서 읽기 전용 작업이 발생합니다. 리전 간 일관된 사용자 경험을 제공하기 위해 각 리전의 캐시는 동일한 데이터를 포함해야 합니다. 이러한 요구 사항을 충족하는 캐싱 계층 솔루션은 무엇입니까?",
   "options": {
    "A": "Amazon ElastiCache (Redis OSS) 글로벌 데이터스토어를 설정합니다. 기본 리전에 읽기 및 쓰기 클러스터를 포함하고, 각 보조 리전에 읽기 전용 클러스터를 포함합니다.",
    "B": "Amazon ElastiCache (Memcached) 글로벌 데이터베이스를 설정합니다. 기본 리전에 읽기 및 쓰기 클러스터를 포함하고, 각 보조 리전에 읽기 전용 클러스터를 포함합니다.",
    "C": "기본 리전의 RDS for PostgreSQL 데이터베이스에 쿼리 캐싱을 설정합니다. 보조 RDS 교차 리전 복제본으로 쿼리 캐시 복제를 구성합니다.",
    "D": "3 개 리전 모두에서 클러스터 모드가 활성화된 Amazon ElastiCache (Memcached) 클러스터를 설정합니다. 기본 리전에서 보조 리전으로 ElastiCache 교차 리전 복제를 설정합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "Amazon ElastiCache for Redis(Redis OSS) 글로벌 데이터스토어(Global Datastore)는 기본 리전의 클러스터에서 수행된 쓰기 작업을 여러 보조 리전의 읽기 전용 클러스터로 교차 리전 복제해 주는 완전관리형 기능이다. 이를 통해 여러 리전에 걸쳐 동일하고 일관된 캐시 데이터를 제공할 수 있다. Memcached(B, D)는 데이터 복제 기능 및 글로벌 데이터스토어 기능을 지원하지 않는다."
  },
  {
   "num": 268,
   "question": "회사는 Amazon CloudWatch Logs 로그 그룹에 운영 체제 로그를 수집합니다. 회사는 로그에 특정 예외(exception)가 10 분 이내에 5 회 이상 나타날 경우 지원 팀에 자동으로 알림을 보내는 솔루션을 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "로그 그룹에 지표 필터(metric filter)를 생성합니다. 지표를 기반으로 주기 10 분의 경보를 생성합니다. Amazon SNS 주제를 생성합니다. 경보가 SNS 주제를 가리키도록 설정합니다. 지원 팀의 이메일 주소를 SNS 주제에 구독합니다.",
    "B": "CloudWatch 대시보드를 생성합니다. 대시보드에 테이블 위젯을 추가합니다. CloudWatch Logs Insights 의 데이터로 테이블을 채웁니다. 대시보드를 지원 팀과 공유합니다.",
    "C": "검색 패턴과 일치하는 모든 로그를 Lambda 함수로 보내도록 AWS Lambda 구독 필터를 생성합니다. Lambda 함수로부터 알림을 수신하도록 Amazon SNS 주제를 생성합니다. 지원 팀의 이메일 주소를 SNS 주제에 구독합니다.",
    "D": "지원 팀이 자율적으로 로그를 검토할 수 있도록 CloudWatch Logs 로그 그룹에 대한 읽기 전용 액세스 권한을 제공합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "CloudWatch Logs 에 수집되는 로그에서 특정 단어나 오류 패턴 발생 횟수를 추적하려면 지표 필터(Metric Filter)를 생성해야 한다. 지표 필터를 통해 커스텀 지표를 추출하고, 해당 지표에 대해 10 분 주기 동안 발생 횟수가 5 회를 초과할 때 트리거되는 CloudWatch 경보(Alarm)를 생성하여 Amazon SNS 이메일 구독으로 통보하도록 구성하면 가장 단순하고 효과적인 자동 알림 시스템이 완성된다."
  },
  {
   "num": 269,
   "question": "회사는 3 개의 가용 영역에 있는 수백 대의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 애플리케이션은 퍼블릭 인터넷을 통해 타사 API 를 호출합니다. CloudOps 엔지니어는 타사가 애플리케이션의 트래픽을 허용할 수 있도록 고정 IP 주소 목록을 제공해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "각 가용 영역의 퍼블릭 서브넷에 NAT 게이트웨이를 추가합니다. NAT 게이트웨이를 해당 가용 영역의 모든 프라이빗 서브넷에 대한 기본 라우트(0.0.0.0/0)로 지정합니다.",
    "B": "각 가용 영역에서 하나의 Elastic IP 주소를 할당합니다. 해당 가용 영역의 모든 인스턴스에 Elastic IP 주소를 연결합니다.",
    "C": "인스턴스를 Network Load Balancer(NLB) 뒤에 배치합니다. NLB 의 프라이빗 IP 주소를 통해 인터넷으로 트래픽을 보냅니다.",
    "D": "각 인스턴스에 할당된 Elastic IP 주소를 통해 인터넷으로 트래픽을 보내도록 메인 라우팅 테이블을 업데이트합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "프라이빗 서브넷에 위치한 수백 대의 EC2 인스턴스가 아웃바운드 인터넷 통신을 할 때 대표되는 고정 퍼블릭 IP 를 제공하는 가장 표준적인 방법은, 각 가용 영역의 퍼블릭 서브넷에 NAT 게이트웨이를 생성하고 Elastic IP 를 할당하는 것이다. 프라이빗 서브넷의 라우팅 테이블에서 인터넷 기본 라우트(0.0.0.0/0)의 타깃을 해당 가용 영역의 NAT 게이트웨이로 설정하면 타사에는 NAT 게이트웨이 개수(AZ 당 1 개, 총 3 개)만큼의 고정 Elastic IP 목록만 제공하면 된다."
  },
  {
   "num": 270,
   "question": "회사는 모든 AWS 리소스가 AWS CloudFormation 에 의해 배포되고 관리되도록 IAM 정책을 사용합니다. CloudOps 엔지니어는 주기적으로 모든 AWS 리소스를 감사하고 예상되는 구성과 일치하지 않는 리소스 목록을 제공해야 합니다. 가장 적은 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "CloudFormation 에 의해 리소스가 생성될 때 회사에 알림을 보내는 Amazon EventBridge 규칙을 구성합니다. 올바르지 않은 구성이 있는지 이벤트 알림을 감사합니다.",
    "B": "CloudFormation 코드가 저장된 코드 리포지토리를 감사하여 예상되는 구성과의 이탈이 있는지 확인합니다.",
    "C": "AWS CLI 를 사용하여 모든 리소스를 확인하고 의도한 구성과의 일관성을 보장합니다.",
    "D": "CloudFormation 드리프트 탐지(drift detection)의 주기적 호출을 예약하도록 Amazon EventBridge 를 사용합니다. 검토를 위해 결과를 수집합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "AWS CloudFormation 은 실제 배포된 리소스의 상태가 CloudFormation 템플릿에 정의된 구성과 다르게 변경되었는지 감지하는 '드리프트 탐지(Drift Detection)' 기능을 기본적으로 지원한다. Amazon EventBridge Scheduler/규칙을 사용하여 드리프트 탐지 작업을 정기적으로 수동 실행되도록 자동화하면 추가적인 복잡한 스크립트 작성(C) 없이 최소한의 노력으로 리소스 구성 일탈 목록을 주기적으로 확보하고 감사할 수 있다."
  },
  {
   "num": 271,
   "question": "회사는 us-east-1 AWS 리전의 Amazon S3 버킷에 주요 파일을 저장합니다. 재해 복구 요구 사항을 준수하기 위해 버킷의 모든 새 객체는 us-west-2 리전의 버킷으로 자동 복제되어야 합니다. 가장 적은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?",
   "options": {
    "A": "소스 버킷에서 교차 리전 복제(CRR)를 활성화합니다. us-west-2 리전의 대상 버킷을 지정합니다. 소스 버킷에서 버전 관리를 활성화합니다.",
    "B": "us-east-1 버킷과 us-west-2 버킷 모두에서 교차 오리진 리소스 공유(CORS)를 활성화합니다.",
    "C": "객체를 대상 버킷으로 복사하는 AWS Lambda 함수를 생성합니다. 생성되는 각 객체에 대해 Lambda 함수를 실행하도록 Amazon EventBridge 규칙을 구성합니다.",
    "D": "us-west-2 리전의 다른 스토리지 클래스로 객체를 전환하도록 S3 수명 주기 정책을 활성화합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "S3 교차 리전 복제(Cross-Region Replication, CRR)는 서로 다른 AWS 리전의 S3 버킷 간에 객체를 자동 비동기 복제하는 완전관리형 기능이다. CRR 을 활성화하기 위해서는 소스 및 대상 버킷 모두에서 버전 관리(Versioning)가 활성화되어야 한다. 커스텀 Lambda 및 EventBridge 구축(C)은 운영 오버헤드가 크며, CORS(B)는 브라우저 간 교차 도메인 요청 허용 설정이고, 수명 주기 정책(D)은 동일 버킷 내 객체의 스토리지 클래스 전환 또는 삭제를 관리하는 기능이다."
  },
  {
   "num": 272,
   "question": "회사는 수천 개의 알람 시스템에서 알림을 수집하는 애플리케이션을 운영하고 있습니다. 알림에는 알람 알림과 정보 알림이 포함됩니다. 모든 알림은 Amazon Simple Queue Service(Amazon SQS) 대기열에 저장됩니다. Auto Scaling 그룹의 Amazon EC2 인스턴스가 메시지를 처리합니다. CloudOps 엔지니어는 정보 알림보다 알람 알림을 우선적으로 처리해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "메시지 용량이 증가할 때 Auto Scaling 그룹을 더 빠르게 확장합니다.",
    "B": "모든 EC2 인스턴스에 메시지를 보내기 위해 Amazon SNS 팬아웃을 사용합니다.",
    "C": "처리 속도를 높이기 위해 Amazon DynamoDB 스트림을 추가합니다.",
    "D": "알람 알림과 정보 알림을 위한 별도의 SQS 대기열을 생성하고 알람 메시지를 먼저 처리합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "단일 Amazon SQS 대기열 내에서는 메시지 우선순위를 직접 지정할 수 없다. 따라서 우선순위 메시징 처리를 위한 모범 사례는 알람 알림용 대기열(높은 우선순위)과 정보 알림용 대기열(낮은 우선순위)을 분리하여 생성한 후, 소비자(EC2 인스턴스)가 알람 대기열의 메시지를 우선적으로 수신 및 처리하도록 애플리케이션을 구성하는 것이다."
  },
  {
   "num": 273,
   "question": "회사는 Application Load Balancer(ALB) 뒤에 있는 대형 컴퓨팅 최적화 Amazon EC2 인스턴스에서 실행되는 프로덕션 애플리케이션을 보유하고 있습니다. 인스턴스는 Amazon EC2 Auto Scaling 그룹에 있습니다. Auto Scaling 그룹의 희망 용량(desired capacity)은 2, 최대 용량(maximum capacity)은 2, 최소 용량(minimum capacity)은 1 입니다. 애플리케이션은 CPU 집약적입니다. EC2 인스턴스는 피크 사용 기간 동안 90% 이상의 지속적인 CPU 사용률을 보입니다. 이러한 피크 사용 기간은 예측할 수 없으며 성능 문제 및 지연 시간 문제를 일으킵니다. 이러한 문제의 해결을 자동화하는 솔루션은 무엇입니까?",
   "options": {
    "A": "Auto Scaling 그룹 외부에 추가 인스턴스를 배포합니다. 기존 인스턴스와 추가 인스턴스를 타깃으로 포함하는 새 타깃 그룹을 생성합니다. 새 타깃 그룹으로 트래픽을 전달하도록 ALB 를 재구성합니다.",
    "B": "Auto Scaling 그룹의 최대 용량을 늘립니다. 인스턴스를 버스터블(burstable) 인스턴스 유형으로 변경합니다.",
    "C": "Auto Scaling 그룹의 최대 용량을 늘립니다. 인스턴스 CPU 사용률이 80%를 초과할 때 인스턴스를 추가하도록 동적 확장 정책을 구성합니다.",
    "D": "Auto Scaling 그룹의 희망 용량을 늘립니다. 인스턴스 CPU 사용률이 80%를 초과할 때 인스턴스를 추가하도록 동적 확장 정책을 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "현재 Auto Scaling 그룹의 최대 용량(Maximum Capacity)이 2 로 제한되어 있어 트래픽 급증 시 추가 인스턴스가 확장(Scale-out)되지 못하는 상태이다. 이 문제를 자동화하여 해결하려면 Auto Scaling 그룹의 최대 용량을 늘려 확장이 가능하도록 허용하고, CPU 사용률이 80%를 초과할 때 인스턴스를 자동으로 추가하는 확장 정책(Target Tracking 또는 Dynamic Scaling Policy)을 구성해야 한다. 희망 용량만 변경하는 것(D)은 최대 용량 제약이 풀리지 않으면 확장이 불가능하거나 고정적 확장에 그치게 된다."
  },
  {
   "num": 274,
   "question": "Amazon EC2 콘솔에서 작업하는 사용자가 Amazon EC2 Windows 인스턴스에 연결된 Amazon Elastic Block Store(Amazon EBS) 볼륨의 크기를 늘렸습니다. 변경 사항이 파일 시스템에 반영되지 않습니다. CloudOps 엔지니어가 이 문제를 해결하기 위해 해야 할 일은 무엇입니까?",
   "options": {
    "A": "새로운 스토리지 용량을 사용하도록 운영 체제 수준의 도구를 사용하여 파일 시스템을 확장합니다.",
    "B": "EBS 볼륨을 EC2 인스턴스에 다시 연결합니다.",
    "C": "EBS 볼륨이 연결된 EC2 인스턴스를 재부팅합니다.",
    "D": "EBS 볼륨의 스냅샷을 생성합니다. 원본 볼륨을 스냅샷에서 생성된 볼륨으로 교체합니다."
   },
   "answer": [
    "A"
   ],
   "explanation": "AWS 콘솔에서 EBS 볼륨 크기를 늘린 후에는(EBS Elastic Volumes) 볼륨의 물리적/논리적 크기는 증가하지만, OS 레벨의 파일 시스템이 새 공간을 자동으로 인식하여 확장하지 않는다. 따라서 Windows 의 경우 '디스크 관리(Disk Management)' 도구나 PowerShell 을 사용하여 파티션 및 파일 시스템을 수동으로 확장(Extend Volume)해 주어야 한다. 인스턴스 재부팅(C)이나 재연결(B)만으로는 파일 시스템이 자동 확장되지 않는다."
  },
  {
   "num": 275,
   "question": "회사의 VPC 는 AWS Site-to-Site VPN 을 통해 온프레미스 데이터 센터에 연결되어 있습니다. 회사는 VPC 의 Amazon EC2 인스턴스가 example.com 에 대한 DNS 쿼리를 데이터 센터의 DNS 서버로 전송하도록 설정해야 합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?",
   "options": {
    "A": "Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. example.com 에 대한 DNS 요청을 인바운드 엔드포인트로 전달하도록 온프레미스 DNS 서버에 조건부 전달 규칙을 생성합니다.",
    "B": "Amazon Route 53 Resolver 인바운드 엔드포인트를 생성합니다. example.com 에 대한 모든 쿼리를 온프레미스 DNS 서버로 보내는 전달 규칙을 리졸버에 생성합니다. 이 규칙을 VPC 에 연결합니다.",
    "C": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. example.com 에 대한 DNS 요청을 아웃바운드 엔드포인트로 전달하도록 온프레미스 DNS 서버에 조건부 전달 규칙을 생성합니다.",
    "D": "Amazon Route 53 Resolver 아웃바운드 엔드포인트를 생성합니다. example.com 에 대한 모든 쿼리를 온프레미스 DNS 서버로 보내는 전달 규칙을 리졸버에 생성합니다. 이 규칙을 VPC 에 연결합니다."
   },
   "answer": [
    "D"
   ],
   "explanation": "VPC 내부의 EC2 인스턴스가 온프레미스 DNS 서버로 DNS 쿼리를 보내야 하는 상황(VPC $\\rightarrow$ 온프레미스)에서는 Route 53 Resolver '아웃바운드 엔드포인트(Outbound Endpoint)'를 생성해야 한다. 그리고 `example.com` 도메인에 대한 질의를 온프레미스 IP 주소로 전달(Forwarding)하도록 리졸버 규칙을 구성하고 이 규칙을 해당 VPC 에 연결해야 한다. 인바운드 엔드포인트(A, B)는 반대로 온프레미스에서 VPC 내부의 DNS 레코드를 질의할 때 사용된다."
  },
  {
   "num": 276,
   "question": "VPC 에 사용 가능한 프라이빗 IPv4 주소가 없어 CloudOps 엔지니어가 VPC 내로 Amazon EC2 인스턴스를 시작할 수 없습니다. 인스턴스를 시작하기 위해 CloudOps 엔지니어가 취해야 하는 조치 조합은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "보조(secondary) IPv4 CIDR 블록을 VPC 에 연결합니다.",
    "B": "기본(primary) IPv6 CIDR 블록을 VPC 에 연결합니다.",
    "C": "VPC 에 대한 새 서브넷을 생성합니다.",
    "D": "VPC 의 CIDR 블록을 수정합니다.",
    "E": "인스턴스와 관련된 서브넷의 CIDR 블록을 수정합니다."
   },
   "answer": [
    "A",
    "C"
   ],
   "explanation": "기존에 할당된 VPC 및 서브넷의 CIDR 블록 크기는 생성 후 직접 변경할 수 없다. VPC 내의 IPv4 주소가 모두 고갈된 경우, 1) VPC 에 보조(Secondary) IPv4 CIDR 블록을 추가로 연결(Associate)하고, 2) 해당 보조 CIDR 대역 내에 새로운 서브넷을 생성해야만 추가 인스턴스를 시작할 수 있다."
  },
  {
   "num": 277,
   "question": "회사가 재해 복구를 위해 us-east-1(기본) 및 us-west-2(보조)의 두 AWS 리전에 걸쳐 중요한 웹 애플리케이션을 배포하고 있습니다. CloudOps 엔지니어는 모든 트래픽을 기본 리전으로 전달하되, 기본 리전을 사용할 수 없게 되면 자동으로 보조 리전으로 트래픽을 라우팅하도록 DNS 를 구성해야 합니다. 어떤 Amazon Route 53 라우팅 정책을 사용해야 합니까?",
   "options": {
    "A": "가중치 기반 라우팅(Weighted routing)",
    "B": "지연 시간 기반 라우팅(Latency-based routing)",
    "C": "장애 조치 라우팅(Failover routing)",
    "D": "지리적 위치 라우팅(Geolocation routing)"
   },
   "answer": [
    "C"
   ],
   "explanation": "액티브-패시브(Active-Passive) 형태의 재해 복구(DR) 구성을 구현할 때는 장애 조치(Failover) 라우팅 정책을 사용한다. Route 53 헬스 체크를 기본(Primary) 리전에 연결하여 정상 상태일 때는 기본 리전으로 라우팅하고, 기본 리전에 장애가 감지되면 보조(Secondary) 리전으로 트래픽을 자동 전환한다."
  },
  {
   "num": 278,
   "question": "조직이 AWS Direct Connect 를 통해 온프레미스 데이터 센터와 AWS VPC 를 연결한 하이브리드 클라우드 환경을 갖추고 있습니다. 운영 팀은 VPC 내의 EC2 인스턴스가 온프레미스 데이터 센터에 위치한 DNS 호스트 이름을 확인(resolve)할 수 있도록 설정해야 합니다. 이를 가능하게 하려면 어떤 AWS 서비스 또는 기능을 구성해야 합니까?",
   "options": {
    "A": "Route 53 프라이빗 호스팅 영역",
    "B": "전달 규칙이 포함된 Route 53 Resolver 아웃바운드 엔드포인트",
    "C": "Route 53 Resolver 인바운드 엔드포인트",
    "D": "DNS 확인이 활성화된 VPC 피어링 연결"
   },
   "answer": [
    "B"
   ],
   "explanation": "VPC 내부의 EC2 인스턴스가 온프레미스 데이터 센터의 DNS 레코드를 조회해야 하는 경우(VPC $\\rightarrow$ 온프레미스 방향), Route 53 Resolver '아웃바운드 엔드포인트'를 생성하고 해당 온프레미스 도메인 및 DNS 서버 IP 주소로 쿼리를 보낼 수 있도록 '전달 규칙(Forwarding rules)'을 구성해야 한다. 인바운드 엔드포인트(C)는 온프레미스에서 VPC 내부 DNS 레코드를 조회할 때 사용된다."
  },
  {
   "num": 279,
   "question": "클라이언트 측 로드 밸런싱을 허용하기 위해 무작위로 선택된 최대 8 개의 정상 레코드로 DNS 쿼리에 응답하는 데 사용되는 Amazon Route 53 라우팅 정책은 무엇입니까?",
   "options": {
    "A": "단순 라우팅(Simple routing)",
    "B": "가중치 기반 라우팅(Weighted routing)",
    "C": "지연 시간 기반 라우팅(Latency-based routing)",
    "D": "다중값 응답 라우팅(Multivalue answer routing)"
   },
   "answer": [
    "D"
   ],
   "explanation": "Amazon Route 53 의 다중값 응답(Multivalue Answer) 라우팅 정책은 헬스 체크를 통해 정상 상태로 확인된 레코드 중 무작위로 최대 8 개를 선별하여 DNS 응답으로 반환한다. 이를 통해 클라이언트 측 로드 밸런싱과 DNS 수준의 가용성을 제공한다."
  },
  {
   "num": 280,
   "question": "CloudOps 엔지니어가 Application Load Balancer(ALB)에 호스팅된 동적 웹사이트를 가속화하기 위해 Amazon CloudFront 디스트리뷰션을 구성하고 있습니다. CloudFront 가 요청을 ALB 로 전달하도록 하려면 오리진(Origin)으로 무엇을 구성해야 합니까?",
   "options": {
    "A": "ALB 뒤에 있는 EC2 인스턴스들의 IP 주소",
    "B": "ALB 의 DNS 이름",
    "C": "ALB 의 ARN",
    "D": "EC2 인스턴스 중 하나의 DNS 이름"
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon CloudFront 디스트리뷰션에서 Application Load Balancer(ALB)를 오리진(Origin)으로 설정할 때는 ALB 의 퍼블릭 DNS 이름(예: `my-alb-123456789.us- east-1.elb.amazonaws.com`)을 오리진 도메인으로 등록해야 한다. IP 주소나 ARN 은 CloudFront 의 오리진 도메인 값으로 직접 사용할 수 없다."
  },
  {
   "num": 281,
   "question": "게이밍 회사가 단일 AWS 리전의 Network Load Balancer(NLB) 뒤에 있는 EC2 인스턴스에서 실시간 다중 사용자 게임을 호스팅하고 있습니다. 글로벌 사용자 기반의 지연 시간을 줄이기 위해 회사는 UDP 트래픽의 네트워크 지연 시간을 최소화해야 합니다. 이 목적에 가장 적합한 AWS 서비스는 무엇입니까?",
   "options": {
    "A": "Amazon CloudFront",
    "B": "VPN 연결 (A VPN connection)",
    "C": "AWS Global Accelerator",
    "D": "Amazon Route 53 지연 시간 기반 라우팅"
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Global Accelerator 는 글로벌 사용자의 트래픽을 가장 가까운 AWS 엣지 로케이션으로 흡수한 후, 혼잡을 우회하는 AWS 전용 글로벌 백본 네트워크를 이용하여 트래픽을 대상 리전(NLB 등)으로 라우팅한다. 특히 TCP 뿐만 아니라 UDP 트래픽의 전송 성능 최적화를 기본 지원하므로 실시간 게임 UDP 트래픽 지연 시간 단축에 가장 적합하다. Amazon CloudFront(A)는 HTTP/HTTPS 및 정적/동적 웹 콘텐츠 전용으로 UDP 레이어 기반 게임 데이터 전달에 적절하지 않다."
  },
  {
   "num": 282,
   "question": "DNS 에서 CNAME 레코드의 주요 기능은 무엇입니까?",
   "options": {
    "A": "도메인 이름을 IPv4 주소로 매핑합니다.",
    "B": "별칭 도메인 이름을 실제 또는 정식(canonical) 도메인 이름으로 매핑합니다.",
    "C": "도메인을 담당하는 메일 서버를 지정합니다.",
    "D": "도메인 이름을 IPv6 주소로 매핑합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "CNAME(Canonical Name) 레코드는 하나의 도메인 이름(별칭)을 다른 정식 도메인 이름(Canonical Domain Name)으로 매핑(지칭)하는 역할을 수행한다. 도메인 이름을 IPv4 주소로 직접 매핑하는 것은 A 레코드(A), IPv6 주소로 매핑하는 것은 AAAA 레코드(D), 메일 서버 지정은 MX 레코드(C)의 역할이다."
  },
  {
   "num": 283,
   "question": "회사가 us-east-1, eu-west-1, ap-southeast-1 의 3 개 AWS 리전에서 글로벌 애플리케이션을 호스팅합니다. 회사는 네트워크 지연 시간이 가장 낮은 AWS 리전으로 사용자를 안내하여 사용자에게 최상의 성능을 제공하고자 합니다. 어떤 Route 53 라우팅 정책을 구현해야 합니까?",
   "options": {
    "A": "지리적 위치 라우팅(Geolocation routing)",
    "B": "지리적 근접성 라우팅(Geoproximity routing)",
    "C": "장애 조치 라우팅(Failover routing)",
    "D": "지연 시간 기반 라우팅(Latency-based routing)"
   },
   "answer": [
    "D"
   ],
   "explanation": "Route 53 의 지연 시간 기반(Latency-based) 라우팅 정책은 사용자의 지리적 위치에서 대상 AWS 리전까지의 네트워크 지연 시간(Round-Trip Time)을 주기적으로 측정하여, 사용자의 요청을 가장 지연 시간이 적은(가장 빠르게 응답할 수 있는) AWS 리전으로 자동 라우팅해 준다. 지리적 위치 라우팅(A)은 실제 네트워크 지연 시간과 상관없이 사용자의 물리적 접속 국가/대륙 위치를 기준으로만 라우팅한다."
  },
  {
   "num": 284,
   "question": "회사는 기밀 문서를 프라이빗 Amazon S3 버킷에 저장합니다. 회사는 Amazon CloudFront 디스트리뷰션을 통해 권한이 있는 사용자에게 이 문서를 제공하기를 원하지만, 사용자가 S3 버킷 URL 을 사용하여 파일에 직접 액세스하는 것은 차단해야 합니다. 이를 달성하기 위해 어떤 CloudFront 기능을 사용해야 합니까?",
   "options": {
    "A": "필드 수준 암호화(Field-Level Encryption)",
    "B": "서명된 URL(Signed URLs)",
    "C": "Origin Access Identity (OAI)",
    "D": "Lambda@Edge"
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudFront Origin Access Identity(OAI, 또는 최신 버전인 Origin Access Control, OAC)를 사용하면 CloudFront 디스트리뷰션이 S3 버킷에 비공개로 접근할 수 있도록 보안 주체를 생성할 수 있다. S3 버킷 정책을 OAI/OAC 요청만 허용하도록 제한하면, 클라이언트가 S3 Direct URL 로 직접 접근하는 것을 차단하고 오직 CloudFront 를 거친 트래픽만 허용하게 된다. (참고: 특정 사용자별 접근 권한 제한은 Signed URL/Cookie 를 사용하지만, S3 직접 접근 자체를 차단하고 오리진 보안을 강화하는 핵심 기능은 OAI/OAC 이다.)"
  },
  {
   "num": 285,
   "question": "Amazon CloudFront 캐시 동작(cache behavior) 설정에서 TTL(Time to Live) 값의 기능은 무엇입니까?",
   "options": {
    "A": "웹 애플리케이션에 대한 사용자 세션의 유효 기간을 지정합니다.",
    "B": "객체가 오리진 서버에 존재할 수 있는 최대 시간을 정의합니다.",
    "C": "업데이트된 버전을 위해 오리진을 확인하기 전, CloudFront 가 엣지 로케이션에서 객체를 캐싱하는 기간을 지정합니다.",
    "D": "서명된 URL 또는 서명된 쿠키가 유효한 기간을 설정합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudFront 캐시 동작의 TTL(Time to Live) 값은 엣지 로케이션의 캐시에 저장된 객체의 유효 기간을 정의한다. TTL 기간 동안에는 오리진 서버 요청 없이 캐시된 복사본을 즉시 응답하며, TTL 이 만료되면 CloudFront 는 오리진 서버에 객체가 업데이트되었는지 재검증(Revalidate)하는 요청을 전송하게 된다."
  },
  {
   "num": 286,
   "question": "운영 팀이 VPC 내에 내부 애플리케이션을 설정하고 있습니다. 애플리케이션의 호스트 이름인 inventory.corp.local 은 해당 특정 VPC 및 피어링된 VPC 내의 EC2 인스턴스에서만 확인(resolve)될 수 있어야 합니다. 퍼블릭 인터넷에서는 확인되지 않아야 합니다. 어떤 유형의 Route 53 호스팅 영역(hosted zone)을 생성해야 합니까?",
   "options": {
    "A": "퍼블릭 호스팅 영역(public hosted zone)",
    "B": "프라이빗 호스팅 영역(private hosted zone)",
    "C": "재사용 가능한 위임 세트(reusable delegation set)",
    "D": "트래픽 정책(traffic policy)"
   },
   "answer": [
    "B"
   ],
   "explanation": "특정 VPC 및 피어링된 VPC 내부의 리소스에서만 도메인 이름을 확인하고, 퍼블릭 인터넷으로의 노출을 차단하려면 Amazon Route 53 프라이빗 호스팅 영역(Private Hosted Zone)을 생성해야 한다. 퍼블릭 호스팅 영역(A)은 인터넷에 공개되는 도메인을 위한 구성이며, 재사용 가능한 위임 세트(C)나 트래픽 정책(D)은 VPC 전용 프라이빗 도메인 격리를 직접 제공하는 호스팅 영역 유형이 아니다."
  },
  {
   "num": 287,
   "question": "애플리케이션에 클라이언트의 고정 진입점 역할을 하는 고정 IP 주소 세트가 필요합니다. 이 애플리케이션은 고가용성을 위해 여러 AWS 리전에 배포되어 있으며 TCP 기반 프로토콜을 사용합니다. 고정 애니캐스트 IP 주소를 제공하고 AWS 글로벌 네트워크를 통해 최적의 리전 엔드포인트로 트래픽을 자동으로 라우팅하는 AWS 서비스는 무엇입니까?",
   "options": {
    "A": "Amazon CloudFront",
    "B": "Application Load Balancer 및 Elastic IP 주소 조합",
    "C": "AWS Global Accelerator",
    "D": "Amazon Route 53"
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Global Accelerator 는 2 개의 고정 애니캐스트(Anycast) IP 주소를 진입점으로 제공하고, AWS 전용 글로벌 백본 네트워크를 통해 트래픽을 가장 가깝고 최적의 리전 엔드포인트로 빠르게 라우팅한다. CloudFront(A)는 웹 콘텐츠 캐싱 및 HTTP/HTTPS 최적화 중심의 CDN 서비스이며, ALB 의 Elastic IP 조합(B)은 단일 리전 내 고정 진입점만 제공하므로 다중 리전 자동 라우팅 요구 사항을 충족하지 못한다."
  },
  {
   "num": 288,
   "question": "Route 53 Resolver 인바운드 엔드포인트(inbound endpoint)의 주요 기능은 무엇입니까?",
   "options": {
    "A": "Route 53 이 VPC 에서 온프레미스 네트워크로 DNS 쿼리를 전달하도록 허용하는 것.",
    "B": "온프레미스 네트워크의 DNS 쿼리가 VPC 내의 Route 53 Resolver 를 사용하여 처리될 수 있도록 허용하는 것.",
    "C": "VPC 내 리소스에 대해 퍼블릭 DNS 확인을 활성화하는 것.",
    "D": "VPC 내 리소스가 수행한 모든 DNS 쿼리를 로깅하는 것."
   },
   "answer": [
    "B"
   ],
   "explanation": "Route 53 Resolver 인바운드 엔드포인트(Inbound Endpoint)는 온프레미스 네트워크에서 들어오는 DNS 질의(Inbound Query)를 VPC 내의 Route 53 Resolver 가 수신하고 프라이빗 호스팅 영역 등을 통해 이름을 확인하여 응답할 수 있게 해준다. 반대로 VPC 에서 온프레미스 DNS 서버로 질의를 보낼 때는 아웃바운드 엔드포인트(A)를 구성해야 한다."
  },
  {
   "num": 289,
   "question": "애플리케이션이 CloudFront 디스트리뷰션을 통해 제공됩니다. 기본 캐시 동작(default cache behavior)은 모든 객체를 24 시간 동안 캐싱하도록 설정되어 있습니다. 그러나 엔지니어는 /api/* 경로에 대한 모든 요청이 절대 캐싱되지 않고 항상 오리진으로 직접 전달되도록 해야 합니다. 이를 어떻게 구성해야 합니까?",
   "options": {
    "A": "/api/* 경로를 위한 새 디스트리뷰션을 생성합니다.",
    "B": "모든 요청 후 /api/* 경로를 무효화(invalidate)하도록 Lambda@Edge 함수를 사용합니다.",
    "C": "경로 패턴이 /api/*인 새 캐시 동작(cache behavior)을 생성하고 모든 TTL 값을 0 으로 설정합니다.",
    "D": "모든 응답에 대해 no-cache 헤더를 전송하도록 오리진을 구성합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "CloudFront 에서 특정 URL 경로(`/api/*`)에 대해 캐싱을 비활성화하고 모든 요청을 오리진으로 직접 전달하려면, 해당 경로 패턴을 갖는 새로운 캐시 동작(Cache Behavior)을 추가하고 해당 동작의 최소/기본/최대 TTL 값을 모두 0 으로 구성해야 한다. 새로운 캐시 동작은 기본 캐시 동작보다 높은 우선순위를 가지게 되어 `/api/*` 트래픽에 우선 적용된다."
  },
  {
   "num": 290,
   "question": "회사가 장애 조치(failover) 라우팅 정책과 함께 Route 53 을 사용하고 있습니다. 기본 레코드는 Application Load Balancer 를 가리킵니다. 장애 조치가 올바르게 작동하려면 Route 53 이 기본 엔드포인트의 상태를 확인할 수 있어야 합니다. 이를 활성화하려면 무엇을 구성해야 합니까?",
   "options": {
    "A": "ALB 의 HealthyHostCount 지표에 대한 CloudWatch 경보",
    "B": "ALB 엔드포인트를 모니터링하는 Route 53 헬스 체크",
    "C": "비정상 호스트로의 트래픽을 차단하는 AWS WAF 규칙",
    "D": "ALB 로 향하는 트래픽을 모니터링하는 VPC Flow Log"
   },
   "answer": [
    "B"
   ],
   "explanation": "Route 53 장애 조치(Failover) 라우팅 정책이 기본(Primary) 엔드포인트의 장애를 감지하여 보조(Secondary) 엔드포인트로 자동 전환하려면, 기본 엔드포인트(ALB)의 헬스 상태를 주기적으로 감시하는 Route 53 헬스 체크(Health Check)를 생성하여 해당 기본 DNS 레코드에 연결해야 한다. CloudWatch 경보(A)나 WAF 규칙(C) 등은 Route 53 의 자동 장애 조치 트리거 레버로 직접 사용되지 않는다."
  },
  {
   "num": 291,
   "question": "Route 53 Resolver 쿼리 로그는 어떤 대상으로 전송할 수 있습니까?",
   "options": {
    "A": "Amazon S3 버킷만 가능",
    "B": "Amazon Kinesis Data Firehose 스트림만 가능",
    "C": "Amazon CloudWatch Logs 로그 그룹만 가능",
    "D": "S3 버킷, CloudWatch Logs 로그 그룹, 또는 Kinesis Data Firehose 스트림"
   },
   "answer": [
    "D"
   ],
   "explanation": "Route 53 Resolver 쿼리 로그(Query Logs)는 VPC 내에서 발생하는 모든 DNS 질의 내역을 수집하여 기록한다. 내보내기 대상으로 Amazon S3 버킷, Amazon CloudWatch Logs 로그 그룹, Amazon Kinesis Data Firehose 스트림을 모두 지원한다."
  },
  {
   "num": 292,
   "question": "Amazon CloudFront 와 AWS Global Accelerator 의 주요 차이점은 무엇입니까?",
   "options": {
    "A": "Global Accelerator 는 UDP 트래픽용으로 설계되었고, CloudFront 는 TCP 트래픽용입니다.",
    "B": "CloudFront 는 AWS 엣지 로케이션에 콘텐츠를 캐싱하는 반면, Global Accelerator 는 애플리케이션으로 향하는 네트워크 경로를 최적화합니다.",
    "C": "CloudFront 는 고정 IP 주소를 제공하는 반면, Global Accelerator 는 동적 DNS 이름을 사용합니다.",
    "D": "Global Accelerator 는 단일 AWS 리전의 오리진에서만 사용할 수 있습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Amazon CloudFront 는 엣지 로케이션에 정적 및 동적 콘텐츠를 캐싱하여 응답 속도를 향상시키는 CDN 서비스이다. 반면 AWS Global Accelerator 는 콘텐츠 캐싱을 수행하지 않으며, AWS 전용 글로벌 네트워크 백본 및 고정 애니캐스트 IP 를 사용하여 애플리케이션 엔드포인트까지의 네트워크 패킷 라우팅 경로를 최적화하고 지연 시간을 단축시킨다."
  },
  {
   "num": 293,
   "question": "CloudOps 엔지니어가 웹 애플리케이션을 제공하는 새 Amazon CloudFront 디스트리뷰션을 보안 처리하고 있습니다. 엔지니어는 특정 국가의 사용자가 콘텐츠에 액세스하지 못하도록 차단해야 하며, SQL 인젝션과 같은 일반적인 웹 익스플로잇으로부터 애플리케이션을 보호해야 합니다. 이러한 요구 사항을 충족하기 위해 CloudFront 디스트리뷰션과 함께 사용해야 하는 두 가지 AWS 서비스 또는 기능은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "AWS Shield Advanced",
    "B": "CloudFront 지리적 제한(geolocation restriction)",
    "C": "Amazon GuardDuty",
    "D": "AWS WAF",
    "E": "네트워크 ACL(Network ACLs)"
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "특정 국가의 사용자 접근을 차단하기 위해 CloudFront 의 지리적 제한(Geolocation Restriction / Geo-blocking) 기능을 사용한다. 또한 SQL 인젝션, XSS 와 같은 웹 계층(Layer 7) 공격으로부터 애플리케이션을 보호하기 위해 AWS WAF(Web Application Firewall)를 CloudFront 디스트리뷰션에 연결해야 한다. AWS Shield Advanced(A)는 DDoS 방어 전용 서비스이며, Network ACL(E)은 VPC 서브넷 레벨의 L3/L4 방화벽이다."
  },
  {
   "num": 294,
   "question": "관리자가 서로 다른 리전에 있는 두 Application Load Balancer(ALB) 간에 Route 53 주- 예비(active-passive) 장애 조치 구성을 설정하고 있습니다. Route 53 장애 조치 라우팅 정책이 올바르게 작동하기 위해 필요한 두 가지 구성 요소는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "기본 레코드 세트와 연결된 헬스 체크",
    "B": "각 ALB 에 대한 가중치 기반 레코드 세트",
    "C": "동일한 이름과 유형을 가진 기본 레코드 및 보조 레코드",
    "D": "다중값 응답 레코드 세트",
    "E": "도메인에 대한 프라이빗 호스팅 영역"
   },
   "answer": [
    "A",
    "C"
   ],
   "explanation": "Route 53 의 주-예비(Active-Passive) 장애 조치(Failover) 라우팅을 구성하기 위해서는 동일한 도메인 이름과 레코드 유형을 갖는 기본(Primary) 레코드 및 보조(Secondary) 레코드가 필수적이다(C). 또한 기본 레코드에 헬스 체크(Health Check)를 연결해야만 기본 엔드포인트 장애 발생 시 Route 53 이 이를 감지하여 트래픽을 보조 레코드로 자동 전환할 수 있다(A)."
  },
  {
   "num": 295,
   "question": "회사가 Site-to-Site VPN 을 사용하여 하이브리드 DNS 아키텍처를 구축하고 있습니다. 운영 팀은 양방향 DNS 확인을 활성화해야 합니다. VPC 의 EC2 인스턴스는 온프레미스 네트워크의 호스트 이름을 확인할 수 있어야 하고, 온프레미스 네트워크의 서버는 VPC 내 EC2 인스턴스의 프라이빗 호스트 이름을 확인할 수 있어야 합니다. 이를 달성하기 위해 VPC 내에 구성해야 하는 두 가지 Route 53 Resolver 구성 요소는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "퍼블릭 호스팅 영역",
    "B": "아웃바운드 엔드포인트",
    "C": "인바운드 엔드포인트",
    "D": "리졸버 쿼리 로그",
    "E": "장애 조치 별칭 레코드"
   },
   "answer": [
    "B",
    "C"
   ],
   "explanation": "하이브리드 네트워크에서 양방향 DNS 확인(Bidirectional DNS resolution)을 구현하려면 1) 온프레미스에서 VPC 내부 프라이빗 DNS 호스트 이름을 질의할 수 있도록 '인바운드 엔드포인트(Inbound Endpoint)'가 필요하고(C), 2) VPC 내 EC2 인스턴스에서 온프레미스 네트워크의 DNS 레코드를 질의할 수 있도록 '아웃바운드 엔드포인트(Outbound Endpoint)'가 필요하다(B)."
  },
  {
   "num": 296,
   "question": "CloudOps 엔지니어가 EC2 인스턴스를 커스텀 오리진으로 사용하는 CloudFront 디스트리뷰션을 사용하고 있습니다. 엔지니어는 뷰어(사용자)의 모든 트래픽이 암호화되도록 보장하고, EC2 인스턴스가 CloudFront IP 주소 범위의 HTTPS 트래픽만 수용하도록 해야 합니다. 이러한 요구 사항을 충족하기 위해 취해야 하는 두 가지 조치는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "CloudFront 뷰어 프로토콜 정책을 'HTTP Only'로 설정합니다.",
    "B": "CloudFront 의 공개된 IP 범위로부터의 포트 443 인바운드 트래픽만 허용하도록 EC2 인스턴스의 보안 그룹을 구성합니다.",
    "C": "CloudFront 뷰어 프로토콜 정책을 'Redirect HTTP to HTTPS' 또는 'HTTPS Only'로 설정합니다.",
    "D": "CloudFront 에서의 액세스를 허용하는 IAM 역할을 EC2 인스턴스에 연결합니다.",
    "E": "포트 443 의 모든 인바운드 트래픽을 허용하도록 EC2 인스턴스의 보안 그룹을 구성합니다."
   },
   "answer": [
    "B",
    "C"
   ],
   "explanation": "뷰어(클라이언트) 트래픽을 암호화하려면 CloudFront 뷰어 프로토콜 정책(Viewer Protocol Policy)을 'Redirect HTTP to HTTPS' 또는 'HTTPS Only'로 구성해야 한다. 또한 EC2 인스턴스가 CloudFront 를 통한 HTTPS 트래픽만 수용하도록 제한하려면, EC2 인스턴스 보안 그룹의 443 번 포트 인바운드 규칙 대상을 CloudFront 의 관리형 접두사 목록(AWS Managed Prefix List) 또는 게시된 CloudFront IP 대역으로 제한해야 한다."
  },
  {
   "num": 297,
   "question": "CloudOps 엔지니어가 도메인 이름을 AWS 리소스로 가리키도록 Route 53 별칭(Alias) 레코드를 생성해야 합니다. 다음 중 별칭 레코드의 유효한 타깃이 되는 두 가지는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "EC2 인스턴스의 퍼블릭 IP 주소",
    "B": "Amazon CloudFront 디스트리뷰션",
    "C": "정적 웹사이트 엔드포인트로 구성된 Amazon S3 버킷",
    "D": "온프레미스 서버의 IP 주소",
    "E": "특정 가용 영역"
   },
   "answer": [
    "B",
    "C"
   ],
   "explanation": "Amazon Route 53 별칭(Alias) 레코드는 CloudFront 디스트리뷰션, S3 정적 웹사이트 호스팅 엔드포인트, Application Load Balancer, API Gateway 등 특정 AWS 리소스의 DNS 이름만을 타깃으로 지정할 수 있다. IP 주소(A, D)는 별칭 레코드의 직접적인 타깃이 될 수 없으며 표준 A 레코드 값으로 지정해야 한다."
  },
  {
   "num": 298,
   "question": "CloudOps 엔지니어가 프라이빗 서브넷에 EC2 인스턴스를 시작했습니다. 인스턴스는 인터넷에서 소프트웨어 업데이트를 다운로드해야 하지만, 인터넷에서 직접 접근할 수는 없어야 합니다. VPC 에는 인터넷 게이트웨이가 연결되어 있습니다. 이 요구 사항을 충족하기 위해 추가로 필요한 구성 요소는 무엇입니까?",
   "options": {
    "A": "아웃바운드 전용 인터넷 게이트웨이(Egress-Only Internet Gateway)",
    "B": "퍼블릭 서브넷의 NAT 게이트웨이",
    "C": "EC2 인스턴스의 Elastic IP 주소",
    "D": "포트 80 의 인바운드 트래픽을 허용하는 보안 그룹 규칙"
   },
   "answer": [
    "B"
   ],
   "explanation": "프라이빗 서브넷의 IPv4 EC2 인스턴스가 아웃바운드 인터넷 통신(업데이트 다운로드 등)을 수행하면서 외부로부터의 인바운드 접속을 차단하려면, 퍼블릭 서브넷에 NAT 게이트웨이(NAT Gateway)를 배포하고 프라이빗 서브넷의 라우팅 테이블이 인터넷 트래픽(`0.0.0.0/0`)을 NAT 게이트웨이로 전달하도록 설정해야 한다. Egress-Only 인터넷 게이트웨이(A)는 IPv6 전용 서비스이다."
  },
  {
   "num": 299,
   "question": "새 VPC 가 생성될 때 기본 네트워크 액세스 제어 목록(NACL)의 특징은 무엇입니까?",
   "options": {
    "A": "모든 인바운드 및 아웃바운드 트래픽을 거부합니다.",
    "B": "모든 인바운드 및 아웃바운드 트래픽을 허용합니다.",
    "C": "모든 인바운드 트래픽은 허용하지만 모든 아웃바운드 트래픽은 거부합니다.",
    "D": "모든 인바운드 트래픽은 거부하지만 모든 아웃바운드 트래픽은 허용합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "VPC 생성 시 기본으로 포함되는 기본 NACL(Default Network ACL)은 모든 인바운드 및 아웃바운드 IPv4/IPv6 트래픽을 기본적으로 허용(Allow)하도록 설정되어 있다. 반면 사용자가 새로 직접 생성하는 사용자 지정 NACL(Custom NACL)은 명시적 규칙을 추가하기 전까지 모든 인바운드/아웃바운드 트래픽을 거부(Deny)한다."
  },
  {
   "num": 300,
   "question": "회사가 서로 통신해야 하는 동일한 AWS 리전 내의 3 개 VPC 를 보유하고 있습니다. 회사는 네트워크 관리를 단순화하고 복잡한 풀 메시(full-mesh) 피어링 연결을 피하는 솔루션을 원합니다. 이러한 요구 사항을 충족하기 위해 어떤 AWS 서비스를 사용해야 합니까?",
   "options": {
    "A": "AWS Direct Connect",
    "B": "VPC 피어링(VPC Peering)",
    "C": "AWS Transit Gateway",
    "D": "VPC 엔드포인트(VPC Endpoints)"
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Transit Gateway 는 여러 VPC 및 온프레미스 네트워크를 중앙에서 연결하는 중앙 로드 허브 역할을 수행한다. VPC Peering(B)을 사용하면 VPC 수 증가 시 복잡한 1:1 메시 네트워크 구조가 생성되어 관리가 매우 복잡해지지만, Transit Gateway 를 이용하면 복잡한 풀 메시 연결을 피하고 중앙 집중식으로 단순화하여 연결을 관리할 수 있다."
  },
  {
   "num": 301,
   "question": "CloudOps 팀은 Application Load Balancer 뒤의 EC2 인스턴스에서 실행되는 웹 애플리케이션에 대한 의심스러운 SQL 인젝션 시도를 발견했습니다. 애플리케이션 계층에서 이러한 유형의 트래픽을 차단하려면 어떤 AWS 서비스를 구현해야 합니까?",
   "options": {
    "A": "AWS Shield Advanced",
    "B": "AWS Network Firewall",
    "C": "보안 그룹(Security Groups)",
    "D": "AWS WAF"
   },
   "answer": [
    "D"
   ],
   "explanation": "SQL 인젝션, XSS 와 같은 웹 애플리케이션 계층(Layer 7) 공격을 차단하는 전용 서비스는 AWS WAF(Web Application Firewall)이다. AWS Shield Advanced(A)는 L3/L4/L7 DDoS 공격 방어 전용 서비스이며, Network Firewall(B)과 보안 그룹(C)은 IP/포트 기반(L3/L4) 트래픽 제어 도구이다."
  },
  {
   "num": 302,
   "question": "회사는 NAT 게이트웨이와 관련된 높은 데이터 전송 비용을 겪고 있습니다. CloudOps 엔지니어는 이러한 비용을 줄이는 임무를 맡았습니다. 이 목표를 달성하는 데 도움이 되는 두 가지 조치는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "NAT 게이트웨이와 이를 사용하는 인스턴스를 동일한 가용 영역(AZ)에 배치합니다.",
    "B": "Amazon S3 및 DynamoDB 로 향하는 트래픽에 게이트웨이 VPC 엔드포인트를 사용합니다.",
    "C": "프라이빗 서브넷에 있는 EC2 인스턴스의 인스턴스 크기를 늘립니다.",
    "D": "프라이빗 인스턴스가 없는 가용 영역을 포함하여 모든 가용 영역에 NAT 게이트웨이를 구성합니다.",
    "E": "NAT 게이트웨이를 NAT 인스턴스로 교체하고 가장 큰 인스턴스 유형을 사용합니다."
   },
   "answer": [
    "A",
    "B"
   ],
   "explanation": "교차 가용 영역(Cross-AZ) 데이터 전송은 추가 비용이 발생하므로 NAT 게이트웨이와 EC2 인스턴스를 동일한 AZ 에 배치해야 교차 AZ 전송 비용을 방지할 수 있다(A). 또한 Amazon S3 및 DynamoDB 트래픽을 무료로 제공되는 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoints)로 우회시키면 NAT 게이트웨이의 데이터 처리 요금(GB 당 비용)을 대폭 절감할 수 있다(B)."
  },
  {
   "num": 303,
   "question": "AWS 보안 그룹(Security Group)의 상태 저장(stateful) 특성을 정확하게 설명하는 문장은 무엇입니까?",
   "options": {
    "A": "연결이 작동하려면 인바운드 규칙과 아웃바운드 규칙을 동일하게 구성해야 합니다.",
    "B": "인바운드 트래픽을 허용하면 아웃바운드 규칙과 상관없이 해당 아웃바운드 응답 트래픽이 자동으로 허용됩니다.",
    "C": "서브넷 수준에서 작동하며 해당 서브넷 내의 모든 인스턴스에 적용됩니다.",
    "D": "규칙은 가장 낮은 숫자부터 가장 높은 숫자까지 순서대로 평가되며 첫 번째 일치 항목에서 중지됩니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "보안 그룹은 상태 저장(Stateful) 특성을 가진다. 인바운드 규칙에 의해 허용된 요청에 대한 응답 트래픽은 아웃바운드 규칙 설정과 상관없이 자동으로 허용된다. 서브넷 수준에서 작동하고 규칙 번호 순서대로 평가되는 것(C, D)은 상태 비저장(Stateless)인 네트워크 ACL(NACL)의 특징이다."
  },
  {
   "num": 304,
   "question": "퍼블릭 서브넷의 EC2 인스턴스 보안 그룹이 0.0.0.0/0 으로부터의 포트 22 인바운드 트래픽을 허용하고 인스턴스에 퍼블릭 IP 주소가 할당되어 있음에도 불구하고, 인터넷에서 SSH 를 통해 접속할 수 없습니다. 서브넷의 NACL 은 기본 구성입니다. 문제의 가장 유력한 원인은 무엇입니까?",
   "options": {
    "A": "VPC 에 인터넷 게이트웨이가 연결되어 있지 않습니다.",
    "B": "서브넷의 라우팅 테이블에 인터넷 게이트웨이로 향하는 라우팅이 없습니다.",
    "C": "NACL 이 임시 포트(ephemeral ports)에 대한 아웃바운드 트래픽을 명시적으로 차단하고 있습니다.",
    "D": "EC2 인스턴스가 Elastic IP 주소 없이 시작되었습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "서브넷이 퍼블릭 서브넷으로 동작하려면 인터넷 게이트웨이(IGW)가 VPC 에 연결되어 있을 뿐만 아니라, 해당 서브넷의 라우팅 테이블에 인터넷 트래픽(`0.0.0.0/0`)을 IGW 로 전달하는 라우트 항목이 존재해야 한다. 서브넷 라우팅 테이블에 IGW 로의 경로가 누락되면 인스턴스에 퍼블릭 IP 가 할당되어 있고 보안 그룹이 개방되어 있더라도 외부 인터넷 접속이 불가능하다."
  },
  {
   "num": 305,
   "question": "AWS Transit Gateway 가 해결하도록 설계된 VPC 피어링(VPC Peering)의 주요 제약 사항은 무엇입니까?",
   "options": {
    "A": "리전 간 연결을 지원하지 않습니다.",
    "B": "전이적 라우팅(transitive routing)을 지원하지 않습니다.",
    "C": "물리적 계층에서만 트래픽을 암호화합니다.",
    "D": "소유자가 다른 VPC 를 연결할 수 없습니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "VPC 피어링(VPC Peering)은 전이적 라우팅(Transitive Routing)을 지원하지 않는다. 즉, VPC A 와 B, B 와 C 가 피어링되어 있더라도 VPC A 에서 VPC C 로 직접 통신할 수 없으며, 모든 VPC 간 1:1 피어링을 개별적으로 구성해야 한다. AWS Transit Gateway 는 전이적 라우팅을 지원하는 중앙 허브 역할을 수행하여 N:N 연결의 복잡성을 해소한다."
  },
  {
   "num": 306,
   "question": "어플리케이션은 동일한 리전의 Amazon S3 버킷에 자주 액세스하는 프라이빗 서브넷의 EC2 인스턴스로 구성되어 있습니다. 비용을 최적화하기 위해 CloudOps 엔지니어는 이 트래픽이 퍼블릭 인터넷이나 NAT 게이트웨이를 경유하지 않도록 구성하고자 합니다. 엔지니어가 구성해야 하는 것은 무엇입니까?",
   "options": {
    "A": "S3 용 인터페이스 VPC 엔드포인트(Interface VPC Endpoint)",
    "B": "인터넷 게이트웨이 및 각 인스턴스용 퍼블릭 IP",
    "C": "S3 용 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)",
    "D": "NAT 인스턴스"
   },
   "answer": [
    "C"
   ],
   "explanation": "Amazon S3 및 DynamoDB 에 대해 제공되는 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)는 추가 비용 없이 사용할 수 있으며, 프라이빗 서브넷의 EC2 인스턴스가 NAT 게이트웨이나 퍼블릭 인터넷을 거치지 않고 AWS 내부 네트워크를 통해 S3 에 직접 액세스하도록 지원한다. 데이터 처리 요금이나 시간당 요금이 전혀 발생하지 않으므로 비용을 극대화하여 최적화할 수 있다. 인터페이스 VPC 엔드포인트(A) 역시 S3 연결을 지원하지만 시간당 요금 및 데이터 처리 요금이 발생하므로 게이트웨이 엔드포인트가 최선의 선택이다. 인터넷 게이트웨이(B) 및 NAT 인스턴스(D)는 인터넷을 경유하거나 추가 인스턴스 유지/데이터 전송 비용이 발생하므로 요구사항에 적합하지 않다."
  },
  {
   "num": 307,
   "question": "CloudOps 엔지니어가 VPC 에 새로운 퍼블릭 서브넷을 생성하고 있습니다. 이 서브넷에 생성된 EC2 인스턴스가 인터넷과 통신할 수 있도록 하려면 다음 중 어떤 두 가지 구성이 필요합니까? (2 개 선택)",
   "options": {
    "A": "서브넷에 NAT 게이트웨이를 배포해야 합니다.",
    "B": "서브넷의 라우팅 테이블에 0.0.0.0/0 을 인터넷 게이트웨이로 향하게 하는 라우트가 있어야 합니다.",
    "C": "인스턴스에 퍼블릭 IP 또는 탄력적 IP(Elastic IP) 주소가 할당되어야 합니다.",
    "D": "서브넷의 네트워크 ACL 이 인터넷 게이트웨이의 IP 주소로 향하는 트래픽을 명시적으로 허용해야 합니다.",
    "E": "인터넷 게이트웨이에 보안 그룹을 연결해야 합니다."
   },
   "answer": [
    "B",
    "C"
   ],
   "explanation": "서브넷의 EC2 인스턴스가 퍼블릭 인터넷과 직접 양방향 통신을 수행하기 위해서는 라우팅 및 IP 주소 할당 조건이 충족되어야 한다. 먼저 서브넷과 연결된 라우팅 테이블에 외부 인터넷(0.0.0.0/0)으로 가는 트래픽을 인터넷 게이트웨이(IGW)로 전송하는 라우트 규칙이 존재해야 한다(B). 또한 각 EC2 인스턴스는 인터넷상에서 식별 가능한 퍼블릭 IP 주소 또는 탄력적 IP(Elastic IP)를 할당받아야 한다(C). NAT 게이트웨이(A)는 프라이빗 서브넷 인스턴스의 아웃바운드 인터넷 통신을 위한 것이다. 네트워크 ACL(D)은 특정 IP 가 아닌 서브넷 경계에서 CIDR 블록 단위 트래픽을 제어하며 인터넷 게이트웨이 자체는 지정 IP 주소를 갖지 않는다. 보안 그룹(E)은 인터넷 게이트웨이가 아닌 EC2 인스턴스 네트워크 인터페이스(ENI) 단위에 설정된다."
  },
  {
   "num": 308,
   "question": "모든 AWS 고객에게 추가 비용 없이 가장 흔하게 발생하는 네트워크 및 전송 계층 DDoS 공격에 대해 상시 감지 및 자동 인라인 완화 기능을 제공하는 AWS 서비스는 무엇입니까?",
   "options": {
    "A": "AWS WAF",
    "B": "AWS Shield Standard",
    "C": "AWS Shield Advanced",
    "D": "AWS Network Firewall"
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Shield Standard 는 모든 AWS 고객에게 추가 비용 없이 기본 제공되는 상시 보호형 DDoS 완화 서비스이다. OSI 3 계층(네트워크) 및 4 계층(전송)에서 발생하는 일반적인 DDoS 공격(SYN 플러드, UDP 플러드 등)을 자동으로 감지하고 즉시 차단한다. AWS WAF(A)는 7 계층(애플리케이션) 웹 공격(SQL Injection, XSS 등)을 방어한다. AWS Shield Advanced(C)는 고도화된 공격 대응 및 24/7 Response Team 지원을 제공하는 유료 구독형 서비스이다. AWS Network Firewall(D)은 VPC 경계에서 심층 패킷 검사(DPI)를 수행하는 유료 방화벽 서비스이다."
  },
  {
   "num": 309,
   "question": "한 회사가 온프레미스 데이터 센터와 AWS VPC 간에 전용, 프라이빗 및 고대역폭 연결을 설정해야 합니다. 이 연결은 일관되고 지연 시간이 짧은 네트워크 성능을 제공해야 합니다. 가장 적절한 AWS 서비스는 무엇입니까?",
   "options": {
    "A": "AWS Site-to-Site VPN",
    "B": "AWS Direct Connect",
    "C": "VPC Peering",
    "D": "AWS Client VPN"
   },
   "answer": [
    "B"
   ],
   "explanation": "AWS Direct Connect 는 온프레미스 데이터 센터와 AWS 간에 인터넷을 경유하지 않는 전용(Dedicated) 물리적 네트워크 연결을 생성한다. 퍼블릭 인터넷의 혼잡에 영향을 받지 않으므로 일관되게 낮은 지연 시간과 고대역폭 네트워크 성능을 보장한다. AWS Site-to- Site VPN(A)은 공용 인터넷 망 위에 암호화 터널을 생성하므로 인터넷 상태에 따라 지연 시간과 대역폭이 변동될 수 있다. VPC Peering(C)은 AWS 내 서로 다른 VPC 간을 연결하는 기능이다. AWS Client VPN(D)은 개별 원격 사용자가 AWS 네트워크로 접속하기 위해 사용하는 OpenVPN 기반 SSL VPN 서비스이다."
  },
  {
   "num": 310,
   "question": "프라이빗 서브넷에 IPv6 전용 EC2 인스턴스 그룹이 있습니다. 이 인스턴스들은 패치 작업을 위해 인터넷의 IPv6 엔드포인트로 아웃바운드 연결을 시작해야 하지만, 인터넷으로부터의 인바운드 접근은 허용되지 않아야 합니다. 이 연결을 가능하게 하려면 VPC 에 어떤 구성 요소를 추가해야 합니까?",
   "options": {
    "A": "인터넷 게이트웨이(Internet Gateway)",
    "B": "NAT 게이트웨이(NAT Gateway)",
    "C": "이그레스 전용 인터넷 게이트웨이(Egress-Only Internet Gateway)",
    "D": "캐리어 게이트웨이(Carrier Gateway)"
   },
   "answer": [
    "C"
   ],
   "explanation": "이그레스 전용 인터넷 게이트웨이(Egress-Only Internet Gateway)는 IPv6 전용 리소스가 인터넷으로 나가는 아웃바운드 통신을 시작할 수 있게 허용하면서, 인터넷에서 시작되는 외부의 인바운드 연결은 완전히 차단하는 게이트웨이 성분이다. IPv4 환경에서의 NAT 게이트웨이와 동일한 보안 역할을 IPv6 환경에서 담당한다. 인터넷 게이트웨이(A)는 양방향(인바운드 및 아웃바운드) 통신을 모두 허용하므로 보안 요구사항에 위배된다. NAT 게이트웨이(B)는 IPv4 주소 변환(NAT44) 전용 서비스이므로 IPv6 트래픽에는 적용되지 않는다. 캐리어 게이트웨이(D)는 5G 통신망(AWS Wavelength) 인프라 연결용 게이트웨이이다."
  },
  {
   "num": 311,
   "question": "보안 팀이 VPC 에 대한 심층 방어(defense-in-depth) 전략을 구현하고자 합니다. 인스턴스 수준과 서브넷 수준 모두에서 트래픽을 필터링해야 합니다. 이를 달성하기 위해 사용해야 하는 두 가지 AWS 기능은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "AWS WAF",
    "B": "보안 그룹(Security Groups)",
    "C": "라우팅 테이블(Route Tables)",
    "D": "네트워크 ACL(Network ACLs)",
    "E": "AWS Shield"
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "VPC 내에서 인스턴스 수준의 트래픽 필터링을 담당하는 것은 보안 그룹(Security Group)이며, 서브넷 수준의 트래픽 필터링을 담당하는 것은 네트워크 ACL(Network ACL)이다. 보안 그룹은 ENI(네트워크 인터페이스) 단위로 적용되는 상태 유지형(Stateful) 방화벽이고, 네트워크 ACL 은 서브넷 경계에서 적용되는 상태 비저장형(Stateless) 방화벽이다. 두 기능을 조합하면 다중 레이어 보안을 갖춘 심층 방어 아키텍처를 구축할 수 있다. AWS WAF(A)는 7 계층 웹 애플리케이션 트래픽 제어용 서비스이다. 라우팅 테이블(C)은 트래픽 패킷의 이동 경로를 지정하며 필터링 기능은 제공하지 않는다. AWS Shield(E)는 DDoS 공격 방어 서비스이다."
  },
  {
   "num": 312,
   "question": "Amazon VPC 내에서 라우팅 테이블(route table)의 주요 기능은 무엇입니까?",
   "options": {
    "A": "서브넷에 들어오고 나가는 트래픽을 필터링합니다.",
    "B": "연결된 EC2 인스턴스의 상태 유지형(stateful) 방화벽 역할을 합니다.",
    "C": "서브넷 또는 게이트웨이에서 발생하는 네트워크 트래픽이 이동할 방향을 결정합니다.",
    "D": "프라이빗 IP 주소를 퍼블릭 IP 주소로 변환합니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "라우팅 테이블은 라우트(Route)라는 규칙 집합을 보유하며, 서브넷 또는 게이트웨이에서 발송되는 네트워크 트래픽이 전송될 목적지(인터넷 게이트웨이, NAT 게이트웨이, VPC 피어링 등)를 결정한다. 트래픽 필터링 기능(A)은 네트워크 ACL 이나 보안 그룹이 수행한다. 상태 유지형 방화벽 역할(B)은 보안 그룹의 역할이다. IP 주소 변환(D)은 NAT 게이트웨이 또는 NAT 인스턴스가 담당한다."
  },
  {
   "num": 313,
   "question": "퍼블릭 서브넷에 있는 웹 서버에 연결할 수 없습니다. 보안 그룹은 인바운드 TCP 포트 80 을 허용합니다. 인바운드 네트워크 ACL 도 TCP 포트 80 을 허용합니다. 아웃바운드 네트워크 ACL 에는 모든 아웃바운드 트래픽을 거부하는 단일 사용자 지정 규칙(규칙 100: Deny All Outbound, 0.0.0.0/0)이 있습니다. 서버에 접속할 수 없는 이유는 무엇입니까?",
   "options": {
    "A": "보안 그룹은 상태 비저장형(stateless)이므로 응답을 위한 명시적인 아웃바운드 규칙이 필요합니다.",
    "B": "네트워크 ACL 은 상태 유지형(stateful)이므로 초기 요청을 차단하고 있습니다.",
    "C": "아웃바운드 네트워크 ACL 이 임시 포트(ephemeral ports)를 통한 서버의 응답 트래픽을 차단하고 있습니다.",
    "D": "인스턴스의 라우팅 테이블에 인터넷 게이트웨이로 향하는 라우트가 누락되어 있습니다."
   },
   "answer": [
    "C"
   ],
   "explanation": "네트워크 ACL 은 상태 비저장형(Stateless) 방화벽이다. 따라서 인바운드 요청이 허용되었더라도 서버가 클라이언트로 응답 패킷을 전송하려면 아웃바운드 네트워크 ACL 에 응답 트래픽을 허용하는 규칙이 명시되어 있어야 한다. 클라이언트는 웹 접속 시 임시 포트(Ephemeral Port, 보통 1024~65535)를 소스 포트로 사용하여 요청을 보내므로, 서버의 응답 트래픽은 목적지 포트가 해당 임시 포트 범위가 된다. 현재 아웃바운드 네트워크 ACL 이 모든 트래픽을 차단하고 있으므로 응답이 차단되어 연결이 실패한다. 보안 그룹(A)은 상태 유지형(Stateful)이고, 네트워크 ACL(B)은 상태 비저장형이다."
  },
  {
   "num": 314,
   "question": "한 조직이 VPC 에 대한 세밀하고 상태 유지형(stateful) 네트워크 트래픽 필터링을 적용해야 합니다. 서브넷 간의 트래픽을 검사하고 도메인 이름(FQDN)을 기반으로 트래픽을 필터링해야 합니다. 이 요구 사항에 가장 잘 맞는 AWS 서비스는 무엇입니까?",
   "options": {
    "A": "보안 그룹(Security Groups)",
    "B": "네트워크 ACL(Network ACLs)",
    "C": "AWS Network Firewall",
    "D": "Route 53 Resolver DNS Firewall"
   },
   "answer": [
    "C"
   ],
   "explanation": "AWS Network Firewall 은 VPC 경계 및 서브넷 간 트래픽에 대해 상태 유지형(Stateful) 패킷 검사, 침입 방지 시스템(IPS), FQDN(정교한 도메인 이름) 기반 웹 트래픽 필터링을 지원하는 전용 관리형 방화벽 서비스이다. 보안 그룹(A)은 IP 및 포트 단위 제어만 지원하며 FQDN 필터링을 지원하지 않는다. 네트워크 ACL(B)은 상태 비저장형이며 IP/CIDR 단위 제어만 가능하다. Route 53 Resolver DNS Firewall(D)은 DNS 쿼리 이름 필터링만 담당하며 서브넷 간 전체 IP 패킷 트래픽의 심층 검사는 수행할 수 없다."
  },
  {
   "num": 315,
   "question": "CloudOps 엔지니어가 새로운 멀티 VPC 아키텍처를 설계하고 있으며, 비용 효율적인 설계가 되도록 해야 합니다. 다음 중 데이터 전송 비용을 최소화하는 데 도움이 되는 두 가지 설계 선택은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "서로 다른 AWS 리전에 위치한 VPC 간 트래픽 라우팅을 위해 AWS Transit Gateway 를 사용합니다.",
    "B": "빈번하게 통신하는 상호 의존적인 EC2 인스턴스들을 동일한 가용 영역(AZ)에 배치합니다.",
    "C": "모든 가용 영역이 사용할 수 있도록 단일 중앙 NAT 게이트웨이를 구성합니다.",
    "D": "VPC 내 EC2 인스턴스 간 모든 통신에 퍼블릭 IP 주소를 사용합니다.",
    "E": "EC2 인스턴스에서 Amazon S3 에 액세스하기 위해 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)를 사용합니다."
   },
   "answer": [
    "B",
    "E"
   ],
   "explanation": "동일 가용 영역(AZ) 내에서의 데이터 전송은 비용이 발생하지 않으므로, 통신이 빈번한 인스턴스를 같은 AZ 에 배치하면 가용 영역 간 데이터 전송 비용을 절감할 수 있다(B). 또한 게이트웨이 VPC 엔드포인트는 시간당 이용료나 데이터 처리 요금 없이 S3 로의 내부 트래픽 경로를 제공하므로 인터넷 및 NAT 게이트웨이 데이터 비용을 크게 줄여준다(E). Transit Gateway(A)는 교차 리전 데이터 전송료 및 데이터 처리 요금이 추가된다. 다른 AZ 의 EC2 가 단일 NAT 게이트웨이를 이용할 경우(C) 교차 AZ 트래픽 비용이 발생한다. 퍼블릭 IP(D)를 이용한 인스턴스 간 통신은 퍼블릭 인터넷 처리 요금이 청구된다."
  },
  {
   "num": 316,
   "question": "CloudOps 엔지니어가 VPC-A(10.0.0.0/16)와 VPC-B(10.1.0.0/16) 간에 VPC 피어링 연결을 설정해야 합니다. 피어링 연결 요청이 수락된 후 이 VPC 들의 인스턴스 간 트래픽 흐름을 활성화하기 위한 필수 단계 두 가지는 무엇입니까? (2 개 선택)",
   "options": {
    "A": "각 VPC 에 NAT 게이트웨이를 생성합니다.",
    "B": "피어링 연결을 통해 상대방 VPC 의 CIDR 을 가리키도록 각 VPC 의 라우팅 테이블을 업데이트합니다.",
    "C": "피어링 연결에 인터넷 게이트웨이를 연결합니다.",
    "D": "상대방 VPC 의 CIDR 블록으로부터의 트래픽을 허용하도록 각 VPC 의 보안 그룹을 구성합니다.",
    "E": "피어링 연결에 대해 DNS 확인(DNS resolution)을 활성화합니다."
   },
   "answer": [
    "B",
    "D"
   ],
   "explanation": "VPC 피어링 연결 생성이 수락된 후 실제 트래픽이 오가기 위해서는 라우팅 및 보안 규칙 설정이 필수적이다. 첫째, 각 VPC 서브넷의 라우팅 테이블에 상대 VPC CIDR 대역을 목적지로 하고 타깃을 해당 피어링 연결(pcx-xxx)로 지정하는 라우트를 추가해야 한다(B). 둘째, 트래픽을 수신할 인스턴스의 보안 그룹(SG) 또는 서브넷의 네트워크 ACL 에서 상대 VPC CIDR 대역으로부터 오는 인바운드/아웃바운드 트래픽을 허용하도록 구성해야 한다(D). NAT 게이트웨이(A)나 인터넷 게이트웨이(C)는 피어링 연결의 필수 구성 요소가 아니다. DNS 확인 활성화(E)는 프라이빗 DNS 호스트 이름을 확인할 때 필요한 옵션 설정일 뿐 기본 네트워크 연결의 필수 조건은 아니다."
  },
  {
   "num": 317,
   "question": "사용자 지정(custom) VPC 를 생성할 때, 해당 VPC 의 기본 라우팅 테이블(main route table)의 기본 상태는 무엇입니까?",
   "options": {
    "A": "기본적으로 인터넷 게이트웨이로 향하는 라우트가 포함되어 있습니다.",
    "B": "VPC 내에서의 통신을 위한 로컬 라우트(local route)만 포함하고 있습니다.",
    "C": "모든 트래픽을 NAT 게이트웨이로 자동 라우팅합니다.",
    "D": "규칙이 추가될 때까지 모든 아웃바운드 트래픽을 거부합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "새로운 사용자 지정 VPC 를 생성하면 AWS 는 자동으로 기본 라우팅 테이블(Main Route Table)을 함께 생성한다. 이 라우팅 테이블의 초기 상태는 VPC 내부 CIDR 대역 간의 네트워크 통신만을 허용하는 로컬 라우트(Local Route) 하나만 포함한다. 인터넷 게이트웨이(A)나 NAT 게이트웨이(C) 등으로 외부 연결을 생성하려면 사용자가 직접 게이트웨이를 생성하고 라우팅 테이블에 해당 라우트를 추가해야 한다. 모든 트래픽을 차단하는 기본 거부 방식(D)으로 작동하지 않는다."
  },
  {
   "num": 318,
   "question": "한 회사의 청구서에 NAT 게이트웨이로 인한 상당한 데이터 처리 비용이 발생한 것으로 나타났습니다. VPC Flow Logs 를 통한 조사 결과, 이 트래픽의 대부분이 동일한 리전에 있는 Amazon DynamoDB 테이블로 전달되고 있음을 확인했습니다. 이러한 요금을 줄이기 위한 가장 비용 효율적인 방법은 무엇입니까?",
   "options": {
    "A": "EC2 인스턴스를 퍼블릭 서브넷으로 이동하여 NAT 게이트웨이를 우회합니다.",
    "B": "DynamoDB 용 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)를 생성하고 서브넷의 라우팅 테이블을 업데이트합니다.",
    "C": "NAT 게이트웨이를 더 작은 NAT 인스턴스로 교체합니다.",
    "D": "호출을 수행하는 EC2 인스턴스에 대해 예약 인스턴스(Reserved Instance)를 구매합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "DynamoDB 및 Amazon S3 전용으로 제공되는 게이트웨이 VPC 엔드포인트(Gateway VPC Endpoint)는 추가 요금이 전혀 발생하지 않는 무료 기능이다. 게이트웨이 엔드포인트를 생성하고 서브넷 라우팅 테이블을 업데이트하면 트래픽이 NAT 게이트웨이 대신 AWS 내부 백본 네트워크를 통해 DynamoDB 로 직접 전달되므로 NAT 게이트웨이 데이터 처리 요금을 완전히 절감할 수 있다. EC2 인스턴스를 퍼블릭 서브넷으로 이동하는 방식(A)은 프라이빗 보안 구성을 저해한다. NAT 인스턴스로의 교체(C)나 예약 인스턴스 구매(D)는 데이터 처리 요금을 근본적으로 차단하지 못한다."
  },
  {
   "num": 319,
   "question": "CloudOps 팀이 연결성 문제를 해결하고 있습니다. Subnet-A 의 EC2 인스턴스(Instance A)가 동일한 VPC 내 Subnet-B 의 다른 EC2 인스턴스(Instance B)에 연결할 수 없습니다. 보안 그룹은 올바른 것으로 확인되었습니다. 연결을 차단할 수 있는 두 가지 구성은 무엇입니까? (2 개 선택)",
   "options": {
    "A": "Subnet-A 의 NACL 이 Instance B 의 IP 주소로 향하는 아웃바운드 트래픽을 차단하고 있습니다.",
    "B": "Subnet-A 의 라우팅 테이블에 인터넷 게이트웨이로 향하는 라우트가 누락되어 있습니다.",
    "C": "Subnet-B 의 NACL 이 Instance A 의 IP 주소로부터 오는 인바운드 트래픽을 차단하고 있습니다.",
    "D": "VPC 의 기본 라우팅 테이블에서 로컬 라우트가 삭제되었습니다.",
    "E": "Instance B 에 퍼블릭 IP 주소가 없습니다."
   },
   "answer": [
    "A",
    "C"
   ],
   "explanation": "보안 그룹 규칙에 문제가 없는데도 동일 VPC 내 다른 서브넷의 인스턴스 간 통신이 실패한다면 서브넷 경계에서 동작하는 네트워크 ACL(NACL) 필터링이 원인이다. Subnet-A 의 아웃바운드 NACL 이 Instance B 로 가는 패킷을 차단하고 있거나(A), Subnet-B 의 인바운드 NACL 이 Instance A 에서 들어오는 패킷을 차단하고 있으면(C) 통신이 불가능해진다. 인터넷 게이트웨이(B)나 퍼블릭 IP 주소(E)는 VPC 내부 프라이빗 IP 간 통신에는 전혀 필요하지 않다. VPC 라우팅 테이블의 로컬 라우트(D)는 AWS 시스템 제어 항목으로 사용자가 삭제할 수 없다."
  },
  {
   "num": 320,
   "question": "Application Load Balancer(ALB)를 사용하여 웹 애플리케이션이 배포되었습니다. 보안 팀은 웹 애플리케이션으로 들어오는 모든 트래픽에 대해 크로스 사이트 스크립팅(XSS)과 같은 일반적인 웹 취약점 공격을 검사할 것을 요구합니다. CloudOps 엔지니어는 이 요구 사항을 어떻게 충족할 수 있습니까?",
   "options": {
    "A": "XSS 공격을 거부하는 규칙이 포함된 보안 그룹을 ALB 에 연결합니다.",
    "B": "일반 공격에 대한 관리형 규칙이 포함된 AWS WAF 웹 ACL 을 생성하고 이를 ALB 에 연결합니다.",
    "C": "ALB 의 IP 주소로 향하는 모든 트래픽을 검사하도록 AWS Network Firewall 을 구성합니다.",
    "D": "ALB 에서 AWS Shield Advanced 를 활성화합니다."
   },
   "answer": [
    "B"
   ],
   "explanation": "Application Load Balancer(ALB) 앞단에서 애플리케이션 계층(L7)의 웹 공격(크로스 사이트 스크립팅, SQL 인젝션 등)을 탐지하고 차단하기 위해 가장 적합한 서비스는 AWS WAF(Web Application Firewall)이다. AWS WAF 의 관리형 규칙 세트(AWS Managed Rules)를 포함하는 Web ACL 을 생성하여 ALB 에 연동하면 패킷의 HTTP/HTTPS 요청 본문 및 헤더를 심층 검사할 수 있다. 보안 그룹(A)은 L3/L4 기반의 IP 및 포트 필터링만 수행하므로 웹 애플리케이션 페이로드를 검사하지 못한다. AWS Network Firewall(C)은 VPC 계층 방화벽이며, AWS Shield Advanced(D)는 DDoS 공격 방어 전용 서비스이다."
  }
 ]
};
