function clickrule() {
			document.getElementById('openButton').addEventListener('click', function() {
			
			if(window.innerWidth >=768){
				document.getElementById('popupcontainer').style.display = 'block'
			}
			else{
				document.getElementById('popupcontainermobile').style.display = 'block'
			}
			});

			document.getElementById('closeButton').addEventListener('click', function() {
			  document.getElementById('popupcontainer').style.display = 'none';
			});
			
			document.getElementById('closeButtonMobile').addEventListener('click', function() {
			  document.getElementById('popupcontainermobile').style.display = 'none';
			});
			
		}
function refresh(){
        window.location.reload("Refresh")
      }		