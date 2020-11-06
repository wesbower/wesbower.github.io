var observer = new MutationObserver( function( mutations ) {
	mutations.forEach( function( { type, target } ) {
  	if ( type === 'attributes' && target.tagName.toLowerCase() === 'iframe' ) {
    	target.style.height = target.height + 'px';
    }
  } );
} );

observer.observe( document.querySelector( '.instagram-wrapper'), { attributes: true, childList: true, subtree: true } );