{{! template for the CodoTabs.}}
<div class="codo_tabs_container text-align-{{textAlignment}}">
	<div class="codo_tabs">
		{{#numberOfTabs_each}}
			<button id="codo-{{uniqueId}}-default-tab-{{numberOfTabs_index}}" class="tablinks_{{uniqueId}} tablinks" 
			onclick="openCodoTabSection(event, 'codo_{{uniqueId}}_tabc_{{numberOfTabs_index}}');
			function openCodoTabSection(evt, codoTabSection) {
		    var i, tabcontent, tablinks;
		    tabcontent = document.getElementsByClassName('codo_tabcontent_{{uniqueId}}');
		    for (i = 0; i < tabcontent.length; i++) {
		        tabcontent[i].style.display = 'none';
		    }
		    tablinks = document.getElementsByClassName('tablinks_{{uniqueId}}');
		    for (i = 0; i < tablinks.length; i++) {
		        tablinks[i].className = tablinks[i].className.replace(' active', '');
		    }
		    document.getElementById(codoTabSection).style.display = 'block';
		    evt.currentTarget.className += ' active';}">
    			{codo_{{uniqueId}}_tab_{{numberOfTabs_index}}:text default="Tab #{{numberOfTabs_index}}"}
			</button>
        {{/numberOfTabs_each}}
    </div>

    {{#numberOfTabs_each}}
    <div id="codo_{{uniqueId}}_tabc_{{numberOfTabs_index}}" class="codo_tabcontent_{{uniqueId}} codo_tabcontent">
        {codo_{{uniqueId}}_tab_content_{{numberOfTabs_index}}:content default="Tab Content #{{numberOfTabs_index}}"}
    </div>
    {{/numberOfTabs_each}}

</div>

<script>
var numItems = document.querySelectorAll('.codo_tabs_container').length;
for (i = 1; i <= numItems; i++) {
    document.getElementById('codo-'+ i +'-default-tab-0').click();
}
</script>