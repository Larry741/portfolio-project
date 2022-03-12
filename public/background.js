const width = document.documentElement.clientWidth;
const height = document.body.clientHeight;

console.log(width, height)

const radialGradient =
  (radius) =>
  ({ centroid, xScale }) => {
    const distanceFromCenter = Math.sqrt(
      Math.pow(width / 2 - centroid.x, 2) + Math.pow(height / 2 - centroid.y, 2)
    );
    return xScale(distanceFromCenter / radius);
  };
// figure out the gradient radius required to cover the image dimensions:
const gradientRadius = Math.sqrt(
  Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
);

const pattern = trianglify({
  xColors: ["#38495a", "#1b2735", "#090a0f"],
  yColors: "match",
  width: width,
  height: height,
  strokeWidth: 30,
  colorFunction: radialGradient(gradientRadius),
  cellSize: 75,
});
document.body.appendChild(pattern.toCanvas());
