<div class="codo_accordion_container" itemscope itemtype="https://schema.org/FAQPage">
    {{#numberOfItems_each}}
    <div class="codo_accordion_item" itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
        <div class="codo_accordion_header">
            <div class="codo_title_wrapper">
                <div itemprop="name">
                    {codo_acc_title_{{numberOfItems_index}}:text default="FAQ Question #{{numberOfItems_index}}"}
                </div>
            </div>
            <i class="codo_accordion_icon">&#9660;</i>
        </div>
        
        <div class="codo_accordion_body" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
            <div itemprop="text">
                {codo_acc_content_{{numberOfItems_index}}:content default="FAQ Answer #{{numberOfItems_index}}"}
            </div>
        </div>
    </div>
    {{/numberOfItems_each}}
</div>