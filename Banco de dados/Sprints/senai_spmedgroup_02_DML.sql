USE Projeto_SP_Med_Group;
GO

--> ADCIONANDO DADOS NA TABELA TIPOUSUARIO

INSERT INTO tipoUsuario(tituloTipoUsuario)
VALUES ('Adminisatrador'),('Paciente'),('m�dico');
GO
SELECT * FROM tipoUsuario

--> ADCIONANDO DADOS NA TABELA USUARIO
INSERT INTO usuario(idTipoUsuario,email,senha)
VALUES (2,'ligia@gmail.com','ligia123'),(2,'alexandre@gmail.com','alexandre223'),
	   (2,'fernando@gmail.com','fernando323'),(2,'henrique@gmail.com','henrique423'),
	   (2,'joao@hotmail.com','joao523'),(2,'bruno@gmail.com','bruno623'),
	   (2,'mariana@outlook.com','mariana723'),(3,'ricardo.lemos@spmedicalgroup.com.br','ricardo123'),
	   (3,'roberto.possarle@spmedicalgroup.com.br','roberto123'),(3,'helena.souza@spmedicalgroup.com.br','helena123'),
	   (1,'adm@adm.com','adm132');
GO
INSERT INTO usuario(idTipoUsuario,email,senha)
VALUES (2,'daniel@gmail.com','daniel123');
GO

SELECT * FROM usuario

--> ADCIONANDO DADOS NA TABELA PACIENTE
INSERT INTO paciente(idUsuario,nomePaciente,dataNascimento,telefone,RG,CPF,endereco)
VALUES (1,'Ligia','13/10/1983','11 3456-7654','43522543-5','94839859000','Rua Estado de Israel 240,�S�o Paulo, Estado de S�o Paulo, 04022-000'),
       (2,'Alexandre','23/07/2001','11 98765-6543','32654345-7','73556944057','Av. Paulista, 1578 - Bela Vista, S�o Paulo - SP, 01310-200'),
	   (3,'Fernando','10/10/1978','11 97208-4453','54636525-3','16839338002','Av. Ibirapuera - Indian�polis, 2927, S�o Paulo - SP, 04029-200'),
	   (4,'Henrique','13/10/1985','11 3456-6543','54366362-5','14332654765','R. Vit�ria, 120 - Vila Sao Jorge, Barueri - SP, 06402-030'),
	   (5,'Jo�o','21/08/1972','11 7656-6377','53254444-1','91305348010','R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeir�o Pires - SP, 09405-380'),
	   (6,'Bruno','21/03/1972','11 95436-8769','54566266-7','79799299004','Alameda dos Arapan�s, 945 - Indian�polis, S�o Paulo - SP, 04524-001'),
	   (7,'Mariana','05/03/2018',NULL,'54566266-8','13771913039','R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140');
GO
INSERT INTO paciente(idUsuario,nomePaciente,dataNascimento,telefone,RG,CPF,endereco)
VALUES (12,'Daniel','10/11/2001','11 95436-8799','54996266-8','13771913099','Av. Ibirapuera - Indian�polis, 3000, S�o Paulo - SP, 04029-200');
GO

--Atualizou os registros que n�o possuem data de nascimento conforme especificado pelo cliente
UPDATE paciente SET dataNascimento = '20/03/2000'
WHERE idPaciente = 9


TRUNCATE TABLE paciente

SELECT * FROM paciente

--> ADCIONANDO DADOS NA TABELA ESPECIALIZACAO
INSERT INTO especializacao(tipoEspecializacao)
VALUES ('Acupuntura'),('Anestesiologia'),('Angiologia'),('Cardiologia'),('Cirurgia Cardiovascular'),('Cirurgia da M�o'),('Cirurgia do Aparelho Digestivo'),
       ('Cirurgia Geral'),('Cirurgia Pedi�trica'),('Cirurgia Pl�stica'),('Cirurgia Tor�cica'),('Cirurgia Vascular'),('Dermatologia'),('Radioterapia'),('Urologia'),
	   ('Pediatria'),('Psiquiatria');
GO
SELECT * FROM especializacao

--> ADCIONANDO DADOS NA TABELA CLINICA
INSERT INTO clinica(nomeFantasia,CNPJ,razaoSocial,endereco)
VALUES ('Clinica Possarle', '86.400.902/0001-30','SP Medical Group','Av. Bar�o Limeira, 532, S�o Paulo, SP');
GO
SELECT * FROM clinica


--> ADCIONANDO DADOS NA TABELA SITUACAO
INSERT INTO situacao(situacao)
VALUES ('Realizada'),('Cancelada'),('Agendado');
GO
SELECT * FROM situacao

--> ADCIONANDO DADOS NA TABELA MEDICO
INSERT INTO medico(idClinica,idEspecializacao,idUsuario,nomeMedico,CRM)
VALUES (1,2,8,'Ricardo Lemos','54356-SP'),(1,17,9,'Roberto Possarle','53452-SP'),
       (1,16,10,'Helena Strada','65463-SP');
GO

SELECT * FROM medico

--> ADCIONANDO DADOS NA TABELA CONSULTA
INSERT INTO consulta(idPaciente,idMedico,idSituacao,dataConsulta,descricao)
VALUES (7,3,1,'20/01/2020  15:00:00','Estado de recuperacao'),
       (2,2,2,'01/06/2020  10:00:00',NULL),(3,2,1,'07/02/2020  11:00:00','estado normal '),
	   (2,2,1,'06/02/2018  10:00:00','estado normal'),
	   (4,1,2,'07/02/2019  11:00:45',NULL),
	   (7,3,3,'08/03/2020  15:00:00',NULL),
	   (4,1,3,'09/03/2020  11:00:45',NULL);
GO
TRUNCATE TABLE consulta

SELECT * FROM consulta