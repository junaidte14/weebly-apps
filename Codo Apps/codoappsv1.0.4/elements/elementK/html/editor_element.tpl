{{! template for the Accordion/FAQ editor view.}}
<div class="codo_accordion_container">
    {{#numberOfItems_each}}
    <div class="codo_accordion_item">
        <div class="codo_accordion_header active">
            <div class="codo_title_wrapper">
                {codo_acc_title_{{numberOfItems_index}}:text default="FAQ Question #{{numberOfItems_index}}"}
            </div>
            <i class="codo_accordion_icon">&#9660;</i>
        </div>
        <div class="codo_accordion_body">
            {codo_acc_content_{{numberOfItems_index}}:content default="FAQ Answer #{{numberOfItems_index}}"}
        </div>
    </div>
    {{/numberOfItems_each}}
</div>
