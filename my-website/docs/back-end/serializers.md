---
sidebar_position: 2
---

# Serializers

O arquivo `serializer.py` no Django (com Django rest framework)  é responsável por transformar dados complexos (como objetos de modelos) em formatos simples, como JSON, para transmissão em APIs.

Abaixo é possível visualizar o código completo e também a explicação em  partes sobre as importações e classes utilizadas no `serializer.py` e suas respectivas funcionalidades.

### Visão Geral dos Serializers

~~~~python
from rest_framework import serializers
from .models import *

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = '__all__'

class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplinas
        fields = '__all__'

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'
~~~~
***

### Import

~~~~python 
from rest_framework import serializers
from .models import *
~~~~
- `from rest_framework import serializers`: Importa o módulo serializers do Django REST Framework, que é usado para transformar dados em formatos como JSON, além de validar e serializar objetos.

- `from .models import *`: Traz todos os modelos do arquivo models.py para esse código, para poder ser usado no serializers.

***

### Class CadastroSerializer

~~~~python 
class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = '__all__'

~~~~

- `class CadastroSerializer(serializers.ModelSerializer)`: Aqui, está sendo criado um serializer para o modelo Cadastro, que vai transformar os dados desse modelo em JSON e vice-versa.

- `class Meta`: Define metadados para o serializer, informando como ele funcionará. 


- `model = Cadastro`:  Aqui ele está especificando para o serializer que ele irá trabalhar com o modelo Cadastro.

- `fields = ‘__all__’ `: Diz para a serializer incluir todos os campos do modelo Cadastro quando ele transformar os dados.

***

### Class DisciplinaSerializer

~~~python
class DisciplinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplinas
        fields = '__all__'
~~~

- `class DisciplinaSerializer(serializers.ModelSerializer)`: Aqui, está sendo criado um serializer para o modelo Disciplina, que vai transformar os dados desse modelo em JSON e vice-versa.

- `class Meta`: Define metadados para o serializer, informando como ele funcionará. 

- `model = Disciplinas`: Aqui ele está especificando para o serializer que ele irá trabalhar com o modelo Disciplinas.

- `fields = ‘__all__’`: Diz para a serializer incluir todos os campos do modelo Disciplinas quando ele transformar os dados.

***

### Ambiente Serializer 
~~~~python
class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = '__all__'
~~~~

- `class AmbienteSerializer(serializers.ModelSerializer)`: Aqui, está sendo criado um serializer para o modelo Ambiente, que vai transformar os dados desse modelo em JSON e vice-versa.

- `class Meta`: Define metadados para o serializer, informando como ele funcionará. 

- `model = Ambiente`: Aqui ele está especificando para o serializer que ele irá trabalhar com o modelo Ambiente.

- `fields = ‘__all__’`: Diz para a serializer incluir todos os campos do modelo Ambiente quando ele transformar os dados.

***

### TurmaSerializer 
~~~~python
class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'
~~~~

- `class TurmaSerializer(serializers.ModelSerializer)`: Aqui, está sendo criado um serializer para o modelo Turma, que vai transformar os dados desse modelo em JSON e vice-versa.

- `class Meta`: Define metadados para o serializer, informando como ele funcionará. 

- `model = Turma`: Aqui ele está especificando para o serializer que ele irá trabalhar com o modelo Turma.

- `fields = ‘__all__’`: Diz para a serializer incluir todos os campos do modelo Turma quando ele transformar os dados.

***

### CursoSerializer 
~~~~python
class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'
~~~~

- `class CursoSerializer(serializers.ModelSerializer)`: Aqui, está sendo criado um serializer para o modelo Curso, que vai transformar os dados desse modelo em JSON e vice-versa.

- `class Meta`: Define metadados para o serializer, informando como ele funcionará. 

- `model = Turma`: Aqui ele está especificando para o serializer que ele irá trabalhar com o modelo Curso.

- `fields = ‘__all__’`: Diz para a serializer incluir todos os campos do modelo Curso quando ele transformar os dados.
