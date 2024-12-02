const ctx = document.getElementById('barChart');

        new Chart(ctx, {
            type: 'bar',  // Bar chart
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                    {
                        label: "Votes",
                        data: [12, 9, 3],
                        backgroundColor: ["#F8C8D1", "#F7A8B8", "#FF66B2"],  // pink shades
                    }
                ]
            }
        });