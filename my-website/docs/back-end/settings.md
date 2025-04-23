---
sidebar_position: 6
---

# Settings

Essas são as alterações necessárias para o arquivo `settings.py`

### import para o uso do Token

``` bash
from datetime import timedelta
```

### INSTALLED_APPS 

Adicione as seguintes linhas

``` bash
'rest_framework',
'api',
'rest_framework_simplejwt',
"corsheaders",
'django_filters',
```

### REST_FRAMEWORK

Em qualquer linha do arquivo, adicione esse código para o funcionamento do Django rest framework

``` bash
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
```

### SIMPLE_JWT

Também pode ser colocado em qualquer parte do código, e esse código é para o funcionamento do simple JWT

``` bash
SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": ("Bearer",),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}
```

### MIDDLEWARE

É necessário adicionar essa linha de código para o funcionamento da aplicação

``` bash
'corsheaders.middleware.CorsMiddleware',
```