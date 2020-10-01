---
title: "Esta es una publicación con código"
date: "2020-09-18"
tags: ["programación", "código"]
type: "post"
author: "Me"
authorUrl: "https://github.com/davidlunadeleon/gatsby-blog-template"
lang: "es"
---

# Código chido

Agrego esta publicación para probar los fragmentos de código de los archivos de tipo markdown.

## Probando con C++

```cpp
int main() {
	std::cout << "¡Hola mundo!\n";
	return 0;
}
```

## Probando con C

```c
int main(){
	printf("¡Hola mundo!\n");
	return 0;
}
```

## Probando con Javascript

```js
const printHelloWorld = () => {
	console.log("¡Hola mundo!");
};

printHelloWorld();
```

## Prueba de fragmentos de código entre líneas

Este texto tendrá algunso fragmentos de código entre líneas, como éste: `cpp±std::cout << "Hello world\n";`. Necesito esto para asegurarme de que estas partes del texto no se vean raras. Son útiles cuando quiero nombrar funciones como `js±printHelloWorld();` o al nombrar variables como `cpp±int a;`. Si me lo preguntas, estos fragmentos de código entre líneas son realmente importantes. Es raro cuando lees una publicación y luego `cpp±int a = std::max(b, c);` aparece y termina viéndose mal y rompiendo el flujo del texto.

Esto es todo por esta publicación.
