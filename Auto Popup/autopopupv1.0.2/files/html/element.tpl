{{! template for the Auto Popup Weebly app.}}
<div class="codo-auto-popup">
	<div id="codoPopup" class="codoPopup_design">
		<div class='codo-modal-content'>
			<div style='text-align: right;'>
				<a href="javascript:;" onclick="$('#codoPopup').hide();" style="background-color:{{btnBgColor}};padding:{{btnPadding}}px;border-radius:{{btnBorderRadius}}px;text-decoration:none;"><img src="//cdn2.editmysite.com/images/customer-accounts/close-icon.svg" alt="Close"></a>
			</div>
			<div class='codoPopup_content'>
				{codoPopup:content}
			</div>
		</div>
	</div>
</div>