<!--/*Credits: https://www.w3schools.com/howto/howto_js_vertical_tabs.asp*/-->
{{! template for the VerticalTabs.}}
<div class="codo_vtabs_container text-align-{{textAlignment}}">
	<div class="codo_vtabs">
		{{#numberOfTabs_each}}
			<button id="codo-default-vtab-{{numberOfTabs_index}}" class="vtablinks">{codo_{{uniqueId}}_tab_{{numberOfTabs_index}}:text default="Tab #{{numberOfTabs_index}}"}
			</button>
        {{/numberOfTabs_each}}
    </div>

    {{#numberOfTabs_each}}
    <div id="codo_{{uniqueId}}_vtabc_{{numberOfTabs_index}}" class="codo_vtabcontent">
        {codo_{{uniqueId}}_tab_content_{{numberOfTabs_index}}:content}
    </div>
    {{/numberOfTabs_each}}

</div>

