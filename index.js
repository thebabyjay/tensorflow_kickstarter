// Define a model for linear regression.
const model = tf.sequential({
    layers: [
        tf.layers.dense({ inputShape: [1], units: 1 })
    ]
});
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

const arrTests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrLabels = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// Generate some synthetic data for training.
const xs = tf.tensor1d(arrTests);
const ys = tf.tensor1d(arrLabels);

// const xs = tf.tensor1d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const ys = tf.tensor1d([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);

// const xs = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 1]);
// const ys = tf.tensor2d([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [10, 1]);

// Train the model using the data.
model.fit(xs, ys, {epochs: 10}).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  const prediction = model.predict(tf.tensor2d([121], [1, 1])).print();
  // Open the browser devtools to see the output
});