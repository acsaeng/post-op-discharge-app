DROP DATABASE IF EXISTS postopdischargeapp;
CREATE DATABASE postopdischargeapp; 
USE postopdischargeapp;

DROP TABLE IF EXISTS USERS; 
CREATE TABLE USERS ( 
	User_ID			int not null,
	Position		varchar(50) not null,
	Team			varchar(50) not null,
    First_Name		varchar(50) not null,
    Last_Name		varchar(50) not null,
	Sex 			varchar(1) not null,
    DoB				date not null,
    Phone_Num		varchar(50) not null,
    Email			varchar(50) not null,
    User_Password	varchar(50) not null,

    primary key (User_ID)
);

DROP TABLE IF EXISTS PROCEDURES; 
CREATE TABLE PROCEDURES ( 
	Procedure_ID				int not null auto_increment,
    Title						varchar(100) not null,
    Procedure_Description		varchar(5000) not null,
    Link						varchar(500),
    Assigner_ID					int not null,
    Patient_ID					int not null,

    primary key (Procedure_ID),
	foreign key (Assigner_ID) references USERS(User_ID),
    foreign key (Patient_ID) references USERS(User_ID) 
);

DROP TABLE IF EXISTS RECOVERY; 
CREATE TABLE RECOVERY ( 
	Recovery_ID		int not null auto_increment,
    Title						varchar(100) not null,
    Recovery_Description		varchar(5000) not null,
    Link						varchar(500),
    Assigner_ID					int not null,
    Patient_ID					int not null,

    primary key (Recovery_ID),
	foreign key (Assigner_ID) references USERS(User_ID),
    foreign key (Patient_ID) references USERS(User_ID) 
);

DROP TABLE IF EXISTS PHOTOS; 
CREATE TABLE PHOTOS ( 
	Photo_ID				int not null,   
    Client_ID				int not null,
    Upload_Datetime			datetime,
    Photo					longblob,

    primary key (Photo_ID),
	foreign key (Client_ID) references USERS(User_ID)
);

DROP TABLE IF EXISTS MONITORING; 
CREATE TABLE MONITORING ( 
	Monitoring_ID		int not null auto_increment,
    Assigner_ID			int not null,
    Patient_ID			int not null,
    Post_Datetime		datetime not null,
    Post_Title			varchar(100),
    Post_Description	varchar(1000) not null,
    Photo_ID			int,

    primary key (Monitoring_ID),
	foreign key (Assigner_ID) references USERS(User_ID),
    foreign key (Patient_ID) references USERS(User_ID),
    foreign key (Photo_ID) references PHOTOS(Photo_ID)
);

DROP TABLE IF EXISTS MEDICATION; 
CREATE TABLE MEDICATION ( 
	Medication_ID	int not null,   
    Title			varchar(50) not null,
    Dose			varchar(50) not null,
    Duration		varchar(50) not null,
    Frequency		varchar(50) not null,
    Assigner_ID		int not null,
    Patient_ID		int not null,

    primary key (Medication_ID),
	foreign key (Assigner_ID) references USERS(User_ID),
    foreign key (Patient_ID) references USERS(User_ID) 
);

DROP TABLE IF EXISTS MESSAGES; 
CREATE TABLE MESSAGES ( 
	Message_ID		int not null,   
    Datetime_Sent	datetime,
    Message			varchar(50) not null,
    Attachment_id   int,
    Sender_ID		int not null,
	Patient_ID		int not null,
    
    primary key (Message_ID),
	foreign key (Sender_ID) references USERS(User_ID)
);

DROP TABLE IF EXISTS APPOINTMENT; 
CREATE TABLE APPOINTMENT ( 
	Appointment_ID			int not null,   
    Title					varchar(50) not null,
    Appointment_Datetime	datetime,
    Location				varchar(50) not null,
    Comments				varchar(50) not null,
    Phone_Num				varchar(50) not null,
    Assigner_ID				int not null,
    Patient_ID				int not null,

    primary key (Appointment_ID),
	foreign key (Assigner_ID) references USERS(User_ID),
    foreign key (Patient_ID) references USERS(User_ID) 
);