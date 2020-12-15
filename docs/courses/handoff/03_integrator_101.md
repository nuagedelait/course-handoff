# Web integrator 101

A web integrator is more a designer than a developer

## HTML

#### - Html code is not a program, it's only document description and links

#### - Based on XML structure (Document Object Model or DOM)

```
<[tagName] [attributeName]="[attributeValue]">[tagContent]<[tagName]>
```

exemple :

```
<body class="bodyClass">The content of the website<body>
```

nested exemple :

```
<body class="bodyClass">
  <header class="main_header"></header>
  <content id="main_content"></content>
  <footer></footer>
<body>
```

#### - id must be unique on the same page

#### - Ruled by the W3C

https://www.w3.org/


## CSS

#### - CSS code is not a program, it adds style to DOM éléments

#### - Need a `selector`

tagName : directly the tagName
class : .className
id : #idName

#### - Syntax

```
selector {
  styleAttribute1 : styleValue1;
  styleAttribute2 : styleValue3;
  styleAttribute3 : styleValue3;
}
```

Exemples :

```
.main_header {
  display : block;
}
#main_content{
  color:#000000;
}
footer{
  position:absolute;
  bottom:0;
}
```

#### - Ruled by the W3C

List of all attributes : [w3schools](https://www.w3schools.com/cssref/)


#### - CSS tools

[list of tools](https://medium.com/better-programming/8-must-use-css-tools-e526f81835a0)

## Javascript

#### - Javascript is a program, so any web integrator using js is a developer

#### - Web code is not compiled (translated into a machine language), it's interpreted by the browser

Be aware of compatibility errors

#### - JS uses variables

Variables are used to save temporary data

![Drawer](https://st2.depositphotos.com/4060975/8916/v/600/depositphotos_89164638-stock-illustration-drawer-colored-vector-illustration.jpg)

#### - JS uses function

Functions transform data

![Factory](https://img.favpng.com/20/4/7/portable-network-graphics-clip-art-illustration-factory-image-png-favpng-YyfMM3ZcnYXKYzgi7pK7q2tY7.jpg)

#### - JS uses events

![Secret](https://thumbs.dreamstime.com/b/whisper-talk-sketch-engraving-vector-whisper-hand-near-mouth-to-ear-sketch-line-art-engraving-vector-illustration-tee-shirt-158424678.jpg)
