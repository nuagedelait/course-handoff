# CSS selectors

To apply css on html, we use css selectors to target html nodes.

## Main selectors

---

### node name

#### css
```
  div {
    width:50px;
    height:50px;
    background-color:#000;
  }
```

#### html
```
<div></div>
```

#### result
![ex2](/images/select_ex1.png)

---

### node class

#### css
```
  .myClass {
    background-color:#000;
  }
```

#### html
```
<div class="myClass"></div>
```


### node class

#### css
```
  .myClass {
    width:150px;
    height:1em;
    background-color:#00FF00;
  }
```

#### html
```
<div class="myClass"></div>
```

#### result
![ex2](/images/select_ex2.png)

---

### node id

#### css
```
  #myId {
    width:2em;
    height:80px;
    background-color:#0000FF;
  }
```

#### html
```
<div id="myId"></div>
```

#### result
![ex2](/images/select_ex3.png)

---

### Parent node filter

css

```
div a {
  color:#FF00FF;
}
```

html
```
<div>
  <a href="#">Link</a>
</div>
```
<a href="#" syle="color:#FF00FF">Link</a>
