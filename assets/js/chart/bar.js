// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: ["January", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#e8c3b9", "#c45850"],
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
                  randomScalingFactor(),
                ]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: false,
            text: 'SPPD Grafik Tahun 2019'
        }
    }
});

// Bar chart
new Chart(document.getElementById("bar-chart2"), {
    type: 'bar',
    data: {
        labels: ["January", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#e8c3b9", "#c45850"],
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
                  randomScalingFactor(),
                ]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: false,
            text: 'Penggunaan Anggaran Tahun 2019'
        }
    }
});

// Bar chart
new Chart(document.getElementById("bar-chart3"), {
    type: 'bar',
    data: {
        labels: ["January", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#e8c3b9", "#c45850"],
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
                  randomScalingFactor(),
                ]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: false,
            text: 'Penggunaan Anggaran Tahun 2019'
        }
    }
});

// Bar chart
new Chart(document.getElementById("bar-chart4"), {
    type: 'bar',
    data: {
        labels: ["January", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#e8c3b9", "#c45850"],
                data: [2478, 5267, 734, 784, 433, 2478, 5267, 734, 784, 433, 784, 433]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: false,
            text: 'Penggunaan Anggaran Tahun 2019'
        }
    }
});
