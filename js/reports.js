// Tab handling
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });

    // Initialize all charts
    initializeAcademicCharts();
    initializeDisciplineCharts();
    initializeFinanceCharts();
    initializeActivityCharts();
});

// Academic Charts
function initializeAcademicCharts() {
    // Grade Distribution Chart
    const gradeCtx = document.getElementById('gradeDistributionChart').getContext('2d');
    new Chart(gradeCtx, {
        type: 'bar',
        data: {
            labels: ['Toán', 'Vật lý', 'Hóa học', 'Ngữ văn', 'Tiếng Anh', 'Lịch sử'],
            datasets: [{
                label: 'Điểm trung bình',
                data: [8.2, 7.8, 7.5, 7.9, 8.1, 7.7],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    // Class Performance Chart
    const classCtx = document.getElementById('classPerformanceChart').getContext('2d');
    new Chart(classCtx, {
        type: 'bar',
        data: {
            labels: ['10A1', '10A2', '11A1', '11A2', '12A1', '12A2'],
            datasets: [{
                label: 'Điểm trung bình',
                data: [8.5, 8.2, 7.9, 7.8, 8.3, 8.1],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    // Subject Performance Chart
    const subjectCtx = document.getElementById('subjectPerformanceChart').getContext('2d');
    new Chart(subjectCtx, {
        type: 'line',
        data: {
            labels: ['HK1', 'HK2', 'HK1', 'HK2'],
            datasets: [{
                label: 'Toán',
                data: [7.8, 8.0, 8.2, 8.5],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }, {
                label: 'Vật lý',
                data: [7.5, 7.7, 7.8, 8.0],
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }, {
                label: 'Hóa học',
                data: [7.2, 7.4, 7.5, 7.8],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    // Grade Trend Chart
    const trendCtx = document.getElementById('gradeTrendChart').getContext('2d');
    new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: ['Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2'],
            datasets: [{
                label: 'Điểm trung bình',
                data: [7.5, 7.7, 7.8, 8.0, 8.2, 8.3],
                borderColor: 'rgb(153, 102, 255)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}

// Discipline Charts
function initializeDisciplineCharts() {
    // Violation Types Chart
    const violationCtx = document.getElementById('violationTypesChart').getContext('2d');
    new Chart(violationCtx, {
        type: 'pie',
        data: {
            labels: ['Đi học muộn', 'Không làm bài tập', 'Vi phạm nội quy', 'Đánh nhau', 'Khác'],
            datasets: [{
                data: [40, 25, 20, 10, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Monthly Violations Chart
    const monthlyCtx = document.getElementById('monthlyViolationsChart').getContext('2d');
    new Chart(monthlyCtx, {
        type: 'bar',
        data: {
            labels: ['Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2'],
            datasets: [{
                label: 'Số vi phạm',
                data: [15, 12, 10, 8, 7, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Class Violations Chart
    const classViolationCtx = document.getElementById('classViolationsChart').getContext('2d');
    new Chart(classViolationCtx, {
        type: 'bar',
        data: {
            labels: ['10A1', '10A2', '11A1', '11A2', '12A1', '12A2'],
            datasets: [{
                label: 'Số vi phạm',
                data: [5, 8, 6, 7, 4, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Reward Types Chart
    const rewardCtx = document.getElementById('rewardTypesChart').getContext('2d');
    new Chart(rewardCtx, {
        type: 'pie',
        data: {
            labels: ['Học sinh giỏi', 'Thành tích xuất sắc', 'Hoạt động ngoại khóa', 'Thi đua', 'Khác'],
            datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Finance Charts
function initializeFinanceCharts() {
    // Income vs Expenses Chart
    const incomeExpensesCtx = document.getElementById('incomeExpensesChart').getContext('2d');
    new Chart(incomeExpensesCtx, {
        type: 'line',
        data: {
            labels: ['Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2'],
            datasets: [{
                label: 'Thu',
                data: [150000000, 145000000, 148000000, 152000000, 155000000, 150000000],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }, {
                label: 'Chi',
                data: [120000000, 125000000, 130000000, 135000000, 140000000, 138000000],
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Payment Status Chart
    const paymentCtx = document.getElementById('paymentStatusChart').getContext('2d');
    new Chart(paymentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Đã đóng', 'Chưa đóng', 'Quá hạn'],
            datasets: [{
                data: [85, 10, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Expense Categories Chart
    const expenseCtx = document.getElementById('expenseCategoriesChart').getContext('2d');
    new Chart(expenseCtx, {
        type: 'pie',
        data: {
            labels: ['Lương giáo viên', 'Cơ sở vật chất', 'Hoạt động', 'Dụng cụ học tập', 'Khác'],
            datasets: [{
                data: [50, 20, 15, 10, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Monthly Balance Chart
    const balanceCtx = document.getElementById('monthlyBalanceChart').getContext('2d');
    new Chart(balanceCtx, {
        type: 'bar',
        data: {
            labels: ['Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2'],
            datasets: [{
                label: 'Số dư',
                data: [30000000, 25000000, 20000000, 15000000, 10000000, 5000000],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Activity Charts
function initializeActivityCharts() {
    // Activity Types Chart
    const activityTypesCtx = document.getElementById('activityTypesChart').getContext('2d');
    new Chart(activityTypesCtx, {
        type: 'pie',
        data: {
            labels: ['Văn nghệ', 'Thể thao', 'Học thuật', 'Từ thiện', 'Khác'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Participation Rate Chart
    const participationCtx = document.getElementById('participationRateChart').getContext('2d');
    new Chart(participationCtx, {
        type: 'bar',
        data: {
            labels: ['Văn nghệ', 'Thể thao', 'Học thuật', 'Từ thiện', 'Khác'],
            datasets: [{
                label: 'Tỷ lệ tham gia (%)',
                data: [85, 75, 60, 80, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Monthly Activities Chart
    const monthlyActivitiesCtx = document.getElementById('monthlyActivitiesChart').getContext('2d');
    new Chart(monthlyActivitiesCtx, {
        type: 'line',
        data: {
            labels: ['Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2'],
            datasets: [{
                label: 'Số hoạt động',
                data: [5, 4, 6, 3, 4, 5],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Class Participation Chart
    const classParticipationCtx = document.getElementById('classParticipationChart').getContext('2d');
    new Chart(classParticipationCtx, {
        type: 'bar',
        data: {
            labels: ['10A1', '10A2', '11A1', '11A2', '12A1', '12A2'],
            datasets: [{
                label: 'Số học sinh tham gia',
                data: [40, 35, 38, 32, 30, 28],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgb(153, 102, 255)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Export report function
function exportReport() {
    // Add your export logic here
    console.log('Exporting report...');
} 