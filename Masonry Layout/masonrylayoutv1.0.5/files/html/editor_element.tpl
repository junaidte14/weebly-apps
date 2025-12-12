{{! template for the Pinterest Columns.}}
<div class="ps-columns-{{numberOfColumns}} ps-items-{{numberOfItems}}">
	<div class="pinterest-style-items">
	    {{#numberOfItems_each}}
	        <div class="ps-item" style="border-radius: {{cardBorderRadius}}px;">
	        	{{#ddCards}}
	        		<div class="card-content" style="padding: 5px;">{cardddcontent_{{numberOfItems_index}}:content}</div>
	        	{{/ddCards}}
	        	{{^ddCards}}
		        	<div class="item-img" style="width: 100%; max-width: 100%;">{itemimage_{{numberOfItems_index}}:image}</div>
		        	<div class="item-content">
		        		{itemdescription_{{numberOfItems_index}}:text default="Column Description"}
		        		{itembutton_{{numberOfItems_index}}:button default="Column Button"}
		        	</div>
	        	{{/ddCards}}
	        </div>
	    {{/numberOfItems_each}}
	</div>
</div>
