# ECS + ECR + github Action CI/CD 구축

![image](https://github.com/user-attachments/assets/4eb3080b-73db-4012-9b9b-7fc2c2c0e6b8)

## 서비스 흐름
* Nest.js 프로젝트를 Github Repository에 push한다.
* GitHub Actions에서 트리거가 발생하여 사전에 지정한 step을 진행
  * 프로젝트를 Docker로 Build
  * Build된 Docker Image를 ECR로 push
  * ECR에 등록한 Image를 ECS에 실행한다.
    
![결과](https://github.com/user-attachments/assets/f8157fa5-4637-4190-a9ce-4b093dd002b6)

## Application Load Balancer

![image](https://github.com/user-attachments/assets/b494a365-a1d4-4cd2-b8a6-b28582555d78)

* 위의 경로를 확인하게 되면 Container에 매핑되는 호스트의 포트를 고정하지 않는다. ECS가 Ephemeral Port 중 하나의 값을 알아서 매핑시켜준다. 선언하는 방법은 Task Definition에 있다. 해당 container의 Host Port를 0으로 설정하면 동적 포트 매핑이 된다.
* 이렇게 Dynamic Port Mapping으로 만든 Task Definition으로 인스턴스를 띄우면 호스트의 포트는 임의로 지정된다.
  * 이러한 블랙박스를 ALB ( Application Load Balancer )가 대신해준다.
* 한 가지 주의할 점은 ECS가 기존에 사용하는 고정된 포트가 아닌 임의의 포트를 사용하기 때문에 ECS의 security group에 0 ~ 65535 포트를 추가해야한다.
* 또한 보안을 위해 source 부분에는 alb의 security group만을 허용하도록 제한도 필요하다. 


## Reference
https://blog.kubesimplify.com/cicd-pipeline-github-actions-with-aws-ecs
