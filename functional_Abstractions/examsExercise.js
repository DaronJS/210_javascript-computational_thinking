

function generateClassRecordSummary(scores) {
  var recordSummary = {studentsGrades: [], exams: []};

  recordSummary.studentsGrades = Object.keys(scores).map(function (student) {
    var averageExamScore = findAverageExamScore(scores[student].scores.exams);
    var exercisesScore = scores[student].scores.exercises.reduce(sum);
    var finalPercentGrade = findFinalPercentGrade(averageExamScore, exercisesScore);
    var letterGrade = findLetterGrade(finalPercentGrade);
    return String(finalPercentGrade) + ' (' + letterGrade + ')';               
  });

 recordSummary.exams = createExamsInfo(scores)

 return recordSummary;
}

function createExamsInfo(scores) {
  var examsArray = [{}, {}, {}, {}];
  var minimums = [[100], [100], [100], [100]];
  var maximums = [[0], [0], [0], [0]];
  var averages = [[], [], [], []];

  Object.keys(scores).forEach(function (student) {
    scores[student].scores.exams.forEach(function (examScore, index) {
      if (examScore < minimums[index]) {
        minimums[index] = examScore;
      }

      if (examScore > maximums[index]) {
        maximums[index] = examScore;
      }

      averages[index].push(examScore);
    });
  });

  averages = averages.map(function(examScores) {
    return examScores.reduce(sum) / examScores.length;
  });

  return examsArray.map(function (infoObj, index) {
    return { average: averages[index], maximum: maximums[index], minimum: minimums[index] }
  })
}

function findLetterGrade(score) {
  if (score > 92) {
    return 'A';
  }else if (score > 84) {
    return 'B';
  }else if (score > 76) {
    return 'C';
  }else if (score > 68) {
    return 'D';
  }else {
    return 'F';
  };
}

function findFinalPercentGrade(averageExamScore, exercisesScore) {
  return Math.round((averageExamScore * 0.65) + (exercisesScore * 0.35));
}

function sum(num1, num2) {
  return num1 + num2;
}

function findAverageExamScore(examScores) {
  return (examScores.reduce(sum)) / 4;
}

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

