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



Note: Use nginx.conf to run this in dev mode. (JFYI -This needs to be tested)

----

Tip: You know whom to ask if you get into any issues

## Happy Coding!!

--

Thanks

BabyManisha.Sunkara