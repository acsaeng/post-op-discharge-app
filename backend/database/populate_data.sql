INSERT INTO USERS (User_ID, Position, Team, First_Name, Last_Name, Sex, DoB, Phone_Num, Email, User_Password)
VALUES
(1, 'Nurse', 'Blue', 'Karlen', 'Chow', 'M', '1995-09-25', '(416) 267-6625', 'karlen.chow@ontariohealth.ca', 'karlen'),
(2, 'Doctor', 'Red', 'Fizzah', 'Malik', 'F', '1995-05-03', '(519) 589-6574', 'fizzah.malik@ontariohealth.ca', 'fizzah'),
(3, 'Patient', 'Blue', 'Timothy', 'Mok', 'M', '1995-11-28', '(613) 585-5274', 'timothy.mok@ontariohealth.ca', 'timothy'),
(4, 'Nurse', 'Red', 'Janelle', 'Pitaro', 'F', '1994-02-23', '(905) 469-8859', 'janelle.pitaro@ontariohealth.ca', 'janelle'),
(5, 'Nurse', 'Blue', 'Alana', 'Pierscianowski', 'F', '1994-10-15', '(905) 759-5784', 'alana.pierscianowski@ontariohealth.ca', 'alana'),
(6, 'Patient', 'Red', 'Aron', 'Saengchan', 'M', '1996-03-24', '(365) 229-7587', 'aron.saengchan@ontariohealth.ca', 'aron'),
(7, 'Doctor', 'Blue', 'Simon', 'Zhong', 'M', '1992-03-10', '(807) 385-9875', 'simon.zhong@ontariohealth.ca', 'simon'),
(8, 'Patient', 'Red', 'Jimmy', 'Zhu', 'M', '1995-12-08', '(226) 485-7963', 'jimmy.zhu@ontariohealth.ca', 'jimmy');


INSERT INTO Messages (Message_ID, Datetime_Sent, Message, Attachment_id, Sender_ID, Patient_ID)
VALUES
('0', '2022-03-03 10:00:00', 'Hi there', '0', '8', '8'),
('1', '2022-03-03 10:00:00', 'Hello', '0', '4', '8'),
('2', '2022-03-03 10:00:00', 'I had a question', '0', '8', '8'),
('3', '2022-03-03 10:00:00', 'I am worried', '0', '8', '8'),
('4', '2022-03-03 10:00:00', 'no problem', '0', '4', '8'),
('5', '2022-03-03 10:00:00', 'let me ask some quesitons', '0', '4', '8'),
('6', '2022-03-03 10:00:00', 'do you have a fever?', '0', '4', '8'),
('7', '2022-03-03 10:00:00', 'no', '0', '8', '8'),
('8', '2022-03-03 10:00:00', 'just a headache', '0', '8', '8'),
('9', '2022-03-03 10:00:00', 'loss of apetite?', '0', '4', '8'),
('10', '2022-03-03 10:00:00', 'yes', '0', '8', '8'),
('11', '2022-03-03 10:00:00', 'just a few more qns', '0', '4', '8'),
('12', '2022-03-03 10:00:00', 'when did you start noticing this?', '0', '8', '8'),
('13', '2022-03-03 10:00:00', 'about yesterday morning', '0', '8', '8'),
('14', '2022-03-03 10:00:00', 'and you havent eaten anything solid?', '0', '4', '8'),
('15', '2022-03-03 10:00:00', 'no', '0', '8', '8'),
('16', '2022-03-03 10:00:00', 'just drank water', '0', '8', '8'),
('17', '2022-03-03 10:00:00', 'I noticed a rash here', '0', '8', '8'),
('18', '2022-03-03 10:00:00', 'can you send a pic?', '0', '4', '8'),
('19', '2022-03-04 10:00:00', 'start of convo2', '0', '1', '3'),
('20', '2022-03-04 10:00:00', 'end of convo2', '0', '1', '3');







