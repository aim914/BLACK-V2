const generateRandomPrediction = () => {
    // Define categories
    const categories = ['Small', 'Big'];
    
    // Count occurrences of each category in recent history
    const recentHistory = predictionHistory.slice(0, 100); // Check last 100 results for trend
    const categoryCount = { 'Small': 0, 'Big': 0 };

    recentHistory.forEach(entry => {
        const actualCategory = categorizeNumber(Number(entry.actualNumber));
        if (actualCategory in categoryCount) {
            categoryCount[actualCategory]++;
        }
    });

    // Calculate probabilities based on past results
    const total = categoryCount['Small'] + categoryCount['Big'];
    const smallProbability = categoryCount['Small'] / total;
    const bigProbability = categoryCount['Big'] / total;

    // Random number generation weighted by probability
    const randomValue = Math.random();
    const predictedCategory = randomValue < smallProbability ? 'Small' : 'Big';
    
    // Generate a number in the predicted category range
    let predictedNumber;
    if (predictedCategory === 'Small') {
        predictedNumber = Math.floor(Math.random() * 5); // 0 to 4
    } else {
        predictedNumber = Math.floor(Math.random() * 5) + 5; // 5 to 9
    }

    return { number: predictedNumber, category: predictedCategory };
};
