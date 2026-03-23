{{! Any Slider — Editor View }}
{{! All slides are stacked vertically so you can edit each one freely. }}
{{! The slider and navigation only appear on the live published site. }}

<div class="codo_slider_wrapper">
    <div class="codo_slider_viewport">
        <div class="codo_slider_track">
            {{#numberOfSlides_each}}
            <div class="codo_slider_slide" data-slide-num="{{numberOfSlides_index}}">
                {slider_content_{{numberOfSlides_index}}:content default="Add your slide content here — text, images, buttons, anything."}
            </div>
            {{/numberOfSlides_each}}
        </div>
    </div>
</div>
