const ctx = document.getElementById('barChart');

        new Chart(ctx, {
            type: 'bar',  // Bar chart
            data: {
                labels: ["lightPink", "mediumPink", "darkPink","mediumDarkPink"],
                datasets: [
                    {
                        label: "Votes",
                        data: [12, 9, 3, 6],
                        backgroundColor: ["#F8C8D1", "#F7A8B8", "#FF66B2", "#FF99CC"],  // pink shades
                        borderColor: ["#F4A6B3", "#F18C9E", "#FF3385", "#FF66B2"],
                        borderWidth: 5
                    }
                ]
            }
        });