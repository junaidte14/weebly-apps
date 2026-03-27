<!--/*Credits: https://www.w3schools.com/howto/howto_js_vertical_tabs.asp*/-->
{{! template for the CodoTabs.}}
<div class="codo_vtabs_container text-align-{{textAlignment}}">
	<div class="codo_vtabs">
		{{#numberOfTabs_each}}
			<button id="codo-{{uniqueId}}-default-vtab-{{numberOfTabs_index}}" class="vtablinks_{{uniqueId}} vtablinks" 
			onclick="openCodoVTabSection(event, 'codo_{{uniqueId}}_vtabc_{{numberOfTabs_index}}');
			function openCodoVTabSection(evt, codoVTabSection) {
		    var i, vtabcontent, vtablinks;
		    vtabcontent = document.getElementsByClassName('codo_vtabcontent_{{uniqueId}}');
		    for (i = 0; i < vtabcontent.length; i++) {
		        vtabcontent[i].style.display = 'none';
		    }
		    vtablinks = document.getElementsByClassName('vtablinks_{{uniqueId}}');
		    for (i = 0; i < vtablinks.length; i++) {
		        vtablinks[i].className = vtablinks[i].className.replace(' active', '');
		    }
		    document.getElementById(codoVTabSection).style.display = 'block';
		    evt.currentTarget.className += ' active';}">
    			{codo_{{uniqueId}}_tab_{{numberOfTabs_index}}:text default="Tab #{{numberOfTabs_index}}"}
			</button>
        {{/numberOfTabs_each}}
    </div>

    {{#numberOfTabs_each}}
    <div id="codo_{{uniqueId}}_vtabc_{{numberOfTabs_index}}" class="codo_vtabcontent_{{uniqueId}} codo_vtabcontent">
        {codo_{{uniqueId}}_tab_content_{{numberOfTabs_index}}:content default="Tab Content #{{numberOfTabs_index}}"}
    </div>
    {{/numberOfTabs_each}}

</div>

<script>
var numItems = document.querySelectorAll('.codo_vtabs_container').length;
for (i = 1; i <= numItems; i++) {
    document.getElementById('codo-'+ i +'-default-vtab-0').click();
}
</script>