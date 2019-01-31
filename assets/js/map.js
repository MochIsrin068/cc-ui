var curentData = [];
var kecamatanData = [
  {'nama_kecamtan':'Abeli','jumlah_aset':3},
  {'nama_kecamtan':'Barunga','jumlah_aset':5},
  {'nama_kecamtan':'Kadia','jumlah_aset':2},
  {'nama_kecamtan':'Kambu','jumlah_aset':1},
  {'nama_kecamtan':'Kendari Barat','jumlah_aset':6},
  {'nama_kecamtan':'Kendari','jumlah_aset':2},
  {'nama_kecamtan':'Mandonga','jumlah_aset':4},
  {'nama_kecamtan':'Poasia','jumlah_aset':5},
  {'nama_kecamtan':'Puuwatu','jumlah_aset':2},
  {'nama_kecamtan':'Wua-Wua','jumlah_aset':6},
];
var listData = new Vue({
  el: '#listData',
  data: {
    search: '',
    asets: curentData
  },
  computed: {
    filteredList() {
      return this.asets.filter(post => {
        return post.nama_grup.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})
var listKecamatan = new Vue({
  el: '#listKecamatan',
  data: {
    kecamatans: kecamatanData
  }
})
function initMap() {
  var mapData = JSON.parse(localStorage.mapData);

  var kendari = {lat: -3.9773101, lng: 122.5153881};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: kendari
  });

  var time = 5000/mapData.length;
  var i = 0;
  var refreshIntervalId = setInterval(function(){


        var j = i;
        var name = 'marker_' + i;
        var latlong = mapData[i].kordinat.split(',');
        var latitude = parseFloat(latlong[0]);
        var longitude = parseFloat(latlong[1]);
        curentData.push(mapData[i]);
        window[name] = new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          animation: google.maps.Animation.DROP,
          title: mapData[i].keterangan
        });

        window[name].addListener('click', function() {
          //showData.innerHTML = JSON.stringify(curentData[j]);

          if (window[name].getAnimation() !== null) {
             window[name].setAnimation(null);
           } else {
             window[name].setAnimation(google.maps.Animation.BOUNCE);
           }

          showData(j);
          clearBounce(j);
        });
        i++;

        if(i==mapData.length){
          clearInterval(refreshIntervalId);
        }
    }, time);



  function clearBounce(j){
    for (var k = 0; k < i; k++) {
      var ClearName = 'marker_' + k;
      if(k!=j){
        window[ClearName].setAnimation(null)
      }
    }

  }
}

function showList(){
  var showData = document.getElementById('showData');
  var result = document.getElementById('result');

  //showData.innerHTML = JSON.stringify(curentData[j]);
  showData.classList.add("slideOutLeft");
  result.classList.remove("slideOutRight");
  setTimeout(function(){
    showData.style.display = 'none';
    result.style.display = 'flex';
  },600);


}

function showData(j) {
  var arrVar  = [
                'foto',
                'nama_grup',
                'nama_kecamatan',
                'jenis_barang',
                'keterangan',
                'no_kode_barang',
                'kondisi_bangunan',
                'asal_usul',
                'kordinat',
                'letak',
                'status_tanah',
              ]
  var showData = document.getElementById('showData');
  var result = document.getElementById('result');
  var asetData  = curentData[j];
  //showData.innerHTML = JSON.stringify(curentData[j]);
  console.log(curentData[j]);


  for (var k = 0; k < arrVar.length; k++) {
    var target = document.getElementById(arrVar[k]);
    console.log(arrVar[k]);
    console.log(target);

    var obPr = arrVar[k];
    if(arrVar[k]=='foto'){
      target.src = 'http://simsetgis.kendarikota.go.id/upload/kib_gedung/foto/'+ asetData[obPr][0];
    }else{
      target.innerHTML = asetData[obPr];
    }
  }

  showData.classList.remove("slideOutLeft");
  result.classList.add("slideOutRight");
  setTimeout(function(){
    showData.style.display = 'flex';
    result.style.display = 'none';
  },600);

}
function showPage() {

  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("bg").style.display = "block";
}

var dataDon = data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor: ['#F1648D', '#F6D351', '#62A2EE']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Tanah',
        'Gedung',
        'Jalan'
    ]
};

window.onload = function() {
  setTimeout(showPage(), 3000);
  var ctxDoughnut = document.getElementById('canvasDoughnut').getContext('2d');
  var myDoughnutChart = new Chart(ctxDoughnut, {
      type: 'doughnut',
      data: dataDon,
      options: {
        responsive: true,
        legend: {
          position: 'right',
        },
      }
  });

};
