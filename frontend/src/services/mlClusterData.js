export const mlClusterData = {
  'clusters': [
    {
      'cluster_id': 0,
      'label': 'Fast Active Learners',
      'description': 'Pengguna dengan kecepatan belajar tinggi, aktif, dan memiliki volume aktivitas yang besar.',
      'feature_summary': {
        'average_values': {
          'learning_speed': 4081.1893825339184,
          'consistency_score': 22.51913424958829,
          'persistence_score': 178.0,
          'activity_score': 2205.0,
          'completion_score': 19.0
        },
        'top_features': [
          'learning_speed',
          'activity_score'
        ],
        'low_features': [
          'consistency_score',
          'completion_score'
        ],
        'ranking': [
          'learning_speed',
          'activity_score',
          'persistence_score',
          'consistency_score',
          'completion_score'
        ]
      }
    },
    {
      'cluster_id': 1,
      'label': 'Consistent Learners',
      'description': 'Pengguna yang memiliki ritme belajar stabil, dengan kemampuan menyelesaikan materi secara teratur.',
      'feature_summary': {
        'average_values': {
          'learning_speed': -37668.320992467045,
          'consistency_score': 15.22359781865284,
          'persistence_score': 81.97627118644068,
          'activity_score': 739.2135593220339,
          'completion_score': 6.093220338983051
        },
        'top_features': [
          'activity_score',
          'persistence_score'
        ],
        'low_features': [
          'completion_score',
          'learning_speed'
        ],
        'ranking': [
          'activity_score',
          'persistence_score',
          'consistency_score',
          'completion_score',
          'learning_speed'
        ]
      }
    },
    {
      'cluster_id': 2,
      'label': 'Reflective Learners',
      'description': 'Pengguna yang belajar secara mendalam, sering mengulang materi, dan menunjukkan konsistensi tinggi.',
      'feature_summary': {
        'average_values': {
          'learning_speed': 34354.31807521783,
          'consistency_score': 25.974695876384143,
          'persistence_score': 336.0,
          'activity_score': 3069.0,
          'completion_score': 27.0
        },
        'top_features': [
          'learning_speed',
          'activity_score'
        ],
        'low_features': [
          'completion_score',
          'consistency_score'
        ],
        'ranking': [
          'learning_speed',
          'activity_score',
          'persistence_score',
          'completion_score',
          'consistency_score'
        ]
      }
    }
  ]
};