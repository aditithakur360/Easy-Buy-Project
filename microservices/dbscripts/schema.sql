-- -----------------------------------------------------
-- Schema easy_buy
-- -----------------------------------------------------
CREATE SCHEMA `easy_buy`;
USE `easy_buy` ;

-- -----------------------------------------------------
-- Table `easy_buy`.`user`
-- -----------------------------------------------------
CREATE TABLE `easy_buy`.`user` (
  `us_id` INT NOT NULL AUTO_INCREMENT,
  `us_first_name` VARCHAR(50) NOT NULL,
  `us_last_name` VARCHAR(50) NOT NULL,
  `us_age` INT(2) NOT NULL,
  `us_gender` VARCHAR(6) NULL,
  `us_contact_number` VARCHAR(10) NOT NULL,
  `us_user_id` VARCHAR(15) NOT NULL,
  `us_password` VARCHAR(100) NOT NULL,
  `us_status` VARCHAR(1) NOT NULL,
  `us_user_type` VARCHAR(1) NOT NULL,
  `us_secret_ques1` VARCHAR(50) NOT NULL,
  `us_secret_ans1` VARCHAR(50) NOT NULL,
  `us_secret_ques2` VARCHAR(50) NOT NULL,
  `us_secret_ans2` VARCHAR(50) NOT NULL,
  `us_secret_ques3` VARCHAR(50) NOT NULL,
  `us_secret_ans3` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `easy_buy`.`product`
-- -----------------------------------------------------
CREATE TABLE `easy_buy`.`product` (
  `pr_id` INT NOT NULL AUTO_INCREMENT,
  `pr_code` VARCHAR(50) NOT NULL,
  `pr_name` VARCHAR(50) NOT NULL,
  `pr_type` VARCHAR(2) NOT NULL,
  `pr_brand` VARCHAR(50) NOT NULL,
  `pr_quatity_type` VARCHAR(10) NULL,
  `pr_rate` DECIMAL(15) NOT NULL,
  `pr_stock_count` INT(15) NOT NULL,
  `pr_add_date` DATE NOT NULL,
  `pr_aisle` VARCHAR(15) NOT NULL,
  `pr_shelf` VARCHAR(15) NOT NULL,
  `pr_date_of_manufacture` DATE NOT NULL,
  `pr_date_of_expiry` DATE NOT NULL,
  `pr_image` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`pr_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `easy_buy`.`product_list`
-- -----------------------------------------------------
CREATE TABLE `easy_buy`.`purchase_history` (
  `pl_id` INT NOT NULL AUTO_INCREMENT,
  `pl_us_id` INT NULL,
  `pl_pr_id` INT NULL,
  PRIMARY KEY (`pl_id`),
  INDEX `pl_us_fk_idx` (`pl_us_id` ASC),
  INDEX `pl_pr_fk_idx` (`pl_pr_id` ASC),
  CONSTRAINT `pl_us_fk`
    FOREIGN KEY (`pl_us_id`)
    REFERENCES `easy_buy`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pl_pr_fk`
    FOREIGN KEY (`pl_pr_id`)
    REFERENCES `easy_buy`.`product` (`pr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- insert into `easy_buy`.`user`
-- -----------------------------------------------------
INSERT into `easy_buy`.`user` values (1,'super','user',2,'a','1234567890','owner','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','a','O','a','a','a','a','a','a');

-- -----------------------------------------------------
-- insert into `easy_buy`.`product`
-- -----------------------------------------------------
INSERT into `easy_buy`.`product` values (1,'01','Spoon','1','Milton','1','15','50','2019-03-15','1','1','2017-05-24','2020-4-9','https://images.unsplash.com/photo-1567807951157-76af61943dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (2,'02','Plate','1','Milton','1','150','50','2019-03-15','1','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1499028203764-8669cfd05719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (3,'03','Bottle','1','Milton','1','50','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (4,'04','Tumbler','1','Milton','1','70','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1549124785-1c1c62a24388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (5,'05','Pressure Cooker','1','Milton','1','1000','50','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (6,'06','Garlic Bread','1','Bakers Fresh','1','70','20','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (7,'07','Fruit Jam','1','Bakers Fresh','1','50','30','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (8,'08','Cupcakes','1','Bakers Fresh','1','25','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1465254596705-1ef61f93878c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (9,'09','Cookies','1','Bakers Fresh','1','30','50','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (10,'10','Homemade chocolate','1','Bakers Fresh','1','70','10','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1551529674-48920e9b835b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (11,'11','Orange','1','Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (12,'12','Apple','1','Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (13,'13','Potato','1','Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (14,'14','Dragon Fruit','1','Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1527325678964-54921661f888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (15,'15','Papaya','1','Farm Fresh','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (16,'16','Popcorn','1','ActII','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (17,'17','Lays','1','ActII','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (18,'18','Doritos','1','Doritos','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1567838080002-b388fbd228ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (19,'19','Nabati','1','Nabati','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1542843137-144e10cc010b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
INSERT into `easy_buy`.`product` values (20,'20','Oreo','1','Cadbury','1','150','100','2019-03-15','2','1','2017-05-24','2020-04-09','https://images.unsplash.com/photo-1531257243018-c547a2e35767?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

