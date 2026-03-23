{{! Exit Intent Popup }}
{{! Trigger mode, delay, scroll threshold and cookie lifetime are read }}
{{! from data attributes by element.js — no inline script needed. }}

<div class="codo_eip_wrapper"
     data-trigger-mode="{{triggerMode}}"
     data-delay="{{triggerDelay}}"
     data-scroll="{{triggerScroll}}"
     data-cookie-days="{{cookieDays}}"
     data-image-style="{{imageStyle}}">

    <div class="codo_eip_overlay"></div>

    <div class="codo_eip_modal" role="dialog" aria-modal="true">

        <button class="codo_eip_close" aria-label="Close">&times;</button>

        {{! Image area — visible only when imageStyle is cover or background }}
        <div class="codo_eip_image_wrap">
            {codo_eip_image:image}
        </div>

        <div class="codo_eip_content">
            {codo_eip_content:content default="Add your popup content here — text, images, buttons, anything."}
        </div>

    </div>
</div>
