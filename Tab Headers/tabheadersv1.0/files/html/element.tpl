{{! template for the TabHeaders.}}
<div class="tab_headers_container text-align-{{textAlignment}}">
	
    {{#numberOfTabs_each}}
    <div id="th_{{uniqueId}}_tabc_{{numberOfTabs_index}}" class="th_tabcontent_{{uniqueId}} th_tabcontent">
        {th_{{uniqueId}}_tab_content_{{numberOfTabs_index}}:content default="Tab Content #{{numberOfTabs_index}}"}
    </div>
    {{/numberOfTabs_each}}

    <div class="tab_headers">
		{{#numberOfTabs_each}}
			<button id="th-{{uniqueId}}-default-tab-{{numberOfTabs_index}}" class="th_tablinks_{{uniqueId}} th_tablinks" 
			onclick="openCodoThSection(event, 'th_{{uniqueId}}_tabc_{{numberOfTabs_index}}');
			function openCodoThSection(evt, ThTabSection) {
		    var i, thtabcontent, thtablinks;
		    thtabcontent = document.getElementsByClassName('th_tabcontent_{{uniqueId}}');
		    for (i = 0; i < thtabcontent.length; i++) {
		        thtabcontent[i].style.display = 'none';
		    }
		    thtablinks = document.getElementsByClassName('th_tablinks_{{uniqueId}}');
		    for (i = 0; i < thtablinks.length; i++) {
		        thtablinks[i].className = thtablinks[i].className.replace(' active', '');
		    }
		    document.getElementById(ThTabSection).style.display = 'block';
		    evt.currentTarget.className += ' active';}">
    			{th_{{uniqueId}}_tab_{{numberOfTabs_index}}:text default="Tab #{{numberOfTabs_index}}"}
			</button>
        {{/numberOfTabs_each}}
    </div>
</div>

<script>
var numItems = document.querySelectorAll('.tab_headers_container').length;
for (i = 1; i <= numItems; i++) {
    document.getElementById('th-'+ i +'-default-tab-0').click();
}
</script>