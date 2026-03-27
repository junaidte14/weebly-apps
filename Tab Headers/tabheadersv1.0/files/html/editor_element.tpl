{{! template for the Tab Headers.}}
<div class="tab_headers_container text-align-{{textAlignment}}">

    {{#numberOfTabs_each}}
    <div id="th_{{uniqueId}}_tabc_{{numberOfTabs_index}}" class="th_tabcontent">
        {th_{{uniqueId}}_tab_content_{{numberOfTabs_index}}:content}
    </div>
    {{/numberOfTabs_each}}

    <div class="tab_headers">
        {{#numberOfTabs_each}}
            <button id="th-default-tab-{{numberOfTabs_index}}" class="th_tablinks">{th_{{uniqueId}}_tab_{{numberOfTabs_index}}:text default="Tab #{{numberOfTabs_index}}"}
            </button>
        {{/numberOfTabs_each}}
    </div>
    
</div>

