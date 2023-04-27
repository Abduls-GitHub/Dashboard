CREATE TABLE mytable(
   call_flag       INTEGER  NOT NULL PRIMARY KEY 
  ,customer_number VARCHAR(9) NOT NULL
  ,meter_number    INTEGER  NOT NULL
  ,customer_name   VARCHAR(13) NOT NULL
  ,address         VARCHAR(16) NOT NULL
  ,contact_number  INTEGER  NOT NULL
  ,email           VARCHAR(12) NOT NULL
  ,customer_type   VARCHAR(3) NOT NULL
  ,wallet_balance  INTEGER  NOT NULL
  ,limit           INTEGER  NOT NULL
);
INSERT INTO mytable(call_flag,customer_number,meter_number,customer_name,address,contact_number,email,customer_type,wallet_balance,limit) VALUES (0,'CA0000065',314845,'Julian Klein','12 Church Street',812345678,'jk@gmail.com','SPU',1750,1500);
INSERT INTO mytable(call_flag,customer_number,meter_number,customer_name,address,contact_number,email,customer_type,wallet_balance,limit) VALUES (1,'CA0000066',876543,'Paul Joseph','43 Klein road',217584888,'pk@gmail.com','LPU',0,20000);
INSERT INTO mytable(call_flag,customer_number,meter_number,customer_name,address,contact_number,email,customer_type,wallet_balance,limit) VALUES (1,'CA0000232',345628,'Lilian Jarvis','89 Olsen road',219496448,'lj@gmail.com','SPU',12500,20000);
INSERT INTO mytable(call_flag,customer_number,meter_number,customer_name,address,contact_number,email,customer_type,wallet_balance,limit) VALUES (2,'CA0000345',878515,'Mike Ross','212 Helen drive',834484848,'mk@gmail.com','LPU',912,60000);
INSERT INTO mytable(call_flag,customer_number,meter_number,customer_name,address,contact_number,email,customer_type,wallet_balance,limit) VALUES (2,'CA0000547',345654,'Abraham Olsen','32 Joseph street',217584448,'ao@gmail.com','SPU',200000,20000);
INSERT INTO mytable(call_flag,customer_number,meter_number,customer_name,address,contact_number,email,customer_type,wallet_balance,limit) VALUES (2,'CA0000876',254815,'Helen Oliver','50 Jarvis street',217151484,'ho@gmail.com','SPU',12,15000);
