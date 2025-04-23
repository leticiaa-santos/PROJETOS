---
sidebar_position: 1
---

# Models

As **models** são utilizadas para gerenciar e definir o banco de dados da aplicação do projeto.

Logo no início do arquivo models, é possível ver o import das models:

~~~python
from django.db import models
~~~

É nesse arquivo que serão criadas as tabelas para usar no cadastro, elas são criadas a partir de uma classe que herda da Model.

****

### Cadastro

Na tabela de **Cadastro**, temos os campos:
  - ni = campo charfield com um tamanho máximo de 15 caracteres para o número de identificação;
  - email = campo charfield com tamanho máximo de 255 caracteres para o e-mail;
  - cel = campo charfield com tamanho de máximo de 255 caracteres para o número de celular;
  - ocup = campo float para a representação em porcentagem do horário de trabalho do professor.

~~~~python 
class Cadastro(models.Model):
    ni = models.CharField(max_length=15)
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    cel = models.CharField(max_length=255)
    ocup = models.FloatField()
~~~~

****

### Disciplinas

Na tabela **Disciplinas**, temos os campos:
  - cod = campo charfield com tamanho máximo de 100 caracteres para armazenar o código da disciplina;
  - disc = campo charfield com tamanho máximo de 100 caracteres para armazenar o nome das disciplinas;
  - ch = campo do tipo Integer para armazenar o número de horas da disciplina. 

~~~~python
class Disciplinas(models.Model):
    cod = models.CharField(max_length=100)  #Código             #PWBE
    disc = models.CharField(max_length=100) #Disciplina         #Programação Web Back End
    ch = models.IntegerField()              #Carga Horária      #45
~~~~

****

### Ambiente

Na tabela **Ambiente**, temos os campos:
  - cod = campo charfield com tamanho máximo de 255 caracteres para armazenar o código do ambiente; 
  - sala = campo charfield com tamanho máximo de 255 caracteres para armazenar o nome da sala;
  - cap = campo Integer para armazenar a capacidade de alunos que a sala comporta;
  - resp = campo charfield com um tamanho máximo de 255 caracteres com o nome do responsável pelo ambiente;
  - per = campo charfield com um tamanho de dez caracteres que usa a lista PERIODOS como escolha. 

~~~~python
PERIODOS = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('I', 'Integral'),
    ]
class Ambiente(models.Model):
    cod = models.CharField(max_length=255)  #Código             #LabA101
    sala = models.CharField(max_length=255) #Sala               #Laboratório de Informáica
    cap = models.IntegerField()             #Capacidade de alunos
    resp = models.CharField(max_length=255) #Responsável pelo Ambiente
    per = models.CharField(choices=PERIODOS, max_length=10, default="M")
~~~~

****

### Turmas

Na tabela **Turma**, temos os campos:
  - cod = campo charfield com um tamanho máximo de 255 caracteres que armazena o código da turma; 
  - turma = campo charfield com 255 caracteres que armazena o nome da turma.

~~~~python
class Turma(models.Model):
    cod = models.CharField(max_length=255)      #Código             #13
    turrma = models.CharField(max_length=255)   #Turma              #2DS-TB
~~~~

****
### Curso
Na tabela **Curso**, temos os campos:
  - cod = campo charfield com um tamanho máximo de 255 caracteres para armazenar o código do curso; 
  - curso = campo charfield com um tamanho máximo de 255 caracteres que armazena o nome do curso; 
  - tipo = campo charfield com um tamanho máximo de 20 caracteres que usa a lista TIPOS como escolha;
  - ha = campo charfield com um tamanho máximo de 20 caracteres que armazena o horário da aula. 


~~~~python 
TIPOS = [
    ('CAI', 'Aprendizagem'),
    ('CT','Técnico'),
    ('CS','Superior'),
    ('FIC','Formação')
]
class Curso(models.Model):
    cod = models.CharField(max_length=255)      #Código             #TEC
    curso = models.CharField(max_length=255)    #Curso              #Técnico em Desenvolvimento de Sistemas
    tipo = models.CharField(max_length=20, choices=TIPOS, default="CT")
    ha =  models.CharField(max_length=255)      #Hora Aula          #45
~~~~

****