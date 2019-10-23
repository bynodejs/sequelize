> sequelize

Index
-----

1. docker
    -   리눅스의 응용 프로그램들을 소프트웨어 컨테이너 안에 배치시키는 일을 자동화하는 오픈 소스 프로젝트
        1. docker-compose up : 실행  /  docker-compose up -d : 백그라운드 실행

        2. docker-compose -f [docker-compose.yml(파일명)] up -d : 해당 파일 실행

        3. docker ps : 현재 구동 확인

        4. docker-compose down : 종료

2. SQL
    1. 장점
        - 명확하게 정의 된 스키마

        - 데아터 무결성 보장

        - 관계는 각 데이터를 중복없이 한번만 저장됩니다.

    2. 단점
        - NoSQL 보다 상대적으로 덜 유연합니다. 데이터 스키마는 사전에 계획되고 알려져야 합니다.

        - 관계를 맺고 있기 때문에, JOIN문이 많은 매우 복잡한 쿼리가 만들어 질 수 있습니다.

        - 수평적 확장이 어렵고, 대체로 수직적 확장만 가능합니다.

3. sequlize
    - ORM (Object Relational Mapping) 

5. MySQL Cloud
    - <a href="https://aws.amazon.com/ko/documentdb/">Amoazon RDS</a>

Modules
-------

* <a href="https://github.com/visionmedia/debug#readme">debug</a>

* <a href="https://github.com/mde/ejs">ejs</a>

* <a href="http://expressjs.com/">express</a>

* <a href="https://sequelize.org/">sequelize</a>

* <a href="https://www.npmjs.com/package/sequelize-cli">sequelize-cli</a>

* <a href="https://github.com/sidorares/node-mysql2#readme">mysql2</a>

* <a href="https://github.com/expressjs/morgan#readme">morgan</a>

Link
----

* <a href="https://ljlm0402.netlify.com/nodejs/sequlize.1/">sequlize 1탄, MySQL 설치 및 연동하기</a>
