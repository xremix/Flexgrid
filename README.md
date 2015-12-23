# Flexgrid
A CSS3 flex box based grid

THIS PROJECT IS CURRENTLY `WIP` AND CAN COINTAIN BUGS

[Demo](https://rawgit.com/xremix/Flexgrid/master/demo.html)

##Features
- CSS Only
- Super Lightweight (Only 3KB)
- Rows will size to the same height

##Browser compatiblity

All modern web browsers, IE9 and later are supported.
For more details check [Can I use.com](http://caniuse.com/#search=flex)

##Usage
####Basic
```HTML
<div class="flexgrid">
	<div class="flex-xs-1">
		<div class="item-content">XS 1</div>
	</div>
	<div class="flex-xs-2">
		<div class="item-content">XS 2</div>
	</div>
	<div class="flex-xs-3">
		<div class="item-content">XS 3</div>
	</div>
	<div class="flex-xs-4">
		<div class="item-content">XS 4</div>
	</div>
	<div class="flex-xs-2">
		<div class="item-content">XS 2</div>
	</div>
</div>
```

####Offset
```HTML
<div class="flexgrid">
	<div class="flex-xs-6 flex-xs-offset-6">
		<div class="item-content">XS 1</div>
	</div>
	<div class="flex-xs-5 flex-xs-offset-7">
		<div class="item-content">XS 1</div>
	</div>
	<div class="flex-xs-4 flex-xs-offset-8">
		<div class="item-content">XS 1</div>
	</div>
</div>
```

##Documentation
###Breakpoints

Flexgrid is using the same Breakpoints as Boostrap 3

| Class        | Size           |
| ------------- |:-------------:|
| flex-xs-      | > 768px |
| flex-sm-      | < 768px |
| flex-md-      | < 992px |
| flex-lg-      | < 1200px |

###Offset
The offset works the same way than the grid itself `flex-xs-offset-`