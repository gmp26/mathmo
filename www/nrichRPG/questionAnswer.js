mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('mobl');

nrichRPG.questionAnswer.QA = persistence.define('nrichRPG__questionAnswer__QA', {
  'number': 'INT',
  'topic': 'VARCHAR(255)',
  'question': 'VARCHAR(255)',
  'answer': 'VARCHAR(255)',
  'done': 'BOOL',
  'correct': 'BOOL',
  'plotData': 'VARCHAR(255)'
});



nrichRPG.questionAnswer.TopicScore = persistence.define('nrichRPG__questionAnswer__TopicScore', {
  'topic': 'VARCHAR(255)',
  'agree': 'INT',
  'disagree': 'INT'
});


