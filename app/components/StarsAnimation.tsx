'use client';

export default function StarsAnimation() {
  return (
    <div className="absolute inset-0">
      {[
        { top: 55.3, left: 32.7, delay: 1.12 },
        { top: 73.0, left: 27.6, delay: 1.20 },
        { top: 24.8, left: 26.0, delay: 0.18 },
        { top: 98.8, left: 51.7, delay: 0.13 },
        { top: 74.7, left: 93.0, delay: 0.31 },
        { top: 72.3, left: 0.65, delay: 1.38 },
        { top: 12.7, left: 63.5, delay: 0.75 },
        { top: 7.71, left: 0.06, delay: 1.37 },
        { top: 3.72, left: 18.4, delay: 1.07 },
        { top: 95.0, left: 51.9, delay: 1.07 },
        { top: 68.5, left: 90.2, delay: 1.05 },
        { top: 51.0, left: 98.8, delay: 0.57 },
        { top: 3.33, left: 22.6, delay: 0.21 },
        { top: 36.0, left: 0.66, delay: 1.52 },
        { top: 83.5, left: 36.4, delay: 1.54 },
        { top: 98.2, left: 20.3, delay: 0.68 },
        { top: 17.4, left: 32.0, delay: 0.47 },
        { top: 0.48, left: 33.5, delay: 1.69 },
        { top: 52.4, left: 52.8, delay: 0.45 },
        { top: 67.5, left: 8.59, delay: 0.87 },
        { top: 98.4, left: 97.4, delay: 1.13 },
        { top: 25.3, left: 30.3, delay: 0.98 },
        { top: 87.2, left: 18.6, delay: 1.64 },
        { top: 50.7, left: 3.25, delay: 0.35 },
        { top: 43.5, left: 12.9, delay: 0.11 },
        { top: 28.4, left: 71.7, delay: 1.15 },
        { top: 85.2, left: 9.30, delay: 1.48 },
        { top: 45.1, left: 65.1, delay: 0.59 },
        { top: 99.8, left: 24.4, delay: 0.84 },
        { top: 71.3, left: 50.6, delay: 1.55 },
        { top: 27.8, left: 36.7, delay: 1.51 },
        { top: 72.6, left: 84.4, delay: 0.50 },
        { top: 45.9, left: 57.2, delay: 1.88 },
        { top: 20.9, left: 12.4, delay: 0.81 },
        { top: 77.7, left: 28.1, delay: 0.42 },
        { top: 92.3, left: 32.3, delay: 0.92 },
        { top: 11.1, left: 82.1, delay: 1.78 },
        { top: 36.9, left: 18.6, delay: 0.97 },
        { top: 50.4, left: 64.7, delay: 0.64 },
        { top: 47.8, left: 91.5, delay: 0.69 },
        { top: 96.7, left: 49.5, delay: 0.75 },
        { top: 12.6, left: 43.4, delay: 1.13 },
        { top: 1.78, left: 40.0, delay: 0.18 },
        { top: 13.7, left: 46.4, delay: 1.14 },
        { top: 94.2, left: 66.2, delay: 0.92 },
        { top: 11.9, left: 11.2, delay: 0.32 },
        { top: 36.4, left: 59.8, delay: 0.20 },
        { top: 41.8, left: 51.4, delay: 1.28 },
        { top: 0.28, left: 80.9, delay: 0.36 },
        { top: 2.29, left: 42.9, delay: 0.35 }
      ].map((star, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
} 