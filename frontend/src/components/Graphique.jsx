import { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Enregistrer les plugins requis
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

export default function Graphique({ tasks }) {
    const canvasRef = useRef(null);
    const chartRef = useRef(null); // pour stocker l'instance du chart

    useEffect(() => {
        if (!tasks) return;

        const completed = tasks.filter(t => t.is_completed === 1).length;
        const notCompleted = tasks.filter(t => t.is_completed === 0).length;

        // Si un graphique existait déjà → on le détruit
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Créer un nouveau graphique
        chartRef.current = new Chart(canvasRef.current, {
            type: "doughnut",
            data: {
                labels: ["Complétées", "Non complétées"],
                datasets: [
                    {
                        data: [completed, notCompleted],
                        backgroundColor: ["#96CDFF", "#DBBADD"],
                        borderWidth: 2,
                        borderColor: "#ffffff",
                        hoverOffset: 10
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 15,
                            font: {
                                size: 14,
                                family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                            },
                            usePointStyle: true,
                            pointStyle: "circle"
                        }
                    },
                    title: {
                        display: true,
                        text: "Statistiques des tâches",
                        font: {
                            size: 18,
                            weight: "bold",
                            family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        },
                        color: "#212529"
                    },
                    tooltip: {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        padding: 12,
                        bodyFont: { size: 14 },
                        callbacks: {
                            label: function (context) {
                                const label = context.label || "";
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage =
                                    total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1000,
                    easing: "easeInOutQuart"
                }
            }
        });

        // Cleanup : à chaque re-render ou unmount → détruire l'ancien graphique
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [tasks]);

    return (
        <div className="">
            <canvas
                ref={canvasRef}
                id="todo-stats__chart"
                className="min-w-150 "
            ></canvas>

        </div>
    );
}
