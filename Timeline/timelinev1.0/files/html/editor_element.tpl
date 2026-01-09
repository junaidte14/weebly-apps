{{! template for the Timeline.}}
<div class="codotimeline_container">

    <div class="codo_timeline">
        {{#numberOfElements_each}}
            <div class="codo_tm_container left">
                <div class="codo_tm_content">
                    {codo_elementct_{{numberOfElements_index}}:content default="Element #{{numberOfElements_index}} Content"}
                </div>
            </div>
        {{/numberOfElements_each}}
        
    </div>
    
</div>
