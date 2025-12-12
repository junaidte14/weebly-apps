{{! template for the CodoTabs.}}
<div class="codo_tabs_container text-align-{{textAlignment}}">
	<div class="codo_tabs">
		{{#numberOfTabs_each}}
			<button id="codo-default-tab-{{numberOfTabs_index}}" class="tablinks">{codo_{{uniqueId}}_tab_{{numberOfTabs_index}}:text default="Tab #{{numberOfTabs_index}}"}
			</button>
        {{/numberOfTabs_each}}
    </div>

    {{#numberOfTabs_each}}
    <div id="codo_{{uniqueId}}_tabc_{{numberOfTabs_index}}" class="codo_tabcontent">
        {codo_{{uniqueId}}_tab_content_{{numberOfTabs_index}}:content}
    </div>
    {{/numberOfTabs_each}}

</div>

