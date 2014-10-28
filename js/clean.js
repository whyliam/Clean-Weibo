var myinfo = $('#v6_pl_rightmod_myinfo').html();
var leftnav = $('#v6_pl_leftnav_group').html();
$('#v6_pl_leftnav_group').html('');

$('#v6_pl_rightmod_myinfo').html('');
if (myinfo != undefined) {
    $('#v6_pl_leftnav_group').html(myinfo + leftnav);
}
else{
    $('#v6_pl_leftnav_group').html(leftnav);
}