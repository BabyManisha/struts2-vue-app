# Steps to integration this struts2-vue-app with any struts2 Application

## Step-1 To add vue scope to entire project add below scripts in any common .tag / .jsp file

### Add this before closing head tag (</head)>)
```
<%@include file="../../struts2-vue-app/dist/vueapp_header.jsp"%>
```

### Add this before closing body tag (</body)>)
```
<%@include file="../../struts2-vue-app/dist/vueapp_footer.jsp"%>
```

### Add this after opening body tag (<body>)

```
<div id="vueapp">
{{msg}}
<app page="from Structure tag" ></app>
<jsp:doBody/>
</div>
```

## Step-2 Now with above steps Vue will be able able accessible to entire project scope, just to check you can add below lines in .jsp filetag
```
{{msg}}
<about></about>
```

## Step-3 Now open check the UI

http://localhost:8080/

----
# For Devlopment Mode

## Step-1 Add below code before closing body tag (</body>) in any common .tag / .jsp file
```
<script type="text/javascript" src="/gui/vue-app/dist/js/app.js"></script>
<script type="text/javascript" src="/gui/vue-app/dist/js/chunk-vendors.js"></script>
```

## Step-2 Start vue-app in the serve mode

## Step-3 Use the nginx.conf file & start the nginx service

## Step-4 Now open check the UI

http://localhost:8888/


----

## To use the components as Library

### Step-1 Generate library files using 
`npm run build-lib`
### Step-2 Include dependency file in the  .html / .jsp / .tag files
```
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">


<div id="vueapp">
    <app></app>
    <about></about>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
	
<script src="/gui/vue-app/dist/about.umd.js"></script>
<script src="/gui/vue-app/dist/app.umd.js"></script>
<script>
    new Vue({
        components: {
            app: app,
            about: about
        },
        vuetify: new Vuetify(),
    }).$mount('#vueapp')
</script>
```
----

----

Tip: You know whom to ask if you get into any issues

## Happy Coding!!

--

Thanks

BabyManisha.Sunkara