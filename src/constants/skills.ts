type SkillSet = {
  items: Array<{ href: string; name: string }>;
  title: string;
};

export const skills: SkillSet[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'C++',
        href: 'https://isocpp.org/',
      },
      {
        name: 'C#',
        href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Java',
        href: 'https://www.java.com/',
      },
      {
        name: 'Kotlin',
        href: 'https://kotlinlang.org/',
      },
      {
        name: 'Luau',
        href: 'https://luau.org/',
      },
    ],
  },
  {
    title: 'Game Engines',
    items: [
      {
        name: 'Unity',
        href: 'https://unity.com/',
      },
      {
        name: 'Unreal Engine',
        href: 'https://www.unrealengine.com/',
      },
    ],
  },
  {
    title: '3D Modeling',
    items: [
      {
        name: 'Blender',
        href: 'https://www.blender.org/',
      },
      {
        name: 'Fusion 360',
        href: 'https://www.autodesk.com/products/fusion-360/overview',
      },
      {
        name: 'Reality Capture',
        href: 'https://www.capturingreality.com/',
      },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      {
        name: 'PyTorch',
        href: 'https://pytorch.org/',
      },
      {
        name: 'TensorFlow',
        href: 'https://www.tensorflow.org/',
      },
      {
        name: 'Keras',
        href: 'https://keras.io/',
      },
      {
        name: 'Scikit-learn',
        href: 'https://scikit-learn.org/',
      },
      {
        name: 'pandas',
        href: 'https://pandas.pydata.org/',
      },
      {
        name: 'NumPy',
        href: 'https://numpy.org/',
      },
    ],
  },
  {
    title: 'Frontend',
    items: [
      {
        name: 'React',
        href: 'https://reactjs.org/',
      },
      {
        name: 'React Native',
        href: 'https://reactnative.dev/',
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'Native Android',
        href: 'https://developer.android.com/',
      },
    ],
  },
  {
    title: 'Backend',
    items: [
      {
        name: 'gRPC',
        href: 'https://grpc.io/',
      },
      {
        name: 'REST',
        href: 'https://restfulapi.net/',
      },
      {
        name: 'GraphQL',
        href: 'https://graphql.org/',
      },
      {
        name: 'Django',
        href: 'https://www.djangoproject.com/',
      },
      {
        name: 'Flask',
        href: 'https://flask.palletsprojects.com/',
      },
      {
        name: 'Kafka',
        href: 'https://kafka.apache.org/',
      },
      {
        name: 'OpenSearch',
        href: 'https://opensearch.org/',
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
      },
      {
        name: 'SQL',
        href: 'https://en.wikipedia.org/wiki/SQL',
      },
      {
        name: 'DynamoDB',
        href: 'https://aws.amazon.com/dynamodb/',
      },
    ],
  },
];
