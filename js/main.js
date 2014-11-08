// $("nav select").change(function() {
//   window.location = $(this).find("option:selected").val();
// });

<script type="text/javascript">
function GotoPage()
{
   var loc = document.getElementById('opts').value;
   if(loc!="0")
   window.location = loc;
}
</script>