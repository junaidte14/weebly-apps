<!--/*Credits: https://weeblytricks.weebly.com/how-to-create-a-mega-menu-in-weebly.html*/-->
{{! template for the Mega Menu.}}
<div class="codo-mega-menu">
	{{#numberOfMenuItems_each}}
    	<div class="codo-mega-menu-style codo-mega-menu-item" style="border:1px solid #000; padding: 20px;">{mega-menu-{{numberOfMenuItems_index}}:content}</div>
    {{/numberOfMenuItems_each}}
</div>