import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export interface DadosGraphic {
  label: string;
  data: number[];
  backgroundColor?: string[] | string;
}

export interface GraphicBarProps {
  labels: string[];
  arrayDados: DadosGraphic[];
}

export function GraphicBar({ arrayDados, labels }: GraphicBarProps) {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors,
  );

  const styleFontsChart = {
    size: 12,
    weight: 700,
    lineHeight: 1.2,
    family: "'Roboto', sans-serif",
  };

  const StyleColorFontsChart = '#4D6E5A';

  return (
    <Bar
      className=""
      data={{
        labels,
        datasets: arrayDados,
      }}
      style={{
        width: '100%',
        maxHeight: '425px',
      }}
      updateMode="resize"
      options={{
        aspectRatio: 1.2,
        datasets: {
          bar: {
            borderRadius: 4,
            barThickness: 'flex',
            barPercentage: 0.8,
            categoryPercentage: 0.5,
            maxBarThickness: 30,
          },
        },
        scales: {
          y: {
            ticks: {
              font: styleFontsChart,
              color: StyleColorFontsChart,
            },
            grid: {
              display: true,
              color: '#E2E8F0',
              drawTicks: false,
            },
          },
          x: {
            display: true,
            grid: {
              drawTicks: true,
              drawOnChartArea: false,
            },
            ticks: {
              font: styleFontsChart,
              color: StyleColorFontsChart,
            },
          },
        },
        responsive: true,
        plugins: {
          legend: {
            align: 'center',
            position: 'bottom',
            labels: {
              font: styleFontsChart,
              color: StyleColorFontsChart,
            },
          },
          tooltip: {
            displayColors: true,
            position: 'average',
            callbacks: {
              label: (tooltipItem) =>
                `Valor de ${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`,
            },
          },
        },
      }}
    />
  );
}
