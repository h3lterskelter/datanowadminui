document.addEventListener('DOMContentLoaded', function () {

    const createChart = (elementId, chartConfig) => {
        const ctx = document.getElementById(elementId);
        if (ctx) {
            new Chart(ctx, chartConfig);
        }
    };

    createChart('enrollmentTrendsChart', {
        type: 'line',
        data: {
            labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Student Enrollments',
                data: [55, 170, 90, 210, 150],
                fill: true,
                backgroundColor: 'rgba(111, 66, 193, 0.2)',
                borderColor: 'rgba(111, 66, 193, 1)',
                tension: 0.4,
                pointBackgroundColor: 'rgba(111, 66, 193, 1)',
                pointBorderColor: '#fff',
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(111, 66, 193, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 55
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    createChart('courseCategoriesChart', {
        type: 'doughnut',
        data: {
            labels: ['Microsoft SQL', 'Python', 'Power BI'],
            datasets: [{
                data: [47, 23, 30],
                backgroundColor: ['#4e73df', '#f6c23e', '#e74a3b'],
                hoverOffset: 4,
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
             plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        boxWidth: 20
                    }
                }
            }
        }
    });


    createChart('revenueOvertimeChart', {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue',
                data: [11500, 54000, 0, 0],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(201, 203, 207, 0.6)',
                    'rgba(201, 203, 207, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
             responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                             if (value === 0) return '0';
                             return value;
                        }
                    }
                }
            }
        }
    });

    createChart('topCoursesChart', {
        type: 'bar',
        data: {
            labels: ['Data Analytics with Microsoft SQL', 'Data Analytics with Power BI', 'Data Analytics with Python'],
            datasets: [{
                label: 'Performance',
                data: [103, 66, 50],
                backgroundColor: [
                    '#4e73df',
                     '#e74a3b',
                    '#f6c23e'
                ],
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

});
