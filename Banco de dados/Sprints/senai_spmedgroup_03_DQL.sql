USE Projeto_SP_Med_Group;
GO

--> MOSTRAR TABELA TIPOUSUARIO

SELECT * FROM tipoUsuario

--> MOSTRAR TABELA USUARIO

SELECT * FROM usuario

--> MOSTRAR TABELA PACIENTE

SELECT * FROM paciente

--> MOSTRAR TABELA MEDICO

SELECT * FROM medico

--> MOSTRAR TABELA CLINICA

SELECT * FROM clinica

--> MOSTRAR TABELA CONSULTA

SELECT * FROM consulta

--> MOSTRAR TABELA SITUACAO

SELECT *  FROM situacao

--> MOSTRAR TABELA ESPECIALIZACAO 

SELECT *  FROM especializacao

--> TABELA CONSULTA COMPLETA


SELECT P.nomePaciente Paciente,
       M.nomeMedico M�dico,
	   tipoEspecializacao Especializacao,
	   convert(varchar(20),C.dataConsulta,110) [Dia da Consulta],
	   S.descricao Descri��o,
	   c.descricao [Descri��o da consulta]
FROM consulta C
INNER JOIN paciente P ON P.idPaciente = C.idPaciente
INNER JOIN medico M ON M.idMedico = C.idMedico
INNER JOIN especializacao E ON M.idEspecializacao = E.idEspecializacao
INNER JOIN situacao S ON C.idSituacao = S.idSituacao


--> Usando function

CREATE FUNCTION MED_ESPC(@nomeEspec VARCHAR(100))
RETURNS TABLE
AS 
RETURN
(
	SELECT @nomeEspec AS especializacao , COUNT(idEspecializacao) [Numero De M�dico] from especializacao
	WHERE tipoEspecializacao LIKE '%'+ @nomeEspec + '%'
)
GO
drop FUNCTION MED_ESPC
SELECT * FROM MED_ESPC('Pediatria');
GO


--> usando produces
CREATE PROCEDURE IdadePaciente
@idade VARCHAR(20) AS 
BEGIN 
SELECT nomePaciente , DATEDIFF(YEAR,dataNascimento,GETDATE())AS idade from paciente
WHERE nomePaciente = @idade 
END 
GO

EXEC IdadePaciente 'Jo�o'

--> Mostrou a quantidade de usu�rios ap�s realizar a importa��o do banco de dados
--Fiz com paciente
SELECT nomePaciente FROM paciente

SELECT COUNT(nomePaciente) QuantidadePaciente from paciente
go

SELECT COUNT(idUsuario) QauntidadeUsuario from usuario
go

--> Calculou a idade do usu�rio a partir da data de nascimento
--> fiz com paciente
SELECT paciente.nomePaciente,
DATEDIFF (YEAR, dataNascimento,GETDATE() ) Idade
FROM paciente
GO

