const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api'

function get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}