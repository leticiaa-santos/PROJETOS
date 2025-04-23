---
sidebar_position: 1
---

# Tutorial Introdução

Vamos descobrir como iniciar um projeto no Django

## Começando

Vamos começar **criando um novo projeto**.

### O que você vai precisar

- [Python](https://www.python.org/downloads/.) version 3.11 ou maior:

## Criando um novo projeto

Vamos criar um novo projeto usando o **django**.

### Sobre o projeto

O projeto tem como propósito gerenciar os dados administrativos e acadêmicos de professores. Com ele, é possível:

* Cadastrar professores com dados como nome, e-mail, celular e ocupação.
* Gerenciar disciplinas, cursos, turmas e ambientes.
* Proteger rotas com autenticação JWT.
* Fazer buscas por nome e código de professores e outros recursos.

### Criação do projeto

Você pode digitar esses comandos no prompt de comando, powershell, terminal, ou qualquer outro terminal que possibilite a integração com seu editor de código.

**1º-** Crie uma pasta no seu computador para criar o projeto
```bash
mkdir projeto_django
```
```bash
cd projeto_django
```

***
**2º-** No prompt de comando, na sua pasta, crie um ambiente virtual:
```bash
python -m venv nome_do_seu_ambiente
```

***
**3º-** Ative o seu ambiente
```bash
.\env\Scripts\activate
```

***
**4º-** Instalando o Django para ser possível a criação do projeto:
```bash
pip install djangorestframework
```

***
**5º-** Instalando o Django JWT (JSON Web Token) para a geração de tokens para autenticação dos usuários
```bash
pip install djangorestframework-simplejwt
```

***
**6º-** Instalando o django filter, ele permite que os usuários filtrem um conjunto de consultas com base nos campos de um modelo e exibe um formulário que possibilita isso
```bash
pip install django-filter
```

***
**7º-** Criando o projeto:
```bash
django-admin startproject meu_site
```

A estrutura que você verá será:
```shell
  projeto_django/
    ├── manage.py
    ├── meu_site
        ├──__init__.py
        ├──settings.py
        ├──urls.py
        ├──asgi.py
        └──wsgi.py
```

* **[manage.py:](https://docs.djangoproject.com/en/5.2/ref/django-admin/)** permite interagir com este projeto Django de várias maneiras.

* **meu_site/[settings.py](https://docs.djangoproject.com/en/5.2/topics/settings/)** todas as configurações do projeto estão neste arquivo. 

* **meu_site/[urls.py](https://docs.djangoproject.com/en/5.2/topics/http/urls/)** as declarações das urls do seu projeto, funciona como um índice.

Os outros arquivos não serão utilizados diretamente nesse projeto, mas é possível saber mais na [documentação do django](https://docs.djangoproject.com/en/5.2/intro/tutorial01/)

***
**8º-** Criação da aplicação:
```bash
python manage.py startapp meu_app
```

A estrutura que você verá será:
```shell
  meu_app/
    ├──__init__.py
    ├──admin.py
    ├──apps.py
    ├──models.py
    ├──tests.py
    └──views.py
```

Agora você pode começar o desenvolvimento do seu projeto seguindo os passos de cada arquivo.
