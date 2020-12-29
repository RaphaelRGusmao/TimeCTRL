# TimeCTRL
### Controlador de Tempo
2018

![Icon](src/assets/icon/favicon.ico)

### Descrição
Aplicativo de entretenimento desenvolvido com [Ionic Framework](https://ionicframework.com/).
Com ele é possível "controlar o tempo" ao interagir com um *slider* que define a
velocidade do relógio, que pode ser positiva ou negativa `[-10x, 10x]`.
Ao pressionar o botão `RESET`, o relógio volta para o tempo presente, mas
continua a mesma velocidade escolhida.

### Execução
Primeiro é preciso instalar o [Ionic](https://ionicframework.com/docs/v3/intro/installation/)
com o seguinte comando no terminal:
```bash
$ npm install -g ionic cordova
```

Em seguida, vá para a pasta raiz do projeto e instale suas dependências:
```bash
$ npm install
```

Finalmente, para executar o app, digite:
```bash
$ ionic serve
```

Após isso, o app abrirá automaticamente em seu navegador.

### Códigos
Os códigos principais do app estão na pasta [src/pages/home/](src/pages/home/):
- [home.html](src/pages/home/home.html)
    - Estrutura HTML do app
- [home.scss](src/pages/home/home.scss)
    - Style Sheets Sass
    - Definições visuais do app
- [home.ts](src/pages/home/home.ts)
    - Algoritmos para o controle do relógio

### Demonstração

![Demo](demo.gif)
