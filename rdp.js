if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
    });
}

function myInitCode() {
    var test = document.getElementById("remote_desktop:/Common/RDP")
    console.log(test);
    }
