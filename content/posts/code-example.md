---
title: "This is a post with code in it"
date: "2020-09-18"
tags: ["programming", "code"]
type: "post"
author: "Me"
authorUrl: "https://github.com/davidlunadeleon/gatsby-blog-template"
---

# Post with cool code

I'm adding this post to test the rendering of code snippets in markdwon files.

## Testing with C++

```cpp
int main() {
	std::cout << "Hello world!\n";
	return 0;
}
```

## Testing with C

```c
int main(){
	printf("Hello world!\n");
	return 0;
}
```

## Testing with Javascript

```js
const printHelloWorld = () => {
	console.log("Hello world!");
};

printHelloWorld();
```

## Test inline code fragments

This text will have some inline code fragments like this one: `cpp±std::cout << "Hello world\n";`. I need this to be sure that these parts of the text don't look weird. These are useful when I want to use the name of a function like `js±printHelloWorld();` or when naming a variable like `cpp±int a;`. This inline code fragments are really important, if you ask me. It is weird when you are scrolling a post and then `cpp±int a = std::max(b, c);` appears and ends up looking ugly and breaking the flow of the text.

This is it for this test posts.
