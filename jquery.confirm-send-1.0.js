/*!
 * jQuery confirm-send plugin
 * Version 1.00 (30-Abr-2015)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: https://github.com/luislun/confirm-send
 * GNU GENERAL PUBLIC LICENSE Version 2
 *
 */

 $(function() {
 	$.widget( "custom.confirmSend", {
		options: {
			message: '',
			confirmResponse: false
		},
		_create: function() {
			this.tagElement = this.element.tagName;
			this.setEvents();
		},
		showMessage: function() {
			return confirm( this.options.message );
		},
		setEvents: function(){
			var that = this;

			this.element.click( function() {
				if ( $( this )[ 0 ].tagName == 'A' ){
					if( !that.showMessage() ){
						return false;
					}
				}
			});
		}
	});
});
