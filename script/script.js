function clickrule() {
			document.getElementById('openButton').addEventListener('click', function() {
			document.getElementById('popupcontainer').style.display = 'block';
			});

			document.getElementById('closeButton').addEventListener('click', function() {
			  document.getElementById('popupcontainer').style.display = 'none';
			});
		}
function refresh(){
        window.location.reload("Refresh")
      }		