create database ilsanbangju;

use ilsanbangju;

/* sermon table 생성 */
CREATE TABLE `ilsanbangju`.`sermon` (
  `youtube` VARCHAR(255) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `content` VARCHAR(64) NOT NULL,
  `date` DATE NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `talker` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`youtube`));


/* 테이블 조회 */
select * from `sermon`;
SELECT youtube, title, content, date_format(date,'%Y-%m-%d') as date, type, talker FROM sermon ORDER BY date desc;

/* 데이터 삽입*/
insert into `sermon`(`youtube`, `title`, `content`, `date`, `type`, `talker`) value (
'https://www.youtube.com/watch?v=cW6JeILZ63s&t=711s&ab_channel=%EC%9D%BC%EC%82%B0%EB%B0%A9%EC%A3%BC%EA%B5%90%ED%9A%8C',
'여러분은 어떠한 관점에서 살고 계신가요?', 
'열왕기상 22장 41절 ~ 50절', 
'2019-11-24', 
'주일예배', 
'오시헌 전도사');