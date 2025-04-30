---
sidebar_position: 5
---

# Urls

### Visão Geral das Urls
~~~python 
from django.urls import path
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('professores', listar_professores),
    path('prof', ProfessoresView.as_view()),
    path('id/<int:pk>', ProfessoresDetailView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('buscar/nome/', buscar_nome_professor),
    path('search/', ProfessoresSearchView.as_view()),
    
    path('disciplinas', DisciplinasView.as_view()),
    path('disciplina/<int:pk>', DisciplinaDetailView.as_view()),

    path('ambientes', AmbientesView.as_view()),
    path('ambiente/<int:pk>', AmbienteDetailView.as_view()),

    path('turmas', TurmasView.as_view()),
    path('turma/<int:pk>', TurmaDetailView.as_view()),

    path('cursos', CursosView.as_view()),
    path('curso/<int:pk>', CursoDetailView.as_view()),

]
~~~

***

### Importações

~~~python 
from django.urls import path
from .views import *
~~~

Esse trecho do projeto do Django configura rotas
- A primeira linha importa a função path que define os caminhos das Urls no Django.
- A segunda linha importa todas as classes do arquivo views.


~~~python
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
~~~

- A primeira linha está importando o módulo `rest_framework_simplejwt.views`.
- A segunda linha é uma view que serve para obter o token de acesso e o token de visualização.
- A terceira linha é uma view que serve para obter um novo token de acesso usando o token de atualização


### Configuração de Rotas
~~~python
urlpatterns = [
    path('professores', listar_professores),
    path('prof', ProfessoresView.as_view()),
    path('id/<int:pk>', ProfessoresDetailView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('buscar/nome/', buscar_nome_professor),
    path('search/', ProfessoresSearchView.as_view()),
    
    path('disciplinas', DisciplinasView.as_view()),
    path('disciplina/<int:pk>', DisciplinaDetailView.as_view()),

    path('ambientes', AmbientesView.as_view()),
    path('ambiente/<int:pk>', AmbienteDetailView.as_view()),

    path('turmas', TurmasView.as_view()),
    path('turma/<int:pk>', TurmaDetailView.as_view()),

    path('cursos', CursosView.as_view()),
    path('curso/<int:pk>', CursoDetailView.as_view()),

]
~~~

`urlpatterns` é uma lista de rotas da aplicação. Cada path define um caminho da API e qual função ou classe será executada quando aquele caminho for acessado.
- Na primeira linha do path, quando o usuário acessar /professores, a função listar_professores será chamada.
- Na segunda linha do path, quando acessar /prof, vai chamar a classe ProfessoresView, usando .as_view().
- Na terceira linha do path, Essa rota espera um parâmetro dinâmico chamado pk.
- A quarta linha do path é uma rota de login com JWT.
- A quinta linha do path é uma rota para renovar o token JWT.
- A sexta linha do path é uma rota que chama uma função.
- A sétima linha do path é uma rota para buscas mais genéricas ou avançadas.
