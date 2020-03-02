// const bayes = require('classificator');
// const classifier = bayes();

// classifier.learn(', bet here, free money, do you want to bet', 'gambling')
// classifier.learn('Buy my free viagra pill and get rich!', 'spam')
// classifier.learn('I really hate dust and annoying cats', 'negative')
// classifier.learn('LOL this sucks so hard', 'troll')

// classifier.categorize("Place your bet to win easy money"); => {
//         likelihoods: [
//           {
//             category: 'gambling',
//             logLikelihood: -17.241944258040537,
//             logProba: -0.6196197927020783,
//             proba: 0.538149006882628
//           }, {
//             category: 'positive',
//             logLikelihood: -17.93509143860048,
//             logProba: -1.312766973262022,
//             proba: 0.26907450344131445
//           }, {
//             category: 'spam',
//             logLikelihood: -18.26854831109384,
//             logProba: -1.646223845755383,
//             proba: 0.19277648967605832 }
//         ],
//       predictedCategory: 'negative'
//     //     let stateJson = classifier.toJson()
//     //   let revivedClassifier = bayes.fromJson(stateJson)
//       }
// var bayes = require('bayes')

// var classifier = bayes()

// // teach it positive phrases

// classifier.learn('bet here, free money, do you want to bet', 'gambling')
// classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')

// // teach it a negative phrase

//  classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative')

// // now ask it to categorize a document it has never seen before

//  classifier.categorize('Place your bet to win easy money')
// // => 'positive'

var natural = require('natural');
var classifier = new natural.BayesClassifier();

//Training Data
classifier.addDocument("place a bet?", "gambling");
classifier.addDocument("make free money?", "gambling");
classifier.addDocument("Get the best odds on your horse racing?", "gambling");
classifier.addDocument("what do you want xx", "explicit");
classifier.addDocument("where are you going x", "explicit");
classifier.addDocument("lets hang out xx", "explicit");

//Train
classifier.train();

//Apply and Predict
console.log(classifier.classify("make me some free money? "));

