{{! Enhanced Timeline v2.0.0 - Frontend Template }}
<div class="codotimeline_container layout-{{timelineLayout}} animation-{{animationStyle}}" 
     data-animation="{{animationStyle}}"
     style="background-color: {{tmBgColor}}; margin-top: {{topMargin}}px; margin-bottom: {{bottomMargin}}px;">

    <div class="codo_timeline" 
         data-layout="{{timelineLayout}}"
         data-hover="{{hoverEffect}}">
        {{#numberOfElements_each}}
            <div class="codo_tm_container timeline-item" 
                 data-index="{{numberOfElements_index}}"
                 style="padding-top: {{itemSpacing}}px; padding-bottom: {{itemSpacing}}px;">
                <div class="codo_tm_content" 
                     style="background-color: {{tmContentBGColor}}; 
                            border-radius: {{contentBorderRadius}}px;
                            padding: {{contentPadding}}px;">
                    {codo_elementct_{{numberOfElements_index}}:content default="Timeline Item {{numberOfElements_index}}. Add your content here. Click to edit this timeline entry and customize it with your own text, images, and formatting."}
                </div>
            </div>
        {{/numberOfElements_each}}
    </div>
</div>