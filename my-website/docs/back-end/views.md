---
sidebar_position: 3
---

# Views

Dentro do arquivo `views.py` são definidas todas as funções que serão utilizadas na API.

#### Importações feitas para a utilização de recursos e bibliotecas necessários para o funcionamento da aplicação:

``` bash
from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
```

### def listar_professores

O decorador api_view que aparece no início da view, serve para definir o método que será aceito pela view. Já o decorador permission_classes tem a função de permitir que apenas usuários autenticados tenham acesso aquela funcionalidade definida pela view. A view listar_professores serve para listar todos os professores cadastrados no banco de dados caso o método de requisição seja GET. Se o método de requisição for POST, a view tem a função de cadastrar um novo usuário no banco de dados, que retorna o código 201 caso obtenha sucesso. Caso a requisição não seja efetuada com sucesso, um código 400 é retornado.

``` bash
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def listar_professores(request):
    if request.method == 'GET':
        queryset = Cadastro.objects.all()
        serializer = CadastroSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CadastroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

### def buscar_nome_professor

Na função buscar_nome_professor, o decorador api_view serve para limitar que apenas requisições GET e POST e o decorador permission_classes serve para limitar que apenas usuários autenticados tenham acesso a funcionalidade desenvolvida na view. 
A função pega um dado inserido pelo usuário e primeiro verifica se esse termo existe. Caso exista, todos os dados cadastrados são filtrados para que apareçam apenas aqueles que correspondem ao dado inserido pelo usuário anteriormente. Caso o termo não exista, todos os dados cadastrados são retornados para o usuário, sem distinção. Depois, a função retorna um código 200 para informar que a requisição foi feita com sucesso. 

``` bash
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def buscar_nome_professor(request):
    termo = request.get('nome', '')
    if termo:
        professores = Cadastro.objects.filter(nome_incontains = termo)
    else:
        professores = Cadastro.objects.all()
    
    serializer = CadastroSerializer(professores, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
```

### class ProfessoresView

A class ProfessoresView é uma classe genérica que faz a implementação automática dos métodos GET e POST. Caso o método de requisição seja GET, a view lista todos os dados cadastrados no banco de dados, e caso seja POST o cadastro de um novo usuário é feito. O serializer CadastroSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view.

``` bash
class ProfessoresView(ListCreateAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
```

### class ProfessoresDetailView

Essa view é utilizada para exibir, atualizar ou excluir as informações de um dado específico. Usando o método GET, a view retorna as informações de um dado específico, com o método PUT, os dados são todos atualizados, com o método PATCH, os dados podem ser atualizados parcialmente, e com o DELETE, os dados são excluídos. O serializer CadastroSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view. 

``` bash
class ProfessoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
```

### class ProfessoresSearchView

Essa view tem a função de filtrar os registros cadastrados no banco de dados por meio de uma informação do usuário. O search_fields define os campos que serão usados como parâmetros para o filtro de busca. DjangoFilterBackend e SearchFilter são as bibliotecas utilizadas para que a pesquisa e filtragem funcionem. 

``` bash
class ProfessoresSearchView(ListAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nome']
```

### class DisciplinasView

A class DisciplinasView é uma classe genérica que faz a implementação automática dos métodos GET e POST. Caso o método de requisição seja GET, a view lista todos os dados cadastrados no banco de dados, e caso seja POST o cadastro de um novo usuário é feito. O serializer DisciplinaSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view. 

``` bash
class DisciplinasView(ListCreateAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

### class DisciplinaDetailView

Essa view é utilizada para exibir, atualizar ou excluir as informações de um dado específico. Usando o método GET, a view retorna as informações de um dado específico, com o método PUT, os dados são todos atualizados, com o método PATCH, os dados podem ser atualizados parcialmente, e com o DELETE, os dados são excluídos. O serializer CadastroSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view. 

``` bash
class DisciplinaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

### class AmbientesView

A class AmbientesView é uma classe genérica que faz a implementação automática dos métodos GET e POST. Caso o método de requisição seja GET, a view lista todos os dados cadastrados no banco de dados, e caso seja POST o cadastro de um novo usuário é feito. O serializer AmbienteSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view. 

``` bash
class AmbientesView(ListCreateAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]
```

### class AmbienteDetailView

Essa view é utilizada para exibir, atualizar ou excluir as informações de um dado específico. Usando o método GET, a view retorna as informações de um dado específico, com o método PUT, os dados são todos atualizados, com o método PATCH, os dados podem ser atualizados parcialmente, e com o DELETE, os dados são excluídos. O serializer AmbienteSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view. 

``` bash
class AmbienteDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]
```

### class CursosView

A class CursosView é uma classe genérica que faz a implementação automática dos métodos GET e POST. Caso o método de requisição seja GET, a view lista todos os dados cadastrados no banco de dados, e caso seja POST o cadastro de um novo usuário é feito. O serializer CursoSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view.

``` bash
class CursosView(ListCreateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]
```

### class CursoDetailView

Essa view é utilizada para exibir, atualizar ou excluir as informações de um dado específico. Usando o método GET, a view retorna as informações de um dado específico, com o método PUT, os dados são todos atualizados, com o método PATCH, os dados podem ser atualizados parcialmente, e com o DELETE, os dados são excluídos. O serializer CursoSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view.

``` bash
class CursoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]
```

### class TurmasView

A class TurmasView é uma classe genérica que faz a implementação automática dos métodos GET e POST. Caso o método de requisição seja GET, a view lista todos os dados cadastrados no banco de dados, e caso seja POST o cadastro de um novo usuário é feito. O serializer TurmaSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view.

``` bash
class TurmasView(ListCreateAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]
```

### class TurmaDetailView

Essa view é utilizada para exibir, atualizar ou excluir as informações de um dado específico. Usando o método GET, a view retorna as informações de um dado específico, com o método PUT, os dados são todos atualizados, com o método PATCH, os dados podem ser atualizados parcialmente, e com o DELETE, os dados são excluídos. O serializer TurmaSerializer é utilizado para converter os dados do banco de dados em JSON e a permission_classes define que apenas usuários que estejam autenticados possam acessar a view. 

``` bash
class TurmaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]
```

Agora você pode seguir para as urls e possibilitar o acesso as suas views já criadas.