
var listTweet = new Vue({
  el: '#listTweet',
  data: {
    search: '',
    tweets: tweetData
  },
  computed: {
    filteredList() {
      return this.tweets.filter(tweet => {
        return tweet.tweet.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})
console.log(newsData);
var listHotnews = new Vue({
  el: '#listHotnews',
  data: {
    newss: newsData
  }
});



function showPage() {

  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("bg").style.display = "block";
}

var time = document.getElementById('hariWaktu');
setInterval(function(){
  time.innerHTML = moment().format('dddd, DD MMMM  YYYY, h:mm:ss');
}), 1000;


var config = {
  type: 'line',
  data: {
    labels: [moment().format('hh:mm'),moment().format('hh:mm'),moment().format('hh:mm'),moment().format('hh:mm'),moment().format('hh:mm'),moment().format('hh:mm'), moment().format('hh:mm'), moment().format('hh:mm'), moment().format('hh:mm'), moment().format('hh:mm'), moment().format('hh:mm'), moment().format('hh:mm')],
    datasets: [{
      label: 'Tweet Baru',
      backgroundColor: 'rgba(128, 215, 255, 0.45)',
      borderColor: '#80d6ff',
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      fill: true,
    }, {
      label: 'Berita Baru',
      fill: true,
      backgroundColor: 'rgba(255, 117, 168, 0.45)',
      borderColor: '#ff77a9',
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
    }]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: 'Chart.js Line Chart'
    },
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Value'
        }
      }]
    }
  }
};

window.onload = function() {
  showPage();
  var ctx = document.getElementById('trendChart').getContext('2d');
  window.myLine = new Chart(ctx, config);
};

var colorNames = Object.keys(window.chartColors);

/*
Data upadte per 10detik
data terupdate random untuk kedua dataset

*/
setInterval(function(){
if (config.data.datasets.length > 0) {
var time = moment().format('hh:mm');
config.data.labels.push(time);
config.data.datasets.forEach(function(dataset) {
  dataset.data.push(randomScalingFactor());
});

if(config.data.labels.length >=10 ){
  config.data.labels.shift();
  config.data.datasets.forEach(function(dataset) {
    dataset.data.shift();
  });
}
window.myLine.update();
var countTweet = document.getElementById('countTweet');
var countBerita = document.getElementById('countBerita');
var Tweet = parseInt(countTweet.innerHTML) + randomScalingFactor();
var Berita = parseInt(countBerita.innerHTML) + randomScalingFactor();
countTweet.innerHTML = Tweet;
countBerita.innerHTML =Berita;
}
} ,10000);
