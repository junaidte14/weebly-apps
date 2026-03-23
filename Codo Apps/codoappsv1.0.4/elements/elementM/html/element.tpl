<div class="codo_countdown_wrapper" style="width: 100%; text-align: {{timerAlignment}};">
    <div class="codo_countdown_timer">
        {{#showDays}}
        <div class="codo_countdown_block">
            <div class="codo_countdown_flip">
                <span class="codo_countdown_num codo_cd_days">00</span>
            </div>
            <div class="codo_countdown_label">DAYS</div>
        </div>
        <div class="codo_countdown_sep">:</div>
        {{/showDays}}

        <div class="codo_countdown_block">
            <div class="codo_countdown_flip">
                <span class="codo_countdown_num codo_cd_hours">00</span>
            </div>
            <div class="codo_countdown_label">HOURS</div>
        </div>
        <div class="codo_countdown_sep">:</div>

        <div class="codo_countdown_block">
            <div class="codo_countdown_flip">
                <span class="codo_countdown_num codo_cd_minutes">00</span>
            </div>
            <div class="codo_countdown_label">MINUTES</div>
        </div>
        <div class="codo_countdown_sep">:</div>

        <div class="codo_countdown_block">
            <div class="codo_countdown_flip">
                <span class="codo_countdown_num codo_cd_seconds">00</span>
            </div>
            <div class="codo_countdown_label">SECONDS</div>
        </div>
    </div>

    <div class="codo_countdown_expired" style="display:none;">
        {codo_cd_expired_msg:text default="This offer has expired."}
    </div>
</div>