{{! Exit Intent Popup — Editor View }}
{{! The popup fires on the live site based on your trigger settings. }}
{{! Use this area to design your popup content and upload your image. }}

<div class="codo_eip_editor_preview">

    {{! Image upload area — always shown so user can upload easily }}
    <span class="codo_eip_editor_image_label">Popup Image</span>
    <div class="codo_eip_editor_image_area">
        {codo_eip_image:image}
    </div>
    <span class="codo_eip_editor_image_hint">
        Set "Image Display Style" in settings to <strong>cover</strong> (banner above content)
        or <strong>background</strong> (fills entire popup). Leave as <strong>none</strong> to hide the image.
    </span>

    {{! Content area }}
    <div class="codo_eip_modal_editor" style="background-color: {{modalBgColor}};">
        <div class="editor-label">Popup Content Area</div>
        {codo_eip_content:content default="Add your popup content here — text, images, buttons, anything."}
    </div>

    {{! Settings reminder }}
    <div class="codo_eip_editor_info">
        <strong>Trigger:</strong> {{triggerMode}}
        &nbsp;·&nbsp;
        <strong>Delay:</strong> {{triggerDelay}}s
        &nbsp;·&nbsp;
        <strong>Scroll:</strong> {{triggerScroll}}%
        &nbsp;·&nbsp;
        <strong>Suppress:</strong> {{cookieDays}} day(s)
        &nbsp;·&nbsp;
        <strong>Image:</strong> {{imageStyle}}
    </div>

</div>
